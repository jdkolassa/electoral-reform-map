/** @jsx jsx */
import { React, jsx } from 'jimu-core';
export interface CopyButtonProps {
    text: string;
    onCopy?: (text: any, result: any) => void;
    disabled?: boolean;
    className?: string;
}
export declare const _CopyButton: React.MemoExoticComponent<(props: CopyButtonProps) => jsx.JSX.Element>;
/**
 *  A react component for copy text to browser's clipboard.
 */
export declare const CopyButton: React.ForwardRefExoticComponent<Pick<CopyButtonProps, keyof CopyButtonProps> & {
    theme?: import("jimu-core").IMThemeVariables;
}>;
export default CopyButton;
