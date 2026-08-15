const ADMIN_PIN_KEY = "travelingstar.admin.pin";
const ADMIN_AUTH_KEY = "travelingstar.admin.auth";
const DEFAULT_ADMIN_PIN = "TravelingStar123";

export function getStoredPin() {
  return localStorage.getItem(ADMIN_PIN_KEY) || DEFAULT_ADMIN_PIN;
}

export function isAdminLoggedIn() {
  return localStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

export function loginAdmin(pin) {
  const matched = pin === getStoredPin();
  if (matched) {
    localStorage.setItem(ADMIN_AUTH_KEY, "true");
  }
  return matched;
}

export function logoutAdmin() {
  localStorage.removeItem(ADMIN_AUTH_KEY);
}

export function updateAdminPin(currentPin, nextPin) {
  if (currentPin !== getStoredPin()) {
    return { success: false, message: "Current PIN is incorrect." };
  }

  if (!nextPin || nextPin.length < 4) {
    return { success: false, message: "New PIN must be at least 4 characters." };
  }

  localStorage.setItem(ADMIN_PIN_KEY, nextPin);
  localStorage.setItem(ADMIN_AUTH_KEY, "true");
  return { success: true, message: "PIN updated successfully." };
}
