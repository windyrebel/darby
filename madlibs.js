var name = prompt("Type a person's name.");
const typeOfDrink = prompt("Type your favorite drink.");
const noun = prompt("Type a noun.");
const secondNoun = prompt("Type another noun.");
const thingToShout = prompt("Enter an exclamation or your favorite quote.");
const adjective = prompt("Type an adjective.");
const thirdNoun = prompt("Type another noun.");
const verb = prompt("Type a verb.");
const pluralNouns = prompt("Type a plural noun.");

const story = `Once upon a time, ${name} walked into a bar. The bartender nodded politely to  ${name} who took a seat on a barstool. Feeling like they needed to unwind,  ${name} asked the bartender for their favorite drink, a ${typeOfDrink.toLowerCase()}, in order to quench their ${noun.toLowerCase()}. 
The bartender thought this was an odd request, but decided to make them the ${secondNoun.toLowerCase()} that they asked for. After a few minutes, the bartender put their order on the bar.  ${name} quickly grabbed it and put it right into their mouth and then slammed the empty glass 
on the bar top. Feeling great,  ${name} yelled out, "${thingToShout}!" at the top of their lungs. The bartender and  ${name} looked at each other and laughed at the ${adjective.toLowerCase()} exclamation.  ${name} then asked the bartender what their favorite ${thirdNoun.toLowerCase()} was and 
they both proceeded to ${verb.toLowerCase()} about ${pluralNouns.toLowerCase()} for the rest of the afternoon.`;

document.querySelector('main').innerHTML = story;
console.log(story)
