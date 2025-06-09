import { React, Immutable, type FixedPositionSizeJson } from 'jimu-core';
interface FixedPositionSizeProps {
    fixedPositionSizeJson: Immutable.ImmutableObject<FixedPositionSizeJson>;
    onChange: (fixedPositionSizeJson: Immutable.ImmutableObject<FixedPositionSizeJson>, changeKey: keyof FixedPositionSizeJson) => void;
}
export declare const FixedPositionSize: (props: FixedPositionSizeProps) => React.JSX.Element;
export {};
