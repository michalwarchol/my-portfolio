import React, { Component } from 'react'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import {connect} from "react-redux"

class Element extends Component {
    static contextType = LinkContext
    constructor(props){
        super(props)
        this.state = {
            done: this.props.done
        }
        this.done = this.done.bind(this)
        this.deleteElement = this.deleteElement.bind(this)
        this.editElement = this.editElement.bind(this)
    }
    done = () => {
        this.setState(prevState=>{return {done: !prevState.done}})
        this.props.checkTask(this.props.id, this.state.done)
    }
    deleteElement = () => {
        this.props.deleteElement(this.props.id)
    }
    editElement = () => {
        this.props.editElement(this.props.id)
    }
    render() {
        return (
            <div 
                className={this.state.done?'todolist_element done d-flex flex-row':'todolist_element d-flex flex-row'} 
                style={{ backgroundColor: this.props.bgcolor }}>
                <div className='d-flex align-items-center'>
                    <div className='ok' onClick={this.done}>
                        <i 
                        className='icon-ok'
                        style={this.state.done?{opacity: 1}:{opacity: 0}}></i>
                    </div>
                </div>
                <div className='d-flex flex-column text-break'>
                    <h1>{this.props.title}</h1>
                    <div className='todolist_element_description text-break'>
                        <p>{this.props.description}</p>
                    </div>
                </div>
                <div className='d-flex flex-row ml-auto align-self-start'>
                <OverlayTrigger key='edit' placement='bottom' overlay={
                        <Tooltip id='edit'>
                            Edit
                        </Tooltip>
                    } >
                        <i className='icon-pencil icon_x' onClick={this.editElement}></i>
                    </OverlayTrigger>
                    <OverlayTrigger key='delete' placement='bottom' overlay={
                        <Tooltip id='delete'>
                            Delete
                        </Tooltip>
                    } >
                        <i className='icon-cancel icon_x' onClick={this.deleteElement}></i>
                    </OverlayTrigger>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        checkTask: (id, title, description, check) => {dispatch({type: 'CHECK_TASK', id: id, title: title, description: description, check: check})}
    }
}

export default connect(mapDispatchToProps)(Element);