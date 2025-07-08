import React from 'react'
import { createRoot } from "react-dom/client";
import App from "./components/App";

const rootHTMLEle = document.getElementById('root')
const rootReactElement = createRoot(rootHTMLEle)
rootReactElement.render(<App />)


