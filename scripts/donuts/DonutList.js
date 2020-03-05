/*
    This module is responsible for creating the HTML for a list of donuts
*/

import { Donut } from "./Donut.js";
import { useDonuts } from "./DonutDataProvider.js"


/*
    Querying the document for an element that has a class of container and storing that element in a variable called contentTarget
*/
const contentTarget = document.querySelector(".container")

export const DonutList = () => {
    /*
    Invoking the useDonuts function that returns a copy of the donut data, and storing it in a variable called donutArray
    */
    const donutArray = useDonuts()

    // Need a for loop to iterate over the donutArray
    for (const donutObject of donutArray) {
        // invoking the Donut() function that returns an HTML representation of a donut object
        const donutHTML = Donut(donutObject)
        // putting the donutHTML on the contentTarget element
        contentTarget.innerHTML += donutHTML
    }
}