const API_BASE = process.env.API_BASE || "http://localhost:3000";

interface AdminLoginResponse {
  token?: string;
  message?: string;
}

interface AdminIdentityResponse {
  id?: string;
  username?: string;
  role?: string;
}

export async function loginAdmin(
  username: string,
  password: string
): Promise<AdminLoginResponse> {
  const response = await fetch(`${API_BASE}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  let data: AdminLoginResponse;
  try {
    data = await response.json();
  } catch {
    throw new Error(
      `Failed to parse server response (HTTP ${response.status})`
    );
  }

  if (!response.ok) {
    throw new Error(
      data.message ||
        `Login failed with HTTP ${response.status}`
    );
  }

  return data;
}

export async function fetchAdminIdentity(
  token: string
): Promise<AdminIdentityResponse> {
  const response = await fetch(`${API_BASE}/api/admin/me`, {
    headers: { Authorization: "Bearer " + token },
  });

  let data: AdminIdentityResponse;
  try {
    data = await response.json();
  } catch {
    throw new Error(
      `Failed to parse server response (HTTP ${response.status})`
    );
  }

  if (!response.ok) {
    throw new Error(
      `Fetching admin identity failed with HTTP ${response.status}`
    );
  }

  return data;
}
