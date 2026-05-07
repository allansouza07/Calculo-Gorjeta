let valorconta = document.getElementById("valor")
let avaliacaocliente = document.getElementById("avaliar")
let gorjeta = document.getElementById("gorjeta")
let valortotal = document.getElementById("valortotal")

let valor = 200
let avaliacao = "Ótimo"
let valorgorjeta

if (avaliacao === "Excelente"){
    valorgorjeta = valor * 0.1
    valorconta.textContent = `O valor da sua conta deu R$ ${valor}.`
    valorconta.style.color = "green"
    avaliacaocliente.textContent = `A avaliação do serviço foi: ${avaliacao}.`
    avaliacaocliente.style.color = "green"
    let resultadofinal = valor - valorgorjeta

    gorjeta.textContent = `O valor da gorjeta é R$ ${valorgorjeta}`
    valortotal.textContent = `O valor total de sua conta é R$ ${resultadofinal}`
}
else if(avaliacao === "Ótimo"){
    valorgorjeta = valor * 0.08
    valorconta.textContent = `O valor da sua conta deu R$ ${valor}.`
    valorconta.style.color = "blue"
    avaliacaocliente.textContent = `A avaliação do serviço foi: ${avaliacao}.`
    avaliacaocliente.style.color = "blue"
    let resultadofinal = valor - valorgorjeta

    gorjeta.textContent = `O valor da gorjeta é R$ ${valorgorjeta}`
    valortotal.textContent = `O valor total de sua conta é R$ ${resultadofinal}`
}
else if(avaliacao === "Bom"){
    valorgorjeta = valor * 0.05
    valorconta.textContent = `O valor da sua conta deu R$ ${valor}.`
    valorconta.style.color = "orange"
    avaliacaocliente.textContent = `A avaliação do serviço foi: ${avaliacao}.`
    avaliacaocliente.style.color = "orange"
    let resultadofinal = valor - valorgorjeta

    gorjeta.textContent = `O valor da gorjeta é R$ ${valorgorjeta}`
    valortotal.textContent = `O valor total de sua conta é R$ ${resultadofinal}`
}
else if(avaliacao === "Ruim"){
    valorgorjeta = valor * 0.02
    valorconta.textContent = `O valor da sua conta deu R$ ${valor}.`
    valorconta.style.color = "red"
    avaliacaocliente.textContent = `A avaliação do serviço foi: ${avaliacao}.`
    avaliacaocliente.style.color = "red"
    let resultadofinal = valor - valorgorjeta

    gorjeta.textContent = `O valor da gorjeta é R$ ${valorgorjeta}`
    valortotal.textContent = `O valor total de sua conta é R$ ${resultadofinal}`
}




