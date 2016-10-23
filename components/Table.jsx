import React from 'react'

class Table extends React.Component {
    constructor() {
        super();

//Sample data
        this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
    }

    render () {
        return (
            <table className="ui basic table">
            <thead>
            <tr>{this.props.headerName.map((title, i) => <TableHeader key={i} title={title} />)}</tr>
            </thead>
            <tbody>
            {this.state.data.map((person, i) => <TableBody key={i} data={person} />)}
            </tbody>
            </table>
        )
    }
}

class TableHeader extends React.Component {
   render() {
      return (
         <th>{this.props.title}</th>
      );
   }
}

class TableBody extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default Table;