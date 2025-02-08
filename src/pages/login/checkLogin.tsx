// Component that checks if the user is authenticated
import { useEffect, useState } from 'react';

const ProtectedPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Tokenni tekshirish
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    if (!isAuthenticated) {
        return <p>You must log in to access this page.</p>;
    }

    return <p>Welcome to the protected page!</p>;
};

export default ProtectedPage;
