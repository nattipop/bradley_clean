import { useState } from "react"
import { useNavigate } from "react-router";
import cleaningPictures from "../images/cleaning_pictures.json"

const Pictures = () => {
  const [clickedPic, setClickedPic] = useState(null);
  const navigate = useNavigate();
  const renderPictures = () => {
    return clickedPic ? (
      <div className="container">
        <div className="row">
          <img className="full-cleaning-pic col" src={clickedPic.src} alt={clickedPic.alt} />
          <div className="col flex-center">
            <h1>{clickedPic.alt}</h1>
            <p className="question-consultation" onClick={() => setClickedPic(null)}>Go Back</p>
          </div>
        </div>
      </div>
    ) : (cleaningPictures.pictures.map(picture => {
      return (
        <div className="col-4" key={picture.id}>
          <img className="cleaning-pic-style" onClick={() => {
            window.scrollTo({
              top: 700,
              left: 700,
              behavior: 'smooth'
            })
            setClickedPic(picture)
          }}src={picture.src} alt={picture.alt} />
        </div>
      )
    }))
  }

  return (
    <div id="pictures">
      <div className="row">
        {renderPictures()}
      </div>
    </div>
  )
}

export default Pictures;