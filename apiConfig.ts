let apiUrl: string;
let apiKey: string;
let imageUrl: string;

switch (process.env.NODE_ENV) {
  case "development":
    apiUrl = String(process.env.NEXT_PUBLIC_ABAS_API);
    apiKey = String(process.env.NEXT_PUBLIC_ABAS_KEY);
    imageUrl = String(process.env.NEXT_PUBLIC_ABAS_IMAGE_URL);
    break;

  case "production":
    apiUrl = String(process.env.NEXT_PUBLIC_ABAS_API);
    apiKey = String(process.env.NEXT_PUBLIC_ABAS_KEY);
    imageUrl = String(process.env.NEXT_PUBLIC_ABAS_IMAGE_URL);
    break;

  default: 
    apiUrl = "http://localhost:8080";
    apiKey = String(process.env.NEXT_PUBLIC_ABAS_KEY);
    imageUrl = String(process.env.NEXT_PUBLIC_ABAS_IMAGE_URL);
    break;
}

export { apiUrl, apiKey, imageUrl };
