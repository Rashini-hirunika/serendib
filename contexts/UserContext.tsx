import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

type UserData = {
  name: string;
  email: string;
  profilePic: string;
} | null;

type UserContextType = {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
  loading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);

      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      const firebaseName = firebaseUser.displayName || "Traveler";
      const firebaseEmail = firebaseUser.email || "";
      const firebasePhoto = firebaseUser.photoURL || "";

      try {
        const userRef = doc(db, "users", firebaseUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();

          setUser({
            name: data.name || firebaseName,
            email: data.email || firebaseEmail,
            profilePic: data.profilePic || firebasePhoto,
          });
        } else {
          setUser({
            name: firebaseName,
            email: firebaseEmail,
            profilePic: firebasePhoto,
          });
        }
      } catch (error) {
        console.log("USER CONTEXT ERROR:", error);

        setUser({
          name: firebaseName,
          email: firebaseEmail,
          profilePic: firebasePhoto,
        });
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};