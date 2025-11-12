import supportImage from "@/assets/support-hands.jpg";

export const MissionStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission: Creating Homes Where Everyone Belongs
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Milestone Counseling, we believe that every person deserves a place to call home — a space where they feel valued, supported, and truly belong. For over a decade, we've been helping adults with intellectual and developmental disabilities thrive in loving, stable host home environments across Utah.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our Host Home Services program connects compassionate families like yours with individuals who need support, creating life-changing relationships built on care, dignity, and mutual respect.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 rounded-lg bg-card">
                <div className="text-3xl font-bold text-healing-green mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Lives Changed</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card">
                <div className="text-3xl font-bold text-trust-blue mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={supportImage} 
                alt="Hands joined together in support and community" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
