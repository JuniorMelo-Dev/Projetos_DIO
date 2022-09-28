interface IcalcIdade {
      nome: string,
      anoNasc: number
      profissao ?: string //parâmetro opcional
}

function calcIdade({
      nome,
      anoNasc,
      profissao
}: IcalcIdade): string {
      const idade: number = 2022 - anoNasc
      if(profissao){
            return `Meu nome é ${nome} e minha futura profissão será de ${profissao}`
      }
      return `Meu nome é ${nome} e nasci em ${anoNasc}, portanto minha  idade será ${idade} anos`
}

const nome = 'Junior Melo'
const anoNasc = 1990
const profissao = 'Web Developer'

console.log(calcIdade({nome, anoNasc, profissao}))