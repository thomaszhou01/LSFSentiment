import apiBase from "./apiBase";

const URL = "test";

export async function getTest() {
  return await apiBase.get(URL);
}
