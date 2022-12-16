import React from "react";

const Extra = () => {
    return(
        <div>
            <div className="select-none bg-gradient-to-b from-black to-gray-800 w-full h-full">
            <div data-aos="fade-up" data-aos-delay='500' className="select-none max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className="mt-[2rem] ">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Leadership Skills
                    </p>
                    <p className="py-6">Few activities Performed by me.</p>
                </div>
                <div className="w-full h-full  grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8 sm:px-0">
                        <div
                            data-aos="fade-right" data-aos-delay='500'
                            className={`flex flex-col ml-[1rem] shadow-lg hover:scale-105 duration-500 py-2 rounded-lg shadow-pink-400`}
                            >
                            <div className="flex flex-col items-center">
                                {/* <img src={src} alt="" className="w-20 mx-auto" /> */}
                                <p className="mt-1 ml-[0.5rem] text-[1.5rem] font-bold text-[#ffeb3b] ">General Secretary</p>
                            </div>
                            <div>
                                <p className="ml-[1rem]">Currently holding post of General Secretary of Government Polytechnic Mumbai, Bandra. 
                                Organized many college events such as:</p>
                                <ol className="ml-[2rem]" style={{listStyle:'disc'}}>
                                    <li>KALPAK 2022 <br/> Two days Annual Gathering with 6-7 competitions</li>
                                    <li>Annual Sports Meet 2022 <br/> Four days internal sports meet with 10-11 sports (Outdoor, Indoor & Indian Games)</li>
                                    <li>Azadi ka Amrut Mahotsav 2022 <br/> 7 days celebration with various competitions </li>
                                    <li>Ralley 2022 <br/>On 15th August ralley of 500-600 students </li>
                                    <li>Independence Day Celebration <br/> 5-6 events organized as per students demand</li>
                                    <li>Many other inter college events.</li>
                                </ol> 
                            </div>
                        </div>

                        <div
                            data-aos="fade-right" data-aos-delay='500'
                            className={`flex flex-col ml-[1rem] shadow-lg hover:scale-105 duration-500 py-2 rounded-lg shadow-indigo-400`}
                            >
                            <div className="flex flex-col items-center">
                                {/* <img src={src} alt="" className="w-20 mx-auto" /> */}
                                <p className="mt-1 ml-[0.5rem] text-[1.5rem] font-bold text-[#ffeb3b]">Project Manager</p>
                            </div>
                            <div>
                                <p className="ml-[1rem]">Currently holding post of Project Manager for a sponsored project from Modern Solutions Hub, Mumbai. 
                                Manages the entire project and tasks such as:</p>
                                <ol className="ml-[2rem]" style={{listStyle:'disc'}}>
                                    <li>Communicating with stakeholders</li>
                                    <li>Ensuring completion of project within deadline</li>
                                    <li>Assigning tasks & ensuring their completion</li>
                                    <li>Solving Doubts & Errors</li>
                                    <li>Taking needful actions from project prespective</li>
                                </ol> 
                            </div>
                        </div>

                        <div
                            data-aos="fade-right" data-aos-delay='500'
                            className={`flex flex-col ml-[1rem] hover:scale-105 duration-500 py-2 rounded-lg shadow-lg shadow-[#ff3d00]`}
                            >
                            <div className="flex flex-col items-center">
                                {/* <img src={src} alt="" className="w-20 mx-auto" /> */}
                                <p className="mt-1 ml-[0.5rem] text-[1.5rem] font-bold text-[#ffeb3b]">Class Representative</p>
                            </div>
                            <div>
                                <p className="ml-[1rem]">Holding post of Class Representative for three consecutive years of Department of Computer Engineering of Government Polytechnic Mumbai, Bandra. 
                                Manages the entire project and tasks such as:</p>
                                <ol className="ml-[2rem]" style={{listStyle:'disc'}}>
                                    <li>Communicating with Faculties</li>
                                    <li>Ensuring proper circulating of notices</li>
                                    <li>Updating both faculties & students</li>
                                    <li>Record Keeping</li>
                                    <li>Organized few department level events</li>
                                </ol>
                            </div>
                        </div>

                </div>
            </div>

        </div>

        </div>
        
    )
};

export default Extra;