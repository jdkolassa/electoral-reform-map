/** @jsx jsx */
import { React, jsx, ReactRedux, ScreenTransitionType } from 'jimu-core';
import type { LayoutItemSettingProps } from '../../builder/types';
interface StateToProps {
    transitionType: ScreenTransitionType;
    panelTransitionType: ScreenTransitionType;
}
interface State {
    showSidePanel: boolean;
}
declare class ScreenGroupSetting extends React.PureComponent<LayoutItemSettingProps & StateToProps, State> {
    sidePopperTrigger: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    onTransitionTypeChange: (type: ScreenTransitionType) => void;
    onPanelTransitionTypeChange: (type: ScreenTransitionType) => void;
    getAnimBoxStyle(): import("jimu-core").SerializedStyles;
    getSidePopperStyle(): import("jimu-core").SerializedStyles;
    toggleSidePanel: () => void;
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof ScreenGroupSetting, {
    layoutId: string;
    additionalInfo?: any;
    style: any;
    ref?: React.LegacyRef<ScreenGroupSetting>;
    key?: React.Key | null | undefined;
    formatMessage: (id: string) => string;
    supportAutoSize?: boolean;
    onSettingChange: (layoutInfo: import("jimu-core").LayoutInfo, setting: any) => void;
    layoutItem: import("jimu-core").LayoutItemJson;
    isLockLayout: boolean;
    onStyleChange: (layoutInfo: import("jimu-core").LayoutInfo, style: any) => void;
    onPosChange: (layoutInfo: import("jimu-core").LayoutInfo, bbox: import("jimu-core").BoundingBox) => void;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
export default _default;
