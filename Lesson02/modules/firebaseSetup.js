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