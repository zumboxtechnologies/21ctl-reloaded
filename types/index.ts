type SubMenu = {
  title: string;
  desc: string;
  link: string;
  bgType?: number,
};

export type NavLink = {
  navTitle: string;
  navLink?: string;
  navSubMenus?: SubMenu[];
};