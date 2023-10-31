'use client'
import { useParams } from 'next/navigation'
import Images from '@/components/Images'
import styles from './page.module.css'
import { nunito, original_Surfer } from '@/fonts'

function ProductPage() {

    const {id} = useParams()

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <Images />
        <div className={styles.product_info}>
          <h2  className={`${styles.product_name} ${original_Surfer.className}`}>tres delsysus</h2>
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
          <div className={styles.price}>30DT</div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
