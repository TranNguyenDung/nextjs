import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// import firebase from 'firebase/app'


const firebaseConfig  ={
  apiKey: "AIzaSyB8HXwcRWOleFIBWZEmaufnKZJ4GCr7OVM",
  authDomain: "myproject-e20ae.firebaseapp.com",
  projectId: "myproject-e20ae",
  storageBucket: "myproject-e20ae.appspot.com",
  messagingSenderId: "725377492611",
  appId: "1:725377492611:web:8c3b855f5755cc78c4ddb6",
  measurementId: "G-18PJE7CKKW"
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCities() {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}


export default getCities