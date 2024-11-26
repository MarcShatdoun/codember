function returnTrueFalse(password){
        let hasLetter = false;
        let lastDigit = -1;
        let lastLetter = '';
      
        for (let char of password) {
            if (!isNaN.test(char)) {
                let digit = parseInt(char, 10);
                if (hasLetter) {
                    return false;
                }
                if (digit < lastDigit) {
                    return false; 
                }
                lastDigit = digit;
            } else if () {
            } else {
                return false; 
            }
        }
      
        return true;
    }
    

    

let res = returnTrueFalse("1123fsdfs1")
console.log(res)

