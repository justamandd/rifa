const frutas = ['Abacate','Abacaxi','Açaí','Acerola','Amora','Araticum','Bacaba','Banana','Biribá','Cacau','Cajá','Caqui','Carambola','Cereja ','Cidra','Coco','Cupuaçu','Figo','Framboesa','Goiaba','Groselha','Ingá','Jabuticaba','Jaca','Jambo','Jenipapo','Kiwi','Laranja','Limão','Maçã','Mamão','Manga','Mangaba','Maracujá','Melancia','Melão','Morango','Pequi','Pera','Pêssego','Pitanga','Pitaya','Pupunha','Romã','Siriguela','Tâmara','Tamarindo','Tangerina','Tucumã','Uva verde']

function create_tickets () {
    let ticket_container = document.querySelector('.tickets')
    for (let i = 0; i < 50; i++){
        let ticket = document.createElement('li') //LI
        ticket.classList.add('ticket')
        ticket.innerHTML = frutas[i]
        ticket_container.appendChild(ticket)
    }
}

create_tickets()

let casas_selecionadas = []

document.querySelectorAll('.ticket').forEach(ticket => {
    ticket.addEventListener('click', () => {
        if (!ticket.classList.contains('disabled')){
            if (ticket.classList.contains('ticket_selected')){
                ticket.classList.remove('ticket_selected')
                casas_selecionadas.splice(casas_selecionadas.indexOf(ticket.innerHTML),1)
            }else{
                ticket.classList.add('ticket_selected')
                casas_selecionadas.push(ticket.innerHTML)
            }
        }
    })
})

let next_button = document.querySelector('.next')

let cart_tickets = document.querySelector('.cart_tickets')

next_button.addEventListener('click', () => {

    if (casas_selecionadas.length != 0){
        document.getElementById('modal-informacao-compra').classList.add('active')

        casas_selecionadas.forEach(fruit_selected => {
            let ticket = document.createElement('div')
            ticket.classList.add('cart_ticket')
            ticket.innerHTML = fruit_selected
            cart_tickets.appendChild(ticket)
        })
    }
})

let close_button = document.querySelector('.close-modal')

close_button.addEventListener('click', () => {

    document.querySelectorAll('.cart_ticket').forEach(ticket => {
        cart_tickets.removeChild(ticket)
    })

    document.getElementById('modal-informacao-compra').classList.remove('active')

})

document.querySelector('.confirm').addEventListener('click', () => {
    window.alert('Compra realizada com sucesso!')

    casas_selecionadas = []

    document.querySelectorAll('.cart_ticket').forEach(ticket => {
        cart_tickets.removeChild(ticket)
    })

    document.querySelectorAll('.ticket_selected').forEach(ticket =>{
        ticket.classList.replace('ticket_selected', 'disabled')
    })

    document.getElementById('modal-informacao-compra').classList.remove('active')
})