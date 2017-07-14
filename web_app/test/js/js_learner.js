var price;
price = 50;
var el = document.getElementById('price');//finds the element whose id has a value of cost
el.textContent = '$' + price;//replaces the content of that element with new content 

var colors;
colors = ['red','black','yellow'];//The values in an array do not need to be same data type.
//this method is prefered. 

var el = document.getElementById('colors');
el.textContent = colors[0];

var colors = new Array('white','black','blue');//create an array using array constructor, use new keyword followed by Array()
var el = document.getElementById('colors');
el.textContent = colors[0];


var numCols = colors.length;


var cost1 = '7';
var cost2 = '9';
var cost = cost1 + cost2;
//cost '79'

var cost1 = 'seven';
var cost2 = 'nine';
var cost = cost1 + cost2;
//cost NaN


Function:
var msg = 'The message is updated using this method';
function updateMessage() {
    var al = document.getElementById('message');
    el.textContent = msg;
}
updateMessage();

function getArea(width,height) {
    return width * height;
}
getArea(3,5);


GET A SINGLE VALUE OUT OF A Function
function getArea(width,height) {
    var area =width * height 
    return area;
}

var vallOne = getArea(3,5);

GET A Multiple VALUEs OUT OF A Function
function getSize(width,height,depth) {
    var area = width * height;
    var volumn = width * height * depth;
    var sizes = [area, volumn];
    return sizes;
}

var areaOne = getSize(3,2,3)][0];
var volumnOne = getSize(3,2,3)[1];

















