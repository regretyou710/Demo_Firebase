const firebaseSetup = require('./firebaseSetup.js');
let admin = firebaseSetup.getAdmin();
let db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;// 服務器時間戳

// 刪除數據
async function delData() {
    let deleteDoc = await db.collection('users').doc('lHcrPBrY79sKVw0xnUcf').delete();
    console.log(deleteDoc)
}

delData()