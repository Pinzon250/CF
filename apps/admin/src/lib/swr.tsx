'use client'

import React from "react";
import useSWR, { SWRConfig } from "swr";
import { api } from "./api";

export const AdminSWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig value={{ fetcher: (key: string) => fetch(key).then((r) => r.json()) }}>
      {children}
    </SWRConfig>
  );
};

export function useProducts(search: string, page = 1, pageSize = 20) {
  const key = `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/catalog/products?search=${encodeURIComponent(search)}&page=${page}&page_size=${pageSize}`;
  return useSWR(key, () => api.listProducts(search, page, pageSize));
}
