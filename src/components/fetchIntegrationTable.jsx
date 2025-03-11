import React, { useEffect, useState } from 'react'
import { Button } from '../utils/button';
import { AxiosError } from '../utils/axiosError';
import { Axios, summary } from '../config/summaryAPI';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MetaIntegrationSchema } from '../utils/schema';
import { CheckBoxInput, TextInput } from '../utils/input';
import toast from 'react-hot-toast';

const FetchIntegrationTable = ({ integration ,setShowForm}) => {
    const inte = {
        integrationName: "OsamaIntegration",
        password: "Pma_109c",
        platformName: "mysql",
        url: "jdbc:mysql://66.135.60.203:3308/dbtabib",
        username: "kamran"
    }
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(MetaIntegrationSchema),
        defaultValues: { tables: [] }
    });
    const [items, setItems] = useState([]);
    const fetchTables = async () => {
        try {
            const response = await Axios({
                ...summary.fetchTables,
                data: inte

            })
            if (response.data.success) {
                const addedCheckKey = response?.data?.data?.map((item, index) => ({
                    tableName: item,
                    description: "",
                    checked: false
                }))
                setItems(addedCheckKey)
                setValue("tables", addedCheckKey);
            }
        } catch (error) {
            AxiosError(error)
        }
    }
    useEffect(() => {
        fetchTables()
    }, [])

    const toggleCheckbox = (id) => {
        setItems(items.map((item, index) => {
            if (index === id) {
                const updatedItem = { ...item, checked: !item.checked, tableName: item.tableName };
                console.log(updatedItem)
                setValue(`tables.${index}.tableName`, updatedItem.tableName);
                return updatedItem;
            }
            return item;
        }));
    };

    const onSubmit = async (data) => {
        try {
            const tables = data.tables.filter((item) => item.checked).map((item, index) => ({
                tableName: item.tableName,
                description: item.description
            }));
            const response = await Axios({
                ...summary.metaIntegrations,
                data: {
                    tables
                }
            });

            if (response.data.success) {
                toast.success(response.data.message)
                setShowForm(false)
            }
        } catch (error) {
            AxiosError(error);
        }
    }

    return (
        <div className="w-full max-h-[420px] overflow-auto rounded-large">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4 mb-normal">
                    {items.map((item, index) => (
                        <div key={index} className="shadow-md rounded-large border-gray-100  overflow-hidden">
                            <div className="flex flex-col gap-2 p-normal">
                                <div className="mr-normal flex items-center gap-2">
                                    <div className="relative w-4 h-4 cursor-pointer" onClick={() => toggleCheckbox(index)}>
                                        <CheckBoxInput input={item} index={index} register={register} />
                                    </div>
                                    <h3>{item.tableName}</h3>
                                </div>
                                <div className="bg-gray-50 rounded-large">
                                    <input
                                        {...register(`tables.${index}.description`)}
                                        type="text"
                                        disabled={!item.checked}
                                        className={`h-[40px] w-full border border-[#EBF0ED] rounded-large px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px] ${!item.checked ? 'bg-Quaternary cursor-not-allowed' : 'bg-primary'}`}
                                        placeholder="Enter Table Description"
                                    />
                                    {item.checked && errors?.tables?.[index]?.description && (
                                        <span className="text-red-500 text-sm">
                                            {errors.tables[index]?.description?.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end space-x-3 items-center mr-normal">
                    <Button type="submit">Saved</Button>
                </div>
            </form>
        </div>
    );
}

export default FetchIntegrationTable