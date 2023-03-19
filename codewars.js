function checkCoupon(enteredCode, currentCode, currentDate, experationDate){
    if (enteredCode === currentCode && new Date (currentDate) <= new Date (experationDate)){
        return true
    }else{
        return false
    }
}