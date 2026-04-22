export type Category = "All" | "Dishes" | "Interiors" | "Team" | "Events";

export type GalleryImage = {
  _id: string;
  alt: string;
  category: Category;
  tall?: boolean;
  image: {
    asset: {
      url: string;
    };
  };
};

export type GalleryData = {
  _id: string;
  title: string;
  images: GalleryImage[];
};

export const galleryImages: GalleryData = {
  _id: "1",
  title: "Life at Élara",
  images: [
    {
      _id: "1",
      alt: "Restaurant interior",
      category: "Interiors",
      tall: true,
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
        },
      },
    },
    {
      _id: "2",
      alt: "Duck Confit plate",
      category: "Dishes",
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
        },
      },
    },
    {
      _id: "3",
      alt: "Chef at work",
      category: "Team",
      tall: true,
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
        },
      },
    },
  ],
};