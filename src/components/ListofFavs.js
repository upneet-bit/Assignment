import React from 'react'
import { HeadlessDataTable } from "@locoworks/reusejs-react-data-table";
import { HeadlessModal } from "@locoworks/reusejs-react-modal";
import { ViewModal } from './ViewModal';
import { RemoveModal } from './RemoveModal';
import { UpdateModal } from './UpdateModal';

const ListofFavs = ({favs, setFavs}) => {

    const showModal = async (item) => {
      // const response = 
      await HeadlessModal({
        component: ViewModal,
        item:item,
        backdropClasses: "absolute top-4 left-0 right-0 m-auto w-fit",
        animations: {
          modal: {
            initial: { opacity: 0, x: -400, y: -400 },
            animate: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 0, x: 400, y: 400 },
          },
        },
      });
    };

    const deleteModal = async(item) => {
      // const response = 
      await HeadlessModal({
        component: RemoveModal,
        backdropClasses: "absolute top-4 left-0 right-0 m-auto w-fit",
        item:item,
        favs:favs,
        setFavs:setFavs
      })
    };

    const EditModal = async (item) => {
      const response = 
      await HeadlessModal({
        component: UpdateModal,
        item: item,
        backdropClasses: "absolute top-4 left-0 right-0 m-auto w-fit",
        favs:favs,
        setFavs:setFavs
      });
      // console.log(response);
      if(response){
      let name = response.name;
      let description = response.description;
      
      const packages = favs.filter((p)=>p.name !== response.name);
      const updatedPackages= [...packages, {name, description}];
      localStorage.setItem('packagesList',JSON.stringify(updatedPackages));
      setFavs(updatedPackages);}
    };

    const tableHeader = [
        "Package Name",
        "Actions"
    ];
    
    let userData = favs.map((el) => {
      // console.log(el);
      return {
        Name : el.name,
        Actions:<div className='flex justify-evenly gap-x-3'>
          <span className="text-2xl" role="img" aria-label="View icon"   onClick={()=>showModal(el)}> &#9673; </span>
          <span className="text-2xl" role="img" aria-label="Edit icon"   onClick={()=>EditModal(el)}> &#128393; </span>
          <span className="text-2xl" role="img" aria-label="Delete icon" onClick={()=>deleteModal(el)}> &#128465; </span>
        </div>
      }
    });
    
  return (
    <div className='flex flex-col items-center justify-center py-10 mt-10 border rounded gap-x-3 bg-gray-50'>
        <HeadlessDataTable 
            tableData={userData}
            customTableHeader={tableHeader}
            buttonContainerClasses={"hidden"}
            tableColumnClasses={"px-4 border border-gray-500"}
            tableContainerClasses={"flex flex-col px-10 w-full"}
            tableRowClasses={"py-4 m-5"}
            tableClasses={"w-full"}
            headingColumnClasses={"px-4 text-left border border-white"}
            headingRowClasses={"bg-gray-300 "}
        />
    </div>
  )
}

export default ListofFavs