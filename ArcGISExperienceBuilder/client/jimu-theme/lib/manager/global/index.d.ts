import { React } from 'jimu-core';
import type { ThemeModule } from '../theme-module/type';
interface GlobalStyleProps {
    isRTL?: boolean;
    module: ThemeModule;
    module2?: ThemeModule;
}
export declare const GlobalStyles: (props: GlobalStyleProps) => React.JSX.Element;
export * from './font-loader';
export * from './constant';
export { getClassicVarsMapping } from './classic-adapter';
