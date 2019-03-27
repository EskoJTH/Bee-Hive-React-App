import React, { Component } from 'react';
import './Graph.css';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import importedJson from '../data.json';

//import './LineGraph.js'

class Graph extends Component {
    constructor(props) {
        super(props);
        this.holder = React.createRef();
    }

    state = {
        width: 500,
        height: 400
    }

    componentDidMount() {
        this.setState({
            width: this.holder.current.clientWidth,
            height: this.holder.current.clientHeight
        });
    }


    resized = () => {
        console.log("something happenedd");
        console.log(this.holder.current);
        console.log(this.holder.current.clientWidth);
        console.log(this.holder.current.clientHeight);
        this.myRef = React.createRef();
        this.setState({
            width: this.holder.current.clientWidth,
            height: this.holder.current.clientHeight
        })
    }

    chart = () => {
        let fileData = importedJson;
        let regex = new RegExp("(\\d+\\.\\d+)|(\\d+)");
        let dateRegex = new RegExp("(Report) (\\d\\d\\d\\d)-(\\d\\d)-(\\d\\d) (\\d\\d):(\\d\\d):(\\d\\d)");
        fileData = fileData.filter(function (el) {
            return el != null;
          });
        fileData = fileData.map((info) => {

            let newInfo = {"timeStamp" : info.timeStamp, "dateNum":0, "NET":"", "TARA":"","DI":"","GSM Strength":"","SysTemp":""};
            let mDateNum = dateRegex.exec(info.timeStamp);
            let date = new Date(parseInt(mDateNum[2]), parseInt(mDateNum[3]), parseInt(mDateNum[4]), parseInt(mDateNum[5]), parseInt(mDateNum[6]));
            console.log(date.getTime());
            newInfo["dateNum"] = date.getTime();
            //console.log(newInfo["dateNum"]);

            //console.log(info.data)
            //console.log(info["data"][5]["Sys.Temp:"]);
            newInfo["NET"] = parseFloat(regex.exec(info["data"][1]["NET:"]));
            newInfo["TARA"] = parseFloat(regex.exec(info["data"][2]["TARA:"]));
            newInfo["DI"] = parseFloat(regex.exec(info["data"][3]["DI:"]));
            newInfo["GSM"] = parseFloat(regex.exec(info["data"][4]["GSM Strength:"]));
            newInfo["temp"] = parseFloat(regex.exec(info["data"][5]["Sys.Temp:"]));

                        //console.log(newInfo);
            //sort
            return newInfo;
        });
        fileData=fileData.sort( (a,b)=>{return a["dateNum"] > b["dateNum"]} );
        //console.log(fileData);

        const data = [
            { name: 'Page A', uv: 0, pv: 0, amt: 0 },
            { name: 'Page B', uv: 1, pv: 8, amt: 0 },
            { name: 'Page C', uv: 2, pv: 0, amt: 0 },
            { name: 'Page D', uv: 3, pv: 8, amt: 0 },
            { name: 'Page E', uv: 0, pv: 0, amt: 1 },
            { name: 'Page F', uv: 0, pv: 0, amt: 0 },
            { name: 'Page G', uv: 0, pv: 8, amt: 0 },
        ];

        let height = this.state.height;
        let width = this.state.width;

        //data.map((elem)=>{return elem.name})
        //type="number"
        //domain={[new Date(2018, 5, 1).getTime(), new Date(2018 ,9 ,1).getTime()]}
        /*ticks: {
            callback: function(label, index, labels) {
                return label/1000+'k';
            }
        }*/
        return (
            <div>
                <LineChart
                    margin={{ top: 100, right: 10, left: 20, bottom: 5 }}
                    width={width * 0.8}
                    height={height * 0.8}
                    data={fileData}>
                    <XAxis type="number" scale="time" dataKey="dateNum" domain={[new Date(2018, 5, 1).getTime(), new Date(2018 ,9 ,1).getTime()]}/>
                    <Line dataKey={"timeStamp"} />
                    <YAxis />
                    <Line type="monotone" dataKey="NET" stroke="#0f0" dot={false}/>
                    <Line type="monotone" dataKey="TARA" stroke="#044" dot={false}/>
                    <Line type="monotone" dataKey="DI" stroke="#f00" dot={false}/>
                    <Line type="monotone" dataKey="GSM" stroke="#404" dot={false}/>
                    <Line type="monotone" dataKey="temp" stroke="#440" dot={false}/>
                    <Tooltip/>
                </LineChart>
            </div>

        )
    }


    render = () => {
        let actualChart = this.chart();
        return (
            <div ref={this.holder} onClick={(kissa) => this.resized()} className='GraphBoxStyle'>
                <div style={{margin: 20}} >Data sent from the beehive scale in graph</div>
                {actualChart}
            </div>
        )
    }

}
export default Graph;

