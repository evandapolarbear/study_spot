import React from 'react'
import { Link, withRouter } from 'react-router';

const NavBar = ({details, form, commentShow, id}) => {
  const setFirstTab = () => {
    if (details) {
      return (
        <Link to={`/spot/${id}`}>Details</Link>
      );
    } else if (commentShow) {
      return (
        <Link to={`/spot/${id}/comments`}>Show Comments</Link>
      );
    } else if (form){
      return (
        <Link to={`/spot/${id}/comment/new`}>Create Comment</Link>
      );
    }
  }

  const setSecondTab = () => {
    if (!form && commentShow) {
      return (
        <Link to={`/spot/${id}/comments`}>Show Comments</Link>
      );
    } else if(form && (commentShow || details)) {
      return (
        <Link to={`/spot/${id}/comment/new`}>Create Comment</Link>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      {setFirstTab()}
      {setSecondTab()}
    </div>
  )
}

export default NavBar;
