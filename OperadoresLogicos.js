/*
&&
||
!
*/

let n1,n2,n3,n4

n1 = 17
n2 = 5
n3 = 16
n4 = 2

console.log(!((n1>n2)||(n1>n3)))

if(n1>n3 && n3 > n4){
    console.log(n1 + " é maior do que " + n3 + ", e " + n3 + " é maior do que " + n4)
}else if(n1==n3 && n3 == n4){
    console.log("Todos os números são iguais")
}else{
    console.log(n3 + " é maior do que " + n1)
}