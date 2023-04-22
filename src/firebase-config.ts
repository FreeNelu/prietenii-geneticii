// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCXWueclVjGS0V5rHEnfalgoULb_BQDJbY',
  authDomain: 'prietenii-geneticii-42beb.firebaseapp.com',
  projectId: 'prietenii-geneticii-42beb',
  storageBucket: 'prietenii-geneticii-42beb.appspot.com',
  messagingSenderId: '11485740012',
  appId: '1:11485740012:web:2863241a30e2fdba155ec9'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
