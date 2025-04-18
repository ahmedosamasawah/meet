export type Product = {
  id: number;
  name: string;
  image: any; // TODO: add image type
  origin: string;
  weight: number;
  oldPrice: number;
  newPrice: number;
  discount: string;
  favorite: boolean;
  isAvailable: boolean;
};

export type CategoryImage = {
  id: string;
  image: string;
};

export type Category = {
  categoryName: string;
  categoryImages: CategoryImage[];
};

export type HeaderProps = {
  title: string;
};

export type FilterButtonProps = {
  onPress?: () => void;
};
