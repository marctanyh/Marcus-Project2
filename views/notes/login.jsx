var React = require("react");

class Login extends React.Component {
  render() {
    // console.log(this.props.types);
    var loggedIn = 'invisible'

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
            <div className={loggedIn}>
            <a className="btn btn-outline-warning rounded-pill mr-3 pl-2 pr-2 pt-1 pb-1" href="/login">Log In</a>
            <a className="btn btn-warning rounded-pill pl-4 pr-4 pt-1 pb-1" href="/signup">Sign Up</a>
            </div>
          </nav>
          </div>
          <div className = "mt-0 container-fluid bg-white w-50 d-flex flex-column text-center p-3 border border-warning rounded-lg">
    

            <h4 className = "text-warning pt-4">login to commonplace</h4>

            <form className = "d-flex flex-column w-75 ml-auto mr-auto" method="POST" action={'/login'}>
              <input className= "mt-5 pl-2 pt-2 pb-2"type="text" name="username" placeholder= "Name"/>
              <input className= "mt-3 pl-2 pt-2 pb-2" type="password" name="password" placeholder= "Password"/>
              <input className= "btn btn-warning text-white rounded-pill mt-3 mb-3 pt-2 pb-2"type="submit" value="Log In"/>
              <a href="/signup" class= "text-warning">No account? Sign up here</a>
            </form>
          </div>
          
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Login;