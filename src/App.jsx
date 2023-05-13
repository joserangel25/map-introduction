import { useState } from 'react'
import { useLoadScript } from '@react-google-maps/api';

import MyMap from './components/MyMap'
import { API_KEY } from '../variables';

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries: ['places']
  })

  if(!isLoaded) return <p>Loading...</p>
  return (
    <MyMap />
  )
}

export default App
