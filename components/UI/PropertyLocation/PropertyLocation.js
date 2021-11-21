import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { PropertyContainer, PropertyPin } from './PropertyLocation.Styles'
import { ImHome3 } from 'react-icons/im'
import { SiAirbnb } from 'react-icons/si'

export default function PropertyLocation({ lat, lng, place }) {
  const [iconHover, setIconHover] = useState(false)
  const hoverHandler = () => {
    // setHover((prevHover) => !prevHover)
    setIconHover((prevHover) => !prevHover)
  }
  const PlaceComponent = () => (
    <PropertyPin onClick={hoverHandler}>
      {iconHover ? <SiAirbnb /> : <ImHome3 />}
    </PropertyPin>
  )
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 11,
    mapId: '8e0a97af9386fef',
  }

  return (
    // Important! Always set the container height explicitly
    <PropertyContainer>
      <div>
        <h2>Where you’ll be</h2>
        <p>{place}</p>
      </div>
      <div style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          mapId={defaultProps.mapId}
        >
          <PlaceComponent lat={lat} lng={lng} onClick={hoverHandler} />
        </GoogleMapReact>
      </div>
    </PropertyContainer>
  )
}
