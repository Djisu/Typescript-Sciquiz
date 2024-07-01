
export interface DifficultyLevel {
    _id: string;
    difficulty_level: string;
  }
  
  export interface DifficultyLevelState {
    difficultyLevels: DifficultyLevel[]; // Array of difficulty levels
    loading: boolean;
    error?: string | null;
  }
  