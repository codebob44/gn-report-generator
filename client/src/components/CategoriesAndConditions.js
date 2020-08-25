import React, { Component } from "react";
//import Node from "./Node";


class CategoriesAndConditions extends React.Component {    
  
  render(props) {
    
    let nodes = props.SelectedCustomer.map(function(customer) {
      return (
        <Node node={customer} children={customer.people} />
      );
    });       
    
    return (
      <div>
        <ul className="org">
         {nodes}
        </ul>        
      </div>
    );
  }
}

class Node extends React.Component {
      
  render() {      
    
    let childnodes = null;
    
    if(this.props.children) {      
      childnodes = this.props.children.map(function(childnode) {
       return (
         <Node node={childnode} children={childnode.people} />
       );
     });
    }
    
    return (
      <li key={this.props.node.id}>      
        <span>{this.props.node.name}</span>        
        { childnodes ?
          <ul>{childnodes}</ul>
        : null }
      </li>
    );
  }
}

export default CategoriesAndConditions;

    