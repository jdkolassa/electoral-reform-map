import { type IMThemeVariables, React } from 'jimu-core';
import { type IconPickerProps } from 'jimu-ui/advanced/resource-selector';
export interface NavIconPickerProps extends Omit<IconPickerProps, 'groups' | 'customIcons'> {
    size?: number;
    theme2?: IMThemeVariables;
}
export declare const NavIconPicker: (props: NavIconPickerProps) => React.JSX.Element;
