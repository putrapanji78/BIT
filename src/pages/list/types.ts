export interface IList {
    id: number
    name: string;
    province:{
        id: string
        name: string
    }
   
    status: string;
  }
  
export interface ListsState {
    lists: IList[];
  }