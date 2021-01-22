import { useReducer } from 'react';

export const percentualToValor = (valor, percentual) => {
  return ((percentual / 100) * valor)
}

export const normalizeMoneyString = (val) => {
  return val.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      console.log(action.inputId)
      console.log(action.value)
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

export const useForm = (initialInputs) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs
  });

  const inputHandler = (id, value) => {
    console.log("inputHandler")
    console.log(value)
    console.log(id)
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      inputId: id
    })
  }

  return [formState, inputHandler];
};
