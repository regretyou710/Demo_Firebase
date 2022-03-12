const firebaseSetup = require('./firebaseSetup.js');
let admin = firebaseSetup.getAdmin();
let db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;// 服務器時間戳

// 更新數據
async function updData() {
    const userRef = db.collection('users').doc('ut99DPbQ9pHAHIXdt8CI');// 指定ID
    const res = await userRef.update({
        age: 25,
        upddate: FieldValue.serverTimestamp()
    });
}

updData();