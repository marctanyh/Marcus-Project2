module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let indexControllerCallback = (request, response) => {
      db.notes.getAll((error, allNotes) => {
        if (error) {
            console.log('Query error', error.message);
            response.send("query error");
        } else {

          response.render('index', {'allNotes': allNotes});
        }
      });
    };
  
    let newFormControllerCallback = (request, response) => {
      response.render('new');
    };
  
    let newNoteControllerCallback = (request, response) => {
      const user_id = request.cookies.user_id;
      const username = request.cookies.username;
      const title = request.body.title;     
      const content = request.body.content;
      const link = request.body.link;
  
      db.notes.newNote({user_id, username, title, content, link}, (error, result) => {
        response.redirect(302, '/');
      })
    };
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      index: indexControllerCallback,
      new: newFormControllerCallback,
      newNote: newNoteControllerCallback
    };
  
  }
  