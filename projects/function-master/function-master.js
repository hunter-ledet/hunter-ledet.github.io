//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var newArr = [];
for (let key in object){
    newArr.push(object[key]);
}
    return newArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
   var newArr = [];
   for (let key in object){
      newArr.push(key);
           
       
   }
   return newArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var newArr = [];
  // var newStr = "";
    for(let key in object){
    if (typeof object[key] === "string"){
        newArr.push(object[key]);
    }   
    
    }return newArr.join(" ");   
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return "array";
    } else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    return string.replace(/\b\w/g, 
    function(l){
        return l.toUpperCase() });
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    return String("Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!");
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return String(object.name.charAt(0).toUpperCase() + object.name.slice(1) 
    + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1));

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var newArr = [];
function maybeNoises(object) {
    if(object.hasOwnProperty("noises") && object['noises'].length > 0){
        return object['noises'].join(" ");
    } else {
        return String("there are no noises");
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var n = string.search(word);
    if(n > 0){
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var newArr = [];
function isFriend(name, object) {
    if(!object.hasOwnProperty('friends')){
        return false;
    } else {
        for(var i = 0; i < object.friends.length; i++){
            if(object.friends[i] === name){
                return true;
            }
        }
    return false;    
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function nonFriends(name, array) {
  var namesArray = [];
  var tempPerson = [];
  var person = [];
  for(var i in array){
    namesArray.push(array[i]["name"]);
    //console.log(namesArray);
  }
  for(var j in array){
    if(array[j]["name"] === name){
      tempPerson = Object.values(array[j]);
      //console.log(tempPerson);
    }
  }
  person.push(tempPerson[0]);
  person.push(tempPerson[1][0]);
  person.push(tempPerson[1][1]);
//   console.log(namesArray);
//   console.log(person);
  for(var k = 0; k < person.length; k++){
    for(var l = 0; l < namesArray.length; l++){
//       console.log(namesArray[l]);
//       console.log(person[k]);
      if(namesArray[l] === person[k]){
//         console.log(namesArray[l]);
//         console.log(person[k]);
        namesArray.splice(l, 1);
//         console.log(namesArray);
//         console.log(person);
      }
    }
  }
  return namesArray;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    if(object.hasOwnProperty(key) && object[key].length > 0){
        object[key] = value;
    } else {
        object[key] = value;
    }
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var key in object){
        for(var x = 0; x < array.length; x++){
            if(key === array[x]){
                delete object[key]
            }
        }
    }
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var seen = {};
    var unique = [];
    var len = array.length;
    var j = 0
    for (var i = 0; i < len; i++){
        var item = array[i];
        if(seen[item] !== 1) {
            seen[item] = 1
            unique[j++] = item;
            
        }
        
    }
    return unique;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}