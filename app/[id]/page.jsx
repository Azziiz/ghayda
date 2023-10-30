'use client'
import { useParams } from 'next/navigation'
import Images from '@/components/Images'
import styles from './page.module.css'

function ProductPage() {

    const {id} = useParams()

  return (
    <div className={styles.main}>
      <Images />
    </div>
  )
}

export default ProductPage
