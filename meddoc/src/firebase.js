import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCco9W2gdDozjphKuKPeLos4WGnvzUDg1Y",
  authDomain: "meddoc-30a86.firebaseapp.com",
  projectId: "meddoc-30a86",
  storageBucket: "meddoc-30a86.firebasestorage.app",
  messagingSenderId: "146440975300",
  appId: "1:146440975300:web:032bf8ceea3b8ebec6ea91",
  measurementId: "G-CFTNMLQRTZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };