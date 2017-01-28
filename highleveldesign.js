

//DOM Manipulation isn't part of a function
$(".js-text").on('submit', function (event) {   //listening to form tag
  event.preventDefault (); //prevent submit from doing what it normally does 
  var user-text= $(this).find('#user-text').val(); //assign variable the value of (what I find in user-text area).value() = value is what is in the user-text 

    main(user-text);
}

function main(user-text) {
  var myArray = user-text.split(" "); //split method knows to 
  Call functions (uniqueWord, AverageWordLength)  
}
;

/*
textCollection () is to collect text & clean it up in order for the remainder of the functions to do it's purpose

1. function textCollection () {
  grab submitted Text
  parse out text from white spaces etc (split by whitespace)
  add each word to an array
}

-- Total Word Count --

array.length?


-- Unique Word ---

run loop that takes the object in the array and see's if it exists already
if not
 put in new array
 return length of new array


-- Average Word Length --
 
grab each object in the textCollection array, 
count the length of each object in array
create a var = zero facilitate counter 

avgWordCount {
loop through textCollection array
get length of each object
  with each length, add to new count variable newCount
return sum of newCount / textCollection.length
}

---- average Sentence length ---
parse text when i hit a period, question mark, exclamation mark
put each split into an array
array.length / object.length
*/