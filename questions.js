// ?1  const, let – соблюдают блочную область видимости
//  var – игнорирует блочную область видимости
// значение переменной, объявленной с помощью const, нельзя переназначить
var var_name = "var outside"
let let_name ="outside let"
const const_name = " outside const"

console.log(let_name)//outside let
console.log(var_name)//var outside

if(true){
  let let_name ="Inner let" 
  var var_name = "var inner" 
  const const_name = "inner const"
  console.log(let_name)//Inner let
  console.log(const_name)//inner const
  console.log(var_name)//var inner

}

console.log(let_name)//outside let
console.log(const_name)//outside const
console.log(var_name)//var inner

// let, const не позволяет повторно объявлять переменные в той же области блока
// let let_name = "other let on the same scope" , 
// const const_name = "other const on the same block scope"

var_name = "different value of var"
let_name = "different value of let"
// const_name = "different value of const , will give an error" 

console.log(var_name)
console.log(let_name)
// console.log(const_name) TypeError: Assignment to constant variable.

console.log(x) //undefined
// console.log(y) Cannot access 'y' before initialization
// console.log(z) Cannot access 'z' before initialization

var x =2
let y = 3
const z = 4
console.log(x)//2
console.log(y)//3
console.log(z)//4

// Вы можете изменить свойства константного объекта или массива const, но вы не можете переназначить их

const student = {
  id:1,
  name:"Tatenda Ganyani",
  speciality:"Applied Mathematics and Informatic"
}
student.speciality="Frontend developer" // это разрешено

student.university = "Peoples FriendShip University of russia"//это разрешено

student = {
  id:2,
  country:"Zimbabwe" 
} //Error

const student_id =[1,2,3]
student_id[0]=5//это разрешено
student_id.push(8) //это разрешено

student_id =[11,1,3,7] //Error

// 2 Как создать копию объекта, какие способы имеются?

const student2 = {...student}
const student3 = Object.assign({},student)

nested_student = {
   id:1,
  name:"Tatenda Ganyani",
  speciality:"Applied Mathematics and Informatic",
  subjects:[
    {
      id:1,
      title:"maths"
    },
    {
      id:1,
      title:"russian language"
    }
  ]
}
student4 = JSON.parse(JSON.stringify(nested_student))

const student_with_methods = {
  id:1,
  name:"Tgb",
  age:19,
  age:function(){
    return this.age
  }
}

const _ = require('lodash');
const other_student = _.cloneDeep(student_with_methods)

//  Как лучше всего выполнить и обработать множество промисов одновременно?
// async /await
const axios = require('axios')

const fetchdate = async ()=>{
  await axios.get("url").then(res=>console.log(data))
  await axios.post("url").then(res=>{
    if(res.data?.loggedIn){
      console.log("Logged In")
    }
    else {
      alert("Error occured")
    }
  })
}

// Как в Node.js выполнить HTTP запрос к стороннему ресурсу?
//axios, fetch

const getData = async ()=>{
  const res = await fetch('url1')
  const data1 = await res.json()

  const data2 = await axios.get("url")
}

// Написать функцию, вычисляющую длину последнего слова в строке

const lenthOfLastWord = (word)=>{
   console.log(word.split(/\s+/).slice(-1)[0].length)
}




