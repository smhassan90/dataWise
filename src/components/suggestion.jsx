"use client"
import React, { useState } from 'react'
import { Button } from '../utils/button'
import { FaSearch, FaMicrophone } from "react-icons/fa"
import { Axios, summary } from '../config/summaryAPI'
import { AxiosError } from '../utils/axiosError'
import { ClipLoader } from "react-spinners";
import toast from 'react-hot-toast'
import SaveStory from './saveStory'
const Suggestion = ({ setGraphData, tabs, activeTab, setActiveTab, graphData}) => {
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [showStoryForm, setShowStoryForm] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [isListening, setIsListening] = useState(false)
    const [suggestions, setSuggestions] = useState([])
    const [loader, setLoader] = useState(false)
    const startListening = () => {
        if (!("webkitSpeechRecognition" in window)) {
            alert("Speech recognition not supported in this browser.");
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US"; // Adjust as needed

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setSearchText(transcript);
        };

        recognition.start();
    };
    const suggestQuestion = async () => {
        if (showSuggestions) {
            return setShowSuggestions((prev) => !prev)
        }
        try {
            setShowSuggestions((prev) => !prev)
            setLoader(true)
            const response = await Axios({
                ...summary.generateSuggestions
            })
            if (response.data.success) {
                const suggestionList = response.data.data.split("\n").filter((item) => item.trim() !== "")
                    .map((item) => {
                        const cleanedText = item.replace(/\*\*/g, "");
                        const parts = cleanedText.split(":");
                        return {
                            heading: parts[0] ? parts[0].trim() : "Untitled",
                            description: parts.slice(1).join(":").trim() || "No description available",
                        }
                    })
                console.log(suggestionList)
                setLoader(false)
                setSuggestions(suggestionList)
            }

            console.log(response)
        } catch (error) {
            console.log(error)
            setLoader(false)
            AxiosError(error)
        }
    }
    const generateGraph = async () => {
        try {
            const response = await Axios({
                ...summary.generateGraph,
                data: {
                    customText: searchText,
                    requiredGraph:activeTab
                }
            })
            if (response.data.success) {
                toast.success(response.data.message)
                setGraphData(response.data.data)
                console.log("dataaadda", response.data.data)
                // console.log(gra)
            }
        } catch (error) {
            AxiosError(error)
        }
    }
    const handleSuggestionClick = (suggestion) => {
        setSearchText(`${suggestion.heading}:${suggestion.description}`)
        setShowSuggestions(false)
        generateGraph()
    }
    return (
        <div className="my-normal relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-large w-full">
                <div className="flex">
                    {tabs.map((tabName, index) => (
                        <Button key={index}
                            className={`text-labelSize font-medium !rounded-none !shadow-none transition-all duration-300 hover:!bg-secondary hover:!text-white
                                ${activeTab === tabName ? "!bg-secondary !text-white" : "!bg-white !text-neutral-900"} 
                                ${index == 0 ? "!rounded-l-large" : `${index === tabs.length - 1 ? "!rounded-r-large" : ""}`}`
                            }
                            onClick={() => setActiveTab(tabName)}
                        >
                            {tabName}
                        </Button>
                    ))}
                </div>
                <div className='flex gap-3'>
                    {!showStoryForm && <Button className="text-labelSize" onClick={()=>setShowStoryForm((prev)=>!prev)}>
                        Save Story
                    </Button>}
                    <Button onClick={suggestQuestion} className="text-labelSize">
                        {showSuggestions ? "Hide Suggestions" : "More Suggestions"}
                    </Button>
                </div>
            </div>

            {showSuggestions && (
                <div className="w-full bg-[#fdfbf6] shadow-md rounded-large p-normal mt-normal max-h-56 overflow-y-auto transition-all duration-300">
                    <div className="space-y-3">
                        {loader ? (
                            <div className='text-center'>
                                <ClipLoader color='#036666' className='text-center' size={30} />
                            </div>
                        ) : suggestions.map((suggestion, index) => {
                            if (index === 0) {
                                return null
                            }
                            return (
                                <div key={index} onClick={() => handleSuggestionClick(suggestion)}
                                    className="cursor-pointer hover:bg-gray-100 transition-all duration-200"
                                >
                                    <h3 className="font-bold text-small text-neutral-900">{suggestion.heading}</h3>
                                    <p className="text-ExtraSmall text-neutral-900">{suggestion.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
            {showStoryForm && <SaveStory graphData={graphData} setGraphData={setGraphData} setShowStoryForm={setShowStoryForm} setSearchText={setSearchText}/>}

            {/* Search Input */}
            <div className="relative mt-normal  bg-[#fdfbf6]">
                <input
                    id="searchInput"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search a Metric ..."
                    className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                />
                <FaSearch className="absolute right-3 top-4 h-4 w-4 cursor-pointer transition-colors duration-300 text-gray" />
                <FaMicrophone className={`absolute right-10 top-4 h-4 w-4 cursor-pointer transition-colors duration-300 ${isListening ? "text-secondary" : "text-gray"
                    }`}
                // onClick={startListening}
                />
            </div>
        </div>
    )
}

export default Suggestion