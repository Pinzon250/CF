const BASE = process.env.NEXT_PUBLIC_API_BASE_URL!

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const token = typeof window !== 'undefined' ? (document.cookie.match(/admin_token([^;]+)/)?.[1]) : undefined
    const headers = new Headers(init.headers)
    if (!(init.body instanceof FormData)) headers.set('Content-Type', 'aplication/json')
    if (token) headers.set('Authorization', `Bearer ${decodeURIComponent(token)}`)

    const res = await fetch(`${BASE}${path}`, { ...init, headers, cache: 'no-store' })
    if (!res.ok) {
        const msg = await res.text()
        throw new Error(`${res.status}: ${msg}`)
    }
    return res.json()
}

export const api = {
    // Llamadas al catalogo administrativo
    listProducts: (q = '', page=1, page_size=20) => request(`/catalog/products=search=${encodeURIComponent(q)}&page=${page}&page_size=${page_size}`),
    getProduct: (id: string) => request(`/catalog/products/${id}`),
    createProduct: (data: any) => request(`/catalog/products/create`, { method: 'POST', body: JSON.stringify(data) }),
    updateProduct: (id: string, data: any) => request(`/catalog/products/update/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
    deleteProduct: (id: string) => request(`/catalog/products/delete/${id}`, { method: 'DELETE' }),

    addImage: (productId: string, file: File) => {
        const fd = new FormData()
        fd.append('file', file)
        return request(`/catalog/products/${productId}/images`, { method: 'POST', body: fd })
    },
    removeImage: (productId: string, imageId: string) => request(`/catalog/products/${productId}/images/${imageId}`, { method: 'DELETE' }),

    createCategory: (name: string, parent_id: string) => request(`/catalog/category/categories/create`, { method: 'POST', body: JSON.stringify({ name, parent_id }) }),
    deleteCategory: (id: string) => request(`/catalog/categories/delete/${id}`, { method: 'DELETE' }),
    
    createBrand: (name: string) => request(`/catalog/brands/create`, { method: 'POST', body: JSON.stringify({ name })}),
    deleteBrand: (id: string) => request(`/catalog/brands/delete/${id}`, { method: 'DELETE' }),

    // Llamadas a las ordenes
    listOrders: (page=1, page_size=20) => request(`/orders?page=${page}&page_size=${page_size}`),
    setOrderStatus: (orderId: string, status: string) => request(`/prders/${orderId}/status`, { method: 'POST', body: JSON.stringify({ status }) }),
}