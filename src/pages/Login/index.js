import React, { useState } from "react";
import { firebaseAuth } from "db/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./style.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		clearForm();
	};

	const signIn = async (email, password) => {
		try {
			await signInWithEmailAndPassword(firebaseAuth, email, password);
		} catch (error) {
			setError("Wrong username or password");
		}
	};

	const clearForm = () => {
		setEmail("");
		setPassword("");
		setError("");
	};

	return (
		<div className="body-logn">
			<div className="cntr-logn">
				<h1>Log in page</h1>
				<form onSubmit={onSubmit} className="form">
					<div>
						<div className="inpt">
							<label>
								<input
									type="text"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</label>
							<label>
								<input
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</label>
						</div>
						<div className="pb-3">
							<p>{error}</p>
						</div>
						<div>
							<button
								type="submit"
								onClick={() => signIn(email, password)}
							>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
