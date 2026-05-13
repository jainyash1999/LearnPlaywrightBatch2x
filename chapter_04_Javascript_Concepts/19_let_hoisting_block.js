//let is block scoped
let element = "global";
if (true) {
    //TDZ for block scope start here
    //console.log(element); //refference error (Not"global"!)
    let element = "block";//TDZ ens here 
    console.log(element);//block


}
console.log(element);