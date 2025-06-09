/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import type { JimuMapView } from 'jimu-arcgis';
export interface LayoutProps {
    jimuMapView: JimuMapView;
    operatorWidgetId: string;
    disableSymbolSelector: boolean;
    isAutoWidth: boolean;
    isAutoHeight: boolean;
    popperPositionRef: Element;
}
export declare const PanelLayout: React.MemoExoticComponent<(props: LayoutProps) => jsx.JSX.Element>;
