export interface IDefaultTableFilter {
  pagination: boolean;
  page: number;
  itemsPerPage: number;
}

export interface ITableProps {
  id: string;
  headers: ITableHeader[];
  items: any[];
  totalItems: number;
  sortBy: ISortItem[];
  loading: boolean;
  filter: IDefaultTableFilter;
  hideFooter: boolean;
  showSelect: boolean;
  flexible: boolean;
  showExpand: boolean;
  rowProps: Function;
}

export interface ITableFooterProps {
  totalItems: number;
  hideNextPage: boolean;
  loading: boolean;
  filter: IDefaultTableFilter;
}

export interface ITableSettingColumnsProps {
  id: string;
  headers: ITableHeader[];
}

export interface ITableHeader {
  title: string;
  align?: 'start' | 'center' | 'end';
  sortable?: boolean;
  key: string;
  value?: any;
  cellProps?: {
    class: string[];
  },
  headerProps?: {
    class: string[];
  },
  selected?: boolean;
}

export interface ITableUpdateOptions {
  groupBy: string;
  itemsPerPage: number;
  page: number;
  search: string;
  sortBy: ISortItem[];
}

export interface ISortItem {
  key: string;
  order?: boolean | Order;
}

export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}