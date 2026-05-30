export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/cv" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
