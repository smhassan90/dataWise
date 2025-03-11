"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
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
  const [integration,setIntegration] = useState({})
  const [step, setStep] = useState(1);
  return (
    <div className="bg-white rounded-large p-normal">
      <Button className="gap-2" onClick={() => setShowForm(true)}>
        Add Integrations
        <span>
          <FaPlus className="text-small" />
        </span>
      </Button>
      <AnimatePresence>
        {showForm && <motion.div
          initial={{ opacity: 0, y: -50 }} // Upar se start karega
          animate={{ opacity: 1, y: 0 }}   // Neeche slide hoke dikhai dega
          exit={{ opacity: 0, y: -50 }}    // Wapas upar slide hoke hide hoga
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
                  Lorem ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              ) : (
                <p className="text-center text-labelSize max-w-md">
                  Uncheck the tables that you do not want to include in analysis.
                </p>
              )}

              {/* Step indicator */}
              <div className="relative w-full max-w-md mt-normal">
                <div className="bg-black absolute top-8 w-full h-[2px] bg-gray-400 -translate-y-1/2"></div>
                <div className="flex justify-between relative">
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-full ${step === 1 ? 'bg-secondary text-white' : 'bg-Quaternary text-secondary'} flex items-center justify-center text-white font-medium z-10 relative`}>
                      01
                    </div>
                    <span className="mt-2 text-labelSize text-neutral-900">Step</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-full ${step === 2 ? 'bg-secondary text-white' : 'bg-Quaternary text-secondary'} flex items-center justify-center text-[#036666] font-medium z-10 relative`}>
                      02
                    </div>
                    <span className="mt-2 text-labelSize text-neutral-900">Step</span>
                  </div>
                </div>
              </div>
            </div>

            {step === 1 ? (
              <IntegrationForm setShowForm={setShowForm} setStep={setStep} setIntegration={setIntegration}/>
            ) : <FetchIntegrationTable integration={integration} setShowForm={setShowForm}/>}
          </div>
        </motion.div>}
      </AnimatePresence>
      <div
        className={`grid items-center gap-8 py-normal ${sidebar ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full bg-gradient-to-r from-red-500 to-orange-400 p-normal rounded-large text-white relative flex flex-col gap-24 justify-between transition-transform transform"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <div className="space-y-2">
              <span className="flex justify-between items-center">
                <h3 className="text-lg tracking-wider font-manrope">
                  {card.title}
                </h3>
                <GoPencil className="text-white cursor-pointer text-small" />
              </span>
              <p className="text-small font-poppins font-light">
                {card.details}
              </p>
            </div>
            <p className="font-semibold ml-auto">Connected</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
