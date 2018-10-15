//testing

var request = new XMLHttpRequest();
const app = document.getElementById('root');
const full = document.getElementById('full');

request.open('GET', 'https://api.github.com/events', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(event => {
      
      //HERE IS THE MODAL. This will display 'more information'. 
      const modal = document.createElement('div');
      const modal_diag = document.createElement('div');
      const modal_cont = document.createElement('div');
      const modal_header = document.createElement('div');
      const modal_body = document.createElement('div');
      const mh4 = document.createElement('h4')
      mh4.textContent = `${event.actor.display_login} on ${event.repo.name}`;
      const mp = document.createElement('p');
      mp.textContent = `Public: ${event.public}...Event Created: ${event.created_at}`;
      
      //Attribute setting for the modal
      modal.setAttribute('id', `#${event.id}`);
      modal.setAttribute('class', 'modal');
      modal.setAttribute('tabindex', '-1');
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-labelledby', `h_info${event.id}`);
      modal.setAttribute('aria-hidden', 'true');
      
      modal_diag.setAttribute('class', 'modal-dialog');
      //modal_diag.setAttribute('role', 'document');
      
      modal_cont.setAttribute('class', 'modal-content');
      
      modal_header.setAttribute('class', 'modal-header');
      modal_header.setAttribute('id', `h_info${event.id}`);
      
      modal_body.setAttribute('class', 'modal-body');
      
      mh4.setAttribute('class', 'modal-title');
            
      //Modal assembly into Document
      document.body.insertBefore(modal, full);
      modal.appendChild(modal_diag);
      modal_diag.appendChild(modal_cont);
      modal_cont.appendChild(modal_header);
      modal_cont.appendChild(modal_body);
      modal_header.appendChild(mh4);
      modal_body.appendChild(mp);
      
      //HERE IS THE PARENT BUTTON. It's given the card class and the ability
      //to toggle modals.
      const card = document.createElement('button');
      card.setAttribute('class', 'btn btn-primary');
      card.setAttribute('data-toggle', 'modal');
      card.setAttribute('data-target', `#${event.id}`);
      card.innerHTML = mh4.textContent;
      //Text
      const h1 = document.createElement('p');
      h1.textContent = mh4.textContent;
      //Text
      const h2 = document.createElement('h6');
      h2.textContent = event.type;

      //+++ APPENDING +++
      //This is where we place our card and its children right where they belong.
      app.appendChild(card);
      //card.appendChild(h1);
      //card.appendChild(h2);
      
    });
  } else {
    console.log('error');
  }
}

request.send();
