import React from "react";

function Body() {
    return (
        <div>
            <div className="cwi-div">
                <i className="bi bi-cloud-snow cwi"></i>
            </div>
            <div className="temp-div">
                <h1 style={{ fontSize: '5rem', color: 'aliceblue', justifySelf: 'center', marginTop: '30px', marginBottom: '20px' }}>-5°</h1>
                <h3 style={{ fontSize: '2rem', color: 'aliceblue', margin: '0%' }}>Moldova</h3>
            </div>
            <div className="future-wcast">
                <div className="fwc-day">
                    <h3>Tuesday</h3>
                    <h3>-2</h3>
                </div>
                <div className="fwc-day">
                    <h3>Wednesday</h3>
                    <h3>2</h3>
                </div>
                <div className="fwc-day">
                    <h3>Thursday</h3>
                    <h3>3</h3>
                </div>
            </div>
        </div>
    );
}

export default Body;
