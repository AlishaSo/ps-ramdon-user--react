import React from "react";

function UserSummary(props) {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div>
      {props.userData == null ?
        <p>There is no user data</p>
        :
        !showMore ?
        <p>Name: {props.userData.name.first + " " + props.userData.name.last}
        <br/>
        Email: {props.userData.email}
        </p>
        :
        <p>Name: {props.userData.name.first + " " + props.userData.name.last}
        <br/>
        Email: {props.userData.email}
        <br />
         Street: {props.userData.location.street.name}
         <br />
         City: {props.userData.location.city}
         <br />
         Username: {props.userData.login.username}
         <br />
         <img src={props.userData.picture.medium}/>
        </p>
        }

        <button onClick={() => setShowMore(!showMore)}>{!showMore ? 'Show More' : 'Show Less'}</button>
    </div>
  )
}

export default UserSummary;