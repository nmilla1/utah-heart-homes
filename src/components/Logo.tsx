import logo from "@/assets/logo.png";

export const Logo = ({ className = "h-12" }: { className?: string }) => {
  return (
    <img 
      src={logo} 
      alt="Milestone Counseling Services" 
      className={className}
    />
  );
};
