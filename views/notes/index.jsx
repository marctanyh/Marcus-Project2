var React = require("react");

const cookieParser = require ( 'cookie-parser' ) 

const sha256 = require ( 'js-sha256' )

class Index extends React.Component {

  render() {

    let showLogin = ' d-inline '

    let showLogout = ' d-none '

    let loginCheck = this.props.loggedin

    function formatDateTime ( date ) {

      let formatDate = date.toLocaleDateString()

      let formatTime = date.toLocaleTimeString()

      return `${formatDate} ${formatTime}`  

    } 

    if ( loginCheck == sha256 ( 'true' ) ) {

      showLogin = ' d-none '

      showLogout = ' d-inline '

    } else {

      showLogin = ' d-inline '

      showLogout = ' d-none '

    }

    let notes = this.props.notes 

    if ( notes == null ) {

      notes = <div>There are no notes yet</div>

    } else { 

      notes = notes.map ( element => {

        let date = formatDateTime ( element.postdate )

        let tags = element.tags 

        if ( tags != undefined ) {

          tags = tags.map ( element => {

            return <span>{`${element}`}</span>

          } )

        }

        return <div>            
            <strong>{element.title}</strong>
            <br />{element.content}
            <br />{element.link}
            <br />{tags}
            <br /><small>entered on {date} by {element.username}</small>
            <br />
        </div>
      })
    }

    return (

      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
        </head>
        
        
        <body className="bg-light">
        <div className="bg-light border-bottom border-light">
            <nav className="navbar navbar-light bg-light w-60 ml-auto mr-auto pl-0 pr-10">
              <a className="navbar-brand text-warning" href="/">

                &emsp; commonplace : {this.props.username}
            </a>
              <div className={showLogin}>
                <a className="btn btn-outline-warning rounded-pill mr-3 pl-4 pr-4 pt-1 pb-1" href="/login">Log In</a>
                <a className="btn btn-warning rounded-pill pl-4 pr-4 pt-1 pb-1" href="/signup">Sign Up</a>
              </div>
              <div className={showLogout}>
                <a className="btn btn-outline-warning rounded-pill  pl-4 pr-4 pt-1 pb-1" href="/logout">Log Out</a>
              </div>
          </nav>
          </div>
          <div className = "container bg-white w-50 border border-warning pt-3 pb-3 mt-3 mb-3 rounded-lg">
            <h3 className = "text-warning">thoughts</h3>
            {notes}
          </div>
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        </body>
      </html>
    )


  //   const allNotes = this.props.allNotes;
  //   let list = <ul style={{'display': 'none'}}></ul>;

  //   if (allNotes) {
  //     const notes = allNotes.map(notes => {
  //       // return <li>'{tweed.content}' by: {tweed.username}</li>;
  //       return <li>
  //           <a href={'/notes/'+notes.id}>{notes.title}<br/>{notes.content}<br/> {notes.link}<br/>by: {notes.username}<br/></a> </li>
  //     });

  //     list = <ul>{notes}</ul>;
  //   } 
  //   console.log(list)    
  //   console.log(allNotes)
  //   return (
  //     <html>
  //       <body>
  //         <p id='header'>Notes</p>
  //         {list}
  //         <form id='register' method='GET' action='/notes/new'>
  //           <input type='submit' value='New Note'/>
  //         </form>
  //         <br/>
  //         <form id='login' method='GET' action='/users/login'>
  //           <input type='submit' value='Log In'/>
  //         </form>
  //         <script src='home.js'></script>
  //         <script src='script.js'></script>
  //       </body>
  //     </html>
  //     );
  // }
  }

}

module.exports = Index;
