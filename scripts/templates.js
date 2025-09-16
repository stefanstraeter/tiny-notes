
function getNoteTemplate(indexNote) {
    return `
     <div class="note purple">
        <div class="btn-container">
            <button class="close-btn" onclick="moveNote(${indexNote}, 'notes', 'archiveNotes')">Archive</button>
            <button class="close-btn" onclick="moveNote(${indexNote}, 'notes', 'trashNotes')">X</button>
        </div>
        <h4 class="notes-headline">${allNotes.notesTitles[indexNote]}</h4>
         <p class="notes-base">${allNotes.notes[indexNote]}</p>
    </div>
    `;
}


function getArchiveNoteTemplate(indexArchiveNote) {
    return `
    <div class="note peach">
        <div class="btn-container">
             <button class="close-btn" onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'notes')">Notes</button>
             <button class="close-btn" onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'trashNotes')">X</button> 
        </div>
        <h4 class="notes-headline">${allNotes.archiveNotesTitles[indexArchiveNote]}</h4>
        <p class="notes-base">${allNotes.archiveNotes[indexArchiveNote]}</p>
    </div>
    `;
}


function getTrashNoteTemplate(indexTrashNote) {
    return `
    <div class="note red">
        <div class="btn-container">
            <button class="close-btn" onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')">Notes</button>
            <button class="close-btn" onclick="deleteNote(${indexTrashNote})">X</button>
        </div>
        <h4 class="notes-headline">${allNotes.trashNotesTitles[indexTrashNote]}</h4>
        <p class="notes-base">${allNotes.trashNotes[indexTrashNote]}</p>
    </div>
    `;
}
