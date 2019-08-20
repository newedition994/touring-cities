import React, { Component } from 'react'

export default class Tour extends Component {
    render() {
        return (
            <article className="tour">
                <div className="img-container">
                    <img width="300" src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?cs=srgb&dl=architecture-buildings-canada-374870.jpg&fm=jpg" alt="" />
                    <span className="close-btn">
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>city</h3>
                    <h4>name</h4>
                    <h5>info{" "} <span><i className="fas fa-caret-square-down" /></span></h5>
                </div>
            </article>
        )
    }
}