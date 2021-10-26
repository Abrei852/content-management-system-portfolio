import { useState } from 'react'
import { getAuth } from "firebase/auth";

export default function useToken() {

    const getToken = () => {
        if (getAuth().currentUser != null) {            
            const token = sessionStorage.getItem("token");
            return token;
        }
        return;
    }

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem("token", userToken);
        setToken(userToken)
    }

    return {
        setToken: saveToken,
        token
    }
}

