import React from 'react'
import ReactDom from 'react-dom'
import './style.css'
import Calculator from './component/app';

ReactDom.render(
    <Calculator />,
    document.getElementById('root')
    );