// * This file will contain the apportionment functions
// * Each function is named after the type or specific method

import type { EDivisor, EQuotaType, FederalState } from "../config";

export function LargestRemainder(states: FederalState[], totalPop: number, totalSeats: number, quota: EQuotaType) {
    // DONE Add argumment or other logic to determine which quota (Hare, Droop, Imperiali) we're using

}

export function HighestAverages(states: FederalState[], totalPop: number, totalSeats: number, divisor: EDivisor) {
    // DONE Add argument or other logic to determine which divsior (d'Hondt, Saint-Lague) we're using
}

export function HuntingtonHill(states: FederalState[], totalPop: number, totalSeats: number) {
    // Step 1: In Huntington-Hill, all states receive 1 seat in order to avoid divide by zero errors.

    for (let state of states) {
        state.seats = 1;
    }

    let _remainingSeats = totalSeats - states.length

    // Step 2: Create a TypeScript object to hold every state and its current quotient

    const _workStates = states.map(s => {
        // May as well calculate the first quotient right here, while they all have 1 seat
        const _q = s.pop / Math.sqrt(2)

        return {
            ...s,
            quotient: _q
        }
    })

    // Step 3: Allocate seats by calculating geometric mean
    // [ ] Divide each state's pop (p) by D = sqrt(s(s+1)) (where s = seats the state already has)
    // [ ] Add 1 seat to the state with the highest quotient
    // [ ] Repeat until all seats have been apportioned

    const _nxtState = Object.entries(_workStates).reduce((max, current) => {
        return (current[1].quotient > max[1].quotient ? current : max)
    })

    // TODO: Finish this method
}