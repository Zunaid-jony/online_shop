import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';


const initializeFifebase =  () =>{
    initializeApp(firebaseConfig);
}

export default initializeFifebase;

