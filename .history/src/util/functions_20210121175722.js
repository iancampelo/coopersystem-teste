export const percentualToValor = (valor, percentual) => {
  return ((percentual / 100) * valor)
}

export const normalizeMoneyString = (val) => {
  return val.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

const formReducer = (state, action) => {
  switch (action.type) {
      case 'INPUT_CHANGE':
          return {
              ...state,
              inputs: {
                  ...state.inputs,
                  [action.inputId]: action.value
              }
          }
      default:
          return state;
  }
}

export formReducer;