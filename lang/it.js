(function(){
  QUIZ_CONFIG_BY_LANG.it = {
    relationship: {
      "questions": [
        {
          "text": "Chi scrive di solito per primo?",
          "options": [
            {
              "label": "È quasi sempre lui a iniziare",
              "interest": 3,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "È abbastanza equilibrato tra noi",
              "interest": 1,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Sono quasi sempre io a iniziare",
              "interest": -2,
              "comm": 0,
              "ei": 0
            },
            {
              "label": "Ci scriviamo a malapena",
              "interest": -3,
              "comm": -2,
              "ei": 0
            }
          ]
        },
        {
          "text": "Quanto tempo impiega di solito a rispondere?",
          "options": [
            {
              "label": "Quasi istantaneamente",
              "interest": 1,
              "comm": 3,
              "ei": 0
            },
            {
              "label": "Entro qualche ora",
              "interest": 0,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Spesso un giorno o più",
              "interest": 0,
              "comm": -2,
              "ei": 0
            },
            {
              "label": "È completamente imprevedibile",
              "interest": 0,
              "comm": -1,
              "ei": -1
            }
          ]
        },
        {
          "text": "Ti ha mai portata a un vero appuntamento?",
          "options": [
            {
              "label": "Sì, più di una volta",
              "interest": 2,
              "comm": 0,
              "ei": 3
            },
            {
              "label": "Sì, una volta",
              "interest": 1,
              "comm": 0,
              "ei": 1
            },
            {
              "label": "Ne abbiamo parlato, ma non è successo nulla",
              "interest": 0,
              "comm": 0,
              "ei": -1
            },
            {
              "label": "No",
              "interest": 0,
              "comm": 0,
              "ei": -3
            }
          ]
        },
        {
          "text": "Ti ha mai fatto ghosting o si è raffreddato senza spiegazioni?",
          "options": [
            {
              "label": "Mai",
              "interest": 0,
              "comm": 1,
              "ei": 2
            },
            {
              "label": "Una volta, ma è tornato",
              "interest": 0,
              "comm": 0,
              "ei": -1
            },
            {
              "label": "Succede spesso",
              "interest": 0,
              "comm": -2,
              "ei": -3
            },
            {
              "label": "Lo sta facendo proprio ora",
              "interest": -2,
              "comm": -3,
              "ei": -3
            }
          ]
        },
        {
          "text": "Sai di solito chiaramente a che punto sei con lui, o ti ritrovi spesso a doverglielo chiedere?",
          "options": [
            {
              "label": "Molto chiaro, me lo comunica senza che io debba chiedere",
              "interest": 2,
              "comm": 3,
              "ei": 0
            },
            {
              "label": "Abbastanza chiaro, anche se ho dovuto chiedere una o due volte",
              "interest": 0,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Ho dovuto chiedere più di una volta e mi sento ancora incerta",
              "interest": -1,
              "comm": -2,
              "ei": 0
            },
            {
              "label": "Non ho idea di dove mi trovi",
              "interest": -2,
              "comm": -3,
              "ei": -1
            }
          ]
        },
        {
          "text": "In generale, senti che l'impegno in questa storia è reciproco?",
          "options": [
            {
              "label": "Sì, sembra equilibrato",
              "interest": 3,
              "comm": 2,
              "ei": 2
            },
            {
              "label": "Per lo più sì, anche se io mi impegno un po' di più",
              "interest": 1,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "No, mi impegno chiaramente di più io",
              "interest": -2,
              "comm": -1,
              "ei": -1
            },
            {
              "label": "Sto facendo tutto il lavoro io",
              "interest": -3,
              "comm": -2,
              "ei": -2
            }
          ]
        }
      ],
      "axes": [
        "interest",
        "comm",
        "ei"
      ],
      "ranges": {
        "interest": {
          "min": -10,
          "max": 11
        },
        "comm": {
          "min": -12,
          "max": 10
        },
        "ei": {
          "min": -10,
          "max": 7
        }
      },
      "microInsights": {
        "interest": [
          "Notato, questo la dice lunga sul suo livello di interesse.",
          "Questo è un forte segnale di interesse."
        ],
        "comm": [
          "Questo influisce sul tuo punteggio di Comunicazione.",
          "Schemi di comunicazione come questo contano molto."
        ],
        "ei": [
          "Questo incide sull'Investimento Emotivo.",
          "Questo è un indicatore chiave dell'investimento emotivo."
        ],
        "neutral": [
          "Capito, lo teniamo in considerazione nella tua lettura."
        ]
      },
      "resultCopy": {
        "interest": {
          "label": "Interest",
          "high": "Sta facendo un impegno reale per mantenere viva questa storia, l'iniziativa e l'attenzione indicano un interesse genuino, non solo comodità.",
          "mid": "Il suo interesse è incostante, a volte caloroso, altre distante, senza uno schema stabile di investimento in un senso o nell'altro.",
          "low": "Il problema principale è la mancanza di un interesse costante. Prende raramente l'iniziativa, e quasi tutto lo sforzo in questa connessione arriva da te."
        },
        "comm": {
          "label": "Comunicazione",
          "high": "La conversazione scorre facilmente e lui è presente in modo costante, una base solida, se il resto del quadro corrisponde.",
          "mid": "La comunicazione è funzionale ma irregolare, le risposte arrivano, ma senza molta urgenza o energia dietro.",
          "low": "Il problema principale è una comunicazione inaffidabile. Le risposte sono lente e incostanti, senza un ritmo su cui poter contare."
        },
        "ei": {
          "label": "His Effort",
          "high": "Si è presentato di persona, ti ha portata nel suo mondo, ed è rimasto costante, questo è un vero investimento, non solo energia da messaggi.",
          "mid": "L'investimento emotivo è presente ma incompleto, le sue azioni non corrispondono ancora del tutto alle sue parole.",
          "low": "Il problema principale è un basso investimento emotivo. La distanza, il seguito incostante e i periodi di freddezza inspiegata pesano più di qualsiasi impegno reale."
        }
      },
      "warningCopy": {
        "interest": {
          "label": "Interest",
          "high": "L'interesse può svanire rapidamente una volta che si instaura la comodità. Se smetti di notare come cambiano l'iniziativa e l'impegno nel tempo, rischi di perdere il momento esatto in cui il suo interesse inizia a calare.",
          "mid": "Un interesse incostante è facile da trascurare finché non diventa la norma. Se continui a colmare il divario ogni volta che lui si ritira, rischi di scambiare uno schema irregolare per qualcosa di stabile.",
          "low": "Le tue risposte indicano uno schema di impegno unilaterale. Se questo continua senza essere affrontato, rischi di rimanere investita in una connessione che non è ricambiata, scambiando la sua mancanza di iniziativa per qualcosa che cambierà da solo."
        },
        "comm": {
          "label": "Comunicazione",
          "high": "Risposte rapide possono mascherare un'incoerenza più profonda. Se smetti di valutare ciò che viene effettivamente detto e ti concentri solo sulla velocità, rischi di trascurare una reale mancanza di chiarezza.",
          "mid": "Una comunicazione irregolare è facile da scusare in momenti isolati. Se risposte poco impegnate o ritardate non vengono affrontate, rischi di allenarti ad accettare meno coerenza di quella di cui la relazione ha bisogno.",
          "low": "Le tue risposte indicano una comunicazione inaffidabile come il rischio principale qui. Senza un ritmo affidabile, segnali fraintesi e confusione ripetuta rischiano di continuare a riemergere invece di risolversi."
        },
        "ei": {
          "label": "His Effort",
          "high": "Un investimento visibile può comunque essere incoerente sotto la superficie. Se smetti di verificare se le sue azioni continuano a corrispondere alle sue parole, rischi di essere colta di sorpresa da un cambiamento che non hai visto arrivare.",
          "mid": "Un investimento emotivo che non corrisponde del tutto alle sue parole è uno schema da tenere d'occhio, non da ignorare. Se non affrontato, rischi di costruire aspettative su promesse non sostenute da azioni coerenti.",
          "low": "Le tue risposte indicano un basso investimento emotivo come il rischio principale qui. La distanza, il seguito incostante e i periodi di freddezza inspiegata tendono a ripetersi invece di risolversi senza un chiaro cambiamento di comportamento."
        }
      },
      "bridgeMap": {
        "interest": "La tua lettura mostra che l'interesse è la parte più fragile di questa dinamica, ed è esattamente ciò che i capitoli di psicologia del libro sono costruiti per cambiare.",
        "comm": "La tua lettura mostra che la comunicazione è il punto più debole di questa connessione, i capitoli sui messaggi spiegano esattamente come risolverlo.",
        "ei": "La tua lettura mostra che l'investimento emotivo è la lacuna qui, i capitoli del libro sulla costruzione di un'attrazione reale e duratura parlano direttamente di questo."
      },
      "bookDesc": {
        "interest": [
          "Il tuo avvertimento principale riguardava l'interesse, e non è qualcosa che si risolve con qualche messaggio ben scritto.",
          "Devi capire perché l'interesse maschile svanisce, cosa lo uccide silenziosamente, e cosa fa davvero restare un uomo coinvolto molto dopo la fase iniziale.",
          "Questa guida non si basa su manipolazione, giochetti o falsi trucchi da messaggio.",
          "È costruita sulla psicologia dietro l'attrazione e l'investimento emotivo, i meccanismi esatti dietro lo schema che la tua lettura ha appena evidenziato."
        ],
        "comm": [
          "Il tuo avvertimento principale riguardava la comunicazione, segnali contrastanti, risposte incoerenti, e la confusione che lasciano dietro di sé.",
          "Devi capire perché la comunicazione si rompe, come leggere cosa sta davvero succedendo sotto la superficie, e come creare la chiarezza che manca.",
          "Questa guida non si basa su manipolazione, giochetti o falsi trucchi da messaggio.",
          "È costruita sulla psicologia della comunicazione chiara e della connessione emotiva, i meccanismi esatti dietro lo schema che la tua lettura ha appena evidenziato."
        ],
        "ei": [
          "Il tuo avvertimento principale riguardava l'impegno, uno squilibrio in cui tu porti avanti questa connessione più di lui.",
          "Devi capire perché nasce questo squilibrio, cosa fa passare un uomo da passivo a coinvolto, e come smettere di fare tutto il lavoro da sola.",
          "Questa guida non si basa su manipolazione, giochetti o falsi trucchi da messaggio.",
          "È costruita sulla psicologia dell'impegno e dell'investimento, i meccanismi esatti dietro lo schema che la tua lettura ha appena evidenziato."
        ]
      },
      "loadingLine": "Analisi delle tue risposte in corso…",
      "loadingSubtext": "Confronto delle tue risposte con oltre 10.000 set di dati sul comportamento nelle relazioni…",
      "nameHeadline": "La tua lettura è pronta.",
      "nameSub": "Inserisci il tuo nome affinché i tuoi risultati ti parlino direttamente, Livello di Interesse, Punteggio di Comunicazione, Investimento Emotivo, e il tuo più grande punto cieco nella relazione."
    },
    single: {
    questions: [
      { text: "Come comunica di solito con te?", options: [
        { label: "Mi scrive regolarmente e fa durare le conversazioni.", comm: 3, interest: 1, effort: 1 },
        { label: "È altalenante / a volte scompare.", comm: -3, interest: -1, effort: -1 },
        { label: "Di solito sono io a iniziare le conversazioni.", comm: -1, interest: -1, effort: -2 }
      ]},
      { text: "Chi fa di solito il primo passo?", options: [
        { label: "Prende spesso l'iniziativa.", interest: 2, effort: 3, comm: 0 },
        { label: "È abbastanza equilibrato.", interest: 1, effort: 1, comm: 0 },
        { label: "Di solito sono io a prendere l'iniziativa.", interest: -1, effort: -3, comm: 0 }
      ]},
      { text: "Come reagisce quando ti allontani un po'?", options: [
        { label: "Se ne accorge e si avvicina.", interest: 3, effort: 2, comm: 1 },
        { label: "Mi lascia spazio e non reagisce granché.", interest: -1, effort: 0, comm: 0 },
        { label: "Sembra perdere interesse.", interest: -2, effort: -2, comm: -1 }
      ]},
      { text: "Come ti tratta quando siete insieme?", options: [
        { label: "Mi dedica attenzione e cerca scuse per stare vicino.", interest: 2, effort: 1, comm: 1 },
        { label: "È simpatico ma difficile da capire.", interest: 0, effort: -1, comm: -2 },
        { label: "Ho spesso la sensazione di dover attirare la sua attenzione.", interest: -2, effort: -2, comm: -1 }
      ]},
      { text: "Qual è il segnale più grande che ti fa dubitare del suo interesse?", options: [
        { label: "I suoi segnali contraddittori.", interest: -2, comm: -1, effort: -1 },
        { label: "La sua comunicazione irregolare.", comm: -3, interest: -1, effort: 0 },
        { label: "Non si impegna abbastanza.", effort: -3, interest: -1, comm: 0 }
      ]},
      { text: "Cosa vuoi davvero sapere di lui?", options: [
        { label: "Se gli piaccio davvero.", interest: -1, comm: 0, effort: -1 },
        { label: "Se mi vede come qualcosa di più di un'amica.", interest: -1, effort: 0, comm: -1 },
        { label: "Se dovrei continuare a inseguirlo.", effort: -2, interest: 0, comm: 0 }
      ]}
    ],
    axes: ["interest","comm","effort"],
    ranges: { interest: { min: -9, max: 7 }, comm: { min: -10, max: 5 }, effort: { min: -14, max: 7 } },
    microInsights: {
      interest: ["Notato, questo dice molto sul suo livello di interesse.", "Questo è un vero segnale di interesse."],
      comm: ["Questo influisce sulla tua lettura della Comunicazione.", "Schemi di comunicazione come questo contano molto."],
      effort: ["Questo incide sul livello di impegno che lui mette davvero.", "Questo è un segnale importante riguardo al suo impegno."],
      neutral: ["Capito, ne terrò conto nella tua lettura."]
    },
    resultCopy: {
      interest: {
        label: "Interesse",
        high: "Mostra segnali reali di interesse: prende l'iniziativa, resta vicino e ti dà motivi per credere che non sia solo occasionale.",
        mid: "Il suo interesse c'è, ma va e viene, abbastanza da tenerti curiosa, non ancora abbastanza da darti certezze.",
        low: "Lo schema centrale qui è una mancanza di interesse costante: per ora ti fai più domande tu di quante iniziative prenda lui."
      },
      comm: {
        label: "Comunicazione",
        high: "La comunicazione con lui sembra stabile e facile, un segnale forte, se il resto del quadro corrisponde.",
        mid: "La comunicazione è funzionale ma irregolare, la conversazione c'è, semplicemente senza un ritmo affidabile per ora.",
        low: "Lo schema centrale qui è una comunicazione imprevedibile: i segnali contrastanti e i silenzi rendono difficile capire davvero a che punto sei."
      },
      effort: {
        label: "Il suo impegno",
        high: "Fa uno sforzo reale per colmare la distanza, prende l'iniziativa, nota quando ti allontani e ti dedica del tempo.",
        mid: "Il suo impegno appare a tratti, presente quando è facile, più difficile da contare quando non lo è.",
        low: "Lo schema centrale qui è uno squilibrio nell'impegno: per ora sei tu a portare la maggior parte del peso di questa situazione."
      }
    },
    warningCopy: {
      interest: {
        label: "Interesse",
        high: "Anche un forte interesse iniziale può svanire se non riceve il giusto tipo di attenzione. Se smetti di osservare come cambia la sua iniziativa nel tempo, rischi di non accorgerti del momento in cui il suo interesse comincia a raffreddarsi.",
        mid: "Un interesse irregolare è facile da giustificare nel momento. Se continui a colmare tu i silenzi, rischi di scambiare uno schema altalenante per qualcosa di più stabile di quanto non sia in realtà.",
        low: "Le tue risposte indicano che la mancanza di un interesse costante è il rischio principale qui. Senza un vero cambiamento, rischi di restare investita in una situazione che non ti restituisce la stessa energia."
      },
      comm: {
        label: "Comunicazione",
        high: "Una conversazione facile può comunque nascondere una reale mancanza di chiarezza. Se ti concentri solo sulla frequenza delle sue risposte invece che su ciò che dicono davvero, rischi di non notare lo schema più importante.",
        mid: "Una comunicazione irregolare è facile da giustificare messaggio dopo messaggio. Se non cambia nulla, rischi di abituarti ad accettare meno costanza di quanta una vera connessione richieda.",
        low: "Le tue risposte indicano che una comunicazione imprevedibile è il rischio principale qui. Senza uno schema più chiaro, la confusione e i segnali contrastanti rischiano di continuare a ripetersi invece di risolversi da soli."
      },
      effort: {
        label: "Il suo impegno",
        high: "Un impegno visibile ora non garantisce che durerà una volta passata la novità. Se smetti di notare se continua a prendere l'iniziativa, rischi di essere colta di sorpresa da un cambiamento in chi fa le prime mosse.",
        mid: "Un impegno che compare solo a volte è facile da scambiare per un vero investimento. Se non lo tieni d'occhio, rischi di fare più lavoro tu solo perché sei tu a prestarci attenzione.",
        low: "Le tue risposte indicano che un vero squilibrio nell'impegno è il rischio principale qui. Senza un cambiamento, questo schema tende a proseguire invece di correggersi, lasciandoti a portare avanti da sola una connessione che lui non eguaglia."
      }
    },
    bridgeMap: {
      interest: "La tua lettura mostra che il suo interesse è la parte più fragile di questa dinamica al momento, c'è un potenziale reale qui, ma alcuni schemi lo stanno frenando. Il tuo risultato mostra cosa sta succedendo; il libro ti mostra esattamente come far evolvere la situazione a tuo favore.",
      comm: "La tua lettura mostra che la comunicazione è il punto più debole di questa connessione al momento, c'è un potenziale reale qui, ma alcuni schemi la stanno frenando. Il tuo risultato mostra cosa sta succedendo; il libro ti spiega esattamente come creare la chiarezza che ti manca.",
      effort: "La tua lettura mostra che l'impegno in questa situazione è attualmente squilibrato, c'è un potenziale reale qui, ma alcuni schemi lo stanno frenando. Il tuo risultato mostra cosa sta succedendo; il libro ti mostra esattamente come far evolvere la dinamica affinché lui inizi a eguagliare la tua energia."
    },
    bookDesc: {
      interest: [
        "Il tuo avvertimento principale riguardava il suo interesse, e non è qualcosa che si risolve con qualche messaggio ben scritto.",
        "Devi capire perché l'interesse maschile svanisce ancora prima che le cose diventino ufficiali, e cosa fa davvero decidere a un uomo di puntare su qualcosa di reale.",
        "Questa guida non si basa su manipolazione, giochetti o falsi trucchi da messaggio.",
        "È costruita sulla psicologia dietro l'attrazione e l'investimento emotivo, i meccanismi esatti dietro lo schema che la tua lettura ha appena evidenziato."
      ],
      comm: [
        "Il tuo avvertimento principale riguardava la comunicazione, segnali contrastanti, risposte incoerenti, e la confusione che lasciano dietro di sé.",
        "Devi capire perché la comunicazione resta poco chiara, come leggere cosa sta davvero succedendo sotto la superficie, e come creare la chiarezza che manca.",
        "Questa guida non si basa su manipolazione, giochetti o falsi trucchi da messaggio.",
        "È costruita sulla psicologia della comunicazione chiara e della connessione emotiva, i meccanismi esatti dietro lo schema che la tua lettura ha appena evidenziato."
      ],
      effort: [
        "Il tuo avvertimento principale riguardava l'impegno, uno squilibrio in cui sei tu a fare più passi verso di lui di quanti ne faccia lui verso di te.",
        "Devi capire perché nasce questo squilibrio, cosa fa passare un uomo da distaccato a coinvolto, e come smettere di portare tutto da sola.",
        "Questa guida non si basa su manipolazione, giochetti o falsi trucchi da messaggio.",
        "È costruita sulla psicologia dell'impegno e dell'investimento, i meccanismi esatti dietro lo schema che la tua lettura ha appena evidenziato."
      ]
    },
    loadingLine: "Analisi dei tuoi schemi in corso…",
    loadingSubtext: "Confronto delle tue risposte con oltre 10.000 schemi di appuntamenti…",
    nameHeadline: "La tua lettura è pronta.",
    nameSub: "Inserisci solo il tuo nome — nient'altro. Personalizza i tuoi punteggi di Interesse, Comunicazione e Il suo impegno qui sotto. Nessuna email, nessuna registrazione."
  }
  };
  STATIC_STRINGS.it = {
    "landing.eyebrow": "L'Analizzatore",
    "landing.h1": "Gli Piaci? <em>Smetti di Indovinare. Scopri Cosa Ti Sta Davvero Dicendo Il Suo Comportamento.</em>",
    "landing.sub": "6 domande &middot; <em>60 secondi</em> &middot; personalizzato. Capisci lo schema dietro le sue azioni, la sua comunicazione e il suo impegno.",
    "landing.startBtn": "Inizia La Mia Analisi",
    "landing.previewInterest": "Interesse",
    "landing.previewComm": "Comunicazione",
    "landing.previewInvestment": "Investimento",
    "landing.trust": "Progettato usando la psicologia delle relazioni e i modelli di comunicazione per offrirti approfondimenti personalizzati e ponderati.",
    "landingSingle.eyebrow": "L'Analizzatore",
    "landingSingle.h1": "Gli Piaci? <em>Scopri Cosa Significano Davvero Le Sue Azioni</em>",
    "landingSingle.sub": "Sei domande. <em>Sessanta secondi</em>. Scopri se le sue azioni mostrano un interesse reale o segnali contrastanti.",
    "landingSingle.startBtn": "Inizia La Mia Analisi",
    "landingSingle.previewConfidence": "Interesse",
    "landingSingle.previewMagnetism": "Comunicazione",
    "landingSingle.previewSelfInvestment": "Il Suo Impegno",
    "landingSingle.trust": "Progettato usando la psicologia delle relazioni e i modelli di comunicazione per offrirti approfondimenti personalizzati e ponderati.",
    "gate.h1": "Qual è La Tua Situazione Con <em>Lui</em>?",
    "gate.sub": "Adatteremo la tua lettura esattamente alla tua situazione.",
    "gate.yes": "❤️ Siamo in una relazione",
    "gate.no": "👀 Non stiamo ufficialmente insieme",
    "shared.liveBadge": "lettrici che esplorano i suoi segnali",
    "name.eyebrow": "Ci Siamo Quasi",
    "name.lockText": "I tuoi punteggi sono pronti",
    "name.placeholder": "Il tuo nome",
    "name.err": "Inserisci il tuo nome per continuare.",
    "name.btn": "Sblocca I Miei Risultati",
    "name.privacyBadge": "Solo il tuo nome — niente email, niente registrazione",
    "name.micro": "Bastano 2 secondi. Non ti chiederemo mai la tua email.",
    "results.eyebrow": "La Tua Lettura",
    "results.strengthLabel": "Punto di Forza Principale",
    "results.warningLabel": "Avvertimento Principale",
    "results.downloadBtn": "Scarica La Mia Scheda Risultati",
    "results.shareHint": "Una scheda riassuntiva condivisibile, perfetta per il tuo TikTok o storia su Instagram",
    "results.nextBtn": "Scopri Cosa Fare Ora",
    "proof.eyebrow": "Il Verdetto È Solo Metà Della Storia",
    "proof.h1": "La tua lettura mostra lo schema. Questo ti mostra come cambiarlo.",
    "proof.testimonialsTitle": "Alcuni messaggi dalle lettrici ❤️",
    "buy.digitalNotice": "100% eBook Digitale &middot; Compatibile con iOS, Android, Kindle e lettori PDF",
    "buy.title": "Rendilo Ossessionato",
    "buy.h1": "Capiscilo. <em>Smetti di Indovinare Cosa Fare Dopo.</em>",
    "buy.subCopy": "Approfondisci la psicologia dietro l'attrazione, la connessione emotiva, i segnali contrastanti e il suo comportamento.",
    "story.eyebrow": "La Nostra Storia",
    "story.s1_1": "Tutto è iniziato con una domanda che non smettevo di farmi…",
    "story.s1_2": "Per molto tempo mi sono ritrovata in situazioni con uomini che mi lasciavano confusa.",
    "story.s1_3": "Perché un uomo poteva essere così interessato in un momento e distante in quello dopo?",
    "story.s1_4": "Perché alcuni sembravano allontanarsi più mi avvicinavo?",
    "story.s1_5": "Perché dare più attenzione a volte peggiorava le cose, mentre prendere le distanze cambiava tutto?",
    "story.s2_1": "E sinceramente? Non sempre ho gestito quelle situazioni nel modo giusto.",
    "story.s2_2": "Ripensavo troppo a ogni messaggio. Dubitavo di me.",
    "story.s2_3": "Cercavo di leggere nel suo pensiero, chiedendomi cosa avessi sbagliato…",
    "story.s2_4": "…e perché qualcosa che sembrava così semplice diventasse così complicato.",
    "story.s2_5": "Ma dopo aver vissuto questi schemi ancora e ancora, ho iniziato a osservare.",
    "story.s3_1": "Ho iniziato a notare le piccole cose che molte di noi trascurano.",
    "story.s3_2": "Il modo in cui gli uomini comunicano. Il modo in cui l'attrazione nasce davvero.",
    "story.s3_3": "La differenza tra rincorrere qualcuno… e creare un desiderio autentico.",
    "story.s3_4": "Quanto il nostro stesso comportamento può cambiare la dinamica tra due persone.",
    "story.s3_5": "Quante donne fraintendono il comportamento maschile, non perché amano nel modo sbagliato,",
    "story.s3_6": "…ma perché nessuno ha mai spiegato loro come funziona davvero l'attrazione.",
    "story.s4_1": "Quella curiosità è diventata qualcosa di molto più grande.",
    "story.s4_2": "Ho iniziato a raccogliere tutto ciò che stavo imparando in un unico posto.",
    "story.chip1": "Gli Schemi",
    "story.chip2": "Le Lezioni",
    "story.chip3": "Gli Errori",
    "story.s4_3": "Le conversazioni, le rivelazioni, e tutto ciò che avrei voluto capire molto prima.",
    "story.s4_4": "Ho studiato. Ho osservato. Ho messo alla prova approcci diversi finché tutto è diventato chiaro.",
    "story.s5_1": "Così è nato Make Him Obsessed.",
    "story.s5_2": "Ho creato il libro perché ogni donna abbia qualcosa di concreto a cui tornare quando si sente confusa…",
    "story.s5_3": "…qualcosa che aiuta a capire la situazione invece di pensarci senza fine.",
    "story.s5_4": "E ho creato questo sito per lo stesso motivo: un luogo semplice per esplorare queste idee e sentirsi meno perse con uomini e attrazione.",
    "story.s5_5": "Non nato dal desiderio di vendere qualcosa, ma da un bisogno reale che ho vissuto in prima persona.",
    "story.rita1": "Ti chiedi ancora cosa significhi il suo comportamento?",
    "story.rita2": "Chiedi a Rita.",
    "story.rita3": "Raccontale cosa è successo. Ti aiuterà a vederci chiaro.",
    "story.ritaBtn": "Parla con Rita",
    "story.s6_1": "Perché so cosa significa chiedersi: «Cosa sto sbagliando?»",
    "story.s6_2": "E non voglio che tu debba capirlo tutto da sola.",
    "story.s6_3": "Non si tratta di diventare qualcun'altra.",
    "story.s6_4": "Si tratta di capire la dinamica, capire te stessa e sapere cosa fare quando ti piace davvero qualcuno.",
    "story.s6_5": "Ecco perché Make Him Obsessed esiste.",
    "story.finalBtn": "Mostrami come →",
    "journey.s4_2": "Il Tuo Avvertimento Principale",
    "journey.s5_8": "Non perché hai imparato a rincorrerlo ancora di più.",
    "journey.s5_9": "Ma perché hai imparato a creare una connessione più forte.",
    "journey.finalBtn": "Mostrami come →",
    "jf.b1": "Sei qui in cerca di una risposta.",
    "jf.b2": "Non un'altra supposizione.",
    "jf.b3": "Volevi capire cosa stava succedendo davvero.",
    "jf.b4": "E ora puoi.",
    "jf.m1": "Cosa significa davvero.",
    "jf.m2": "Questo non significa automaticamente che lui non ti voglia.",
    "jf.m3": "Significa che c'è qualcosa nel modo in cui si sta sviluppando questa connessione che devi capire.",
    "jf.m4": "Perché sapere cosa prova lui è solo metà della storia.",
    "jf.m5": "Sapere cosa fare dopo è l'altra metà.",
    "jf.t1": "Immagina di non dover rincorrere la sua attenzione.",
    "jf.t2": "Di non rimuginare su ogni messaggio.",
    "jf.t3": "Di non chiederti a che punto sei.",
    "jf.r1": "Vuoi leggere di più?",
    "jf.r2": "Vedi tutte le recensioni →",
    "jf.k1": "Hai capito lo schema.",
    "jf.k2": "Ora scopri cosa farne.",
    "jf.c1": "Sei qui perché volevi chiarezza.",
    "jf.c2": "Ora sai da dove iniziare.",
    "buy.desc1": "Non ti serve un altro consiglio sugli appuntamenti.",
    "buy.desc2": "Devi capire perché si allontana… perché perde interesse… e perché alcune donne restano nella mente di un uomo molto dopo aver lasciato la stanza.",
    "buy.desc3": "Questa guida non si basa su manipolazione, giochetti o falsi trucchi da messaggio.",
    "buy.desc4": "È costruita attorno alla psicologia dietro l'attrazione, l'attaccamento emotivo e i comportamenti che, silenziosamente, rendono qualcuno indimenticabile.",
    "buy.label1": "Cosa Scoprirai All'Interno Della Guida",
    "buy.l1_1": "Perché gli uomini si legano emotivamente a certe donne, e perdono interesse per altre.",
    "buy.l1_2": "Gli errori sottili che lo allontanano senza che tu te ne accorga.",
    "buy.l1_3": "I fattori scatenanti dell'attrazione che creano un vero investimento emotivo.",
    "buy.l1_4": "Come smettere di rimuginare su ogni messaggio e iniziare a capire cosa sta davvero succedendo nella sua mente.",
    "buy.l1_5": "Cosa rende una relazione più forte invece di affievolirsi dopo la fase di luna di miele.",
    "buy.label2": "Questa Guida Fa Per Te Se",
    "buy.l2_1": "Sei stanca di chiederti perché è cambiato.",
    "buy.l2_2": "Continui ad attrarre uomini a cui piaci… ma che non si impegnano mai del tutto.",
    "buy.l2_3": "Hai finito di inseguire segnali contrastanti.",
    "buy.l2_4": "Vuoi chiarezza invece di confusione.",
    "buy.l2_5": "Vuoi costruire attrazione senza fingere di essere qualcuno che non sei.",
    "buy.label3": "Immagina Questo",
    "buy.im1": "Invece di controllare il telefono ogni cinque minuti…",
    "buy.im2": "Invece di riavvolgere le conversazioni nella tua testa…",
    "buy.im3": "Invece di chiedere alle tue amiche cosa \"significasse davvero\" il suo ultimo messaggio…",
    "buy.im4": "Capisci finalmente la psicologia dietro il suo comportamento, e sai esattamente come rispondere con sicurezza.",
    "buy.imCloser": "Questo cambia tutto.",
    "buy.label4": "Perché Questa Guida È Diversa",
    "buy.diff1": "La maggior parte dei consigli sugli appuntamenti dice: \"Aspetta più a lungo.\" \"Fatti desiderare.\" \"Sii semplicemente te stessa.\"",
    "buy.diff2": "Questa guida spiega perché a volte funziona… e perché spesso no.",
    "buy.diff3": "Capirai i principi psicologici alla base dell'attrazione, così potrai smettere di tirare a indovinare.",
    "buy.label5": "Accesso Digitale Istantaneo",
    "buy.l3_1": "Leggilo su qualsiasi telefono, tablet o computer.",
    "buy.l3_2": "Finiscilo in una sola serata.",
    "buy.l3_3": "Applicalo subito alla tua relazione attuale o futura.",
    "buy.hangChip": "Prezzo di Lancio",
    "buy.offerEyebrow": "Il Tuo Bonus di Lettura",
    "buy.offerNote": "Riservato esclusivamente per i tuoi risultati",
    "buy.chip1": "Psicologia maschile",
    "buy.chip2": "Fattori di attrazione",
    "buy.chip3": "Errori nei messaggi",
    "buy.chip4": "Connessione emotiva",
    "buy.chip5": "Attrazione a lungo termine",
    "buy.faqTitle": "Domande Frequenti",
    "buy.faq1q": "È manipolazione?",
    "buy.faq1a": "No. Si tratta di capire l'attrazione, la sicurezza in sé stesse e una comunicazione sana, non di controllare o ingannare nessuno.",
    "buy.faq2q": "Funzionerà se ha già perso interesse?",
    "buy.faq2a": "Dipende dal motivo per cui ha perso interesse. La guida non può garantire risultati, ma può aiutarti a evitare errori comuni e a migliorare il tuo approccio.",
    "buy.faq3q": "Quanto è lunga questa guida?",
    "buy.faq3a": "È una guida di 50 pagine, breve e pratica.",
    "buy.ctaBtn": "Accesso Istantaneo",
    "buy.footerNote": "Accesso digitale istantaneo, inizia a leggere in pochi minuti.",
    "buy.trustLine": "🔒 Pagamento sicuro · 50 pagine",
    "buy.refundLink": "Tutte le vendite sono definitive · Vedi la politica",
    "buy.insideLink": "Guarda cosa contiene ↓",
    "buy.tocTitle": "Cosa imparerai",
    "buy.tocTakeaway": "<strong>Concetto chiave:</strong> Questo libro parla di diventare così centrata, interessante ed emotivamente intelligente che l'attrazione diventa un effetto collaterale naturale, non una recita.",
    "wheel.teaserTitle": "Uno Sconto Ti Sta Aspettando",
    "wheel.teaserSub": "Gira la ruota per avere la possibilità di vincere fino al 100% di sconto sul libro.",
    "wheel.spinBtn": "Gira la Ruota",
    "wheel.bannerLabel": "🎉 Il Tuo Sconto È Pronto",
    "wheel.codeLabel": "Codice:",
    "wheel.copyBtn": "Copia",
    "wheel.modalTitle": "Gira Per il Tuo Sconto",
    "wheel.modalSubDefault": "Trascina la ruota e lascia andare per farla girare",
    "wheel.resultLabel": "🎉 Hai Vinto",
    "wheel.continueBtn": "Continua",
    "proof.description": "<p>Queste donne erano come te.</p><p>Gli uomini che desideravano davano loro segnali contrastanti e si allontanavano.</p><p>Poi hanno scoperto il libro.</p><p>Ora, quegli stessi uomini le rincorrono, si impegnano di più, e diventano <span class=\"proof-obsessed\">ossessionati</span> da loro.</p>",
    "proof.nextBtn": "Scopri il Tuo Campanello d'Allarme Più Grande",
    "proof.footerNote": "I tuoi risultati sono unici in base alle tue risposte, non sono consigli generici.",
    "chat.headerTitle": "Chiedi a Rita",
    "chat.headerSub": "Le tue domande sulle relazioni, con risposta",
  };
  CARD_LABELS.it = { strongest: "PUNTO DI FORZA", growth: "MARGINE DI CRESCITA", prepare: "Preparazione della tua scheda…", linkFallback: "Fai tu il test" };
})();
