import axios from "axios";

export interface PostResponse {
  success: boolean;
  postUrl: string;
  postId: string;
}

export interface Tweet {
  id: string;
  text: string;
  createdAt: string;
}

export interface TimelineResponse {
  success: boolean;
  tweets: Tweet[];
}

export const postTweet = async (
  text: string,
  images: string[]
): Promise<PostResponse> => {
  // Real implementation:
  try {
    const response = await axios.post("/api/post", { text, images });
    return response.data;
  } catch (error: unknown) {
    const err = error as any;
    console.error("API Error:", err);
    throw err.response?.data?.error || new Error("Failed to post");
  }
};

export const getTimeline = async (): Promise<Tweet[]> => {
  try {
    const response = await axios.get<TimelineResponse>("/api/timeline");
    return response.data.tweets;
  } catch (error: unknown) {
    console.error("Failed to fetch timeline:", error);
    return [];
  }
};
