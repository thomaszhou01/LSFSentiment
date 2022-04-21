import apiBase from "./apiBase";

const URL = "getTwitchClip";

export async function getTwitchClip(clipLink: string) {
  const formData = new FormData();
  formData.append("clipId", clipLink);
  return await apiBase.post(URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
