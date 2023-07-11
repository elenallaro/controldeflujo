/* https://github.com/generation-org/JS/tree/master/JS-03%20-%20Control%20Flow

EJERCICIO PARTE3
Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.
*/
function bussinesHour(dayNumber, hourNumber){
    if ((dayNumber>=1) && (dayNumber<=5) && (hourNumber>=9) && (hourNumber<=18)){
        return true;
    } 
        else{ 
            return false;
        } }

function getDayNumber(janFirstDayNumber, yearDayNumber){
    return((((yearDayNumber+janFirstDayNumber)-1)%7));
}

function bussines(janFirstDayNumber ,yearDayNumber, hourNumber){
    if ((getDayNumber(janFirstDayNumber, yearDayNumber)>=1) && (getDayNumber(janFirstDayNumber, yearDayNumber)<=5) && (hourNumber>=9) && (hourNumber<=18)){
        return true;
    } 
        else{ 
            return false;
        } 
}