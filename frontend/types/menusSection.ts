export interface Menus {
    _id: string,
    title: string,
    subtitle: string,
    items: Items[]
}

interface Items {
    _id: string,
    name: string,
    description: string,
    price: string, 
    thumbnail: {
        asset: {
            url: string
        }
    },
    dietary: string[],
}