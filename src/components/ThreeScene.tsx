import { Scene } from './three/Scene';

export function ThreeScene() {
  return (
    <section className="relative h-[600px] bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Experience Next-Gen Gaming</h2>
          <p className="text-xl text-gray-300">
            Immerse yourself in stunning 3D graphics and gameplay
          </p>
        </div>
      </div>
      <div className="absolute inset-0">
        <Scene />
      </div>
    </section>
  );
}
