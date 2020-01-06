import React from 'react'

// Assets
import BostonGlobe from '../../assets/graphics/companies/boston.png'
import ClintonFoundation from '../../assets/graphics/companies/clinton.png'
import Congress from '../../assets/graphics/companies/congress.png'
import CrisisNow from '../../assets/graphics/companies/crisisnow.png'
import Facebook from '../../assets/graphics/companies/facebook.png'
import Grammy from '../../assets/graphics/companies/grammy.png'
import JedFoundation from '../../assets/graphics/companies/jed.png'
import LiveThroughThis from '../../assets/graphics/companies/ltt.png'
import MentalHealthChannel from '../../assets/graphics/companies/mhc.png'
import Mic from '../../assets/graphics/companies/mic.png'
import MarketWatch from '../../assets/graphics/companies/mw.png'
import RecoveryInnovations from '../../assets/graphics/companies/ri.png'
import Suicidology from '../../assets/graphics/companies/suicidology.png'
import USAToday from '../../assets/graphics/companies/usatoday.png'
import USNews from '../../assets/graphics/companies/usnwr.png'
import WestNYC from '../../assets/graphics/companies/wnyc.png'

export default function FeatureGallery() {
  return (
    <div className="feature-gallery">
      <img className="feature-logo" alt="Congressional Seal" src={Congress} />
      <img className="feature-logo" alt="Congressional Seal" src={BostonGlobe} />
      <img className="feature-logo" alt="Congressional Seal" src={JedFoundation} />
      <img className="feature-logo" alt="Congressional Seal" src={Facebook} />
      <img className="feature-logo" alt="Congressional Seal" src={USAToday} />
      <img className="feature-logo" alt="Congressional Seal" src={USNews} />
      <img className="feature-logo" alt="Congressional Seal" src={Grammy} />
      <img className="feature-logo" alt="Congressional Seal" src={Mic} />
      <img className="feature-logo" alt="Congressional Seal" src={MarketWatch} />
      <img className="feature-logo" alt="Congressional Seal" src={MentalHealthChannel} />
      <img className="feature-logo" alt="Congressional Seal" src={RecoveryInnovations} />
      <img className="feature-logo" alt="Congressional Seal" src={Suicidology} />
      <img className="feature-logo" alt="Congressional Seal" src={WestNYC} />
      <img className="feature-logo" alt="Congressional Seal" src={LiveThroughThis} />
      <img className="feature-logo" alt="Congressional Seal" src={ClintonFoundation} />
      <img className="feature-logo" alt="Congressional Seal" src={CrisisNow} />
    </div>
  )
}
