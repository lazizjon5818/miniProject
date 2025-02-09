import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedPage: React.FC = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    console.log(localStorage.getItem("token"));


    useEffect(() => {
        if (!token) {
            navigate("/auth/login");
        }
    }, [navigate, token]);

    if (!token) {
        return <p className="text-center text-lg font-semibold">Redirecting to login...</p>;
    }

    return <p className="text-center text-lg font-bold">Welcome to the protected page! 🎉</p>;
};

export default ProtectedPage;
