const ADMIN_PIN_KEY = "travelingstar.admin.pin";
const ADMIN_AUTH_KEY = "travelingstar.admin.auth";
const DEFAULT_ADMIN_PIN = "TravelingStar123";

function safeLocalStorageGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn("localStorage.getItem failed:", e);
    return null;
  }
}

function safeLocalStorageSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.warn("localStorage.setItem failed:", e);
    return false;
  }
}

function safeLocalStorageRemoveItem(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    console.warn("localStorage.removeItem failed:", e);
    return false;
  }
}

export function getStoredPin() {
  return safeLocalStorageGetItem(ADMIN_PIN_KEY) || DEFAULT_ADMIN_PIN;
}

export function isAdminLoggedIn() {
  return safeLocalStorageGetItem(ADMIN_AUTH_KEY) === "true";
}

export function loginAdmin(pin) {
  const matched = pin === getStoredPin();
  if (matched) {
    safeLocalStorageSetItem(ADMIN_AUTH_KEY, "true");
  }
  return matched;
}

export function logoutAdmin() {
  safeLocalStorageRemoveItem(ADMIN_AUTH_KEY);
}

export function updateAdminPin(currentPin, nextPin) {
  if (currentPin !== getStoredPin()) {
    return { success: false, message: "Current PIN is incorrect." };
  }

  if (!nextPin || nextPin.length < 4) {
    return { success: false, message: "New PIN must be at least 4 characters." };
  }

  safeLocalStorageSetItem(ADMIN_PIN_KEY, nextPin);
  safeLocalStorageSetItem(ADMIN_AUTH_KEY, "true");
  return { success: true, message: "PIN updated successfully." };
}
