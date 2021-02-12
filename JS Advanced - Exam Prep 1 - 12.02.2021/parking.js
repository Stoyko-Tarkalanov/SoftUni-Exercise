class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {

        if (this.vehicles.length >= this.capacity) {
            throw new Error('Not enough parking space.');
        }

        this.vehicles.push({ carModel, carNumber, payed: false });

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let carInfo = this.vehicles.find(e => e.carNumber === carNumber);

        if (!carInfo) {
            throw new Error(`The car, you're looking for, is not found.`);
        }

        if (carInfo.payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        let carInx = this.vehicles.indexOf(carInfo);
        this.vehicles.splice(carInx, 1);

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let carInfo = this.vehicles.find(e => e.carNumber === carNumber);

        if (!carInfo) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (carInfo.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        this.vehicles.map(v => {
            v === carInfo ? v.payed = true : v;
        });

        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        //     if (!carNumber) {
        //         let storage = [];
        //         let forAll = this.vehicles
        //             .sort((a, b) => a.carModel.localeCompare(b.carModel))
        //             .forEach(line => storage.push(`${line.carModel} == ${line.carNumber} - ${line.payed == true ? 'Has payed' : 'Not payed'}`));

        //         return `The Parking Lot has ${this.capacity} empty spots left.\n${storage.join('\n')}`;
        //     }
        //     if (carNumber) {
        //         return `${console.log(`${this.vehicles.carModel} == ${this.vehicles.carNumber} - ${this.vehicles.payed == true ? 'Has payed' : 'Not payed'}`)}`;
        //     }

        let carInfo = this.vehicles.find(e => e.carNumber === carNumber);

        if (carNumber) {
            return `${carInfo.carModel} == ${carInfo.carNumber} - ${carInfo.payed ? `Has payed` : `Not payed`}`;
        }

        let result = [`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`];

        this.vehicles
            .sort((a, b) => {
                return a.carModel.localeCompare(b.carModel);
            })
            .map((x) => {
                result.push(`${x.carModel} == ${x.carNumber} - ${x.payed ? `Has payed` : `Not payed`}`);
            });

        return result.join("\n");
    }
}

// const parking = new Parking(12);

// console.log(parking.addCar("Volvo t600", "TX3691CA"));
// console.log(parking.addCar("BMW 600", "SA9090SA"));
// console.log(parking.addCar("Audi A3", "PA2323PA"));
// console.log(parking.getStatistics());

// console.log(parking.pay("AS5544QW"));

// console.log(parking.pay("TX3691CA"));
// console.log(parking.pay("SA9090SA"));
// console.log(parking.removeCar("TX3691CA"));
