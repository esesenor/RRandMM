
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getRandomNumber } from './assets/utils/random'
import Location from './assets/components/Location'
import ResidentList from './assets/components/ResidentList'
import BgStar from './assets/components/BgStars'

function App() {
  const [location, setLocation] = useState(null)
  
  useEffect(() =>{
    axios
    .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err)) 
  },[])
  return (
    <main className="text-[#FBFBFB] p-4 m-0 font-['Fira Code']">
        <BgStar />
        <Location location={location} setLocation={setLocation}/>
        <ResidentList residents={location?.residents ?? []}  />
    </main>
  )
}

export default App
