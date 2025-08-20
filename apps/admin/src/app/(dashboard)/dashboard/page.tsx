export default async function DashboardPage() {
  // Datos mock por ahora
  const stats = [
    { label: 'Ventas Hoy', value: '$ 0' },
    { label: 'Pedidos', value: '0' },
    { label: 'Productos Activos', value: '0' },
    { label: 'Tickets', value: '0' },
  ];

  return (
    <section className="space-y-2">
      <h1 className="text-2xl mb-8 font-semibold">Hola Santiago!</h1>


    <h2 className="text-gray-600 dark:text-foreground font-bold">Detalles generales</h2>
    <div className="grid grid-cols-3 gap-6">
      <div className="grid gap-4 sm:grid-cols-2 col-span-2 lg:grid-cols-2 bg-gray-100/10 dark:bg-black/10 border border-gray-300 rounded-sm p-4">
        {stats.map((s) => (
            <div key={s.label} className="">
            <div className="text-sm opacity-70">{s.label}</div>
            <div className="mt-2 text-2xl font-semibold">{s.value}</div>
          </div>
        ))}
      </div>
      <div className="rounded-sm border border-gray-300 p-4 ligth:bg-white/60">
        <h2 className="text-gray-600 dark:text-foreground font-bold">Estadisticas actuales</h2>
        <div className="text-sm opacity-70 mb-2">Ventas (últimos 7 días)</div>
        <div className="h-40 grid place-items-center opacity-70 text-sm">[gráfico pronto]</div>
      </div>
    </div>
    </section>
  );
}
