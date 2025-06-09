import { React } from 'jimu-core';
import BaseWidgetSetting from './base-widget-setting';
import type { AllWidgetSettingProps } from './props';
export default class Setting extends BaseWidgetSetting<AllWidgetSettingProps<any>, any> {
    render(): React.JSX.Element;
}
