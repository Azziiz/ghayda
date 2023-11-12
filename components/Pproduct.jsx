'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/pproduct.module.css'
import Image from 'next/image'
import { nunito } from '@/fonts'
import { collection, doc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/firebase'
function Pproduct({Id}) {
    const [product, setProduct] = useState()

    useEffect(() => {
        getDoc(doc(collection(db, 'products'), `${Id}`))
            .then(doc => setProduct(doc.data()))
    }, [auth?.currentUser])

    const [quntite, setQuntite] = useState(product?.quntite)
  return (
    <div className={styles.main}>
      <Image />
      <div>
        <h2 className={styles.name}>{product?.name}</h2>
            <div className={styles.stars}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                <path d="M12.5 0L16.541 6.93801L24.3882 8.63729L19.0385 14.6245L19.8473 22.6127L12.5 19.375L5.15268 22.6127L5.96149 14.6245L0.611794 8.63729L8.45898 6.93801L12.5 0Z" fill="#B98DFF"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                <path d="M12.5 0L16.541 6.93801L24.3882 8.63729L19.0385 14.6245L19.8473 22.6127L12.5 19.375L5.15268 22.6127L5.96149 14.6245L0.611794 8.63729L8.45898 6.93801L12.5 0Z" fill="#B98DFF"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                <path d="M12.5 0L16.541 6.93801L24.3882 8.63729L19.0385 14.6245L19.8473 22.6127L12.5 19.375L5.15268 22.6127L5.96149 14.6245L0.611794 8.63729L8.45898 6.93801L12.5 0Z" fill="#B98DFF"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                <path d="M12.5 0L16.541 6.93801L24.3882 8.63729L19.0385 14.6245L19.8473 22.6127L12.5 19.375L5.15268 22.6127L5.96149 14.6245L0.611794 8.63729L8.45898 6.93801L12.5 0Z" fill="#B98DFF"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                <path d="M12.5 0L16.541 6.93801L24.3882 8.63729L19.0385 14.6245L19.8473 22.6127L12.5 19.375L5.15268 22.6127L5.96149 14.6245L0.611794 8.63729L8.45898 6.93801L12.5 0Z" fill="#B98DFF"/>
                </svg>
                <span>(5)</span>
            </div>  
            <div  className={`${styles.quntite} ${nunito.className}`}>
                <h2 className={nunito.className}>QUNTITE</h2>
                <button onClick={() => {quntite > 1 && setQuntite(Quntite => Quntite -= 1)}}> - </button>
                <div>{quntite}</div>
                <button onClick={() => {setQuntite(Quntite => Quntite += 1)}}> + </button>  
            </div>
            <h1 className={`${styles.price} ${nunito.className}`} style={{background: `${product?.colors[0]}`}}>{product?.price}</h1>
      </div>
    </div>
  )
}

export default Pproduct
