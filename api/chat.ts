export interface ChatResponse { text: string }

export async function sendChat(input: string): Promise<ChatResponse> {
  const res = await fetch('/.netlify/functions/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input })
  });
  if (!res.ok) throw new Error(`Backend error: ${res.status}`);
  return res.json();
}
