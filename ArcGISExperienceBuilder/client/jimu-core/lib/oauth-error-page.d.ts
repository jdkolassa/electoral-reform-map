import { jsx } from '@emotion/react';
import type { IMThemeVariables } from './types/theme';
import type { IntlShape } from 'react-intl';
export interface OAuthErrorPageProps {
    oauthErrorCode: string;
    fromUrl: string;
    intl: IntlShape;
    theme: IMThemeVariables;
}
export declare function OAuthErrorPage(props: OAuthErrorPageProps): jsx.JSX.Element;
