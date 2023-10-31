'use client'
import styles from '@/styles/images.module.css'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

function Images() {
 const [emblaRef, emblaApi] = useEmblaCarousel()
  const images = ["https://s3-alpha-sig.figma.com/img/c8b4/6fec/e7dd96a4aa71662273aefe61150cef0b?Expires=1699833600&Signature=lPAFE9FUJHXagDUW14B4-uJ6bU2VIomSJMT8TTf1J2npKEF~5DEZv1Db2yXLThoTB-Lpfx~j7uBdln2UqnEawcHd0FwzVSpe6Lq99bv1f6imL3rUBnbmZvEWo5koFVmsJHDdDC3vGnXSM27N5YsKy7gScrVsUjlcUv6YvOE-PVNPadM~-H1j20m00rLNQkUSEsSgbZ56ga0HfGybgKCskUM3SU26LSdZLRIRQ0fSkzxlafhDJRQJFjsoT4VPUj0OnAEftJPjS5Uon642f2Jnz7qbJTWZLqyprdLAAsv6q8OemDGK4ThSckd~Xij~0R7klw5d~CG4XrUYNcOrQcuY4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/ea6c/4bde/5e720c25edaaff9a1145a129c7811198?Expires=1699833600&Signature=XQxtVO6nXznSRACq2XxDEDESDqBLU9agT2mcS65PivpdotTG~gU2qIOWA~7yKQ2wEQrIMXbPYiGU3Om3ogdYb1O7zezPndbsDQPlt8~cJ2Tpr3iI2SbUiRrYfRXe~Bc0XIv-tYL-HeFhWfyxxX8yqvA8kpVgUc01DL1FNCmJpE-h9mZBQvlNtMrZFv-MULF8JOB9jqN7Gz-AJaBAakyzE~JwgqkbGJxh95vDFhH0Bg-kSA09qQL5L8GKbHz3mManbVUuVrgseLBxn~2v6Euu3WMqWAYYXrQfTesvKgxByG~Z4dqvQLMSVR6Z3r6WJrki1eFap-GFS6sjmrgOwk7FUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"]
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
          />
        </div>    
      </div>
    </div>
  )
}

export default Images