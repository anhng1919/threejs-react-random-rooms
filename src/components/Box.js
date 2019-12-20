import React from 'react';
import {useCannon} from '../hooks/useCannon';
import * as CANNON from 'cannon';

export const Box = ({ position, size, opacity }) => {
  // Register box as a physics body with mass

//   const ref = useCannon({ mass: 100000 }, body => {
//     body.addShape(new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0,5)))
//     body.position.set(...position)
//   })
  
  return (
    <mesh 
        position={position}
        alp
        // ref={ref} 
        castShadow 
        receiveShadow>
      <boxGeometry attach="geometry" args={[size, size, size]} />
      {/* <meshStandardMaterial attach="material" opacity={opacity} transparent /> */}
      <meshNormalMaterial attach="material" opacity={opacity} transparent />
    </mesh>
  )
}