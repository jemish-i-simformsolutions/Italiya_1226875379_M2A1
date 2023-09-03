let xyz={}
let sign='-'

function dummy1(a,b){

    return a+b
}

function dummy2(a,b){

    return a-b
}

if(sign=='+'){
    xyz= dummy1
}else{
    xyz= dummy2
}

console.log(xyz(1,2));
