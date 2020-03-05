const donuts = [
    {
        name: "Chocoholic",
        glaze: "Chocolate",
        type: "Cronut",
        flavor: "Chocolate",
        topping: "Chocolate Sprinkles"
    },
    {
        name: "Strawberry",
        glaze: "Strawberry",
        type: "Cronut",
        flavor: "Strawberry",
        topping: "Rainbow Sprinkles"
    },
    {
        name: "Red Velvet Cake",
        glaze: "Plain",
        type: "Cake",
        flavor: "Read Velvet",
        topping: "Red Velvet cake crumbs"
    }
]

// Returns a copy of the donut array
export const useDonuts = () => {
    return donuts.slice();
}