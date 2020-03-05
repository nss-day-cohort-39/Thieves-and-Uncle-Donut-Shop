/*
    This module's responsibility is to represent a single donut in HTML
*/

export const Donut = (donutObject) => {
    return `
    <section>
        <h4>${donutObject.name}</h4>

        <ul>
            <li>Glaze: ${donutObject.glaze}</li>
            <li>Type: ${donutObject.type}</li>
            <li>Flavor: ${donutObject.flavor}</li>
            <li>Topping: ${donutObject.topping}</li>
        </ul>
    </section>
    `
}