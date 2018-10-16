
function refresh()
{
    
    resetBody();
    
    
    var request = new XMLHttpRequest();
    const app = document.getElementById('root');
    const table = document.getElementById('sorter_tab');
    
    
    request.open('GET', 'https://api.github.com/events', true);

    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            //Set up variables.
            var col_count = 0; //The counter for columns in the grid.
            
            data.forEach(event => {
                
                if (col_count%3 === 0)
                {
                    const tempor = document.createElement('tr');
                    table.appendChild(tempor);
                }
                //HERE IS THE MODAL. This will display 'more information'. 

                modalCreation(event);
                
                //HERE IS THE PARENT BUTTON. It's given the card class and the ability
                //to toggle modals.
                cardCreation(event, tempor);
                
                col_count+=1;
                
            });
        } 
        else {
            console.log('error');
        }
    };

    request.send();
}



function modalCreation(event)
{
    //COMPONENT CREATION
    const modal = document.createElement('div');
    const modal_diag = document.createElement('div');
    const modal_cont = document.createElement('div');
    const modal_header = document.createElement('div');
    const modal_body = document.createElement('div');
    const mh4 = document.createElement('h4');
    const mp = document.createElement('p');
      
    //MAIN MODAL ATTRIBUTE SET
    modal.setAttribute('id', `${event.id}`);
    modal.setAttribute('class', 'modal fade');
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', `h_info${event.id}`);
    modal.setAttribute('aria-hidden', 'true');
    
    //CHILD ATTRIBUTE SET
    modal_diag.setAttribute('class', 'modal-dialog');
      
    //GRANDCHILD ATTRIBUTE SET
    modal_cont.setAttribute('class', 'modal-content');
      
    //G.GRANDCHILD #1 ATTRIBUTE SET
    modal_header.setAttribute('class', 'modal-header');
    modal_header.setAttribute('id', `h_info${event.id}`);
      
    //G.GRANDCHILD #2 ATTRIBUTE SET
    modal_body.setAttribute('class', 'modal-body');
      
    mh4.setAttribute('class', 'modal-title');
    mh4.textContent = `${event.actor.display_login} on ${event.repo.name}`;
    
    mp.textContent = `Public: ${event.public}<br>Event Created: ${event.created_at}`;
            
    //MODAL TREE ASSEMBLY
    document.body.appendChild(modal);
    modal.appendChild(modal_diag);
    modal_diag.appendChild(modal_cont);
    modal_cont.appendChild(modal_header);
    modal_cont.appendChild(modal_body);
    modal_header.appendChild(mh4);
    modal_body.appendChild(mp);
}


function cardCreation(event, row)
{
    //ELEMENT CREATION
    const card = document.createElement('button');
    const cell = document.createElement('td');
    
    //CARD ATTRIBUTES SET
    card.setAttribute('class', 'card');
    card.setAttribute('data-toggle', 'modal');
    card.setAttribute('data-target', `#${event.id}`);
    
    //HEADER TEXT
    const h1 = document.createElement('p');
    h1.textContent = `${event.actor.display_login} on ${event.repo.name}`;
    
    //MAIN TEXT
    const h2 = document.createElement('h6');
    h2.textContent = event.type;

    //+++ APPENDING +++
    //This is where we place our card and its children right where they belong.
    row.appendChild(cell);
    cell.appendChild(card);
    card.appendChild(h1);
    card.appendChild(h2);
}


function resetBody()
{
    document.body.innerHTML = `<div class="container">
        <!-- THIS IS WHERE THE MODALS WILL GO-->
        <div class="col-md-3">
                <button type="button" class="btn btn-primary" onclick='refresh()'>
                    Refresh
                </button>
        </div>
        
        <div class="row">
            <div class="col-md-9" id="root">
                <table id='sorter_tab'></table>
            </div>
            
        </div>
    </div>

    <footer>
        <div class="container footercontainer">
            <div class="col-md-12">
                <p class="copyright">Copyright &copy; Nicholas Casteen 2018.</p>
            </div>
        </div>
    </footer>`;
}