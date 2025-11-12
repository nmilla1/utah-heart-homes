export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Milestone Counseling</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              DSPD-certified provider of Host Home Services, Disabled Support Groups, and Residential Habilitative Services in Utah.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Host Home Services</li>
              <li>Disabled Support Group</li>
              <li>Residential Habilitative Services</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#contact-form" className="hover:text-warm-accent transition-colors">Become a Provider</a></li>
              <li><a href="#" className="hover:text-warm-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-warm-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-warm-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>(801) 555-0123</li>
              <li>info@milestonecounseling.com</li>
              <li>Serving all of Utah</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; {new Date().getFullYear()} Milestone Counseling. All rights reserved. | DSPD Certified Provider</p>
        </div>
      </div>
    </footer>
  );
};
