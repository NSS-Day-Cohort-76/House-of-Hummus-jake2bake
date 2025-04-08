import { placeOrder } from "./TransientState.js"

const handleOrderSubmission = (clickEvent) => {
    if(clickEvent.target.id === "purchase"){
        placeOrder()
        console.log("Button Clicked!")
    }
}

export const Sales = async () => {
    document.addEventListener("click", handleOrderSubmission)
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())
    
    let salesDivs = sales.map((sale) => {
        const orderPrice = sale.entree.price + sale.vegetable.price + sale.side.price
        const formattedTotal = orderPrice.toFixed(2)
        return `<div>Receipt #${sale.id} = $${formattedTotal}</div>`
    })

    salesDivs = salesDivs.join("")

    return salesDivs
}

