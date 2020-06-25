/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DashTabulator } from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            columns : [
                { title: "Name", field: "name", width: 150 },
                { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
                { title: "Favourite Color", field: "col" },
                { title: "Date Of Birth", field: "dob", hozAlign: "center" },
                { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
                { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" }
              ],
              data : [
                {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
                {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
                {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
                {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
                {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
              ]
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <DashTabulator
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
