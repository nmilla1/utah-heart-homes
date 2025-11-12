import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Becoming a host home provider was one of the best decisions our family ever made. We've watched Sarah grow in confidence and independence, and she's brought so much joy into our lives.",
      author: "Jennifer & Mark T.",
      role: "Host Family, Salt Lake City",
      years: "5 years as providers"
    },
    {
      quote: "The training and support from Milestone has been incredible. They're always available when we need them, and we never feel like we're on this journey alone.",
      author: "Lisa R.",
      role: "Host Family, Provo",
      years: "3 years as a provider"
    },
    {
      quote: "I never imagined how rewarding this would be. Our family has learned so much about compassion, patience, and what really matters in life.",
      author: "David & Maria C.",
      role: "Host Family, Ogden",
      years: "7 years as providers"
    }
  ];

  return (
    <section className="py-20 bg-warm-earth/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Stories from Our Host Families
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what current providers have to say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card hover:shadow-xl transition-all duration-300 relative">
              <Quote className="w-12 h-12 text-healing-green/20 absolute top-4 right-4" />
              <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-healing-green mt-1">{testimonial.years}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
