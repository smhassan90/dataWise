'use client'
import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

export const TextInput = ({ input, register, errors }) => {
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });
    return (
        <div className="flex flex-col gap-1 md:gap-2 justify-start w-full relative">
            <label htmlFor={input.name} className="text-labelSize text-gray font-medium mx-2">
                {input.label}
            </label>
            <div className="relative w-full">
                <input type={(input.name === "password" ||
                    input.name === "confirmPassword") &&
                    showPassword[input.name] ? "text" : input.type}
                    placeholder={input.placeholder}
                    {...register(input.name)}
                    className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                />
                {(input.name === "password" || input.name === "confirmPassword") && (
                    <span onClick={() => setShowPassword((prev) => ({
                        ...prev,
                        [input.name]: !prev[input.name],
                    }))
                    } className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2"
                    >
                        {showPassword[input.name] ? <FaRegEye className="text-lg" /> : <FaRegEyeSlash className="text-lg" />}
                    </span>
                )}
            </div>

            {errors[input.name] && (
                <span className="text-red-500 text-sm">
                    {errors[input.name]?.message}
                </span>
            )}
        </div>
    )
}

export const TextInputWithoutLabel = ({ input, register, errors }) => {
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });
    return (
        <div className="flex flex-col gap-1 md:gap-2 justify-start w-full relative">
            <div className="relative w-full">
                <input type={(input.name === "password" ||
                    input.name === "confirmPassword") &&
                    showPassword[input.name] ? "text" : input.type}
                    placeholder={input.placeholder}
                    {...register(input.name)}
                    className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                />
                {(input.name === "password" || input.name === "confirmPassword") && (
                    <span onClick={() => setShowPassword((prev) => ({
                        ...prev,
                        [input.name]: !prev[input.name],
                    }))
                    } className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2"
                    >
                        {showPassword[input.name] ? <FaRegEye className="text-lg" /> : <FaRegEyeSlash className="text-lg" />}
                    </span>
                )}
            </div>

            {errors[input.name] && (
                <span className="text-red-500 text-sm">
                    {errors[input.name]?.message}
                </span>
            )}
        </div>
    )
}

export const SelectInput = ({ input, register, errors }) => {
    return (
        <div className="flex flex-col gap-1 md:gap-2 justify-start w-full relative">
            <div className="relative w-full">
                <select
                    {...register(input.name)}
                    className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                    defaultValue=""
                >
                    {/* <option value="" disabled selected>
                        {input.placeholder}
                    </option> */}
                    {input.options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>

            {errors[input.name] && (
                <span className="text-red-500 text-sm">
                    {errors[input.name]?.message}
                </span>
            )}
        </div>
    )
}