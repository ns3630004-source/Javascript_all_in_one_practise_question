// write a program check prime number.

let num=Number(prompt("enter your number check number is prime or not."))

count=0

for(let i=1; i<=num; i++){

    if(num%i==0){

        count++;
    }
}

if(count==2){

    console.log("prime number :")
}


else{

    console.log("not prime nuber :")
}