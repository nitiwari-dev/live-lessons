"use strict";
//Types
/**
 * 1. number
 * 2. string
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. void
 * 7. object
 * 8. array
 * 9. tuples
 * 10. Any
 * 11. Never
 * 12. Unknown
 *
 * Note: all lower case
 */
Object.defineProperty(exports, "__esModule", { value: true });
// number - both integer and float donatest he same type as number
var planetId = 1001;
var planetCordinates = 3.1415; // type infereance
// string
var username = "Mandolarian";
// boolean
var isUserFromEarth = false;
/*
any - if you want to not have type-checked
        use noImplicitAny within the tsconfig.json
*/
//BAD practice. As a developer its difficult to intefer the response
var result;
function networkRequest() {
    return "success";
}
result = networkRequest();
console.log(result);
//Good Practice
var resultObject;
resultObject = networkRequest();
console.log(resultObject);
// array
var gamesId = [1, 2, 3, 5];
gamesId.sort;
console.log(gamesId);
//union type either or in the type as input
function showCaseGameId(id) {
    console.log(id);
}
function showCaseGameNumber(id) {
    if (Array.isArray(id)) {
        id.sort();
        console.log(id);
    }
    else {
        console.log(id);
    }
}
// union type either or in the type as out
function compare(a, b) {
    return a == b ? 0 : a > b ? 1 : -1;
}
var a = 10;
var b = 20;
console.log("comparing ", compare(10, 20));
showCaseGameNumber([9, 0, 0, 1]);
showCaseGameNumber(1);
function findRateOfGrowth(growth) {
    return growth.rate / 100 * growth.value;
}
var growth = { rate: 10, value: 10 };
console.log(findRateOfGrowth(growth));
function findGrowthRate2(growth) {
    return growth.ratePercentage * growth.value;
}
console.log(findGrowthRate2({ ratePercentage: 10, value: 5 }));
function verifyAuth(token) {
    var auth = { alog: "SHA256", token: token };
    return auth;
}
var auth = verifyAuth("1234");
console.log(auth.alog);
console.log(auth.token);
// null and undefined using strictNullChecks into tsconfig.json
// using ! as not null assertion (for kotlin programmers its !!)
function validateToken(token) {
    if (token != null) {
        console.log(token);
        return true;
    }
    return false;
}
// Truthiness narrowing safe guarding and coerce 
// Typeguard find the type of variable e.g typeof id === "number" will return true if id is a number type
// This process of typeguarding and checking with more specific checks are called narrowing in ts
// we can have typeof for "string" "number" "object" "boolean" "undefined" "function"
// handle null cases with
function findAllCustomers(ids) {
    if (ids && typeof ids == "object") {
        ids.forEach(function (element) {
            console.log(element);
        });
    }
}
findAllCustomers([]);
