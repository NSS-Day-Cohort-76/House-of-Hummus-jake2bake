import { setChosenEntree } from "./TransientState.js";
const handleEntreeChange = (changEvent) => {
    if (changEvent.target.name === "entree") {
        const entreeId = parseInt(changEvent.target.value)
        setChosenEntree(entreeId)
    }
}

export const EntreeOptions = async () => {
    const response = await fetch ("http://localhost:8088/entrees")
    const entrees = await response.json()
    document.addEventListener("change", handleEntreeChange)
    let optionsHTML = ""
    const divStringArray = entrees.map((entree) => {
        return `<div><input type="radio" name="entree"
        value="${entree.id}" /> ${entree.name} </div>`
    })
    optionsHTML += divStringArray.join("")
    return optionsHTML
}