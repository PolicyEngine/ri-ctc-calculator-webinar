import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function ImpactSummarySlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Impact on Rhode Island families</SlideTitle>
        </SlideHeader>

        <div className="mt-8 px-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Poverty reduction */}
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <p className="text-5xl font-bold text-green-700">-0.8%</p>
              <p className="text-xl text-green-600 mt-2">Poverty rate reduction</p>
              <p className="text-sm text-gray-600 mt-4">
                Thousands fewer Rhode Islanders in poverty
              </p>
            </div>

            {/* Average benefit */}
            <div className="bg-pe-teal/10 p-6 rounded-lg text-center">
              <p className="text-5xl font-bold text-pe-teal">$185</p>
              <p className="text-xl text-pe-dark mt-2">Average household benefit</p>
              <p className="text-sm text-gray-600 mt-4">
                Across all eligible households
              </p>
            </div>

            {/* Inequality */}
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <p className="text-5xl font-bold text-blue-700">-0.02%</p>
              <p className="text-xl text-blue-600 mt-2">Gini coefficient change</p>
              <p className="text-sm text-gray-600 mt-4">
                Reduction in income inequality
              </p>
            </div>
          </div>

          {/* Who gains and loses */}
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div className="border border-green-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-700 mb-4">Who gains?</h3>
              <ul className="space-y-2 text-lg">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">↑</span>
                  <span>Lower-income families with children</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">↑</span>
                  <span>Families below phase-out threshold</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">↑</span>
                  <span>Multi-child households</span>
                </li>
              </ul>
            </div>

            <div className="border border-orange-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-700 mb-4">Who might lose?</h3>
              <ul className="space-y-2 text-lg">
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">↓</span>
                  <span>High-income families (exemption loss)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">—</span>
                  <span>Those without children unaffected</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
