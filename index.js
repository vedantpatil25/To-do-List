const addButton = document.querySelector('.add');
console.log(addButton)


const addNewNote = (Text = '') => {
    let Note = document.createElement('div')
    Note.classList.add('note')
  
    const HtmlData = `
          <div class="operation" >
              <button class="edit"><i class='bx bx-edit-alt fas fa-edit' ></i> </button>
              <button class="delete"><i class='bx bxs-folder-minus fas fa-trash-alt' ></i> </button>
         </div>

         <div class="main"></div>
         <textarea class=""></textarea>
      `
  


    Note.insertAdjacentHTML('afterbegin', HtmlData)
    console.log(Note);
  
    document.body.appendChild(Note)
  }
  
  addButton.addEventListener('click',()=> addNewNote())