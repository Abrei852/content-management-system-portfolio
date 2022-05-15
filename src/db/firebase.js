import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDb = getDatabase(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);

const signInUser = async (email, password) => {
	try {
		await signInWithEmailAndPassword(
			firebaseAuth,
			email,
			password
		);
	} catch (error) {
		console.log("Wrong username or password");
	}
};

const signOutUser = () => {
	signOut(firebaseAuth);
};
//Firebase Authentication


//Firebase Realtime Database

export { firebaseAuth, firebaseDb,firebaseStorage, signInUser, signOutUser };
