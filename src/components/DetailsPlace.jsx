import React, { useEffect } from 'react'
import '../styles/container-place.css'
import { API_KEY } from '../../variables'

export default function DetailsPlace({placeId}) {

  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}`, {
      'mode': 'no-cors',
    })
      .then(res => console.log(res))

  }, [placeId])
  

  return (
    <div className='container-details-place'>
      Estos son los detalles
    </div>
  )
}
