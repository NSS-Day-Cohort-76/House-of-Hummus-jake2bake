import { setChosenVegetable } from "./TransientState.js"
const handleVeggiesChange = (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        const vegetableId = parseInt(changeEvent.target.value)
        setChosenVegetable(vegetableId)
    }
}




export const Veggies =  async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()
    document.addEventListener("change", handleVeggiesChange)
    let html = ""
    const divStringArray = vegetables.map((vegetable) => {
        return `<div><input type="radio" name="vegetable" 
        value="${vegetable.id}" /> ${vegetable.type} </div>`
    })
    html += divStringArray.join("")
    return html
}
