import {getApp,getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyC6Utki1zDNNL3AsHhlWTW0acdpPIOAr5E",
  authDomain: "honey-website-83c9d.firebaseapp.com",
  databaseURL: "https://honey-website-83c9d-default-rtdb.firebaseio.com",
  projectId: "honey-website-83c9d",
  storageBucket: "honey-website-83c9d.appspot.com",
  messagingSenderId: "464858535192",
  appId: "1:464858535192:web:16e3f134826a36a4ecfa6d"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};
