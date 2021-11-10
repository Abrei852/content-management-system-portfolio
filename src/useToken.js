import { useState } from "react";

export default function useToken() {
	const getToken = () => {
		const token = sessionStorage.getItem("token");
		return token;
	};

	const [token, setToken] = useState(getToken());

	const saveToken = (userToken) => {
		if (userToken === null) {
			sessionStorage.removeItem("token");
			setToken(userToken)
		}
		sessionStorage.setItem("token", userToken);
		setToken(userToken);
	};

	return {
		setToken: saveToken,
		token,
	};
}