import React from 'react';


class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="Dogs">
        <div>Dog Placeholder:</div>
        <button>Adopt Me</button>
      </div>
    )
  }
}

export default Dogs;