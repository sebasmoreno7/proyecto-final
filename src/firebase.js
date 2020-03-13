import firebase from 'firebase'

    const config = {
        apiKey: "AIzaSyCVvo5T1FN9A_iqStCq0UkpknWb7_elIZE",
        authDomain: "gamee-dda2c.firebaseapp.com",
        databaseURL: "https://gamee-dda2c.firebaseio.com",
        projectId: "gamee-dda2c",
        storageBucket: "gamee-dda2c.appspot.com",
        messagingSenderId: "22100673149",
        appId: "1:22100673149:web:fc25b582a24f4865dba714",
        measurementId: "G-WF7EBSMFWT"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

export default firebase;