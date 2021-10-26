import React from 'react'
import { signOutUser } from '../../db/firebase'

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={ () => signOutUser()}>Log out</button>
        </div>
    )
}
