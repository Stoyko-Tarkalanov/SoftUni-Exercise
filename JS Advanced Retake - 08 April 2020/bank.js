class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
        this.transactions = [];
    }

    newCustomer(customer) { // object {firstName, lastName, personalId}.
        const findCustomer = this.allCustomers.some(x => x.firstName === customer.firstName || x.lastName === customer.lastName);

        if (!findCustomer) {
            this.allCustomers.push(customer);
            return customer;
        } else {
            throw Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
    }

    depositMoney(personalId, amount) { //Both the personalId and the amount are numbers.
        const findCustomer = this.allCustomers.find((x) => { return x.personalId === personalId });

        if (!findCustomer) {
            throw Error('We have no customer with this ID!');
        }

        if (!(findCustomer['totalMoney'])) {
            findCustomer['totalMoney'] = amount;
        } else {
            findCustomer['totalMoney'] += amount;
        }

        this.transactions.push(`${findCustomer.firstName} ${findCustomer.lastName} made deposit of ${amount}$!`);
        return `${findCustomer['totalMoney']}$`;
    }

    withdrawMoney(personalId, amount) { //Both the personalId and the amount are numbers.
        const findCustomer = this.allCustomers.find((x) => { return x.personalId === personalId });

        if (!findCustomer) {
            throw Error('We have no customer with this ID!');
        }

        if (findCustomer.totalMoney < 0) {
            throw Error(`${findCustomer.firstName} ${findCustomer.lastName} does not have enough money to withdraw that amount!`);
        }

        findCustomer.totalMoney -= amount;

        this.transactions.push(`${findCustomer.firstName} ${findCustomer.lastName} withdrew ${amount}$!`);
        return `${findCustomer.totalMoney}$`;
    }

    customerInfo(personalId) { //The personalId is of type number.
        const findCustomer = this.allCustomers.find((x) => { return x.personalId === personalId });
        let transaction = this.transactions
            .filter(x => x.includes(findCustomer.firstName))
            .reverse();

        if (!findCustomer) {
            throw Error('We have no customer with this ID!');
        }

        let output = `Bank name: ${this._bankName}
Customer name: ${findCustomer.firstName} ${findCustomer.lastName}
Customer ID: ${findCustomer.personalId}
Total Money: ${findCustomer.totalMoney}$
Transactions:`;

        let personCount = transaction.length;
        transaction.forEach(x => output += '\n' + `${personCount--}. ` + x);

        return output.trim();
    }
}


// let bank = new Bank('SoftUni Bank');

// console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
// console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);

// console.log(bank.withdrawMoney(6233267, 125));

// console.log(bank.customerInfo(6233267));
// let bank = new Bank('SoftUni Bank');

// console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
// console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);

// console.log(bank.withdrawMoney(6233267, 125));

// console.log(bank.customerInfo(6233267));
