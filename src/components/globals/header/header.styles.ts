const defaultStyles = {
  header: "sticky top-0 z-50 w-full glass-card border-b border-outline-variant",
  container: "max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20",
  brandWrapper: "flex items-center gap-8",
  brand: "flex items-center text-primary group cursor-pointer gap-4",
  logoWrapper: "relative h-12 w-12",
  brandTitle: "text-on-surface text-xl tracking-[-0.04em] uppercase flex items-center gap-2",
  brandTitleSpan: "font-serif italic text-2xl tracking-tight bg-gradient-to-r from-secondary to-secondary-fixed bg-clip-text text-transparent",
  nav: "hidden lg:flex items-center gap-10",
  navLink: "text-on-surface text-sm font-semibold hover:text-secondary transition-colors",
  mobileMenuButton: "lg:hidden p-2 text-on-surface hover:text-secondary focus:outline-none transition-colors",
  mobileNavOverlay: "fixed top-20 left-0 z-40 h-[calc(100vh-5rem)] w-screen bg-background/98 backdrop-blur-lg flex flex-col px-6 transition-transform duration-300 ease-in-out lg:hidden shadow-2xl",
  mobileNavLinkContainer: "flex flex-col gap-2 mt-4",
  mobileNavLink: "text-on-surface text-xl font-semibold hover:text-secondary transition-colors py-4 border-b border-outline-variant/10 last:border-b-0"
};

export const styles = {
  default: defaultStyles,
};
