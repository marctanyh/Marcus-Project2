var React = require("react");

const cookieParser = require ( 'cookie-parser' ) 

const sha256 = require ( 'js-sha256' )

class Home extends React.Component {

  render() {

    let showLogin = ' d-inline '

    let showLogout = ' d-none '

    let loginCheck = this.props.loggedIn

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

      notes = <div class=' text-white'><em>- nothing yet</em></div>

    } else { 

      notes = notes.map ( element => {

        let date = formatDateTime ( element.postdate )

        let tags = element.tags 

        if ( tags != undefined ) {

          tags = tags.map ( element => {

            return <span>{`${element}`}</span>

          } )

        }

        return <div className="row bg-warning   border-top border-bottom border-white pt-4 pb-4">
<div className="col-10 text-dark">
            <strong>{element.title}</strong>
            <br />{element.content}
            <br />{element.link}
            <br />{tags}
            <br /><small>entered on {date} by {element.username}</small>
            <br />
          </div>
          <div className="col-2 btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-outline-danger">
              ★
        <input type="checkbox" name="hashtag" value={element.notesid}></input>
            </label>
          </div>
        </div>
      });
    }

    let tags = this.props.tags;
    if (tags == null) {
      tags = <label className="d btn btn-outline-warning mr-2 mb-2">No categories in use</label>
    }
    else {
      tags = tags.map(element => {
        return <label className="btn btn-outline-light mr-2 mb-2">
          {element.tag}
          <input type="checkbox" name="hashtag" value={element.tag}></input>
        </label>

      });
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
          <div className="container bg-white w-50 h-150 border border-warning mt-3 mb-5 pt-4 rounded-lg">
            <form method="POST" action="/post">
              <div className="form-group text-left ">
                <textarea className="form-control" rows="1" name="title" placeholder="title"></textarea>
                <br />
                <textarea className="form-control" rows="4" name="content" placeholder="thoughts..."></textarea>
                <br />
                <textarea className="form-control" rows="1" name="link" placeholder="source"></textarea>
                <div className="btn-group-toggle-secondary mt-2" data-toggle="buttons">
                  {tags}
                  <a className="btn btn-outline-warning mr-2 mb-2" href="/category/new"> add category</a>
                </div>
                <br />
                <input className="btn btn-warning mt-3 " type="submit" value="Submit" />
              </div>
            </form>
          </div>
          <div className = "container bg-warning w-50 border border-warning pt-3 pb-3 mt-3 mb-3 rounded-lg">
            <h4 className = 'text-dark'>Thoughts</h4>
            {notes}
          </div>
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
          <script src="script.js"></script>
          
        </body>
      </html>
    )

  }

}

module.exports = Home;
