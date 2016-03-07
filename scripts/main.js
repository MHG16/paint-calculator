var length = prompt('Enter the length of the ceiling');
var width = prompt('Enter the width of the ceiling');
var squareFeet = parseFloat(length) * parseFloat(width); 
var totalGallons = Math.ceil(squareFeet / 350); 


document.write('How many square feet do you need to paint? '+ squareFeet);
document.write('<br>');
document.write('You will need to purchase '+totalGallons+ ' gallons of paint to cover '+squareFeet+' square feet.');