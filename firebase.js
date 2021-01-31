import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDRb7Iqjwz_oJj5C2j4DZ8BED_54WoBvjU",
  authDomain: "codedsignal-93c20.firebaseapp.com",
  projectId: "codedsignal-93c20",
  storageBucket: "codedsignal-93c20.appspot.com",
  messagingSenderId: "169873842086",
  appId: "1:169873842086:web:088bef8bb410d6fa3af967"
}

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
