function isPalindrome(str) {

    let revstr = "";
    let len = str.length;
    for (let i = len - 1; i >= 0; i--) {
        revstr = revstr + str[i];
    }

    if (revstr.toLowerCase() === str.toLowerCase()) {
        console.log(`${str} is a Palindrome`);
    }
    else {
        console.log(`${str} is not a Palindrome`);
    }

}
isPalindrome("Madam");
isPalindrome("welcome");