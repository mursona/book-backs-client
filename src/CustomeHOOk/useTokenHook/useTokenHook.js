import { useEffect, useState } from "react";

const useTokenHook = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.jwtToken) {
                        localStorage.setItem('jwtToken', data.jwtToken);
                        setToken(data.jwtToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useTokenHook;