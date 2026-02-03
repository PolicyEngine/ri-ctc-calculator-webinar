import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function WhatsNextSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What's next for Rhode Island</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <div>
              <p className="font-semibold text-pe-dark mb-3">Legislative process</p>
              <p className="ml-6">Governor McKee's FY2027 budget proposal is under review</p>
            </div>

            <div>
              <p className="font-semibold text-pe-dark mb-3">Calculator enhancements</p>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Additional reform scenarios</li>
                <li>Enhanced demographic breakdowns</li>
                <li>Regional impact analysis</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-pe-dark mb-3">Research and analysis</p>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Detailed impact reports as legislation evolves</li>
                <li>Comparison with other state CTCs</li>
                <li>Long-term fiscal projections</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-pe-dark mb-3">Resources</p>
              <div className="ml-6 space-y-2 text-pe-teal">
                <p>Calculator: policyengine.org/us/rhode-island-ctc-calculator</p>
                <p>Analysis: policyengine.org/us/research/ri-governor-mckee-child-tax-credit</p>
                <p>Full story: policyengine.org/us/research/ri-ctc-calculator-press-release</p>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
