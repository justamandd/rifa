let frutas = ['Abacate','Abacaxi','Açaí','Acerola','Amora','Araticum','Bacaba','Banana','Biribá','Cacau','Cajá','Caqui','Carambola','Cereja ','Cidra','Coco','Cupuaçu','Figo','Framboesa','Goiaba','Groselha','Ingá','Jabuticaba','Jaca','Jambo','Jenipapo','Kiwi','Laranja','Limão','Maçã','Mamão','Manga','Mangaba','Maracujá','Melancia','Melão','Morango','Pequi','Pera','Pêssego','Pitanga','Pitaya','Pupunha','Romã','Siriguela','Tâmara','Tamarindo','Tangerina','Tucumã','Uva verde']

function create_tickets () {
    let ticket_container = document.querySelector('.tickets')
    for (let i = 0; i < 50; i++){
        let ticket = document.createElement('div')
        ticket.classList.add('ticket')
        ticket.innerHTML = frutas[i]
        ticket_container.appendChild(ticket)
    }
}

create_tickets()

let casas_selecionadas = []

// Adiciona a interação de selecionar ticket e adicionar ao carrinho
document.querySelectorAll('.ticket').forEach(ticket => {
    ticket.addEventListener('click', event => {
        if (ticket.classList.contains('ticket_selected')){
            ticket.classList.remove('ticket_selected')
            casas_selecionadas.splice(casas_selecionadas.indexOf(ticket.innerHTML),1)
        }else{
            ticket.classList.add('ticket_selected')
            casas_selecionadas.push(ticket.innerHTML)
        }
    })
})

let continue_button = document.querySelector('.continue_icon')

continue_button.addEventListener('click', () => {
    let header = document.querySelector('.header_content')
    let main_section = document.querySelector('#ticket_section')
    let footer = document.querySelector('.footer_content')
    let modal = document.querySelector('.modal')

    header.classList.add('disabled')
    main_section.classList.add('disabled')
    footer.classList.add('disabled')

    modal.classList.remove('disabled')

    modal.classList.add('active')

    let cart_tickets = document.querySelector('.cart_tickets')
    casas_selecionadas.forEach(fruit_selected => {
        let ticket = document.createElement('div')
        ticket.classList.add('cart_ticket')
        ticket.innerHTML = fruit_selected
        cart_tickets.appendChild(ticket)
    })
})