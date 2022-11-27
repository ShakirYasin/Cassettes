import {useState, useEffect} from 'react';
import axios from "axios"
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
import { allowedCountries } from '../assets/constants'; 

const AroundYou = () => {
    
    const [country, setCountry] = useState("")
    const [loading, setLoading] = useState(true)
    const [notAllowed, notAllowedSet] = useState(false)

    const {activeSong, isPlaying} = useSelector((state) => state.player)
    const {data, isFetching, error} = useGetSongsByCountryQuery({country})

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_GEO_API_KEY}`)
        .then((res) => {
            const found = allowedCountries.find(code => res?.data?.location?.country === code)
            if(!found) {
                notAllowedSet(true)
                setCountry("US")
            }
            else {
                setCountry(res?.data?.location?.country)
            }
        })
        .catch((err) => (console.log(err)))
        .finally(() => setLoading(false))
    }, [])

    if(isFetching && loading) return <Loader title="Loading songs around you" />

    if(error && country) return <Error />


    return (
        <div className='flex flex-col'>
            {
                notAllowed &&
                <p className='text-base text-white text-left mt-4 '>
                    Couldn't find songs near you. Here are some <span className='font-bold'>US Top Charts</span>
                </p>
            }
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
                Around You <span className='font-black'>{country}</span>    
            </h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => (
                    <SongCard 
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    )
}
    

export default AroundYou;
