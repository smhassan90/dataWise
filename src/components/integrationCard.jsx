import React, { useEffect, useState } from 'react'
import { GoPencil } from "react-icons/go";
import { Axios, summary } from '../config/summaryAPI';
import { AxiosError } from '../utils/axiosError';
import mysql from '@/src/assets/images/mysql.png'
import sqlserver from '@/src/assets/images/sqlserver.png'
import mongodb from '@/src/assets/images/mongoDb.png'
import oracle from '@/src/assets/images/oracle.png'
import Image from 'next/image';
import EditMetaIntegration from './editMetaIntegration';
const IntegrationCard = () => {
    const [showEditCard, setShowEditCard] = useState(null);
    const [integrations, setintegrations] = useState([])
    const [tables, setTables] = useState([])

    const handleEditClick = async (integration) => {
        try {
            setShowEditCard(integration._id);
            const response = await Axios({
                ...summary.editFetchTable,
                url: `/api/integration/v1/filterFetchTables/${integration._id}`,
            });
            if (response.data.success) {
                setTables(response.data.data)
            }
        } catch (error) {
            AxiosError(error);
        }
    };

    const getIntegration = async (data) => {
        try {
            const response = await Axios({
                ...summary.getIntegrations,
            });
            if (response.data.success) {
                setintegrations(response.data.data)
            }
        } catch (error) {
            AxiosError(error)
        }
    }
    useEffect(() => {
        getIntegration()
    }, [])
    console.log(integrations)
    return (
        <div className="flex gap-4 mt-normal relative">
            <div className={`${showEditCard ? "w-1/2" : "w-full"} transition-all duration-300`}>
                <div className={`grid ${showEditCard ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-4`}>
                    {integrations.length > 0 && integrations.map((integration, index) => (
                        <div key={index} className="transition-all duration-300 ease-in-out hover:scale-[1.02]">
                            <div className="text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-large shadow-md h-full">
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        {integration.platformName == 'mysql' && <Image src={mysql} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        {integration.platformName == 'oracle' && <Image src={oracle} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        {integration.platformName == 'mongodb' && <Image src={mongodb} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        {integration.platformName == 'sqlserver' && <Image src={sqlserver} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        <div>
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-medium text-lg">{integration.integrationName}</h3>
                                                <button onClick={() => handleEditClick(integration)} className="text-white cursor-pointer text-small">
                                                    <GoPencil className="text-white cursor-pointer text-small" />
                                                </button>
                                            </div>

                                            <p className="text-sm text-gray-500 mt-normal">
                                                {integration.details}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-normal py-normal flex justify-end">
                                    Connected
                                </div>
                            </div>
                        </div>
                    ))}
                    {integrations.length > 0 && integrations.map((integration, index) => (
                        <div key={index} className="transition-all duration-300 ease-in-out hover:scale-[1.02]">
                            <div className="text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-large shadow-md h-full">
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        {integration.platformName == 'mysql' && <Image src={mysql} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        {integration.platformName == 'oracle' && <Image src={oracle} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        {integration.platformName == 'mongodb' && <Image src={mongodb} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        {integration.platformName == 'sqlserver' && <Image src={sqlserver} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        <div>
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-medium text-lg">{integration.integrationName}</h3>
                                                <button onClick={() => handleEditClick(integration)} className="text-white cursor-pointer text-small">
                                                    <GoPencil className="text-white cursor-pointer text-small" />
                                                </button>
                                            </div>

                                            <p className="text-sm text-gray-500 mt-normal">
                                                {integration.details}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-normal py-normal flex justify-end">
                                    Connected
                                </div>
                            </div>
                        </div>
                    ))}
                    {integrations.length > 0 && integrations.map((integration, index) => (
                        <div key={index} className="transition-all duration-300 ease-in-out hover:scale-[1.02]">
                            <div className="text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-large shadow-md h-full">
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        {integration.platformName == 'mysql' && <Image src={mysql} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        {integration.platformName == 'oracle' && <Image src={oracle} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        {integration.platformName == 'mongodb' && <Image src={mongodb} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        {integration.platformName == 'sqlserver' && <Image src={sqlserver} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        <div>
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-medium text-lg">{integration.integrationName}</h3>
                                                <button onClick={() => handleEditClick(integration)} className="text-white cursor-pointer text-small">
                                                    <GoPencil className="text-white cursor-pointer text-small" />
                                                </button>
                                            </div>

                                            <p className="text-sm text-gray-500 mt-normal">
                                                {integration.details}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-normal py-normal flex justify-end">
                                    Connected
                                </div>
                            </div>
                        </div>
                    ))}
                    {integrations.length > 0 && integrations.map((integration, index) => (
                        <div key={index} className="transition-all duration-300 ease-in-out hover:scale-[1.02]">
                            <div className="text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-large shadow-md h-full">
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        {integration.platformName == 'mysql' && <Image src={mysql} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        {integration.platformName == 'oracle' && <Image src={oracle} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        {integration.platformName == 'mongodb' && <Image src={mongodb} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        {integration.platformName == 'sqlserver' && <Image src={sqlserver} alt={integration.platformName} width={100} height={100} className="object-cover rounded-large" />}
                                        <div>
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-medium text-lg">{integration.integrationName}</h3>
                                                <button onClick={() => handleEditClick(integration)} className="text-white cursor-pointer text-small">
                                                    <GoPencil className="text-white cursor-pointer text-small" />
                                                </button>
                                            </div>

                                            <p className="text-sm text-gray-500 mt-normal">
                                                {integration.details}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-normal py-normal flex justify-end">
                                    Connected
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <EditMetaIntegration showEditCard={showEditCard} tables={tables} />
        </div>
    )
}

export default IntegrationCard