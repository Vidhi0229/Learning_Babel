const users = [
    {name: 'vidhi', premium: true},
    {name: 'Rohan', premium: false},
]

const getNonPremium = (users) => {
    return users.filter(user => user.premium)
}

export { getNonPremium, users as default}