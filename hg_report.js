"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Patrick M. Capuano
   Date:  2.28.19
   
   Filename: hg_report.js
	
*/

//
var gameReport = "<h1>" + itemTitle + "</h1>" + "<h2>By:" + itemManufacturer + "</h2>" + "<img src='hg_" + itemID + ".png'" + "alt='" + itemID + "'" + "id='gameImg'/>" + "<table>" + "<tr> <th> Product ID </th>" + "<td>" + itemID + "</td>" + "</tr>" + "<tr><th>List Price</th>" + "<td>" + itemPrice + "</td>" + "</tr>" + "<tr> <th> Platform </th>" + "<td>" + itemPlatform + "</td>" + "</tr><tr><th>ESRB Rating</th>" + "<td>" + itemESRB + "</td>" + "</tr>" + "<tr> <th> Condition </th>" + "<td>" + itemCondition + "</td>" + "</tr>" + "<tr><th>Release</th>" + "<td>" + itemRelease + "</td>" + "</tr>" + "</table>" + itemSummary;

//
document.getElementsByTagName("article")[0].innerHTML = gameReport;

//
var ratingsSum = 0;

//
var ratingsCount = ratings[i].length;


//
for (var i; i <= ratings[i].length; i++) {
    ratingsCount += ratingsSum;
}

//
var ratingsAvg = ratingsSum % ratingsCount;

//
ratingReport = "<h1>Customer Reviews</h1>" + "<h2>" + ratingsAvg + "out of 5 stars (count reviews)</h2>"

//
for (var i; i <= 2; i++) {
    ratingReport += "div class = 'review'> <h1>" + ratingTitle + "</h1>" + "<table> <tr> <th> By </th>" + "<td>" + ratingAuthor + "</td>" + "</tr>" + "<tr><th>" + "Review Date</th>" + "<td>" + ratingDates + "</td>" + "</tr>" + "<tr> <th>  Rating</th>" + "<td>";

    for (var i; i < ratingReport; i++) {
        ratingReport += "<img src='hg_star.png'/>";
    }

    ratingReport +=
        "</td>" + "</tr>" + "</table>" + ratingSummaries + "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;