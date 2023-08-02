let number = parseInt(prompt('enter the number to get the multiplication table'))
if (!isNaN(number)) {
    let ul = '<ul>'
    for (let i = 1; i <= 10; i++) {
        let res = number + ' * ' + i + ' = ' + (number * i);
        ul+='<li>' + res + '</li>'
    }
    ul +='</ul>';
    document.write(ul)
} else {
    alert('Please enter a number')

}
