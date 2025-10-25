import ProductForm from "@/components/forms/ProductForm";

export default function Page() {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">New Product</h2>
            <ProductForm />
        </div>
    );
}