import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { auth } from "../services/firebase/firebase";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

type AuthContextType = {
    currentUser: any;
    signup: any;
    login: any;
    logout: any;
    resetPassword: any;
};

const AuthContextDefaultValues: AuthContextType = {
    currentUser: "",
    signup: () => {},
    login: () => {},
    logout: () => {},
    resetPassword: () => {},
};

type Props = {
    children: ReactNode;
};
const AuthContext = createContext<AuthContextType>(AuthContextDefaultValues);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: Props) => {
    const [currentUser, setCurrentUser] = useState<any>();
    const [loading, setLoading] = useState(true);

    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser(userCredential);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                return `Error ${errorCode} :- ${errorMessage} `;
            });
    };

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser(userCredential);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                return `Error ${errorCode} :- ${errorMessage} `;
            });
    };
    const logout = () => {
        return signOut(auth)
            .then((response) => response)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                return `Error ${errorCode} :- ${errorMessage} `;
            });
    };

    const resetPassword = (email: string) => {
        return sendPasswordResetEmail(auth, email);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
