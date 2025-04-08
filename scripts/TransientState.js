const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const setChosenEntree = (entreeId) => {
    transientState.entreeId = entreeId
}

export const setChosenVegetable = (vegetableId) => {
    transientState.vegetableId = vegetableId
}

export const setChosenSideDish = (sideId) => {
    transientState.sideId = sideId
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(transientState)
        
    }
    const response = await fetch("http://localhost:8088/purchases", postOptions)

    const newOrderEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(newOrderEvent)
}