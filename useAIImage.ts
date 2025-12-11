import { useState, useEffect } from 'react';

// Hardcoded high-quality Unsplash IDs for specific service types to ensure relevance
const getStaticImage = (prompt: string): string => {
  const p = prompt.toLowerCase();
  
  // Specific Service Mappings
  if (p.includes("plumbing")) {
      return "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2000&auto=format&fit=crop"; // Copper pipes
  }
  if (p.includes("electrical") || p.includes("wiring")) {
      return "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2000&auto=format&fit=crop"; // Circuit board/wiring
  }
  if (p.includes("painting")) {
      return "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2000&auto=format&fit=crop"; // Painter wall
  }
  if (p.includes("cleaning")) {
      return "https://images.unsplash.com/photo-1581578731117-104f2a417954?q=80&w=2000&auto=format&fit=crop"; // Cleaning
  }
  if (p.includes("material") || p.includes("store") || p.includes("cement")) {
      return "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop"; // Warehouse/Bricks
  }
  if (p.includes("manpower") || p.includes("worker")) {
      return "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"; // Construction Workers
  }
  if (p.includes("interior") || p.includes("design")) {
      return "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"; // Luxury Interior
  }
  if (p.includes("construction") || p.includes("turnkey")) {
      return "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"; // Construction Site
  }

  // Generic Fallbacks
  if (p.includes("residential") || p.includes("villa")) return "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=2000&auto=format&fit=crop";
  if (p.includes("commercial")) return "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop";
  
  return "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop";
};

export const useAIImage = (prompt: string, autoLoad = false) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    // Simulate slight async behavior
    setTimeout(() => {
        const url = getStaticImage(prompt);
        setImageUrl(url);
        setLoading(false);
    }, 50);
  };

  useEffect(() => {
    if (autoLoad) generate();
  }, [prompt]);

  return { imageUrl, loading, generate };
};
