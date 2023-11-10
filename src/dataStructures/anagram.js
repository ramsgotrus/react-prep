
 let s = "rat";
 let t = "car"
function validAnagram(s,t){
    const ns = s.split('').sort().toString()
    const nt = t.split('').sort().toString()
    return ns === nt
}


console.log(validAnagram(s,t))