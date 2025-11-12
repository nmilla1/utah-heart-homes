import { DollarSign, Users, BookOpen, Shield, Clock, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Make a Meaningful Impact",
      description: "Change someone's life while enriching your own family's experience with purpose and compassion."
    },
    {
      icon: DollarSign,
      title: "Receive Fair Compensation",
      description: "Host home providers make between $4,000-$6,000 per month while providing a safe, caring home environment."
    },
    {
      icon: BookOpen,
      title: "Free Professional Training",
      description: "Get certified with comprehensive training covering care techniques, communication, and emergency response."
    },
    {
      icon: Shield,
      title: "24/7 Support & Resources",
      description: "Access round-the-clock support from experienced coordinators and a community of fellow providers."
    },
    {
      icon: Users,
      title: "Join a Caring Community",
      description: "Connect with other host families through regular meetups, support groups, and shared experiences."
    },
    {
      icon: Sparkles,
      title: "Flexible & Rewarding",
      description: "Work from home on your schedule while making a real difference in your community."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Families Choose to Be Host Home Providers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the rewards of opening your home and heart
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
                <div className="w-14 h-14 rounded-xl bg-healing-green/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-healing-green" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);
