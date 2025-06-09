import { React } from 'jimu-core';
import { BaseTool, type BaseToolProps, type IconType } from '../layout/base/base-tool';
type MeasureType = (__esri.DistanceMeasurement2D | __esri.AreaMeasurement2D | __esri.DirectLineMeasurement3D | __esri.AreaMeasurement3D);
interface States {
    activeTabIndex: number;
    measureInstances: MeasureType[];
}
export default class Measure extends BaseTool<BaseToolProps, States> {
    activeTabRef: HTMLElement;
    toolName: string;
    measureModules2D: {
        name: string;
        title: string;
        path: string;
        src: any;
    }[];
    measureModules3D: {
        name: string;
        title: string;
        path: string;
        src: any;
    }[];
    constructor(props: any);
    getTitle(): string;
    getIcon(): IconType;
    focusDefaultElement(): void;
    destroy(): void;
    handleMeasurceInstanceCreated: (measurceInstance: MeasureType, activeTabIndex: number) => void;
    onTabClick: (index: number) => void;
    handleKeyDown: (e: React.KeyboardEvent<any>, index: number) => void;
    onClosePanel: () => void;
    onShowPanel: () => void;
    getExpandPanel(): React.JSX.Element;
}
export {};
