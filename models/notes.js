/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    let getAll = (callback) => {
  
      let query = 'SELECT * FROM notes';
  
      dbPoolInstance.query(query, (error, queryResult) => {
        if( error ){
  
          // invoke callback function with results after query has executed
          callback(error, null);
  
        }else{
  
          // invoke callback function with results after query has executed
  
          if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
  
          }else{
            callback(null, null);
  
          }
        }
      });
    };
  
    let newNote = (info, callback) => {
      const user_id = info.user_id;
      const username = info.username;
      const title = info.title;
      const content = info.content;
      const link = info.link;
  
      let query = 'INSERT INTO  notes (user_id, username, title, content, link) VALUES ($1, $2, $3, $4, $5)';
  
      dbPoolInstance.query(query, [user_id, username, title, content, link], (error, queryResult) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, queryResult);
        }
      });
    };
  
    return {
      getAll,
      newNote
    };
  };