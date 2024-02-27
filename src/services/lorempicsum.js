import {getImageUrl, getjson} from "./api/apiUtils";

export async function getRandomPicture(width, height) {
    const url = `https://picsum.photos/${width}/${height}`;
    const image = await getImageUrl(url);
    return image;
}

export async function getRandomListPictures(number) {
    if (number === 0 || number > 100) {
        console.error("Wrong number");
        return null;
    }

    const url = `https://picsum.photos/v2/list?page=1&limit=${number}`;
    const images = await getjson(url);
    return images;
}

