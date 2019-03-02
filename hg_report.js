"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Patrick M. Capuano
   Date:  2.28.19
   
   Filename: hg_report.js
	
*/

// Here we have our first long amount of code writtin in where the following string is added in to the varaible "gameReport" that has been declared and has concatination with each varaible being targetted within the "hg_products.js" where they will fill in the information set to each. 
var gameReport = "<h1>" + itemTitle + "</h1>" + "<h2>By:" + itemManufacturer + "</h2>" + "<img src='hg_" + itemID + ".png'" + "alt='" + itemID + "'" + "id='gameImg'/>" + "<table>" + "<tr> <th> Product ID </th>" + "<td>" + itemID + "</td>" + "</tr>" + "<tr><th>List Price</th>" + "<td>" + itemPrice + "</td>" + "</tr>" + "<tr> <th> Platform </th>" + "<td>" + itemPlatform + "</td>" + "</tr><tr><th>ESRB Rating</th>" + "<td>" + itemESRB + "</td>" + "</tr>" + "<tr> <th> Condition </th>" + "<td>" + itemCondition + "</td>" + "</tr>" + "<tr><th>Release</th>" + "<td>" + itemRelease + "</td>" + "</tr>" + "</table>" + itemSummary;

// The variable, "gameReport"'s  is then put into the "article" tag within the index page including all of its text and has it also targetting the "article" as an array with the first index value.
document.getElementsByTagName("article")[0].innerHTML = gameReport;

// A variable named "ratingsSum" is declared here and set to zero.
var ratingsSum = 0;

// As is "ratingsCount" with the full length of the "ratings" variable.
var ratingsCount = ratings.length;


// Our for loop is started here with the variable "i" being used and each time having it increase with one, as long as the varible itself is less than the amount that "ratingsCount" is set. As for the command itself being executed each time, "ratingsSum"'s value is being added to each index of "ratings".
for (var i = 0; i < ratingsCount; i++) {

    ratingsSum += ratings[i];
}

// Another variable is then declared as "ratingsAvg" and uses the past two variables by having its value set to what they would be divided by one another. 
var ratingsAvg = ratingsSum / ratingsCount;

// "ratingReport" then acts as yet another new varaible having a text string added to it with the "ratingsAvg" & "ratingsCount" variables concatinated with it to provide the appropriate text.
var ratingReport = "<h1>Customer Reviews</h1>" + "<h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>"

// Starting another for loop this time has us set "i" to zero again and have it increase as such for every placement, but this time we check this until it is less than or equal to two.
for (var i = 0; i <= 2; i++) {

    // ratingReport acts as a command as a part of this for loop by having a div added into it each time the loop is ran, whith some of its own variables concatinated within.
    ratingReport += "<div class = 'review'> <h1>" + ratingTitles[i] + "</h1>" + "<table> <tr> <th> By </th>" + "<td>" + ratingAuthors[i] + "</td>" + "</tr>" + "<tr><th>" + "Review Date</th>" + "<td>" + ratingDates[i] + "</td>" + "</tr>" + "<tr> <th>  Rating</th>" + "<td>";

    // Still within the for loop is now another one created to be nested within and requires the use of a different variable, with us opting with "x" instead of "i". It is also ran to be increased by one each time and not stop until it is no longer less than the "ratings" array.
    for (var x = 0; x < ratings[i]; x++) {

        // As a command, "ratingsReport" has an image text string added to it ever time this loop is ran.
        ratingReport += "<img src='hg_star.png'/>";
    }

    // outside the nested for loop, but still within the previous one is one last command issuing "ratingsReport" to have one last text string added to it with the last parts of the div section, with the "ratingSummaries" array also put in.
    ratingReport += "</td>" + "</tr>" + "</table>" + ratingSummaries[i] + "</div>";
}

// We then finally have all of this "ratingsReport" text then added to a section within the index, this time being the aside section targeted by the tag name again as the first value of the array.
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;