

var names = ['Amanda Davis', 'Tyler Mullens', 'Arthur Evans', 'Gianela Sabino', 'Melanie Mazzone', 'Nastassja Bulger'];
var firstName = [];
var lastName = [];




function compare (a,b) {
 
   
    var aName = a.split(" ");
    var bName = b.split(" ");
   

    var aLastName = aName[aName.length - 1];
    var bLastName = bName[bName.length - 1];
   

    if (aLastName < bLastName) return -1;
    if (aLastName > bLastName) return 1;
    return 0;


  }
   
  var orderedNames = names.sort(compare);
  console.log(orderedNames);

function splitNames() {
  for(i=0; i <orderedNames.length; i++){
    console.log(orderedNames[i]);
    var current = [];
    current = orderedNames[i].split(" ");
    firstName.push(current[0]);
    lastName.push(current[1]);
  }
};

splitNames();
console.log(firstName);
console.log(lastName);


function display() {
  for (i=0; i < names.length; i++) {
    document.getElementById("names").innerHTML += `<li class = "fullN">${firstName[i]} <span class="lastN">${lastName[i]}</span></li>`;
  }
};




  


