// Reference: https://dev.to/cherylli/importing-json-data-into-firestore-4eko
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
require("dotenv").config();
const data = require(/* 在這裡輸入 json 檔路徑 */);

const firebaseConfig = {
	apiKey: process.env.FIREBASE_PUBLIC_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const importJSON = async () => {
	for await (const item of data) {
		db.collection(/* 輸入 firestore collection 名稱 */).doc().set(item);
	}
};

importJSON();
