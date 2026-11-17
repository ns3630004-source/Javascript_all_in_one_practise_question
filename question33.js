// write a program of student object.

let student={

    "name":"nikhil",

    "course":"BCA",

    "marks":70,

}


for(let i in student){

    console.log("keys",i , "value", student[i])

}

if (student.marks > 40){

    console.log("pass")

}

else{

    console.log("fail")
}