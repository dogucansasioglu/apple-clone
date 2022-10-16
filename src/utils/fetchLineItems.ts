export const fetchLineItems = async (sessionId: string) => {
  // get session from stripe using the session id
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSession?sessionId=${sessionId}`
  );

  // if there was an error, return
  if (!res.ok) return;

  // return products
  const data = await res.json();
  const products = data.session.data;

  return products;
};
