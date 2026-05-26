function iseven(n) {
  if (n % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
function  isodd(n){
    if(n%2!==0){
        console.log("odd");
    }
    else{
        console.log("even");
    }
}
function isprime(num) {
  let isprime = true;
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      isprime = false;
      break;
    }
  }
  if (isprime) {
    console.log(num, " is Prime");
  } else {
    console.log(num, "not prime");
  }
}
module.exports={feven:iseven,fodd:isodd,fprime:isprime}