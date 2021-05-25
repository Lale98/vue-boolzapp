var app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        info: false,
                        delete: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        info: false,
                        delete: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        info: false,
                        delete: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        info: false,
                        delete: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        info: false,
                        delete: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        info: false,
                        delete: false
                    }
                ],
            },     
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        info: false,
                        delete: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        info: false,
                        delete: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        info: false,
                        delete: false
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_io',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        info: false,
                        delete: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        info: false,
                        delete: false
                    }
                ],
            }
        ],
        indexActive: 0,
        mess: "",
        chatName: "",
        colorMode: false,
        detail: false,
        messageIndex: 0
    },
    methods: {
        addImg: function(index) {
            let item = this.contacts[index].avatar;
            return `img/avatar${item}.jpg`;
        },
        getLastMessageData: function (index) {
            let lastMessage = this.contacts[index].messages.length-1;
            return this.contacts[index].messages[lastMessage].date;
        },
        getLastMessage: function (index) {
            let lastMessage = this.contacts[index].messages.length-1;
            return this.contacts[index].messages[lastMessage].text.substr(0, 25) + '...';
        },
        sendMessage: function () {
            if (this.mess.trim().length > 0) {
                this.contacts[this.indexActive].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.mess,
                    status: 'sent',
                    info: false,
                    delete: false});
                this.mess = "";
                setTimeout(() => {
                    this.contacts[this.indexActive].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: "Ok",
                        status: 'received',
                        info: false,
                        delete: false});
                    }, 1000);
            };
        },
        search: function() {
            return this.contacts.map(contact => {
                if (contact.name.toLowerCase().includes(this.chatName.toLowerCase())) {
                    contact.visible = true;
                }  else {
                    contact.visible = false;
                }
            })
        },
        notifyOn: function() {
            alert('Non ti scrive nessuno, a cosa ti servono le notifiche ?');
        },
        info: function(index) {
            this.contacts[this.indexActive].messages[index].info = !this.contacts[this.indexActive].messages[index].info;
        },
        del: function(index) {
            this.contacts[this.indexActive].messages[index].delete = true;
        }
    },
    updated: function () {
        const messageList = document.getElementsByClassName('message');
        const lastMessage = messageList[messageList.length - 1];
        lastMessage.scrollIntoView();
    }
});



