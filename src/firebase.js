import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBpOkmoggSk7rv5H6-1cvDQ4lfBlmcAzJc',
  authDomain: 'paychex-flex-clone.firebaseapp.com',
  projectId: 'paychex-flex-clone',
  storageBucket: 'paychex-flex-clone.firebasestorage.app',
  messagingSenderId: '515479559258',
  appId: '1:515479559258:web:b4cf9782dddd8f66944c63',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
