const firebaseSetup = require('./firebaseSetup.js');
let admin = firebaseSetup.getAdmin();
let db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;// 服務器時間戳

// 添加數據
async function addData() {
    for (i = 1; i <= 5; i++) {
        const res = await db.collection('users').add({
            name: '用戶' + i,
            sex: i % 2 == 0 ? '男' : '女',
            regdate: FieldValue.serverTimestamp()
        });
        console.log('Added document with ID: ', res.id);
    }
}

addData();