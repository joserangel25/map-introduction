import React, { useMemo, useState, useEffect } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';

import '../styles/map.css'
import PlacesAutocomplete from './PlacesAutocomplete';
import DetailsPlace from './DetailsPlace';


export default function MyMap() {
  const center = useMemo(() => ({lat: 44, lng: -80}), [])
  const [ selected, setSelected ] = useState(null)
  const [ zoom, setZoom ] = useState(10)
  const [ showDetailsPlace, setShowDetailsPlace ] = useState(false)

  return (
    <>
      <div className="places-container">
          <PlacesAutocomplete setSelected={setSelected} setZoom={setZoom} />
      </div>
      <GoogleMap zoom={zoom} center={selected?.position || center} mapContainerClassName='map-container'>
      {selected &&  <Marker position={selected.position} onClick={() => setShowDetailsPlace(true)} />}
      {showDetailsPlace &&  <DetailsPlace placeId={selected.place_id} /> }
      </GoogleMap>
    </>
  )
}
