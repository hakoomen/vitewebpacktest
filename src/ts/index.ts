import { log } from "./utils";
import "scss/index";


log("top-level-statement");

document.addEventListener("DOMContentLoaded", () => {
    import("chart.js").then((chart) => {
        console.log("doing sth with chart module");
    });
});


document.querySelector("#toggle-theme").addEventListener("click", ()=>{
    document.body.classList.toggle("white");
    document.body.classList.toggle("black");
});