'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/pproduct.module.css'
import Image from 'next/image'
import { nunito, original_Surfer } from '@/fonts'
import { collection, doc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/firebase'
function Pproduct({Id, Quntite}) {
    const [product, setProduct] = useState()

    useEffect(() => {
        getDoc(doc(collection(db, 'products'), `${Id}`))
            .then(doc => setProduct(doc.data()))
    }, [auth?.currentUser])

    const [quntite, setQuntite] = useState(Quntite)
  return (
    <div className={styles.main}>
      <div className={styles.mainImg} style={{background: `${product?.colors[0]}`}}>
        <Image className={styles.img}src={product?.images[0]} width='0' height='0' sizes="100vw" alt="Picture of the author" as='image'/>
      </div>
      <div className={styles.info}>
        <div className={styles.top_info}>
            <h2 className={`${styles.title} ${original_Surfer.className}`}>{product?.name}</h2>
            <div  className={`${styles.quntite} ${nunito.className}`}>
                <h2 className={nunito.className}>QUNTITE</h2>
                <button onClick={() => {quntite > 1 && setQuntite(Quntite => Quntite -= 1)}}> - </button>
                <div>{quntite}</div>
                <button onClick={() => {setQuntite(Quntite => Quntite += 1)}}> + </button>  
            </div>
        </div>
          <h1 className={`${styles.price} ${nunito.className}`} style={{background: `${product?.colors[0]}`}}>{product?.price}</h1>
      </div>
    </div>
  )
}

export default Pproduct
