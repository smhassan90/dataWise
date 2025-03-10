import React, { useEffect, useState } from 'react'
import { Button } from '../utils/button';
import { AxiosError } from '../utils/axiosError';
import { Axios, summary } from '../config/summaryAPI';

const FetchIntegrationTable = () => {
    const handleDescriptionChange = (id, value) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, description: value } : item
            )
        );
    };
    const [items, setItems] = useState([]);

    const fetchTables = async () => {
        try {
            const response = await Axios({
                ...summary.fetchTables,
            })
            if (response.data.success) {
                setItems(response.data.data)
            }
        } catch (error) {
            AxiosError(error)
        }
    }
    useEffect(() => {
        fetchTables()
    }, [])

    console.log(items)

    // Toggle checkbox state
    // const toggleCheckbox = (id) => {
    //     setItems(
    //         items.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, checked: !item.checked };
    //             }
    //             return item;
    //         })
    //     );
    // };

    return (
        <div className="w-full  p-1 bg-white rounded-large">
            <div className="space-y-4 mb-8">
                {/* {items.map((item) => (
                    <div
                        key={item.id}
                        className="shadow-md rounded-large border-gray-100  overflow-hidden"
                    >
                        <div className="flex p-4 bg-gray-50 ">
                            <div className="mr-4 pt-1">
                                <div
                                    className="relative w-5 h-5 cursor-pointer"
                                    onClick={() => toggleCheckbox(item.id)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={() => { }}
                                        className="appearance-none w-5 h-5 mb-4  border border-gray-300 rounded checked:bg-[#00696B] checked:border-transparent"
                                    />
                                    {item.checked && (
                                        <svg
                                            className="absolute inset-0 w-5 h-5 text-white pointer-events-none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <h3 className="text-sm mt-1 mr-3 font-medium text-gray-800">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded p-2">
                            <input
                                type="text"
                                className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                                value={item.description || ""}
                                onChange={(e) =>
                                    handleDescriptionChange(item.id, e.target.value)
                                }
                                placeholder="Enter description..."
                            />
                        </div>
                    </div>
                ))} */}
            </div>
            <div className="flex justify-end space-x-3 items-center mt-3">
                <Button className="bg-white !text-black">Cancel</Button>
                <Button>Saved</Button>
            </div>
        </div>
    );
}

export default FetchIntegrationTable