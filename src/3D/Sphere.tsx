import { Canvas } from "@react-three/fiber";
import React from "react";
import { CameraController } from "./utils/CameraController";

const Sphere = () => {
  return (
    <Canvas>
      <CameraController />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereBufferGeometry args={[2.4]} />
        <meshStandardMaterial wireframe={true} color={"blue"} />
      </mesh>
    </Canvas>
  );
};
export default Sphere;
