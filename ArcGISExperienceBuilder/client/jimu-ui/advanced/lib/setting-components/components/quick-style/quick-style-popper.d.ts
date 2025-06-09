import { React } from 'jimu-core';
import { type SettingPopperProps } from './setting-popper';
export interface QuickStylePopperProps extends Omit<SettingPopperProps, 'onHeaderClose'> {
    floating?: boolean;
    onClose?: () => void;
}
export declare const QuickStylePopper: (props: QuickStylePopperProps) => React.JSX.Element;
