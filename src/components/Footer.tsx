const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-display text-xl font-bold gradient-text">
            DevCraft
          </a>
          <div className="flex items-center gap-8">
            {["Services", "Portfolio", "Tech Stack", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 DevCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
