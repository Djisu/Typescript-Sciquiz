export interface IOverAllScoreCandidateItem {
    topic: string;
    topicCount: number;
    correct: number;
    used: number;
    wrong: number;
    userId: string;
  }

export interface OverAllScoreCandidateItemState {
    overAllScoreCandidateItem: IOverAllScoreCandidateItem[]
    loading: boolean
    error: null | string
}