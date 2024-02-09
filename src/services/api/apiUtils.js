async function getImageUrl(url){
        const res = await fetch(url);
        return res.url;
    }
export default getImageUrl;