import { omit } from 'lodash-es'
import { initializeApp } from "firebase/app";
import { 
	Timestamp,
	DocumentData,
	QueryDocumentSnapshot,
	SnapshotOptions,
	FirestoreDataConverter,
	PartialWithFieldValue	
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig)
export type WithId<T> = T & { id:string }//idとともに型を必要とする


const getCoverter = <T>():FirestoreDataConverter<WithId<T>> => ({
	toFirestore:(
		data:PartialWithFieldValue<WithId<T>>
	):DocumentData => {
		return omit(data,['id'])
	},
	fromFirestore:(
		//Tではなく、DocumentDataでエラーが消える
		snapshot:QueryDocumentSnapshot<DocumentData>,
		options:SnapshotOptions
	):WithId<T> => {
		//明示的にasで型キャストが必要になっている
		return { id: snapshot.id, ...snapshot.data(options) } as WithId<T>;
	}

})

export {Timestamp,getCoverter}


// 下記だとうまくいく
// todo:差分を確認。extendsが影響？
// const getConverter = <T extends DocumentData>(): FirestoreDataConverter<WithId<T>> => ({
// 	toFirestore: (data: PartialWithFieldValue<WithId<T>>): DocumentData => {
// 		return omit(data, ['id']);
// 	},
// 	fromFirestore: (snapshot: QueryDocumentSnapshot<T>, options: SnapshotOptions): WithId<T> => {
// 		return { id: snapshot.id, ...snapshot.data(options) };
// 	},
// });