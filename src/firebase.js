import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCGaeUQSEuGh5pH96L_HnuvywTHFOybGX4",
    authDomain: "reactjs-d0812.firebaseapp.com",
    databaseURL: "https://reactjs-d0812.firebaseio.com",
    projectId: "reactjs-d0812",
    storageBucket: "reactjs-d0812.appspot.com",
    messagingSenderId: "932807588581",
    appId: "1:932807588581:web:58382ef4f47bc23dcef20c",
    measurementId: "G-ZM6F5JQNW1"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export default fb;
 