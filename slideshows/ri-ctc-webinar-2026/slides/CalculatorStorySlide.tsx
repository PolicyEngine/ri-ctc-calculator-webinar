import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function CalculatorStorySlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>How the RI CTC Calculator came to be</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-pe-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <p className="font-semibold text-pe-dark">Niskanen Center commissioned the tool</p>
                  <p className="text-gray-600">To support evidence-based policy design in Rhode Island</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pe-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <p className="font-semibold text-pe-dark">PolicyEngine built the calculator</p>
                  <p className="text-gray-600">Interactive tool for modeling RI CTC proposals</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pe-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <p className="font-semibold text-pe-dark">Governor McKee's office used it</p>
                  <p className="text-gray-600">To help design the $325 CTC in his FY2027 budget</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pe-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <p className="font-semibold text-pe-dark">Now available to everyone</p>
                  <p className="text-gray-600">Explore the proposal and design alternatives</p>
                </div>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
