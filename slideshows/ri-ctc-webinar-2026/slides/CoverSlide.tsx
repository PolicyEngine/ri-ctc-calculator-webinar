import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col justify-center space-y-16">
        <SlideTitle isCover>
          Rhode Island Child Tax Credit<br />
          Calculator
        </SlideTitle>

        <div className="text-3xl text-white space-y-3 text-left">
          <p className="font-medium">David Trimmer & Pavel Makarchuk</p>
          <p>PolicyEngine</p>
          <p className="text-2xl">February 5, 2026</p>
        </div>
      </div>
    </Slide>
  );
}
