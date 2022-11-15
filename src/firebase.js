    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBp29kpoqJBBHw0WfGQ-r4MFOcIHxSuC1E",
  authDomain: "tiktok-clone-d9eeb.firebaseapp.com",
  projectId: "tiktok-clone-d9eeb",
  storageBucket: "tiktok-clone-d9eeb.appspot.com",
  messagingSenderId: "719527324668",
  appId: "1:719527324668:web:a8148606925eaa8affe079",
  measurementId: "G-5ZHFG4SGQ5"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export default db