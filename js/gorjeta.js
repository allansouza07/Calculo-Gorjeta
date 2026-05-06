let valorconta = document.getElementsByClassName("valor")
let avaliacaocliente = document.getElementsByClassName("avaliar")
let gorjeta = document.getElementsByClassName("gorjeta")
let valortotal = document.getElementsByClassName("valortotal")

let valor = 100
let avaliacao = "Ótimo"
let valorgorjeta

if (avaliacao === "Excelente"){
    valorgorjeta = valor * 0.1
    valorconta[0].textContent = `O valor da sua conta deu R$ ${valor}.`
    valorconta[0].style.color = "green"
    avaliacaocliente[0].textContent = `A avaliação do serviço foi: ${avaliacao}.`
    avaliacaocliente[0].style.color = "green"
}
else if(avaliacao === "Ótimo"){
    valorgorjeta = valor * 0.08
    valorconta[0].textContent = `O valor da sua conta deu R$ ${valor}.`
    valorconta[0].style.color = "blue"
    avaliacaocliente[0].textContent = `A avaliação do serviço foi: ${avaliacao}.`
    avaliacaocliente[0].style.color = "blue"
}
else if(avaliacao === "Bom"){
    valorgorjeta = valor * 0.05
    valorconta[0].textContent = `O valor da sua conta deu R$ ${valor}.`
    valorconta[0].style.color = "orange"
    avaliacaocliente[0].textContent = `A avaliação do serviço foi: ${avaliacao}.`
    avaliacaocliente[0].style.color = "orange"
}
else if(avaliacao === "Ruim"){
    valorgorjeta = valor * 0.02
    valorconta[0].textContent = `O valor da sua conta deu R$ ${valor}.`
    valorconta[0].style.color = "red"
    avaliacaocliente[0].textContent = `A avaliação do serviço foi: ${avaliacao}.`
    avaliacaocliente[0].style.color = "red"
}



let resultadofinal = valor - valorgorjeta

gorjeta[0].textContent = `O valor da gorjeta é R$ ${valorgorjeta}`
valortotal[0].textContent = `O valor total de sua conta é R$ ${resultadofinal}`
