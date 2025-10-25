import ProductTable from "@/components/table/ProductTable";

export default function AdminHome() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {['Catalog','Orders'].map((x) => (
        <a key={x} href={`/${x.toLocaleLowerCase()}`} className="rounded-2xl border border-zinc-800 p-6 hover:bg-zinc-900 transition">
          <div className="text-zinc-400 text-sm">Manage</div>
          <div className="text-2xl font-semibold">{x}</div>
        </a>
      ))}
      <div>
         <ProductTable />
      </div>
    </div>
  );
}
