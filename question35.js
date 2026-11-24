// write a program of number counter.

let num=Number(prompt("enter your number to check positive or negative: "))

let count=0

if (num > 0){

    console.log("even number :")

    for(let i=1; i<=num; i++){

         console.log("i=",i)

         count++;

    }

    console.log("your total count is :",count)
}


else if (num<0){

    console.log("negative number : ")

}

else{

    console.log("zero")
}