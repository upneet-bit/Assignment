import React, { useState } from 'react'
import { ReuseInput } from "@locoworks/reusejs-react-input";
import { ReuseButton } from '@locoworks/reusejs-react-button';
import { useNavigate } from 'react-router-dom';

const AddFav = () => {
    const defaultText="p-5 font-bold text-gray-500";
    const navigate = useNavigate();
    const [results, setResults] = useState([]);
    const [selectedVal, setselectedVal] = useState('');
    const [description, setdescription] = useState('');
    
    const changeHandler = async (e)=>{
        if(e.target.value!==''){
            try {
                await fetch(`https://api.npms.io/v2/search?q=${e.target.value}`)
                .then((res)=>res.json())
                .then((res)=>{
                    setResults(res.results);
                    // console.log(res);
                })
            } catch (error) {
                console.log(error);
            }
        }else{
            setResults([]);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const state={name:selectedVal,description};
        
        const packages = JSON.parse(localStorage.getItem('packagesList'))?.filter((p)=>p.name !== selectedVal) || [];
        const updatedPackages = [...packages, state];
        localStorage.setItem('packagesList',JSON.stringify(updatedPackages));
        navigate('/');
    }
    
    return (
        <div className='justify-center flex-1 col-span-1 py-10 mt-10 border rounded gap-x-3 bg-gray-50'>
            <p className={defaultText} >Search for NPM packages</p>
            
            <ReuseInput className='w-full p-3 h-14 focus:border-black'
                placeholder='Angular' onChange={changeHandler}
            />
            {/* {console.log(results)} */}

            <div className='flex flex-col'>
                {results?.map((result, i)=>{
                    return ( 
                        <label className='p-3 font-medium' key={`${i}+${result}`}>
                            <ReuseInput type='radio' name='radio' onClick={(e)=>setselectedVal(result.package.name)}  />
                         {result.package.name} </label> )}
                ).slice(0,15) }
            </div>

            {selectedVal!=='' &&
            <div className='justify-center flex-1 py-10 mt-10 border rounded gap-x-3 bg-gray-50'>
                <p className={defaultText}  >Why is it your favourite ?</p>
                <textarea placeholder='Mention here!' rows={4} className='w-5/6 p-3 m-5 border-2 border-gray-700' required 
                    onChange={(e)=>setdescription(e.target.value)} />
                <ReuseButton onClick={submitHandler} className='justify-center cursor-pointer w-28 h-14 bg-violet-500'>
                    Submit
                </ReuseButton>
            </div>
            }
            
        </div>
    )
}

export default AddFav