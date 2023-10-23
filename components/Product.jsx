import styles from '@/styles/product.module.css'
import { Nunito, Original_Surfer } from 'next/font/google'
import Link from 'next/link'


  const  original_Surfer = Original_Surfer({
    weight: [ '400'], 
    subsets: ['latin'],
    variable: '--font-surfer'
    })

  const  nunito = Nunito({
    weight: [ '400'], 
    subsets: ['latin'],
    variable: '--font-surfer'
    })  

function product({Id}) {

  return (
    <Link href={`/${Id}`}>

      <div className={styles.product} >
          <div className={styles.img}>
              <button className={styles.AjPanier}>AJOUTER AU PANIER</button>
          </div>
          <div className={styles.underImg}>
              <h3 className={`${styles.title} ${original_Surfer.className}`}>Bracelet fait main personalisé</h3>
              <h1 className={`${styles.price} ${nunito.className}`}>29DT</h1>
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
          </div>
          
      </div>
    </Link>
    )
}

export default product
