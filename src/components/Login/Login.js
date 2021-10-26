import React, { useState } from "react";
import { signIn } from "../../db/firebase";
import { getAuth } from "firebase/auth";

export default function Login({ setToken }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
	};

	const signInUser = async (email, password) => {
		await signIn(email, password);
		if (getAuth().currentUser != null) {
			setToken(getAuth().currentUser.accessToken);
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
								signInUser(email, password)
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
