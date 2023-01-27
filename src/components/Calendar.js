import { useState } from "react";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  const [clicked, setClicked] = useState(false);

  const renderConsultationInfo = () => {
    return clicked ? (
      <div className="col flex-center" style={{height: "auto"}}>
        <h2>Con·sul·ta·tion</h2>
        <p>/ˌkänsəlˈtāSH(ə)n/</p>
        <h3 style={{fontSize: "20px", fontStyle: "italic"}}>noun</h3>
        <p> 
          The action or process of formally consulting or discussing.
          "they improved standards in consultation with consumer representatives"</p>
        <p className="question-consultation" onClick={() => setClicked(false)}>Go back</p>
      </div>
    ) : (
      <div className="col flex-center" style={{height: "400px"}}>
        <img className="icon-sizing" src="https://cdn-icons-png.flaticon.com/512/6428/6428769.png" alt="" />
        <h1>Schedule a Consultation</h1>
        <p className="question-consultation" onClick={() => setClicked(true)}>What is a consultation?</p>
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
              height: "30vw",
              width: "40vw",
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