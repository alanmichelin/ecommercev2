import File from './Test_Data.json'
//lo que hace esta funcion es retornar, si no hay parametros, toda la info, si hay parametros retorna lo especifico
export const Data = (params) =>{
  return params ? File[params] : File
    }

