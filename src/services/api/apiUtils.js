export async function getImageUrl(url){
        const res = await fetch(url);
        return res.url;
    }

export async function getjson(url){
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
