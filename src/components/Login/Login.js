import React, { useState } from "react";
import { signInUser } from "db/firebase";

export default function Login({ auth, setToken }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
	};

	const signIn = async (email, password) => {
		await signInUser(email, password);
		if (auth.currentUser !== null) {
			setToken(auth.currentUser.accessToken);
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
