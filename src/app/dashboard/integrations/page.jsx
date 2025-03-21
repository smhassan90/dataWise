"use client";
// import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa6";
// import { GoPencil } from "react-icons/go";
// import { useDispatch, useSelector } from "react-redux";
// import { cards } from "@/src/data/cards";
// import { Button } from "@/src/utils/button";
// import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon
// import { TextInput, TextInputWithoutLabel } from "@/src/utils/input";
// import { integrationFields } from "@/src/utils/formFields";
// import IntegrationForm from "@/src/components/integrationForm";
// import { motion, AnimatePresence } from "framer-motion";
// import FetchIntegrationTable from "@/src/components/fetchIntegrationTable";
// import MyComponent from "@/src/components/component";
// const Integrations = () => {
//   const { sidebar } = useSelector((state) => state.sideBar);
//   const [showForm, setShowForm] = useState(false);
//   const [integration,setIntegration] = useState({})
//   const [step, setStep] = useState(1);
//   return (
//     <div className="bg-white rounded-large p-normal">
//       <Button className="gap-2" onClick={() => setShowForm(true)}>
//         Add Integrations
//         <span>
//           <FaPlus className="text-small" />
//         </span>
//       </Button>
//       <AnimatePresence>
//         {showForm && <motion.div
//           initial={{ opacity: 0, y: -50 }} // Upar se start karega
//           animate={{ opacity: 1, y: 0 }}   // Neeche slide hoke dikhai dega
//           exit={{ opacity: 0, y: -50 }}    // Wapas upar slide hoke hide hoga
//           transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation
//           className="w-full"
//         >
//           <div className="rounded-large">
//             <div className="flex flex-col items-center mb-normal">
//               <h1 className="text-2xl font-semibold text-center mb-normal">
//                 Integrations
//               </h1>
//               {step === 1 ? (
//                 <p className="text-center text-labelSize max-w-md">
//                   Lorem ipsum is simply dummy text of the printing and typesetting
//                   industry.
//                 </p>
//               ) : (
//                 <p className="text-center text-labelSize max-w-md">
//                   Uncheck the tables that you do not want to include in analysis.
//                 </p>
//               )}

//               {/* Step indicator */}
//               <div className="relative w-full max-w-md mt-normal">
//                 <div className="bg-black absolute top-8 w-full h-[2px] bg-gray-400 -translate-y-1/2"></div>
//                 <div className="flex justify-between relative">
//                   <div className="flex flex-col items-center">
//                     <div className={`w-14 h-14 rounded-full ${step === 1 ? 'bg-secondary text-white' : 'bg-Quaternary text-secondary'} flex items-center justify-center text-white font-medium z-10 relative`}>
//                       01
//                     </div>
//                     <span className="mt-2 text-labelSize text-neutral-900">Step</span>
//                   </div>

//                   <div className="flex flex-col items-center">
//                     <div className={`w-14 h-14 rounded-full ${step === 2 ? 'bg-secondary text-white' : 'bg-Quaternary text-secondary'} flex items-center justify-center text-[#036666] font-medium z-10 relative`}>
//                       02
//                     </div>
//                     <span className="mt-2 text-labelSize text-neutral-900">Step</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {step === 1 ? (
//               <IntegrationForm setShowForm={setShowForm} setStep={setStep} setIntegration={setIntegration}/>
//             ) : <FetchIntegrationTable integration={integration} setShowForm={setShowForm}/>}
//           </div>
//         </motion.div>}
//       </AnimatePresence>
//       <div
//         className={`grid items-center gap-8 py-normal ${sidebar ? "md:grid-cols-2" : "md:grid-cols-3"
//           }`}
//       >
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="w-full bg-gradient-to-r from-red-500 to-orange-400 p-normal rounded-large text-white relative flex flex-col gap-24 justify-between transition-transform transform"
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.transform = "scale(1.02)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.transform = "scale(1)")
//             }
//           >
//             <div className="space-y-2">
//               <span className="flex justify-between items-center">
//                 <h3 className="text-lg tracking-wider font-manrope">
//                   {card.title}
//                 </h3>
//                 <GoPencil className="text-white cursor-pointer text-small" />

//               </span>
//               <p className="text-small font-poppins font-light">
//                 {card.details}
//               </p>
//             </div>
//             <p className="font-semibold ml-auto">Connected</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Integrations;

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { FaTimes } from "react-icons/fa"; // Import the 'X' close icon
import { useDispatch, useSelector } from "react-redux";
import { cards } from "@/src/data/cards";
import { Button } from "@/src/utils/button";
import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon
import { TextInput, TextInputWithoutLabel } from "@/src/utils/input";
import { integrationFields } from "@/src/utils/formFields";
import IntegrationForm from "@/src/components/integrationForm";
import { motion, AnimatePresence } from "framer-motion";
import FetchIntegrationTable from "@/src/components/fetchIntegrationTable";

