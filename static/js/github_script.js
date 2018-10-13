
//testing

var request = new XMLHttpRequest();
const app = document.getElementById('root');

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;
      
      const desc = document.createElement('p');
      
      //ADDED FLAIR.
      movie.description = movie.description.substring(0,300); //all locals
      desc.textContent = '${movie.description}...'; //Ah, I see.
        //The string we make the text content is the value of movie.description
        //Which we've trimmed to 300 characters. $ denotes value of a string var.
        //Then, following is always 3 dots. That's what shall be put.
      app.appendChild(card);
      
      //Every card gets h1 and p
      card.appendChild(h1);
      card.appendChild(desc);
      
    });
  } else {
    console.log('error');
  }
}

request.send();