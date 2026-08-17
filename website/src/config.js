export const API_BASE = import.meta.env.VITE_API_BASE || "https://travelingstarservice-backend.onrender.com";

export const buildApiUrl = (path = "") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE}${normalizedPath}`;
};

export default API_BASE;
