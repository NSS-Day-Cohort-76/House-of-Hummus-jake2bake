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
        const orderPrice = Math.round((100 - (sale.entree.price + sale.vegetable.price + sale.side.price) * 100) / 100);
        return `<div>Receipt #${sale.id} = $${orderPrice}</div>`
    })

    salesDivs = salesDivs.join("")

    return salesDivs
}

