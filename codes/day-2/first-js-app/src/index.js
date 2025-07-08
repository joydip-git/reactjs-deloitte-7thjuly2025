
import { createRoot } from "react-dom/client";
import App from "./components/app";

const appReactElementDesign = App()

const rootHTMLEle = document.getElementById('root')

const rootReactElement = createRoot(rootHTMLEle)

rootReactElement.render(appReactElementDesign)
//rootEle.appendChild(appDesign)


