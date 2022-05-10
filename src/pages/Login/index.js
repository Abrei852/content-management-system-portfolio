import React, { useState } from "react";
import { signInUser } from "db/firebase";
import "./style.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
    };

    const signIn = async (email, password) => {
        await signInUser(email, password);
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
