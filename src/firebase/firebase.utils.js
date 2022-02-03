import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyBfrNu31gZCKoEUGiZH8VTSjErYEkX21hs",
    authDomain: "crwn-db-e4b83.firebaseapp.com",
    projectId: "crwn-db-e4b83",
    storageBucket: "crwn-db-e4b83.appspot.com",
    messagingSenderId: "791993736181",
    appId: "1:791993736181:web:7ead55f37f9cf843d0debc"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase

