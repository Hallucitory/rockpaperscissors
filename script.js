
function getComputerchoice() {
    const number = Math.floor(Math.random() * 1000);
    if (number >= 667){
        return 'Rock';
    } else if (number <= 333){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
console.log(getComputerchoice());
