'use client'
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import Product from '@/components/Product'


const FDFF = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'))
  const data = [];
  querySnapshot.forEach(doc => {
    data.push({id: doc.id, ...doc.data()})
  })
  return data
}


export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchProducts = async () => {
        const data = await FDFF();
        setProducts(data)
    }
    fetchProducts();
  }, [])


  return (
    <div className={styles.home}>
        <div className={styles.products}>
          {products?.map(product => (
            <Product key={product.id} Id={product.id} Product={product}/>
          ))}

        </div>
    </div>
  )
}
