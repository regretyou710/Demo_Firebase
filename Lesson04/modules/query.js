const firebaseSetup = require('./firebaseSetup.js');
let admin = firebaseSetup.getAdmin();
let db = admin.firestore();

// 讀取數據
async function getData() {
    await db.collection('users').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        });
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
}

getData();