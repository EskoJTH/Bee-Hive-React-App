import React, { Component } from 'react';
import './Container.css';
import './InputBox.css';
import Box from './Box.js';
//import axios from 'axios';
import importedJson from '../data.json';


class Container extends Component {
    state = {
        data: importedJson,
        testData: [{"data": [["ak","av"], ["bk","bv"]]}]
        //location: 'null',
        //editedLocation: 'null'
    }
    //'http://jsonplaceholder.typicode.com/posts'

    componentDidMount() {
        //fetch("~/BeeFront/data.json")
        //    .then(response => response.json())
        //   .then(json => console.log(json));
        //axios.get(this.state.location)
        //    .then(response => {
        //        this.setState({ data: response })
        //    })
    }


    ID = () => {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    makeBoxes = () => {
        let boxes = [];
        //console.log(this.state.data);
        //this.state.data.forEach((element) => {});
        for (let element of this.state.data) {
            if (element != null){
                boxes.push(<div key={Math.random().toString(36).substr(2, 9)}><Box information={element} /></div>);
            }
        }
        //console.log(boxes)
        return boxes;
    }


    drawBoxes = () => {
        let boxes = <div>kissa</div>;
        if (this.state.data) {
            boxes = this.makeBoxes();
        } else {
            boxes = <div>No Data...</div>
        }
        return boxes;
    }
/*
    updateSource = (id) => {
        //let element = document.getElementById(id);
        let newLoction = this.state.editedLocation;
        this.setState({ location: newLoction });
        axios.get(newLoction)
            .then(response => {
                this.setState({ data: response });
            });

    }*/

    editLocation = (event) => {
        this.setState({ editedLocation: event.target.value });
    }

    keyUp = (event) => {
        if (event.key === "Enter") {
            console.log("Enter Press detected");
            //this.updateSource("dataAddress");
            return;
        }
    }

    getJson = () => {
        //TODO
    }

    render() {
        let boxes = this.drawBoxes();
        // old address based system.
        //<input id="dataAddress" onKeyUp={(event) => this.keyUp(event)} onChange={(event) => this.editLocation(event)} className='inputBox' type='text' value={this.state.editedLocation} />
        //<button onClick={(event) => this.updateSource("dataAddress")} >Fetch data</button>
        return (
            <div>
                <div className='ContainerStyle'>
                    {/*<button onClick={(event) => this.updateSource("dataAddress")} >Fetch data</button>*/}
                    {boxes}
                </div>
            </div>
        );
    }
}

export default Container;
