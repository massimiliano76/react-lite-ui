import React, { Component } from 'react';
import iphone from '../../images/i-phone-6.svg';
import ipad from '../../images/i-pad-air.svg';
import desktop from '../../images/desktop.svg';
import FeaturesSection from './features';
import Button from '../../../../src/button';
import ContributionSection from './contrib-section';

import './index.scss';

class LandingMain extends Component {
  render() {
    return (
      <div className="landing-main">
        <FeaturesSection />
        <div className="row screens">
          <img src={iphone} />
          <img src={ipad} />
          <img src={desktop} />
        </div>
        <div className="row">
          <div className="col">
            <p>Designed for all screen sizes.</p>
            <Button>Take a Tour</Button>
          </div>
        </div>
        <ContributionSection />
      </div>
    );
  }
}

export default LandingMain;