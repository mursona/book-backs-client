import { useEffect, useState } from "react";

const useTokenHook = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://book-back-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.jwtToken) {
                        localStorage.setItem('bookToken', data.jwtToken);
                        setToken(data.jwtToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useTokenHook;