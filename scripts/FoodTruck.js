import { EntreeOptions } from "./Entrees.js"
import { Sales } from "./Sales.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"


export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entrees = await EntreeOptions()
    const vegetables = await Veggies()
    const sides = await Sides()
    
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        
     <article class="choices">
            <section class="choices__entrees options">
                <h2>Base Dish</h2>
                ${entrees}
            </section>
            
            <section class="choices__vegetables options">
                <h2>Vegetables</h2>
                ${vegetables}
            </section>
           
            <section class="choices__sides options">
                <h2>Sides</h2>
                ${sides}
            </section>
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            <section id="order">
                ${salesHTML}
            </section>
        </article>

    `
}
