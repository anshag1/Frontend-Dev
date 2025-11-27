// Q7: Banking Application (private field #balance)

class BankAccount {
  #balance;
  constructor(initial = 0) {
    this.#balance = initial;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error('Deposit must be positive');
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error('Withdrawal must be positive');
    if (amount > this.#balance) throw new Error('Insufficient balance');
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

// Demo
const acc = new BankAccount(1000);
console.log('Balance after deposit 500:', acc.deposit(500));
try {
  console.log('Withdraw 2000:'); acc.withdraw(2000);
} catch (err) {
  console.error('Withdraw error:', err.message);
}
console.log('Final balance:', acc.getBalance());
