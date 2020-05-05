var React = require("react");
const sha256 = require('js-sha256');

class AddCategories extends React.Component {
    render() {

        // console.log(this.props.types);
        var showLogin = 'd-inline';
        var showLogout = 'd-none';
        // console.log(this.props);
        var loginCheck = this.props.loggedIn;

        if (loginCheck == sha256('true')) {
            showLogin = 'd-none'
            showLogout = 'd-inline';
        }
        else {
            showLogin = 'd-inline'
            showLogout = 'd-none';
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
                    <div className="mt-3 container-fluid w-50 h-150 bg-warning w-25 d-flex flex-column text-center p-3 border border-warning rounded-lg">

 

                        <form className="d-flex flex-column w-75 ml-auto mr-auto" method="POST" action={'/category'}>
                            <br/>
                            <div className="input-group mb-3">

                                <input type="text" className="form-control" placeholder="Category Title" name = "tag" aria-label="hashtag" aria-describedby="basic-addon1"></input>
                            </div>
                            
                            <input className="btn btn-light text-warning rounded-pill mt-3 mb-3 pt-2 pb-2" type="submit" value="Add category" />
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

module.exports = AddCategories;
