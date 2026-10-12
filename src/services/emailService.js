import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ue3tbfh'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_r3pnixl'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'g3-ZjGmURRP_KxUh8'
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'thane7537@gmail.com'

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
