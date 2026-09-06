export interface IMenu {
  title: string;
  items?: (IMenuItem)[] | null;
}

export interface IMenuItem {
  id: string;
  name: string;
  url: string;
  icon: string;
  children: (IMenuItem)[];
}
