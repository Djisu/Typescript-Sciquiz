import ActionType from ".";
import { Action } from "redux";

interface DifficultyLevel {
    _id: string;
    level: string;
  }

export interface DifficultyLevelRequest extends Action<ActionType.DIFFICULTY_LEVEL_REQUEST> {
    payload: string
}

export interface DifficultyLevelSuccess extends Action<ActionType.DIFFICULTY_LEVEL_SUCCESS> {
    payload: string
}

export interface DifficultyLevelFail extends Action<ActionType.DIFFICULTY_LEVEL_FAIL> {
    payload: string
}

export interface AddDifficultyLevel extends Action<ActionType.ADD_DIFFICULTY_LEVEL> {
    payload: string
}

export interface DifficultyLevelLoaded extends Action<ActionType.DIFFICULTY_LEVEL_LOADED> {
    payload: DifficultyLevel
}

export type DifficultyLevelAction = DifficultyLevelRequest | DifficultyLevelSuccess | DifficultyLevelFail
| AddDifficultyLevel | DifficultyLevelLoaded 

//


