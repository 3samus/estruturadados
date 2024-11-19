// function somar(){

// }


// let listaDeDados = [ 4, "samuro", undefined, null, true, false, 2, 3, somar()]

// listaDeDados[1] = 900;

// console.log(listaDeDados)

















// let PersonagensAnimes = ["Chopper","Luffy", "Gaara", "Naruto"]
// // //push insere dados no final de uma lista
// // PersonagensAnimes.push("zoro")
// // // unshift insere dados no inicio da lista
// // PersonagensAnimes.unshift("Itachi")
// // //pop remove o ultimo item da lista
// // PersonagensAnimes.pop("zoro")
// // //shift remove o primeiro item da lista
// // PersonagensAnimes.shift()
// // console.log(PersonagensAnimes)
// // //includes - verifica se um dado está incluido em uma lista
// // let dadoIncluido = PersonagensAnimes.includes("Luffy");
// // //indexof verifica o indice de um dado na lista
// // let indiceDado = PersonagensAnimes.indexOf("Luffy");
// // console.log(indiceDado)
// // //slice cortam o espaço da lista sem alterar a lista original
// // let dadosretirados = PersonagensAnimes.slice(-3, 2);
// // console.log(PersonagensAnimes)
// // console.log(dadosretirados)
// // //splice ele não trabalha com indice, ele pega o valor do item, no caso sera a sequencia 1 e 2, substitui dados de uma coordenada passada na lista.
// // let dadosSubstituidos = PersonagensAnimes.splice(1,2, "Sasuke", "Sakura")
// // console.log(dadosSubstituidos)
// // console.log(PersonagensAnimes)

// console.log(PersonagensAnimes);

// for (let indice = 0; indice < PersonagensAnimes.length; indice++) {
//     console.log(`O personagem ${PersonagensAnimes[indice]} esta no indice ${indice}`)
// }
// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

do{
let pacientes = [];
for(let indice = 0; indice < pacientes.length; indice++){
    pacientes += `${indice + 1} ° ${fila[indice]}`
}
let escolha = prompt(`
    pacientes:
    ${pacientes}
    
    Escolha uma ação:
    1- novo paciente
    2- consultar paciente
    3-sair
    `)
switch (escolha) {
    case "1":
        novopacientes = prompt(`digte o nome do novo paciente`)
        pacientes.push(novopacientes)


        break;
    case "2":
        pacienteConsultado = pacientes.shift()
        if (!pacienteConsultado) {
            alert(`não existe pacientes na fila.`)
        }
        else {
            alert(`o paciente ${pacienteConsultado} foi atendido`)
        }
        break;
    case "3":
        alert(`voce está saindo do sistema, obrigado pela preferência.`)
        break;
    default:
        alert(`opção invalida`)
        break;


}}

while(escolha != "3")

    //  jeito do davi

//     let fila = [];
// let opcoes = "";

// do {
//   let pacientes = "";
//   for(let indice = 0; indice < fila.length; indice++){
//     pacientes += `${indice + 1}° ${fila[indice]} \n `
//   }

//   opcoes = prompt(`
//         Pacientes:
//         ${pacientes}
//         --------------------------
//         1 - adicionar paciente
//         2 - consultar paciente
//         3 - sair da consulta
//         --------------------------
//         `);

//   switch (opcoes) {
//     case "1":
//       let novoPaciente = prompt(`Digite seu nome`);
//       fila.push(novoPaciente);
//       break;
//     case "2":
//       let pacienteConsultado = fila.shift();
//       if (!pacienteConsultado) {
//         alert(`Não existe pacientes na fila`);
//       } else {
//         alert(`O paciente ${pacienteConsultado} foi atendido`);
//       }
//       break;
//     case "3":
//       alert(`Encerrando o sistema.....`);
//       break;
//     default:
//       break;
//   }
// } while (opcoes != "3");