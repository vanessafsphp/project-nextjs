async function tempo(request, response) {
    const idSecret = process.env.ADVICESLIP_ID_SECRET;
    const dynamicDate = new Date();

    const adviceResponse = await fetch(`https://api.adviceslip.com/advice/${idSecret}`);
    const adviceResponseJson = await adviceResponse.json();
    const conselho = adviceResponseJson.slip.advice;

    response.json({
        date: dynamicDate.toGMTString(),
        conselho: conselho
    })
}

export default tempo;