const addButton = document.querySelector('.add');
console.log(addButton)



const updateLocalStorageData=()=>{
  const textAreaData=document.querySelectorAll('textarea');
  const notes =[];
  textAreaData.forEach((currEl)=>{
      return notes.push(currEl.value);
  })
  localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNote = (Text = '') => {
    let Note = document.createElement('div')
    Note.classList.add('note')
  
    const HtmlData = `
          <div class="operation" >
              <button class="edit"><i class='bx bx-edit-alt fas fa-edit' ></i> </button>
              <button class="delete"><i class='bx bx-task fas fa-trash-alt'></i> </button>
         </div>

         <div class="main ${Text? "": "hidden"}"></div>
         <textarea class="${Text ? "hidden": "" } writer" ></textarea>
      `
  


    Note.insertAdjacentHTML('beforeend', HtmlData)

    const editButton = Note.querySelector('.edit')
    const delButton = Note.querySelector('.delete')
    const mainDiv = Note.querySelector('.main')
    const writer = Note.querySelector('textarea')


    // adding the event listerner
    delButton.addEventListener('click', ()=>
    {
        Note.remove();
        updateLocalStorageData();
    })

      //Toggle using the editButton
      writer.value= Text;
      mainDiv.innerHTML= Text;

    
      editButton.addEventListener('click', ()=>{
        mainDiv.classList.toggle('hidden');
        writer.classList.toggle('hidden');
    })

    writer.addEventListener('change', (event)=>
    {

        const Value = event.target.value;
        mainDiv.innerHTML=Value;

        //fucntion to store the data in local storage is called
        updateLocalStorageData();
    })








    document.body.appendChild(Note)
  }

  //Getting Data from local storage
const notes = JSON.parse(localStorage.getItem('notes'))

if(notes){
    notes.forEach((currEl)=>addNewNote(currEl))
}
  
  addButton.addEventListener('click',()=> addNewNote())