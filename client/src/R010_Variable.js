import React, { Component } from 'react';

class R010_Variable extends Component{

    constructor(props) {
        super(props);
        this.state ={};

    }

    componentDidMount() {
        var varName ='react';
        console.log('varName1: '+varName);
        var varName = '200'; // 'varName' is already defined no-redeclare
        console.log('varName2: '+varName);

        let letName = 'react';
        console.log('letName1: '+letName);
        letName = '200';
        console.log('letName2: '+letName);

        const constName = 'react';
        console.log('constName: '+constName);
        // const constName = '200';
        // parsing error: Identifier 'constName' has already declared
        // constName = 'react200';
        //  Uncaught TypeError :
    }

    render() {
        return (
            <h2>[This is Variable]</h2>
        )
    }

}
export default R010_Variable;
