(function(){
  QUIZ_CONFIG_BY_LANG.de = {
    relationship: {
      "questions": [
        { "text": "Wer schreibt normalerweise zuerst?", "options": [
            { "label": "Er ergreift fast immer die Initiative", "interest": 3, "comm": 1, "ei": 0 },
            { "label": "Es ist ziemlich ausgeglichen zwischen uns", "interest": 1, "comm": 1, "ei": 0 },
            { "label": "Ich bin fast immer diejenige, die anfängt", "interest": -2, "comm": 0, "ei": 0 },
            { "label": "Wir schreiben uns kaum", "interest": -3, "comm": -2, "ei": 0 }
        ]},
        { "text": "Wie lange braucht er normalerweise, um zu antworten?", "options": [
            { "label": "Fast sofort", "interest": 1, "comm": 3, "ei": 0 },
            { "label": "Innerhalb weniger Stunden", "interest": 0, "comm": 1, "ei": 0 },
            { "label": "Oft einen Tag oder länger", "interest": 0, "comm": -2, "ei": 0 },
            { "label": "Es ist völlig unvorhersehbar", "interest": 0, "comm": -1, "ei": -1 }
        ]},
        { "text": "Hat er dich schon zu einem richtigen Date ausgeführt?", "options": [
            { "label": "Ja, mehr als einmal", "interest": 2, "comm": 0, "ei": 3 },
            { "label": "Ja, einmal", "interest": 1, "comm": 0, "ei": 1 },
            { "label": "Wir haben darüber gesprochen, aber nichts ist passiert", "interest": 0, "comm": 0, "ei": -1 },
            { "label": "Nein", "interest": 0, "comm": 0, "ei": -3 }
        ]},
        { "text": "Hat er dich schon einmal ohne Erklärung ignoriert oder auf Abstand gehalten?", "options": [
            { "label": "Nie", "interest": 0, "comm": 1, "ei": 2 },
            { "label": "Einmal, aber er kam zurück", "interest": 0, "comm": 0, "ei": -1 },
            { "label": "Das passiert oft", "interest": 0, "comm": -2, "ei": -3 },
            { "label": "Er macht das gerade jetzt", "interest": -2, "comm": -3, "ei": -3 }
        ]},
        { "text": "Ist dir meistens klar, woran du mit ihm bist, oder musst du oft nachfragen?", "options": [
            { "label": "Sehr klar, er teilt es mir mit, ohne dass ich fragen muss", "interest": 2, "comm": 3, "ei": 0 },
            { "label": "Ziemlich klar, obwohl ich schon ein- oder zweimal nachfragen musste", "interest": 0, "comm": 1, "ei": 0 },
            { "label": "Ich musste mehrmals nachfragen und bin mir immer noch unsicher", "interest": -1, "comm": -2, "ei": 0 },
            { "label": "Ich habe keine Ahnung, woran ich bin", "interest": -2, "comm": -3, "ei": -1 }
        ]},
        { "text": "Fühlt sich der Einsatz insgesamt für dich gegenseitig an?", "options": [
            { "label": "Ja, es fühlt sich ausgeglichen an", "interest": 3, "comm": 2, "ei": 2 },
            { "label": "Größtenteils, auch wenn ich etwas mehr investiere", "interest": 1, "comm": 1, "ei": 0 },
            { "label": "Nein, ich investiere eindeutig mehr", "interest": -2, "comm": -1, "ei": -1 },
            { "label": "Ich mache die ganze Arbeit", "interest": -3, "comm": -2, "ei": -2 }
        ]}
      ],
      "axes": ["interest", "comm", "ei"],
      "ranges": { "interest": { "min": -10, "max": 11 }, "comm": { "min": -12, "max": 10 }, "ei": { "min": -10, "max": 7 } },
      "bookDesc": {
      "interest": [
        "Deine größte Warnung betraf das Interesse, und das lässt sich nicht mit ein paar cleveren Nachrichten beheben.",
        "Du musst verstehen, warum männliches Interesse nachlässt, was es leise zerstört und was einen Mann lange nach der Anfangsphase wirklich engagiert hält.",
        "Dieser Guide basiert nicht auf Manipulation, Spielchen oder falschen Textnachrichten-Tricks.",
        "Er basiert auf der Psychologie von Anziehung und emotionaler Investition, genau den Mechanismen hinter dem Muster, das deine Analyse gerade aufgezeigt hat."
      ],
      "comm": [
        "Deine größte Warnung betraf die Kommunikation, gemischte Signale, unregelmäßige Antworten und die Verwirrung, die sie hinterlassen.",
        "Du musst verstehen, warum Kommunikation zerbricht, wie du erkennst, was darunter wirklich passiert, und wie du die fehlende Klarheit schaffst.",
        "Dieser Guide basiert nicht auf Manipulation, Spielchen oder falschen Textnachrichten-Tricks.",
        "Er basiert auf der Psychologie klarer Kommunikation und emotionaler Verbindung, genau den Mechanismen hinter dem Muster, das deine Analyse gerade aufgezeigt hat."
      ],
      "ei": [
        "Deine größte Warnung betraf den Einsatz, ein Ungleichgewicht, bei dem du mehr von dieser Verbindung trägst als er.",
        "Du musst verstehen, warum dieses Ungleichgewicht entsteht, was einen Mann von passiv zu engagiert macht und wie du aufhörst, die ganze Arbeit allein zu machen.",
        "Dieser Guide basiert nicht auf Manipulation, Spielchen oder falschen Textnachrichten-Tricks.",
        "Er basiert auf der Psychologie von Einsatz und Investition, genau den Mechanismen hinter dem Muster, das deine Analyse gerade aufgezeigt hat."
      ]
    },
      "loadingLine": "Deine Antworten werden analysiert…",
      "loadingSubtext": "Vergleich deiner Antworten mit über 10.000 Beziehungsverhaltens-Datensätzen…",
      "nameHeadline": "Deine Analyse ist bereit.",
      "nameSub": "Gib deinen Vornamen ein, damit deine Ergebnisse direkt zu dir sprechen, Interessenslevel, Kommunikations-Score, emotionale Investition und dein größter blinder Fleck in der Beziehung.",
      "resultCopy": {
        "interest": { "label": "Interest",
          "high": "Er investiert echten Aufwand, um das am Laufen zu halten, die Initiative und Aufmerksamkeit deuten auf echtes Interesse hin, nicht nur auf Bequemlichkeit.",
          "mid": "Sein Interesse ist unbeständig, mal warmherzig, mal distanziert, ohne ein stabiles Muster an Investition in die eine oder andere Richtung.",
          "low": "Das Kernproblem ist ein Mangel an anhaltendem Interesse. Er ergreift selten die Initiative, und fast die gesamte Anstrengung in dieser Verbindung kommt von dir."
        },
        "comm": { "label": "Kommunikation",
          "high": "Die Konversation läuft mühelos und er ist konstant präsent, eine solide Basis, wenn der Rest des Bildes dazu passt.",
          "mid": "Die Kommunikation funktioniert, ist aber ungleichmäßig, Antworten kommen, aber ohne viel Dringlichkeit oder Energie dahinter.",
          "low": "Das Kernproblem ist eine unzuverlässige Kommunikation. Antworten sind langsam und inkonsistent, ohne einen verlässlichen Rhythmus."
        },
        "ei": { "label": "His Effort",
          "high": "Er hat sich persönlich gezeigt, dich in seine Welt eingeführt und ist konstant geblieben, das ist echte Investition, nicht nur Textnachrichten-Energie.",
          "mid": "Emotionale Investition ist vorhanden, aber unvollständig, seine Taten entsprechen noch nicht ganz seinen Worten.",
          "low": "Das Kernproblem ist eine geringe emotionale Investition. Distanz, unbeständige Zuverlässigkeit und unerklärte Funkstille überwiegen jede echte Bindung."
        }
      },
      "warningCopy": {
        "interest": { "label": "Interest",
          "high": "Interesse kann schnell nachlassen, sobald sich Vertrautheit einstellt. Wenn du aufhörst darauf zu achten, wie sich Initiative und Einsatz mit der Zeit verändern, riskierst du, genau den Moment zu verpassen, in dem sein Interesse zu sinken beginnt.",
          "mid": "Unbeständiges Interesse ist leicht zu übersehen, bis es zur Normalität wird. Wenn du jede Lücke schließt, sobald er sich zurückzieht, riskierst du, ein unregelmäßiges Muster mit etwas Stabilem zu verwechseln.",
          "low": "Deine Antworten deuten auf ein Muster einseitiger Anstrengung hin. Bleibt das unadressiert, riskierst du, in eine Verbindung investiert zu bleiben, die nicht erwidert wird, und seinen Mangel an Initiative für etwas zu halten, das sich von selbst ändern wird."
        },
        "comm": { "label": "Kommunikation",
          "high": "Schnelle Antworten können tiefere Unbeständigkeit verschleiern. Wenn du aufhörst zu bewerten, was tatsächlich gesagt wird, und dich nur auf die Geschwindigkeit konzentrierst, riskierst du, einen Mangel an echter Klarheit zu übersehen.",
          "mid": "Ungleichmäßige Kommunikation ist in einzelnen Momenten leicht zu entschuldigen. Bleiben lustlose oder verzögerte Antworten unadressiert, riskierst du, dich daran zu gewöhnen, weniger Beständigkeit zu akzeptieren, als die Beziehung braucht.",
          "low": "Deine Antworten deuten auf unzuverlässige Kommunikation als Kernrisiko hin. Ohne einen verlässlichen Rhythmus werden missverstandene Signale und wiederholte Verwirrung eher bestehen bleiben als sich aufzulösen."
        },
        "ei": { "label": "His Effort",
          "high": "Sichtbare Investition kann darunter dennoch unbeständig sein. Wenn du aufhörst zu prüfen, ob seine Taten weiterhin zu seinen Worten passen, riskierst du, von einer Veränderung überrascht zu werden, die du nicht kommen sahst.",
          "mid": "Emotionale Investition, die nicht ganz zu seinen Worten passt, ist ein Muster, das man beobachten sollte, nicht ignorieren. Bleibt das unadressiert, riskierst du, Erwartungen auf Versprechen aufzubauen, die nicht durch beständiges Handeln gestützt werden.",
          "low": "Deine Antworten deuten auf geringe emotionale Investition als Kernrisiko hin. Distanz, unbeständige Zuverlässigkeit und unerklärte Funkstille wiederholen sich eher, als dass sie sich ohne eine klare Verhaltensänderung auflösen."
        }
      },
      "microInsights": {
        "interest": ["Notiert, das sagt etwas über sein Interessenslevel aus.", "Das ist ein starkes Interessenssignal."],
        "comm": ["Das prägt deinen Kommunikations-Score.", "Kommunikationsmuster wie dieses zählen sehr."],
        "ei": ["Das fließt in die emotionale Investition ein.", "Das ist ein wichtiger Indikator für emotionale Investition."],
        "neutral": ["Verstanden, das fließt in deine Auswertung ein."]
      },
      "bridgeMap": {
        "interest": "Deine Analyse zeigt, dass Interesse der wackeligste Teil dieser Dynamik ist, und genau das sollen die Psychologie-Kapitel im Buch verändern.",
        "comm": "Deine Analyse zeigt, dass Kommunikation die schwächste Stelle dieser Verbindung ist, die Kapitel über Textnachrichten zeigen genau, wie man das behebt.",
        "ei": "Deine Analyse zeigt, dass emotionale Investition hier die Lücke ist, die Kapitel des Buches über den Aufbau echter, dauerhafter Anziehung sprechen genau das an."
      }
    },
    single: {
    questions: [
      { text: "Wie kommuniziert er normalerweise mit dir?", options: [
        { label: "Er schreibt regelmäßig und hält die Gespräche am Laufen.", comm: 3, interest: 1, effort: 1 },
        { label: "Er ist mal warm, mal kalt / verschwindet manchmal.", comm: -3, interest: -1, effort: -1 },
        { label: "Meistens bin ich diejenige, die Gespräche beginnt.", comm: -1, interest: -1, effort: -2 }
      ]},
      { text: "Wer macht normalerweise den ersten Schritt?", options: [
        { label: "Er meldet sich oft zuerst.", interest: 2, effort: 3, comm: 0 },
        { label: "Es ist ziemlich ausgeglichen.", interest: 1, effort: 1, comm: 0 },
        { label: "Meistens bin ich diejenige, die sich meldet.", interest: -1, effort: -3, comm: 0 }
      ]},
      { text: "Wie verhält er sich, wenn du dich ein wenig zurückziehst?", options: [
        { label: "Er bemerkt es und kommt mir näher.", interest: 3, effort: 2, comm: 1 },
        { label: "Er gibt mir Raum und reagiert nicht wirklich.", interest: -1, effort: 0, comm: 0 },
        { label: "Er scheint das Interesse zu verlieren.", interest: -2, effort: -2, comm: -1 }
      ]},
      { text: "Wie behandelt er dich, wenn ihr zusammen seid?", options: [
        { label: "Er schenkt mir Aufmerksamkeit und sucht nach Gründen, mir nahe zu sein.", interest: 2, effort: 1, comm: 1 },
        { label: "Er ist freundlich, aber schwer einzuschätzen.", interest: 0, effort: -1, comm: -2 },
        { label: "Ich habe oft das Gefühl, um seine Aufmerksamkeit kämpfen zu müssen.", interest: -2, effort: -2, comm: -1 }
      ]},
      { text: "Was ist das größte Zeichen, das dich an seinem Interesse zweifeln lässt?", options: [
        { label: "Seine gemischten Signale.", interest: -2, comm: -1, effort: -1 },
        { label: "Seine unbeständige Kommunikation.", comm: -3, interest: -1, effort: 0 },
        { label: "Er gibt sich nicht genug Mühe.", effort: -3, interest: -1, comm: 0 }
      ]},
      { text: "Was möchtest du wirklich über ihn wissen?", options: [
        { label: "Ob er mich wirklich mag.", interest: -1, comm: 0, effort: -1 },
        { label: "Ob er mich als mehr als eine Freundin sieht.", interest: -1, effort: 0, comm: -1 },
        { label: "Ob ich weiter versuchen sollte, ihn für mich zu gewinnen.", effort: -2, interest: 0, comm: 0 }
      ]}
    ],
    axes: ["interest","comm","effort"],
    ranges: { interest: { min: -9, max: 7 }, comm: { min: -10, max: 5 }, effort: { min: -14, max: 7 } },
    microInsights: {
      interest: ["Notiert, das sagt etwas über sein Interesse aus.", "Das ist ein echtes Signal für Interesse."],
      comm: ["Das fließt in deine Kommunikationsauswertung ein.", "Solche Kommunikationsmuster sind sehr aussagekräftig."],
      effort: ["Das fließt darin ein, wie viel Einsatz er tatsächlich zeigt.", "Das ist ein wichtiges Signal für seinen Einsatz."],
      neutral: ["Verstanden, das fließt in deine Auswertung ein."]
    },
    resultCopy: {
      interest: {
        label: "Interesse",
        high: "Er zeigt echte Anzeichen von Interesse, er meldet sich, bleibt in deiner Nähe und gibt dir Gründe zu glauben, dass es nicht nur etwas Unverbindliches ist.",
        mid: "Sein Interesse ist vorhanden, aber es kommt und geht, genug, um dich neugierig zu halten, aber noch nicht genug, um dir Sicherheit zu geben.",
        low: "Das zentrale Muster hier ist ein Mangel an konstantem Interesse, im Moment fragst du dich mehr, was passiert, als dass er die Initiative ergreift."
      },
      comm: {
        label: "Kommunikation",
        high: "Die Kommunikation mit ihm fühlt sich beständig und leicht an, ein starkes Zeichen, wenn der Rest des Bildes dazu passt.",
        mid: "Die Kommunikation funktioniert, ist aber unregelmäßig, das Gespräch ist da, nur noch ohne einen verlässlichen Rhythmus.",
        low: "Das zentrale Muster hier ist unvorhersehbare Kommunikation, gemischte Signale und Lücken machen es schwer zu wissen, woran du wirklich bist."
      },
      effort: {
        label: "Sein Einsatz",
        high: "Er zeigt echten Einsatz, um die Distanz zu verringern, meldet sich, bemerkt, wenn du dich zurückziehst, und nimmt sich Zeit für dich.",
        mid: "Sein Einsatz zeigt sich in Schüben, vorhanden, wenn es leicht ist, schwieriger darauf zu zählen, wenn es das nicht ist.",
        low: "Das zentrale Muster hier ist ein Ungleichgewicht beim Einsatz, im Moment trägst du den größten Teil der Last in dieser Situation."
      }
    },
    warningCopy: {
      interest: {
        label: "Interesse",
        high: "Auch starkes anfängliches Interesse kann nachlassen, wenn es nicht die richtige Art von Aufmerksamkeit bekommt. Wenn du nicht mehr darauf achtest, wie sich seine Initiative mit der Zeit verändert, riskierst du den Moment zu verpassen, in dem sein Interesse abkühlt.",
        mid: "Unbeständiges Interesse lässt sich im Moment leicht erklären. Wenn du die Lücken weiterhin selbst füllst, riskierst du, ein Warm-kalt-Muster für stabiler zu halten, als es ist.",
        low: "Deine Antworten zeigen einen Mangel an konstantem Interesse als zentrales Risiko. Ohne echte Veränderung riskierst du, in einer Situation investiert zu bleiben, in der dir nicht dieselbe Energie entgegengebracht wird."
      },
      comm: {
        label: "Kommunikation",
        high: "Ein leichtes Gespräch kann trotzdem einen Mangel an echter Klarheit darunter verbergen. Wenn du nur darauf achtest, wie oft er antwortet, statt darauf, was seine Antworten tatsächlich sagen, riskierst du, das größere Muster zu übersehen.",
        mid: "Unregelmäßige Kommunikation lässt sich Nachricht für Nachricht leicht entschuldigen. Wenn du nichts daran änderst, riskierst du, dich daran zu gewöhnen, weniger Beständigkeit zu akzeptieren, als eine echte Verbindung braucht.",
        low: "Deine Antworten zeigen unvorhersehbare Kommunikation als zentrales Risiko. Ohne ein klareres Muster werden Verwirrung und gemischte Signale wahrscheinlich weiter auftreten, statt sich von selbst zu lösen."
      },
      effort: {
        label: "Sein Einsatz",
        high: "Sichtbarer Einsatz jetzt garantiert nicht, dass er anhält, sobald die Neuheit nachlässt. Wenn du nicht mehr darauf achtest, ob er weiterhin die Initiative ergreift, riskierst du, von einer Veränderung darin überrascht zu werden, wer den Kontakt sucht.",
        mid: "Einsatz, der nur manchmal sichtbar wird, lässt sich leicht für echtes Investment halten. Wenn du das nicht im Blick behältst, riskierst du, mehr Arbeit zu übernehmen, einfach weil du die Situation beobachtest.",
        low: "Deine Antworten zeigen ein echtes Ungleichgewicht beim Einsatz als zentrales Risiko. Ohne Veränderung setzt sich dieses Muster eher fort, als dass es sich korrigiert, sodass du eine Verbindung trägst, die er nicht erwidert."
      }
    },
    bridgeMap: {
      interest: "Deine Auswertung zeigt, dass sein Interesse derzeit der wackeligste Teil dieser Dynamik ist, hier gibt es echtes Potenzial, aber einige Muster bremsen es. Dein Ergebnis zeigt, was passiert; das Buch zeigt dir genau, wie du es zu deinen Gunsten verändern kannst.",
      comm: "Deine Auswertung zeigt, dass die Kommunikation derzeit die schwächste Stelle dieser Verbindung ist, hier gibt es echtes Potenzial, aber einige Muster bremsen sie. Dein Ergebnis zeigt, was passiert; das Buch zeigt dir genau, wie du die Klarheit schaffen kannst, die dir fehlt.",
      effort: "Deine Auswertung zeigt, dass der Einsatz in dieser Situation derzeit unausgeglichen ist, hier gibt es echtes Potenzial, aber einige Muster bremsen es. Dein Ergebnis zeigt, was passiert; das Buch zeigt dir genau, wie du die Dynamik so veränderst, dass er anfängt, deine Energie zu erwidern."
    },
    bookDesc: {
      interest: [
        "Deine größte Warnung betraf sein Interesse, und das lässt sich nicht mit ein paar cleveren Nachrichten beheben.",
        "Du musst verstehen, warum männliches Interesse nachlässt, noch bevor es offiziell wird, und was einen Mann wirklich dazu bringt, sich auf etwas Echtes einzulassen.",
        "Dieser Guide basiert nicht auf Manipulation, Spielchen oder falschen Textnachrichten-Tricks.",
        "Er basiert auf der Psychologie von Anziehung und emotionaler Investition, genau den Mechanismen hinter dem Muster, das deine Analyse gerade aufgezeigt hat."
      ],
      comm: [
        "Deine größte Warnung betraf die Kommunikation, gemischte Signale, unregelmäßige Antworten und die Verwirrung, die sie hinterlassen.",
        "Du musst verstehen, warum die Kommunikation unklar bleibt, wie du erkennst, was darunter wirklich passiert, und wie du die fehlende Klarheit schaffst.",
        "Dieser Guide basiert nicht auf Manipulation, Spielchen oder falschen Textnachrichten-Tricks.",
        "Er basiert auf der Psychologie klarer Kommunikation und emotionaler Verbindung, genau den Mechanismen hinter dem Muster, das deine Analyse gerade aufgezeigt hat."
      ],
      effort: [
        "Deine größte Warnung betraf den Einsatz, ein Ungleichgewicht, bei dem du mehr auf ihn zugehst als er auf dich.",
        "Du musst verstehen, warum dieses Ungleichgewicht entsteht, was einen Mann von unverbindlich zu engagiert macht und wie du aufhörst, alles allein zu tragen.",
        "Dieser Guide basiert nicht auf Manipulation, Spielchen oder falschen Textnachrichten-Tricks.",
        "Er basiert auf der Psychologie von Einsatz und Investition, genau den Mechanismen hinter dem Muster, das deine Analyse gerade aufgezeigt hat."
      ]
    },
    loadingLine: "Deine Muster werden analysiert…",
    loadingSubtext: "Deine Antworten werden mit über 10.000 Dating-Mustern verglichen…",
    nameHeadline: "Deine Auswertung ist bereit.",
    nameSub: "Nur deinen Vornamen — sonst nichts. Damit werden deine Werte für Interesse, Kommunikation und seinen Einsatz unten personalisiert. Keine E-Mail, keine Anmeldung."
  }
  };
  STATIC_STRINGS.de = {
    "landing.eyebrow": "Der Analyzer",
    "landing.h1": "Steht Er Auf Dich? <em>Hör Auf Zu Raten. Sieh, Was Sein Verhalten Dir Wirklich Sagt.</em>",
    "landing.sub": "6 Fragen &middot; <em>60 Sekunden</em> &middot; personalisiert. Verstehe das Muster hinter seinen Handlungen, seiner Kommunikation und seinem Einsatz.",
    "landing.startBtn": "Meine Analyse Starten",
    "landing.previewInterest": "Interesse",
    "landing.previewComm": "Kommunikation",
    "landing.previewInvestment": "Investition",
    "landing.trust": "Entwickelt mit Beziehungspsychologie und Kommunikationsmustern, um dir durchdachte, persönliche Einblicke zu geben.",
    "landingSingle.eyebrow": "Der Analyzer",
    "landingSingle.h1": "Steht Er Auf Dich? <em>Finde Heraus, Was Seine Taten Wirklich Bedeuten</em>",
    "landingSingle.sub": "Sechs Fragen. <em>Sechzig Sekunden</em>. Finde heraus, ob seine Taten echtes Interesse oder gemischte Signale zeigen.",
    "landingSingle.startBtn": "Meine Analyse Starten",
    "landingSingle.previewConfidence": "Interesse",
    "landingSingle.previewMagnetism": "Kommunikation",
    "landingSingle.previewSelfInvestment": "Sein Einsatz",
    "landingSingle.trust": "Entwickelt mit Beziehungspsychologie und Kommunikationsmustern, um dir durchdachte, persönliche Einblicke zu geben.",
    "gate.h1": "Wie Ist Deine Situation Mit <em>Ihm</em>?",
    "gate.sub": "Wir passen deine Analyse genau an deine Situation an.",
    "gate.yes": "❤️ Wir sind in einer Beziehung",
    "gate.no": "👀 Wir sind nicht offiziell zusammen",
    "shared.liveBadge": "Leserinnen erkunden seine Signale",
    "name.eyebrow": "Fast Geschafft",
    "name.lockText": "Deine Werte sind bereit",
    "name.placeholder": "Dein Vorname",
    "name.err": "Gib deinen Namen ein, um fortzufahren.",
    "name.btn": "Meine Ergebnisse Freischalten",
    "name.privacyBadge": "Nur dein Vorname — keine E-Mail, keine Anmeldung",
    "name.micro": "Dauert 2 Sekunden. Wir fragen nie nach deiner E-Mail.",
    "name.emailNote": "Tipp: Schau auch in deinem Spam-Ordner nach.",
    "results.eyebrow": "Deine Analyse",
    "results.strengthLabel": "Größte Stärke",
    "results.warningLabel": "Größte Warnung",
    "results.downloadBtn": "Meine Ergebniskarte Herunterladen",
    "results.shareHint": "Eine teilbare Zusammenfassungskarte, perfekt für deine TikTok- oder Instagram-Story",
    "results.nextBtn": "Sehen, Was Als Nächstes Zu Tun Ist",
    "proof.eyebrow": "Das Urteil Ist Nur Die Halbe Geschichte",
    "proof.h1": "Deine Analyse zeigt das Muster. Hier erfährst du, wie du es änderst.",
    "proof.testimonialsTitle": "Ein paar Nachrichten von Leserinnen ❤️",
    "proof.description": "<p>Diese Frauen waren genau wie du.</p><p>Die Männer, die sie wollten, sendeten gemischte Signale und zogen sich zurück.</p><p>Dann entdeckten sie das Buch.</p><p>Jetzt laufen genau diese Männer ihnen hinterher, investieren mehr, und werden <span class=\"proof-obsessed\">besessen</span> von ihnen.</p>",
    "proof.nextBtn": "Enthülle Deine Größte Warnung",
    "proof.footerNote": "Deine Ergebnisse sind einzigartig für deine Antworten, das sind keine allgemeinen Ratschläge.",
    "buy.digitalNotice": "100% Digitales eBook &middot; Kompatibel mit iOS, Android, Kindle & PDF-Readern",
    "buy.title": "Mach Ihn Süchtig Nach Dir",
    "buy.h1": "Verstehe Ihn. <em>Hör Auf Zu Raten, Was Du Als Nächstes Tun Sollst.</em>",
    "buy.subCopy": "Tauche tiefer in die Psychologie hinter Anziehung, emotionaler Verbindung, gemischten Signalen und seinem Verhalten ein.",
    "story.eyebrow": "Unsere Geschichte",
    "story.s1_1": "Alles begann mit einer Frage, die mich nicht losließ…",
    "story.s1_2": "Lange Zeit fand ich mich immer wieder in Situationen mit Männern, die mich verwirrt zurückließen.",
    "story.s1_3": "Warum konnte ein Mann im einen Moment so interessiert sein und im nächsten distanziert?",
    "story.s1_4": "Warum schienen manche sich zurückzuziehen, je näher ich ihnen kam?",
    "story.s1_5": "Warum machte mehr Aufmerksamkeit manches schlimmer, während Abstand alles veränderte?",
    "story.s2_1": "Und ehrlich? Ich habe diese Situationen nicht immer richtig gehandhabt.",
    "story.s2_2": "Ich habe jede Nachricht überanalysiert. Ich habe an mir gezweifelt.",
    "story.s2_3": "Ich habe versucht, seine Gedanken zu lesen, und mich gefragt, was ich falsch gemacht hatte…",
    "story.s2_4": "…und warum etwas, das sich so einfach anfühlte, plötzlich so kompliziert wurde.",
    "story.s2_5": "Aber nachdem ich diese Muster immer wieder erlebt hatte, fing ich an, genau hinzuschauen.",
    "story.s3_1": "Ich bemerkte die kleinen Dinge, die viele von uns übersehen.",
    "story.s3_2": "Wie Männer kommunizieren. Wie Anziehung wirklich entsteht.",
    "story.s3_3": "Der Unterschied zwischen jemandem nachlaufen… und echtes Verlangen schaffen.",
    "story.s3_4": "Wie sehr unser eigenes Verhalten die Dynamik zwischen zwei Menschen verändern kann.",
    "story.s3_5": "Wie viele Frauen das Verhalten von Männern missverstehen, nicht weil sie falsch lieben,",
    "story.s3_6": "…sondern weil ihnen niemand je erklärt hat, wie Anziehung wirklich funktioniert.",
    "story.s4_1": "Diese Neugier wurde schließlich zu etwas viel Größerem.",
    "story.s4_2": "Ich begann, alles, was ich lernte, an einem Ort zu sammeln.",
    "story.chip1": "Die Muster",
    "story.chip2": "Die Lektionen",
    "story.chip3": "Die Fehler",
    "story.s4_3": "Die Gespräche, die Aha-Momente und alles, was ich so viel früher verstanden hätte wollen.",
    "story.s4_4": "Ich habe studiert. Beobachtet. Verschiedene Ansätze getestet, bis die Muster klar wurden.",
    "story.s5_1": "So entstand Make Him Obsessed.",
    "story.s5_2": "Ich schuf das Buch, damit jede Frau etwas Konkretes hat, zu dem sie zurückkehren kann, wenn sie verwirrt ist…",
    "story.s5_3": "…etwas, das hilft, die Situation zu verstehen, statt endlos zu grübeln.",
    "story.s5_4": "Und diese Website habe ich aus demselben Grund erstellt: ein einfacher Ort, um diese Ideen zu entdecken und sich bei Männern und Anziehung weniger verloren zu fühlen.",
    "story.s5_5": "Nicht aus dem Wunsch heraus, etwas zu verkaufen, sondern aus einem echten Bedürfnis, das ich selbst erlebt habe.",
    "story.rita1": "Fragst du dich noch, was sein Verhalten bedeutet?",
    "story.rita2": "Frag Rita.",
    "story.rita3": "Erzähl ihr, was passiert ist. Sie hilft dir, es zu verstehen.",
    "story.ritaBtn": "Mit Rita sprechen",
    "story.s6_1": "Denn ich weiß, wie es sich anfühlt, sich zu fragen: „Was mache ich falsch?“",
    "story.s6_2": "Und ich möchte nicht, dass du das alles allein herausfinden musst.",
    "story.s6_3": "Es geht nicht darum, jemand anderes zu werden.",
    "story.s6_4": "Es geht darum, die Dynamik zu verstehen, dich selbst zu verstehen und zu wissen, was du tun kannst, wenn du jemanden wirklich magst.",
    "story.s6_5": "Deshalb existiert Make Him Obsessed.",
    "story.finalBtn": "Zeig mir, wie →",
    "journey.s4_2": "Deine Größte Warnung",
    "journey.s5_8": "Nicht, weil du gelernt hast, noch mehr hinterherzulaufen.",
    "journey.s5_9": "Sondern weil du gelernt hast, eine stärkere Verbindung zu schaffen.",
    "journey.finalBtn": "Zeig mir, wie →",
    "jf.b1": "Du bist hierhergekommen, um eine Antwort zu finden.",
    "jf.b2": "Nicht noch eine Vermutung.",
    "jf.b3": "Du wolltest verstehen, was wirklich passiert.",
    "jf.b4": "Und jetzt kannst du es.",
    "jf.m1": "Was das wirklich bedeutet.",
    "jf.m2": "Das heißt nicht automatisch, dass er dich nicht mag.",
    "jf.m3": "Es bedeutet, dass in der Art, wie sich diese Verbindung entwickelt, etwas ist, das du verstehen musst.",
    "jf.m4": "Denn zu wissen, was er fühlt, ist nur die halbe Wahrheit.",
    "jf.m5": "Zu wissen, was du als Nächstes tun sollst, ist die andere Hälfte.",
    "jf.t1": "Stell dir vor, du müsstest nicht mehr um seine Aufmerksamkeit kämpfen.",
    "jf.t2": "Nicht mehr jede Nachricht zerdenken.",
    "jf.t3": "Nicht mehr rätseln, wo du stehst.",
    "jf.r1": "Möchtest du mehr lesen?",
    "jf.r2": "Alle Bewertungen ansehen →",
    "jf.k1": "Du verstehst das Muster.",
    "jf.k2": "Jetzt lerne, was du damit machen kannst.",
    "jf.c1": "Du bist hier, weil du Klarheit wolltest.",
    "jf.c2": "Jetzt weißt du, wo du anfangen kannst.",
    "buy.desc1": "Du brauchst keinen weiteren Dating-Tipp.",
    "buy.desc2": "Du musst verstehen, warum er sich zurückzieht… warum er das Interesse verliert… und warum manche Frauen einem Mann noch lange im Kopf bleiben, nachdem sie den Raum verlassen haben.",
    "buy.desc3": "Dieser Guide basiert nicht auf Manipulation, Spielchen oder falschen Textnachrichten-Tricks.",
    "buy.desc4": "Er basiert auf der Psychologie hinter Anziehung, emotionaler Bindung und den Verhaltensweisen, die jemanden still und leise unvergesslich machen.",
    "buy.label1": "Das Erwartet Dich Im Guide",
    "buy.l1_1": "Warum Männer sich emotional an bestimmte Frauen binden, und bei anderen das Interesse verlieren.",
    "buy.l1_2": "Die subtilen Fehler, die ihn wegtreiben, ohne dass du es merkst.",
    "buy.l1_3": "Die Anziehungs-Trigger, die echte emotionale Investition schaffen.",
    "buy.l1_4": "Wie du aufhörst, jede Nachricht zu zerdenken, und endlich verstehst, was wirklich in seinem Kopf vorgeht.",
    "buy.l1_5": "Was eine Beziehung stärker macht, statt nach der Honeymoon-Phase zu verblassen.",
    "buy.label2": "Dieser Guide Ist Für Dich, Wenn",
    "buy.l2_1": "Du es leid bist, dich zu fragen, warum er sich verändert hat.",
    "buy.l2_2": "Du immer wieder Männer anziehst, die dich mögen… sich aber nie voll binden.",
    "buy.l2_3": "Du keine Lust mehr hast, widersprüchlichen Signalen hinterherzulaufen.",
    "buy.l2_4": "Du Klarheit statt Verwirrung willst.",
    "buy.l2_5": "Du Anziehung aufbauen willst, ohne so zu tun, als wärst du jemand anderes.",
    "buy.label3": "Stell Dir Das Vor",
    "buy.im1": "Statt alle fünf Minuten dein Handy zu checken…",
    "buy.im2": "Statt Gespräche immer wieder im Kopf durchzuspielen…",
    "buy.im3": "Statt deine Freundinnen zu fragen, was seine letzte Nachricht \"wirklich bedeutet\"…",
    "buy.im4": "Verstehst du endlich die Psychologie hinter seinem Verhalten, und weißt genau, wie du selbstbewusst reagierst.",
    "buy.imCloser": "Das verändert alles.",
    "buy.label4": "Warum Dieser Guide Anders Ist",
    "buy.diff1": "Die meisten Dating-Ratschläge sagen: \"Warte länger.\" \"Mach dich rar.\" \"Sei einfach du selbst.\"",
    "buy.diff2": "Dieser Guide erklärt, warum das manchmal funktioniert… und warum oft nicht.",
    "buy.diff3": "Du verstehst die psychologischen Prinzipien hinter Anziehung, damit du aufhörst zu raten.",
    "buy.label5": "Sofortiger Digitaler Zugriff",
    "buy.l3_1": "Lies auf jedem Handy, Tablet oder Computer.",
    "buy.l3_2": "In einem Abend durchlesen.",
    "buy.l3_3": "Wende es sofort auf deine aktuelle oder zukünftige Beziehung an.",
    "buy.hangChip": "Einführungspreis",
    "wheel.teaserTitle": "Ein Rabatt Wartet Auf Dich",
    "wheel.teaserSub": "Dreh am Glücksrad und gewinne bis zu 100% Rabatt auf das Buch.",
    "wheel.spinBtn": "Rad Drehen",
    "wheel.bannerLabel": "🎉 Dein Rabatt Ist Bereit",
    "wheel.codeLabel": "Code:",
    "wheel.copyBtn": "Kopieren",
    "wheel.modalTitle": "Dreh Für Deinen Rabatt",
    "wheel.modalSubDefault": "Ziehe am Rad und lass los, um es zu drehen",
    "wheel.resultLabel": "🎉 Du Hast Gewonnen",
    "wheel.continueBtn": "Weiter",
    "buy.offerEyebrow": "Dein Lese-Bonus",
    "buy.offerNote": "Exklusiv für deine Ergebnisse reserviert",
    "buy.chip1": "Männerpsychologie",
    "buy.chip2": "Anziehungs-Trigger",
    "buy.chip3": "Textfehler",
    "buy.chip4": "Emotionale Verbindung",
    "buy.chip5": "Langfristige Anziehung",
    "buy.faqTitle": "Häufig Gestellte Fragen",
    "buy.faq1q": "Ist das Manipulation?",
    "buy.faq1a": "Nein. Es geht darum, Anziehung, Selbstvertrauen und gesunde Kommunikation zu verstehen, nicht darum, jemanden zu kontrollieren oder zu täuschen.",
    "buy.faq2q": "Funktioniert das auch, wenn er das Interesse schon verloren hat?",
    "buy.faq2a": "Das hängt davon ab, warum er das Interesse verloren hat. Der Guide kann keine Ergebnisse garantieren, hilft dir aber, häufige Fehler zu vermeiden und deine Herangehensweise zu verbessern.",
    "buy.faq3q": "Wie lang ist dieser Guide?",
    "buy.faq3a": "Es ist ein 50-seitiger Guide, kurz und praxisnah.",
    "buy.ctaBtn": "Sofortiger Zugriff",
    "buy.footerNote": "Sofortiger digitaler Zugriff, beginne in wenigen Minuten mit dem Lesen.",
    "buy.trustLine": "🔒 Sichere Zahlung · 50 Seiten",
    "buy.refundLink": "Alle Verkäufe sind endgültig · Richtlinie ansehen",
    "buy.insideLink": "Sieh dir den Inhalt an ↓",
    "buy.tocTitle": "Was du lernen wirst",
    "buy.tocTakeaway": "<strong>Kernaussage:</strong> In diesem Buch geht es darum, so geerdet, interessant und emotional intelligent zu werden, dass Anziehung ein natürlicher Nebeneffekt wird – keine Inszenierung.",








    "chat.headerTitle": "Frag Rita",
    "chat.headerSub": "Deine Beziehungsfragen, beantwortet"
  };
  CARD_LABELS.de = { strongest: "STÄRKSTE EIGENSCHAFT", growth: "ENTWICKLUNGSPOTENZIAL", prepare: "Deine Karte wird vorbereitet…", linkFallback: "Mach den Test selbst" };
})();
