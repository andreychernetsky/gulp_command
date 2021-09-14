// example object
// 1)создать объект
//2) вывести значение ключа a
//3) вывести значение ключа c
//4) вывести значение ключа d
//5) перезаписать свойсво ключа z
//6) добавим новые свойства в массив
//7) вывести весь объект d и проанализировать, что произошло
const object = {//1
    a:5,
    b:'javascript',
    c:false,
    d:{
        d:10,
        e:15
    },
    z:[1,2,3]
}
console.log(object.a);//2
console.log(object['a']);//2

console.log(object.c);//3
console.log(object.d['d']);//4

object.z='Где делся массив?'//5
console.log(object.z);

object.x = ['a','b','c']//6
console.log(object.x);
console.log(object);//7