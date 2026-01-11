const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Outer glow ring */}
      <circle cx="24" cy="24" r="23" stroke="url(#glowGradient)" strokeWidth="2" fill="none" />
      
      {/* Main background */}
      <circle cx="24" cy="24" r="20" fill="url(#logoGradient)" />
      
      {/* G letter - stylized */}
      <path
        d="M28 18H22C19.2 18 17 20.2 17 23V25C17 27.8 19.2 30 22 30H28V26H23C21.9 26 21 25.1 21 24C21 22.9 21.9 22 23 22H28V18Z"
        fill="hsl(var(--primary-foreground))"
      />
      
      {/* Tech accent - dot/node */}
      <circle cx="28" cy="28" r="3" fill="hsl(var(--primary-foreground))" />
      
      {/* Connection line accent */}
      <path
        d="M31 25L34 22"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="35" cy="21" r="2" fill="hsl(var(--primary-foreground))" opacity="0.7" />
    </svg>
  );
};

export default Logo;