import firebase from "firebase";
import { doc, setDoc } from "firebase/firestore";
import { atom, useRecoilValue } from "recoil";

const firebaseState = atom<firebase.app.App>({
  key: "firebaseState",
  default: firebase.apps.length ?
    firebase.apps[0] :
    firebase.initializeApp({
      // TODO: env 파일로 옮기기
      apiKey: "AIzaSyDU0GT63cV3NABFA5FxFQADOKwlIp9u0wQ",
      authDomain: "baeppo-dd96b.firebaseapp.com",
      projectId: "baeppo-dd96b",
      storageBucket: "baeppo-dd96b.appspot.com",
      messagingSenderId: "339297773041",
      appId: "1:339297773041:web:90a51b95f54de7e9069050",
      measurementId: "G-ZQG3584P3Z",
    }),
});

export const useFirebaseAuth = (): firebase.auth.Auth => {
  const fApp = useRecoilValue(firebaseState);

  return fApp.auth();
};

export const useFirebaseDb = (): firebase.firestore.Firestore => {
  const fApp = useRecoilValue(firebaseState);

  return fApp.firestore();
};

export default firebaseState;
