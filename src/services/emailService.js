import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL

export function sendLoginNotification({ username, loginTime }) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn('EmailJS is not configured — admin notification email skipped.')
    return Promise.resolve()
  }

  const loginDate = new Date(loginTime)
  const formattedTime = Number.isNaN(loginDate.getTime())
    ? String(loginTime)
    : loginDate.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit' })

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      to_email: ADMIN_EMAIL,
      username,
      login_time: formattedTime,
      status: 'Awaiting Verification Code',
    },
    PUBLIC_KEY
  )
}
