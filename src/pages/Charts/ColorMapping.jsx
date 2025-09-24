import React from 'react';
import {ChartComponent, SeriesCollectionDirective, SeriesDirective,Tooltip,Legend, Inject,
  ColumnSeries, Category, RangeColorSettingsDirective, RangeColorSettingDirective
} from '@syncfusion/ej2-react-charts';
import {colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping} from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';
import {Header} from '../../components';

const ColorMapping = () => {
  const {currentMode} = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-[#33373E] rounded-3xl">
            <Header  category="Color Mapping" title="INDIA CLIMATE - WEATHER BY MONTH" />
           <ChartComponent
                id="charts"
                primaryXAxis={ColorMappingPrimaryXAxis}
                primaryYAxis={ColorMappingPrimaryYAxis}
                chartArea={{border : {width: 0} }}
                legendSettings={{ mode: 'Range', background: "white"}}
                tooltip={{enable: true}}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
           >
                <Inject services={[ColumnSeries, Tooltip, Category, Legend]}/>
                <SeriesCollectionDirective>
                   <SeriesDirective
                       dataSource={colorMappingData[0]}
                       name="INDIA"
                       xName="x"
                       yName="y"
                       type="Column"
                       cornerRadius={{
                          topLeft: 10,
                          topRight: 10,
                       }}
                   />
                </SeriesCollectionDirective>
                <RangeColorSettingsDirective>
                       {rangeColorMapping.map((item,index) =>
                          <RangeColorSettingDirective key={index} {...item}/>
                      )}

                </RangeColorSettingsDirective>
           </ChartComponent>
    </div>
  )
}

export default ColorMapping