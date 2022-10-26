const hora = new Date().toLocaleTimeString()
hora1.textContent=`Hora local ${hora}`
hora10.textContent=`Hora local ${hora}`
function governador(url) {
   fetch(url)
       .then(response => response.json())
       .then(data => {

           const vt1 = Number(data.cand[0].vap)
           const vt2 = Number(data.cand[1].vap)
           cand10.textContent = data.cand[0].nm
           porc10.textContent = `${data.cand[0].pvap}%`
           cand20.textContent = data.cand[1].nm
           porc20.textContent = `${data.cand[1].pvap}%`
           voto10.textContent = `${vt1.toLocaleString()}`
           voto20.textContent = `${vt2.toLocaleString()}`
           st10.textContent = data.cand[0].st
           st20.textContent = data.cand[1].st
           pst10.textContent = `${data.pst}% das seções totalizadas`
           if (data.cand[0].nm == "MARÍLIA ARRAES") {
               fotop10.src = "https://resultados.tse.jus.br/oficial/ele2022/547/fotos/pe/170001610442.jpeg"
               fotop20.src = "https://resultados.tse.jus.br/oficial/ele2022/547/fotos/pe/170001604087.jpeg"

           } else {
               fotop20.src = "https://resultados.tse.jus.br/oficial/ele2022/547/fotos/pe/170001610442.jpeg"
               fotop10.src = "https://resultados.tse.jus.br/oficial/ele2022/547/fotos/pe/170001604087.jpeg"
           }
       })



       .catch(error => console.error(error))
}


function presidente(url) {
   fetch(url)
      .then(response => response.json())
      .then(data => {

         const vt1 = Number(data.cand[0].vap)
         const vt2 = Number(data.cand[1].vap)
         cand1.textContent = data.cand[0].nm
         porc1.textContent = `${data.cand[0].pvap}%`
         cand2.textContent = data.cand[1].nm
         porc2.textContent = `${data.cand[1].pvap}%`
         voto1.textContent = `${vt1.toLocaleString()}`
         voto2.textContent = `${vt2.toLocaleString()}`
         st1.textContent = data.cand[0].st
         st2.textContent = data.cand[1].st
         pst1.textContent = `${data.pst}% das seções totalizadas`



         if (data.cand[0].nm == "LULA") {
            fotop1.src = "https://resultados.tse.jus.br/oficial/ele2022/545/fotos/br/280001607829.jpeg"
            fotop2.src = "https://resultados.tse.jus.br/oficial/ele2022/545/fotos/br/280001618036.jpeg"

         } else {
            fotop2.src = "https://resultados.tse.jus.br/oficial/ele2022/545/fotos/br/280001607829.jpeg"
            fotop1.src = "https://resultados.tse.jus.br/oficial/ele2022/545/fotos/br/280001618036.jpeg"
         }


      }

      )




      .catch(error => console.error(error))
}

function progressoPresidente(url){
   fetch(url)
       .then(response => response.json())
       .then(data => {
         console.log(data)
           const n = data.pst
           const progresso = document.querySelector(".barraPresidente div")
           progresso.setAttribute("style",`width: ${n.replace(",",".")}%`)
           atualizacao1.textContent=`Última atualização ${data.dg} ${data.hg}`
       })



       .catch(error => console.error(error))
}

function progressoGovernador(url){
   fetch(url)
       .then(response => response.json())
       .then(data => {
         console.log(data)
           const n = data.pst
           const progresso = document.querySelector(".barraGovernador div")
           progresso.setAttribute("style",`width: ${n.replace(",",".")}%`)
           atualizacao10.textContent=`Última atualização ${data.dg} ${data.hg}`
       })



       .catch(error => console.error(error))
}

presidente("https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json")
governador("https://resultados.tse.jus.br/oficial/ele2022/547/dados-simplificados/pe/pe-c0003-e000547-r.json")

progressoPresidente("https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json")

progressoGovernador("https://resultados.tse.jus.br/oficial/ele2022/547/dados-simplificados/pe/pe-c0003-e000547-r.json")
