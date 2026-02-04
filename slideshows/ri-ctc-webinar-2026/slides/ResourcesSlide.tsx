import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function ResourcesSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Learn more</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-10 text-left">
            <div>
              <p className="font-bold text-pe-teal text-2xl mb-2">Analysis of the Governor's Proposal</p>
              <p className="text-xl text-gray-600">policyengine.org/us/research/ri-governor-mckee-child-tax-credit</p>
            </div>

            <div>
              <p className="font-bold text-pe-teal text-2xl mb-2">How the Calculator Came to Be</p>
              <p className="text-xl text-gray-600">policyengine.org/us/research/ri-ctc-calculator-press-release</p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
