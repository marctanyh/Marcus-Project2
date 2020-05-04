var React = require("react");

class NewNote extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <p>New Tweed</p>
          <form method='POST' action='/notes'>
            <p>Title</p>
            <input type='text' name='title'/>
            <br/>
            <p>Message</p>
            <input type='textarea' name='content'/>
            <br/>
            <p>Link</p>
            <input type='text' name='link'/>
            <br/>
            <input type='submit' value='Submit'/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = NewNote;