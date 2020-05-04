var React = require("react");

class Home extends React.Component {
  render() {
    const allNotes = this.props.allNotes;
    let list = <ul style={{'display': 'none'}}></ul>;

    if (allNotes) {
      const notes = allNotes.map(notes => {
        // return <li>'{tweed.content}' by: {tweed.username}</li>;
        return <li>
            <a href={'/notes/'+notes.id}>{notes.title}<br/>{notes.content}<br/> {notes.link}<br/>by: {notes.username}<br/></a> </li>
      });

      list = <ul>{notes}</ul>;
    } 
    console.log(list)    
    console.log(allNotes)
    return (
      <html>
        <body>
          <p id='header'>Notes</p>
          {list}
          <form id='register' method='GET' action='/notes/new'>
            <input type='submit' value='New Note'/>
          </form>
          <br/>
          <form id='login' method='GET' action='/users/login'>
            <input type='submit' value='Log In'/>
          </form>
          <script src='home.js'></script>
          <script src='script.js'></script>
        </body>
      </html>
      );
  }
}

module.exports = Home;
