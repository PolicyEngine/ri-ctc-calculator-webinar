import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function GovernorProposalSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Governor McKee's Child Tax Credit proposal</SlideTitle>
        </SlideHeader>

        <div className="mt-8 px-8">
          <div className="grid grid-cols-2 gap-12">
            {/* Left column - Key features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-pe-dark">Key features</h3>

              <div className="space-y-4">
                <div className="bg-pe-teal/10 p-4 rounded-lg">
                  <p className="text-4xl font-bold text-pe-teal">$325</p>
                  <p className="text-lg text-pe-dark">per child, fully refundable</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-pe-teal text-xl">✓</span>
                    <span className="text-lg">Children under 19 years old</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-pe-teal text-xl">✓</span>
                    <span className="text-lg">Phase-out begins at $261,000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-pe-teal text-xl">✓</span>
                    <span className="text-lg">All filing statuses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-pe-teal text-xl">✓</span>
                    <span className="text-lg">Replaces existing child exemption</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Fiscal impact */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-pe-dark">Fiscal impact (2026)</h3>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-700">$35.2 million</p>
                  <p className="text-lg text-blue-600">Net cost to Rhode Island</p>
                </div>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>CTC cost: $59.96 million</p>
                  <p>Exemption elimination savings: $24.76 million</p>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Families benefiting:</span>
                    <span className="font-semibold">36.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Children affected:</span>
                    <span className="font-semibold">~180,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
