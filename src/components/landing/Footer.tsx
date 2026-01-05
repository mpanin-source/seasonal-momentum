const Footer = () => {
  return (
    <footer className="px-6 py-12 md:px-8 lg:px-12 border-t border-border">
      <div className="container-wide">
        {/* Trust line */}
        <div className="text-center mb-8 pb-8 border-b border-border">
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Creative Core is built for local service brands and lean ecom teams. No hype, no flexing—just clear data, better funnels, and ads that actually convert.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-medium text-foreground">
              Creative Core
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Full-funnel growth for local & ecom brands
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Creative Core. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
