let prompt = require("prompt-sync")({ sigint: true });

// let start = 1,end = 5

// if(start>end){
//         start = start + end;
//         end = start - end;
//         start = start - end;
//     }

//     evenSum = 0;
//     oddSum = 0;

//     for(let i=start;i<=end;i++){
//         if(i%2==0){
//             evenSum += i;
//         }else{
//             oddSum += i;
//         }
//     }

//     console.log([evenSum,oddSum]) 

function printFactors(n) {
    // Write your logic here
    let factor = [];
    if(n<=0|| !Number.isInteger(n)){
        return "Please provide a positive Number"
    }
    
    for(i=1;i<=Math.sqrt(n);i++){
        if(n%i==0){
            factor.push(i);
        }
        if(i !==n /i){
            factor.push(n/i);
        }
    }

    const result = factors.sort((a, b) => a - b).join(' ');
    process.stdout.write(result);
}

printFactors(12)