import axios from "axios"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const api=axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:3000/api/v1",
  withCredentials: true,
    headers: {
    "Content-Type": "application/json",
  },
})
export {
  api
}