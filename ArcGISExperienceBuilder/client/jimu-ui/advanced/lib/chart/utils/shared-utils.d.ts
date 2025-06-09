import { WebChartTypes, type WebChartSeries, type CategoryFormatOptions } from 'arcgis-charts-components';
export type ChartTypes = Extract<WebChartTypes, typeof WebChartTypes.BarSeries | typeof WebChartTypes.BoxPlotSeries | typeof WebChartTypes.HistogramSeries | typeof WebChartTypes.ScatterSeries | typeof WebChartTypes.LineSeries | typeof WebChartTypes.PieSeries | typeof WebChartTypes.GaugeSeries | typeof WebChartTypes.ComboLineAndBarSeries | typeof WebChartTypes.RadarSeries>;
export declare enum SelectionSource {
    SelectionByClick = "SelectionByClick",
    SelectionByRange = "SelectionByRange",
    ProgrammaticSelection = "ProgrammaticSelection",
    ClearSelection = "ClearSelection"
}
export declare enum LimitBehavior {
    Reject = "reject",
    RenderUpToTheLimit = "renderUpToTheLimit"
}
export declare enum ActionMode {
    MonoSelection = "monoSelection",
    MultiSelection = "multiSelection",
    MultiSelectionWithCtrlKey = "multiSelectionWithCtrlKey",
    Zoom = "zoom",
    None = "none"
}
export declare enum DataWarningKeywords {
    BadData = "badData",
    EmptyDataSet = "emptyDataSet",
    HistogramEmptyField = "histogramEmptyField",
    BarElementExceedsLimit = "barElementExceedsLimit",
    LineChartExceedsLimit = "lineChartExceedsLimit",
    BoxPlotExceedsLimit = "boxPlotExceedsLimit",
    BoxPlotOutliersExceedsLimit = "boxPlotOutliersExceedsLimit",
    PieChartExceedsLimit = "pieChartExceedsLimit",
    GaugeExceedsLimit = "gaugeExceedsLimit",
    PieChartMixOfNegativePositiveSlices = "PieChartMixOfNegativePositiveSlices",
    NegativeValueInSqrtCalculation = "negativeValueInSqrtCalculation",
    NegativeValueInLogCalculation = "negativeValueInLogCalculation",
    NegativeValueInXAxisLogScale = "negativeValueInXAxisLogScale",
    NegativeValueInYAxisLogScale = "negativeValueInYAxisLogScale"
}
/**
 * Getting the type of a series. If the input parameters are incorrect (empty array of series, unknown index...) the function returns `undefined`
 * @param chartSeries The array of chart's series
 * @param seriesIndex An index to get a specific series' type. If no index is provided the first series' type (chartSeries[0]) is returned
 */
export declare function getSeriesType(chartSeries: WebChartSeries[] | undefined, seriesIndex?: number): ChartTypes | undefined;
export declare function getDefaultCategoryFormat(): CategoryFormatOptions;
/**
 * Escapes any single quote in the input string with a single quote for SQL.
 * For example: Cote d'Ivoire -> Cote d''Ivoire
 * @param string input string to replace for any special characters.
 */
export declare function escapeSQLString(string: string): string;
/**
 * Normalizes a string by
 *   - trimming off white spaces
 *   - if the value is a string and keepSurroundingQuotes is not true: stripping ' (single inverted comma), if present on both sides
 *   - if escape is true (or undefined): escaping special characters like ", \, /.
 * E.g.:
 * "'alpha'" => "alpha"
 * "'alpha" => No change
 * "alpha'" => No change
 * "alp'ha'" => alp''ha
 * "  'alpha'" => "alpha"
 * "alp"\/ha" => "alp\"\\\/ha"
 * @param value
 */
export declare function normalizeString(props: {
    value: string;
    keepSurroundingQuotes?: boolean;
    escape?: boolean;
}): string;
/**
 * Extract the value from equality-where clauses like `field = 'some_value'`.
 * Normalize or escape single quotes in the returned value according to the `normalize` param value.
 * If normalize is undefined then normalize the returned value.
 * @param props
 */
export declare function getSplitByValue(props: {
    where: string | undefined;
    normalize?: boolean;
    keepSurroundingQuotes?: boolean;
    escape?: boolean;
}): string | number | null;
/**
 * Extract the field name from equality-where clauses like `field = 'some_value'`.
 * This field is actually stored in each series where clause.
 * TODO: do we want to enforce the test by seeing if the extracted field is part of the feature layer list of fields?
 * E.g.:
 * "field = 'some_value'" => "field"
 * "field > 'some_value'" => ""
 * @param where
 * @param normalize
 */
export declare function getSplitByField(where: string | undefined, normalize?: boolean): string;
