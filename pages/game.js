const img = "/car.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 // Import the FontAwesomeIcon component
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons"; 
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"; 
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"; 


export default function Home() {
return (
        <div className="image">

            <div>XXX</div>
            <style jsx>
                {`
          .image {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            height: 100%;
            background-size: cover;
            background-position: center;
            background-image: url(${img});
          }
         .navbar-brand{
            color: #fff !important;
          }
          .loading-bar{
            color: #fff;
          }
          .meter{
            width: 100%;
            height: 35px;
            align-items: center;
           
          }
          meter::-webkit-meter-bar{
            background: none;
            box-shadow: 0 5px 5px -5px #333 inset;
            background-color: whitesmoke;
          
          }
          meter::-webkit-meter-optimum-value{
            background:linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #78e4ff, #ff48fa);
                    
          }
          
          
        `}
      </style>
    <div className="container-fluid"> 
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <span className="navbar-brand" id ="navBar"><img src="./bharur.png" alt="Bharur Logo" height="150" /></span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
      <span className="navbar-text">
      <div className="loading-bar">
        <p>Carbon Foot Print: </p>
          <meter className="meter" value="50" min="0" max="100"></meter>
          </div>
      </span> 
    </div>
  </div>
</nav>
</div>  
<div className="container">
       <nav className="navbar fixed-bottom navbar-light">
         <div className="row justify-content-md-center">
           <div className="col-md-auto"><button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="4x"></FontAwesomeIcon></button></div>
           <div className="col-md-auto"><button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faArrowAltCircleUp} size="4x"></FontAwesomeIcon></button></div>
           <div className="col-md-auto"><button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faArrowAltCircleRight} size="4x"></FontAwesomeIcon></button></div>
         </div>
         </nav>
        </div>

      </div>
    
    )
}