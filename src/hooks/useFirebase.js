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
    };

    // email sign in 
    const emailSignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email , password);
      };

    // Google sign in
    const googleSignIn = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
            const destination = location?.state?.from || '/';
            navigate(destination);
          }).catch((error) => {
            setAuthError(error.message);
          }).finally(() => setIsLoading(false));
      };

    return {registerUser, emailSignIn, googleSignIn, error, isLoading};
};

export default useFirebase;