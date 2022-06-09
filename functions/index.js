const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.sendMessage = functions.firestore
    .document('Companies/{companyId}')
    .onCreate(event => {
        const docId = event.params.companyId;

        const name = event.data.data().name;

        const companyRef = admin.firestore().collection('Companies').doc(docId);

        return companyRef.update({ message: `${name} has been added to the database` })
    });