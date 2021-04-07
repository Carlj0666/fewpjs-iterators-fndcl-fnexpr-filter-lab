// Code your solution here

const test = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const string1 = 'Bobby'
const string2 = 'Sammy'


function findMatching(array, string){
    return array.filter(s => s.toLowerCase() === string.toLowerCase()
  )
}

function fuzzyMatch(array, string) {
  return array.filter(s => s.toLowerCase().indexOf(string.toLowerCase()) === 0
  )
}

function matchName(array, string) {
  return array.filter(s => s.name === string)
}