import React, {useState, useEffect} from 'react';
import {useThree} from 'react-three-fiber';
import {Provider} from '../hooks/useCannon';
// import {Plane} from './Plane';
import {Box} from './Box';

const roomHasItem = (room, item) => room.findIndex(child => (item[0] === child[0] && item[1] === child[1] && item[2] === child[2])) > -1;

const indexOfRoomHasItem = (rooms, item) => rooms.findIndex(room => roomHasItem(room, item));

const checkItem = (data, r, c, d, room) => !roomHasItem(room, [r, c, d]) && data[r][c][d] === 1 && !roomHasItem(room, [r, c, d]) && room.push([r, c, d]);

const expandCheck = (data, r, c, d, room) => {
	(r > 0) && checkItem(data, r - 1, c, d, room) && expandCheck(data, r - 1, c, d, room);
    (r < data.length - 1) && checkItem(data, r + 1, c, d, room) && expandCheck(data, r + 1, c, d, room);
    
	(c > 0) && checkItem(data, r, c - 1, d, room) && expandCheck(data, r, c - 1, d, room);
    (c < data[0].length - 1) && checkItem(data, r, c + 1, d, room) && expandCheck(data, r, c + 1, d, room);
    
	(d > 0) && checkItem(data, r, c, d - 1, room) && expandCheck(data, r, c, d - 1, room);
    (d < data[0][0].length - 1) && checkItem(data, r, c, d + 1, room) && expandCheck(data, r, c, d + 1, room);
    
	return room
}


const max = 4;
const data = [];

for(let i = 0; i < max; i ++)
{
    data[i] = [];
    for(let j = 0; j < max; j ++)
    {
        data[i][j] = [];
        for(let k = 0; k < max; k ++)
        {
            data[i][j][k] = (Math.floor(Math.random() * 100) % 3 === 1) ? 1 : 0;
        }
    }
}

const rooms = []
for(let r = 0; r < data.length; r++) 
    for(let c = 0; c < data[0].length; c++) 
        for(let d = 0; d < data[0][0].length; d++) 
            (indexOfRoomHasItem(rooms, [r, c, d]) === -1) && data[r][c][d] === 1 && rooms.push(expandCheck(data, r, c, d, [[r, c, d]]))

const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);

const roomColors = []
for(let i = 0; i < rooms.length; i++)
{
    roomColors.push(randomColor())
}

// console.log('Total rooms = ' + rooms.length)
// console.log('Total rooms = ' + rooms.length, rooms, roomColors)

document.title = rooms.length + ' room' + (rooms.length === 1 ? '' : '(s)')


export const Scene = () => {
    // const [showPlane, set] = useState(true)

    // When React removes (unmounts) the upper plane after 5 sec, objects should drop ...
    // This may seem like magic, but as the plane unmounts it removes itself from cannon and that's that

    // useEffect(() => void setTimeout(() => set(false), 5000), [])


    const {camera} = useThree();

    camera.fov = 45;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.near = 0.1;
    camera.far = 1000;
  
    camera.up.set(0, 0, 1);
    camera.position.set(6, 7, 12);
    

    

    const boxes = [];
    for(let i = 0; i < data.length; i ++)
    {
        for(let j = 0; j < data[i].length; j ++)
        {
            for(let k = 0; k < data[i][j].length; k ++)
            {
                const roomIndex = indexOfRoomHasItem(rooms, [i, j, k])

                boxes.push(<Box 
                    // onClick={e => {
                    //     console.log('xx')
                    // }} 
                    key={'' + i + j + k} 
                    position={[i, j, k]} 
                    size={0.98} 
                    color={roomColors[roomIndex]}
                    opacity={data[i][j][k] ? 1 : 0.1} 
                />)
            }
        }
    }


    return (
        <Provider>
          {/* <Plane position={[0, 0, 3]} /> */}
          {/* {showPlane && <Plane position={[0, 0, 0]} />} */}
          {/* <Box position={[1, 0, 1]} />
          <Box position={[2, 1, 5]} />
          <Box position={[0, 0, 6]} />
          <Box position={[-1, 1, 8]} />
          <Box position={[-2, 2, 13]} />
          <Box position={[2, -1, 13]} /> */}
          {/* {!showPlane && <Box position={[0.5, 1.0, 20]} />} */}
          {boxes}
        </Provider>
    )
}
