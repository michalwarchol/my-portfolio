import React from 'react'
import Content from './Content';

import "../../css/Todolist.css"

const Main = () => {
    return (
        <div className="todolist container-fluid d-flex justify-content-center">
            <Content />
        </div>
    )
}

export default Main