import Image from 'next/image'
import { PropertyImageItems } from './PropertyImages.Styles'
export default function PropertyImages({ propertyImg, propertyImgAlt }) {
  return (
    <PropertyImageItems>
      <Image
        src={propertyImg}
        alt={propertyImgAlt}
        width={350}
        height={350}
        layout="responsive"
      />
    </PropertyImageItems>
  )
}
