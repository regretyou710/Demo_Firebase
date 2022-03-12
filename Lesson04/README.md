使用數據庫服務 - Cloud Firestore
==============================

## 知識點

* 建立NoSql數據庫服務
* 通過Node.js接口訪問數據庫

## Firebase Admin Node.js SDK Reference

https://firebase.google.com/docs/reference/admin/node

## 控制台

https://console.firebase.google.com

## 實戰演習

### 提前準備

~~~bash
$ npm init -y
$ npm install firebase-admin --save
~~~

### main.js

~~~js
const admin = require('firebase-admin');
// 取得Key認證文件
var serviceAccount = require("../../reactnative-4876e-firebase-adminsdk-8jr6i-b23cc28f89.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// 數據庫對象
let db = admin.firestore();

// 服務器時間戳
const FieldValue = admin.firestore.FieldValue;

// addData()
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

// getData()
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

// updData()
// 更新數據
async function updData() {
    const userRef = db.collection('users').doc('RNd4RyaDsHE8fsQr6DV1');
    const res = await userRef.update({
        age: 25,
        upddate: FieldValue.serverTimestamp()
    });
}

// delData()
// 刪除數據
async function delData() {
    let deleteDoc = await db.collection('users').doc('RNd4RyaDsHE8fsQr6DV1').delete();
    console.log(deleteDoc)
}
~~~