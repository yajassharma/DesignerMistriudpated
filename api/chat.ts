export interface ChatResponse { text: string }

export async function sendChat(input: string): Promise<ChatResponse> {
  const isDev = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV;
  const base = isDev ? 'http://localhost:8787' : '';
  const endpoint = isDev ? `${base}/chat` : '/.netlify/functions/chat';

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input })
  });
  if (!res.ok) throw new Error(`Backend error: ${res.status}`);
  return res.json();
}
