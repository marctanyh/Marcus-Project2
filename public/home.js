const newNote = document.createElement('form');
newNote.innerHTML = `<input type='submit' value='New Note'/>`;
newNote.setAttribute('method', 'GET');
newNote.setAttribute('action', '/notes/new');