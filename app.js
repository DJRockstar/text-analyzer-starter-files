// your code here!

//tokenizing the texts
function textTokenization(text){
	return text.toLowerCase().match(/\b[^\s]+\b/g);
}

//remove any returns or linefeeds
function removeReturns(text){
	return text.replace(/\r?\n|\r/g,"");
}

function getAvgSentenceLength(text){
	var numSentences = text.match(/[!.?]+/g) ? text.match(/[!.?]+/g).length : 1;
	var wordCount = textTokenization(text).length;
	return (wordCount/numSentences).toFixed(2);
}

function getAvgWordLength(tokens){
	var totalLength = tokens.join('').length;
	return (totalLength/tokens.length).toFixed(2);
}

function countDistinctWord(tokens){
	var distinctWord = [];
	for(i=0; i<tokens.length; i++){
		if(distinctWord.indexOf(tokens[i])=== -1){
			distinctWord.push(tokens[i]);
		}
	}
	return distinctWord.length;
}

function textOnReport(text){
	var tokens = textTokenization(text);
	var wordCount = tokens.length;
	var avgSentenceLength = getAvgSentenceLength(text);
	var avgWordLength = getAvgWordLength(tokens);
	var uniqueWords = countDistinctWord(tokens);
	
	//DOM Display
	var textReport = $('.js-text-report');
	textReport.find('.js-word-count').text(wordCount);
	textReport.find('.js-unique-word').text(uniqueWords);
	textReport.find('.js-avg-word-count').text(avgWordLength);
	textReport.find('.js-avg-sentence-length').text(avgSentenceLength);
}


//Event handler

$(document).ready(function(){
	$('.js-text-form').on('submit', function(event){
		event.preventDefault();
		var userInput = $(this).find("#user-text").val();
		textOnReport(removeReturns(userInput));
	})
});























