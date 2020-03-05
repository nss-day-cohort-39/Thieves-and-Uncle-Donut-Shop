import { DonutList } from "./donuts/DonutList.js"
import { DonutHTML } from "./donuts/Donut.js"

const containerDiv = document.querySelector(".container")

containerDiv.innerHTML = DonutList()
containerDiv.innerHTML += DonutHTML()