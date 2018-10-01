<<<<<<< HEAD
class CreditCard {
    private Code: String;
    private Expiration: Date;
    protected MonthlyCost: number;

    constructor(code: String, Expiration: Date, MonthlyCost: number) {
        this.Code = code;
        this.Expiration = Expiration;
        this.MonthlyCost = MonthlyCost;
    }

    getCode(): String {
        return this.Code;
    }

    getExpiration(): Date {
        return this.Expiration;
    }

    monthlyDiscount(): number {
        return this.MonthlyCost * 0.02;
    }

}



class GoldCreditCard extends CreditCard {

    monthlyDiscount(): number {
        return this.MonthlyCost * 0.05;
    }
}


class SilverCreditCard extends CreditCard {

    monthlyDiscount(): number {
        return this.MonthlyCost * 0.03;
    }
}
=======
>>>>>>> 1ddfdddd19a9aa3ccc909995853a0cb334477013
