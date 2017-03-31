// content.js
// Assert that we work
//alert("Hello from prohacker Chrome Extension Template!");

var firstLink = $("a[href^='http']").eq(0).attr("href");
alert(firstLink);