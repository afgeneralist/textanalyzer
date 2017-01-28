//Note to remember. DOM Manipulation isn't part of a function
$(".js-usertext").on('submit', function (event) {   //listening to form tag
  event.preventDefault(); //prevent submit from doing what it normally does 
  var textGrabbed = $(this).find('#user-text').val(); //assign variable the value of (what I find in user-text area).value() = value is what is in the user-text 
  console.log(textGrabbed);
    main(textGrabbed);
});
       
                   
function main(textGrabbed) {
  var mySentences = textGrabbed.split("."); //capturing all sentences from input as strings
  var myArray = textGrabbed.split(" "); //capturing all individual words as strings
  
  $(".hidden").removeClass("hidden");
  
  var totalWords = wordCount(myArray);
  $("#js-wordCount").append(totalWords);
  
  var uniqueWords = uniqueString(myArray);
  $("#js-uniqueWord").append(uniqueWords.length);
  
  var avgWords = avgWordCount(myArray);
  $("#js-avgWordLength").append(avgWords/totalWords); 
  
  var avgSentenceLength = avgWordCount(mySentences) / mySentences.length;
  $("#js-AvgSentenceLength").append(avgSentenceLength);
};

function uniqueString(y) {
  var uniqueArray = [];
  for (var i = 0; i < y.length; i++) {
    if (uniqueArray.indexOf(y[i]) === -1) {
      uniqueArray.push(y[i]);
    }
    
  }
  return uniqueArray;
}

function wordCount(x) {
  return x.length;
}

function avgWordCount(lengthOfWord) {
  var sumWordLength = 0;
    for (var i = 0; i < lengthOfWord.length; i++) {
    sumWordLength += lengthOfWord[i].length;
  }
  return sumWordLength;
}

