// import { useEffect, useState } from "react"
import {useLoaderData} from 'react-router-dom'

function Github() {
    const Data = useLoaderData();
    // const [data, setData] = useState([]);


    // useEffect(()=> {
    //     fetch("https://api.github.com/users/believeharsh")
    //     .then(response => response.json() )
    //     .then(Data => {
    
    //       setData(Data)
    //       console.log(data)
    //     })
    // })
    
  

  return (
   <>
    <div className='text-center m-4 bg-gray-600 text-white'>
        Github Follwers : {Data.followers}
        <img className="text-center"src={Data.avatar_url}  alt="Git Picture" width={200} />
    </div>
   </>
  )
}

export default Github
export const Githubinfoloader = async () => {
   const response = await fetch("https://api.github.com/users/believeharsh");
   return response.json()
}
