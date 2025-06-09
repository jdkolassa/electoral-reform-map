/** @jsx jsx */
import { React, jsx, type AnimationMetaInfo, type AnimationSetting, AnimationDirection } from 'jimu-core';
interface OwnProps {
    effectSetting: AnimationSetting;
    metaInfos: AnimationMetaInfo[];
    onSettingChange: (setting: AnimationSetting) => void;
    isOneByOne?: boolean;
    isRoot?: boolean;
    previewEnabled?: boolean;
    onPreviewClicked?: () => void;
    formatMessage: (id: string) => string;
}
export declare class AnimationPart extends React.PureComponent<OwnProps> {
    onWidgetEffectTypeChanged: (e: any, value: any) => void;
    onDurationChange: (e: any) => void;
    onStartModeChange: (e: any) => void;
    onParentModeChange: (e: any) => void;
    onWidgetEffectDirectionChanged: (e: any) => void;
    createAnimationCard(metaInfo: AnimationMetaInfo, index: number): jsx.JSX.Element;
    chooseDirectionIcon(direction: AnimationDirection): any;
    createEffectDirectionChooser(directions: AnimationDirection[]): jsx.JSX.Element;
    getStyle(): import("jimu-core").SerializedStyles;
    render(): jsx.JSX.Element;
}
export {};
