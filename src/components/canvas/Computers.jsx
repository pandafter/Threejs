import { Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ( {isMobile} ) => {

  const computer = useGLTF('./ferrari_f50_1995/scene.gltf')
  

  return (
    <scene>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <ambientLight intensity={0.3} />
      
      <directionalLight 
        
        color='red'
        position={[-10, 90, 5]}
        angle={0.12}
        penumbra={0.5}
        intensity={1}
        castShadow
        shadow-mapSize={2400}
        
      />
     
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.5 : 3}
        position={isMobile ? [0.1, -2, -0.1] :  [0.5, -3.1, -0.1]}
        rotation={isMobile ? [0, 0.8, 0] : [0, 0.2, 0]}
        
      />
    </scene>
  )
}


const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false)


  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  },[])



  return (
    <Canvas 
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={ {preserveDrawingBuffer: true}}
    >
      
      <Suspense fallback={<CanvasLoader/>}>
              <OrbitControls enableZoom={false} 
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}/>
          <Computers isMobile={isMobile} />
      </Suspense>


      <Preload all/>

    </Canvas>
  )
}
export default ComputersCanvas

