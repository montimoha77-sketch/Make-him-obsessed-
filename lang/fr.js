(function(){
  QUIZ_CONFIG_BY_LANG.fr = {
    relationship: {
      "questions": [
        {
          "text": "Qui envoie généralement le premier message ?",
          "options": [
            {
              "label": "C'est presque toujours lui qui commence",
              "interest": 3,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "C'est assez équilibré entre nous",
              "interest": 1,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "C'est presque toujours moi qui lance la conversation",
              "interest": -2,
              "comm": 0,
              "ei": 0
            },
            {
              "label": "On ne se texte presque jamais",
              "interest": -3,
              "comm": -2,
              "ei": 0
            }
          ]
        },
        {
          "text": "Combien de temps met-il généralement à répondre ?",
          "options": [
            {
              "label": "Presque instantanément",
              "interest": 1,
              "comm": 3,
              "ei": 0
            },
            {
              "label": "En quelques heures",
              "interest": 0,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Un jour ou plus, souvent",
              "interest": 0,
              "comm": -2,
              "ei": 0
            },
            {
              "label": "C'est totalement imprévisible",
              "interest": 0,
              "comm": -1,
              "ei": -1
            }
          ]
        },
        {
          "text": "T'a-t-il déjà emmenée à un vrai rendez-vous ?",
          "options": [
            {
              "label": "Oui, plus d'une fois",
              "interest": 2,
              "comm": 0,
              "ei": 3
            },
            {
              "label": "Oui, une fois",
              "interest": 1,
              "comm": 0,
              "ei": 1
            },
            {
              "label": "On en a parlé, mais rien ne s'est passé",
              "interest": 0,
              "comm": 0,
              "ei": -1
            },
            {
              "label": "Non",
              "interest": 0,
              "comm": 0,
              "ei": -3
            }
          ]
        },
        {
          "text": "T'a-t-il déjà ghostée ou est-il devenu distant sans explication ?",
          "options": [
            {
              "label": "Jamais",
              "interest": 0,
              "comm": 1,
              "ei": 2
            },
            {
              "label": "Une fois, mais il est revenu",
              "interest": 0,
              "comm": 0,
              "ei": -1
            },
            {
              "label": "Ça arrive souvent",
              "interest": 0,
              "comm": -2,
              "ei": -3
            },
            {
              "label": "Il le fait en ce moment même",
              "interest": -2,
              "comm": -3,
              "ei": -3
            }
          ]
        },
        {
          "text": "Sais-tu généralement clairement où tu en es avec lui, ou dois-tu souvent lui demander ?",
          "options": [
            {
              "label": "Très clair, il me le dit sans que j'aie à demander",
              "interest": 2,
              "comm": 3,
              "ei": 0
            },
            {
              "label": "Assez clair, même si j'ai dû demander une ou deux fois",
              "interest": 0,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "J'ai dû demander plus d'une fois et je me sens toujours incertaine",
              "interest": -1,
              "comm": -2,
              "ei": 0
            },
            {
              "label": "Je n'ai aucune idée d'où j'en suis",
              "interest": -2,
              "comm": -3,
              "ei": -1
            }
          ]
        },
        {
          "text": "Dans l'ensemble, as-tu l'impression que les efforts sont mutuels ?",
          "options": [
            {
              "label": "Oui, ça semble équilibré",
              "interest": 3,
              "comm": 2,
              "ei": 2
            },
            {
              "label": "La plupart du temps, même si j'en fais un peu plus",
              "interest": 1,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Non, je fais clairement plus d'efforts",
              "interest": -2,
              "comm": -1,
              "ei": -1
            },
            {
              "label": "Je fais tout le travail",
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
          "Noté, cela en dit long sur son niveau d'intérêt.",
          "C'est un signal d'intérêt fort."
        ],
        "comm": [
          "Cela influence ton score de Communication.",
          "Ce genre de schéma de communication compte beaucoup."
        ],
        "ei": [
          "Cela entre en compte dans l'Investissement Émotionnel.",
          "C'est un indicateur clé de l'investissement émotionnel."
        ],
        "neutral": [
          "Compris, on en tient compte dans ta lecture."
        ]
      },
      "resultCopy": {
        "interest": {
          "label": "Interest",
          "high": "Il fait de réels efforts pour faire durer cette relation, l'initiative et l'attention pointent vers un intérêt sincère, pas juste de la commodité.",
          "mid": "Son intérêt est irrégulier, chaleureux parfois, distant d'autres fois, sans schéma d'investissement stable dans un sens ou dans l'autre.",
          "low": "Le problème central est un manque d'intérêt constant. Il prend rarement l'initiative, et presque tous les efforts dans cette relation viennent de toi."
        },
        "comm": {
          "label": "Communication",
          "high": "La conversation coule facilement et il est présent de façon constante, une base solide, si le reste correspond.",
          "mid": "La communication est fonctionnelle mais inégale, les réponses arrivent, mais sans grande urgence ni énergie derrière.",
          "low": "Le problème central est une communication peu fiable. Les réponses sont lentes et incohérentes, sans rythme fiable sur lequel compter."
        },
        "ei": {
          "label": "His Effort",
          "high": "Il s'est déplacé en personne, t'a intégrée à son monde, et est resté constant, c'est un véritable investissement, pas juste de l'énergie textuelle.",
          "mid": "L'investissement émotionnel est présent mais incomplet, ses actes ne correspondent pas encore pleinement à ses paroles.",
          "low": "Le problème central est un faible investissement émotionnel. La distance, le manque de suivi cohérent et les périodes de froid inexpliquées l'emportent sur tout engagement réel."
        }
      },
      "warningCopy": {
        "interest": {
          "label": "Interest",
          "high": "L'intérêt peut s'estomper rapidement une fois le confort installé. Si tu arrêtes de surveiller comment l'initiative et les efforts évoluent avec le temps, tu risques de manquer le moment précis où son intérêt commence à baisser.",
          "mid": "Un intérêt irrégulier est facile à ignorer jusqu'à ce qu'il devienne la norme. Si tu continues à combler l'écart chaque fois qu'il se retire, tu risques de prendre un schéma instable pour quelque chose de stable.",
          "low": "Tes réponses indiquent un schéma d'efforts à sens unique. Si cela continue sans être abordé, tu risques de rester investie dans une relation qui n'est pas réciproque, en prenant son manque d'initiative pour quelque chose qui changera de lui-même."
        },
        "comm": {
          "label": "Communication",
          "high": "Des réponses rapides peuvent masquer une incohérence plus profonde. Si tu arrêtes d'évaluer ce qui est réellement dit et te concentres seulement sur la rapidité, tu risques de passer à côté d'un manque de clarté réelle.",
          "mid": "Une communication inégale est facile à excuser ponctuellement. Si des réponses peu investies ou tardives ne sont pas abordées, tu risques de t'habituer à accepter moins de constance que ce dont la relation a besoin.",
          "low": "Tes réponses indiquent qu'une communication peu fiable est le risque principal ici. Sans rythme fiable, les malentendus et la confusion répétée risquent de continuer à resurgir plutôt que de se résoudre."
        },
        "ei": {
          "label": "His Effort",
          "high": "Un investissement visible peut rester incohérent en profondeur. Si tu arrêtes de vérifier si ses actes continuent de correspondre à ses paroles, tu risques d'être prise au dépourvu par un changement que tu n'as pas vu venir.",
          "mid": "Un investissement émotionnel qui ne correspond pas pleinement à ses paroles est un schéma à surveiller, pas à ignorer. Sans y remédier, tu risques de construire des attentes sur des promesses non soutenues par des actes cohérents.",
          "low": "Tes réponses indiquent qu'un faible investissement émotionnel est le risque principal ici. La distance, le manque de suivi cohérent et les périodes de froid inexpliquées ont tendance à se répéter plutôt qu'à se résoudre sans un changement clair de comportement."
        }
      },
      "bridgeMap": {
        "interest": "Ta lecture montre que l'intérêt est le point le plus fragile de cette dynamique, et c'est exactement ce que les chapitres de psychologie du livre sont conçus pour transformer.",
        "comm": "Ta lecture montre que la communication est le point faible de cette relation, les chapitres sur les textos expliquent exactement comment y remédier.",
        "ei": "Ta lecture montre que l'investissement émotionnel est la lacune ici, les chapitres du livre sur la construction d'une attraction réelle et durable répondent directement à cela."
      },
      "bookDesc": {
      "interest": [
        "Ton plus grand avertissement portait sur l'intérêt, et ce n'est pas quelque chose que quelques textos malins suffiront à réparer.",
        "Tu as besoin de comprendre pourquoi l'intérêt masculin s'estompe, ce qui le tue discrètement, et ce qui pousse réellement un homme à rester investi bien après la phase du début.",
        "Ce guide ne repose ni sur la manipulation, ni sur des jeux, ni sur de fausses astuces de texto.",
        "Il repose sur la psychologie de l'attraction et de l'investissement émotionnel, les mécanismes exacts derrière le schéma que ta lecture vient de signaler."
      ],
      "comm": [
        "Ton plus grand avertissement portait sur la communication, les signaux contradictoires, les réponses irrégulières et la confusion qu'ils laissent derrière eux.",
        "Tu as besoin de comprendre pourquoi la communication se dégrade, comment lire ce qui se passe réellement en dessous, et comment créer la clarté qui manque.",
        "Ce guide ne repose ni sur la manipulation, ni sur des jeux, ni sur de fausses astuces de texto.",
        "Il repose sur la psychologie d'une communication claire et de la connexion émotionnelle, les mécanismes exacts derrière le schéma que ta lecture vient de signaler."
      ],
      "ei": [
        "Ton plus grand avertissement portait sur l'effort, un déséquilibre où tu portes cette relation plus que lui.",
        "Tu as besoin de comprendre pourquoi ce déséquilibre existe, ce qui fait passer un homme de passif à investi, et comment arrêter de faire tout le travail sans lui.",
        "Ce guide ne repose ni sur la manipulation, ni sur des jeux, ni sur de fausses astuces de texto.",
        "Il repose sur la psychologie de l'effort et de l'investissement, les mécanismes exacts derrière le schéma que ta lecture vient de signaler."
      ]
    },
      "loadingLine": "Analyse de tes réponses en cours…",
      "loadingSubtext": "Comparaison de tes réponses avec plus de 10 000 ensembles de données comportementales relationnelles…",
      "nameHeadline": "Ta lecture est prête.",
      "nameSub": "Entre ton prénom pour que tes résultats te parlent directement, Niveau d'Intérêt, Score de Communication, Investissement Émotionnel, et ton plus grand angle mort relationnel."
    },
    single: {
    questions: [
      { text: "Comment communique-t-il généralement avec toi ?", options: [
        { label: "Il m'écrit régulièrement et fait durer les conversations.", comm: 3, interest: 1, effort: 1 },
        { label: "Il est chaud et froid / il disparaît parfois.", comm: -3, interest: -1, effort: -1 },
        { label: "C'est généralement moi qui entame les conversations.", comm: -1, interest: -1, effort: -2 }
      ]},
      { text: "Qui fait généralement le premier pas ?", options: [
        { label: "Il prend souvent les devants.", interest: 2, effort: 3, comm: 0 },
        { label: "C'est assez équilibré.", interest: 1, effort: 1, comm: 0 },
        { label: "C'est généralement moi qui prends les devants.", interest: -1, effort: -3, comm: 0 }
      ]},
      { text: "Comment réagit-il quand tu prends un peu de recul ?", options: [
        { label: "Il le remarque et se rapproche.", interest: 3, effort: 2, comm: 1 },
        { label: "Il me laisse de l'espace et ne réagit pas vraiment.", interest: -1, effort: 0, comm: 0 },
        { label: "Il semble perdre son intérêt.", interest: -2, effort: -2, comm: -1 }
      ]},
      { text: "Comment te traite-t-il quand vous êtes ensemble ?", options: [
        { label: "Il m'accorde de l'attention et cherche des raisons d'être proche.", interest: 2, effort: 1, comm: 1 },
        { label: "Il est sympathique mais difficile à cerner.", interest: 0, effort: -1, comm: -2 },
        { label: "J'ai souvent l'impression de devoir attirer son attention.", interest: -2, effort: -2, comm: -1 }
      ]},
      { text: "Quel est le plus grand signe qui te fait douter de son intérêt ?", options: [
        { label: "Ses signaux contradictoires.", interest: -2, comm: -1, effort: -1 },
        { label: "Sa communication irrégulière.", comm: -3, interest: -1, effort: 0 },
        { label: "Il ne fait pas assez d'efforts.", effort: -3, interest: -1, comm: 0 }
      ]},
      { text: "Qu'est-ce que tu veux vraiment savoir à son sujet ?", options: [
        { label: "S'il m'apprécie vraiment.", interest: -1, comm: 0, effort: -1 },
        { label: "S'il me voit comme plus qu'une amie.", interest: -1, effort: 0, comm: -1 },
        { label: "Si je devrais continuer à le poursuivre.", effort: -2, interest: 0, comm: 0 }
      ]}
    ],
    axes: ["interest","comm","effort"],
    ranges: { interest: { min: -9, max: 7 }, comm: { min: -10, max: 5 }, effort: { min: -14, max: 7 } },
    microInsights: {
      interest: ["Noté, cela en dit long sur son niveau d'intérêt.", "C'est un véritable signal d'intérêt."],
      comm: ["Cela influence ta lecture de la Communication.", "Les schémas de communication comme celui-ci comptent beaucoup."],
      effort: ["Cela entre en compte dans le niveau d'effort qu'il fournit réellement.", "C'est un signal important concernant ses efforts."],
      neutral: ["Compris, j'en tiens compte dans ta lecture."]
    },
    resultCopy: {
      interest: {
        label: "Intérêt",
        high: "Il montre de vrais signes d'intérêt, il prend les devants, reste proche et te donne des raisons de croire que ce n'est pas seulement occasionnel.",
        mid: "Son intérêt est là, mais il va et vient, suffisamment pour te garder curieuse, pas encore assez pour te donner des certitudes.",
        low: "Le schéma central ici est un manque d'intérêt constant, pour l'instant, tu te poses davantage de questions que lui ne fait de démarches."
      },
      comm: {
        label: "Communication",
        high: "La communication avec lui semble stable et facile, un signe fort, si le reste du tableau correspond.",
        mid: "La communication est fonctionnelle mais irrégulière, la conversation existe, simplement sans rythme fiable pour le moment.",
        low: "Le schéma central ici est une communication imprévisible, les signaux contradictoires et les silences rendent difficile de savoir où tu en es réellement."
      },
      effort: {
        label: "Ses efforts",
        high: "Il fait de vrais efforts pour réduire la distance, il prend les devants, remarque quand tu prends du recul et te consacre du temps.",
        mid: "Ses efforts apparaissent par moments, présents quand c'est facile, plus difficiles à compter quand ça ne l'est pas.",
        low: "Le schéma central ici est un déséquilibre dans les efforts, pour l'instant, c'est toi qui portes la plus grande partie du poids de cette situation."
      }
    },
    warningCopy: {
      interest: {
        label: "Intérêt",
        high: "Même un fort intérêt au début peut s'estomper s'il ne reçoit pas le bon type d'attention. Si tu cesses d'observer comment son initiative évolue avec le temps, tu risques de manquer le moment où son intérêt commence à refroidir.",
        mid: "Un intérêt irrégulier est facile à expliquer sur le moment. Si tu continues à combler toi-même les silences, tu risques de prendre un schéma chaud-froid pour quelque chose de plus stable qu'il ne l'est.",
        low: "Tes réponses indiquent qu'un manque d'intérêt constant est le principal risque ici. Sans véritable changement, tu risques de rester investie dans une situation qui ne reçoit pas la même énergie en retour."
      },
      comm: {
        label: "Communication",
        high: "Une conversation facile peut malgré tout cacher un manque de clarté réel. Si tu te concentres seulement sur la fréquence de ses réponses plutôt que sur ce qu'elles disent réellement, tu risques de manquer le schéma plus important.",
        mid: "Une communication irrégulière est facile à excuser message après message. Si rien n'est fait, tu risques de t'habituer à accepter moins de constance qu'une vraie connexion n'en demande.",
        low: "Tes réponses indiquent qu'une communication imprévisible est le principal risque ici. Sans schéma plus clair, la confusion et les signaux contradictoires risquent de continuer à se répéter plutôt que de se résoudre d'eux-mêmes."
      },
      effort: {
        label: "Ses efforts",
        high: "Les efforts visibles maintenant ne garantissent pas qu'ils dureront une fois la nouveauté passée. Si tu cesses de remarquer s'il continue à prendre les devants, tu risques d'être prise au dépourvu par un changement dans la personne qui fait les démarches.",
        mid: "Des efforts qui n'apparaissent que parfois sont faciles à prendre pour un véritable investissement. Si tu ne surveilles pas cela, tu risques de faire davantage de travail simplement parce que c'est toi qui y prêtes attention.",
        low: "Tes réponses indiquent qu'un véritable déséquilibre dans les efforts est le principal risque ici. Sans changement, ce schéma a tendance à continuer plutôt qu'à se corriger, te laissant porter une connexion qu'il n'égale pas."
      }
    },
    bridgeMap: {
      interest: "Ta lecture montre que son intérêt est la partie la plus fragile de cette dynamique actuellement, il y a un vrai potentiel ici, mais quelques schémas le freinent. Ton résultat montre ce qui se passe ; le livre te montre exactement comment faire évoluer la situation en ta faveur.",
      comm: "Ta lecture montre que la communication est le point le plus faible de cette connexion actuellement, il y a un vrai potentiel ici, mais quelques schémas la freinent. Ton résultat montre ce qui se passe ; le livre t'explique exactement comment créer la clarté qui te manque.",
      effort: "Ta lecture montre que les efforts dans cette situation sont déséquilibrés actuellement, il y a un vrai potentiel ici, mais quelques schémas la freinent. Ton résultat montre ce qui se passe ; le livre te montre exactement comment faire évoluer la dynamique pour qu'il commence à égaler ton énergie."
    },
    bookDesc: {
      interest: [
        "Ton plus grand avertissement portait sur son intérêt, et ce n'est pas quelque chose que quelques textos malins suffiront à réparer.",
        "Tu as besoin de comprendre pourquoi l'intérêt masculin s'estompe avant même que les choses deviennent officielles, et ce qui pousse réellement un homme à se lancer dans quelque chose de vrai.",
        "Ce guide ne repose ni sur la manipulation, ni sur des jeux, ni sur de fausses astuces de texto.",
        "Il repose sur la psychologie de l'attraction et de l'investissement émotionnel, les mécanismes exacts derrière le schéma que ta lecture vient de signaler."
      ],
      comm: [
        "Ton plus grand avertissement portait sur la communication, les signaux contradictoires, les réponses irrégulières et la confusion qu'ils laissent derrière eux.",
        "Tu as besoin de comprendre pourquoi la communication reste floue, comment lire ce qui se passe réellement en dessous, et comment créer la clarté qui manque.",
        "Ce guide ne repose ni sur la manipulation, ni sur des jeux, ni sur de fausses astuces de texto.",
        "Il repose sur la psychologie d'une communication claire et de la connexion émotionnelle, les mécanismes exacts derrière le schéma que ta lecture vient de signaler."
      ],
      effort: [
        "Ton plus grand avertissement portait sur l'effort, un déséquilibre où tu fais plus d'efforts pour aller vers lui qu'il n'en fait vers toi.",
        "Tu as besoin de comprendre pourquoi ce déséquilibre existe, ce qui fait passer un homme du détachement à l'investissement, et comment arrêter de tout porter en solo.",
        "Ce guide ne repose ni sur la manipulation, ni sur des jeux, ni sur de fausses astuces de texto.",
        "Il repose sur la psychologie de l'effort et de l'investissement, les mécanismes exacts derrière le schéma que ta lecture vient de signaler."
      ]
    },
    loadingLine: "Analyse de tes schémas en cours…",
    loadingSubtext: "Comparaison de tes réponses avec plus de 10 000 schémas de rencontres…",
    nameHeadline: "Ta lecture est prête.",
    nameSub: "Entre ton prénom — rien d'autre. Cela personnalise tes scores d'Intérêt, de Communication et de Ses efforts ci-dessous. Aucun e-mail, aucune inscription."
  }
  };
  STATIC_STRINGS.fr = {
    "landing.eyebrow": "L'Analyseur",
    "landing.h1": "Il T’Aime Bien ? <em>Arrête De Deviner. Vois Ce Que Son Comportement Te Dit Vraiment.</em>",
    "landing.sub": "6 questions &middot; <em>60 secondes</em> &middot; personnalisé. Comprends le schéma derrière ses actions, sa communication et son effort.",
    "landing.startBtn": "Démarrer Mon Analyse",
    "landing.previewInterest": "Intérêt",
    "landing.previewComm": "Communication",
    "landing.previewInvestment": "Investissement",
    "landing.trust": "Conçu à partir de la psychologie relationnelle et des schémas de communication pour t'offrir des résultats réfléchis et personnalisés.",
    "landingSingle.eyebrow": "L'Analyseur",
    "landingSingle.h1": "Il T’Aime Bien ? <em>Découvre Ce Que Ses Actions Signifient Vraiment</em>",
    "landingSingle.sub": "Six questions. <em>Soixante secondes</em>. Découvre si ses actions montrent un intérêt réel ou des signaux contradictoires.",
    "landingSingle.startBtn": "Démarrer Mon Analyse",
    "landingSingle.previewConfidence": "Intérêt",
    "landingSingle.previewMagnetism": "Communication",
    "landingSingle.previewSelfInvestment": "Son Effort",
    "landingSingle.trust": "Conçu à partir de la psychologie relationnelle et des schémas de communication pour t'offrir des résultats réfléchis et personnalisés.",
    "gate.h1": "Quelle Est Ta Situation Avec <em>Lui</em> ?",
    "gate.sub": "On adapte ta lecture exactement à ta situation.",
    "gate.yes": "❤️ On est en couple",
    "gate.no": "👀 On n'est pas officiellement ensemble",
    "shared.liveBadge": "lectrices explorant ses signaux",
    "name.eyebrow": "Presque Terminé",
    "name.lockText": "Tes scores sont prêts",
    "name.placeholder": "Ton prénom",
    "name.err": "Entre ton prénom pour continuer.",
    "name.btn": "Débloquer Mes Résultats",
    "name.privacyBadge": "Juste ton prénom — pas d'email, pas d'inscription",
    "name.micro": "Ça prend 2 secondes. On ne te demandera jamais ton email.",
    "name.emailNote": "Astuce : pense aussi à vérifier tes spams.",
    "results.eyebrow": "Ta Lecture",
    "results.strengthLabel": "Plus Grande Force",
    "results.warningLabel": "Plus Grand Avertissement",
    "results.downloadBtn": "Télécharger Ma Carte de Résultat",
    "results.shareHint": "Une carte-résumé à partager, parfaite pour ton TikTok ou ta story Instagram",
    "results.nextBtn": "Voir Quoi Faire Ensuite",
    "proof.eyebrow": "Le Verdict N'est Que la Moitié de l'Histoire",
    "proof.h1": "Ta lecture montre le schéma. Voici comment le changer.",
    "proof.testimonialsTitle": "Quelques messages de lectrices ❤️",
    "proof.description": "<p>Ces femmes étaient comme toi.</p><p>Les hommes qu'elles voulaient leur envoyaient des signaux contradictoires et s'éloignaient.</p><p>Puis elles ont découvert le livre.</p><p>Aujourd'hui, ces mêmes hommes les recherchent, s'investissent davantage, et deviennent <span class=\"proof-obsessed\">obsédés</span> par elles.</p>",
    "proof.nextBtn": "Révèle Ton Plus Grand Signal d'Alerte",
    "proof.footerNote": "Tes résultats sont propres à tes réponses, ce ne sont pas des conseils génériques.",
    "buy.digitalNotice": "100% eBook Numérique &middot; Compatible avec iOS, Android, Kindle et lecteurs PDF",
    "buy.title": "Le Rendre Obsédé",
    "buy.h1": "Comprends-Le. <em>Arrête de Deviner Quoi Faire Ensuite.</em>",
    "buy.subCopy": "Va plus loin dans la psychologie derrière l'attraction, la connexion émotionnelle, les signaux contradictoires et son comportement.",
    "story.eyebrow": "Notre Histoire",
    "story.s1_1": "Tout a commencé par une question que je n'arrêtais pas de me poser…",
    "story.s1_2": "Pendant longtemps, je me suis retrouvée dans des situations avec des hommes qui me laissaient perplexe.",
    "story.s1_3": "Pourquoi un homme pouvait-il être si intéressé un moment, puis distant le suivant ?",
    "story.s1_4": "Pourquoi certains semblaient s'éloigner plus je me rapprochais ?",
    "story.s1_5": "Pourquoi donner plus d'attention rendait parfois les choses pires, tandis que prendre de la distance changeait tout ?",
    "story.s2_1": "Et honnêtement ? Je n'ai pas toujours géré ces situations de la bonne manière.",
    "story.s2_2": "Je sur-analysais chaque texto. Je doutais de moi.",
    "story.s2_3": "J'essayais de lire dans ses pensées, en me demandant ce que j'avais bien pu faire de mal…",
    "story.s2_4": "…et pourquoi quelque chose d'aussi simple pouvait devenir si compliqué.",
    "story.s2_5": "Mais après avoir revécu ces schémas encore et encore, j'ai commencé à observer.",
    "story.s3_1": "J'ai remarqué les petites choses que beaucoup d'entre nous ignorent.",
    "story.s3_2": "La façon dont les hommes communiquent. La façon dont l'attraction se crée vraiment.",
    "story.s3_3": "La différence entre courir après quelqu'un… et créer un véritable désir.",
    "story.s3_4": "À quel point notre propre comportement peut changer la dynamique entre deux personnes.",
    "story.s3_5": "Combien de femmes mal interprètent le comportement masculin, non pas parce qu'elles aiment mal,",
    "story.s3_6": "…mais parce que personne ne leur a jamais expliqué comment l'attraction fonctionne.",
    "story.s4_1": "Cette curiosité est devenue quelque chose de beaucoup plus grand.",
    "story.s4_2": "J'ai commencé à rassembler tout ce que j'apprenais au même endroit.",
    "story.chip1": "Les Schémas",
    "story.chip2": "Les Leçons",
    "story.chip3": "Les Erreurs",
    "story.s4_3": "Les conversations, les déclics, et tout ce que j'aurais aimé comprendre bien plus tôt.",
    "story.s4_4": "J'ai étudié. J'ai observé. J'ai testé différentes approches jusqu'à ce que tout devienne clair.",
    "story.s5_1": "C'est ainsi que Make Him Obsessed est né.",
    "story.s5_2": "J'ai créé ce livre pour que chaque femme ait quelque chose de concret à relire quand elle se sent perdue…",
    "story.s5_3": "…quelque chose qui aide à comprendre la situation au lieu de sur-réfléchir sans fin.",
    "story.s5_4": "Et j'ai créé ce site pour la même raison : un endroit simple pour explorer ces idées et se sentir moins perdue avec les hommes et l'attraction.",
    "story.s5_5": "Pas né d'une envie de vendre, mais d'un besoin réel que j'ai moi-même vécu.",
    "story.rita1": "Tu te demandes encore ce que signifie son comportement ?",
    "story.rita2": "Demande à Rita.",
    "story.rita3": "Raconte-lui ce qui s'est passé. Elle t'aidera à y voir clair.",
    "story.ritaBtn": "Parler à Rita",
    "story.s6_1": "Parce que je sais ce que c'est de se demander : « Qu'est-ce que je fais de mal ? »",
    "story.s6_2": "Et je ne veux pas que tu aies à traverser tout cela seule.",
    "story.s6_3": "Il ne s'agit pas de devenir quelqu'un d'autre.",
    "story.s6_4": "Il s'agit de comprendre la dynamique, te comprendre toi-même, et savoir quoi faire quand tu aimes vraiment quelqu'un.",
    "story.s6_5": "C'est pourquoi Make Him Obsessed existe.",
    "story.finalBtn": "Montre-moi comment →",
    "journey.s4_2": "Ton Plus Grand Avertissement",
    "journey.s5_8": "Pas parce que tu as appris à courir encore plus après lui.",
    "journey.s5_9": "Mais parce que tu as appris à créer une connexion plus forte.",
    "journey.finalBtn": "Montre-moi comment →",
    "jf.b1": "Tu cherchais une réponse.",
    "jf.b2": "Pas une supposition de plus.",
    "jf.b3": "Tu voulais comprendre ce qui se passait vraiment.",
    "jf.b4": "Et maintenant, tu peux.",
    "jf.m1": "Ce que cela signifie vraiment.",
    "jf.m2": "Cela ne veut pas dire automatiquement qu'il ne t'aime pas.",
    "jf.m3": "Cela veut dire qu'il y a quelque chose dans la façon dont cette relation évolue que tu dois comprendre.",
    "jf.m4": "Parce que savoir ce qu'il ressent n'est que la moitié du chemin.",
    "jf.m5": "Savoir quoi faire ensuite, c'est l'autre moitié.",
    "jf.t1": "Imagine ne plus avoir à courir après son attention.",
    "jf.t2": "Ne plus trop réfléchir à chaque message.",
    "jf.t3": "Ne plus te demander où tu en es.",
    "jf.r1": "Envie d'en lire plus ?",
    "jf.r2": "Voir tous les avis →",
    "jf.k1": "Tu comprends le schéma.",
    "jf.k2": "Maintenant, apprends ce que tu peux en faire.",
    "jf.c1": "Tu voulais y voir clair.",
    "jf.c2": "Maintenant, tu sais par où commencer.",
    "buy.desc1": "Tu n'as pas besoin d'un énième conseil de rencontre.",
    "buy.desc2": "Tu as besoin de comprendre pourquoi il s'éloigne… pourquoi il perd de l'intérêt… et pourquoi certaines femmes restent gravées dans l'esprit d'un homme bien après avoir quitté la pièce.",
    "buy.desc3": "Ce guide ne repose ni sur la manipulation, ni sur des jeux, ni sur de fausses astuces de texto.",
    "buy.desc4": "Il repose sur la psychologie de l'attraction, de l'attachement émotionnel, et des comportements qui rendent quelqu'un inoubliable, discrètement.",
    "buy.label1": "Ce Que Tu Vas Découvrir Dans Ce Guide",
    "buy.l1_1": "Pourquoi les hommes s'attachent émotionnellement à certaines femmes, et perdent intérêt pour d'autres.",
    "buy.l1_2": "Les erreurs subtiles qui l'éloignent sans que tu t'en rendes compte.",
    "buy.l1_3": "Les déclencheurs d'attraction qui créent un véritable investissement émotionnel.",
    "buy.l1_4": "Comment arrêter de trop analyser chaque texto et comprendre enfin ce qui se passe réellement dans sa tête.",
    "buy.l1_5": "Ce qui fait qu'une relation se renforce au lieu de s'essouffler après la lune de miel.",
    "buy.label2": "Ce Guide Est Fait Pour Toi Si",
    "buy.l2_1": "Tu en as assez de te demander pourquoi il a changé.",
    "buy.l2_2": "Tu attires des hommes qui t'apprécient… mais qui ne s'engagent jamais pleinement.",
    "buy.l2_3": "Tu en as fini de courir après des signaux contradictoires.",
    "buy.l2_4": "Tu veux de la clarté au lieu de la confusion.",
    "buy.l2_5": "Tu veux créer de l'attraction sans prétendre être quelqu'un que tu n'es pas.",
    "buy.label3": "Imagine",
    "buy.im1": "Au lieu de vérifier ton téléphone toutes les cinq minutes…",
    "buy.im2": "Au lieu de rejouer les conversations dans ta tête…",
    "buy.im3": "Au lieu de demander à tes amies ce que son dernier texto « voulait vraiment dire »…",
    "buy.im4": "Tu comprends enfin la psychologie derrière son comportement, et tu sais exactement comment réagir avec assurance.",
    "buy.imCloser": "Ça change tout.",
    "buy.label4": "Pourquoi Ce Guide Est Différent",
    "buy.diff1": "La plupart des conseils de rencontre te disent : « Attends plus longtemps. » « Fais-toi désirer. » « Sois juste toi-même. »",
    "buy.diff2": "Ce guide explique pourquoi ça marche parfois… et pourquoi ça échoue souvent.",
    "buy.diff3": "Tu comprendras les principes psychologiques derrière l'attraction, pour arrêter de deviner.",
    "buy.label5": "Accès Numérique Instantané",
    "buy.l3_1": "Lis sur ton téléphone, ta tablette ou ton ordinateur.",
    "buy.l3_2": "Termine-le en une soirée.",
    "buy.l3_3": "Applique-le immédiatement à ta relation actuelle ou future.",
    "buy.hangChip": "Prix de Lancement",
    "wheel.teaserTitle": "Une Réduction T'Attend",
    "wheel.teaserSub": "Fais tourner la roue pour tenter de gagner jusqu'à 100% de réduction sur le livre.",
    "wheel.spinBtn": "Faire Tourner La Roue",
    "wheel.bannerLabel": "🎉 Ta Réduction Est Prête",
    "wheel.codeLabel": "Code :",
    "wheel.copyBtn": "Copier",
    "wheel.modalTitle": "Tourne Pour Ta Réduction",
    "wheel.modalSubDefault": "Fais glisser la roue et lâche pour la faire tourner",
    "wheel.resultLabel": "🎉 Tu As Gagné",
    "wheel.continueBtn": "Continuer",
    "buy.offerEyebrow": "Ton Bonus de Lecture",
    "buy.offerNote": "Réservé exclusivement pour tes résultats",
    "buy.chip1": "Psychologie masculine",
    "buy.chip2": "Déclencheurs d'attraction",
    "buy.chip3": "Erreurs de texto",
    "buy.chip4": "Connexion émotionnelle",
    "buy.chip5": "Attraction durable",
    "buy.faqTitle": "Questions Fréquentes",
    "buy.faq1q": "Est-ce de la manipulation ?",
    "buy.faq1a": "Non. Il s'agit de comprendre l'attraction, la confiance en soi et une communication saine, pas de contrôler ou de tromper qui que ce soit.",
    "buy.faq2q": "Est-ce que ça marchera s'il a déjà perdu tout intérêt ?",
    "buy.faq2a": "Ça dépend de pourquoi il a perdu intérêt. Le guide ne peut pas garantir de résultats, mais il peut t'aider à éviter les erreurs courantes et à améliorer ton approche.",
    "buy.faq3q": "Ce guide fait combien de pages ?",
    "buy.faq3a": "C'est un guide de 50 pages, court et pratique.",
    "buy.ctaBtn": "Accès Instantané",
    "buy.footerNote": "Accès numérique instantané, commence ta lecture en quelques minutes.",
    "buy.trustLine": "🔒 Paiement sécurisé · 50 pages",
    "buy.refundLink": "Toutes les ventes sont définitives · Voir la politique",
    "buy.insideLink": "Voir ce qu'il y a dedans ↓",
    "buy.tocTitle": "Ce que tu vas apprendre",
    "buy.tocTakeaway": "<strong>À retenir :</strong> Ce livre t'apprend à devenir si ancrée, intéressante et émotionnellement intelligente que l'attraction devient un effet secondaire naturel, et non une performance.",








    "chat.headerTitle": "Demande à Rita",
    "chat.headerSub": "Tes questions relationnelles, répondues"
  };
  CARD_LABELS.fr = { strongest: "POINT FORT", growth: "MARGE DE PROGRESSION", prepare: "Préparation de ta carte…", linkFallback: "Fais le test toi-même" };
})();
