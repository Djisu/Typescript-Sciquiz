export interface ScoreCandidate {
    questionCount: number
    correctAnswers: number
    usedQuestionsLength: number
    testCount: number
  }

  export interface ScoreCandidateState {
    scoreCandidate: ScoreCandidate
    loading: boolean
    error?: null | string
  }