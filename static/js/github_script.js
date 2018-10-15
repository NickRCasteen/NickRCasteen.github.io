
//testing

var request = new XMLHttpRequest();
const app = document.getElementById('root');

request.open('GET', 'https://api.github.com/events', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(event => {
      
      const card = document.createElement('button');
      card.setAttribute('class', 'card');
      
      const h1 = document.createElement('p');
      h1.textContent = `${event.actor.display_login} on ${event.repo.name}`;
      
      const h2 = document.createElement('h6');
      h2.textContent = event.type;

      
      //ADDED FLAIR.
      app.appendChild(card);
      
      //Every card gets h1 and p
      card.appendChild(h1);
      card.appendChild(h2);
      
    });
  } else {
    console.log('error');
  }
}

request.send();