import { type IMExpression, type ExpressionPart, type Expression, ExpressionFunctions, type PercentileParams } from '../types/expression';
import type { UseDataSource } from '../types/app-config';
import { type DuplicateContext } from '../types/common';
import type { ImmutableArray } from 'seamless-immutable';
export declare function generateFieldsForUseDataSourcesByExpressionParts(parts: ExpressionPart[] | ImmutableArray<ExpressionPart>, useDataSources: ImmutableArray<UseDataSource>): ImmutableArray<UseDataSource>;
export declare function getUseDataSourcesByExpressionParts(parts: ExpressionPart[] | ImmutableArray<ExpressionPart>): ImmutableArray<UseDataSource>;
export declare function mergeUseDataSources(u1?: ImmutableArray<UseDataSource>, u2?: ImmutableArray<UseDataSource>): ImmutableArray<UseDataSource>;
export declare function getWhetherExpressionValid(e: Expression | IMExpression): boolean;
export declare function getWhetherFieldInDs(dsId: string, jimuFieldName: string, alias: string): boolean;
export declare const isSingleStringExpression: (expression: Expression) => boolean;
export declare const getSingleStringExpressionText: (expression: Expression) => string;
export declare const getUseDataSourcesWithoutFields: (useDataSources: ImmutableArray<UseDataSource>) => ImmutableArray<UseDataSource>;
/**
 * Check whether has fields in every useDataSource
 * @param useDataSources
 */
export declare const whetherHasFieldsInUseDataSources: (useDataSources: ImmutableArray<UseDataSource>) => boolean;
export declare function getDataSourceIdsFromExpression(expression: IMExpression): string[];
export declare function getPercentileParams(paramParts: ExpressionPart[], func: ExpressionFunctions): PercentileParams;
export declare function replaceDataSourceId(expression: IMExpression | Expression, oldDsId: string, newDsId: string): Expression;
export declare function mapExpression(contentMap: DuplicateContext, expression: IMExpression): {
    isChanged: boolean;
    expression: Expression;
};
