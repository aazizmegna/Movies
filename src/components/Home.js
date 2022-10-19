import {useEffect, useState} from 'react'

const Home = () => {

    const [list, setList]=useState([])

    useEffect(()=>{
        requestMovies()
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'LINK-TO-KEY',
            'X-RapidAPI-Host': 'LINK-TO-HOST',
        }
    };

    async function requestMovies() {
        fetch('LINK-TO-URL', options)
        .then(response => response.json())
        .then(response => {
            const data = response.d
            setList(data)
        })

        .catch(err => console.error(err));
    }
    
    console.log(list)
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