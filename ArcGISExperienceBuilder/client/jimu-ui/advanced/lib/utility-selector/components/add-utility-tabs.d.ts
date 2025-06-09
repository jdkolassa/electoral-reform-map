/** @jsx jsx */
import { jsx, type IMUtilityJson, type IMUtilitiesJson, type ImmutableArray } from 'jimu-core';
interface Props {
    utilities: IMUtilitiesJson;
    onChange: (utilities: IMUtilitiesJson) => void;
    onBatchDone?: () => void;
    onBatchUpdate?: (utilityJsons: ImmutableArray<IMUtilityJson>) => void;
    immediate?: boolean;
    batchUtilityJsons?: ImmutableArray<IMUtilityJson>;
    isMultiple?: boolean;
}
export declare function AddUtilityTabs(props: Props): jsx.JSX.Element;
export {};
