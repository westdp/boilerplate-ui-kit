import { INavigation } from '@/models';

export interface ISidebarContainerProps {
  title: string;
  collapsed: boolean;
  navItems: INavigation[];
}

export interface ISidebarNavItemProps {
  collapsed: boolean;
  item: INavigation;
}