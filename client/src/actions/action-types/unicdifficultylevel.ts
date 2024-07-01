import ActionType from ".";
import { Action } from "redux";

export interface DifficultyLevel {
    level: string
}

export interface UnicDifficultyLevelRequest extends Action<ActionType.UNIC_DIFFICULTY_LEVEL_REQUEST> {
    payload: string
}

export interface UnicDifficultyLevelSuccess extends Action<ActionType.UNIC_DIFFICULTY_LEVEL_SUCCESS> {
    payload: DifficultyLevel
}

export interface UnicDifficultyLevelFail extends Action<ActionType.UNIC_DIFFICULTY_LEVEL_FAIL> {
    payload: string
}

export interface UnicDifficultyLevelLoaded extends Action<ActionType.UNIC_DIFFICULTY_LEVEL_LOADED> {
    payload: DifficultyLevel
}

export type UnicDifficultyLevelAction = UnicDifficultyLevelRequest | UnicDifficultyLevelSuccess | UnicDifficultyLevelFail
| UnicDifficultyLevelLoaded