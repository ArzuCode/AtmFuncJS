class ATM {
    constructor() {
      this.balance = 1000;
      this.creditLimit = 500;
      this.loanBalance = 0;
    }
  
    deposit() {
      const amount = parseFloat(prompt("Enter the amount to deposit:"));
      if (!isNaN(amount) && amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Invalid deposit amount.");
      }
    }
  
    withdraw() {
      const amount = parseFloat(prompt("Enter the amount to withdraw:"));
      if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Invalid withdrawal amount or insufficient funds.");
      }
    }
  
    checkBalance() {
      console.log(`Current balance: $${this.balance}`);
    }
  
    requestLoan() {
      const amount = parseFloat(prompt("Enter the loan amount you want:"));
      if (!isNaN(amount) && amount > 0 && amount <= this.creditLimit) {
        this.loanBalance += amount;
        this.balance += amount;
        console.log(`Loan of $${amount} approved. New balance: $${this.balance}`);
      } else {
        console.log("Loan request denied or invalid loan amount.");
      }
    }
  
    repayLoan() {
      const amount = parseFloat(prompt("Enter the amount to repay the loan:"));
      if (!isNaN(amount) && amount > 0 && amount <= this.loanBalance) {
        this.loanBalance -= amount;
        console.log(`Loan repayment of $${amount} successful. Remaining loan balance: $${this.loanBalance}`);
      } else {
        console.log("Invalid loan repayment amount.");
      }
    }
  }
  
  const myATM = new ATM();
  
  while (true) {
    const choice = prompt(`
      Choose an option:
      1. Deposit
      2. Withdraw
      3. Check Balance
      4. Request Loan
      5. Repay Loan
      6. Exit
    `);
  
    switch (choice) {
      case "1":
        myATM.deposit();
        break;
      case "2":
        myATM.withdraw();
        break;
      case "3":
        myATM.checkBalance();
        break;
      case "4":
        myATM.requestLoan();
        break;
      case "5":
        myATM.repayLoan();
        break;
      case "6":
        console.log("Exiting the ATM.");
        process.exit(0);
      default:
        console.log("Invalid choice. Please select a valid option.");
    }
  }
  