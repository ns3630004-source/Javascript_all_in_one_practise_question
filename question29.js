// write a program of number analaysis.

let num=Number(prompt("enter your number :"));

let i;

if (num > 0){

    console.log("positive number :");


    for(i=1; i<=num; i++)
    {
        console.log("i=",i)

    }
}

else if (num < 0){

    console.log("negative number: ")

}

else{

    console.log("zero ")

}