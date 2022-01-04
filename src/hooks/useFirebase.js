import firebaseInitialize from "../Firebase/firebase.init";
import { signInWithEmailAndPassword, getIdToken, GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword,  updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialize()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('');
          const newUser = { email, displayName: name };
          setUser(newUser);

          // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name
          })
          .then(() => {})
          .catch((error) => {});
          navigate('/');
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    return {registerUser, error, isLoading}
};

export default useFirebase;