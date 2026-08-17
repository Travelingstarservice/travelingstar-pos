const ADMIN_LOGGED_IN_KEY = "adminLoggedIn";
const ADMIN_PIN_KEY = "adminPin";

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
  return safeLocalStorageGetItem(ADMIN_PIN_KEY);
}

export function isAdminLoggedIn() {
  return safeLocalStorageGetItem(ADMIN_LOGGED_IN_KEY) === "true";
}

export function loginAdmin() {
  safeLocalStorageSetItem(ADMIN_LOGGED_IN_KEY, "true");
}

export function logoutAdmin() {
  safeLocalStorageRemoveItem(ADMIN_LOGGED_IN_KEY);
}

export function updateAdminPin(newPin) {
  safeLocalStorageSetItem(ADMIN_PIN_KEY, newPin);
  safeLocalStorageSetItem(ADMIN_LOGGED_IN_KEY, "true");
}
