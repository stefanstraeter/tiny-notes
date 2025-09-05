
let notesTitles = [];
let notes = [];
let archiveNotesTitles = [];
let archiveNotes = [];
let trashNotesTitles = [];
let trashNotes = [];



function init() {
    getFromLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}


function renderNotes() {
    let contentRef = document.getElementById('notes-content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}



function renderArchiveNotes() {
    let archiveContentRef = document.getElementById('archive-content');
    archiveContentRef.innerHTML = "";

    for (let indexArchiveNote = 0; indexArchiveNote < archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }

}



function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash-content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
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

    notesTitles.push(titleInput)
    notes.push(noteInput)

    saveToLocalStorage();
    renderNotes();

    titleInputRef.value = "";
    noteInputRef.value = "";

}



function saveToLocalStorage() {
    let myData = {
        notesTitles: notesTitles,
        notes: notes,
        archiveNotesTitles: archiveNotesTitles,
        archiveNotes: archiveNotes,
        trashNotesTitles: trashNotesTitles,
        trashNotes: trashNotes
    };

    localStorage.setItem("myData", JSON.stringify(myData));
}



function getFromLocalStorage() {
    let stored = JSON.parse(localStorage.getItem("myData"));

    if (stored !== null) {
        notesTitles = stored.notesTitles || [];
        notes = stored.notes || [];
        archiveNotesTitles = stored.archiveNotesTitles || [];
        archiveNotes = stored.archiveNotes || [];
        trashNotesTitles = stored.trashNotesTitles || [];
        trashNotes = stored.trashNotes || [];
    }
}



function noteToArchive(indexNote) {
    let archiveNotesTitle = notesTitles.splice(indexNote, 1);
    let archiveNote = notes.splice(indexNote, 1);

    archiveNotesTitles.push(archiveNotesTitle[0]);
    archiveNotes.push(archiveNote[0]);

    saveToLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();

}



function noteToTrash(indexNote) {
    let trashNotesTitle = notesTitles.splice(indexNote, 1);
    let trashNote = notes.splice(indexNote, 1);


    trashNotesTitles.push(trashNotesTitle[0]);
    trashNotes.push(trashNote[0]);

    saveToLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();

}



function archiveToNotes(indexNote) {
    let notesTitle = archiveNotesTitles.splice(indexNote, 1);
    let note = archiveNotes.splice(indexNote, 1);

    notesTitles.push(notesTitle[0]);
    notes.push(note[0]);

    saveToLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}



function archiveToTrash(indexNote) {
    let trashNotesTitle = archiveNotesTitles.splice(indexNote, 1);
    let trashNote = archiveNotes.splice(indexNote, 1);

    trashNotesTitles.push(trashNotesTitle[0]);
    trashNotes.push(trashNote[0]);

    saveToLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}



function trashToNote(indexNote) {
    let notesTitle = trashNotesTitles.splice(indexNote, 1);
    let note = trashNotes.splice(indexNote, 1);

    notesTitles.push(notesTitle[0]);
    notes.push(note[0]);

    saveToLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}



function deleteNote(indexTrashNote) {
    trashNotesTitles.splice(indexTrashNote, 1);
    trashNotes.splice(indexTrashNote, 1);


    saveToLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}

