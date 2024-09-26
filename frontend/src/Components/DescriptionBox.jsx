import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav">Description</div>
        <div className="descriptionbox-nav">Reviews (1000+)</div>
      </div>

      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae aspernatur obcaecati maxime perspiciatis, a
          veritatis in velit! Praesentium assumenda ducimus cupiditate dolorem corporis sapiente eum. Natus ut ducimus nisi minus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis autem rerum deserunt eum? Reprehenderit expedita,
          dolorem nihil voluptates autem repellat excepturi ugit vitae sed enim libero accusamus, neque inventore.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox;
