'use client';
import { useState } from 'react';
import { WorkTypes, ourWorksPreview } from './constants';
import { Button, ButtonStyleTypes } from '@pr2/shared';
import { twMerge } from 'tailwind-merge';
import { WorkPreviewCard } from './work-preview-card';

export const WorksUI = () => {
  const [selectedDesign, setSelectedDesign] = useState(WorkTypes.ALL);
  return (
    <>
      <div className="flex gap-8">
        <Button
          onClick={() => setSelectedDesign(WorkTypes.ALL)}
          className={twMerge(
            'text-lb-1 text-blue-1000 opacity-70',
            selectedDesign === WorkTypes.ALL && 'text-blue-700 opacity-100'
          )}
        >
          All
        </Button>
        <Button
          onClick={() => setSelectedDesign(WorkTypes.UI_DESIGN)}
          className={twMerge(
            'text-lb-1 text-blue-1000 opacity-70 transition-colors',
            selectedDesign === WorkTypes.UI_DESIGN &&
              'text-blue-700 opacity-100'
          )}
        >
          UI Design
        </Button>
        <Button
          onClick={() => setSelectedDesign(WorkTypes.WEBFLOW_DESIGN)}
          className={twMerge(
            'text-lb-1 text-blue-1000 opacity-70 transition-colors',
            selectedDesign === WorkTypes.WEBFLOW_DESIGN &&
              'text-blue-700 opacity-100'
          )}
        >
          Webflow Design
        </Button>
        <Button
          onClick={() => setSelectedDesign(WorkTypes.FIGMA_DESIGN)}
          className={twMerge(
            'text-lb-1 text-blue-1000 opacity-70 transition-colors',
            selectedDesign === WorkTypes.FIGMA_DESIGN &&
              'text-blue-700 opacity-100'
          )}
        >
          Figma Design
        </Button>
      </div>
      <div className="grid grid-flow-row grid-cols-2 gap-y-16 gap-x-8">
        {ourWorksPreview
          .filter(({ type }) =>
            selectedDesign === WorkTypes.ALL ? true : type === selectedDesign
          )
          .map((work, index) => (
            <WorkPreviewCard {...work} key={index} />
          ))}
      </div>
    </>
  );
};
