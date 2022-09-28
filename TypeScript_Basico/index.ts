// Criando DioBank
interface IConta {
      nomeTitular: string
      saldo?: number
}

class Conta {
      private nomeTitular: string
      private saldo: number
      private ativa: boolean = true

      constructor({
            nomeTitular,
            saldo = 0
      }: IConta){
            this.nomeTitular = nomeTitular,
            this.saldo = saldo
            console.log(`Bem vindo ao DIO Bank, ${this.nomeTitular}`)
      }
      // - função consultar saldo
      meuSaldo = (): number => this.saldo

      // - função depositar na conta
      depositar = (valor: number): void | boolean => {
            if(!this.ativa){
                  console.log(`[ERRO] Conta desativada......Impossível realizar depósito..`)
                  return this.ativa
            }
            this.saldo += valor
            console.log(`Você depositou R$${this.saldo},00`)
      }

      // -  função sacar da conta
      sacar = (valor: number): boolean => {
            if(!this.ativa){
                  console.log(`[ERRO] Conta desativada......    impossível realizar sacar..`)
                  return this.ativa
            }

            if(valor <= this.saldo){
                  this.saldo -= valor
                  console.log(`Você sacou R$${this.saldo},00`)
                  return this.ativa
            }
            console.log(`Saldo insuficiente. Você quer sacar ${valor}. Seu saldo atual é de ${this.saldo}`)
            return this.ativa
      }

      // - encerrar a conta
      cancelarConta = () => {
            if(this.saldo === 0) {
                  this.ativa = false
                  console.log(`Conta Desativada com sucesso!!`)
                  return this.ativa
            }

            console.log(`[ERRO] Ainda não pode desativar conta de ${this.nomeTitular}. Conta com pendências!!`)
      }
}

// - chamando a função criar uma conta
const conta: Conta = new Conta({nomeTitular: 'Junior Melo'})
// const contaB: Conta = new Conta({nomeTitular: 'Luana Melo', saldo: 10})

// - chamando a função consultar saldo
conta.cancelarConta()
conta.depositar(10)