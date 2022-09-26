export interface Abse {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface B {
  message: string;
  data: Abse[];
}
