function ageinDays() {
    var birthYear = prompt('What year were you born?');
    var ageinDays = (2020 - birthYear) * 365
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are ' + ageinDays + ' days old')
    h1.setAttribute('id', 'ageinDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageinDays').remove()
}


//Cat generator

function generatorCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');        
    image.src="https://lh3.googleusercontent.com/proxy/B4lQIj7a3oTUn13NWBf_7Ba_MaYIqV2XQkyIiRM19KjbHgyu7Rr7cSd9-Yr13naEC4WcO2DHj0JxNKQN8p-c_Ar5kOKavtVLEIgzl_r7CyM"
    div.appendChild(image);
}

//List Kamen Makaze