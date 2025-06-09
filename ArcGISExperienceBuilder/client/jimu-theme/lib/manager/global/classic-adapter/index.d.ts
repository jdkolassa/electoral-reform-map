import { React, type ThemeVariable } from 'jimu-core';
interface ClassicThemeAdapterProps {
    uri: string;
    theme: ThemeVariable;
}
export declare const ClassicThemeAdapter: (props: ClassicThemeAdapterProps) => React.JSX.Element;
export { getClassicVarsMapping } from './css-vars';
