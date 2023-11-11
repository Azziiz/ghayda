'use client'
import React, { useState } from 'react'
import Styles from './page.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function page() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const signIn = async(e) => {
        e.preventDefault()
        try{
            await signInWithEmailAndPassword(auth, email, password)
            router.push('/')
        }catch (e) {
          console.log(e.message)
      }
    }

    console.log(auth.currentUser)

  return (
    <div className={Styles.main}>
        <form onSubmit={signIn}>
            <input type="email" placeholder='EMAIL' onChange={(e) => {setEmail(e.target.value)}} required/>
            <input type="password" placeholder='PASSWORD' onChange={(e) => {setPassword(e.target.value)}} required/>
            <button action='submit' > une compte</button>
            <span>Don't have an account? <Link href='/signup'>Sign Up</Link></span>
        </form>
    </div>
  )
}

export default page