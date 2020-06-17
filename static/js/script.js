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

function lkmgame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id
    
    botChoice = numberToChoice(randomInt());
    console.log('computer choice:', botChoice)
    
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    
    message = finalMessage(results);
    console.log(message);
    lkmFrontEnd(yourChoice.id, botChoice, message);
}

function randomInt() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
    return ['list', 'kamen','makaze'][number]
}

function decideWinner(yourChoice, computerChoice) {
    var lkmDatabase = {
        'list':{'kamen':1, 'list':0.5, 'makaze':0},
        'kamen':{'makaze':1, 'kamen':0.5, 'list':0},
        'makaze':{'list':1, 'makaze':0.5, 'kamen':0},
    }

    var yourScore = lkmDatabase[yourChoice][computerChoice];
    var computerScore = lkmDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];

}

function finalMessage([yourScore]) {
    if (yourScore === 0) {
        return {'message':'You lost', 'color':'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied', 'color': 'yellow'};
    } else {
        return {'message': 'You won', 'color':'green'};
    }
}

function lkmFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'list':document.getElementById('list').src,
        'kamen':document.getElementById('kamen').src,
        'makaze':document.getElementById('makaze').src
    }
    
    document.getElementById('list').remove();
    document.getElementById('kamen').remove();
    document.getElementById('makaze').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"


    document.getElementById('flex-box-lkm-div').appendChild(humanDiv);
    document.getElementById('flex-box-lkm-div').appendChild(messageDiv);
    document.getElementById('flex-box-lkm-div').appendChild(botDiv);
}






