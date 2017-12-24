
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    var amtToOrder = Number(numAnimals) * Number(avgFood);
    if(amtToOrder < 0 || isNaN(amtToOrder)){
        return -1
    }

    return amtToOrder;
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {
    if ( week == null || week.length <= 0 ){
        return null;
    }

    // sort the weekday objects in ascending order
    week.sort(compareWeekdayTraffic);

    var highestTraffic = week[0].traffic;
    // determine if there is more than one popular day:
    var lastIndex = lastIndexOfPopularDay(week, highestTraffic, 'traffic');

    if( lastIndex == 1 ){
        return String(week[0].name);
    }

    var popularDays = week.slice(0, lastIndex);
    var popularDayNames = arrayOfDayNames(popularDays);
    return popularDayNames;
}

/**
 * helper function that takes an array of weekdays and returns the days of the week as an array
 * @param array of weekdays
 * @return array of names of days
 **/
function arrayOfDayNames(array){
    var nameArray = [];
    for(var i = 0; i < array.length; i++){
        nameArray[i] = array[i].name;
    }

    return nameArray;
}

/**
 * helper function that returns the range of the most popular days in terms of traffic
 * @param array of weekday objects sorted in ascending order of traffic
 * @returns last index of highest traffic days (ie. all the days matching array[0]) or 0 if there is only one day
 **/
 function lastIndexOfPopularDay(array, searchTerm, property){
    for(var i = 0; i < array.length; i++){
        if(array[i][property] != searchTerm){
            return i;
        }
    }

    // if all the days have the same traffic
    return array.length;
 }

/**
 * helper function to compare two weekday objects; ascending order
 * @param day1 and day2 are weekday objects in array
 * @return the day with the larger traffic
 **/
function compareWeekdayTraffic(day1, day2){
    var comparison = 0;

    if( day1.traffic <= day2.traffic ) {
        comparison = 1;
    }
    else{ comparison = -1; }

    return comparison;
}

/**
 * test function to print weekday names
 * @param array of weekday objects
 **/
function printWeekdayArray(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    var animalArray = [];

    // check if any of the arrays are null and short-circuit to returning an empty array
    if (isNull(names) || isNull(types) || isNull(breeds)){
        return animalArray;
    }

    // check the length of all the arrays
    var validLength = names.length; // arbitrarily choosing names to be the length all others should be equal
    if( isInvalidAnimalArray(names, validLength) || isInvalidAnimalArray(types, validLength) || isInvalidAnimalArray(breeds, validLength) ){
        return animalArray;
    }

    for(var i = 0; i < validLength; i++){
        var newAnimal = new Animal(names[i], types[i], breeds[i]);
        animalArray.push(newAnimal);
    }

    return animalArray;
}

/**
 * Determines if the given array is null
 * @param array
 * @return true if the array is null and false otherwise.
 **/
function isNull(array){
   return (array == null);
}

/**
 * Determines if the given animal array is empty and not a valid length
 * @param array and the length it should be
 * @return true if the array is invalid and false otherwise
 **/
function isInvalidAnimalArray(array, validLength){
   if( array.length <= 0 ){
        return true;
    }
    else if( array.length != validLength ){
        return true;
    }

    return false;

}


/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

