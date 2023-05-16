export const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw Error("Faild to fetch data");
  }
  const data = await res.json();
  return data;
};
