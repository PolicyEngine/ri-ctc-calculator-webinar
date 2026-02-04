import { SlideshowConfig } from '@/lib/types';
import WhatIsPolicyEngineSlide from './slides/WhatIsPolicyEngineSlide';
import IntroSlide from './slides/IntroSlide';
import UsersSlide from './slides/UsersSlide';
import HowDoesItWorkSlide from './slides/HowDoesItWorkSlide';
import MicrosimIntroSlide from './slides/MicrosimIntroSlide';
import MicrosimBaselineSlide from './slides/MicrosimBaselineSlide';
import MicrosimAggregateSlide from './slides/MicrosimAggregateSlide';
import OurApproachSlide from './slides/OurApproachSlide';
import CalculatorOverviewSlide from './slides/CalculatorOverviewSlide';
import McKeeProposalSlide from './slides/McKeeProposalSlide';
import CalculatorDemoSlide from './slides/CalculatorDemoSlide';
import WhatsNextSlide from './slides/WhatsNextSlide';
import ResourcesSlide from './slides/ResourcesSlide';
import EndSlide from './slides/EndSlide';

export const riCtcWebinar2026Config: SlideshowConfig = {
  id: 'ri-ctc-webinar-2026',
  title: 'Rhode Island Child Tax Credit Calculator',
  description: 'Live demonstration of the RI CTC Calculator and Governor McKee\'s proposal',
  date: '5 February 2026',
  location: 'Virtual Webinar',
  slides: [
    IntroSlide,
    WhatIsPolicyEngineSlide,
    UsersSlide,
    HowDoesItWorkSlide,
    MicrosimIntroSlide,
    MicrosimBaselineSlide,
    MicrosimAggregateSlide,
    OurApproachSlide,
    CalculatorOverviewSlide,
    McKeeProposalSlide,
    CalculatorDemoSlide,
    ResourcesSlide,
    WhatsNextSlide,
    EndSlide,
  ],
};
