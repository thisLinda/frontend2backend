import React, { useEffect, useState } from 'react'

const getUsers = async () => {
        
        const fetchUsers = await fetch('http://localhost:8080/api/users')
        const parseUsers = await fetchUsers.json()
        console.log(parseUsers)
        return parseUsers

}

export default function GetUsersComponent() {

    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    const iDk = async () => {
        setLoading(true)
        const users = await getUsers()
        setLoading(false)
        setUsers(users)
    }

    useEffect(() => {
        iDk()
    }, []);

    if (loading) {
        return <div>...loading...</div>
    }

    return (
        <div>
        <h1 className='text-center'>Users List</h1>
            <table className = 'table table-striped'>
                <thead>
                    <tr>
                        <td>User Id</td>
                        <td>User First Name</td>
                        <td>User Last Name</td>
                        <td>User Email</td>
                    </tr>
                </thead>
                <tbody>
                    { users.map(user => 
                    <tr key = {user.id}> 
                        <td>{ user.id }</td>
                        <td>{ user.firstName }</td>
                        <td>{ user.lastName }</td>
                        <td>{ user.email }</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
    
}