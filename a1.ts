class BankAccount{
    private accountBalance:number ;
    public Deposit(amount){
        this.accountBalance += amount ;
    } 
    public ShowBalance(){
        console.log("balance is : "+this.accountBalance);
    }
} ; 

var c1 = new BankAccount(); 

c1.Deposit(1200); 
c1.ShowBalance(); 

