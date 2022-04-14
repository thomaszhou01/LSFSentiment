import apiBase from "./apiBase";

const URL = "getSubredditPosts";

export async function getSubredditPosts(
  subreddit: string,
  numPosts: number | ""
) {
  const formData = new FormData();
  formData.append("subreddit", subreddit);
  formData.append("posts", numPosts.toString());
  return await apiBase.post(URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
