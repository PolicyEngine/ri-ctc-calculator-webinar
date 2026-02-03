import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import IntroSlide from './slides/IntroSlide';
import WhatIsPolicyEngineSlide from './slides/WhatIsPolicyEngineSlide';
import UsersSlide from './slides/UsersSlide';
import HowDoesItWorkSlide from './slides/HowDoesItWorkSlide';
import MicrosimIntroSlide from './slides/MicrosimIntroSlide';
import MicrosimBaselineSlide from './slides/MicrosimBaselineSlide';
import MicrosimAggregateSlide from './slides/MicrosimAggregateSlide';
import OurApproachSlide from './slides/OurApproachSlide';
import CalculatorStorySlide from './slides/CalculatorStorySlide';
import NiskanenCommissionSlide from './slides/NiskanenCommissionSlide';
import GovernorProposalSlide from './slides/GovernorProposalSlide';
import ImpactSummarySlide from './slides/ImpactSummarySlide';
import CalculatorFeaturesSlide from './slides/CalculatorFeaturesSlide';
import DemoIntroSlide from './slides/DemoIntroSlide';
import CalculatorDemoSlide from './slides/CalculatorDemoSlide';
import WhatsNextSlide from './slides/WhatsNextSlide';
import EndSlide from './slides/EndSlide';

export const riCtcWebinar2026Config: SlideshowConfig = {
  id: 'ri-ctc-webinar-2026',
  title: 'Rhode Island Child Tax Credit Calculator',
  description: 'Live demonstration of the RI CTC Calculator and Governor McKee\'s proposal',
  date: '5 February 2026',
  location: 'Virtual Webinar',
  slides: [
    CoverSlide,
    IntroSlide,
    WhatIsPolicyEngineSlide,
    UsersSlide,
    HowDoesItWorkSlide,
    MicrosimIntroSlide,
    MicrosimBaselineSlide,
    MicrosimAggregateSlide,
    OurApproachSlide,
    CalculatorStorySlide,
    NiskanenCommissionSlide,
    GovernorProposalSlide,
    ImpactSummarySlide,
    CalculatorFeaturesSlide,
    DemoIntroSlide,
    CalculatorDemoSlide,
    WhatsNextSlide,
    EndSlide,
  ],
};
