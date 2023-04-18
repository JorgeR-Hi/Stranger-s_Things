import {createRoot} from "react-dom/client";
import {App, Register, Post, Message} from "./componets";


const root = createRoot(document.querySelector("#app"));


root.render(<App/>);