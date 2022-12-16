import React from "react";

const Theme = () => {

    const themeColors = [
        {
          id: 1,
          name: "blue-theme",
          color: "#1A97F5",
        },
        {
          id: 2,
          name: "green-theme",
          color: "#146c22",
        },
        {
          id: 3,
          name: "purple-theme",
          color: "#7352FF",
        },
        {
          id: 4,
          name: "indigo-theme",
          color: "#1E4DB7",
        },
        {
          id: 5,
          color: "#595C62",
          name: "gray-theme",
        },
      ];

    return(
        <div className="select-none items-center hidden lg:flex flex-col top-[45%] right-0 fixed">
            <div className="w-[19rem]  bg-gray-500 rounded-md p-[0.5rem] absolute right-0 top-[50%] mr-[-250px] hover:mr-[-10px] hover:rounded-md duration-1000 ">
                <h1 className="ml-[3rem]">Select Color</h1>
                <div className=" flex gap-3">
                    {themeColors.map((item)=>(
                        <button key={item.id} type="button" className="h-10 w-10 rounded-full cursor-pointer" style={{ backgroundColor: item.color}}>

                        </button>
                        
                    ))}
                    
                </div>
            </div>
        </div>
    )
};

export default Theme;