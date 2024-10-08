const { createApp } = Vue;
createApp({
    data() {
        return {
            active_contact: 0,
            itemMessage: {
                date: null,
                message: null,
                status: null
            },
            search: '',
            name: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il gatto?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao, come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene, grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a cena fuori',
                            status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                    ]
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        setPreviewActive(index) {
            this.active_contact = index;
        },
        addItemMessage(active_contact) {
            console.log(this.itemMessage);
            if (this.itemMessage.message != '' && this.itemMessage.message != null) {
                const d = Date();
                let itemMessageCopy = {
                    date: d,
                    status: 'sent',
                    message: this.itemMessage.message
                }
                this.contacts[active_contact].messages.push(itemMessageCopy);
                this.itemMessage.message = null;
            }
            else {
                alert('Non hai digitato nessun messaggio');
            }
        },
        // ricevo messaggio automatico in chat
        receivedOk(active_contact) {
            let receivedOk = setTimeout(() => {
                const d = Date();
                let itemMessageCopy = {
                    date: d,
                    status: 'received',
                    message: 'Ok'
                }
                this.contacts[active_contact].messages.push(itemMessageCopy);
            }, 1000);
        },
        formatDateToTime(dateString) {
            // let newDate = itemMessage.date.split(' ')[1].slice(0, 5);
            let newDate = Date.parse(dateString);
            newDate = new Date(newDate).toString();
            newDate = newDate.slice(16, 21);
            return newDate;
        },
        filterContacts() {
            console.log(this.search);
            console.log(this.contacts);
            // controllo il campo input: se il campo è diverso da stringa vuota
            if (this.search === '') {
                this.contacts.forEach((contact) => {
                    contact.visible = true;
                    console.log('c\'è');
                });
                return
            }
            // ciclo tutti i contact
            this.contacts.forEach((contact) => {
                // se il contenuto del search non è contenuto all'interno del nome del contact, nascondo il contact
                contact.visible = contact.name.toLowerCase().includes(this.search.toLowerCase())
            });
        },
        // findLastMessage() {
        //     let lastMessage = contacts[contact].messages[0].message;
        //     console.log(lastMessage);
        // }
    }
}).mount('#app');