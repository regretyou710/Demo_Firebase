const firebaseSetup = require('./firebaseSetup.js');
let admin = firebaseSetup.getAdmin();
let db = admin.firestore();

db.collection('users')
    .get()
    .then(
        (snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            })
        }
    )
    .catch((err) => {
        console.log('Error getting document', err);
    });