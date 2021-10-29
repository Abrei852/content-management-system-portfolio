import React, { useState } from "react";
import { signInUser } from "../../db/firebase";
import { getAuth } from "firebase/auth";
import { useHistory } from "react-router-dom";

export default function Login({ setToken }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const auth = getAuth();
	const history = useHistory();

	const onSubmit = async (event) => {
		event.preventDefault();
	};

	const signIn = async (email, password) => {
		await signInUser(email, password);
		if (auth.currentUser !== null) {
			setToken(auth.currentUser.accessToken);
			history.push("/dashboard");
		}
	};

	return (
		<div>
			<h1>Log in</h1>
			<form onSubmit={onSubmit}>
				<div>
					<label>
						<p>Email</p>
						<input
							type="text"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<label>
						<p>Password</p>
						<input
							type="password"
							value={password}
							onChange={(e) =>
								setPassword(e.target.value)
							}
						/>
					</label>
					<div>
						<button
							type="submit"
							onClick={() =>
								signIn(email, password)
							}
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
