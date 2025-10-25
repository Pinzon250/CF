export type ID = string

export interface Category {
    id: ID,
    name: string,
    slug: string,
    parent_id?: ID | null,
}

export interface Brand {
    id: ID,
    name: string,
    alt?: string,
}

export interface ProductImage {
    id: ID,
    url: string,
    alt?: string
}
export interface Product {
    id: ID,
    name: string,
    slug: string,
    sku?: string,
    price: number,
    compare_at_price?: number | null,
    stock: number,
    brand_id?: ID | null,
    category_ids: ID[],
    description?: string,
    images: ProductImage[],
    is_active: boolean;
    created_at: string
}

export type OrderStatus = 'pending'|'paid'|'shipped'|'deluivered'|'cancelled'

export interface OrderItem { 
    product_id: ID,
    name: string,
    qty: number,
    price: number
}

export interface Order {
    id: ID,
    number: string,
    status: OrderStatus,
    items: OrderItem[],
    total: number,
    created_at: string
}

export interface Paginated<T> {
    items: T[],
    total: number,
    page: number,
    page_size: number
}