import getImageUrl from "./api/apiUtils";


async function getRandomPictures(width, height) {
const url = `https://picsum.photos/${width}/${height}`;
    const image = await getImageUrl(url);
    return image;
}

export default getRandomPictures;
