const apiBase = import.meta.env.VITE_API_BASE || "https://travelingstarservice-backend.onrender.com";

export const API_BASE = apiBase.replace(/\/+$/, "");
export const POS_URL = import.meta.env.VITE_POS_URL || "https://travelingstar-pos.netlify.app";
