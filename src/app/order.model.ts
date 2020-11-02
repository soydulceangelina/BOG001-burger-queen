import { Product } from './product.model';

export enum status {
    inProcess = 'en preparacion',
    ready = 'lista la preparacion',
    delivered = 'entregado'
  }

export interface Order {
    id: string;
    products: Product[];
    total: number;
    date: Date;
    client: string;
    table: string;
    status: status;
}  