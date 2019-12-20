import React, {useState, useEffect} from 'react';
import {useThree} from 'react-three-fiber';
import {Provider} from '../hooks/useCannon';
import {Plane} from './Plane';
import {Box} from './Box';

export const Scene = () => {
    const [showPlane, set] = useState(true)

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
    const max = 6;

    for(let i = 0; i < max; i ++)
    {
        for(let j = 0; j < max; j ++)
        {
            for(let k = 0; k < max; k ++)
            {
                const opacity = Math.floor(Math.random() * 100) % 3 ? 0 : 1
                boxes.push(<Box key={'' + i + j + k} position={[i, j, k]} size={0.98} opacity={opacity} />)
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
