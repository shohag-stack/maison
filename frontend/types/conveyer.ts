export type HeadingCardType = {
  type: "heading";
  eyebrow: string;
  heading: string;
  body: string;
};

export type DishCardType = {
  type: "dish";
  name: string;
  price: string;
  description: string;
  image: string;
};

export type Card = HeadingCardType | DishCardType;