export const sections = [
  {
    _id: "starters",
    title: "Entrées",
    subtitle: "To begin",
    items: [
      {
        _id: "1",
        name: "Steak Tartare",
        description:
          "Hand-cut beef, capers, cornichon, egg yolk, grilled country bread",
        price: "22",
        thumbnail: {
          asset: {
            url: "https://plus.unsplash.com/premium_photo-1683619761464-6b7c9a2716a8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: [],
      },
      {
        _id: "2",
        name: "Soupe à l'Oignon",
        description: "Caramelised onion broth, Gruyère croûte, thyme",
        price: "18",
        thumbnail: {
          asset:{
            url: "https://images.unsplash.com/photo-1700760934249-93efbb574d23?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: ["V"],

      },
      {
        _id: "3",
        name: "Foie Gras Terrine",
        description: "Duck foie gras, brioche, Sauternes jelly, micro greens",
        price: "28",
        thumbnail: {
          asset: {
            url: "https://images.unsplash.com/photo-1550259114-ad7188f0a967?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: [],
      },
      {
        _id: "4",
        name: "Burrata Provençale",
        description: "Burrata, roasted cherry tomato, basil, aged balsamic",
        price: "20",
        thumbnail: {
          asset: {
            url: "https://images.unsplash.com/photo-1552913902-366e726db79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: ["V", "GF"],
      },
    ],
  },
  {
    _id: "mains",
    title: "Plats Principaux",
    subtitle: "Main courses",
    items: [
      {
        _id: "5",
        name: "Duck Confit",
        description:
          "Slow-rendered duck leg, celeriac purée, pickled cherry, thyme jus",
        price: "38",
        thumbnail: {
          asset: {
            url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: ["GF"],
      },
      {
        _id: "6",
        name: "Bouillabaisse",
        description:
          "Traditional Marseille-style, saffron broth, rouille, sourdough",
        price: "42",
        thumbnail: {
          asset: {
            url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: [],
      },
      {
        _id: "7",
        name: "Truffle Risotto",
        description:
          "Carnaroli rice, black truffle, aged Parmesan, micro herbs",
        price: "34",
        thumbnail: {
          asset: {
            url: "https://images.unsplash.com/photo-1617201834941-0dff6e023ae2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: ["V", "GF"],
      },
      {
        _id: "8",
        name: "Sole Meunière",
        description: "Whole Dover sole, brown butter, lemon, capers, parsley",
        price: "48",
        thumbnail: {
          asset: {
            url: "https://images.unsplash.com/photo-1699705158101-714c4ce8a58a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: ["GF"],
      },
      {
        _id: "9",
        name: "Côte de Veau",
        description: "Veal chop, morel cream, haricots verts, pommes dauphine",
        price: "52",
        thumbnail: {
          asset: {
            url: "https://images.unsplash.com/photo-1622715395486-08183374570a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: [],
      },
      {
        _id: "10",
        name: "Cassoulet",
        description:
          "Duck confit, Toulouse sausage, white bean, breadcrumb crust",
        price: "36",
        thumbnail: {
          asset: {
            url: "https://images.unsplash.com/photo-1652169892001-4469bd78921f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: [],
      },
    ],
  },
  {
    _id: "desserts",
    title: "Desserts",
    subtitle: "To finish",
    items: [
      {
        _id: "11",
        name: "Tarte Tatin",
        description: "Upside-down caramelised apple, crème fraîche, vanilla",
        price: "16",
        thumbnail: {
          asset: {
            url: "https://plus.unsplash.com/premium_photo-1667824271257-03449c8426a8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: ["V"],
      },
      {
        _id: "12",
        name: "Crème Brûlée",
        description: "Classic vanilla custard, caramelised sugar, berries",
        price: "14",
        thumbnail: {
          asset: {
            url: "https://images.unsplash.com/photo-1656690099946-51dd6d2e7ccf?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: ["V", "GF"],
      },
      {
        _id: "13",
        name: "Paris-Brest",
        description: "Choux pastry, praline cream, hazelnuts",
        price: "16",
        thumbnail: {
          asset: {
            url: "https://images.unsplash.com/photo-1549045162-47c36fadcf4f?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: ["V"],
      },
      {
        _id: "14",
        name: "Île Flottante",
        description:
          "Floating island, crème anglaise, caramel, toasted almonds",
        price: "14",
        thumbnail: {
          asset: {
            url: "https://images.unsplash.com/photo-1726588536826-fe1cbce85533?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        },
        dietary: ["V", "GF"],
      },
    ],
  },
];
