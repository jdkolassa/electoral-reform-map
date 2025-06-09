/** @jsx jsx */
import { React, jsx, type BrowserSizeMode } from 'jimu-core';
interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    layoutId: string;
    layoutItemId: string;
    sizemode: BrowserSizeMode;
    onSyncChange: (placeholderId: number) => void;
}
export declare function PlaceholderSync(props: Props): jsx.JSX.Element;
export {};
