
/*
let fun=function(){
    console.log("function starting today class")
}
fun()


// parameter passsing function
let square = function(num){
    let result = num*num
    return result
 
}
let value = square(10)
let value2=  square(12)
console.log(value)
console.log(value2)


let circle = function(sai){
    let result = sai*sai
    return result
}
 let radious = circle(13)
 let radious2= circle(2)
 console.log(radious)
 console.log(radious2)



 let one = function(kumar){
     result= kumar+kumar
     return result
 }
 let two = one(100)
 let three = one(200)
 console.log(two)
 console.log(two)

 // converting 

 let convertFarenhitTocelsious = function(forenhit){
     let celsious = (forenhit-2)*50/2
     return celsious
 }
   let temp=convertFarenhitTocelsious(32)
   let temp1=convertFarenhitTocelsious(30)
   console.log(temp)
   console.log(temp1)

   // undefined for variable

   let name1= "sai"
   if(name1 = undefined){
       console.log("my name is kumar sai")
   }else{
       console.log(name1)

   }


   // undefined as function arguments
   // undefined as retun default value


   let msi = function(num){
       console.log(num)

   }
   let msi1 = msi()
   console.log(msi1);
       



   //null as assigned values
   let age = 23
   age = null
   console.log(age)

   let age1 = 24
   age1 = null
   console.log(age1)


   //Global scope(convert)
   // local scope



   let elite = function(technology){
       let servers=(technology-32)*5/9

       if( servers<=0){
           let isSevices= true
           return servers

       }
    }
    let elite1= elite(10)
    let elite2= elite(20)
    console.log(elite1)
    console.log(elite2)


    // multiple arguments

  let add = function(a,b,c){
      return a+b+c

  }
  let res = add(10,1,8)
  console.log(res)


  let add1 =function (p,q,r){
      return p+q+r
    }
    let add2= add(15,15,15)
    console.log(add2)



    let take = function(x,y,z){
        return x+y-z
    }
    let take1 = take (5,5,7)
    console.log(take1)

    let module = function( r,s,t){
        return r*s*t

    }
    let module1 = module(2,2,2)
    console.log(module1)

let mat = function(g,s,t){
    return g-s/t
}
let mat1 = mat(5,5,2)
    
console.log(mat1)


//default arguments
 

let getScoreText = function(name = 'kumar', score = 0){
    return `Name:${name} - Score:${score}`

}
let scoreText = getScoreText(undefined,99)
console.log(scoreText)


// student score , total possible score

let gradeCalc = function( score,totalScore){
    let percent = (score/totalScore)*100
    let letterGrade=''

    if( percent>=90){
        letterGrade = 'A'
    
    }else if(percent>=80){
        letterGrade = 'B'

    }else if(percent>=70){
        letterGrade = 'c'
    }else if(percent>=60){
        letterGrade = 'D'

    }else{
        letterGrade ='fail'
    }
    return `you got a ${letterGrade} (${percent})`
}
let marks =gradeCalc(15,20) 
console.log(marks)



///objects


let myBook ={
    title:'1984',
    author : 'harrypoter',
    pageCount: 350,
}
console.log(myBook)
 //how to accesing properties using DOT(.)
 // objectname.property

 console.log(myBook.author)
 console.log(myBook.pageCount)
 console.log(myBook.title)

 // usage of template string and assessing properties of an object
 console.log(`${myBook.title} by ${myBook.author}`)


let me={
    name: 'kumar sai',
    age : 23,
    location:'bukkarayasamudram'

}
 console.log(`${me.name} is ${me.age} and lives in ${me.location}`)

 me.age = me.age + 1
 console.log(`${me.name} is ${me.age} and lives in ${me.location}`)
 


 let myNotes ={
     title:'empty notes',
     author: 'golkonda',
     pages: 350
 }
 let myNotes2 ={
     title:'empty notes',
     author: 'class note',
     pages: 250
 }

 console.log(myNotes)
 console.log(myNotes2)

/// create function getSummery

let getSummery = function(notes){
    console.log(`${myNotes.title} by ${myNotes.author}`)


}
getSummery(myNotes)
getSummery(myNotes2)


let mynoteBook ={
    title:'empty notes',
    author: 'golkonda',
    pages: 350
}









 



  class dog{
      constructor(name,year){
          this.name = name;
          this.year = year;
      }
  }
    let adog = dog("tommy",2023)
    adog.getDetails(
    
   
class Dog{
      constructor(name,year){
          this.name = name;
          this.year = year;
      }
      getDetails(){
          console.log(this.name)
      }
  }
    let adog = new Dog('tommy',2023);
    adog.getDetails()
    

class person{
    constructor(name,year){
        this.name = name;
        this.year = year;
    
    }
     getDetails(){
         console.log(this.name)
         console.log (this.year)
     }

}
let person1 = new person('Kumar sai',2023)
person1.getDetails()



class company{
    constructor(name,year,age){
        this.name = name;
        this.year = year;
        this.age  = age;
    }
    getDetails(){
        console.log(this.name)
        console.log(this.year)
        console.log(this.age)

    }
}
      let employer1 = new company('sai',1998,23)
      employer1.getDetails()



    let operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
let number1 = parseFloat(prompt('Enter first number: '));
 let number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);

*/








