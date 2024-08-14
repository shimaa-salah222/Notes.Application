
var notes = [];

// Function to add a new note
function addNote() {
    var noteTitle = document.getElementById('note-title').value.trim();
    var noteContent = document.getElementById('note-content').value.trim();
    var timestamp = new Date().toLocaleString(); // Get current timestamp
    //const noteTitle = window.prompt('Enter Note Title:');
    if (noteTitle !== '' && noteContent !== '') {
        // Create a new note object
        var newNote = {
            title: noteTitle,
            content: noteContent,
            timestamp: timestamp
        };
        // Add the new note to the array
        notes.push(newNote);

        // listNote the notes
        ListNotes();

        // Clear the input fields
        document.getElementById('note-title').value = '';
        document.getElementById('note-content').value = '';
    }else {
        openPopup();
    }
}

function deleteNote(index) {
    if (index >= 0 && index < notes.length) {
        notes.splice(index, 1); // Remove the note at the given index
        ListNotes(); // list the updated notes
    }
 }

// Function to list notes
function ListNotes() {
    var notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = ''; // Clear previous notes

    // Loop through the notes array and display each note
    notes.forEach(function(note, index) {
        var noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <h3>${"Note Title: "+note.title}</h3>
            <p>${"Note Content: "+note.content}</p>
            <p>Added on: ${note.timestamp}</p>
            <button onclick="deleteNote(${index})"><i class="fa-solid fa-trash"> Delete</i></button>
        `;
        notesContainer.appendChild(noteElement);
    });
}

////////////////////////////fun popup/////////////////////////////
let popup = document.getElementById("popup")
function openPopup(){
   popup.classList.add("openPopup");
}
 function closePopup(){
     popup.classList.remove("openPopup"); }




// Event listener for form submission
document.getElementById('note-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    addNote(); // Call addNote function
});