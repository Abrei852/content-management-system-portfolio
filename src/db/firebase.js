import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import "firebase/database";


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

const auth = getAuth();

const signInUser = async (email, password) => {
	try {
		await signInWithEmailAndPassword(
			firebaseAuth,
			email,
			password
		);
	} catch (error) {
		console.log(error);
	}
};

const newUser = async (email, password) => {
	try {
		await createUserWithEmailAndPassword(
			firebaseAuth,
			email,
			password
		).then((user) => {
			console.log(user);
		});
	} catch (error) {
		console.log(error);
	}
};

const signOutUser = () => {
	signOut(auth);
};

onAuthStateChanged(auth, (user) => {
	if (user) {

		console.log("User is logged in");
		console.log(user)
	} else {
		console.log("User is signed out");
		sessionStorage.removeItem("token");
	}
});

export { firebaseAuth, signInUser, newUser, signOutUser };