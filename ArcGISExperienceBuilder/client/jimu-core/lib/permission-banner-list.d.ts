import { jsx } from '@emotion/react';
import { type IntlShape } from 'react-intl';
import type { IMThemeVariables } from './types/theme';
export interface BannerListProps {
    noPermissionResourceChangedFlag: string;
    theme: IMThemeVariables;
    intl: IntlShape;
}
export declare function PermissionBannerList(props: BannerListProps): jsx.JSX.Element;
