;
var currentLang='enToRus';
function Translator(options) {
	var translator = options.elem,
		textarea = translator.querySelector('.translator__textarea-block_textarea'),
		textResult = translator.querySelector('.translator__result-block_result'),
		deleteSpan = translator.querySelector('.translator__textarea-block_delete'),
		lengthCounter = translator.querySelector('.translator__textarea-block_symbol-counter'),
		changeLang = translator.querySelector('.translator__controls_arrows'),
		leftLangField = translator.querySelector('.translator__controls_left-lang'),
		rightLangField = translator.querySelector('.translator__controls_right-lang');
	var maxLength = +options.maxLength,
		textLength;

	var self = this;

	//initialization
	if (textarea.value != '') {
		deleteSpan.classList.remove('hide');
		deleteSpan.classList.add('show');
	} else {
		deleteSpan.classList.remove('show');
		deleteSpan.classList.add('hide');
	}

	//public properties
	this.value = textarea.value;


	//events
	changeLang.addEventListener('click', function(e){
		e.preventDefault();
		currentLang = (currentLang == 'enToRus')? 'rusToEn' : 'enToRus';
		if(currentLang=='enToRus'){
			rightLangField.innerHTML = 'русский';
			leftLangField.innerHTML = 'английский';
		}
		if(currentLang=='rusToEn'){
			rightLangField.innerHTML = 'английский';
			leftLangField.innerHTML = 'русский';
		}
 	});
	textarea.addEventListener('focus', function() {
		addOutline();
	});
	textarea.addEventListener('blur', function() {
		removeOutline();
	});
	textarea.addEventListener('input', function(event) {
		function find(array, value) {
			
			for (var i = 0; i < array.length; i++) {
				if (array[i] == value) return i;
			}
			return -1;
		}

		self.value = textarea.value;

		if (textarea.value != '') {
			deleteSpan.classList.remove('hide');
			deleteSpan.classList.add('show');
		} else {
			deleteSpan.classList.remove('show');
			deleteSpan.classList.add('hide');
		}

		var keysArr = Object.keys(dictionary[currentLang]);
		var valuesArr = Object.values(dictionary[currentLang]);
		console.log(keysArr, valuesArr, find(keysArr, textarea.value) > -1);
		if(find(keysArr, textarea.value) > -1){

			textResult.innerHTML = valuesArr[find(keysArr, textarea.value)];

		}
		
		recountTextLength();
	});
	deleteSpan.addEventListener('click', function(event) {
		clearTextarea();
	})

	//functions
	function addOutline() {
		textarea.parentNode.classList.add('focus');
	};

	function removeOutline() {
		textarea.parentNode.classList.remove('focus');
	};


	function clearTextarea() {
		textarea.value = '';
		textResult.innerHTML = '';
		//and change counter's value
		deleteSpan.classList.remove('show');
		deleteSpan.classList.add('hide');
		recountTextLength();
	};

	function recountTextLength() {
		textLength = textarea.value.length;
		lengthCounter.innerHTML = textLength + '/' + maxLength;
	};
	
};
var dictionary = {
	"rusToEn": {
	},
	"enToRus": {
	}
};
$.ajax({
    url: "dictionary.csv",
    async: false,
    success: function (data){
        var lines = data.split('\n');
        for(var i = 0; lines.length >i; i++){
        	var oneWord = lines[i].split(';');
        	console.log(lines);
        	dictionary.rusToEn[oneWord[0].replace(/\r|\n/g, '')] = oneWord[1];
        	dictionary.enToRus[oneWord[1].replace(/\r|\n/g, '')] = oneWord[0];
        }
    }
});


var dictionary2 = {
	'rusToEn': {
		'Привет': 'Hello',
		'Как дела': 'How are you',
		'Хорошо': 'Good'
	},
	'enToRus': {
		'Hello': 'Привет',
		'How are you': 'Как дела',
		'Good':'Хорошо'
	}
};