//create the object

const morseCode = {
    a: " ⚫➖/ " ,
    b: " ➖⚫⚫⚫/ ",
    c: " ➖⚫➖⚫/ ",
    d: " ➖⚫⚫/ ",
    e: " ⚫/ ",
    f: " ⚫⚫➖⚫/ ",
    g: " ➖➖⚫/ ",
    h: " ⚫⚫⚫⚫/ ",
    i: " ⚫⚫/ ",
    j: " ⚫➖➖➖/ ", 
    k: " ➖⚫➖/ ",
    l: " ⚫➖⚫⚫/ ",
    m: " ➖➖/ ",
    n: " ➖⚫/ ",
    o: " ➖➖➖/ ",
    p: " ⚫➖➖⚫/ ",
    q: " ➖➖⚫➖/ ",
    r: " ⚫➖⚫/ ",
    s: " ⚫⚫⚫/ ",
    t: " ➖/ ",
    u: " ⚫⚫➖/ ",
    v: " ⚫⚫⚫➖/ ",
    w: " ⚫➖➖/ ",
    x: " ➖⚫⚫➖/ ",
    y: " ➖⚫➖➖/ ",
    z: " ➖➖⚫⚫/ ",
    " ": "   //    "
  }
  
  //get elements
  const translateToEnglish = document.querySelector(".morse__translate__toMorse");
  const tranlsateMorseBtn = document.querySelector(".english__translate__toEnglish")
  const clearMorseBtn = document.querySelector(".morse__clearMorse");
  const clearEnglishBtn = document.querySelector(".morse__clearEnglish");
  const textInput = document.getElementById("textInput");
  const textOutput = document.querySelector(".morse__output__translation");
  const title = document.querySelector(".morse__output__title");
  const morseBtns = document.querySelector(".english__translate__inputs");
  const morseDisplay = document.querySelector(".english__translate__keyedInputs");
  const englishOutput = document.querySelector(".english__translate__output");
  
  // Morse code Arr
  let letterKeys = Object.keys(morseCode);
  
  //capture typed input - english
  const englishWords = [];

  //capture button input - morse code
  const morseWords = [];
  
  //function to clear text input
  const clear = () => {
    textInput.value= null;
    englishWords.length = 0;
  }
  
  //run translation on click
  const handleTranslation = translateToEnglish.addEventListener("click", (e) => {
    let input = textInput.value.toLowerCase();
      
  //display translation
  const translatePhrase = () => {
    let translationArr = []
    englishWords.forEach((word) => {
    translationArr.push(morseCode[word]);
    title.innerHTML = "Your Morse Code is:"
    textOutput.innerHTML = translationArr.join(" ");
        }
      )}
    translatePhrase();
    clear();
  })
  
  //clear area/clear translation
  textInput.onfocus = () => {
    document.querySelector(".morse__output__title").innerHTML = "";
    textOutput.innerHTML = "";
  }
  
  //clear input using clear button
  const handleClearMorse = clearMorseBtn.addEventListener("click", (e) => {
        clear();
  })
  
  // MORSE TO ENGLISH
  const handleMorseInput = morseBtns.addEventListener("click", (e) => {
      e.preventDefault
  
      let morseLetter = e.target.value;
      console.log(morseLetter)
      //morseWords.push(morseLetter);
      if (!morseLetter) {
        morseDisplay.innerHTML += "";
      } else {
      morseDisplay.innerHTML += morseLetter;
      }
  
      const getMorse = () => {
       const getKey = letterKeys.find(key => morseCode[key] === morseLetter)  
         morseWords.push(getKey);
        }   
        getMorse();
  })
  
  const handleTranslateMorse = tranlsateMorseBtn.addEventListener("click", (e) => {
          englishOutput.innerHTML = morseWords.join(" ");
          morseWords.length = 0;
  })
  
  const handleClearEnglish = clearEnglishBtn.addEventListener("click", (e) => {
      morseDisplay.innerHTML = "";
      englishOutput.innerHTML = "";
      morseWords.length = 0;
  })