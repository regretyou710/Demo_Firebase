服務器SDK安裝 - Firebase Admin SDK
==================================

## 知識點

* 服務器端全功能管理SDK安裝 - Firebase Admin SDK

## 官網

https://firebase.google.com/docs/admin/setup

## 官方樣例

https://github.com/firebase/firebase-admin-node

## 控制台

https://console.firebase.google.com

## 實戰演練

~~~bash
$ mkdir Lesson02
$ cd Lesson02
$ npm init
$ npm install firebase-admin-node --save
$ mkdir modules
$ cd modules
$ type nul > firebaseSetup.js
...
...
$ node firebaseSetup.js
~~~

## 在Firebase生成新的專案項目-LearnFirebase

## 生成(Firebase控制台-項目設置-服務帳號)

 *生成新的私鑰*

 'reactnative-4876e-firebase-adminsdk-8jr6i-b23cc28f89.json'

 ## firebaseSetup.js

```js
// 導入firebase-admin管理包
let admin = require('firebase-admin');

// 導入私鑰並用firebase管理包初始化
let serviceAccount = require('../reactnative-4876e-firebase-adminsdk-8jr6i-b23cc28f89.json');

function getAdmin() {
    admin.initializeApp(
        {
            credential: admin.credential.cert(serviceAccount),
        }
    );

    // 測試是否初始成功
    // var defaultProjectManagement = admin.projectManagement();
    // console.log(defaultProjectManagement);

    return admin;
}

exports.getAdmin = getAdmin;
```

## firebaseConnect.js

```js
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
```