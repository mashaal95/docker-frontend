declare module "*.scss";

declare module "*.png" {
  const dataURI: string;
  export = dataURI;
}

declare module "*.jpg" {
  const dataURI: string;
  export = dataURI;
}

declare module "*.json" {
  const data: string;
  export = data;
}
