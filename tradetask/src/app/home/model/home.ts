export interface Attributes {
    Material: string;
    Color: string;
    Brand: string;
}

export interface FinalData {
    productName: string;
    attributes: Attributes;
    image: string;
    minOrders: string;
    deliveryTime: string;
    location: string;
    productRating: string;
    productPrice: string;
    id: number;
}