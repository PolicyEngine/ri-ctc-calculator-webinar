import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function IntroSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What we'll cover</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <ul className="list-disc list-inside space-y-4 text-left">
            <li>Introduction to PolicyEngine</li>
            <li>How we built the Rhode Island CTC Calculator</li>
            <li>Governor McKee's child tax credit proposal</li>
            <li>Live demonstration of the calculator</li>
            <li>What's next for Rhode Island tax policy analysis</li>
            <li>Q&A</li>
          </ul>
        </SlideContent>
      </div>
    </Slide>
  );
}
