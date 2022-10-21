import {useEffect, useState} from 'react'

const Home = () => {

    const [list, setList]=useState([])

    useEffect(()=>{
        requestMovies()
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'MY-RAPID-KEY',
            'X-RapidAPI-Host': 'MY-RAPID-HOST',
        }
    };

    async function requestMovies() {
        fetch('MY-URL', options)
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