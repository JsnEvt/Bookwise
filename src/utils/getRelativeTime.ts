export function getRelativeTime(date: Date | number, lang = navigator.language): string {

  // Permite que data ou tempos sejam validos
  const timeMs = typeof date === "number" ? date : date.getTime()

  //Obtem a quantidade de segundos entre a data atual e agora
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000)

  //Array representando um minuto, horla, dia, semana, mes, etc em segundos
  const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity]

  //Array representando os valores acima em string
  const units: Intl.RelativeTimeFormatUnit[] = ["second", "minute", "hour", "day", "week", "month", "year"]

  //Capturando a unidade correta do cutoff
  const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds))

  //Obtendo o divisor para dividir em segundos. Se a unidade e "dia" nosso 
  //divisor sera de um dia em segundos, entao nos podemos dividir nosso segundos por 
  //este para obter a quantidade de dias.
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1

  //Intl.RelativeTimeFormat para fazer o calculo:
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" })
  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
}