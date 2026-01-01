const Footer = () => {
  return (
    <footer className="px-6 py-12 md:px-8 lg:px-12 border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-medium text-foreground">
              Creative Core
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Seasonal growth for local businesses
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
