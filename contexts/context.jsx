'use client'
import { auth, db } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, getDocs, query, updateDoc, where, doc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState()
    const PRef = collection(db, "panier");
    const q = query(PRef, where("userId", "==", `${auth?.currentUser?.uid}`));

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return unsub 
    }, [])

    
    const createUserData = (userName, userId) => {
        return addDoc(collection(db, 'panier'), {
            userName,
            userId,
            products : []
 
        })
    }

    const addProductToP = (userName, userId, quntite, productId) => {
        getDocs(q)
            .then(Docs => {
                Docs.docs.forEach(Doc => {
                    const product = {quntite, productId}
                    const arr1 = Doc?.data().products
                    if(!arr1.some(el => el.productId === product.productId)) {
                        arr1.push(product)
                    }
                    updateDoc(doc(collection(db, 'panier'), `${Doc.id}`), {
                        products : arr1
                        
                    })


                })
 
        })
        .catch(err => console.log(err))
    }

    const updateQuntite = () => {
        
    }




    return(
        <UserContext.Provider value={{createUserData, addProductToP}}>
            {children}
        </UserContext.Provider>
    )
}



export const UserAuth = () => {
    return useContext(UserContext)
}