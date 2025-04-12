function dinner () {
    let food = prompt ("Name a food");
    let smthStrange = prompt ("Something Strange");
    let adj = prompt ("Adjective");
    let animal = prompt ("Animal");
    let verb = prompt ("Verb");
    let obj = prompt ("Object");
    let funQuote1 = prompt("A Funny Quote");
    let funQuote2 = prompt("Another Funny Quote");
    document.getElementById("output").innerHTML = `
    <p>The dinner party started with a dish of ${food} that smelled like ${smthStrange}. 
    Suddenly, a ${adj} ${animal} appeared and started ${verb}ing on the table! 
    The host grabbed a ${obj} and yelled "${funQuote1}!" 
    We all laughed and said "${funQuote2}." It was unforgettable!</p>
    `;
}

function mystery () {
    let adj = prompt("Adjective");
    let place = prompt("Place");
    let sound = prompt("Sound");
    let silName = prompt("A Silly Name");
    let obj = prompt("An Object");
    let noun = prompt("A Noun");
    let name = prompt("A Name");
    let jobTitle = prompt("A Job Title");
    let verb = prompt("Verb");
    let sub = prompt("A Substance");
    let food = prompt("Food");
    document.getElementById("output").innerHTML = `
  <p>On a(n) ${adj} night in the grand ${place}, a loud ${sound} revealed Lord ${silName} lying beside a ${obj}, muttering, "It was the ${noun}!"
  Detective ${name}, questioned the ${jobTitle}, who was caught ${verb}ing near the scene. But the truth was stranger than fiction.
  It turns out Lord ${silName} had slipped on ${sub} while trying to steal a plate of ${food}.
  Everyone laughed, and the detective vowed to investigate only serious cases from now on.</p>
  `;
   }

function travel () {
    let histFig = prompt("A Historical Figure");
    let place = prompt("A Place in Time");
    let obj = prompt("A Object");
    let pluNoun = prompt("A Plural Noun");
    let adj1 = prompt("Adjective");
    let verb = prompt("Verb");
    let histPlace = prompt("A Historical Place");
    let silName = prompt("A Silly Name");
    let adj2 = prompt("Adjective");
    document.getElementById("output").innerHTML = `
    <p>Your time machine malfunctions, and a ${histFig} steals your homework escaping to ${place}!
    Armed with a ${obj}, you chase them through time, dodging ${pluNoun} and a ${adj1} dinosaur trying to ${verb} you.
    You finally catch the thief at the ${histPlace} and grab your homework just time.
    Back in class, your teacher, ${silName}, says, "That's the most ${adj2} excuse ever!" But hey, you got an A!</p>
    `;
    }