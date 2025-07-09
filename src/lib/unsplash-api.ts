
const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;


if(!UNSPLASH_ACCESS_KEY) {
    throw new Error("A chave de acesso do Unsplash não foi definida.")
}

const BASE_URL =process.env.NEXT_PUBLIC_BASE_URL;


export async function fetchRandomPhotos(count=30) {
    const res = await fetch(`${BASE_URL}/photos/random?count=${count}`,{
        headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
        },
        next: {
            revalidate: 3600,
        }
    });

    if(!res.ok) {
        throw new Error("Erro na busca aleatória")
    }

    return await res.json();
}