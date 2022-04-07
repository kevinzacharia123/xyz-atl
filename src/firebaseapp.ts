import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC_dnI9C2gd-fOsvZSFKbd5aP2CltkROdU",
  authDomain: "prototype-atl.firebaseapp.com",
  projectId: "prototype-atl",
  storageBucket: "prototype-atl.appspot.com",
  messagingSenderId: "23214194600",
  appId: "1:23214194600:web:73fe467b13bdf3b2fb679d",
  measurementId: "G-ZZTQD1GM07",
};
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
