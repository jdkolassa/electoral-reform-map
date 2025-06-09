/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import type { JimuMapView } from 'jimu-arcgis';
import { type JimuDrawUIOptions, Arrangement } from './constraints';
export type { JimuDrawUIOptions };
export { Arrangement };
export interface LayoutProps {
    jimuMapView: JimuMapView;
    operatorWidgetId: string;
    uiOptions: JimuDrawUIOptions;
}
export declare const Layout: React.MemoExoticComponent<(props: LayoutProps) => jsx.JSX.Element>;
