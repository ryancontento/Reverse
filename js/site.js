// Get string on submit
function getValue() {
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;
  let revString = reverseString(userString);
  displayString(revString);
}

// Reverse the string using for loop
function reverseString(userString) {
  let revString = [];

  for (i = userString.length - 1; i >= 0; i--) {
    revString += userString[i];
  }
  return revString;
}

// Display the message to the user
function displayString(revString) {
  document.getElementById(
    "msg"
  ).innerHTML = `Your string reversed is: ${revString}`;
  document.getElementById("alert").classList.remove("invisible");
}
