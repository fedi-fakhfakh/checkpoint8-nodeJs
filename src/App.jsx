import React from 'react'
import Map from './components/Map'
function App() {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
  return (
    <div className="App">
      <Map location={location} zoomLevel={17} />
    </div>
  )
}

export default App
