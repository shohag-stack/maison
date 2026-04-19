export type Category = "All" | "Dishes" | "Interiors" | "Team" | "Events";
export const images: { id: string; src: string; alt: string; category: Category; tall?: boolean }[] = [
  { id: "1",  src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",  alt: "Restaurant interior",      category: "Interiors", tall: true },
  { id: "2",  src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",  alt: "Duck Confit plate",        category: "Dishes" },
  { id: "3",  src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",    alt: "Chef at work",             category: "Team",     tall: true },
  { id: "4",  src: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=900&q=80",  alt: "Truffle risotto",          category: "Dishes" },
  { id: "5",  src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80",    alt: "Dessert plating",          category: "Dishes" },
  { id: "6",  src: "https://images.unsplash.com/photo-1551218372-a8789b81b253?w=900&q=80",    alt: "Table setting",            category: "Interiors" },
  { id: "7",  src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=900&q=80",  alt: "Kitchen brigade",          category: "Team",     tall: true },
  { id: "8",  src: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=900&q=80",    alt: "Bouillabaisse",            category: "Dishes" },
  { id: "9",  src: "https://images.unsplash.com/photo-1428515613728-6b4607e44363?w=900&q=80",  alt: "Private dining event",     category: "Events" },
  { id: "10", src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=80",  alt: "Chef Antoine",             category: "Team" },
  { id: "11", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",  alt: "Dining room evening",      category: "Interiors", tall: true },
  { id: "12", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",  alt: "Bar detail",               category: "Interiors" },
];