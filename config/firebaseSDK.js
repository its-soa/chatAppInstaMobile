// import firebase from 'firebase';

// class FirebaseSDK {
// 	constructor() {
// 		if (!firebase.apps.length) {
// 			firebase.initializeApp({		
				
// 						apiKey: "AIzaSyAHdpsDuIhJX5KD8ow0dF_2wYHrLyn7NbM",
// 						authDomain: "chatapp-dfbe3.firebaseapp.com",
// 						databaseURL: "https://chatapp-dfbe3.firebaseio.com",
// 						projectId: "chatapp-dfbe3",
// 						storageBucket: "chatapp-dfbe3.appspot.com",
// 						messagingSenderId: "373848222274",
// 						appId: "1:373848222274:web:e2bc5e04e838cf075ddbdb",
// 						measurementId: "G-K74K0GXZXZ"
				
// 			});
// 		}
// 	}
// 	login = async (user, success_callback, failed_callback) => {
// 		await firebase
// 			.auth()
// 			.signInWithEmailAndPassword(user.email, user.password)
// 			.then(success_callback, failed_callback);
// 	};
// }
// const firebaseSDK = new FirebaseSDK();
// export default firebaseSDK;
