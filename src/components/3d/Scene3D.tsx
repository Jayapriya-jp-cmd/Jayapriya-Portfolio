import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingIcon from './FloatingIcon';

const Scene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
          
          <FloatingIcon
            position={[-3, 1, 0]}
            color="#a855f7"
            size={0.8}
            speed={1.2}
          />
          <FloatingIcon
            position={[3, -1, 0]}
            color="#3b82f6"
            size={0.6}
            speed={0.8}
          />
          <FloatingIcon
            position={[0, 2, -2]}
            color="#06b6d4"
            size={0.4}
            speed={1.5}
          />
          
          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;