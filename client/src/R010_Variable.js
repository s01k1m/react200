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

    }

}