
function pow(base, exponent) {
if(typeof base!== 'number') {
   throw new Error('base must be number')
}

if (exponent < 0 || !Number.isSafeInteger(exponent)) {
      throw new RangeError('n must be not negative and integer value');

 if (exponent === 0) {
        return 1
    } 
        return base * pow(base, exponent - 1)
    }
}
try {console.log(pow(2, -4))
}
catch (err){
    console.log(err)
}

