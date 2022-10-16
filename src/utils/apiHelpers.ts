export async function fetchPostJSON(
  url: string,
  data?: Record<string, unknown>
) {
  // fetch post request
  try {
    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data || {}),
    });
    return await res.json();
  } catch (error) {
    // if there was an error, log the error
    console.log(error);
  }
}
