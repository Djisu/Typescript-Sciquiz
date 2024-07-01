export interface IEachTopicScore {
    trueAnswers: number;
    totalQuestions: number;
    topic: string;
  }; //
  
  export interface IEachTopicScoreState {
    eachTopicScore: IEachTopicScore | null
    loading: boolean;
    error?: any;
  }
  
  export interface IEachTopicsScoreState {
    eachTopicsScore: IEachTopicScore[]
    loading: boolean;
    error?: any;
  }