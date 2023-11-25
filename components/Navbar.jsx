'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/navbar.module.css'
import Logo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Pproduct from './Pproduct'
import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { auth, db } from '@/firebase'

const FDFF = async () => {
  // getting data from firestore
  const PRef = collection(db, "panier");
  const q = query(PRef, where("userId", "==", `${auth?.currentUser?.uid}`));
  const querySnapshot = await getDocs(q)
  // assigning the data to a variable
  const data = [];
  querySnapshot.forEach(doc => {
    data.push({id: doc.id, ...doc.data()})
  })
  return data
}

export default function Navbar() {

  const [searchBar, setSearchBar] = useState(0)
  const [drop2, setDrop2] = useState(0)
  const [drop3, setDrop3] = useState(0)
  const [products, setProducts] = useState([])
  const docRef = doc(collection(db, 'panier'), `${products?.id}`)
  

  useEffect(() => {

    const fetchProducts = async () => {
        const data = await FDFF();
        setProducts(data)
    }
    fetchProducts();
  }, [drop3])

  

  const renderProducts = products.map(product => product.products.map(pro => <Pproduct Id={pro.productId} key={pro.productId} Quntite={pro.quntite}/>))


  

  return (
    <div className={styles.nav}>
      <Link href='/'><Image src={Logo} alt='logo' className={styles.logo} priority/></Link>
      <div className={styles.searcharea}>
        <input type="text" className={styles.searchbar} placeholder='Search' />
        <span htmlFor="">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className={styles.svg}>
            <path d="M12.25 12.25L16 16" stroke="#151515" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 7.42857C1 10.979 3.87816 13.8571 7.42855 13.8571C9.20679 13.8571 10.8165 13.1351 11.9803 11.9682C13.1401 10.8054 13.8571 9.20071 13.8571 7.42857C13.8571 3.87817 10.9789 1 7.42855 1C3.87816 1 1 3.87817 1 7.42857Z" stroke="#151515" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      <div className={styles.usersection}>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className={styles.svg} id={styles.openSearch} onClick={() => {setSearchBar(1)}}> 
            <path d="M12.25 12.25L16 16" stroke="#151515" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 7.42857C1 10.979 3.87816 13.8571 7.42855 13.8571C9.20679 13.8571 10.8165 13.1351 11.9803 11.9682C13.1401 10.8054 13.8571 9.20071 13.8571 7.42857C13.8571 3.87817 10.9789 1 7.42855 1C3.87816 1 1 3.87817 1 7.42857Z" stroke="#151515" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <Link href='/signin'>
            <svg width="32" height="37" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
              <path d="M1 36V33.8125C1 25.3556 7.71574 18.5 16 18.5C24.2843 18.5 31 25.3556 31 33.8125V36" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.0001 18.5C20.7339 18.5 24.5716 14.5824 24.5716 9.75C24.5716 4.91751 20.7339 1 16.0001 1C11.2663 1 7.42871 4.91751 7.42871 9.75C7.42871 14.5824 11.2663 18.5 16.0001 18.5Z" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg} onClick={() => {setDrop3(1)}}>
          <path d="M27.25 31.5C28.4926 31.5 29.5 30.4926 29.5 29.25C29.5 28.0074 28.4926 27 27.25 27C26.0074 27 25 28.0074 25 29.25C25 30.4926 26.0074 31.5 27.25 31.5Z" fill="#151515" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.25 31.5C13.4926 31.5 14.5 30.4926 14.5 29.25C14.5 28.0074 13.4926 27 12.25 27C11.0074 27 10 28.0074 10 29.25C10 30.4926 11.0074 31.5 12.25 31.5Z" fill="#151515" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.5 4.5H31L28 21H8.5L5.5 4.5ZM5.5 4.5C5.25 3.49999 4 1.5 1 1.5" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 21H8.5H5.84616C3.16969 21 1.75 22.1718 1.75 24C1.75 25.8282 3.16969 27 5.84616 27H27.25" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" className={styles.menu} onClick={() => {setDrop2(1)}}>
          <path d="M0.857422 0.5H12.5651" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M0.857422 5.5H12.5651" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M0.857422 10.5H12.5651" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className={styles.dropDown}>
          {drop2 == 1 &&
          <>
            <div className={styles.blackSpace}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} id={styles.close} width="12" height="12" viewBox="0 0 12 12" fill="none" onClick={() => {setDrop2(2),setTimeout(() => {setDrop2(0)}, 600)}}>
                <path d="M1 11L6.00002 6.00002M6.00002 6.00002L11 1M6.00002 6.00002L1 1M6.00002 6.00002L11 11"  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>    
              <div className={styles.dropDownContent}>
                <h2>Bracelets</h2>
                <h2>Colliers</h2>
              </div>          
            </div>
          </>
          }
          {drop2 == 2 && 
            <div className={styles.blackSpace2}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} id={styles.close} width="12" height="12" viewBox="0 0 12 12" fill="none" onClick={() => {setDrop2(0)}}>
                <path d="M1 11L6.00002 6.00002M6.00002 6.00002L11 1M6.00002 6.00002L1 1M6.00002 6.00002L11 11"  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className={styles.dropDownContent}>
                <h2>Bracelets</h2>
                <h2>Colliers</h2>
              </div>
            </div>
          }
      </div>
      {drop2 == 1 &&
        <div className={styles.focusLost} onClick={() => {setDrop2(2),setTimeout(() => {setDrop2(0)}, 600)}}></div>
      }
      <div className={styles.dropDown}>
        {drop3 == 1 &&
            <>
              <div className={styles.blackSpace}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} id={styles.close} width="12" height="12" viewBox="0 0 12 12" fill="none" onClick={() => {setDrop3(2),setTimeout(() => {setDrop3(0)}, 600)}}>
                  <path d="M1 11L6.00002 6.00002M6.00002 6.00002L11 1M6.00002 6.00002L1 1M6.00002 6.00002L11 11"  strokeLinecap="round" strokeLinejoin="round"/>
                </svg>    
                <div className={styles.PdropDownContent}>
                  {renderProducts}
                </div> 
                {renderProducts && 
                  <div className={styles.commander}>
                      <button>COMMANDER</button>
                  </div>         
                }
              </div>
            </>
            }
            {drop3 == 2 && 
              <div className={styles.blackSpace2}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} id={styles.close} width="12" height="12" viewBox="0 0 12 12" fill="none" onClick={() => {setDrop3(0)}}>
                  <path d="M1 11L6.00002 6.00002M6.00002 6.00002L11 1M6.00002 6.00002L1 1M6.00002 6.00002L11 11"  strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className={styles.PdropDownContent}>
                  {renderProducts}
                </div>
              </div>
            }
      </div>
      {drop3 == 1 &&
        <div className={styles.focusLost} onClick={() => {setDrop3(2),setTimeout(() => {setDrop3(0)}, 600)}}></div>
      }
      <div className={styles.searchBarDrop}>
        {
          searchBar == 1 && 
          <div className={styles.whiteSpace}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} id={styles.close} width="12" height="12" viewBox="0 0 12 12" fill="none" onClick={() => {setSearchBar(2),setTimeout(() => {setSearchBar(0)}, 600)}}>
              <path d="M1 11L6.00002 6.00002M6.00002 6.00002L11 1M6.00002 6.00002L1 1M6.00002 6.00002L11 11"  strokeLinecap="round" strokeLinejoin="round"/>
            </svg>   
            <div className={styles.searchareaM}>
              <input type="text" className={styles.searchbar} placeholder='Search' />
              <span htmlFor="">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className={styles.svg}>
                  <path d="M12.25 12.25L16 16" stroke="#151515" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 7.42857C1 10.979 3.87816 13.8571 7.42855 13.8571C9.20679 13.8571 10.8165 13.1351 11.9803 11.9682C13.1401 10.8054 13.8571 9.20071 13.8571 7.42857C13.8571 3.87817 10.9789 1 7.42855 1C3.87816 1 1 3.87817 1 7.42857Z" stroke="#151515" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        }
        {
          searchBar == 2 && 
          <div className={styles.whiteSpace2}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} id={styles.close} width="12" height="12" viewBox="0 0 12 12" fill="none" onClick={() => {setSearchBar(0)}}>
              <path d="M1 11L6.00002 6.00002M6.00002 6.00002L11 1M6.00002 6.00002L1 1M6.00002 6.00002L11 11"  strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className={styles.searchareaM}>
              <input type="text" className={styles.searchbar} placeholder='Search' />
              <span htmlFor="">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className={styles.svg}>
                  <path d="M12.25 12.25L16 16" stroke="#151515" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 7.42857C1 10.979 3.87816 13.8571 7.42855 13.8571C9.20679 13.8571 10.8165 13.1351 11.9803 11.9682C13.1401 10.8054 13.8571 9.20071 13.8571 7.42857C13.8571 3.87817 10.9789 1 7.42855 1C3.87816 1 1 3.87817 1 7.42857Z" stroke="#151515" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        }
      </div>
    
    </div>
  )
}


