export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Stream {
  title: string;
  vid: string;
  tags: [string];
  playedAt: Date;
}
