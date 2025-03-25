import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { editMetaIntegrationSchema } from '../utils/schema';
import { editMetaIntegrationFields } from '../utils/formFields';
import { SelectInputwithLabel, TextInput } from '../utils/input';
import { Button } from '../utils/button';
import { Axios, summary } from '../config/summaryAPI';
import toast from 'react-hot-toast';
import { AxiosError } from '../utils/axiosError';
import { FiTrash2 } from 'react-icons/fi';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { motion, AnimatePresence } from "framer-motion";
import { FaLessThanEqual } from 'react-icons/fa';

const EditMetaIntegration = ({ showEditCard, tables }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(editMetaIntegrationSchema),
    });
    const [metaIntegrationList, setMetaIntegrationList] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [tableId, setTableId] = useState("")
    const onSubmit = async (data) => {
        try {
            const response = await Axios({
                ...summary.editMetaTable,
                url: `/api/integration/v1/updateMetaIntegrationDetails/${showEditCard}`,
                data: data
            });
            if (response.data.success) {
                toast.success(response.data.message)
                reset()
                const copyArr = [...metaIntegrationList]
                copyArr.push(response.data.data)
                setMetaIntegrationList(copyArr)
            }
        } catch (error) {
            console.log(error)
            AxiosError(error);
        }
    }
    const getMetaIntegration = async () => {
        try {
            const response = await Axios({
                ...summary.getMetaIntegration,
                url: `/api/integration/v1/getMetaIntegration/${showEditCard}`,
            });
            if (response.data.success) {
                setMetaIntegrationList(response.data.data)
            }
        } catch (error) {
            console.log(error)
            AxiosError(error);
        }
    }
    const handleDelete = async () => {
        try {
            const response = await Axios({
                ...summary.deleteMetaIntegration,
                url: `/api/integration/v1/deleteMetaIntegration/${tableId}`,
            });
            if (response.data.success) {
                toast.success(response.data.message)
                setMetaIntegrationList((prev) => prev.filter(table => table._id !== tableId))
                setOpenModal(false)
            }
        } catch (error) {
            console.log(error)
            AxiosError(error);
        }
    }

    useEffect(() => {
        showEditCard && getMetaIntegration()
    }, [showEditCard])
    const tableOptions = tables.map((table, index) => {
        return {
            label: table,
            value: table
        }
    })
    return (
        <>
            {showEditCard !== null && (
                <div className='w-1/2'>
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="sticky top-3"
                        >
                            <div className="bg-white rounded-large border border-secondary shadow-md  pr-0">
                                <form onSubmit={handleSubmit(onSubmit)} className="px-normal pt-normal flex flex-col gap-2">
                                    {editMetaIntegrationFields?.map((input, index) => {
                                        if (input.type === "select") {
                                            return <SelectInputwithLabel input={input} key={index} errors={errors} register={register} optionData={tableOptions} />
                                        } else if (input.type === "text") {
                                            return <TextInput input={input} key={index} errors={errors} register={register} />
                                        }
                                    })}
                                    <Button className="w-fit px-3">Add Table</Button>
                                </form>
                                <div className="space-y-3 overflow-auto min-h-[calc(100vh-24.5rem)] max-h-[calc(100vh-24.5rem)] my-normal">
                                    {metaIntegrationList.map((table, index) => (
                                        <div key={index} className={`mx-normal bg-primary rounded-large border border-[#EBF0ED]`}>
                                            <div className="flex justify-between items-center p-normal">
                                                <div className='space-y-2'>
                                                    <h2 className="text-small font-medium text-neutral-900">{table.tableName}</h2>
                                                    <p className="text-labelSize text-neutral-900">{table.description}</p>
                                                </div>
                                                <span
                                                    onClick={() => {
                                                        setOpenModal(true)
                                                        setTableId(table._id)
                                                    }}
                                                    className="text-red-500 transition-colors"
                                                    aria-label={`Delete ${table.name} table`}
                                                >
                                                    <RiDeleteBin7Line className="h-5 w-5" />
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                    {metaIntegrationList.length === 0 && <div className="p-8 text-center text-gray-500">No tables available</div>}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        {openModal && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
                                    onClick={() => setOpenModal(false)}
                                >
                                    <motion.div
                                        initial={{ scale: 0.95, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.95, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="bg-white rounded-large p-normal max-w-md w-full mx-4 shadow-lg"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h3 className="text-lg font-medium text-neutral-900 mb-2">Confirm Deletion</h3>
                                        <p className="text-neutral-700 mb-6">
                                            Are you sure you want to delete
                                        </p>
                                        <div className="flex justify-end gap-3">
                                            <Button onClick={() => setOpenModal(false)} className="bg-gray-100 hover:bg-gray-200 text-neutral-900 border-none">
                                                No, Cancel
                                            </Button>
                                            <Button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white border-none">
                                                Yes, Delete
                                            </Button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </>
    )
}

export default EditMetaIntegration