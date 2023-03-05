export const removeFromArrayObj = (arr: any[], value: string | number | boolean, key: string): void => {
  /** Vai procurar qual é o index */
  const index = arr.findIndex((obj) => obj[key] === value)
  /** Splice vai remover o index que foi encontrado */
  if (index >= 0) arr.splice(index, 1)
}