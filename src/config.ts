const FALLBACK_API_BASE = 'https://travelingstarservice-backend.onrender.com'

const rawApiBase = import.meta.env.VITE_API_BASE?.trim()
export const API_BASE = (rawApiBase && rawApiBase.length > 0 ? rawApiBase : FALLBACK_API_BASE).replace(/\/+$/, '')
