import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBM3NwvJ0fW_8b5xBT6DRZZebnZLIx4EoA",
  authDomain: "i-can-tell.firebaseapp.com",
  databaseURL: "https://i-can-tell.firebaseio.com",
  projectId: "i-can-tell",
  storageBucket: "i-can-tell.appspot.com",
  messagingSenderId: "611188270205",
  appId: "1:611188270205:web:9dc68e43929ae5d5"
};
// firebase.initializeApp(firebaseConfig);
// const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todos")


// export default () => {
//   let database;
//   console.log("이니셜")
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }
//   database = firebase.database()
// }
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
