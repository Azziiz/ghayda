'use client'
import styles from '@/styles/images.module.css'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { images } from '@/next.config'

function Images({images}) {
 const [emblaRef, emblaApi] = useEmblaCarousel()
  
  const [main, setMain] = useState(images[1])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  return (
    <div className={styles.con}>
         <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <div className={styles.main_con}>
            <Image
              priority
              src={main}
              width="0"
              height="0"
              sizes="100vw"
              alt="Picture of the author"
              className={styles.main}
              as="image"
            />  
          </div>
    </div>
    <div className={styles.embla__slide}>
          <div className={styles.main_con}>
            <Image
              priority
              src={main == images[1] ? images[0] : images[1]}
              width="0"
              height="0"
              sizes="100vw"
              alt="Picture of the author"
              className={styles.main}
              as="image"
            />  
          </div>
    </div>
</div>
      </div>
      <div className={styles.sec_con}>
        <div className={styles.con_of_sec_img} onClick={() => {setMain(images[0]), scrollPrev()}}>
          <Image
            priority
            src={images[0]}
            width="0"
            height="0"
            sizes="50vw"
            alt="Picture of the author"
            as="image"
          />
        </div>    
        <div className={styles.con_of_sec_img} onClick={() => {setMain(images[1]), scrollPrev()}}>
          <Image
            priority
            src={images[1]}
            width="0"
            height="0"
            sizes="50vw"
            alt="Picture of the author"
            as="image"
          />
        </div>    
      </div>
    </div>
  )
}

export default Images