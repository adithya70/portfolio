import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./Planet_revolve/scene.gltf");

  // Define a rotation speed (in radians per frame)
  const rotationSpeed = 0.005;

  // Create a state variable to control the rotation angle
  const [rotationAngle, setRotationAngle] = useState(0);

  // Create a state variable to control the light's intensity
  const [lightIntensity, setLightIntensity] = useState(1);

  // Use the useFrame hook to update the rotation angle and light intensity on each frame
  useFrame(() => {
    // Debugging: Log the light intensity
    console.log("Light Intensity:", lightIntensity);
  
    // Update the rotation angle based on the speed
    setRotationAngle((prevAngle) => prevAngle + rotationSpeed);
  
    // Toggle the light intensity between 0 and 1 to make it blink
    setLightIntensity((prevIntensity) => (prevIntensity === 0 ? 1 : 0));
  });

  return (
    <mesh rotation-y={rotationAngle}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 30]}
        angle={0.12}
        penumbra={1}
        intensity={lightIntensity} // Toggle light intensity
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.75 : 2.5}
        position={isMobile ? [-0.4, -1.5, -2.5] : [-0.4, -1.5, -1.75]}
        rotation={[0, 0, 0]} // Remove the initial rotation
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate // Enable auto-rotation
          autoRotateSpeed={0.1} // Adjust the auto-rotation speed
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
