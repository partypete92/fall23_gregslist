import { generateId } from "../utils/GenerateId.js";

export class House {
    constructor(data) {
        this.id = data.id || generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl


    }

    get HouseCard() {
        return `  <div class="col-10  car-border mb-2">
    <div class="d-flex">
<img class="house-img m-2"
    src="${this.imgUrl}" alt="${this.name}">
    <div class="mx-3">
        <h2>${this.name}</h2>
        <p>${this.year}</p>
        <h3>Bedrooms: ${this.bedrooms}</h3>
        <h3>Bathrooms: ${this.bathrooms}</h3>
        <h3>Sqft: ${this.sqft}</h3>
        <h3>Price: $${this.price}</h3>
        <p>Description: ${this.description} </p>

    </div>
    </div>
</div>`


    }

}