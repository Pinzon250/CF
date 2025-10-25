'use client'
import { useState } from "react"
import { useProducts } from "@/lib/swr"
import Link from "next/link"

export default function ProductTable() {
    const [q, setQ] = useState('')
    const { data, isLoading, mutate } = useProducts(q, 1, 20)

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
                <input className="bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 w-full" placeholder="Search..." value={q} onChange={e=>setQ(e.target.value)} />
                <Link href="/catalog/products/new" className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500">New</Link>
            </div>

            <div className="overflow-x-auto rounded-xl border border-zinc-800">
                <table className="min-w-full text-sm">
                    <thead className="bg-zinc-900/50">
                        <tr>
                            <th className="px-3 py-2 text-left">Name</th>
                            <th className="px-3 py-2 text-right">Price</th>
                            <th className="px-3 py-2 text-right">Stock</th>
                            <th className="px-3 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && (
                            <tr><td className="px-3 py-6" colSpan={4}>Loading...</td></tr>
                        )}
                        {data?.items?.map((p:any) => (
                            <tr key={p.id} className="border-t border-zinc-800">
                                <td className="px-3 py-2">{p.name}</td>
                                <td className="px-3 py-2 text-right">${p.price.toFixed(2)}</td>
                                <td className="px-3 py-2 text-right">{p.stock}</td>
                                <td className="px-3 py-2 text-center">
                                    <Link href={`/admin/catalog/products/${p.id}`} className="text-emerald-400 hover:underline">Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}