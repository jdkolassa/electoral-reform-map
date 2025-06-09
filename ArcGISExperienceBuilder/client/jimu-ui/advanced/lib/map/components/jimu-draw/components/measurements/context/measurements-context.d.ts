import { React } from 'jimu-core';
import type { MeasurementsUnitsInfo, MeasurementsRuntimeInfo } from '../constraints';
export interface MeasurementsContextStates {
    measurementsRuntimeInfo: MeasurementsRuntimeInfo;
    measurementsUnitsInfos: MeasurementsUnitsInfo[];
}
interface MeasurementsContextAction {
    type: string;
    payload: any;
}
export declare const actionType: {
    MeasurementsRuntimeInfoChanged: string;
    MeasurementsUnitsInfosChanged: string;
};
export declare const MeasurementsRuntimeInfoChangedAction: (measurementsRuntimeInfo: MeasurementsRuntimeInfo) => {
    type: string;
    payload: MeasurementsRuntimeInfo;
};
export declare const MeasurementsUnitsInfosChangedAction: (measurementsUnitsInfos: MeasurementsUnitsInfo[]) => {
    type: string;
    payload: MeasurementsUnitsInfo[];
};
export declare const init: (MeasurementsUnitsInfos: MeasurementsUnitsInfo[]) => MeasurementsContextStates;
export declare const reducer: (state: MeasurementsContextStates, action: MeasurementsContextAction) => {
    measurementsRuntimeInfo: any;
    measurementsUnitsInfos: MeasurementsUnitsInfo[];
} | {
    measurementsUnitsInfos: any;
    measurementsRuntimeInfo: MeasurementsRuntimeInfo;
};
export declare const MeasurementsContext: React.Context<{
    measurementsContextStates: MeasurementsContextStates;
    dispatchMeasurementsActions: React.Dispatch<MeasurementsContextAction>;
}>;
export declare const MeasurementsContextProvider: (props: any) => React.JSX.Element;
export {};
