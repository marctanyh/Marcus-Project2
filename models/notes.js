/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

module.exports = ( dbPoolInstance ) => {

  const sha256 = require ('js-sha256')

  // getAll
  let getAll = ( callback ) => {

    let query = 'SELECT * FROM notes'

    dbPoolInstance.query ( query , ( error , result ) => {

      if ( error ) {

        // invoke callback function with results after query has excuted 
        callback ( error , null )
        
      } else {

        // invoke callback function with results after query has excuted 
        if ( queryResult.rows.length > 0 ) {

          callback ( null , queryResult.rows )

        } else { 

          callback ( null , null )

        }

      }
      
    } )

  }

  // signup
  let signup = ( dataInput , callback ) => {
    
    let username = dataInput.username

    let password = dataInput.password 

    let confirmPassword = dataInput.confirmPassword

    password = sha256 ( password )

    confirmPassword = sha256 ( confirmPassword )

    // check if the data in the password and confirm password fields are the same, insert if same 
    if ( password == confirmPassword ) {

      let query = 'INSERT INTO users (username,password) VALUES ($1,$2) RETURNING userid'

      const values = [ username , password ]

      dbPoolInstance.query ( query , values , ( error , queryResult ) => {

        if ( error ) {

          callback ( error , null )

        } else {

          if  ( queryResult.rows.length > 0 ) {

            callback ( null , queryResult.rows )

          } else {

            callback ( null , null )

          } 

        }

      } )

    }

  }

  // login
  let login = ( dataInput , callback ) => {

    let username = dataInput.username

    let password = dataInput.password

    password = sha256 ( password )

    let query = 'SELECT * FROM users WHERE username = $1'

    const values = [ username ]

    dbPoolInstance.query ( query , values , ( error , queryResult ) => {

      if ( error ) {

        callback ( error , null )

      } else {

        if ( queryResult.rows.length > 0 ) {

          let result = queryResult.rows[0]

          let checkPass = result.password 

          if ( checkPass = password ) {

            callback ( null , result )

          }
          
        } else {

          callback ( null , null )

        } 
      }

    } )

  }

  // makePost
  let makePost = ( dataInput , callback ) => {

    let userid = dataInput.userid

    let title = dataInput.title

    let content = dataInput.content

    let link =  dataInput.link

    let tags = dataInput.tags 

    if ( !Array.isArray ( tags ) ) {

      tags = [ tags ]

    } 

    let query = 'INSERT INTO notes ( userid , title , content , link , tags , postdate ) VALUES ( $1 , $2 , $3 , $4 , $5 , current_timestamp ) RETURNING notesid'

    const values = [ userid , title , content , link , tags ]

    dbPoolInstance.query ( query , values , ( error , queryResult ) => {

      if ( error ) {

        callback ( error , null )

      } else {

        if ( queryResult.rows.length > 0 ) {

          callback ( null , queryResult.rows )

        } else {

          callback ( null , null )

        }

      }

    } )

  }

  // getNotes

  let getNotes = ( callback ) => {

    let query = `SELECT * FROM notes INNER JOIN  users ON ( notes.userid = users.userid ) ORDER BY notes.notesid DESC`
    
    dbPoolInstance.query ( query , ( error , queryResult ) => {

      if ( error ) {

        callback ( error , null )

      } else { 

        if (queryResult.rows.length > 0 ) {

          callback ( null , queryResult.rows )

        } else {

          callback ( null , null )

        }

      }

    } )
  
  }

  // addCategory
  let addCategory = ( dataInput , callback ) => {

    let tag = dataInput.tag

    let query = 'INSERT INTO category (tag) VALUES ($1)'

    const values = [ tag ]

    dbPoolInstance.query ( query , values , ( error , queryResult ) => {

      if ( error ) {

        callback ( error , null )

      } else {

        if ( queryResult.rows.length > 0 ) {

        callback ( null , queryResult.rows )
         
        } else {

          callback ( null , null )

        }

      } 

    } )

  }

  // getCategory
  let getCategory = ( callback ) => {

    let query = 'SELECT * FROM category'

    dbPoolInstance.query ( query , ( error , queryResult ) => {

      if ( error ) {

        callback ( error , null )

      } else {

        if ( queryResult.rows.length > 0 ) {

          callback ( null , queryResult.rows )

        } else {

          callback ( null , null )

        }
      
      }

    } )

  }

  // addImportant

  let addImportant = ( dataInput , callback ) => {

    let userid =  dataInput.userid

    let notes_id = dataInput.notes_id

    let query = 'INSERT INTO important ( userid ,  notes_id ) VALUES ( $1 , $2 )'

    const values = [ userid , notes_id ]

    dbPoolInstance.query ( query , values , ( error , queryResult ) => {

      if ( error ) { 

        callback ( error , null )
        
      } else {

        if ( queryResult.rows.length > 0 ) {

          callback ( null , queryResult.rows )

        } else {

          callback ( null , null )

        }

      }

    } )

  }

  // getImportant

  // return 
  return {

    getAll , 

    signup ,

    login , 

    makePost ,

    getNotes ,

    addCategory ,

    getCategory ,

    addImportant 

  }



    // `dbPoolInstance` is accessible within this function scope
  
    // let getAll = (callback) => {
  
    //   let query = 'SELECT * FROM notes';
  
    //   dbPoolInstance.query(query, (error, queryResult) => {
    //     if( error ){
  
    //       // invoke callback function with results after query has executed
    //       callback(error, null);
  
    //     }else{
  
    //       // invoke callback function with results after query has executed
  
    //       if( queryResult.rows.length > 0 ){
    //         callback(null, queryResult.rows);
  
    //       }else{
    //         callback(null, null);
  
    //       }
    //     }
    //   });
    // };
  
    // let newNote = (info, callback) => {
    //   const userid = info.userid;
    //   const username = info.username;
    //   const title = info.title;
    //   const content = info.content;
    //   const link = info.link;
  
    //   let query = 'INSERT INTO  notes (userid, username, title, content, link) VALUES ($1, $2, $3, $4, $5)';
  
    //   dbPoolInstance.query(query, [userid, username, title, content, link], (error, queryResult) => {
    //     if (error) {
    //       callback(error, null);
    //     } else {
    //       callback(null, queryResult);
    //     }
    //   });
    // };
  
    // return {
    //   getAll,
    //   newNote
    // };
  }