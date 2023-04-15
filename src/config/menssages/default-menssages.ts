export const Menssage = {
  isString: '$property deve ser um texto',
  isNumber: '$property deve ser um número',
  isBollean: '$property deve ser um bolleano',
  isNotEmpty: '$property campo obrigatorio',
  isEmail: `$property inválido`,
  mongoRequired: (key: string) => `O campo ${key} é obrigatório`,
  mongoUnique: (key: string) => `O ${key} já está cadastrado`,
  mongoMatch: (key: string) => `Formato inválido de ${key}`,
  mongoMin: (key: string, value: string) => `Valor de ${key} deve ser maior que ${value}`
}

