import { useState } from "react";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  const [clicked, setClicked] = useState(false);

  const renderConsultationInfo = () => {
    return clicked ? (
      <div className="col flex-center" style={{height: "auto"}}>
        <p style={{marginTop: "60px"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        <p className="question-consultation" onClick={() => setClicked(false)}>Go back</p>
      </div>
    ) : (
      <div className="col flex-center" style={{height: "400px"}}>
        <img className="icon-sizing" src="https://cdn-icons-png.flaticon.com/512/6428/6428769.png" alt="" />
        <h1>Schedule a Consultation</h1>
        <p className="question-consultation" onClick={() => setClicked(true)}>What will a consultation look like?</p>
      </div>
    )
  }
  return (
    <div id="calendar" className="container">
      <div className="row">
        {renderConsultationInfo()}
        <div className="col">
          <InlineWidget
            id="calendar-inline"
            url="https://calendly.com/bradleyclean"
            styles={{
              height: "40vw",
              width: "auto",
              marginTop: "2vw",
              minWidth: "350px",
              minHeight: "350px"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Calendar;