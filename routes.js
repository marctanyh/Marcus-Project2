module.exports = (app, allModels) => {


    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *          ALL ROUTES CONTROLLERS
     *  =========================================
     *  =========================================
     *  =========================================
     */
  

    // require the controller

    const notesControllerCallback = require('./controllers/notes')(allModels)

    // index 
    app.get('/', notesControllerCallback.index) 

    // login get
    app.get('/login', notesControllerCallback.login)

    // login post
    app.post('/login', notesControllerCallback.loginPost)

    // signup get
    app.get('/signup', notesControllerCallback.signup)

    // signup post
    app.post('/signup', notesControllerCallback.signupPost)
    
    // home
    app.get('/home', notesControllerCallback.loadHome)

    // make post
    app.post('/post', notesControllerCallback.makePost)

    // category get 
    app.get('/category/new', notesControllerCallback.newCategory)

    // category post
    app.post('/category', notesControllerCallback.addCategory)

    // important get 
    app.get('/important/new', notesControllerCallback.newImportant)

    // important post
    app.post('/important', notesControllerCallback.addImportant)

    // logout
    app.get('/logout', notesControllerCallback.logout)


    // app.get('/notes/new', notesControllerCallback.new);
  
    // app.post('/notes', notes.newNote);

    // app.get('/notes/:id', notes.single)

  };
  