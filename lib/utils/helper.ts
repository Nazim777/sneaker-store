export const getMultipleImageUrlForProduct = (images: string[]): string[] => {
  if (!images || images.length === 0) return ["/images/image-hero.png"];
  return images
    .map((url) => {
      try {
        const cleaned = url.replace(/[\[\]"]/g, "").trim();
        if (cleaned.startsWith("http")) return cleaned;
      } catch {
        /* empty */
      }
      return "/images/image-hero.png";
    })
    .filter(Boolean);
};

export const getImageUrlForProduct = (images: string[]): string => {
  if (!images || images.length === 0) return "/images/image-hero.png";
  try {
    const url = images[0].replace(/[\[\]"]/g, "").trim();
    if (url.startsWith("http")) return url;
  } catch {}
  return "/images/image-hero.png";
};

export const getImageUrlForCategory = (url: string): string => {
  try {
    const cleaned = url?.replace(/[\[\]"]/g, "").trim();
    if (cleaned?.startsWith("http")) return cleaned;
  } catch {}
  return "/images/placeholder-shoe.png";
};
