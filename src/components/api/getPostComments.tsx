import apiBase from "./apiBase";

const URL = "getPostComments";

export async function getPostComments(postId: string, depth: number | "") {
  const formData = new FormData();
  formData.append("postId", postId);
  formData.append("depth", depth.toString());
  return await apiBase.post(URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
