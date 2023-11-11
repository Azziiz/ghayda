'use client'
import React, { useEffect, useState } from 'react'
import Styles from './page.module.css'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/firebase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { UserAuth } from '@/contexts/context'
import { getDocs } from 'firebase/firestore'


function page() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const router = useRouter()
    const { createUserData } = UserAuth()



    const signUp = async(e) => {
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, {displayName: name})
            await createUserData(name, auth.currentUser.uid)
            router.push('/')
        }catch (e) {
          console.log(e.message)
      }
    }

    console.log(auth.currentUser)

  return (
    <div className={Styles.main}>
        <form onSubmit={signUp}>
            <input type='text' placeholder='NOM ET PRENOM' onChange={(e) => {setName(e.target.value)}} required/>
            <input type="email" placeholder='EMAIL' onChange={(e) => {setEmail(e.target.value)}} required/>
            <input type="password" placeholder='PASSWORD' onChange={(e) => {setPassword(e.target.value)}} required/>
            <button action='submit' >créer une compte</button>
            <span>Already have an account? <Link href='/signin'>Sign In</Link></span>
        </form>
    </div>
  )
}

export default page