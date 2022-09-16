export async function fetchPostJSON(url: string, data?: {}) {
  try {
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data || {}),
    });
    return await res.json();
  } catch (error) {
    // if (error instanceof Error) {
    //   throw new Error(error.message);
    // }
    // throw error;
    console.log(error);
  }
}
