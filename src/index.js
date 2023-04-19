import {createRoot} from "react-dom/client";
import {App} from "./componets";


const root = createRoot(document.querySelector("#app"));


root.render(<App/>);