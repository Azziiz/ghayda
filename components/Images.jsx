import styles from '@/styles/images.module.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
function Images() {
  return (
    <div class="container">

  <div id="js-gallery" class="gallery">

    <div class="gallery__hero">
      <a href="" class="gallery__hero-enlarge ir" data-gallery="zoom">Zoom</a>

      <img src="https://public-619e3.firebaseapp.com/Product-Gallery/products/normal/product-01_view-01.jpg"/>
    </div>

    <div class="gallery__thumbs">
        <a href="https://public-619e3.firebaseapp.com/Product-Gallery/products/normal/product-01_view-01.jpg" data-gallery="thumb" class="is-active">
          <img src="https://public-619e3.firebaseapp.com/Product-Gallery/products/thumb/product-01_view-01.jpg"/>
        </a>
        <a href="https://public-619e3.firebaseapp.com/Product-Gallery/products/normal/product-01_view-02.jpg" data-gallery="thumb" >
          <img src="https://public-619e3.firebaseapp.com/Product-Gallery/products/thumb/product-01_view-02.jpg"/>
        </a>
        <a href="https://public-619e3.firebaseapp.com/Product-Gallery/products/normal/product-01_view-03.jpg" data-gallery="thumb">
          <img src="https://public-619e3.firebaseapp.com/Product-Gallery/products/thumb/product-01_view-03.jpg" />
        </a>
    </div>

  </div>
 </div>
  )
}

export default Images