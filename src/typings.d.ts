export interface IMatch {
  params: any; // TODO: Remove any type and define it properly
  isExact: boolean;
  path: string;
  url: string;
}
