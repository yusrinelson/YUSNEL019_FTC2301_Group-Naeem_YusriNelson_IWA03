// alex.js

export const firstname = "alex"
export const surname = "ferguson"
export const role = "Head of Marketing"

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display
