const signInBtn = document.getElementById("signInBtn"); //access our buttons
const signOutBtn = document.getElementById("signOutBtn");

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut(); // won't be bad to add a sing out buttons once the user is signed in
const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");
const userDetails = document.getElementById("userDetails");

auth.onAuthStateChanged((user) => {
  if (user) {
    // signed in
    console.log(user); //you can play around with this as much as you like now
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> `;
    document.getElementById("cool").src = user.photoURL;
  } else {
    // not signed in
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = "";
  }
});
