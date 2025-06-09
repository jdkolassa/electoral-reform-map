import { React, type ImmutableObject } from 'jimu-core';
import { type WebChart, type ArcgisChartProps, type WebMapWebChart } from 'arcgis-charts-components';
import { type UnprivilegedChart } from './utils';
export interface ChartProps extends Omit<ArcgisChartProps, 'config'> {
    /**
     * Defines the class names added to the component.
     */
    className?: string;
    /**
     * ArcGIS Chart Specification that defines the chart component
     */
    config?: WebMapWebChart | WebChart | ImmutableObject<WebMapWebChart> | ImmutableObject<WebChart>;
}
export declare const Chart: React.MemoExoticComponent<React.ForwardRefExoticComponent<ChartProps & React.RefAttributes<UnprivilegedChart>>>;
export * from './utils';
export * from 'arcgis-charts-components';
