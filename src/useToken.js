import { useState } from "react";

export default function useToken() {
    const getToken = () => {
        const token = sessionStorage.getItem("utkn");
        return token;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        if (userToken) {
            sessionStorage.setItem("utkn", userToken);
            setToken(userToken);
        } else {
            sessionStorage.removeItem("utkn");
            setToken();
        }
    };

    return {
        setToken: saveToken,
        token,
    };
}
