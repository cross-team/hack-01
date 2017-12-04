import React from 'react';
import { pure } from 'recompose';

const TruckTypeOptions = () => (
  <div className="row">
    <div className="col-12 searchTop">
      <div className="float-left checks">
        <input type="checkbox" id="Flatbed" />
        <label htmlFor="Flatbed">
          Flatbed
        </label>
      </div>
      <div className="float-left checks">
        <input type="checkbox" id="DryVan" />
        <label htmlFor="DryVan">
          Dry Van
        </label>
      </div>
      <div className="float-left checks">
        <input type="checkbox" id="Reefer" />
        <label htmlFor="Reefer">
          Reefer
        </label>
      </div>
    </div>
  </div>
);

export default pure(TruckTypeOptions);
