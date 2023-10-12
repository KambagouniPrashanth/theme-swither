import React from 'react';
import ReactDom from 'react-dom'
import App from './App'

import ColorContext from './context/ColorContext';
import ColorProvider from './context/ColorProvider';


ReactDom.render(
<ColorProvider>
<App/>
</ColorProvider>,
document.getElementById("root"));