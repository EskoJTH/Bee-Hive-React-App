import React, { Component } from 'react';
import './Box.css';
import './Cathegory.css';
import './Underline.css';
import './BoxText.css';



class Box extends Component {

    layOut = (element) => {

        let cathegories = [];
        for (let metaKey of element.data) {
            for (let key in metaKey) {
                let elementOriginalWidth = key.length * 10;
                if (key.length < metaKey[key].length) {
                    elementOriginalWidth = metaKey[key].length * 10
                }
                if (elementOriginalWidth < 30) { elementOriginalWidth = 30 }
                if (elementOriginalWidth>150) {elementOriginalWidth=150}

                cathegories.push(
                    <div className='cathegory' style={{ width: elementOriginalWidth }} key={Math.random().toString(36).substr(2, 9)}>
                        <label className='underline'>{key}</label>
                        <div className='boxText'>{metaKey[key]}</div>
                    </div>
                );
            }

        }
        return cathegories;
    }

    render() {

        let headers = "empty";
        if (this.props.information) {
            headers = this.layOut(this.props.information);
        }

        return (
            <div className='boxStyle'> {headers}</div>
        )
    }
}

export default Box;