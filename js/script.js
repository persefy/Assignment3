    //1 A string array with 5 favorite movies, and  display 2nd in list
/*
var favMovies = ["Finding Nemo", "Ella Enchanted", "High School Musical", "The Great Gatsby", "Peter Pan"];
window.console.log(favMovies[1]);
*/

    //2 Declare array called movies. Assign 5 items. Display 1st movie
/*var movies = [
["Finding Nemo"],
["Ella Enchanted"],
["High School Musical"],
["The Great Gatsby"],
["Peter Pan"],
];
window.console.log(movies[0]);*/

    //3 Insert an item into 3rd position, and display updated length
/*var movies = ["Ella Enchanted", "Finding Dory", "High School Musical", "Peter Pan", "The Great Gatsby"];
movies.push("Finding Nemo");
var moviesUpdated = movies.sort();
window.console.log(moviesUpdated.length);*/

    //4 Declare array called movies; delete first item, and display contents in console window.
/*var movies;
movies = ["Ella Enchanted", "Finding Dory", "High School Musical", "Peter Pan", "The Great Gatsby"];
movies.shift();
window.console.log(movies);*/

    //5 Declare array called movies; Assign 7 items and then use for loop to display in console window.
/*var movies = new Array;
movies = ["Ella Enchanted", "Finding Dory", "High School Musical", "Peter Pan", "The Great Gatsby", "The Best of Me", "Meet Joe Black"];
for (var i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}*/

    //6 Use a for-in loop to display each movie inconsole window.
/*var movies = ["Finding Dory", "High School Musical", "Peter Pan", "The Great Gatsby", "The Best of Me", "Meet Joe Black"];
for (var x in movies) {
    window.console.log(movies[x]);
}*/
    //7 Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

/*var movies = ["Peter Pan", "The Great Gatsby", "Finding Dory", "The Best of Me", "Meet Joe Black"];
for (var x in movies.sort()) {
    window.console.log(movies[x]);
}*/

    //8 Two array lists in console window - with newline and concatenation
/*
var movies = ["Peter Pan", "The Great Gatsby", "The Best of Me"];
var leastFavMovies = ["Sicario", "The Ring", "Children of the Corn"];
window.console.log("Movies I like: \n" + movies[0] + "\n" + movies[1] + "\n" + movies[2]);
window.console.log("Movies I regret watching: \n" + leastFavMovies[0] + "\n" + movies[1], + "\n" + movies[2]);
*/

    //9 Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
/*
var leastFavMovies = ["Sicario", "The Ring", "Children of the Corn"];
var favMovies = ["Peter Pan", "The Great Gatsby", "The Best of Me"];
var movies = leastFavMovies.concat(favMovies);
window.console.log(movies.reverse());
*/

    //10   Return just the last item in the array and display it within the console window.
/*var leastFavMovies = ["Sicario", "The Ring", "Children of the Corn"];
var favMovies = ["Peter Pan", "The Great Gatsby", "The Best of Me"];
var movies = leastFavMovies.concat(favMovies);
window.console.log(movies[movies.length-1]);*/

    //11	Remove the previous method and this time return just the first item in the array and display it within the console window.
/*
var leastFavMovies = ["Sicario", "The Ring", "Children of the Corn"];
var favMovies = ["Peter Pan", "The Great Gatsby", "The Best of Me"];
var movies = leastFavMovies.concat(favMovies);
window.console.log(movies[0]);
*/

    //12   Find movies, replace with liked movies using index 
/*
var leastFavMovies = ["Sicario", "The Ring", "Children of the Corn"];
var favMovies = ["Peter Pan", "The Great Gatsby", "The Best of Me"];
var movies = leastFavMovies.concat(favMovies);

var a = movies.indexOf("Sicario");
var b = movies.indexOf("The Ring");
var c = movies.indexOf("Children of the Corn");
var updateMovies = movies.splice([c+1]);
//I use the index of the movies I want to delete here
updateMovies.unshift("The Lion King", "Beauty and the Beast", "The Notebook");
window.console.log(updateMovies);
*/

    //13    Make two arrays, add both into one variable, and pick out name from second array.
/*
var employee1 = [];
employee1["employeeid"] = 1234;
employee1["name"] = "Amy Baker";
employee1["title"] = "Manager";
employee1["department"] = "IT";
employee1["employeeNow"] = true;

var employee2 = [];
employee2["employeeid"] = 1235;
employee2["name"] = "Jonathan Grey";
employee2["title"] = "Administrative Assistant";
employee2["department"] = "Front End Service";
employee2["employeeNow"] = false;

var employees = [employee1, employee2];
window.console.log(employees[1]["name"]);
*/

    //14 Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
var employee1 = [];
employee1["employeeid"] = 1234;
employee1["name"] = "Amy Baker";
employee1["title"] = "Manager";
employee1["department"] = "IT";
employee1["employeeNow"] = true;

var employee2 = [];
employee2["employeeid"] = 1235;
employee2["name"] = "Jonathan Grey";
employee2["title"] = "Administrative Assistant";
employee2["department"] = "Front End Service";
employee2["employeeNow"] = false;

var employees = [employee1, employee2];

for (var x in employees) {
    
}


