import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { House } from "../models/Houses.js";
import { houseService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

function _drawHouses() {
    const Houses = AppState.houses
    let content = ''
    Houses.forEach(house => content += house.HouseCard)
    setHTML('houses', content)
}


export class HouseController {
    constructor() {
        console.log('this is the houses controller');
        _drawHouses()

        AppState.on('houses', _drawHouses)
    }

    createHouse(event) {
        try {
            event.preventDefault()

            const form = event.target

            const houseData = getFormData(form)

            houseService.createHouse(houseData)

            form.reset()


        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }


}

