import React from 'react';

export default function Skills() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROFESSIONAL SKILLS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
              <p>HTML</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>CSS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>JAVASCRIPT</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>React</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>Node js</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>Git</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
