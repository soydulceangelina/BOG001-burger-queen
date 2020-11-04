export enum type {
    meat = 'res',
    chiken = 'pollo',
    vegetarian = 'vegetariana'
}

export enum ingredient {
    egg = 'huevo',
    cheese = 'queso',
    null = ''
}

export interface Product {
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
    category: number;
    quantity: number;
    priceByQty: number;
    type: string[];
    ingredient: ingredient;
}
