(function(){
  QUIZ_CONFIG_BY_LANG.nl = {
    relationship: {
      "questions": [
        {
          "text": "Wie stuurt meestal het eerste berichtje?",
          "options": [
            {
              "label": "Hij neemt bijna altijd het initiatief",
              "interest": 3,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Het is redelijk gelijk verdeeld tussen ons",
              "interest": 1,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Ik ben bijna altijd degene die begint",
              "interest": -2,
              "comm": 0,
              "ei": 0
            },
            {
              "label": "We appen nauwelijks",
              "interest": -3,
              "comm": -2,
              "ei": 0
            }
          ]
        },
        {
          "text": "Hoe lang duurt het meestal voordat hij reageert?",
          "options": [
            {
              "label": "Bijna direct",
              "interest": 1,
              "comm": 3,
              "ei": 0
            },
            {
              "label": "Binnen een paar uur",
              "interest": 0,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Vaak een dag of langer",
              "interest": 0,
              "comm": -2,
              "ei": 0
            },
            {
              "label": "Het is totaal onvoorspelbaar",
              "interest": 0,
              "comm": -1,
              "ei": -1
            }
          ]
        },
        {
          "text": "Heeft hij je al eens mee uit genomen op een echte date?",
          "options": [
            {
              "label": "Ja, meer dan eens",
              "interest": 2,
              "comm": 0,
              "ei": 3
            },
            {
              "label": "Ja, één keer",
              "interest": 1,
              "comm": 0,
              "ei": 1
            },
            {
              "label": "We hebben erover gepraat, maar er is niets gebeurd",
              "interest": 0,
              "comm": 0,
              "ei": -1
            },
            {
              "label": "Nee",
              "interest": 0,
              "comm": 0,
              "ei": -3
            }
          ]
        },
        {
          "text": "Heeft hij je ooit geghost of is hij zonder uitleg koud geworden?",
          "options": [
            {
              "label": "Nooit",
              "interest": 0,
              "comm": 1,
              "ei": 2
            },
            {
              "label": "Eén keer, maar hij kwam terug",
              "interest": 0,
              "comm": 0,
              "ei": -1
            },
            {
              "label": "Het gebeurt vaak",
              "interest": 0,
              "comm": -2,
              "ei": -3
            },
            {
              "label": "Hij doet het op dit moment",
              "interest": -2,
              "comm": -3,
              "ei": -3
            }
          ]
        },
        {
          "text": "Weet je meestal duidelijk waar je met hem staat, of moet je er vaak naar vragen?",
          "options": [
            {
              "label": "Heel duidelijk, hij laat het merken zonder dat ik hoef te vragen",
              "interest": 2,
              "comm": 3,
              "ei": 0
            },
            {
              "label": "Redelijk duidelijk, al heb ik één of twee keer moeten vragen",
              "interest": 0,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Ik heb meer dan eens moeten vragen en voel me nog steeds onzeker",
              "interest": -1,
              "comm": -2,
              "ei": 0
            },
            {
              "label": "Ik heb geen idee waar ik sta",
              "interest": -2,
              "comm": -3,
              "ei": -1
            }
          ]
        },
        {
          "text": "Voelt de inzet in deze situatie over het algemeen wederzijds aan?",
          "options": [
            {
              "label": "Ja, het voelt in balans",
              "interest": 3,
              "comm": 2,
              "ei": 2
            },
            {
              "label": "Meestal wel, al doe ik iets meer",
              "interest": 1,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Nee, ik doe duidelijk meer",
              "interest": -2,
              "comm": -1,
              "ei": -1
            },
            {
              "label": "Ik doe al het werk",
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
          "Genoteerd, dit zegt iets over zijn interesseniveau.",
          "Dat is een sterk interesse-signaal."
        ],
        "comm": [
          "Dit beïnvloedt je Communicatiescore.",
          "Dit soort communicatiepatronen is erg belangrijk."
        ],
        "ei": [
          "Dit telt mee voor Emotionele Investering.",
          "Dat is een belangrijke indicator voor emotionele investering."
        ],
        "neutral": [
          "Genoteerd, we nemen dit mee in je lezing."
        ]
      },
      "resultCopy": {
        "interest": {
          "label": "Interest",
          "high": "Hij doet echt moeite om dit gaande te houden, het initiatief en de aandacht wijzen op oprechte interesse, niet alleen op gemak.",
          "mid": "Zijn interesse is wisselend, soms warm, dan weer afstandelijk, zonder een stabiel patroon van investering in beide richtingen.",
          "low": "Het kernprobleem is een gebrek aan consistente interesse. Hij neemt zelden het initiatief, en bijna alle inspanning in deze connectie komt van jou."
        },
        "comm": {
          "label": "Communicatie",
          "high": "Het gesprek verloopt gemakkelijk en hij is consequent aanwezig, een sterke basis, als de rest van het beeld klopt.",
          "mid": "Communicatie is functioneel maar ongelijkmatig, reacties komen wel, maar zonder veel urgentie of energie erachter.",
          "low": "Het kernprobleem is onbetrouwbare communicatie. Reacties zijn traag en inconsistent, zonder een betrouwbaar ritme om op te bouwen."
        },
        "ei": {
          "label": "His Effort",
          "high": "Hij is persoonlijk komen opdagen, heeft je in zijn wereld betrokken, en is consistent gebleven, dat is echte investering, niet alleen appenergie.",
          "mid": "Emotionele investering is aanwezig maar onvolledig, zijn daden komen nog niet volledig overeen met zijn woorden.",
          "low": "Het kernprobleem is lage emotionele investering. Afstand, inconsistente opvolging en onverklaarde koude periodes wegen zwaarder dan enige echte toewijding."
        }
      },
      "warningCopy": {
        "interest": {
          "label": "Interest",
          "high": "Interesse kan snel vervagen zodra er comfort ontstaat. Als je stopt met letten op hoe initiatief en inzet in de loop van de tijd veranderen, loop je het risico het exacte moment te missen waarop zijn interesse begint te dalen.",
          "mid": "Wisselende interesse is gemakkelijk over het hoofd te zien totdat het de norm wordt. Als je de kloof blijft overbruggen elke keer dat hij zich terugtrekt, loop je het risico een ongelijkmatig patroon voor iets stabiels aan te zien.",
          "low": "Je antwoorden wijzen op een patroon van eenzijdige inspanning. Als dit onaangepakt blijft, loop je het risico geïnvesteerd te blijven in een connectie die niet wordt beantwoord, en zijn gebrek aan initiatief aan te zien voor iets dat vanzelf zal veranderen."
        },
        "comm": {
          "label": "Communicatie",
          "high": "Snelle reacties kunnen diepere inconsistentie maskeren. Als je stopt met evalueren wat er daadwerkelijk gezegd wordt en je alleen richt op snelheid, loop je het risico een gebrek aan echte duidelijkheid over het hoofd te zien.",
          "mid": "Ongelijkmatige communicatie is gemakkelijk te verontschuldigen in geïsoleerde momenten. Als reacties met weinig inzet of vertraging onaangepakt blijven, loop je het risico jezelf te trainen om minder consistentie te accepteren dan de relatie nodig heeft.",
          "low": "Je antwoorden wijzen op onbetrouwbare communicatie als het kernrisico hier. Zonder een betrouwbaar ritme zullen verkeerd begrepen signalen en herhaalde verwarring waarschijnlijk blijven terugkeren in plaats van op te lossen."
        },
        "ei": {
          "label": "His Effort",
          "high": "Zichtbare investering kan van binnen nog steeds inconsistent zijn. Als je stopt met controleren of zijn daden blijven overeenkomen met zijn woorden, loop je het risico verrast te worden door een verschuiving die je niet zag aankomen.",
          "mid": "Emotionele investering die niet volledig overeenkomt met zijn woorden is een patroon om in de gaten te houden, niet te negeren. Als dit onaangepakt blijft, loop je het risico verwachtingen op te bouwen op beloftes die niet worden ondersteund door consistente actie.",
          "low": "Je antwoorden wijzen op lage emotionele investering als het kernrisico hier. Afstand, inconsistente opvolging en onverklaarde koude periodes hebben de neiging terug te keren in plaats van op te lossen zonder een duidelijke gedragsverandering."
        }
      },
      "bridgeMap": {
        "interest": "Je lezing laat zien dat interesse het meest wankele deel van deze dynamiek is, en dat is precies waar de psychologiehoofdstukken in het boek op zijn gebouwd om te veranderen.",
        "comm": "Je lezing laat zien dat communicatie de zwakste plek is in deze connectie, de hoofdstukken over appen laten precies zien hoe je dat oplost.",
        "ei": "Je lezing laat zien dat emotionele investering hier het gat is, de hoofdstukken van het boek over het opbouwen van echte, blijvende aantrekkingskracht spreken dit direct aan."
      },
      "bookDesc": {
        "interest": [
          "Jouw grootste waarschuwing ging over interesse, en dat los je niet op met een paar slimme berichtjes.",
          "Je moet begrijpen waarom mannelijke interesse vervaagt, wat het stilletjes om zeep helpt, en wat een man er echt bij houdt, lang na de beginfase.",
          "Deze gids is niet gebaseerd op manipulatie, spelletjes of nepte tekst-trucjes.",
          "Hij is gebouwd rond de psychologie achter aantrekkingskracht en emotionele investering, precies de mechanismen achter het patroon dat jouw uitslag zojuist liet zien."
        ],
        "comm": [
          "Jouw grootste waarschuwing ging over communicatie, gemengde signalen, wisselvallige reacties, en de verwarring die ze achterlaten.",
          "Je moet begrijpen waarom de communicatie vastloopt, hoe je leest wat daar werkelijk onder zit, en hoe je de ontbrekende duidelijkheid creëert.",
          "Deze gids is niet gebaseerd op manipulatie, spelletjes of nepte tekst-trucjes.",
          "Hij is gebouwd rond de psychologie van heldere communicatie en emotionele connectie, precies de mechanismen achter het patroon dat jouw uitslag zojuist liet zien."
        ],
        "ei": [
          "Jouw grootste waarschuwing ging over inzet, een onbalans waarbij jij meer van deze connectie draagt dan hij.",
          "Je moet begrijpen waarom die onbalans ontstaat, wat een man van passief naar betrokken doet omslaan, en hoe je stopt met al het werk alleen te doen.",
          "Deze gids is niet gebaseerd op manipulatie, spelletjes of nepte tekst-trucjes.",
          "Hij is gebouwd rond de psychologie van inzet en investering, precies de mechanismen achter het patroon dat jouw uitslag zojuist liet zien."
        ]
      },
      "loadingLine": "Je antwoorden worden geanalyseerd…",
      "loadingSubtext": "Je reacties worden vergeleken met meer dan 10.000 gedragsdatasets over relaties…",
      "nameHeadline": "Je lezing is klaar.",
      "nameSub": "Vul je naam in zodat je resultaten je direct aanspreken, Interesseniveau, Communicatiescore, Emotionele Investering, en je grootste relationele blinde vlek."
    },
    single: {
    questions: [
      { text: "Hoe communiceert hij meestal met jou?", options: [
        { label: "Hij schrijft me regelmatig en houdt de gesprekken gaande.", comm: 3, interest: 1, effort: 1 },
        { label: "Hij is warm en koud / soms verdwijnt hij.", comm: -3, interest: -1, effort: -1 },
        { label: "Meestal begin ik de gesprekken.", comm: -1, interest: -1, effort: -2 }
      ]},
      { text: "Wie zet meestal de eerste stap?", options: [
        { label: "Hij neemt vaak het initiatief.", interest: 2, effort: 3, comm: 0 },
        { label: "Het is redelijk in balans.", interest: 1, effort: 1, comm: 0 },
        { label: "Meestal neem ik het initiatief.", interest: -1, effort: -3, comm: 0 }
      ]},
      { text: "Hoe reageert hij als jij een beetje afstand neemt?", options: [
        { label: "Hij merkt het en komt dichterbij.", interest: 3, effort: 2, comm: 1 },
        { label: "Hij geeft me de ruimte en reageert niet echt.", interest: -1, effort: 0, comm: 0 },
        { label: "Hij lijkt zijn interesse te verliezen.", interest: -2, effort: -2, comm: -1 }
      ]},
      { text: "Hoe behandelt hij je als jullie samen zijn?", options: [
        { label: "Hij geeft me aandacht en zoekt redenen om dicht bij me te zijn.", interest: 2, effort: 1, comm: 1 },
        { label: "Hij is aardig maar moeilijk te doorgronden.", interest: 0, effort: -1, comm: -2 },
        { label: "Ik heb vaak het gevoel dat ik zijn aandacht moet trekken.", interest: -2, effort: -2, comm: -1 }
      ]},
      { text: "Wat is het grootste signaal dat je doet twijfelen aan zijn interesse?", options: [
        { label: "Zijn tegenstrijdige signalen.", interest: -2, comm: -1, effort: -1 },
        { label: "Zijn onregelmatige communicatie.", comm: -3, interest: -1, effort: 0 },
        { label: "Hij doet niet genoeg moeite.", effort: -3, interest: -1, comm: 0 }
      ]},
      { text: "Wat wil je echt over hem weten?", options: [
        { label: "Of hij me echt leuk vindt.", interest: -1, comm: 0, effort: -1 },
        { label: "Of hij me ziet als meer dan een vriendin.", interest: -1, effort: 0, comm: -1 },
        { label: "Of ik hem moet blijven achtervolgen.", effort: -2, interest: 0, comm: 0 }
      ]}
    ],
    axes: ["interest","comm","effort"],
    ranges: { interest: { min: -9, max: 7 }, comm: { min: -10, max: 5 }, effort: { min: -14, max: 7 } },
    microInsights: {
      interest: ["Genoteerd, dit zegt veel over zijn interesseniveau.", "Dit is een sterk signaal van interesse."],
      comm: ["Dit beïnvloedt je uitslag voor Communicatie.", "Communicatiepatronen zoals dit tellen zwaar mee."],
      effort: ["Dit telt mee in hoeveel moeite hij daadwerkelijk doet.", "Dit is een belangrijk signaal over zijn inzet."],
      neutral: ["Begrepen, ik neem dit mee in je uitslag."]
    },
    resultCopy: {
      interest: {
        label: "Interesse",
        high: "Hij toont echte tekenen van interesse, hij neemt het initiatief, blijft dichtbij en geeft je redenen om te geloven dat het niet slechts toevallig is.",
        mid: "Zijn interesse is er, maar komt en gaat, genoeg om je nieuwsgierig te houden, nog niet genoeg om je zekerheid te geven.",
        low: "Het kernpatroon hier is een gebrek aan constante interesse, op dit moment stel jij jezelf meer vragen dan dat hij stappen zet."
      },
      comm: {
        label: "Communicatie",
        high: "De communicatie met hem voelt stabiel en makkelijk, een sterk signaal, als de rest van het plaatje klopt.",
        mid: "De communicatie werkt, maar is onregelmatig, het gesprek bestaat, alleen zonder een betrouwbaar ritme op dit moment.",
        low: "Het kernpatroon hier is onvoorspelbare communicatie, de tegenstrijdige signalen en stiltes maken het moeilijk om echt te weten waar je aan toe bent."
      },
      effort: {
        label: "Zijn inzet",
        high: "Hij doet echt moeite om de afstand te verkleinen, hij neemt het initiatief, merkt het als jij afstand neemt en maakt tijd voor je vrij.",
        mid: "Zijn inzet komt met vlagen, aanwezig als het makkelijk is, moeilijker te vinden als dat niet zo is.",
        low: "Het kernpatroon hier is een onevenwicht in inzet, op dit moment draag jij het grootste deel van het gewicht van deze situatie."
      }
    },
    warningCopy: {
      interest: {
        label: "Interesse",
        high: "Zelfs sterke interesse in het begin kan vervagen als hij niet het juiste soort aandacht krijgt. Als je stopt met opletten hoe zijn initiatief zich in de tijd ontwikkelt, loop je het risico het moment te missen waarop zijn interesse begint af te koelen.",
        mid: "Onregelmatige interesse is op het moment zelf makkelijk te verklaren. Als jij steeds zelf de stiltes blijft opvullen, loop je het risico een warm-koud patroon aan te zien voor iets stabielers dan het werkelijk is.",
        low: "Je antwoorden wijzen erop dat een gebrek aan constante interesse hier het grootste risico is. Zonder een echte verandering loop je het risico geïnvesteerd te blijven in een situatie die niet dezelfde energie teruggeeft."
      },
      comm: {
        label: "Communicatie",
        high: "Een makkelijk gesprek kan toch een echt gebrek aan duidelijkheid verbergen. Als je je alleen richt op hoe vaak hij reageert in plaats van op wat hij écht zegt, loop je het risico het grotere patroon te missen.",
        mid: "Onregelmatige communicatie is makkelijk te verontschuldigen, bericht na bericht. Als er niets verandert, loop je het risico te wennen aan minder consistentie dan een echte connectie vereist.",
        low: "Je antwoorden wijzen erop dat onvoorspelbare communicatie hier het grootste risico is. Zonder een duidelijker patroon zullen verwarring en tegenstrijdige signalen zich waarschijnlijk blijven herhalen in plaats van vanzelf op te lossen."
      },
      effort: {
        label: "Zijn inzet",
        high: "Zichtbare inzet nu garandeert niet dat die blijft nadat de nieuwigheid is verdwenen. Als je stopt met opletten of hij het initiatief blijft nemen, loop je het risico verrast te worden door een verandering in wie de stappen zet.",
        mid: "Inzet die maar af en toe verschijnt, is makkelijk aan te zien voor echte betrokkenheid. Als je dit niet in de gaten houdt, loop je het risico meer werk te verzetten, simpelweg omdat jij er wél op let.",
        low: "Je antwoorden wijzen erop dat een echt onevenwicht in inzet hier het grootste risico is. Zonder verandering blijft dit patroon eerder voortduren dan zichzelf herstellen, waardoor jij een connectie blijft dragen die hij niet evenaart."
      }
    },
    bridgeMap: {
      interest: "Jouw uitslag laat zien dat zijn interesse op dit moment het meest kwetsbare deel van deze dynamiek is, er is hier echt potentieel, maar bepaalde patronen remmen het af. Jouw resultaat laat zien wat er speelt; het boek laat je precies zien hoe je de situatie in jouw voordeel kunt laten evolueren.",
      comm: "Jouw uitslag laat zien dat communicatie op dit moment het zwakste punt van deze connectie is, er is hier echt potentieel, maar bepaalde patronen remmen het af. Jouw resultaat laat zien wat er speelt; het boek legt je precies uit hoe je de duidelijkheid creëert die je mist.",
      effort: "Jouw uitslag laat zien dat de inzet in deze situatie op dit moment uit balans is, er is hier echt potentieel, maar bepaalde patronen remmen het af. Jouw resultaat laat zien wat er speelt; het boek laat je precies zien hoe je de dynamiek kunt laten evolueren zodat hij jouw energie begint te evenaren."
    },
    bookDesc: {
      interest: [
        "Jouw grootste waarschuwing ging over zijn interesse, en dat los je niet op met een paar slimme berichtjes.",
        "Je moet begrijpen waarom mannelijke interesse al vervaagt voordat het officieel wordt, en wat een man er echt toe brengt te kiezen voor iets echts.",
        "Deze gids is niet gebaseerd op manipulatie, spelletjes of nepte tekst-trucjes.",
        "Hij is gebouwd rond de psychologie achter aantrekkingskracht en emotionele investering, precies de mechanismen achter het patroon dat jouw uitslag zojuist liet zien."
      ],
      comm: [
        "Jouw grootste waarschuwing ging over communicatie, gemengde signalen, wisselvallige reacties, en de verwarring die ze achterlaten.",
        "Je moet begrijpen waarom de communicatie onduidelijk blijft, hoe je leest wat daar werkelijk onder zit, en hoe je de ontbrekende duidelijkheid creëert.",
        "Deze gids is niet gebaseerd op manipulatie, spelletjes of nepte tekst-trucjes.",
        "Hij is gebouwd rond de psychologie van heldere communicatie en emotionele connectie, precies de mechanismen achter het patroon dat jouw uitslag zojuist liet zien."
      ],
      effort: [
        "Jouw grootste waarschuwing ging over inzet, een onbalans waarbij jij meer naar hem toe beweegt dan hij naar jou.",
        "Je moet begrijpen waarom die onbalans ontstaat, wat een man van vrijblijvend naar betrokken doet omslaan, en hoe je stopt alles alleen te dragen.",
        "Deze gids is niet gebaseerd op manipulatie, spelletjes of nepte tekst-trucjes.",
        "Hij is gebouwd rond de psychologie van inzet en investering, precies de mechanismen achter het patroon dat jouw uitslag zojuist liet zien."
      ]
    },
    loadingLine: "Je patronen worden geanalyseerd…",
    loadingSubtext: "Je antwoorden worden vergeleken met meer dan 10.000 datingpatronen…",
    nameHeadline: "Je uitslag is klaar.",
    nameSub: "Vul alleen je voornaam in — verder niets. Dit personaliseert je scores voor Interesse, Communicatie en Zijn inzet hieronder. Geen e-mail, geen aanmelding."
  }
  };
  STATIC_STRINGS.nl = {
    "landing.eyebrow": "De Analyzer",
    "landing.h1": "Vindt Hij Je Leuk? <em>Stop Met Gissen. Zie Wat Zijn Gedrag Je Eigenlijk Vertelt.</em>",
    "landing.sub": "6 vragen &middot; <em>60 seconden</em> &middot; persoonlijk. Begrijp het patroon achter zijn acties, communicatie &amp; inzet.",
    "landing.startBtn": "Start Mijn Analyse",
    "landing.previewInterest": "Interesse",
    "landing.previewComm": "Communicatie",
    "landing.previewInvestment": "Investering",
    "landing.trust": "Ontworpen op basis van relatiepsychologie en communicatiepatronen voor doordachte, persoonlijke inzichten.",
    "landingSingle.eyebrow": "De Analyzer",
    "landingSingle.h1": "Vindt Hij Je Leuk? <em>Ontdek Wat Zijn Acties Écht Betekenen</em>",
    "landingSingle.sub": "Zes vragen. <em>Zestig seconden</em>. Ontdek of zijn acties echte interesse tonen of gemengde signalen.",
    "landingSingle.startBtn": "Start Mijn Analyse",
    "landingSingle.previewConfidence": "Interesse",
    "landingSingle.previewMagnetism": "Communicatie",
    "landingSingle.previewSelfInvestment": "Zijn Inzet",
    "landingSingle.trust": "Ontworpen op basis van relatiepsychologie en communicatiepatronen voor doordachte, persoonlijke inzichten.",
    "gate.h1": "Wat Is Jouw Situatie Met <em>Hem</em>?",
    "gate.sub": "We stemmen je analyse precies af op jouw situatie.",
    "gate.yes": "❤️ We hebben een relatie",
    "gate.no": "👀 We zijn niet officieel samen",
    "shared.liveBadge": "lezers verkennen zijn signalen",
    "name.eyebrow": "Bijna Klaar",
    "name.lockText": "Je scores staan klaar",
    "name.placeholder": "Je voornaam",
    "name.err": "Vul je voornaam in om verder te gaan.",
    "name.btn": "Ontgrendel Mijn Resultaten",
    "name.privacyBadge": "Alleen je voornaam — geen e-mail, geen registratie",
    "name.micro": "Kost 2 seconden. We vragen nooit om je e-mailadres.",
    "name.emailNote": "Tip: kijk ook in je spamfolder.",
    "results.eyebrow": "Jouw Analyse",
    "results.strengthLabel": "Grootste Kracht",
    "results.warningLabel": "Grootste Waarschuwing",
    "results.downloadBtn": "Download Mijn Resultaatkaart",
    "results.shareHint": "Een deelbare samenvattingskaart, perfect voor je TikTok of Instagram story",
    "results.nextBtn": "Bekijk Wat Je Nu Moet Doen",
    "proof.eyebrow": "Het Oordeel Is Nog Maar Het Halve Verhaal",
    "proof.h1": "Je analyse laat het patroon zien. Dit laat zien hoe je het verandert.",
    "proof.testimonialsTitle": "Een paar berichten van lezeressen ❤️",
    "buy.digitalNotice": "100% Digitaal eBook &middot; Compatibel met iOS, Android, Kindle en PDF-lezers",
    "buy.title": "Maak Hem Geobsedeerd",
    "buy.h1": "Begrijp Hem. <em>Stop Met Gissen Wat Je Nu Moet Doen.</em>",
    "buy.subCopy": "Duik dieper in de psychologie achter aantrekkingskracht, emotionele connectie, gemengde signalen &amp; zijn gedrag.",
    "story.eyebrow": "Ons Verhaal",
    "story.s1_1": "Het begon met een vraag die ik maar bleef stellen…",
    "story.s1_2": "Lang heb ik me steeds weer in situaties met mannen bevonden die me verwarden.",
    "story.s1_3": "Waarom kon een man het ene moment zo geïnteresseerd zijn, en het volgende afstandelijk?",
    "story.s1_4": "Waarom leken sommige mannen te ont trekken naarmate ik dichterbij kwam?",
    "story.s1_5": "Waarom maakte meer aandacht het soms erger, terwijl afstand nemen alles veranderde?",
    "story.s2_1": "En eerlijk? Ik heb die situaties niet altijd goed aangepakt.",
    "story.s2_2": "Ik analyseerde elk bericht te veel. Ik twijfelde aan mezelf.",
    "story.s2_3": "Ik probeerde zijn gedachten te lezen en vroeg me af wat ik fout had gedaan…",
    "story.s2_4": "…en waarom iets dat zo simpel voelde plotseling zo ingewikkeld werd.",
    "story.s2_5": "Maar na deze patronen steeds opnieuw te hebben meegemaakt, begon ik goed te observeren.",
    "story.s3_1": "Ik begon de kleine dingen op te merken die velen van ons over het hoofd zien.",
    "story.s3_2": "De manier waarop mannen communiceren. De manier waarop aantrekkingskracht echt ontstaat.",
    "story.s3_3": "Het verschil tussen achter iemand aan gaan… en echte begeerte creëren.",
    "story.s3_4": "Hoeveel ons eigen gedrag de dynamiek tussen twee mensen kan veranderen.",
    "story.s3_5": "Hoeveel vrouwen het gedrag van mannen verkeerd begrijpen, niet omdat ze verkeerd houden,",
    "story.s3_6": "…maar omdat niemand ooit heeft uitgelegd hoe aantrekkingskracht werkt.",
    "story.s4_1": "Die nieuwsgierigheid werd uiteindelijk iets veel groters.",
    "story.s4_2": "Ik begon alles wat ik leerde op één plek te verzamelen.",
    "story.chip1": "De Patronen",
    "story.chip2": "De Lessen",
    "story.chip3": "De Fouten",
    "story.s4_3": "De gesprekken, de inzichten, en alles wat ik veel eerder had willen begrijpen.",
    "story.s4_4": "Ik studeerde. Ik observeerde. Ik testte verschillende aanpakken tot alles helder werd.",
    "story.s5_1": "Zo werd Make Him Obsessed geboren.",
    "story.s5_2": "Ik maakte het boek zodat elke vrouw iets concreets heeft om op terug te vallen als ze zich verloren voelt…",
    "story.s5_3": "…iets dat je helpt de situatie te begrijpen in plaats van eindeloos te piekeren.",
    "story.s5_4": "En ik bouwde deze website om dezelfde reden: een eenvoudige plek om deze ideeën te ontdekken en je minder verloren te voelen als het om mannen en aantrekkingskracht gaat.",
    "story.s5_5": "Niet geboren uit een verkoopdoel, maar uit een echte behoefte die ik zelf heb meegemaakt.",
    "story.rita1": "Vraag je je nog steeds af wat zijn gedrag betekent?",
    "story.rita2": "Vraag het Rita.",
    "story.rita3": "Vertel haar wat er is gebeurd. Zij helpt je het helder te zien.",
    "story.ritaBtn": "Praat met Rita",
    "story.s6_1": "Want ik weet hoe het voelt om je af te vragen: “Wat doe ik fout?”",
    "story.s6_2": "En ik wil niet dat je dit allemaal alleen moet uitzoeken.",
    "story.s6_3": "Het gaat er niet om dat je iemand anders wordt.",
    "story.s6_4": "Het gaat erom de dynamiek te begrijpen, jezelf te begrijpen, en te weten wat je moet doen als je echt van iemand houdt.",
    "story.s6_5": "Daarom bestaat Make Him Obsessed.",
    "story.finalBtn": "Laat me zien hoe →",
    "journey.s4_2": "Jouw Grootste Waarschuwing",
    "journey.s5_8": "Niet omdat je leerde hem nóg meer achterna te lopen.",
    "journey.s5_9": "Maar omdat je leerde een sterkere connectie te creëren.",
    "journey.finalBtn": "Laat me zien hoe →",
    "jf.b1": "Je kwam hier op zoek naar een antwoord.",
    "jf.b2": "Niet nog een gok.",
    "jf.b3": "Je wilde begrijpen wat er echt gebeurde.",
    "jf.b4": "En nu kan dat.",
    "jf.m1": "Wat dit echt betekent.",
    "jf.m2": "Dit betekent niet automatisch dat hij je niet leuk vindt.",
    "jf.m3": "Het betekent dat er iets is in de manier waarop deze connectie zich ontwikkelt dat je moet begrijpen.",
    "jf.m4": "Want weten wat hij voelt is maar de helft.",
    "jf.m5": "Weten wat je daarna moet doen is de andere helft.",
    "jf.t1": "Stel je voor dat je niet meer om zijn aandacht hoeft te vechten.",
    "jf.t2": "Niet elk berichtje overanalyseren.",
    "jf.t3": "Je niet afvragen waar je staat.",
    "jf.r1": "Wil je meer lezen?",
    "jf.r2": "Bekijk alle reviews →",
    "jf.k1": "Je begrijpt het patroon.",
    "jf.k2": "Leer nu wat je ermee kunt doen.",
    "jf.c1": "Je kwam hier omdat je duidelijkheid wilde.",
    "jf.c2": "Nu weet je waar je moet beginnen.",
    "buy.desc1": "Je hebt geen zoveelste datingtip nodig.",
    "buy.desc2": "Je moet begrijpen waarom hij afstand neemt… waarom hij interesse verliest… en waarom sommige vrouwen nog lang in gedachten blijven nadat ze de kamer hebben verlaten.",
    "buy.desc3": "Deze gids is niet gebaseerd op manipulatie, spelletjes of nepte tekst-trucjes.",
    "buy.desc4": "Hij is gebouwd rond de psychologie achter aantrekkingskracht, emotionele gehechtheid en het gedrag dat iemand stilletjes onvergetelijk maakt.",
    "buy.label1": "Dit Ontdek Je In De Gids",
    "buy.l1_1": "Waarom mannen emotioneel gehecht raken aan bepaalde vrouwen, en interesse verliezen in anderen.",
    "buy.l1_2": "De subtiele fouten die hem wegduwen zonder dat je het doorhebt.",
    "buy.l1_3": "De aantrekkingskrachttriggers die écht emotionele betrokkenheid creëren.",
    "buy.l1_4": "Hoe je stopt met overdenken van elk berichtje en eindelijk begrijpt wat er echt in zijn hoofd omgaat.",
    "buy.l1_5": "Wat een relatie sterker maakt in plaats van te verwateren na de honeymoonfase.",
    "buy.label2": "Deze Gids Is Voor Jou Als",
    "buy.l2_1": "Je het beu bent om je af te vragen waarom hij veranderde.",
    "buy.l2_2": "Je steeds mannen aantrekt die je leuk vinden… maar zich nooit volledig binden.",
    "buy.l2_3": "Je klaar bent met het achtervolgen van tegenstrijdige signalen.",
    "buy.l2_4": "Je duidelijkheid wilt in plaats van verwarring.",
    "buy.l2_5": "Je aantrekkingskracht wilt opbouwen zonder net te doen alsof je iemand anders bent.",
    "buy.label3": "Stel Je Eens Voor",
    "buy.im1": "In plaats van elke vijf minuten je telefoon te checken…",
    "buy.im2": "In plaats van gesprekken steeds opnieuw af te spelen in je hoofd…",
    "buy.im3": "In plaats van je vriendinnen te vragen wat zijn laatste berichtje \"echt betekende\"…",
    "buy.im4": "Begrijp je eindelijk de psychologie achter zijn gedrag, en weet je precies hoe je met zelfvertrouwen reageert.",
    "buy.imCloser": "Dat verandert alles.",
    "buy.label4": "Waarom Deze Gids Anders Is",
    "buy.diff1": "De meeste datingadviezen zeggen: \"Wacht langer.\" \"Doe moeilijk.\" \"Wees gewoon jezelf.\"",
    "buy.diff2": "Deze gids legt uit waarom dat soms werkt… en waarom het vaak niet werkt.",
    "buy.diff3": "Je begrijpt de psychologische principes achter aantrekkingskracht, zodat je kunt stoppen met gokken.",
    "buy.label5": "Directe Digitale Toegang",
    "buy.l3_1": "Lees op elke telefoon, tablet of computer.",
    "buy.l3_2": "Maak hem in één avond uit.",
    "buy.l3_3": "Pas het direct toe op je huidige of toekomstige relatie.",
    "buy.hangChip": "Lanceerprijs",
    "buy.offerEyebrow": "Jouw Leesbonus",
    "buy.offerNote": "Exclusief gereserveerd voor jouw resultaten",
    "buy.chip1": "Mannenpsychologie",
    "buy.chip2": "Aantrekkingstriggers",
    "buy.chip3": "Sms-fouten",
    "buy.chip4": "Emotionele connectie",
    "buy.chip5": "Langdurige aantrekkingskracht",
    "buy.faqTitle": "Veelgestelde Vragen",
    "buy.faq1q": "Is dit manipulatie?",
    "buy.faq1a": "Nee. Het gaat over het begrijpen van aantrekkingskracht, zelfvertrouwen en gezonde communicatie, niet over controleren of misleiden.",
    "buy.faq2q": "Werkt dit ook als hij al interesse heeft verloren?",
    "buy.faq2a": "Dat hangt af van waarom hij interesse verloor. De gids kan geen resultaten garanderen, maar helpt je veelgemaakte fouten te vermijden en je aanpak te verbeteren.",
    "buy.faq3q": "Hoe lang is deze gids?",
    "buy.faq3a": "Het is een gids van 50 pagina's, kort en praktisch.",
    "buy.ctaBtn": "Directe Toegang",
    "buy.footerNote": "Directe digitale toegang, begin binnen enkele minuten met lezen.",
    "buy.trustLine": "🔒 Veilig afrekenen · 50 pagina's",
    "buy.refundLink": "Alle verkopen zijn definitief · Bekijk beleid",
    "buy.insideLink": "Bekijk wat erin zit ↓",
    "buy.tocTitle": "Wat je gaat leren",
    "buy.tocTakeaway": "<strong>Kernboodschap:</strong> Dit boek gaat over zo gegrond, interessant en emotioneel intelligent worden dat aantrekkingskracht een natuurlijk neveneffect wordt, geen optreden.",
    "wheel.teaserTitle": "Er Wacht Een Korting Op Je",
    "wheel.teaserSub": "Draai aan het wiel voor de kans om tot 100% korting op het boek te winnen.",
    "wheel.spinBtn": "Draai Het Wiel",
    "wheel.bannerLabel": "🎉 Je Korting Is Klaar",
    "wheel.codeLabel": "Code:",
    "wheel.copyBtn": "Kopiëren",
    "wheel.modalTitle": "Draai Voor Je Korting",
    "wheel.modalSubDefault": "Sleep het wiel en laat los om te draaien",
    "wheel.resultLabel": "🎉 Je Hebt Gewonnen",
    "wheel.continueBtn": "Doorgaan",
    "proof.description": "<p>Deze vrouwen waren zoals jij.</p><p>De mannen die ze wilden, gaven gemengde signalen en trokken zich terug.</p><p>Toen ontdekten ze het boek.</p><p>Nu lopen diezelfde mannen achter hen aan, investeren ze meer, en worden ze <span class=\"proof-obsessed\">geobsedeerd</span> door hen.</p>",
    "proof.nextBtn": "Onthul Je Grootste Waarschuwingssignaal",
    "proof.footerNote": "Jouw resultaten zijn uniek voor jouw antwoorden, dit is geen generiek advies.",
    "chat.headerTitle": "Vraag Het Rita",
    "chat.headerSub": "Jouw relatievragen, beantwoord",
  };
  CARD_LABELS.nl = { strongest: "STERKSTE PUNT", growth: "RUIMTE OM TE GROEIEN", prepare: "Je kaart wordt voorbereid…", linkFallback: "Doe de test zelf" };
})();
