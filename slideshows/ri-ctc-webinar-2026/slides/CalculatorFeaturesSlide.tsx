import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function CalculatorFeaturesSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What the calculator does</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="grid grid-cols-2 gap-12">
            {/* Household analysis */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-pe-teal">Household analysis</h3>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Configure your family situation</li>
                <li>See baseline vs. reform comparison</li>
                <li>Explore impacts across income levels</li>
                <li>Understand interactions with other programs</li>
              </ul>
            </div>

            {/* Statewide analysis */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-pe-teal">Statewide analysis</h3>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Budget impact estimates</li>
                <li>Poverty and inequality effects</li>
                <li>Distribution by income decile</li>
                <li>Winners and losers breakdown</li>
              </ul>
            </div>

            {/* Customization */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-pe-teal">Policy customization</h3>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Adjust credit amount</li>
                <li>Modify phase-out thresholds</li>
                <li>Change age eligibility</li>
                <li>Compare multiple designs</li>
              </ul>
            </div>

            {/* Transparency */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-pe-teal">Full transparency</h3>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Open-source methodology</li>
                <li>Documented assumptions</li>
                <li>Reproducible results</li>
                <li>API access available</li>
              </ul>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
