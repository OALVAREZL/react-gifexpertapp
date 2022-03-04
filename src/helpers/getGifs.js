

export const getGifs = async( category ) => {

    const url =  `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=4fT7VoXHGSZ6wh4HFV6BrxW29PdxlEd2`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;

}