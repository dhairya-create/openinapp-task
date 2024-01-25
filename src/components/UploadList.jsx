import React from "react";


import TableRow from "./TableRow";

const UploadList = ({ data }) => {
 
  return (
    <div className=" relative overflow-x-auto rounded-lg bg-gray-200 p-3 mr-5 ">
      
      <table className="border border-separate border-spacing-y-2 w-full">
        <thead>
            <tr className="w-full">
            <th  className="">
              Si No
            </th>
            <th  className="">
              Links
            </th>
            <th  className="">
              Prefix
            </th>
            <th  className="">
              Add tags
            </th>

            <th  className="">
              Selected tags
            </th>
            </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item,index) => (
             <TableRow item={item} key={index} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadList;
