export const Logo = ({ className = "h-12" }: { className?: string }) => {
  return (
    <div className="flex items-center gap-3">
      <svg className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Flag/milestone icon inspired by the original logo */}
        <path d="M10 10 L10 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M10 10 L15 15 L10 20 L15 25 L10 30 L15 35 L10 40 L15 45 L10 50" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M15 15 L20 20 L15 25 L20 30 L15 35 L20 40 L15 45 L20 50" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M20 20 L25 25 L20 30 L25 35 L20 40 L25 45 L20 50" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M25 25 L30 30 L25 35 L30 40 L25 45 L30 50" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-foreground">Milestone</span>
        <span className="text-lg text-foreground/90">Counseling Services</span>
      </div>
    </div>
  );
};
