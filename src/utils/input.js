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
                    disabled={input.name === "query" || input.name === "resultType"}
                    className={`${(input.name === "query" || input.name === "resultType") && 'cursor-not-allowed'} h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]`}
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


export const CheckBoxInput = ({ input, register, errors, index }) => {
    return (
        <>
            <input type="checkbox"
                checked={input.checked}
                {...register(`tables.${index}.checked`)}
                className="appearance-none w-4 h-4 mb-normal border border-gray-300 rounded checked:bg-[#00696B] checked:border-transparent"
            />
            {input.checked && (
                <svg
                    className="absolute inset-0 w-4 h-4 text-white pointer-events-none"
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
        </>
    )
}