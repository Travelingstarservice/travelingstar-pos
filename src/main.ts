import './style.css'
import { API_BASE } from './config'

type LoginResponse = {
  token: string
}

type MeResponse = {
  username: string
}

const appRootElement = document.querySelector<HTMLDivElement>('#app')

if (!appRootElement) {
  throw new Error('Could not find app root element')
}
const appRoot = appRootElement

function navigate(path: string): void {
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path)
  }
  void render()
}

function getAdminToken(): string | null {
  return window.localStorage.getItem('admin_token')
}

function setAdminToken(token: string): void {
  window.localStorage.setItem('admin_token', token)
}

function clearAdminToken(): void {
  window.localStorage.removeItem('admin_token')
}

async function loginAdmin(username: string, password: string): Promise<string> {
  const response = await fetch(`${API_BASE}/api/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })

  const payload = (await response.json()) as Partial<LoginResponse> & { error?: string }
  if (!response.ok || !payload.token) {
    throw new Error(payload.error ?? 'Login failed')
  }

  return payload.token
}

async function fetchAdminIdentity(token: string): Promise<MeResponse> {
  const response = await fetch(`${API_BASE}/api/admin/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const payload = (await response.json()) as Partial<MeResponse> & { error?: string }
  if (!response.ok || !payload.username) {
    throw new Error(payload.error ?? 'Session is not valid')
  }

  return payload as MeResponse
}

function renderLogin(errorMessage = ''): void {
  appRoot.innerHTML = `
    <main class="page">
      <section class="card">
        <h1>Traveling Star Admin</h1>
        <p class="hint">Sign in to continue.</p>
        <form id="admin-login-form" class="form">
          <label>
            Username
            <input name="username" type="text" autocomplete="username" required />
          </label>
          <label>
            Password
            <input name="password" type="password" autocomplete="current-password" required />
          </label>
          <button type="submit">Sign In</button>
        </form>
        <p class="status ${errorMessage ? 'error' : ''}" id="login-status">${errorMessage}</p>
      </section>
    </main>
  `

  const form = document.querySelector<HTMLFormElement>('#admin-login-form')
  if (!form) {
    throw new Error('Could not find admin login form')
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const status = document.querySelector<HTMLParagraphElement>('#login-status')
    if (!status) {
      throw new Error('Could not find login status element')
    }

    status.textContent = 'Signing in...'
    status.classList.remove('error')

    const formData = new FormData(form)
    const username = String(formData.get('username') ?? '')
    const password = String(formData.get('password') ?? '')

    try {
      const token = await loginAdmin(username, password)
      setAdminToken(token)
      navigate('/admin-dashboard')
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to sign in'
      status.textContent = message
      status.classList.add('error')
    }
  })
}

function renderDashboard(username: string): void {
  appRoot.innerHTML = `
    <main class="page">
      <section class="card">
        <h1>Admin Dashboard</h1>
        <p class="hint">Signed in as <strong>${username}</strong>.</p>
        <p class="status">Backend API: ${API_BASE}</p>
        <button id="logout-button" type="button">Log Out</button>
      </section>
    </main>
  `

  const logoutButton = document.querySelector<HTMLButtonElement>('#logout-button')
  if (!logoutButton) {
    throw new Error('Could not find logout button')
  }

  logoutButton.addEventListener('click', () => {
    clearAdminToken()
    navigate('/')
  })
}

async function render(): Promise<void> {
  const path = window.location.pathname
  if (path !== '/' && path !== '/admin-dashboard') {
    navigate('/')
    return
  }

  if (path === '/') {
    renderLogin()
    return
  }

  const token = getAdminToken()
  if (!token) {
    navigate('/')
    return
  }

  try {
    const me = await fetchAdminIdentity(token)
    renderDashboard(me.username)
  } catch {
    clearAdminToken()
    renderLogin('Your session expired. Please sign in again.')
  }
}

window.addEventListener('popstate', () => {
  void render()
})

void render()
