'use client'
import { useParams } from 'next/navigation'
import Images from '@/components/Images'
import styles from './page.module.css'
import { nunito, original_Surfer } from '@/fonts'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/firebase'
import { UserAuth } from '@/contexts/context'

function ProductPage() {
  
    const {id} = useParams()
    const [quntite, setQuntite] = useState(1)
    const [data, setData] = useState()
    const docRef = doc(db, 'products', `${id}`)
    const { addProductToP } = UserAuth()
    
    useEffect(() => {

        getDoc(docRef)
          .then(data => setData(data.data()))
          .catch(err => console.log(err))

    }, [])
    console.log(data?.id)

    const ajoute = () => {
      addProductToP(auth?.currentUser?.displayName, auth?.currentUser?.uid, quntite, id)
    }

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.gallery}>
         {data?.images && <Images images={data?.images}/>} 
        </div>
        <div className={styles.product_info}>
          <div className={styles.top_info}>
            <h2  className={`${styles.product_name} ${original_Surfer.className}`}>{data?.name}</h2>
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
            <div className={styles.price}>{data?.price}DT</div>
          </div>
          <div className={styles.color_options}>
            <h2 className={nunito.className}>COULEUR</h2>
            <div className={styles.color} style={{background:`${data?.colors[0]}`}}></div>
            <div className={styles.color} style={{background:`${data?.colors[1]}`}}></div>
            <div className={styles.color} style={{background:`${data?.colors[2]}`}}></div>
          </div>
          <div  className={`${styles.quntite} ${nunito.className}`}>
            <h2 className={nunito.className}>QUNTITE</h2>
            <button onClick={() => {quntite > 1 && setQuntite(Quntite => Quntite -= 1)}}> - </button>
            <div>{quntite}</div>
            <button onClick={() => {setQuntite(Quntite => Quntite += 1)}}> + </button>
          </div>
          <div className={styles.buttons}>
            <button className={nunito.className} id={styles.commander}>COMMANDER</button>
            <button className={nunito.className} id={styles.ajb} onClick={ajoute}>AJOUTER AU PANIER</button>
          </div>
          <div className={styles.desc}>
            <h2 className={original_Surfer.className}>{data?.desc_title}</h2>
            <h4 className={nunito.className}>{data?.desc}</h4>
          </div>
          <div className={styles.rec}>
            <h2 className={nunito.className}>Tu pourrais aussi aimer</h2>
            <div>
              <Image
                priority
                src='https://s3-alpha-sig.figma.com/img/c8b4/6fec/e7dd96a4aa71662273aefe61150cef0b?Expires=1699833600&Signature=lPAFE9FUJHXagDUW14B4-uJ6bU2VIomSJMT8TTf1J2npKEF~5DEZv1Db2yXLThoTB-Lpfx~j7uBdln2UqnEawcHd0FwzVSpe6Lq99bv1f6imL3rUBnbmZvEWo5koFVmsJHDdDC3vGnXSM27N5YsKy7gScrVsUjlcUv6YvOE-PVNPadM~-H1j20m00rLNQkUSEsSgbZ56ga0HfGybgKCskUM3SU26LSdZLRIRQ0fSkzxlafhDJRQJFjsoT4VPUj0OnAEftJPjS5Uon642f2Jnz7qbJTWZLqyprdLAAsv6q8OemDGK4ThSckd~Xij~0R7klw5d~CG4XrUYNcOrQcuY4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                width="0"
                height="0"
                sizes="50vw"
                alt="Picture of the author"
                as="image"
              />
              <Image
                priority
                src='https://s3-alpha-sig.figma.com/img/c8b4/6fec/e7dd96a4aa71662273aefe61150cef0b?Expires=1699833600&Signature=lPAFE9FUJHXagDUW14B4-uJ6bU2VIomSJMT8TTf1J2npKEF~5DEZv1Db2yXLThoTB-Lpfx~j7uBdln2UqnEawcHd0FwzVSpe6Lq99bv1f6imL3rUBnbmZvEWo5koFVmsJHDdDC3vGnXSM27N5YsKy7gScrVsUjlcUv6YvOE-PVNPadM~-H1j20m00rLNQkUSEsSgbZ56ga0HfGybgKCskUM3SU26LSdZLRIRQ0fSkzxlafhDJRQJFjsoT4VPUj0OnAEftJPjS5Uon642f2Jnz7qbJTWZLqyprdLAAsv6q8OemDGK4ThSckd~Xij~0R7klw5d~CG4XrUYNcOrQcuY4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                width="0"
                height="0"
                sizes="50vw"
                alt="Picture of the author"
                as="image"
              />          
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
