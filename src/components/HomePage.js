import React, { useState } from 'react' ;
import { ReuseButton } from "@locoworks/reusejs-react-button";
import { useNavigate } from 'react-router-dom';
import ListofFavs from './ListofFavs';

const HomePage = () => {
  const navigate= useNavigate();
  const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('packagesList')));
  
  const CustomButton=()=>{
    return <ReuseButton
        className='w-24 font-medium text-white rounded-md cursor-pointer bg-violet-500'
        onClick={()=>navigate("/add")}
      >
        Add Favourite
      </ReuseButton>
  }
  return (
    <div>
      <div className='flex justify-around'>
        <span className='text-3xl font-bold'>Welcome to Favourite npm packages </span>
        {favs && <span>
          <CustomButton/>
        </span>}
      </div>
      
      <div className='items-center p-5 justify-normal'>
          {favs ?
              <ListofFavs favs={favs} setFavs={setFavs}/>
            : 
            (<div className='flex justify-center py-10 mt-10 border rounded gap-x-3 bg-gray-50'>
            <p>You dont have any favourites </p>
            <CustomButton/>
            </div>
            )
          }
      </div>
    </div>
    
  )
}

export default HomePage;