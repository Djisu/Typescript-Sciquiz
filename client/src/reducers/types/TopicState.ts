export interface Topic {
    _id: string
    topic: string
  }

  export interface TopicState {
    topic: Topic;
    loading: boolean;
    error?: any;
  }
  
  export interface TopicsState {
    topics: Topic[];
    loading: boolean;
    error?: any;
  }