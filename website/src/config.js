const configuredApiBase =
  import.meta.env.VITE_API_BASE ||
  "https://travelingstarservice-backend.onrender.com";

export const API_BASE = configuredApiBase.replace(/\/+$/, "");
