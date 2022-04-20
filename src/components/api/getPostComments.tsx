import apiBase from "./apiBase";

const URL = "getPostComments";

export async function getPostComments(postId: string) {
  const formData = new FormData();
  formData.append("postId", postId);
  return await apiBase.post(URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
