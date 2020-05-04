module.exports = (app, allModels) => {


    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *    ALL ROUTES FOR POKEMON CONTROLLER
     *  =========================================
     *  =========================================
     *  =========================================
     */
  
    // require the controller
    // const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
    const notes = require('./controllers/notes')(allModels);

    // app.get('/pokemons', pokemonControllerCallbacks.index);
    //app.get('/pokemons/:id', pokemons.getPokemon);
    app.get('/', notes.index);
  
    app.get('/notes/new', notes.new);
  
    app.post('/notes', notes.newNote);

  };
  