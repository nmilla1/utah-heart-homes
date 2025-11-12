import { Card } from "@/components/ui/card";
import { Home, Users, Briefcase } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Host Home Services (HHS)",
      description: "Our flagship program connecting caring families with adults who need support. As a Host Home Provider, you provide a stable, loving home environment while we provide training, resources, and ongoing support.",
      features: ["24/7 support", "Professional training", "Competitive compensation", "Community network"]
    },
    {
      icon: Users,
      title: "Disabled Support Group (DSG)",
      description: "Community-based support groups providing individuals with disabilities access to social activities, skill-building workshops, and peer connections.",
      features: ["Social activities", "Skill development", "Peer support", "Community integration"]
    },
    {
      icon: Briefcase,
      title: "Residential Habilitative Services (RHS)",
      description: "Comprehensive residential services focused on helping individuals develop life skills and achieve greater independence in supervised settings.",
      features: ["Life skills training", "Daily living support", "Goal achievement", "Structured environment"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Complete Support Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DSPD-certified programs serving the Utah community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-8 bg-card hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-healing-green to-trust-blue flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-healing-green"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 bg-trust-blue/10 rounded-full">
            <p className="text-sm font-semibold text-trust-blue">
              ✓ DSPD Certified & DHHS Approved Provider
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
