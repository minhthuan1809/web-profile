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

// gửi gmail
export async function sendGmailServer(
  name: string,
  email: string,
  title: string,
  message: string
) {
  const res = await fetch(`${import.meta.env.VITE_API}/send-gmail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, title, message }),
  });
  const data = await res.json();

  return data;
}

// skill
export async function renderSkill() {
  const res = await fetch(`${import.meta.env.VITE_API}/skill`);
  const data = await res.json();
  return data;
}

// projects
export async function renderProjects() {
  const res = await fetch(`${import.meta.env.VITE_API}/projects`);
  const data = await res.json();

  return data;
}
