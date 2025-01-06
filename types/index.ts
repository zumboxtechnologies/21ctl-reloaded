type SubMenu = {
  title: string;
  desc: string;
  link: string;
};

export type NavLink = {
  navTitle: string;
  navLink?: string; // Optional, because not all items have a direct link
  navSubMenus?: SubMenu[]; // Optional, because not all items have submenus
};