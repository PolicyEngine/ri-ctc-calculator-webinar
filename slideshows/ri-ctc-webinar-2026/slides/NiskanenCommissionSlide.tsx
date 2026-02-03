import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function NiskanenCommissionSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Niskanen Center's role</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="flex gap-12 items-start">
            <div className="space-y-6 text-left flex-1">
              <p className="text-xl">
                The Niskanen Center commissioned PolicyEngine to build an interactive
                calculator for modeling Rhode Island Child Tax Credit proposals.
              </p>

              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Enable evidence-based policy design</li>
                <li>Provide transparency in fiscal analysis</li>
                <li>Support state legislators and stakeholders</li>
                <li>Demonstrate impact on Rhode Island families</li>
              </ul>

              <p className="text-pe-teal font-semibold pt-4">
                "Rhode Island Child Tax Credit Would Be Bold, Simple, and Fiscally Responsible"
              </p>
              <p className="text-sm text-gray-600">
                — Niskanen Center analysis
              </p>
            </div>

            <div className="flex-shrink-0">
              <Image
                src={assetPath('/logos/organizations/niskanen-center.png')}
                alt="Niskanen Center"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
