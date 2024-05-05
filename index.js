// code your solution here
function saturdayFun(name = 'roller-skate') {
    return `This Saturday, I want to ${name}!`
}
function mondayWork(name = 'go to the office') {
    return `This Monday, I will ${name}.`
}
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
        
}
