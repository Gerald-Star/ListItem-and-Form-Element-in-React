
import React, { Component } from 'react';


class ListItems extends Component {


  Arr1 = [

    { id: 1, text: "text 1", number: 1 },

    { id: 2, text: "text 1", number: 2 },
    { id: 3, text: "text 1", number: 3 },
    { id: 4, text: "text 1", number: 4 },
    { id: 5, text: "text 1", number: 5 },
    { id: 6, text: "text 1", number: 6 }
  ]

  RenderListItem = (props) => (
    <div>
      {props.item.text}
      <p>{props.item.number}</p>
    </div>

  )


  render() {
    return (
      <div>
        {this.Arr1.map((item, index) => (<this.RenderListItem key={item.id} item={item} />))}
      </div>
    );
  }
}

;

export default ListItems;