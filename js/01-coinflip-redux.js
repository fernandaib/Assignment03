let coinFlip;
let attempts = parseInt(prompt('Enter number of attempts'));
for (let i = 1; i<=attempts; i++){
    coinFlip = Math.round(Math.random());
    if (coinFlip=== 0){
        console.log('Heads');
    }else if (coinFlip=== 1){
        console.log('Tails');
    }

}

