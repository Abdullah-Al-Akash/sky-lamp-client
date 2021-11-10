import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
        const [user, setUser] = useState({});
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [isLogin, setIsLogin] = useState(false);
        const [error, setError] = useState('');

        const [isLoading, setIsLoading] = useState(true);

        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();

        // Sign In With Google:
        const signInWithGoogle = () => {
                setIsLoading(true);
                return signInWithPopup(auth, googleProvider)
        };

        // Observe User State Change:
        useEffect(() => {
                const unsubscribe = onAuthStateChanged(auth, user => {
                        if (user) {
                                setUser(user);
                        }
                        else {
                                setUser({});
                        }
                        setIsLoading(false);
                })
                return unsubscribe;
        }, [])


        // Log Out:
        const logOut = () => {
                setIsLoading(true);
                signOut(auth)
                        .then(() => {
                                setUser({});
                        })
                        .finally(() => setIsLoading(false));
        }

        // Sign Up and Sign In Using Email Password:
        const handleEmail = e => {
                setEmail(e.target.value)
        }
        const handlePassword = e => {
                setPassword(e.target.value);
        }
        const handleName = e => {
                setName(e.target.value);
        }

        // Create New User:
        const handleRegistration = () => {
                setIsLoading(true)
                // e.preventDefault();
                if (password?.length < 6) {
                        setError('Password Must be at least 6 digit');
                        alert('Password Must be at least 6 digit');
                        window.location.reload();
                        return;
                }
                console.log(email, password, name)
                return createUserWithEmailAndPassword(auth, email, password)
                // .then(result => {
                //         console.log(result.user)
                //         setError('')
                //         setUserName()
                //         // alert('Successfully Create Account! Please Login Now!');
                //         // logOut()
                // })
                // .catch(error => {
                //         setError(error.message);
                // })
                // .finally(() => setIsLoading(false));
        }

        // Login User:
        const handleUserLogin = () => {
                setIsLoading(true)
                // e.preventDefault();
                if (password?.length < 6) {
                        setError('Password Must be at least 6 digit');
                        alert('Password Must be at least 6 digit');
                        window.location.reload();
                        return;
                }
                console.log(email, password)
                signInWithEmailAndPassword(auth, email, password)
                        .then(result => {
                                console.log(result.user)
                                setError()
                        })
                        .catch(error => {
                                alert('Invalid Password, Try Again');
                                setError(error.message);
                        })
                        .finally(() => setIsLoading(false))
        }

        const setUserName = () => {
                setIsLoading(true)
                updateProfile(auth.currentUser, { displayName: name })
                        .then(result => {
                                window.location.reload()
                        })
                        .finally(() => { setIsLoading(false) })
        }
        return {
                user,
                isLoading,
                signInWithGoogle,
                logOut,
                handleName,
                handleEmail,
                handlePassword,
                handleRegistration,
                handleUserLogin,
                error,
                setError, setIsLoading, setUserName,
        }
}

export default useFirebase;