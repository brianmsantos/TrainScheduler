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

$("#submit").on("click", function() {
    event.preventDefault();
    console.log("does this work")
    train = $("#inputTrainName").val().trim();
    destination = $("#inputDestination").val().trim();
    arrival = $("#inputTrainTime").val().trim();
    minutes = $("#inputFrequency").val().trim();

    database.ref().push({
        train: train,
        destination: destination,
        arrival: arrival,
        minutes: minutes,
    })

})

database.ref().on("child_added", function(snapshot) {

    // Log everything that's coming out of snapshot

    console.log(snapshot.val());
    console.log(snapshot.val().train);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().arrival);
    console.log(snapshot.val().minutes);

    // Change the HTML to reflect

    // $("#inputTrainName").append(snapshot.val().train);
    // $("#inputDestination").append(snapshot.val().destination);
    // $("#inputTrainTime").append(snapshot.val().arrival);
    // $("#inputFrequency").append(snapshot.val().minutes);

    $("tbody").append(`<tr><td>${snapshot.val().train}</td><td>${snapshot.val().destination}</td><td>${snapshot.val().minutes}</td><td><td></td><tr>`)

    // Handle the errors

}, function(errorObject) {

    console.log("Errors handled: " + errorObject.code);

});

// create a function that will calculate time real time


console.log(moment())

console.log(moment({ hour: 2, minute: 30 }).format())