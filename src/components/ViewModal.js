import React from "react";
import { ReuseButton } from "@locoworks/reusejs-react-button";

export const ViewModal = (props, ref) => {
    // console.log(props.item);
		return (
			<div
				ref={ref}
				className="relative bg-white text-black px-2 py-5 rounded border-2 flex flex-col items-center gap-y-5 w-[500px]"
			>
        <div className='flex-col justify-items-center justify-evenly'>
          
				<div>
          <span className='p-3 text-lg font-bold'>Name: </span>
          <span className='p-3 text-lg font-semibold text-gray-700'> {props.item.name} </span>
        </div>
        
        <div>
          <span className='p-3 text-lg font-bold'>Description: </span>
          <span className='p-3 text-lg font-semibold text-gray-700'> {props.item.description} </span>
        </div>
        </div>
        
				<ReuseButton
					className="px-3 py-1 bg-blue-400 rounded w-fit"
					onClick={() => {
						props.onAction("Closed");
					}}
				>
					Close
				</ReuseButton>
			</div>
		);
	  };