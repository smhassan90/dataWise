"use client";
import ChangePassword from "@/src/components/changePassword";
import ImageUpload from "@/src/components/imageUpload";
import PersonalInformation from "@/src/components/personalInformation";

export default function SettingsPage() {
  return (
    <div className="mx-auto">
      <div className="bg-white rounded-large shadow-md overflow-hidden mb-normal">
        <ImageUpload />
        {/* personal information       */}
        <PersonalInformation />
      </div>
      {/* Password Section */}
      <ChangePassword />
    </div>
  );
}
