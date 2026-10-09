import { doc, setDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase.js'

const REQUEST_REF = doc(db, 'loginRequests', 'current')

export function createPendingRequest(username, loginTime = new Date().toISOString()) {
  return setDoc(REQUEST_REF, {
    username,
    loginTime,
    status: 'pending',
    code: null,
  })
}

export function setVerificationCode(code) {
  return setDoc(REQUEST_REF, { code: String(code), status: 'code_set' }, { merge: true })
}

export function approveRequest() {
  return setDoc(REQUEST_REF, { status: 'approved' }, { merge: true })
}

export function subscribeToRequest(onChange) {
  return onSnapshot(
    REQUEST_REF,
    (snap) => onChange(snap.exists() ? snap.data() : null),
    (err) => console.error('Login request sync error:', err)
  )
}
