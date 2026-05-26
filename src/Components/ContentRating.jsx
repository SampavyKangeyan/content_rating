
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
     this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings +1
        }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings +1
        }));
      },

    }
}
  render() {
    return (
     <>
        <div className='content-rating'>
            <div className='image'>
            <img src='https://tse2.mm.bing.net/th/id/OIP.IwrIRIl8qYp3dVA3e6a9-AHaJ4?r=0&cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3'/>
            </div>
            <p>
            Rate this Mothers' Day Greeting card!
            </p>
            <div className='rating-buttons'>
                <button className="like-button" onClick={this.state.handleLike}>
                    Like ({this.state.likes})
                </button>
                <button className="dislike-button" onClick={this.state.handleDislike}>
                    Dislike ({this.state.dislikes})
                </button>
            </div>
            <div>
                <p>
                This shows totalRatings ({this.state.totalRatings})
                </p>
            </div>
        </div>
     </>
    );
  }
}

export default ContentRating;
