document.addEventListener("DOMContentLoaded", event => {
    
    const app = firebase.app()

    const db = firebase.firestore();

    const myCompanies = db.collection("Companies").doc("GymReapers");

    myCompanies.onSapshot(doc => {

        const data = doc.data();
        document.querySelector('#title').innerHTML = data.title;
    })
});

// function googleLogin() {
//     const provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider)
//         .then(result => {
//             const user = result.user;
//             document.write(`Hello ${user.displayName}`);
//             console.log(user);
//         })
//         .catch(console.log)
// }

function updateCompany(e) {
    const db = firebase.firestore();
    const myCompanies = db.collection("Companies").doc("GymReapers");
    myCompanies.update({ title: e.target.value})
}

function uploadFile(files) {
    const storageRef = firebase.storage().ref();
    const imgRef = storageRef.child('Step1.png');

    const file = file.item(0);
    const task = imgRef.put(file);

    task.then(snapshot => {
        console.log(snapshot)
        const url = snapshot.downloadURL
        document.querySelector('#imgUpload').setAtribute('src', url);
    })
}