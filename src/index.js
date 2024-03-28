//導入React的核心功能
import React from 'react';
//導入ReactDOM庫的核心功能
import ReactDOM from 'react-dom/client';


//導入項目的根組件
import App from './App';

//把APP根組件渲染到id="root"的dom節點上,在public中的index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

