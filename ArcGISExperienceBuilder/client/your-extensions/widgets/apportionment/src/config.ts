import type { ImmutableObject } from "jimu-core";

export enum EModelType {
    AVERAGES = "HIGHEST_AVERAGES",
    REMAINDER = "LARGEST_REMAINDER"
}

export interface FederalState {
    name: string
    id: string
    pop: number
    seats: number
}

export interface IParty {
    name: string
    id: number
    color: string
}

export interface IStateResult {
    state: FederalState,
    party: IParty,
    votes: number
}

export interface IProportionalElection {
    results: Array<IStateResult>
}

export interface ApportionmentModel {
    name: string
    mode: EModelType
    desc?: string
    criterion?: string
}

interface Config {
    models: ApportionmentModel[]
}

export type IMConfig = ImmutableObject<Config>