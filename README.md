Boolzapp- a (not very) innovative messaging
 platform
 Nome Repo: vue-boolzapp
 Milestone 1
 ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
 dall’interlocutore (bianco) assegnando due classi CSS diverse
 ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
 nome e immagine di ogni contatto
 Milestone 2
 ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
 messaggi relativi al contatto attivo all’interno del pannello della conversazione
 ● Click sul contatto mostra la conversazione del contatto cliccato
 Milestone 3
 ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
 “enter” il testo viene aggiunto al thread sopra, come messaggio verde
 ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
 un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
 ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
 contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina-> Scrivo
 “mar” rimangono solo Marco e Martina)
 Milestone 5- opzionale
 ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
 permette di cancellare il messaggio selezionato
 ● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
 Consigli utili:
 ● Sipossono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella
 lista dei contatti
 ● Ipulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
 ● Pergestire le date, può essere utile la libreria Luxon

 Pseudocodice

 1 creazione contenuti statici
 2 definisco lo stile con css
 3 rimuovo i contenuti statici dall'html 
 4 inserisco nella colonna di sinistra gli oggetti contenuti nell'array delle anteprime
 5 inserisco nella colonna di destra la lista dei messaggi di un utente
 6 al click sull'anteprima, appare visibile la lista dei messaggi del relativo utente
 7 rendo attiva la form per l'invio dei messaggi 
 8 dopo 1 secondo, appare in risposta un messaggio automatico con la scritta "ok"