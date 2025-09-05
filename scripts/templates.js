
function getNoteTemplate(indexNote) {
    return `
     <div class="note purple">
        <div class="btn-container">
            <button class="close-btn" onclick="noteToArchive(${indexNote})">Archive</button>
            <button class="close-btn" onclick="noteToTrash(${indexNote})">X</button>
        </div>
        <h4 class="notes-headline">${notesTitles[indexNote]}</h4>
         <p class="notes-base">${notes[indexNote]}</p>
    </div>
    `;
}


function getArchiveNoteTemplate(indexArchiveNote) {
    return `
    <div class="note peach">
        <div class="btn-container">
             <button class="close-btn" onclick="archiveToNotes(${indexArchiveNote})">Notes</button>
             <button class="close-btn" onclick="archiveToTrash(${indexArchiveNote})">X</button> 
        </div>
        <h4 class="notes-headline">${archiveNotesTitles[indexArchiveNote]}</h4>
        <p class="notes-base">${archiveNotes[indexArchiveNote]}</p>
    </div>
    `;
}


function getTrashNoteTemplate(indexTrashNote) {
    return `
    <div class="note red">
        <div class="btn-container">
            <button class="close-btn" onclick="trashToNote(${indexTrashNote})">Notes</button>
            <button class="close-btn" onclick="deleteNote(${indexTrashNote})">X</button>
        </div>
        <h4 class="notes-headline">${trashNotesTitles[indexTrashNote]}</h4>
        <p class="notes-base">${trashNotes[indexTrashNote]}</p>
    </div>
    `;
}
