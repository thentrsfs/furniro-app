export type Product = {
    id: number,
    title: string,
    subtitle: string,
    price: number,
    category: string,
    description: string,
    image: string,
    new: boolean,
    sale?: number
    oldPrice?: number
}

export type Thumbnail = {
  src: string;
  alt: string;
  title: string;
};

export type Room = {
  id: number;
  title: string;
  subtitle: string;
  images: string[];
}

