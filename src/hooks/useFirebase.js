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
            setAuthError('');
            const destination = location?.state?.from || '/';
            navigate(destination);
          }).catch((error) => {
            setAuthError(error.message);
          }).finally(() => setIsLoading(false));
      };

    // Observer user on auth change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            getIdToken(user)
            .then(idToken =>{
              setToken(idToken);
            })
          } 
          else {
            setUser({})
          }
          setIsLoading(false);
        });
      }, [auth, user]);

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

    return {registerUser, emailSignIn, googleSignIn, logOut, user, error, authError, isLoading, token};
};

export default useFirebase;