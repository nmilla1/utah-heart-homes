import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import utahImage from "@/assets/utah-community.jpg";

export const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you within 24 hours to discuss next steps.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-healing-green to-trust-blue relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${utahImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-primary-foreground/95 max-w-2xl mx-auto">
              Take the first step toward becoming a Host Home Provider. We're here to answer all your questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-background/95 backdrop-blur">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="city" className="text-foreground">City in Utah *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="e.g., Salt Lake City, Provo, Ogden"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Why do you want to be a host home provider?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2"
                    rows={4}
                    placeholder="Tell us about your interest..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-healing-green hover:bg-deep-green text-primary-foreground"
                >
                  Submit Your Interest
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-background/95 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-healing-green/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-healing-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground">(801) 555-0123</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 8am-6pm MT</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-background/95 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-trust-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">info@milestonecounseling.com</p>
                    <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-background/95 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-warm-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-warm-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">Serving all of Utah</p>
                    <p className="text-sm text-muted-foreground mt-1">In-person consultations available</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-warm-accent/20 to-healing-green/20 backdrop-blur border-2 border-healing-green/30">
                <h3 className="font-bold text-foreground mb-2">What Happens Next?</h3>
                <ol className="space-y-2 text-sm text-foreground/90">
                  <li className="flex gap-2">
                    <span className="font-bold text-healing-green">1.</span>
                    We'll review your inquiry within 24 hours
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-healing-green">2.</span>
                    Schedule a friendly conversation about the program
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-healing-green">3.</span>
                    Begin your journey to making a difference
                  </li>
                </ol>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
