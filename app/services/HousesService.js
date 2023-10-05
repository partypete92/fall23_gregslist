import { AppState } from "../AppState.js"
import { House } from "../models/Houses.js"

class HouseService {
    createHouse(houseData) {
        const newHouse = new House(houseData)
        AppState.houses.push(newHouse)

    }

}

export const houseService = new HouseService()
