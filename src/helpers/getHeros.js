

//FIX IT
export const getHeros = async( id ) => {
    try {
        const url = `https://superheroapi.com/api/4642719605760186/${id}`;
        const resp = await axios(url)
        console.log(resp);
        
    } catch (error) {
        console.log(error);
    }
}