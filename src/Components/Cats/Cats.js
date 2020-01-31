import React from 'react';


class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  //when you hit the adopt button, you enter a queue and if no selection is made in 30 seconds,
  //the person is removed from the queue.
  //Have an array of ghost names and in a random number of seconds add a random name to the queue

  render() {
    return(
      <div className="Cats">
        <div>
          Cats PlaceHolder:
        </div>
         
        <button>Adopt Me!</button>
      </div>
    )
  }
}

export default Cats;