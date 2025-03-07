'use client'
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.auth.user);
    const router = useRouter();
    const pathname = usePathname();
    const noAuthRequired = ["/login", "/signup"];

    console.log(pathname)
    useEffect(() => {
        if (!user && !noAuthRequired.includes(pathname)) {
            router.push("/login"); // If not logged in, redirect to login
        } else {
            setLoading(false); // Token found, stop loading
        }
    }, [user, router,pathname]);

    if (loading && !noAuthRequired.includes(pathname)) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    return children;
};

export default ProtectedRoute;