// Initialize Firebase
var config = {
    apiKey: "AIzaSyB9DxbYZeIuC1H7HP-pfYseVq9Iz_F5C2U",
    authDomain: "train-d59b1.firebaseapp.com",
    databaseURL: "https://train-d59b1.firebaseio.com",
    projectId: "train-d59b1",
    storageBucket: "",
    messagingSenderId: "1086267242322"
};
firebase.initializeApp(config);

let database = firebase.database();
let train = ""
let destination = ""
let frequency = ""
let arrival = ""
let minutes = ""