/** @jsx jsx */
import { jsx, type IMUtilityJson } from 'jimu-core';
interface Props {
    utility: IMUtilityJson;
    onChange: (utility: IMUtilityJson) => void;
    onRemove: (utility: IMUtilityJson) => void;
}
export declare function UtilityItem(props: Props): jsx.JSX.Element;
export {};
