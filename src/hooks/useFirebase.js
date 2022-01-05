import firebaseInitialize from "../Firebase/firebase.init";
import { signInWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword,  updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialize();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
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
          .then(() => {
            
          })
          .catch((error) => {});
          window.alert('user created');
          history.push('/');
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
    const googleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.push(destination);
          }).catch((error) => {
            setAuthError(error.message);
          }).finally(() => setIsLoading(false));
      };

    // Observer user on auth change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } 
          else {
            setUser({})
          }
          setIsLoading(false);
        });
      }, [auth]);

    // Logout 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
          .then(() => {
            setUser({});
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
      };

    return {registerUser, emailSignIn, googleSignIn, logOut, user, error, setError, authError, isLoading};
};

export default useFirebase;