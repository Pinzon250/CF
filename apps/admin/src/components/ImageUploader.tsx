'use client'

import { api } from "@/lib/api"
import Image from "next/image"
import { useState } from "react"

type Props = { productId: string, images: { id: string; url: string; alt?:string  }[] }

export default function ImageUploader({ productId, images }: Props) {
    const [files, setFiles] = useState<File[]>([])
    const [items, setItems] = useState(images)

    async function upload() {
        for (const f of files) {
            const res = await api.addImage(productId, f)
            setItems(prev => [...prev, res])
        }
        setFiles([])
    }

    async function remove(imageId: string) {
        await api.removeImage(productId, imageId)
        setItems(prev => prev.filter(i => i.id !== imageId))
    }

    return (
        <div className="space-y-3">
            <div className="felx items-center gap-3">
                <input type="file" multiple onChange={(e)=>setFiles(Array.from(e.target.files||[]))} />
                <button disabled={!files.length} onClick={upload+} className="px-3 py-2 rounded-xl bg-zinc-800 disabled:opacity-50">Upload</button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {items.map((img) => (
                    <div key={img.id} className="relative group border border-zinc-800 rounded-xl overflow-hidden">
                        <Image src={img.url} alt={img.alt || ''} width={400} height={300} className="object-cover w-full h-40" />
                        <button onClick={()=>remove(img.id)} className="absolute top-2 right-2 px-2 py-1 text-xs rounded-lg bg-red-600 opacity-0 group-hover:opacity-100">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}