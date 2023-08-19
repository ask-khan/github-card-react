import React from "react";
import './Card.css'; 

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <>
      <div className="github-profile" style={{ margin:'1rem' }}>
        <img className="avatar" width={100} height={100} src={profile.avatar_url} alt="" />
        <div className="info" style={{ display:'inline-block', marginLeft:'10px' }}>
          <div className="name" style={{ fontSize: '125%' }} >{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
      </>
    );
  }
}

export default Card;
