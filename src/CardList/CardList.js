
import './CardList.css'; 
import Card from './../Card/Card';

const CardList = ( props ) => {
  return (
    <div>
      {props.profile.map( profile => <Card key={profile.id} {...profile} /> )}
    </div>
  );
}

export default CardList;
