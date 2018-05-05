import React from 'react';
import ReactDOM from 'react-dom';
import ServiceChooser from './App';

var services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

// Render the ServiceChooser component, and pass the array of services
ReactDOM.render(
    <ServiceChooser items={ services } />,
    document.getElementById('root')
);
