/** @jsx jsx */
import { React, type IMDataSourceJson, AllDataSourceTypes, type ImmutableArray } from 'jimu-core';
/**
 * The ExternalDataSourceSelector props
 */
export interface ExternalDataSourceSelectorProps {
    portalUrl: string;
    isMultiple?: boolean;
    types?: ImmutableArray<AllDataSourceTypes>;
    onSelect?: (dsJsons: IMDataSourceJson[]) => void;
    onRemove?: (dsJsons: IMDataSourceJson[]) => void;
    onCancel?: () => void;
    onFinish?: (dsJsons: IMDataSourceJson[]) => void;
    className?: string;
}
export declare const ExternalDataSourceSelector: React.FC<import("react-intl").WithIntlProps<ExternalDataSourceSelectorProps>> & {
    WrappedComponent: React.ComponentType<ExternalDataSourceSelectorProps>;
};
