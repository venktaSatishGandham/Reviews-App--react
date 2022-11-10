import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            id="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            id="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

/* Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    num: 0,
  }

  onChangeRightProfile = () => {
    const {num} = this.state
    if (num < 4) {
      this.setState(prev => ({num: prev.num + 1}))
    }
  }

  onChangeLeftProfile = () => {
    const {num} = this.state
    if (num > 0) {
      this.setState(prev => ({num: prev.num - 1}))
    }
  }

  render() {
    const {num} = this.state
    const {reviewsList} = this.props
    const {imgUrl, companyName, username, description} = reviewsList[num]
    return (
      <div className="bg-container">
        <div className="center">
          <h1>Reviews</h1>
          <div className="main-container">
            <button
              type="button"
              className="arrow"
              onClick={this.onChangeLeftProfile}
              testid="leftArrow"
            >
              <img
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <div className="middleName">
              <img alt={username} className="img" src={imgUrl} />
              <p className="user">{username}</p>
              <p className="office">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              type="button"
              className="arrow"
              onClick={this.onChangeRightProfile}
              testid="rightArrow"
            >
              <img
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
*/
