import React from 'react';
import ReactDOM from 'react-dom';
import MenuExample from './App';

// Render the menu component on the page, and pass an array with menu options
ReactDOM.render(
    <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
    document.getElementById('root')
);
