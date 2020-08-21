import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears } from 'date-fns';

import { Container } from './styles';

type HeatmapValue = { date: Date; count: number };

const RandomCalendar = () => {
   const startDate = subYears(new Date(), 1);
   const endDate = new Date();

   const values: HeatmapValue[] = [];

   values.push({ date: new Date(), count: 3 });

   return (
      <Container>
         <div className="wrapper">
            <Heatmap
               startDate={startDate}
               endDate={endDate}
               values={values}
               gutterSize={3.5}
               classForValue={(item: HeatmapValue) => {
                  let clampledCount = 0;
                  if (item !== null) {
                     clampledCount = Math.max(item.count, 0);
                     clampledCount = Math.min(item.count, 4);
                  }
                  return `scale-${clampledCount}`;
               }}
               showWeekdayLabels
            />
         </div>

         <span>Random calendar ( do not represent actual data )</span>
      </Container>
   );
};

export default RandomCalendar;
