class PaymentProcessor {
    constructor(newOptions) {
        this.payments = [];
        this.options = { types: ["service", "product", "other"], precision: 2 };
        if (newOptions) {
            this.setOptions(newOptions);
        }
    }

    registerPayment(id, name, type, value) {
        for (let payment of this.payments) {
            if (payment.id === id) {
                throw new Error("duplicate ID");
            }
        }

        if (this.options.types.includes(type) && id && name && type && Number(value)) {
            let payment = {id: id, name: name, type: type, value: value.toFixed(this.options.precision)};
            this.payments.push(payment);
        }
        else {
            throw new Error("invalid type");
        }
    }

    setOptions(options) {
        if (options.hasOwnProperty("types")) {
            this.options.types = options.types;
        }

        if (options.hasOwnProperty("precision")) {
            this.options.precision = options.precision;
        }
    }

    get(id) {
        let found = false;
        let payment;

        for (let p of this.payments) {
            if (p.id === id) {
                payment = p;
                found = true;
            }
        }

        if (found) {
            return `Details about payment ID: ${payment.id}\n` +
                    `- Name: ${payment.name}\n` +
                    `- Type: ${payment.type}\n` +
                    `- Value: ${payment.value}`;
        }
        else {
            throw new Error("ID not found");
        }
    }

    deletePayment(id) {
        let found = false;

        for (let payment of this.payments) {
            if (payment.id === id) {
                found = true;
            }
        }

        if (!found) {
            throw new Error("ID not found");
        }
        else {
            this.payments = this.payments.filter(p => p.id !== id);
        }
    }

    toString() {
        let balance = 0;

        for (let payment of this.payments) {
            balance += Number(payment.value);
        }

        return "Sumary: \n" +
            `- Payments: ${this.payments.length}\n` +
            `- Balance: ${balance.toFixed(this.options.precision)}`;
    }
}


// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
// generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
// generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
