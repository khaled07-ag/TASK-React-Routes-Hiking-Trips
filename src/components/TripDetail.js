import React from 'react';
import tripsData from '../tripsData';
import Nav from './Nav';
import { useParams,Navigate } from 'react-router-dom';
function TripDetail() {
  const {tripId} = useParams();
  // console.log(tripId)
  const tripData = tripsData.find((trip)=>{
   return trip.id === +tripId
  });
  return (
    <>
    <Nav />

    <div className="modal-dialog modal-xl">
      
      <div className="modal-content">
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {tripData.name}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={tripData.img}
                  alt="..."
                />
                <p className="mb-4">
                  City : {tripData.city}
                  <br />
                  Length : {tripData.length1}Km
                  <br />
                  Rating : {tripData.rating}
                  <br />
                  Difficulty : {tripData.difficulty}
                  <br />
                  Details : {tripData.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default TripDetail;
