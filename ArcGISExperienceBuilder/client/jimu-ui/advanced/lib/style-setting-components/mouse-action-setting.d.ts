/** @jsx jsx */
import { jsx, HoverType } from 'jimu-core';
interface Props {
    type: HoverType;
    setting: any;
    onChange: (hoverSetting: any) => void;
    onPreviewClick: () => void;
}
export declare function MouseActionSetting(props: Props): jsx.JSX.Element;
export {};
