//Anagram - Two strings are called anagrams if they contain the 
// same characters with the same frequency,
//  but possibly in a different order.
function isAnagram(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    if (str1.length !== str2.length)
        return false;

    const sorted1 = str1.split("").sort().join("");
    const sorted2 = str2.split("").sort().join("");
    return sorted1 === sorted2;
}
console.log(isAnagram("listen", "silent")); //true
console.log(isAnagram("hello", "world")); //false
console.log(isAnagram("Triangle", "Integral")); //true
console.log(isAnagram("Dormitory", "Dirty Room")); //true
