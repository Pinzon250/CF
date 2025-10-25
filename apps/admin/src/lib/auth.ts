'use client'
import Cookies from 'js-cookie'

const TOKEN_KEY = process.env.NEXT_PUBLIC_ADMIN_JWT_COOKIE ?? 'admin_token'

export function getToken() {
    return Cookies.get(TOKEN_KEY)
}

export function setToken(token: string) {
    Cookies.set(TOKEN_KEY, token, { sameSite: 'lax' })
}

export function clearToken() { 
    Cookies.remove(TOKEN_KEY) 
}