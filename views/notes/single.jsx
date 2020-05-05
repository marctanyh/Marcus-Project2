var React = require('react');
class Single extends React.Component {
  render() {

    const id = this.props.pokemonId;
    const notes = this.props.pokemon[id-1];

    

    return (
      <html>
        <body>
            <div>
                
                <ul>
                    <li>Title: {notes.title}</li>
                    <li>Content: {notes.content}</li> 
                    <li>Link: {notes.link}</li>
                </ul>
                <form method="GET" action={"/notes/" + {id} + "/edit"}>
                <input type="submit" value="Edit"/>
                </form>
            </div>
        </body>
      </html>
      );
  }
}

module.exports = Single; 