const Integrations = () => {
  const { sidebar } = useSelector((state) => state.sideBar);
  const [showForm, setShowForm] = useState(false);
  const [integration, setIntegration] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isCardClicked, setIsCardClicked] = useState(false); // New state for tracking card click

  // Function to toggle card clicked state
  const handleCardClick = () => {
    setIsCardClicked(!isCardClicked);
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
    setIsCardClicked(false); // Ensure cards go back to original position
  };

  const cardData = [
    {
      id: 1,
      title: "Integration One",
      details: "Details for integration one.",
      description: "Description of integration one.",
      apiKey: "api-key-123",
      status: "Connected",
    }
  ];

  return (
    <div className="bg-white rounded-large p-normal">
      <Button className="gap-2" onClick={() => setShowForm(true)}>
        Add Integrations
        <span>
          <FaPlus className="text-small" />
        </span>
      </Button>
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Upar se start karega
            animate={{ opacity: 1, y: 0 }} // Neeche slide hoke dikhai dega
            exit={{ opacity: 0, y: -50 }} // Wapas upar slide hoke hide hoga
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation
            className="w-full"
          >
            <div className="rounded-large">
              <div className="flex flex-col items-center mb-normal">
                <h1 className="text-2xl font-semibold text-center mb-normal">
                  Integrations
                </h1>
                {step === 1 ? (
                  <p className="text-center text-labelSize max-w-md">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                ) : (
                  <p className="text-center text-labelSize max-w-md">
                    Uncheck the tables that you do not want to include in
                    analysis.
                  </p>
                )}

                {/* Step indicator */}
                <div className="relative w-full max-w-md mt-normal">
                  <div className="bg-black absolute top-8 w-full h-[2px] bg-gray-400 -translate-y-1/2"></div>
                  <div className="flex justify-between relative">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-14 h-14 rounded-full ${
                          step === 1
                            ? "bg-secondary text-white"
                            : "bg-Quaternary text-secondary"
                        } flex items-center justify-center text-white font-medium z-10 relative`}
                      >
                        01
                      </div>
                      <span className="mt-2 text-labelSize text-neutral-900">
                        Step
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div
                        className={`w-14 h-14 rounded-full ${
                          step === 2
                            ? "bg-secondary text-white"
                            : "bg-Quaternary text-secondary"
                        } flex items-center justify-center text-[#036666] font-medium z-10 relative`}
                      >
                        02
                      </div>
                      <span className="mt-2 text-labelSize text-neutral-900">
                        Step
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {step === 1 ? (
                <IntegrationForm
                  setShowForm={setShowForm}
                  setStep={setStep}
                  setIntegration={setIntegration}
                />
              ) : (
                <FetchIntegrationTable
                  integration={integration}
                  setShowForm={setShowForm}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`grid items-center gap-8 py-normal ${
          sidebar
            ? isCardClicked
              ? "md:grid-cols-1 w-[500px]"
              : "md:grid-cols-2"
            : isCardClicked
            ? "md:grid-cols-1"
            : "md:grid-cols-3"
        }`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full bg-gradient-to-r from-red-500 to-orange-400 p-normal rounded-large text-white relative flex flex-col gap-24 justify-between transition-transform transform"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            // onClick={handleCardClick} // Add onClick to toggle card state
          >
            <div className="space-y-2">
              <span className="flex justify-between items-center">
                <h3 className="text-lg tracking-wider font-manrope">
                  {card.title}
                </h3>
                <GoPencil
                  onClick={handleCardClick}
                  className="text-white cursor-pointer text-small"
                />
                {/* <MyComponent/> */}
              </span>
              <p className="text-small font-poppins font-light">
                {card.details}
              </p>
            </div>
            <p className="font-semibold ml-auto">Connected</p>
          </div>
        ))}
      </div>
      {isOpen && (
  <div className="fixed inset-0 mt-32 h-[500px] ml-[850px] items-end w-full sm:w-[450px] max-w-full rounded-large bg-black bg-opacity-50 z-40 flex justify-end ">
    <div
      className="bg-secondary rounded-large mt-normal h-full w-full overflow-y-auto shadow"
      // style={{
      //   animation: "slideInRight 0.3s forwards",
      // }}
    >
      <div className="sticky top-0 z-2 bg-white">
        <div className="flex justify-between items-center p-normal">
          <h2 className="text-xl font-semibold text-gray-800">Edit Integration</h2>
          <button
            onClick={handleClose} // Ensure modal closes
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Form Fields */}
        {cardData.map((card) => (
          <div key={card.id} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Integration Name
              </label>
              <input
                type="text"
                value={card.title}
                onChange={(e) =>
                  handleInputChange(card.id, "title", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Details
              </label>
              <input
                type="text"
                value={card.details}
                onChange={(e) =>
                  handleInputChange(card.id, "details", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={card.description}
                onChange={(e) =>
                  handleInputChange(card.id, "description", e.target.value)
                }
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                API Key
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={card.apiKey}
                  onChange={(e) =>
                    handleInputChange(card.id, "apiKey", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">
                  Copy
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={card.status}
                onChange={(e) =>
                  handleInputChange(card.id, "status", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="Connected">Connected</option>
                <option value="Disconnected">Disconnected</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Integrations;
