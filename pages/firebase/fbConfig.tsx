import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Firestore,setDoc, DocumentReference,addDoc ,doc,Timestamp, getDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB8HXwcRWOleFIBWZEmaufnKZJ4GCr7OVM",
  authDomain: "myproject-e20ae.firebaseapp.com",
  projectId: "myproject-e20ae",
  storageBucket: "myproject-e20ae.appspot.com",
  messagingSenderId: "725377492611",
  appId: "1:725377492611:web:8c3b855f5755cc78c4ddb6",
  measurementId: "G-18PJE7CKKW"
};


// Initialize Firebase with a "default" Firebase project
const defaultProject = initializeApp(firebaseConfig);
let defaultFirestore = getFirestore(defaultProject);

// Option 1: Access Firebase services via the defaultProject variable
// const firebase = require('firebase'); // eslint-disable-line global-require
// require('firebase/firestore'); // eslint-disable-line global-require
// const db = firebase.firestore();
// const query = db.collection('cities').get()
// console.log(query);

// Get a list of cities from your database
async function getCities(db: Firestore) {
    console.log("----------------");
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(collection(db, 'cities'));
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
    console.log("----------------");
  //const q = query(collection(db, "cities"), where("cities", "==", "HCM"));
//   const citySnapshot2 = await getDocs(collection(db, "cities"),where("cities", "===", "HCM"));
  //const citySnapshot2 = await getDocs(collection(db, "cities"));
  //const cityList2 = citySnapshot.docs.map(doc => doc.data());
  //console.log(cityList2);
  //console.log(cityList2[2]);
 console.log(">>>----------------");
  //const docRef = doc(db, "cities", "SF");
  const docSnap = await getDocs(collection(db, 'cities#cities'));
  const cityList2 = docSnap.docs.map(doc => doc.data());

console.log("cityList2");
  console.log(cityList2);

  const docSnap2 = await getDocs(collection(db, 'cities#1'));
  const cityList3 = docSnap2.docs.map(doc => doc.data());
  console.log("cityList3");
  console.log(cityList3);


  // 
  console.log("Add Use------------------------");
  
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  console.log("Read Use=-000000000000");
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });


  try {
    const docRef = await addDoc(collection(db, "users"), {
      id: "123123123123123",
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }




  // Add a new document in collection "cities"
  await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    country2: "asdasdasdas"
  });


  const docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "4444",
            nested3: "foo"
        }
    }
  };
  await setDoc(doc(db, "data", "link1"), docData);



  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "cities"), {
    name: "Tokyo",
    country: "Japan"
  });
  console.log("Document written with ID: ", docRef.id);


  const docRef3 = doc(db, "cities", "HCM");
  const docSnap3 = await getDoc(docRef3);

  if (docSnap3.exists()) {
    console.log("Document data:", docSnap3.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  const docRef4 = doc(db, "cities", "ISTEFuYJPD9uZ0pAZBhi");
  const docSnap4 = await getDoc(docRef4);

  if (docSnap4.exists()) {
    console.log("Document data:", docSnap4.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }


  //
    // Add a new document with a generated id.
  const docRef5 = await addDoc(collection(db, "cities"), {
    name: "Tokyo",
    country: "Japan"
  });
  console.log("Document written with ID: ", docRef5.id);

  return "cityList";
}


const Fbconfig = () => {
    console.log("Fbconfig");
    console.log(defaultProject.name);  // "[DEFAULT]"

    getCities(defaultFirestore);
    return <div>Fbconfig</div>
}
export default Fbconfig;