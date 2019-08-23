import React from 'react';

// const Hello = ( { params, location } ) => (
//   <h3>Howdy, { params.name }! You like { location.query.food }.</h3>
// );
//
// export default Hello;

const Hello = ({ match, location }) => (
    <h3>Howdy, {match.params.name}! You like { location.search }.</h3>
)

export default Hello;
