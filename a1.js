var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.Deposit = function (amount) {
        this.accountBalance += amount;
    };
    BankAccount.prototype.ShowBalance = function () {
        console.log("balance is : " + this.accountBalance);
    };
    return BankAccount;
}());
;
var c1 = new BankAccount();
c1.Deposit(1200);
c1.ShowBalance();
