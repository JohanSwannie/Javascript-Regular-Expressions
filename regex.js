const container = document.querySelector(".container");

let message = "";
let answer = "";

const generateTag = (msg, ans) => {
  const pip = document.createElement("p");
  const spn1 = document.createElement("span");
  const spn2 = document.createElement("span");
  spn1.setAttribute("id", "span1");
  spn2.setAttribute("id", "span2");
  spn1.innerHTML = msg;
  spn2.innerHTML = ans;
  pip.appendChild(spn1);
  pip.appendChild(spn2);
  container.appendChild(pip);
  message = "";
  answer = "";
};

// EXAMPLE 1 - TESTING PART OF A STRING  FOR A SINGLE PATTERN - CASE SENSITIVE

let string1 = "Good Day, All People in the World!";
let regex1 = /People in the World/;
let result1 = regex1.test(string1);
message = `The result for single pattern present in a string is with case sensitive testing is : `;
answer = `${result1}`;
generateTag(message, answer);

// EXAMPLE 2 - TESTING PART OF A STRING  AND IGNORE CASES USING THE I TAG

let string2 = "The Weather Will be rough Today";
let regex2 = /the weather will/i;
let result2 = regex2.test(string2);
message = `The result for single pattern present in a string is with case insensitive testing is : `;
answer = `${result2}`;
generateTag(message, answer);

// EXAMPLE 3 - TESTING PART OF A STRING  FOR MULTIPLE PATTERNS USING THE OR(|) OPERATOR

let string3 = "The pink Elephant runs fast.";
let regex3 = /THE|Elephant|Fast|Runs/g;
let result3 = string3.match(regex3);
message = `The result for multiple patterns present in a string is : `;
answer = `${result3}`;
generateTag(message, answer);

// EXAMPLE 4 - TESTING PART OF A STRING USING THE MATCH METHOD

let string4 = "His attitude of care care did wonders";
let regex4 = /attitude of CARE/gi;
let result4 = string4.match(regex4);
message = `The result for testing part of a string is : `;
answer = `${result4}`;
generateTag(message, answer);

// EXAMPLE 5 - TESTING REPEATS IN A STRING USING THE G TAG - HERE WE ALSO USE
// THE I TAG FOR CASE INSENSITIVITY

let string5 = "Twinkle, twinkle, TWINKLE little star";
let regex5 = /twinkle/gi;
let result5 = string5.match(regex5);
message = `The result for testing repeats in a string is : `;
answer = `${result5}`;
generateTag(message, answer);

// EXAMPLE 6 - TESTING PATTERNS IN A STRING USING THE WILDCARD PERIOD

let string6 = "The lazy dog sleeps all day";
let regex6 = /......zy/;
let result6 = string6.match(regex6);
message = `The result for testing patterns in a string using wildcards is : `;
answer = `${result6}`;
generateTag(message, answer);
