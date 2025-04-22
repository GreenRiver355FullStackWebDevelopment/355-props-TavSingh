function Restaurant(props) {
// Populating the component with the data from the container
  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name}/>
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        {/*Used built in emoji key, Win + . to get ⭐ emoji*/}
        <li>⭐{props.restaurant.rating}</li>
      </ul>
    </div>
  );
}

export default Restaurant;
