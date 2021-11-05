import firebase from '@react-native-firebase/app';
import { Platform } from 'react-native';

// Your secondary Firebase project credentials...
const credentials = {
  apiKey: "AIzaSyB8HXwcRWOleFIBWZEmaufnKZJ4GCr7OVM",
  authDomain: "myproject-e20ae.firebaseapp.com",
  projectId: "myproject-e20ae",
  storageBucket: "myproject-e20ae.appspot.com",
  messagingSenderId: "725377492611",
  appId: "1:725377492611:web:8c3b855f5755cc78c4ddb6",
  measurementId: "G-18PJE7CKKW"
};

const config = {
  name: 'SECONDARY_APP',
};

await firebase.initializeApp(credentials, config);