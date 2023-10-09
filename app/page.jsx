'use client'
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import Navbar from '@/components/Navbar';


const FDFF = async () => {
  // getting data from firestore
  const querySnapshot = await getDocs(collection(db, 'products'))
  // assigning the data to a variable
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
        <Navbar /> 
        {products?.map(product => (
          <h1 key={product.id}>{product.name}</h1>
        ))}
    </div>
  )
}
