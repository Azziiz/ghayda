'use client'
import { useParams } from 'next/navigation'
import Images from '@/components/Images'

function ProductPage() {

    const {id} = useParams()

  return (
    <div>
      <Images />
    </div>
  )
}

export default ProductPage
