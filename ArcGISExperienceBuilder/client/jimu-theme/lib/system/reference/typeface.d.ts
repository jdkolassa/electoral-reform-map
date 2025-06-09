export interface FontStyle {
    fontFamily: React.CSSProperties['fontFamily'];
    fontSize: number;
    fontWeightLight: React.CSSProperties['fontWeight'];
    fontWeightRegular: React.CSSProperties['fontWeight'];
    fontWeightMedium: React.CSSProperties['fontWeight'];
    fontWeightBold: React.CSSProperties['fontWeight'];
}
export interface ReferenceTypeface extends FontStyle {
    htmlFontSize: string;
}
export type ReferenceTypefaceOptions = Partial<ReferenceTypeface>;
export declare const createReferenceTypeface: (options: ReferenceTypefaceOptions) => ReferenceTypeface;
