import React from 'react'
import { Link, withRouter } from 'react-router';

const NavBar = ({details, form, commentShow, id}) => {
  const setFirstTab = () => {
    if (details) {
      return (
        <Link to={`/spot/${id}`}>Details</Link>
      );
    } else if (form) {
      return (
        <Link to={`/spot/${id}/comment/new`}>Create Comment</Link>
      );
    } else {
      return (
        <Link to={`/spot/${id}/comments`}>Show Comments</Link>
      );
    }
  }

  const setSecondTab = () => {
    if (details && !form && commentShow) {
      return (
        <Link to={`/spot/${id}/comments`}>Show Comments</Link>
      );
    } else if(details && form && !commentShow) {
      return (
        <Link to={`/spot/${id}/comment/new`}>Create Comment</Link>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      {this.setFirstTab.call(this)}
      {this.setSecondTab.call(this)}
    </div>
  )
}
