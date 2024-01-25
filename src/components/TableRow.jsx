import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

const TableRow = ({ item }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState(item["select tags"].split(','));

  const handleTagSelect = (e) => {
    const selectedTag = e.target.value;

    if (!selectedTags.includes(selectedTag)) {
      setSelectedTags([...selectedTags, selectedTag]);

      const updatedDropdownOptions = dropdownOptions.filter((option) => option !== selectedTag);
      setDropdownOptions(updatedDropdownOptions);
    }
  };

  const handleTagDelete = (tagToDelete) => {
    const updatedTags = selectedTags.filter((tag) => tag !== tagToDelete);
    setSelectedTags(updatedTags);

    setDropdownOptions([...dropdownOptions, tagToDelete]);
  };

  return (
    <tr className="border border-gray-700 w-full">
      <td
       
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black bg-white rounded-l-lg w-[10%]"
      >
        {item.id}
      </td>
      <td className="px-6 py-4 bg-white w-[25%]" >
        <a className="  underline text-blue-500" href={item.links}>
          {item.links}
        </a>
      </td>
      <td className="px-6 py-4 bg-white w-[20%]">{item.prefix}</td>
      <td className="px-6 py-4 bg-white w-[25%]">
        <div className="flex items-center">
          <select
            onChange={handleTagSelect}
            value=""
            className="border rounded px-2 py-1 ml-2"
          >
            <option value="" disabled>Select a tag</option>
            {dropdownOptions.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>

          
        </div>
      </td>
      <td className="px-6 py-4 bg-white rounded-r-lg w-[25%]">
      <div className="flex flex-wrap gap-y-4 m-auto">
            {selectedTags.map((tag, index) => (
              <div key={index} className="flex items-end ml-1">
                <button
                  onClick={() => handleTagDelete(tag)}
                  className="text-red-500 focus:outline-none inline-block"
                >
                  <span className=" text-white bg-[#5574f2] rounded-md p-1">
                    {tag} <IoCloseSharp className='inline' />
                  </span>
                </button>
              </div>
            ))}
          </div>
       
      </td>
    </tr>
  );
};

export default TableRow;
