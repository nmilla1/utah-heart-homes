import { CheckCircle, UserPlus, GraduationCap, Home, Heart } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Submit Your Inquiry",
      description: "Fill out our simple form to express your interest in becoming a host home provider. We'll reach out within 24 hours."
    },
    {
      icon: CheckCircle,
      title: "Screening & Background Check",
      description: "Complete a straightforward screening process to ensure a safe, supportive environment for everyone."
    },
    {
      icon: GraduationCap,
      title: "Professional Training",
      description: "Receive comprehensive training and certification through our DSPD-approved program at no cost to you."
    },
    {
      icon: Home,
      title: "Meet Your Match",
      description: "We'll carefully match you with an individual whose needs align with your family and lifestyle."
    },
    {
      icon: Heart,
      title: "Ongoing Support",
      description: "Access 24/7 support, regular check-ins, and a network of experienced providers as you begin this rewarding journey."
    }
  ];

  return (
    <section className="py-20 bg-warm-earth/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Journey to Becoming a Host Home Provider
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We make it simple to start making a difference. Here's how it works:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-6 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-healing-green flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-healing-green">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
