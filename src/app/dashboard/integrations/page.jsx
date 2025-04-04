"use client";


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
import IntegrationCard from "@/src/components/integrationCard";

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
    <div className="bg-white rounded-large p-normal min-h-[calc(100vh-5rem)]">
      <Button className="gap-2" onClick={() => setShowForm(true)}>
        Add Integrations
        <span>
          <FaPlus className="text-small" />
        </span>
      </Button>
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
                        className={`w-14 h-14 rounded-full ${step === 1
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
                        className={`w-14 h-14 rounded-full ${step === 2
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
      <div className="relative">
        <IntegrationCard />
      </div>
    </div>
  );
};

export default Integrations;
