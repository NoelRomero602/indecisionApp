import React from 'react'; 
import ReactDom from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDom.render(<IndecisionApp options ={['der1','redlightDistrict']}/>,document.getElementById('app')); 