// Criando DioBank


// -  sacar da conta
// - encerrar a conta

interface IConta {
      nomeTitular: string
      saldo?: number
}

class Conta {
      private nomeTitular: string
      private saldo: number

      constructor({
            nomeTitular,
            saldo = 0
      }: IConta){
            this.nomeTitular = nomeTitular,
            this.saldo = saldo
            console.log(`Bem vindo ao DIO Bank, ${this.nomeTitular}`)
      }
      // - consultar saldo
      meuSaldo = (): number => this.saldo

      // - depositar na conta
      depositar = (valor: number) => {
            this.saldo += valor
            console.log(`Você depositou R$${this.saldo},00`)
      }
}

// - criar uma conta
const contaA: Conta = new Conta({nomeTitular: 'Junior Melo'})
// const contaB: Conta = new Conta({nomeTitular: 'Luana Melo', saldo: 10})

// - consultar saldo
console.log('Saldo atual R$',contaA.meuSaldo()) 

contaA.depositar(100) // depositar (R$100,00)
// - consultar saldo depois do depósito
console.log('Depois de um novo depósito, meu saldo é de R$', contaA.meuSaldo())

// console.log(contaB)

