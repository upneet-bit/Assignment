import React, { useState } from 'react'
import { ReuseInput } from "@locoworks/reusejs-react-input";
import { ReuseButton } from '@locoworks/reusejs-react-button';

export const UpdateModal = (props, ref) => {
  let nameValue = props.item.name;
  let descriptionValue = props.item.description;
  
  return (
    <div
      ref={ref}
      className="relative bg-white px-2 py-8 rounded-lg border-2 border-blue-500 flex flex-col items-center gap-y-5 w-[400px] font-bold text-lg"
    >
      <div
        className="absolute p-0 text-gray-500 bg-transparent cursor-pointer top-2 right-2"
        onClick={() => {
          props.onAction(false);
        }}
      >
      </div>
      <label>Please Enter the following Fields</label>
      <ReuseInput
        className="px-2 py-1 text-base font-normal border border-black rounded"
        readOnly
        value={nameValue}
        name="name"
      />
      <ReuseInput
        className="px-2 py-1 text-base font-normal border border-black rounded"
        name="description"
        required
        // value={props.item.description}
        onChange={(e) => {
          descriptionValue=e.target.value
        }}
      />
      <ReuseButton
        className="px-3 py-1 rounded bg-violet-500"
        onClick={() => {
          if (descriptionValue === "") {
            props.onAction(false);
          } else {
            props.onAction({ name: nameValue, description: descriptionValue });
          }
        }}
      >
        Submit
      </ReuseButton>
    </div>
  );
};