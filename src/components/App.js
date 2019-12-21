import React from 'react';
import {Canvas} from 'react-three-fiber';
import {Scene} from './Scene';
import {OrbitControl} from './OrbitControl';

export const App = () => {
    return (
      <Canvas className="main" shadowMap>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
        <Scene/>
        <OrbitControl/>
      </Canvas>
    )
}
