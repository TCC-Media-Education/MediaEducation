import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC0bygvBgz8vky19yfPaJoagDxjD0FiK4c",
  authDomain: "tccmediaeducation.firebaseapp.com",
  projectId: "tccmediaeducation",
  storageBucket: "tccmediaeducation.appspot.com",
  messagingSenderId: "224052742222",
  appId: "1:224052742222:web:f37a60d7f96682dddb9b1f"
};

const app = initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;