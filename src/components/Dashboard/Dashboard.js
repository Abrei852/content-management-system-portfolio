import React from 'react'
import { signOutUser, getDbData } from '../../db/firebase'
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
    const history = useHistory();

    const signOut = () => {
        signOutUser();
        history.push("/login")
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={ () => signOut()}>Log out</button>
            <button onClick={ () => getDbData("myexp")}>Get MyExp</button>
        </div>
    )
}
