class BankAccount{
        constructor(account_no,account_holder,balance){
              this.account_no=account_no;
             this.account_holder=account_holder;
               this.balance=balance;
              
        }
         deposit(deposit_amount){
             const newdeposit=this.balance+deposit_amount;
             this.balance=newdeposit
        }
        withdraw(withdrawal_amount){
            const newwithdraw=this.balance-withdrawal_amount;
            this.balance=newwithdraw
        }
        displayBalance(){
            console.log(this.balance) ;
        }
    }
        
        let vansh = new BankAccount(900924233324,"vansh", 30000)
        let eshaan = new BankAccount(48947957459479, "eshaan", 40000)
        let sidharth= new BankAccount(8739744731378378,"sidharth",24000)
        console.log(vansh);
        vansh.deposit(8000)
        console.log("BALANCE AFETR DEPOSIT:")
        vansh.displayBalance();
        vansh.withdraw(5000);
        console.log("BALANCE AFTER WITHDRAWAL:")
        vansh.displayBalance();
        console.log(eshaan);
        eshaan.deposit(7000)
        console.log("BALANCE AFETR DEPOSIT:")
        eshaan.displayBalance();
        eshaan.withdraw(4000);
        console.log("BALANCE AFTER WITHDRAWAL:")
        eshaan.displayBalance();
        console.log(sidharth);
        sidharth.deposit(6000)
        console.log("BALANCE AFETR DEPOSIT:")
        sidharth.displayBalance();
        sidharth.withdraw(3000);
        console.log("BALANCE AFTER WITHDRAWAL:")
        sidharth.displayBalance();  




        class  savingsaccount extends BankAccount{
                super(account_no,account_holder,balance){

                }
        addinterest(){
            const interest=(0.08*this.balance);
            const newbalance=this.balance+interest;
            this.balance = newbalance;
            }
        withdraw(withdrawal_amount){
            if(withdrawal_amount>4000){
                const newwithdraw=withdrawal_amount+300;
                this.balance = this.balance-newwithdraw;
                console.log("Total Deduction from balance is",newwithdraw)
            }
        }    
        }
        
        const interestrate = new savingsaccount(900924233324,"vansh", 30000);
        interestrate.addinterest();
        console.log("BALANCE AFTER INTERST IS ",interestrate)
        const interestrate2 = new savingsaccount(48947957459479, "eshaan", 40000);
        interestrate2.addinterest();
        console.log("BALANCE AFTER INTERST IS ",interestrate2)
        const interestrate3 = new savingsaccount(8739744731378378,"sidharth",24000);
        interestrate3.addinterest();
        console.log("BALANCE AFTER INTERST IS ",interestrate3)




        const penaltyrate=new savingsaccount(900924233324,"vansh", 30000)
        penaltyrate.withdraw(5000);
        console.log("BALANCE AFTER WITHRAWAL PENALTY IS",penaltyrate);
        const penaltyrate2=new savingsaccount(48947957459479, "eshaan", 40000)
        penaltyrate2.withdraw(4000);
        console.log("BALANCE AFTER WITHRAWAL PENALTY IS",penaltyrate2);
        const penaltyrate3=new savingsaccount(8739744731378378,"sidharth",24000)
        penaltyrate3.withdraw(3000);
        console.log("BALANCE AFTER WITHRAWAL PENALTY IS",penaltyrate3);
