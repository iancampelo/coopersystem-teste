export const percentualToValor = (valor, percentual) => {
  return ((percentual / 100) * valor)
}

export const normalizeMoneyString = (val) => {
  return val.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}