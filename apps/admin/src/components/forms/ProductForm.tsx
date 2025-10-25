'use client'

import { useState, useTransition } from "react"
import { api } from "@/lib/api"
import ImageUploader from "../ImageUploader"

export default function ProductForm({ product }: { product?:any }) {
    const [form, setForm] = useState({
        name: product?.name ?? '',
        price: product?.price ?? 0,
        stock: product?.stock ?? 0,
        brand_id: product?.brand_id ?? '',
        category_ids: product?.category_ids ?? [],
        description: product?.description ?? '',
        is_active: product?.is_active ?? true
    })
    const [pending, start] = useTransition()

    function update<K extends keyof typeof form>(key: K, value: any) {
        setForm(f => ({ ...f, [key]: value }))
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        start(async () => {
            if (product) await api.updateProduct(product.id, form)
            else await api.createProduct(form)
            window.location.href = '/catalog/products'
        })
    }

    return (
        <form onSubmit={onSubmit} className="grid gap-4 max-w-3xl">
            <input required value={form.name} onChange={e=>update('name', e.target.value)} className="bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2" placeholder="Name"/>
            <div className="grid grid-cols-2 gap-4">
                <input type="number" step="0.01" value={form.price} onChange={e=>update('price', parseFloat(e.target.value))} className="bg-zinc-900 border border-zinc-800 rounded-xl pxx-3 py-2" placeholder="Price"/>
                <input type="number" value={form.stock} onChange={e=>update('stock', e.target.value)} className="bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2" placeholder="Stock"/>
            </div>
            <textarea value={form.description} onChange={e=>update('description', e.target.value)} className="bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2" placeholder="Description" rows={5} />
            <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={form.is_active} onChange={e=>update('is_active', e.target.checked)} /> Active
            </label>

            {product && (
                <div className="mt-2">
                    <h3 className="font-semibold mb-2">Images</h3>
                    <ImageUploader productId={product.id} images={product.images ?? []} />
                </div>
            )}

            <div className="flex gap-3">
                <button disabled={pending} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50">{pending ? 'Saving...' : 'Save'}</button>
                <a href="/catalog/products" className="px-4 py-2 rounded-xl border border-zinc-700">Product</a>
            </div>
        </form>
    )
}