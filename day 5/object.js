function findTM(no1,no2,no3){
return no1+no2+no3
}
const a={marks:{eng:34,math:98,sci:67},
name:"ani",
roll:9,
class:"IV",
findtotalM:findTM
}
const sum=a.findtotalM(a.marks.eng,a.marks.math,a.marks.sci)
console.log(sum);