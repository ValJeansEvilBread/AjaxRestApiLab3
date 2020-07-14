
const makeAllCaps = (wordarray) => 
  new Promise ((resolve, reject) => {
    if (wordarray.every(word => typeof word === 'string')){
      resolve(wordarray.map(word => word.toUpperCase()))
    } else {
      reject(Error('Error. Each element in the array can take the form of a single word as a string.'))
    }
  })

const sortWords = (wordarray) => {
  return wordarray.sort((i, j) => {
    if (i > j){
      return 1
    } else {
      return -1
    }
  })
}
