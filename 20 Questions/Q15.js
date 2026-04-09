function createBankAccount(initialBalance) {
    let balance = initialBalance;
  return {
    deposit(amount) {
        balance += amount;
        return balance;
    },
    withdraw(amount) {
        if(amount>balance) {
            throw new Error("no sufficient balance");
        }
        balance -= amount;
        return balance;
    },
    getBalance() {
        return balance;
    }
  };
}

const acc = createBankAccount(1000);
console.log(acc.deposit(500));
console.log(acc.withdraw(200));
console.log(acc.getBalance());