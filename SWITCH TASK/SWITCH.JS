/*switch (browser) {
    case'edge':
    alert("you've got the Edge!");
    break;

    case 'chrome':
    case 'firefox':
    case 'safari':
    case 'opera':
        alert('okay we support these browsers too');
        break;

        default:
            alert('we hope that this page look ok')

}*/
//    Rewriting the above using if ... else 

let browser = prompt('which browser do you use')

if (browser == 'edge') {
    alert("you've got the Edge ");
} else if (browser == 'chrome') {
    alert('okay we support these browsers too')
} else if (browser == 'firefox') {
    alert('okay we support these browsers too');
} else if (browser == 'safari') {
    alert('okay we support these browsers too');
} else if (browser == 'opera') {
    alert('okay we support these browsers too');
} else {
    alert('we hope that this page look ok')
}