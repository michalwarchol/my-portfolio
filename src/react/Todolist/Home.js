import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import Content from './Content';
import { LinkContext } from '../../LinkContext'
import { UserContext } from './UserContext';

const Home = () => {
    const { link } = useContext(LinkContext)
    const { user } = useContext(UserContext)
    const [date, setDate] = useState(new Date())
    const [data, setData] = useState([])

    const handleDate = (date) => {
        setDate(date);
    }

    useEffect(() => {
        fetch('/.netlify/functions/elementRead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user,
                date: date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear(),
                action: "select"
            })
        })
        .then(response => response.json())
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [date, link, user])

    const getElements = () => {
        fetch('/.netlify/functions/elementRead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user,
                date: date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear(),
                action: "select"
            })
        })
        .then(response => response.json())
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="todolist container-fluid d-flex justify-content-center">
            {user ? <Content
                data={data}
                username={user}
                getElements={getElements}
                handleDate={handleDate} />
                : <h1 className="d-flex align-items-center">In order to add an objective, please&nbsp;<a href="/todolist/login">Log In</a></h1>}
        </div>
    )
}

export default Home