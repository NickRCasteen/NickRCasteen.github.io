 
app = document.getElementById("test1");
 
 
const modal = document.createElement('div');
const modal_diag = document.createElement('div');
const modal_cont = document.createElement('div');
const modal_header = document.createElement('div');
const modal_body = document.createElement('div');
const mh4 = document.createElement('h4');
mh4.textContent = 'Try It Out';

const d2 = "userProfileLabel";
const d1 = "userProfile";

modal.setAttribute('id', `#${d1}`);
modal.setAttribute('class', 'modal');
modal.setAttribute('tabindex', '-1');
modal.setAttribute('role', 'dialog');
modal.setAttribute('aria-labelledby', `#${d2}`);
modal.setAttribute('aria-hidden', 'true');
      
modal_diag.setAttribute('class', 'modal-dialog');
      //modal_diag.setAttribute('role', 'document');
      
modal_cont.setAttribute('class', 'modal-content');
      
modal_header.setAttribute('class', 'modal-header');
modal_header.setAttribute('id', `#${d2}`);
      
modal_body.setAttribute('class', 'modal-body');
      
mh4.setAttribute('class', 'modal-title');
 
document.body.appendChild(modal);
modal.appendChild(modal_diag);
modal_diag.appendChild(modal_cont);
modal_cont.appendChild(modal_header);
modal_cont.appendChild(modal_body);
modal_header.appendChild(mh4);
 

 
const card = document.createElement('button');
card.setAttribute('class', 'btn btn-primary');
card.setAttribute('data-toggle', 'modal');
card.setAttribute('data-target', `#${d1}`);
card.innerHTML = "Go";
 
app.appendChild(card);