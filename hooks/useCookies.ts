import { useGLTF } from "@react-three/drei"
import BlueCookie from "@/assets/models/cookies/Blue_Cookie.glb"
import GreenCookie from "@/assets/models/cookies/Green_Cookie.glb"
import PurpleCookie from "@/assets/models/cookies/Purple_Cookie.glb"
import RedCookie from "@/assets/models/cookies/Red_Cookie.glb"

import { create } from "zustand";


type Cookie = {
  src: string
  price: number
  icon: string
  extraScaleY?: number
}

export type CookieName = 'blue' | 'green' | 'purple' | 'red'
export type CookieNode = "CV6_1_Cookie_V20_0" | "CV6_1_Cookie_V21_0" | "CV6_1_Cookie_V22_0" | "CV6_1_Cookie_V19_0"

export type Cookies = {
  [key in CookieName]: Cookie
}


export const COOKIES: Cookies = {
  blue: {
    src: BlueCookie,
    price: 0.5,
    icon: '🔵',
  },
  green: {
    src: GreenCookie,
    price: 0.5,
    icon: '🟢',
  },

  purple: {
    src: PurpleCookie,
    price: 0.5,
    icon: '🟣',
  },
  red: {
    src: RedCookie,
    price: 0.5,
    icon: '🔴',
  },

}

export const COOKIES_ARRAY = Object.keys(COOKIES)

COOKIES_ARRAY.forEach((cookie: string) => {
  console.log({ cookie, src: COOKIES[cookie as CookieName].src });
  useGLTF.preload(COOKIES[cookie as CookieName].src);
});


export type TCookie = {
  id: number
  name: string
}


export const useCookies = create<{
  cookies: TCookie[]
  addCookie: (cookie: string) => void
  removeCookie: (cookieId: number) => void
  setAddToCart: (addToCart: boolean) => void,
  setSelected: (selected: {
    id: number
    name: string

  } | null) => void,
  addToCart: boolean,
  selected: { id: number; name: string; } | null,
  total: number
}>(set => ({
  cookies: [
  ],
  total: 5,
  addToCart: false,
  selected: null,
  addCookie: (cookie: string) => set((state) => ({
    total: state.total + COOKIES[cookie as CookieName].price,
    cookies: [...state.cookies,
    {
      id: state.cookies.length,
      name: cookie,
    },
    ],
  })),
  setSelected: (selected: {
    id: number
    name: string
  } | null) => set(() => ({
    selected
  })),
  removeCookie: (cookieId: number) => set((state) => ({
    total: state.total - (COOKIES[state.cookies[cookieId]?.name as CookieName]?.price || 0),
    cookies: state.cookies.filter((cookie) => cookie.id !== cookieId),
  })),
  setAddToCart: (addToCart: boolean) => set({ addToCart }),
}))