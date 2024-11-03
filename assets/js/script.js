const climaSection = document.querySelector (".climas")
const apiUrl =  "https://api.gael.cloud/general/public/clima"
//crear una funcion para obtener los climas de la API GAEL//
async function getClimas () {
    const res = await fetch (apiUrl)
    const climas = await res.json ()
    return climas
}
    
//crear una funcion  que renderice los climas en el DOM//

async function renderClimas() {
    const climas = await getClimas ()
    let template = ''
    climas.forEach(clima => {
        template += `
        <div class = "clima">
        <h3>${clima.Estacion}</h3>
        <p>${clima.Temp}oC</p>
        </div>
        ` })
        climaSection.innerHTML=template
}
renderClimas()