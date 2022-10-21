import {useEffect, useState} from 'react'

const Home = () => {

    const [list, setList]=useState([])

    useEffect(()=>{
        requestMovies()
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1f16c89463mshcfda4c5beb598cbp18f651jsn21084407454f',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
        }
    };

    async function requestMovies() {
        fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', options)
        .then(response => response.json())
        .then(response => {
            const data = response.d
            setList(data)
        })

        .catch(err => console.error(err));
    }

  return (
    <div>
        {list.map((item)=>(
            <div key={item.id}>
                <div>{item.l}</div>
                <div>{item.q}</div>
                <img src={item.i.imageUrl} alt=''/>
            </div>
        ))}
    </div>
  )
}

export default Home;