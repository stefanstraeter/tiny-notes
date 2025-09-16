
let allNotes = {
    'notesTitles': [],
    'notes': [],
    'archiveNotesTitles': [],
    'archiveNotes': [],
    'trashNotesTitles': [],
    'trashNotes': []
};



function init() {
    getFromLocalStorage();
    renderAllNotes();
}



function renderAllNotes() {
    let contentRef = document.getElementById('notes-content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }

    let archiveContentRef = document.getElementById('archive-content');
    archiveContentRef.innerHTML = "";

    for (let indexArchiveNote = 0; indexArchiveNote < allNotes.archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }

    let trashContentRef = document.getElementById('trash-content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}



function addNote() {
    let titleInputRef = document.getElementById('titleInput');
    let noteInputRef = document.getElementById('noteInput');

    let titleInput = titleInputRef.value.trim();
    let noteInput = noteInputRef.value.trim();

    if (titleInput === "" && noteInput === "") {
        return
    }

    allNotes.notesTitles.push(titleInput)
    allNotes.notes.push(noteInput)

    saveToLocalStorage();
    renderAllNotes()

    titleInputRef.value = "";
    noteInputRef.value = "";

}



function saveToLocalStorage() {
    localStorage.setItem("myData", JSON.stringify(allNotes));
}



function getFromLocalStorage() {
    let stored = JSON.parse(localStorage.getItem("myData"));

    if (stored !== null) {
        allNotes.notesTitles = stored.notesTitles || [];
        allNotes.notes = stored.notes || [];
        allNotes.archiveNotesTitles = stored.archiveNotesTitles || [];
        allNotes.archiveNotes = stored.archiveNotes || [];
        allNotes.trashNotesTitles = stored.trashNotesTitles || [];
        allNotes.trashNotes = stored.trashNotes || [];
    }
}



function moveNote(indexNote, startKey, destinationKey) {
    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    let note = allNotes[startKey].splice(indexNote, 1);

    allNotes[destinationKey + "Titles"].push(notesTitle[0]);
    allNotes[destinationKey].push(note[0]);

    saveToLocalStorage();
    renderAllNotes()

}



function deleteNote(indexTrashNote) {
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);
    allNotes.trashNotes.splice(indexTrashNote, 1);

    saveToLocalStorage();
    renderAllNotes()
}

