
import initializeFifebase from './../Componet/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
initializeFifebase()


const useFirebase = () =>{
const [user, setUser] = useState({})
// register user
const auth = getAuth();
const registerUser =  ( email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}

return {
    user,

}


}
export default useFirebase