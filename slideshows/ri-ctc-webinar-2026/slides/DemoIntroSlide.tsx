import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function DemoIntroSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Live demonstration</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="text-3xl font-semibold text-pe-teal">
              Demo sequence
            </p>

            <ol className="list-decimal list-inside space-y-4 ml-6 text-2xl">
              <li>Configure Governor McKee's $325 CTC proposal</li>
              <li>Explore household-level impacts for a Rhode Island family</li>
              <li>See how the credit varies with income</li>
              <li>Review statewide impact analysis</li>
              <li>Design an alternative proposal</li>
            </ol>

            <p className="text-pe-teal font-semibold pt-4">
              policyengine.org/us/rhode-island-ctc-calculator
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
