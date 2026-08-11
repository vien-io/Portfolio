export const Lights = () => {
  return (
    <>
      {/* overall brightness */}
      <ambientLight intensity={0.5} />

      {/* main light */}
      <directionalLight position={[5, 5, 5]} intensity={2} />

      {/* purple accent */}
      <pointLight position={[-5, 2, 2]} color="#8b5cf6" intensity={15} />

      {/* blue accent */}
      <pointLight position={[5, 2, 2]} color="#3b82f6" intensity={15} />
    </>
  );
};
