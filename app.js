// let cash = 50
// let price = 50
// let isStoreOpen = true

// isStoreOpen && cash >= price ? console.log('give receipt') : console.log('do not give receipt')


// for (let i=1; i<=20; i++) {
//     let a = i % 3 === 0;
//     let b = i % 5 === 0;
//     if(a && b){
//         console.log(`${i} -> Frontend Simplified`);
//     }else if(a){
//         console.log(`${i} -> Frontend`);
//     }else if(b){
//         console.log(`${i} -> Simplified`);
//     }else {
//         console.log(`${i} -> ${i}`);
//     }
// }

// const str = "Frontend Simplified"
// for (let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }

// function convertCelciusToFahrenheit(c){
//     console.log(c*1.8 + 32)
// }

// convertCelciusToFahrenheit(20)

// let grades = ['A+', 'A', 'FAIL']
// let goodGrades = []

// let newGrades = grades.filter(element => element !== 'FAIL')
// console.log(newGrades)

// for (i=0; i < grades.length; i++) { 
//     if(grades[i] !== 'FAIL'){
//         goodGrades.push(grades[i])
//     }
// }

// console.log(goodGrades)




//let dollars = [1, 5, 10, 3];

// // let cents = dollars.map(e => e*100)

// let cents = dollars.map((element) => {
//     return element*100
// }
// )
// console.log(cents)

// let cents = []
// for(i=0; i < dollars.length; i++){
//     cents.push(dollars[i]*100)
// }

// console.log(cents)


let users = []
function register(user) {  
    users.push(user);
}


register({
    username: 'username2',
    email: 'email',
    password: 'password',
    subscriptionStatus: 'subscriptionStatus',
    discordId: 'discordId',
    lessonsCompleted: 'lessonsCompleted'
});

console.log(users)