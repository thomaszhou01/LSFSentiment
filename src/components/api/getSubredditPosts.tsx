import apiBase from "./apiBase";

const URL = "getSubredditPosts";

export async function getSubredditPosts(
  subreddit: string,
  numPosts: string,
  type: string
) {
  const formData = new FormData();
  formData.append("subreddit", subreddit);
  formData.append("posts", numPosts.toString());
  formData.append("type", type);
  return await apiBase.post(URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
