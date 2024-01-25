import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import UploadList from "./UploadList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Papa from "papaparse";

const Uploader = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    setIsUploading(true);

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
        setIsUploading(false);
      },
    });
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setData([]);
  };

  return (
    <div className="mt-24 w-full">
    <ToastContainer />
      <div className="flex items-center justify-center w-3/6 ">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-[#A9A9A9] border-dashed rounded-lg cursor-pointer bg-gray-50   dark:border-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {file ? (
              <>
                <p
                  className="text-sm text-red-500 cursor-pointer"
                  onClick={handleRemoveFile}
                >
                  Remove
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {file.name}
                </p>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="48px"
                  height="48px"
                >
                  <rect width="16" height="9" x="28" y="15" fill="#21a366" />
                  <path
                    fill="#185c37"
                    d="M44,24H12v16c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2V24z"
                  />
                  <rect width="16" height="9" x="28" y="24" fill="#107c42" />
                  <rect width="16" height="9" x="12" y="15" fill="#3fa071" />
                  <path
                    fill="#33c481"
                    d="M42,6H28v9h16V8C44,6.895,43.105,6,42,6z"
                  />
                  <path
                    fill="#21a366"
                    d="M14,6h14v9H12V8C12,6.895,12.895,6,14,6z"
                  />
                  <path
                    d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z"
                    opacity=".05"
                  />
                  <path
                    d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C25.333,34.603,23.936,36,22.213,36z"
                    opacity=".07"
                  />
                  <path
                    d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z"
                    opacity=".09"
                  />
                  <linearGradient
                    id="flEJnwg7q~uKUdkX0KCyBa"
                    x1="4.725"
                    x2="23.055"
                    y1="14.725"
                    y2="33.055"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#18884f" />
                    <stop offset="1" stopColor="#0b6731" />
                  </linearGradient>
                  <path
                    fill="url(#flEJnwg7q~uKUdkX0KCyBa)"
                    d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"
                  />
                  <path
                    fill="#fff"
                    d="M9.807,19h2.386l1.936,3.754L16.175,19h2.229l-3.071,5l3.141,5h-2.351l-2.11-3.93L11.912,29H9.526	l3.193-5.018L9.807,19z"
                  />
                </svg>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Drop your excel sheet here or{" "}
                  <span className="text-[#5574f2] font-semibold">browse</span>
                </p>
              </>
            )}
          </div>
          <input
            id="dropzone-file"
            accept=".csv"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>
      {isUploading ? (
        <div className="flex items-center w-3/6  mt-2 rounded-lg p-3 bg-[#5574f2]">
          <span className="m-auto text-white">Loading...</span>
        </div>
      ) : (
        <button
          className="flex items-center mt-2 rounded-lg p-3 bg-[#5574f2] w-3/6"
          onClick={handleUpload}
        >
          <span className="text-2xl m-auto text-white">
            <MdOutlineFileUpload className="inline-block" />
            <span className="text-lg ml-2">Upload</span>
          </span>
        </button>
      )}
      <h4 className="inline-block font-bold text-2xl  mt-5 mb-5">Uploads</h4>
      <UploadList data={data} />
    </div>
  );
};

export default Uploader;
