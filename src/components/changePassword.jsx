'use client'
import React, { useState } from 'react'
import { Button } from '../utils/button'
import { Axios, summary } from "../config/summaryAPI";
import { toast } from "react-hot-toast";


const ChangePassword = () => {
    const [showPasswordForm, setShowPasswordForm] = useState(false)
    const handlePasswordUpdate = async () => {
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            toast.error("New passwords do not match")
            return
        }
        try {
            await Axios.put(summary.changePassword.url, {
                oldPassword: passwordData.oldPassword,
                newPassword: passwordData.newPassword
            })
            toast.success("Password updated successfully")
            setShowPasswordForm(false)
            setPasswordData({
                oldPassword: "",
                newPassword: "",
                confirmPassword: ""
            })
        } catch (error) {
            toast.error("Failed to update password")
        }
    }
    const handlePasswordChange = (e) => {
        const { name, value } = e.target
        setPasswordData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const [passwordData, setPasswordData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    return (
        <div className="bg-white rounded-large shadow-md overflow-hidden p-normal">
            <div className="flex items-center justify-between mb-normal">
                <h2 className="text-2xl font-bold text-gray-800">Password Settings</h2>
                <Button
                    onClick={() => setShowPasswordForm(!showPasswordForm)}

                >
                    {showPasswordForm ? "Cancel" : "Change Password"}
                </Button>
            </div>
            {showPasswordForm ? (
                <div className="">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Current Password
                            </label>
                            <input
                                id="oldPassword"
                                name="oldPassword"
                                type="password"
                                value={passwordData.oldPassword}
                                onChange={handlePasswordChange}
                                className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                                placeholder="Enter your current password"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    New Password
                                </label>
                                <input
                                    id="newPassword"
                                    name="newPassword"
                                    type="password"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                    className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                                    placeholder="Enter new password"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm New Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={passwordData.confirmPassword}
                                    onChange={handlePasswordChange}
                                    className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                                    placeholder="Confirm new password"
                                />
                            </div>
                        </div>
                        <Button onClick={handlePasswordUpdate}>
                            Update Password
                        </Button>
                    </div>
                </div>
            ) : (
                <p className="text-neutral-900 text-ExtraSmall">
                    For security reasons, we recommend changing your password regularly. Your password must be at least 8 characters long and include a mix of letters, numbers, and special characters.
                </p>
            )}
        </div>
    )
}

export default ChangePassword