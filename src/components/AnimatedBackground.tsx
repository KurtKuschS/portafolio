const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(rgba(99, 102, 241, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.18) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background" />
  </div>
);

export default AnimatedBackground;
