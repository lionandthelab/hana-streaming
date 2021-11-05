export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Stream {
  url: string;
  title: string;
  tags: [string];
  thumbnailUrl: string;
  date: Date;
}

export interface YoutubeSnippet {
  publishedAt: Date,
  channelId: string,
  title: string,
  description: string,
  thumbnails: {
    maxres: {
      url: string,
      width: number,
      height: number
    }
  }
}
