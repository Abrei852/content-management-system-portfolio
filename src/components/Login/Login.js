import React from "react";

export default function Login() {
	return (
		<div>
            <h1>Log in</h1>
			<form>
				<div>
					<label>
						<p>Username</p>
						<input type="text" />
					</label>
					<label>
						<p>Password</p>
						<input type="password" />
					</label>
					<div>
						<button type="submit">Submit</button>
					</div>
				</div>
			</form>
		</div>
	);
}
