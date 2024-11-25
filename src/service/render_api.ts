export async function renderNavbar() {
  const res = await fetch(`${import.meta.env.VITE_API}/navbar`);
  const data = await res.json();
  return data;
}

export async function renderHeader() {
  const res = await fetch(`${import.meta.env.VITE_API}/header`);
  const data = await res.json();
  return data;
}

export async function renderBiography() {
  const res = await fetch(`${import.meta.env.VITE_API}/introduce`);
  const data = await res.json();
  return data;
}
