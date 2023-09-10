interface IRoutesProps {
  path: string;
  link: React.ReactNode;
  icon: React.ReactNode;
}

export interface IRouteArray {
  options: IRoutesProps[];
}
