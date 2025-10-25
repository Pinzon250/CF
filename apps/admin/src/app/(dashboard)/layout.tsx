// import Link from "next/link";
// import location from "react"
// import ThemeToggle from "@/components/ThemeToggle";


// const routes = [
//     { name: "Dashboard", to: "/dashboard" },
//     { name: "Productos", to: "/products" },
//     { name: "Pedidos", to: "/orders" },
//     { name: "Cupones", to: "/coupons" },
//     { name: "Ajustes", to: "/settings" },
// ]
// export default function DashboardLayout({ children }: { children: React.ReactNode }) {

//     const isActive = (path: string) => location.path == path;

//     return (
//         <div className="min-h-dvh grid grid-cols-1 md:grid-cols-[220px_1fr]">

//             {/* Sidebar: Despues lo acomodamos a un componente */}
//             <aside className="border-b md:border-b-0 bg-white shadow-[0px_8px_10px_0px_rgba(0,_0,_0,_0.2)] supports-[backdrop-filter]:bg-white/10">
//                 <div className="p-4 font-semibold">Cibercity Admin</div>
//                 <nav className="px-2 pb-4 space-y-1 text-sm">
//                     {routes.map((i) => {
//                         const active = isActive(i.to);
//                         return (
//                             <Link
//                                 key={i.name}
//                                 href={i.to}
//                                 className={`block px-3 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10`}
//                             >
//                                 {i.name}
//                             </Link>
//                         )
//                     })}
//                 </nav>
//             </aside>

//             <div className="flex min-h-dvh flex-col">
//                 <header className="sticky top-0 z-10 border-b border-gray-300 bg-background/70 backdrop-blur">
//                     <div className="flex items-center gap-3 px-4 h-14">
//                         <div className="md:hidden font-semibold">Cibercity Admin</div>
//                         <div className="ml-auto flex items-center gap-2">
                            
//                             <ThemeToggle />
//                             <div className="size-8 rounded-full bg-white/10 dark:bg-black/100"/>
//                         </div>
//                     </div>
//                 </header>
//                 <main className="p-4 md:p-6">
//                     {children}
//                 </main>
//             </div>
//         </div>
//     )
// }