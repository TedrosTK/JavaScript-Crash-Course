// let cash = 50
// let price = 50
// let isStoreOpen = true

// isStoreOpen && cash >= price ? console.log('give receipt') : console.log('do not give receipt')


for (let i=1; i<=20; i++) {
    let a = i % 3 == 0;
    let b = i % 5 == 0;
    if(a && b){
        console.log("Frontend Simplified");
    }else if(a){
        console.log("Frontend");
    }else if(b){
        console.log("Simplified");
    }else {
        console.log(i);
    }
}