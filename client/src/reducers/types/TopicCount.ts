export interface ITopicCount {
    topic: string
    count: number
  }
  
  export interface TopicCountState {
    topicCount: ITopicCount | null
    loading: boolean
    error?: any
  }
  
  export interface TopicCountsState {
    topicCounts: ITopicCount[]
    loading: boolean
    error?: any
  }