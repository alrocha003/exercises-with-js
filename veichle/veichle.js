'use strict';

class Veichle {
    _fuel;
    _fuelQuantity;

    constructor(fuel, fuelQuantity) {
        this._fuel = fuel;
        this._fuelQuantity = fuelQuantity;
    }

    verifyFuel() {
        return `Fuel quantity on car: ${this._fuelQuantity}`;
    }

    fuelType = () => $`Fuel type: ${this._fuel}`;

    autonomy(kmPerLiter) {
        let autonomy = this._fuelQuantity / kmPerLiter;

        return isNaN(autonomy) ? 'Ocorr an error to verify autonomy'
            : `The veichle drive autonomy is this: ${autonomy} km`;
    }
}

export default Veichle;