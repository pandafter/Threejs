import { Suspense } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  
  

  return (
    <Float speed={1.75} rotationIntensity={0} floatIntensity={0}>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#2E2E2E'
          polygonOffset
          polygonOffsetFactor={0}
          flatShading
          side={DoubleSide}
          
        />
        <Decal
         
          
          autorotateSteps={1} auto
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.3}
          map={decal}
          flatShading
          
        />
        <Decal
         
          
         autorotateSteps={1} auto
         position={[0, 0, -1]}
         rotation={[2 * Math.PI, 0, 6.25]}
         scale={1.3}
         map={decal}
         flatShading
         
       />
       
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={10}
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;