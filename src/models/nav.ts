export interface INavigation {
  id: string;
  title: string;
  icon: string;
  items: INavigationItem[];
  active: boolean;
  name: string;
  url: string;
}

export interface INavigationItem {
  id: string;
  name: string;
  title: string;
  url: string;
  active: boolean;
}