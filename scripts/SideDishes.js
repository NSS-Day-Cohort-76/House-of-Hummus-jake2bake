import { setChosenSideDish } from "./TransientState.js"
const handleSidesChange = (changeEvent) => {
    if (changeEvent.target.name === "side") {
        const sideId = parseInt(changeEvent.target.value)
        setChosenSideDish(sideId)
    }
}




export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()
    document.addEventListener("change", handleSidesChange)
    let html = ""
    const divStringArray = sides.map((side) => {
        return `<div><input type="radio" name="side"
        value="${side.id}" /> ${side.title} </div>`
    })
    html += divStringArray.join("")

    return html
}

