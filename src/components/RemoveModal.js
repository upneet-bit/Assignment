import React from "react";
import { ReuseButton } from "@locoworks/reusejs-react-button";

export const RemoveModal = (props, ref) => {
    // console.log(props.item);
    // console.log(props.favs);
    return (
        <div
            ref={ref}
            className="relative bg-white text-black px-2 py-8 rounded border-2 flex flex-col items-center gap-y-5 w-[400px]">
            <div
                className="absolute p-0 text-gray-500 bg-transparent cursor-pointer top-2 right-2"
                onClick={() => {
                    props.onAction(false);
                }}
            >
            </div>
            <label>Are you sure you want to delete this item!!</label>
            <div className="flex justify-between w-1/2">
                <ReuseButton
                    className="px-3 py-1 bg-red-400 rounded w-fit"
                    onClick={() => {
                        props.onAction(false);
                    }}
                >
                    Cancel
                </ReuseButton>
                <ReuseButton
                    className="px-3 py-1 bg-green-400 rounded w-fit"
                    onClick={() => {
                        const updatedPackages= props.favs.filter((p)=>p.name !== props.item.name);
                        localStorage.setItem('packagesList',JSON.stringify(updatedPackages));
                        props.setFavs(updatedPackages)
                        props.onAction(true);
                    }}
                >
                    Confirm
                </ReuseButton>
            </div>
        </div>
    );
};