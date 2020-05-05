module.exports = ( db ) => {

  // require sha256
  const sha256 = require ('js-sha256') 

  /**
   * ===========================================
   *             Controller logic
   * ===========================================
   */
  
  // index 
  let index = ( request , response ) => {
    
    // check the login status
    let loggedIn = request.cookies [ 'loggedIn' ] 
    
    // if user is logged in, redirect to main page with notes else redirect to main page but show no notes
    if ( loggedIn == sha256 ( 'true' ) ) {

      response.redirect ( '/home' ) 

    } else if ( loggedIn == '' || loggedIn == undefined ) {

      db.notes.getNotes ( ( error , result ) => {

        let allNotes =  result 

        console.log ( allNotes )

        let output = {} 

        output.notes = allNotes 

        response.cookie ( 'username' , '' ) 

        response.cookie ( 'userid' , '' ) 

        response.cookie ( 'loggedIn' , '' ) 

        response.render ( 'notes/index' , output ) 

      } )

    }

  }

  // login 
  let login = ( request , response ) => {

    response.render ( 'notes/login' ) 
  }

  // login post
  let loginPost = ( request , response ) => {

    let dataInput = request.body

    db.notes.login ( dataInput , ( error , result ) => {

      response.cookie ( 'username' , result.username )

      response.cookie ( 'userid' , result.userid )

      response.cookie ( 'loggedIn' , sha256('true') )

      response.redirect ( '/home' )

    } )

  }

  // signup
  let signup = ( request , response ) => {

    response.render ( 'notes/signup' )

  }

  // signup post 
  let signupPost = ( request , response ) => {

    let dataInput =  request.body 
    
    db.notes.signup ( dataInput , ( error , result ) => {

      let username = request.body.username 

      let userid =  result[0].userid

      response.cookie ( 'username' , username )

      response.cookie ( 'userid' , userid )

      response.cookie ( 'loggedIn' , sha256('true') )

      response.redirect ( '/home' )
    })
  }

  // home
  let loadHome = ( request , response ) => {

    // check login status 
    let loggedIn = request.cookies[ 'loggedIn' ]

    // if not logged in redirect to login else render home page
    if ( loggedIn == '' ) {

      response.redirect ( 'notes/login' )

    } else {

      let username = request.cookies[ 'username' ]

      let userid = request.cookies[ 'userid' ]

      let loggedIn = request.cookies[ 'loggedIn' ]

      let output = { 'loggedIn' : loggedIn , 'username' : username , 'userid' : userid }

      db.notes.getNotes ( ( error , result ) => {

        let allNotes = result 
        
        output.notes = allNotes

        db.notes.getCategory ( ( error , result ) => {

          let allCategory = result 

          output.category = allCategory

          response.render ( 'notes/home' , output )

        } )

      } )

    }

  }

  // make post 
  let makePost = ( request , response ) => {

    console.log ( request.body )

    let userid = request.cookies[ 'userid' ]

    let dataInput = request.body 

    dataInput.userid = userid 

    db.notes.makePost ( dataInput , ( error , result ) => {

      response.redirect ( '/home' )

    } )

  }

  // category 
  let newCategory = ( request , response ) => {

    let loggedIn =  request.cookies[ 'loggedIn' ]

    let output = { 'loggedIn' : loggedIn }

    response.render ( 'notes/add-category' , output )

  }

  // category post 
  let addCategory = ( request , response ) => {
    
    let dataInput = request.body 

    db.notes.addCategory ( 'dataInput' , ( error , result ) => {

      response.redirect ( '/home' )

    } )

  }
  
  // important
  let newImportant = ( request , response ) => {

    let loggedIn = request.cookies[ 'loggedIn' ]

    let output = { 'loggeIn' : LoggedIn }

    response.render ( 'notes/add-important')

  }

  // important post 
  let addImportant = ( request , response ) => {

    let dataInput = request.body

    let userid = request.cookies[ 'userid' ]

    dataInput.userid = userid
    
    db.notes.addImportant ( dataInput , ( error , result ) => {

      response.redirect ( '/home' )

    } ) 

  }

  // logout 
  let logout = ( request , response ) => {

    response.cookie ( 'username' , '' )

    response.cookie ( 'userid' ,  '' )

    response.cookie ( 'loggedIn' , '' )

    response.redirect ( 'login' )
  }

   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

  return { 

    index : index ,

    login : login ,

    loginPost : loginPost ,

    signup : signup ,

    signupPost: signupPost ,

    loadHome : loadHome ,

    makePost : makePost ,

    newCategory : newCategory ,

    addCategory : addCategory ,

    newImportant : newImportant ,

    addImportant : addImportant ,

    logout : logout

  }
  
    
  //   let indexControllerCallback = (request, response) => {
  //     db.notes.getAll((error, allNotes) => {
  //       if (error) {
  //           console.log('Query error', error.message);
  //           response.send("query error");
  //       } else {

  //         response.render('index', {'allNotes': allNotes});
  //       }
  //     });
  //   };
  
  //   let newFormControllerCallback = (request, response) => {
  //     response.render('new');
  //   };
  
  //   let newNoteControllerCallback = (request, response) => {
  //     const userid = request.cookies.userid;
  //     const username = request.cookies.username;
  //     const title = request.body.title;     
  //     const content = request.body.content;
  //     const link = request.body.link;
  
  //     db.notes.newNote({userid, username, title, content, link}, (error, result) => {
  //       response.redirect(302, '/');
  //     })
  //   };

  //   let singleControllerCallback = (request, response) => {
  //       //something
  //   }
  
  //   /**
  //    * ===========================================
  //    * Export controller functions as a module
  //    * ===========================================
  //    */
  //   return {
  //     index: indexControllerCallback,
  //     new: newFormControllerCallback,
  //     newNote: newNoteControllerCallback,
  //     single: singleControllerCallback
  //   };
  
}
  