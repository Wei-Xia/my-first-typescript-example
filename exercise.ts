let bankAccount: {money: number, deposit: (value: number) => void} = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

type bankAccountAlias = {money: number, deposit: (value: number) => void};

let myself: {name: string, bankAccount: bankAccountAlias, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

// console.log(myself);