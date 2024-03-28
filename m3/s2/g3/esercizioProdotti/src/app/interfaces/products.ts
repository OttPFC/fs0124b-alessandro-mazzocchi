export interface iRoot {
    products: iProducts[]
    total: number
    skip: number
    limit: number
}

export interface iProducts {
    [x: string]: any
    id?: number
    title?: string
    description?: string
    price?: number
    discountPercentage?: number
    rating?: number
    stock?: number
    brand?: string
    category?: string
    thumbnail?: string
    images?: string[]
}