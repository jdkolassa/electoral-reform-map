/** @jsx jsx */
import { jsx, type BrowserSizeMode, type IMAppConfig } from 'jimu-core';
import type { SettingChangeFunction } from 'jimu-for-builder';
import { CardLayout, type Status } from './type';
interface LayoutSettingProps {
    id: string;
    onSettingChange: SettingChangeFunction;
    cardLayout: CardLayout;
    status: Status;
    browserSizeMode: BrowserSizeMode;
    mainSizeMode: BrowserSizeMode;
    layouts: any;
    config: any;
    appConfig: IMAppConfig;
    isCardWidget?: boolean;
}
export declare const CardLayoutSetting: (props: LayoutSettingProps) => jsx.JSX.Element;
export {};
