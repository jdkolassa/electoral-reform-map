import { FixedPosition, React } from 'jimu-core';
interface PositionSettingProps {
    'aria-label'?: string;
    value: FixedPosition;
    onChange: (value: FixedPosition) => void;
}
export declare const PositionSetting: (props: PositionSettingProps) => React.JSX.Element;
export {};
