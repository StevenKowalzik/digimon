import digimon from './data/digimon.json'
import uniqueRandomArray from 'unique-random-array'

export function random() {
  const list = uniqueRandomArray(digimon)
  return list()
}

console.log(random())