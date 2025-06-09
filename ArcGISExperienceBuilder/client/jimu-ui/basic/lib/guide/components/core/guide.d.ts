import { React, type IntlShape, type WidgetJson, ReactRedux, type SectionJson } from 'jimu-core';
import { type Step, type Steps, type ConditionalStepIndexes, type StepOnChangeCallBackProps } from '../../types';
export interface GuideProps {
    /**
     * The steps of the guide.
     */
    steps: Steps;
    /**
     * Sets the index of the current step.
     */
    stepIndex?: number;
    /**
     * Run/stop the guide.
     */
    run?: boolean;
    /**
     * Sets the index(es) of the active sub step within conditional steps.
     * The default index for a conditional step is 0.
     */
    conditionalStepIndexes?: ConditionalStepIndexes;
    /**
     * Callback when the step status has changed.
     */
    onStepChange?: (data: StepOnChangeCallBackProps) => void;
    /**
     * Fires when the required action in a step is triggered.
     */
    onActionTriggered?: (e: any, step: Step, index: number) => void;
    /**
     * Class name(s) applied to the component.
     */
    className?: string;
    /**
     * Other parameters required by the guide.
     */
    params?: any;
    /**
     * The Json object of the widget that is being targeted at by the guide.
     */
    widgetJson?: WidgetJson;
    /**
     * The Json object of the section that is being targeted at by the guide.
     */
    sectionJson?: SectionJson;
    /**
     * Indicates whether the guide is injected in another guide as a step.
     */
    isInjected?: boolean;
    /**
     * Indicates whether the guide is disabled.
     */
    disabled?: boolean;
    /**
     * The footer navigation or other element of the guide.
     */
    footerNav?: string | React.JSX.Element;
}
interface ExtraProps {
    intl?: IntlShape;
}
export declare const GuideComponent: ReactRedux.ConnectedComponent<React.FC<import("react-intl").WithIntlProps<GuideProps & ExtraProps>> & {
    WrappedComponent: React.ComponentType<GuideProps & ExtraProps>;
}, {
    disabled?: boolean;
    className?: string;
    forwardedRef?: React.Ref<any>;
    params?: any;
    widgetJson?: WidgetJson;
    steps: Steps;
    stepIndex?: number;
    run?: boolean;
    isInjected?: boolean;
    onStepChange?: (data: StepOnChangeCallBackProps) => void;
    conditionalStepIndexes?: ConditionalStepIndexes;
    onActionTriggered?: (e: any, step: Step, index: number) => void;
    sectionJson?: SectionJson;
    footerNav?: string | React.JSX.Element;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
export {};
