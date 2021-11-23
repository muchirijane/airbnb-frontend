import React from 'react'
import { useState } from 'react'
import GoogleMapReact from 'google-map-react'

import { ClusterMapContainer, ClusterPin } from './PropertiesClusterMap.Styles'

const PropertiesClusterMap = ({ properties }) => {
  const PlaceComponent = ({ price }) => (
    <ClusterPin>
      <h4>$ {price}</h4>
    </ClusterPin>
  )

  const defaultProps = {
    center: {
      lat: properties[1].location?.lat,
      lng: properties[1].location?.lng,
    },
    zoom: 11,
    mapId: '8e0a97af9386fef',
  }

  return (
    <ClusterMapContainer>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          mapId={defaultProps.mapId}
        >
          {properties.map(
            (property, index) => (
              console.log(property.location.lat, property.location.lng),
              (
                <PlaceComponent
                  key={index}
                  lat={property?.location?.lat}
                  lng={property?.location?.lng}
                  price={property?.pricePerNight}
                />
              )
            )
          )}
        </GoogleMapReact>
      </div>
    </ClusterMapContainer>
  )
}

export default React.memo(PropertiesClusterMap)
