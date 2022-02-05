import React from 'react';
import './FlashCard.css';

function FlashCard() {
    return <div className='card'>
        <img src = 'https://placekitten.com/200/200'></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras blandit urna vel pellentesque luctus. Sed ut massa libero. 
            Ut commodo, enim ac pretium ultricies, sapien lectus pellentesque ipsum,
            vitae commodo augue est quis nulla.
            Sed eleifend purus vitae tortor laoreet iaculis pharetra at lectus. 
            Ut viverra felis eu augue luctus condimentum.
            Sed nec neque nec nibh auctor pretium a non purus.
            Nullam fermentum ex eros, ac rutrum ligula euismod ut.
        </p>
    </div>
}
export default FlashCard;