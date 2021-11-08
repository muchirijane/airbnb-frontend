import Image from 'next/image'
import { PropertyMainImage } from './FeaturedImage.Styles'
export default function FeaturedImage({ mainAlt, mainImage }) {
  return (
    <PropertyMainImage>
      <Image
        src={mainImage}
        alt={mainAlt}
        width={600}
        height={600}
        layout="responsive"
      />
    </PropertyMainImage>
  )
}
