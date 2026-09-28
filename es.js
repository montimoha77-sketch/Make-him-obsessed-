(function(){
  QUIZ_CONFIG_BY_LANG.es = {
    relationship: {
      "questions": [
        {
          "text": "¿Quién suele escribir primero?",
          "options": [
            {
              "label": "Casi siempre es él quien inicia",
              "interest": 3,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Está bastante equilibrado entre nosotros",
              "interest": 1,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Casi siempre soy yo quien empieza",
              "interest": -2,
              "comm": 0,
              "ei": 0
            },
            {
              "label": "Casi no nos escribimos",
              "interest": -3,
              "comm": -2,
              "ei": 0
            }
          ]
        },
        {
          "text": "¿Cuánto suele tardar en responder?",
          "options": [
            {
              "label": "Casi al instante",
              "interest": 1,
              "comm": 3,
              "ei": 0
            },
            {
              "label": "En unas pocas horas",
              "interest": 0,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "Un día o más, a menudo",
              "interest": 0,
              "comm": -2,
              "ei": 0
            },
            {
              "label": "Es totalmente impredecible",
              "interest": 0,
              "comm": -1,
              "ei": -1
            }
          ]
        },
        {
          "text": "¿Te ha llevado a una cita de verdad?",
          "options": [
            {
              "label": "Sí, más de una vez",
              "interest": 2,
              "comm": 0,
              "ei": 3
            },
            {
              "label": "Sí, una vez",
              "interest": 1,
              "comm": 0,
              "ei": 1
            },
            {
              "label": "Lo hemos hablado, pero no ha pasado nada",
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
          "text": "¿Alguna vez te ha hecho ghosting o se ha vuelto frío sin explicación?",
          "options": [
            {
              "label": "Nunca",
              "interest": 0,
              "comm": 1,
              "ei": 2
            },
            {
              "label": "Una vez, pero volvió",
              "interest": 0,
              "comm": 0,
              "ei": -1
            },
            {
              "label": "Pasa bastante seguido",
              "interest": 0,
              "comm": -2,
              "ei": -3
            },
            {
              "label": "Lo está haciendo ahora mismo",
              "interest": -2,
              "comm": -3,
              "ei": -3
            }
          ]
        },
        {
          "text": "¿Sueles tener claro dónde estás con él, o te encuentras teniendo que preguntar?",
          "options": [
            {
              "label": "Muy claro, me lo comunica sin que tenga que preguntar",
              "interest": 2,
              "comm": 3,
              "ei": 0
            },
            {
              "label": "Bastante claro, aunque he tenido que preguntar una o dos veces",
              "interest": 0,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "He tenido que preguntar más de una vez y aún me siento insegura",
              "interest": -1,
              "comm": -2,
              "ei": 0
            },
            {
              "label": "No tengo ni idea de dónde estoy parada",
              "interest": -2,
              "comm": -3,
              "ei": -1
            }
          ]
        },
        {
          "text": "En general, ¿sientes que el esfuerzo en esto es mutuo?",
          "options": [
            {
              "label": "Sí, se siente equilibrado",
              "interest": 3,
              "comm": 2,
              "ei": 2
            },
            {
              "label": "En su mayoría, aunque yo pongo un poco más",
              "interest": 1,
              "comm": 1,
              "ei": 0
            },
            {
              "label": "No, claramente pongo más de mi parte",
              "interest": -2,
              "comm": -1,
              "ei": -1
            },
            {
              "label": "Estoy haciendo todo el trabajo",
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
          "Anotado, esto dice mucho sobre su nivel de interés.",
          "Esa es una señal de interés fuerte."
        ],
        "comm": [
          "Esto influye en tu puntuación de Comunicación.",
          "Este tipo de patrón de comunicación importa mucho."
        ],
        "ei": [
          "Esto se suma a la Inversión Emocional.",
          "Ese es un indicador clave de inversión emocional."
        ],
        "neutral": [
          "Entendido, lo tenemos en cuenta en tu lectura."
        ]
      },
      "resultCopy": {
        "interest": {
          "label": "Interest",
          "high": "Está haciendo un esfuerzo real por mantener esto vivo, la iniciativa y la atención apuntan a un interés genuino, no solo a comodidad.",
          "mid": "Su interés es inconsistente, cálido a veces, distante otras, sin un patrón estable de inversión en ningún sentido.",
          "low": "El problema principal es la falta de interés constante. Rara vez toma la iniciativa, y casi todo el esfuerzo en esta conexión viene de ti."
        },
        "comm": {
          "label": "Comunicación",
          "high": "La conversación fluye con facilidad y él está presente de forma constante, una base sólida, si el resto encaja.",
          "mid": "La comunicación es funcional pero despareja, las respuestas llegan, pero sin mucha urgencia ni energía detrás.",
          "low": "El problema principal es una comunicación poco confiable. Las respuestas son lentas e inconsistentes, sin un ritmo fiable en el que apoyarse."
        },
        "ei": {
          "label": "His Effort",
          "high": "Se ha presentado en persona, te ha incluido en su mundo, y se ha mantenido constante, eso es inversión real, no solo energía de mensajes.",
          "mid": "Hay inversión emocional, pero es incompleta, sus acciones aún no coinciden del todo con sus palabras.",
          "low": "El problema principal es una baja inversión emocional. La distancia, el seguimiento inconsistente y los periodos fríos sin explicación pesan más que cualquier compromiso real."
        }
      },
      "warningCopy": {
        "interest": {
          "label": "Interest",
          "high": "El interés puede desvanecerse rápido en cuanto se instala la comodidad. Si dejas de notar cómo cambian la iniciativa y el esfuerzo con el tiempo, corres el riesgo de perderte el momento exacto en que su interés empieza a bajar.",
          "mid": "Un interés inconsistente es fácil de pasar por alto hasta que se vuelve la norma. Si sigues cerrando la brecha cada vez que él se retira, corres el riesgo de confundir un patrón irregular con algo estable.",
          "low": "Tus respuestas apuntan a un patrón de esfuerzo unilateral. Si esto continúa sin abordarse, corres el riesgo de seguir invertida en una conexión que no es correspondida, confundiendo su falta de iniciativa con algo que cambiará solo."
        },
        "comm": {
          "label": "Comunicación",
          "high": "Las respuestas rápidas pueden ocultar una inconsistencia más profunda. Si dejas de evaluar lo que realmente se dice y te enfocas solo en la velocidad, corres el riesgo de pasar por alto la falta de claridad real.",
          "mid": "Una comunicación despareja es fácil de justificar en momentos aislados. Si las respuestas de bajo esfuerzo o tardías no se abordan, corres el riesgo de entrenarte para aceptar menos constancia de la que la relación necesita.",
          "low": "Tus respuestas apuntan a una comunicación poco confiable como el riesgo principal aquí. Sin un ritmo fiable, las señales mal interpretadas y la confusión repetida probablemente sigan resurgiendo en lugar de resolverse."
        },
        "ei": {
          "label": "His Effort",
          "high": "La inversión visible puede seguir siendo inconsistente por dentro. Si dejas de comprobar si sus acciones siguen coincidiendo con sus palabras, corres el riesgo de que te sorprenda un cambio que no viste venir.",
          "mid": "Una inversión emocional que no coincide del todo con sus palabras es un patrón para vigilar, no para ignorar. Sin abordarlo, corres el riesgo de construir expectativas sobre promesas que no están respaldadas por acciones constantes.",
          "low": "Tus respuestas apuntan a una baja inversión emocional como el riesgo principal aquí. La distancia, el seguimiento inconsistente y los periodos fríos sin explicación tienden a repetirse en lugar de resolverse sin un cambio claro de comportamiento."
        }
      },
      "bridgeMap": {
        "interest": "Tu lectura muestra que el interés es la parte más frágil de esta dinámica, y es exactamente lo que los capítulos de psicología del libro están diseñados para cambiar.",
        "comm": "Tu lectura muestra que la comunicación es el punto más débil de esta conexión, los capítulos sobre mensajes explican exactamente cómo solucionarlo.",
        "ei": "Tu lectura muestra que la inversión emocional es la brecha aquí, los capítulos del libro sobre construir una atracción real y duradera hablan directamente de esto."
      },
      "bookDesc": {
        "interest": [
          "Tu mayor advertencia fue sobre el interés, y eso no se soluciona con un par de mensajes ingeniosos.",
          "Necesitas entender por qué se desvanece el interés masculino, qué lo mata en silencio, y qué es lo que realmente hace que un hombre siga comprometido mucho después de la fase inicial.",
          "Esta guía no se basa en manipulación, juegos ni trucos falsos de mensajes de texto.",
          "Está construida en torno a la psicología de la atracción y la inversión emocional, los mecanismos exactos detrás del patrón que tu lectura acaba de señalar."
        ],
        "comm": [
          "Tu mayor advertencia fue sobre la comunicación, señales confusas, respuestas inconsistentes, y la confusión que dejan atrás.",
          "Necesitas entender por qué se rompe la comunicación, cómo leer lo que realmente está pasando debajo de ella, y cómo crear la claridad que falta.",
          "Esta guía no se basa en manipulación, juegos ni trucos falsos de mensajes de texto.",
          "Está construida en torno a la psicología de la comunicación clara y la conexión emocional, los mecanismos exactos detrás del patrón que tu lectura acaba de señalar."
        ],
        "ei": [
          "Tu mayor advertencia fue sobre el esfuerzo, un desequilibrio en el que tú aportas más a esta conexión que él.",
          "Necesitas entender por qué ocurre ese desequilibrio, qué hace que un hombre pase de pasivo a comprometido, y cómo dejar de hacer todo el trabajo tú sola.",
          "Esta guía no se basa en manipulación, juegos ni trucos falsos de mensajes de texto.",
          "Está construida en torno a la psicología del esfuerzo y la inversión, los mecanismos exactos detrás del patrón que tu lectura acaba de señalar."
        ]
      },
      "loadingLine": "Analizando tus respuestas…",
      "loadingSubtext": "Comparando tus respuestas con más de 10,000 conjuntos de datos de comportamiento en relaciones…",
      "nameHeadline": "Tu lectura está lista.",
      "nameSub": "Ingresa tu nombre para que tus resultados te hablen directamente, Nivel de Interés, Puntuación de Comunicación, Inversión Emocional, y tu mayor punto ciego en la relación."
    },
    single: {
    questions: [
      { text: "¿Cómo suele comunicarse contigo?", options: [
        { label: "Te escribe con constancia y mantiene las conversaciones.", comm: 3, interest: 1, effort: 1 },
        { label: "Es intermitente / desaparece a veces.", comm: -3, interest: -1, effort: -1 },
        { label: "Normalmente soy yo quien inicia las conversaciones.", comm: -1, interest: -1, effort: -2 }
      ]},
      { text: "¿Quién suele dar el primer paso?", options: [
        { label: "Él suele acercarse primero.", interest: 2, effort: 3, comm: 0 },
        { label: "Está bastante equilibrado.", interest: 1, effort: 1, comm: 0 },
        { label: "Normalmente soy yo quien se acerca.", interest: -1, effort: -3, comm: 0 }
      ]},
      { text: "¿Cómo actúa cuando tú te alejas un poco?", options: [
        { label: "Lo nota y se acerca más.", interest: 3, effort: 2, comm: 1 },
        { label: "Me da espacio y realmente no reacciona.", interest: -1, effort: 0, comm: 0 },
        { label: "Parece perder el interés.", interest: -2, effort: -2, comm: -1 }
      ]},
      { text: "¿Cómo te trata cuando están juntos?", options: [
        { label: "Me presta atención y busca razones para estar cerca.", interest: 2, effort: 1, comm: 1 },
        { label: "Es amable, pero difícil de interpretar.", interest: 0, effort: -1, comm: -2 },
        { label: "A menudo siento que estoy persiguiendo su atención.", interest: -2, effort: -2, comm: -1 }
      ]},
      { text: "¿Cuál es la mayor señal que te hace cuestionar su interés?", options: [
        { label: "Sus señales contradictorias.", interest: -2, comm: -1, effort: -1 },
        { label: "Su comunicación inconsistente.", comm: -3, interest: -1, effort: 0 },
        { label: "No se esfuerza lo suficiente.", effort: -3, interest: -1, comm: 0 }
      ]},
      { text: "¿Qué quieres saber realmente sobre él?", options: [
        { label: "Si realmente le gusto.", interest: -1, comm: 0, effort: -1 },
        { label: "Si me ve como algo más que una amiga.", interest: -1, effort: 0, comm: -1 },
        { label: "Si debería seguir intentando conquistarle.", effort: -2, interest: 0, comm: 0 }
      ]}
    ],
    axes: ["interest","comm","effort"],
    ranges: { interest: { min: -9, max: 7 }, comm: { min: -10, max: 5 }, effort: { min: -14, max: 7 } },
    microInsights: {
      interest: ["Anotado, esto dice algo sobre su nivel de interés.", "Es una señal real de interés."],
      comm: ["Esto influye en tu lectura de la Comunicación.", "Los patrones de comunicación como este importan mucho."],
      effort: ["Esto influye en cuánto esfuerzo está poniendo realmente.", "Es una señal importante sobre su esfuerzo."],
      neutral: ["Entendido, lo tendré en cuenta en tu lectura."]
    },
    resultCopy: {
      interest: {
        label: "Interés",
        high: "Está mostrando señales reales de interés, se acerca, se mantiene cerca y te da razones para pensar que esto no es solo algo casual.",
        mid: "Su interés está ahí, pero va y viene, lo suficiente para mantener tu curiosidad, pero todavía no lo suficiente para darte certeza.",
        low: "El patrón central aquí es la falta de un interés constante, ahora mismo tú te preguntas más qué está pasando de lo que él hace por acercarse."
      },
      comm: {
        label: "Comunicación",
        high: "La comunicación con él se siente estable y fácil, una señal fuerte, si el resto de la situación encaja.",
        mid: "La comunicación funciona, pero es irregular, la conversación está ahí, simplemente todavía sin un ritmo fiable.",
        low: "El patrón central aquí es una comunicación impredecible, las señales contradictorias y los silencios hacen difícil saber realmente dónde estás."
      },
      effort: {
        label: "Su esfuerzo",
        high: "Está poniendo un esfuerzo real para acortar la distancia, se acerca, nota cuando tú te alejas y busca tiempo para ti.",
        mid: "Su esfuerzo aparece por momentos, está presente cuando es fácil, pero cuesta contar con él cuando no lo es.",
        low: "El patrón central aquí es un desequilibrio en el esfuerzo, ahora mismo eres tú quien carga con la mayor parte del peso de esta situación."
      }
    },
    warningCopy: {
      interest: {
        label: "Interés",
        high: "Incluso un interés inicial fuerte puede desvanecerse si no recibe el tipo de atención adecuado. Si dejas de observar cómo cambia su iniciativa con el tiempo, corres el riesgo de perderte el momento en que su interés empieza a enfriarse.",
        mid: "El interés inconsistente es fácil de explicar en el momento. Si sigues llenando tú misma los silencios, corres el riesgo de confundir un patrón de idas y venidas con algo más estable de lo que realmente es.",
        low: "Tus respuestas señalan la falta de un interés constante como el riesgo principal aquí. Sin un cambio real, corres el riesgo de seguir invirtiendo en una situación que no recibe la misma energía a cambio."
      },
      comm: {
        label: "Comunicación",
        high: "Una conversación fácil todavía puede ocultar una falta de claridad real. Si te concentras solo en la frecuencia con la que responde en lugar de en lo que realmente dicen sus respuestas, corres el riesgo de perderte el patrón más importante.",
        mid: "La comunicación irregular es fácil de justificar mensaje a mensaje. Si no lo abordas, corres el riesgo de acostumbrarte a aceptar menos constancia de la que necesita una conexión real.",
        low: "Tus respuestas señalan una comunicación impredecible como el riesgo principal. Sin un patrón más claro, es probable que la confusión y las señales contradictorias sigan repitiéndose en lugar de resolverse por sí solas."
      },
      effort: {
        label: "Su esfuerzo",
        high: "El esfuerzo visible ahora no garantiza que se mantenga cuando pase la novedad. Si dejas de observar si sigue tomando la iniciativa, corres el riesgo de que te sorprenda un cambio en quién está haciendo los acercamientos.",
        mid: "El esfuerzo que solo aparece a veces es fácil de confundir con una inversión real. Si no lo vigilas, corres el riesgo de hacer más trabajo simplemente porque eres tú quien está pendiente.",
        low: "Tus respuestas señalan un desequilibrio real en el esfuerzo como el riesgo principal. Sin un cambio, este patrón tiende a continuar en lugar de corregirse, dejándote cargar con una conexión que él no iguala."
      }
    },
    bridgeMap: {
      interest: "Tu lectura muestra que su interés es la parte más frágil de esta dinámica ahora mismo, hay un potencial real aquí, pero algunos patrones lo están frenando. Tu resultado muestra lo que está pasando; el libro te muestra exactamente cómo cambiarlo a tu favor.",
      comm: "Tu lectura muestra que la comunicación es la parte más débil de esta conexión ahora mismo, hay un potencial real aquí, pero algunos patrones la están frenando. Tu resultado muestra lo que está pasando; el libro te explica exactamente cómo crear la claridad que te falta.",
      effort: "Tu lectura muestra que el esfuerzo en esta situación está desequilibrado ahora mismo, hay un potencial real aquí, pero algunos patrones lo están frenando. Tu resultado muestra lo que está pasando; el libro te muestra exactamente cómo cambiar la dinámica para que él empiece a igualar tu energía."
    },
    bookDesc: {
      interest: [
        "Tu mayor advertencia fue sobre su interés, y eso no se soluciona con un par de mensajes ingeniosos.",
        "Necesitas entender por qué el interés masculino se desvanece incluso antes de que las cosas se vuelvan oficiales, y qué es lo que realmente hace que un hombre decida ir en serio por algo real.",
        "Esta guía no se basa en manipulación, juegos ni trucos falsos de mensajes de texto.",
        "Está construida en torno a la psicología de la atracción y la inversión emocional, los mecanismos exactos detrás del patrón que tu lectura acaba de señalar."
      ],
      comm: [
        "Tu mayor advertencia fue sobre la comunicación, señales confusas, respuestas inconsistentes, y la confusión que dejan atrás.",
        "Necesitas entender por qué la comunicación sigue sin ser clara, cómo leer lo que realmente está pasando debajo de ella, y cómo crear la claridad que falta.",
        "Esta guía no se basa en manipulación, juegos ni trucos falsos de mensajes de texto.",
        "Está construida en torno a la psicología de la comunicación clara y la conexión emocional, los mecanismos exactos detrás del patrón que tu lectura acaba de señalar."
      ],
      effort: [
        "Tu mayor advertencia fue sobre el esfuerzo, un desequilibrio en el que tú te acercas más a él de lo que él se acerca a ti.",
        "Necesitas entender por qué ocurre ese desequilibrio, qué hace que un hombre pase de casual a comprometido, y cómo dejar de cargar con todo tú sola.",
        "Esta guía no se basa en manipulación, juegos ni trucos falsos de mensajes de texto.",
        "Está construida en torno a la psicología del esfuerzo y la inversión, los mecanismos exactos detrás del patrón que tu lectura acaba de señalar."
      ]
    },
    loadingLine: "Analizando tus patrones…",
    loadingSubtext: "Comparando tus respuestas con más de 10.000 patrones de citas…",
    nameHeadline: "Tu lectura está lista.",
    nameSub: "Solo tu nombre — nada más. Personaliza tus puntuaciones de Interés, Comunicación y Su esfuerzo. Sin correo electrónico, sin registro."
  }
  };
  STATIC_STRINGS.es = {
    "landing.eyebrow": "El Analizador",
    "landing.h1": "¿Le Gustas? <em>Deja de Adivinar. Descubre Lo Que Su Comportamiento Realmente Te Dice.</em>",
    "landing.sub": "6 preguntas &middot; <em>60 segundos</em> &middot; personalizado. Entiende el patrón detrás de sus acciones, su comunicación y su esfuerzo.",
    "landing.startBtn": "Comenzar Mi Análisis",
    "landing.previewInterest": "Interés",
    "landing.previewComm": "Comunicación",
    "landing.previewInvestment": "Inversión",
    "landing.trust": "Diseñado con base en la psicología de las relaciones y los patrones de comunicación para ofrecerte información reflexiva y personalizada.",
    "landingSingle.eyebrow": "El Analizador",
    "landingSingle.h1": "¿Le Gustas? <em>Descubre Lo Que Sus Acciones Realmente Significan</em>",
    "landingSingle.sub": "Seis preguntas. <em>Sesenta segundos</em>. Descubre si sus acciones muestran un interés real o señales contradictorias.",
    "landingSingle.startBtn": "Comenzar Mi Análisis",
    "landingSingle.previewConfidence": "Interés",
    "landingSingle.previewMagnetism": "Comunicación",
    "landingSingle.previewSelfInvestment": "Su Esfuerzo",
    "landingSingle.trust": "Diseñado con base en la psicología de las relaciones y los patrones de comunicación para ofrecerte información reflexiva y personalizada.",
    "gate.h1": "¿Cuál Es Tu Situación Con <em>Él</em>?",
    "gate.sub": "Adaptaremos tu lectura exactamente a tu situación.",
    "gate.yes": "❤️ Tenemos una relación",
    "gate.no": "👀 No estamos oficialmente juntos",
    "shared.liveBadge": "lectoras explorando sus señales",
    "name.eyebrow": "Ya Casi",
    "name.lockText": "Tus resultados están listos",
    "name.placeholder": "Tu nombre",
    "name.err": "Ingresa tu nombre para continuar.",
    "name.btn": "Desbloquear Mis Resultados",
    "name.privacyBadge": "Solo tu nombre — sin correo, sin registro",
    "name.micro": "Toma 2 segundos. Nunca te pediremos tu correo.",
    "results.eyebrow": "Tu Lectura",
    "results.strengthLabel": "Mayor Fortaleza",
    "results.warningLabel": "Mayor Advertencia",
    "results.downloadBtn": "Descargar Mi Tarjeta de Resultados",
    "results.shareHint": "Una tarjeta resumen para compartir, perfecta para tu TikTok o historia de Instagram",
    "results.nextBtn": "Ver Qué Hacer A Continuación",
    "proof.eyebrow": "El Veredicto Es Solo La Mitad De La Historia",
    "proof.h1": "Tu lectura muestra el patrón. Aquí te mostramos cómo cambiarlo.",
    "proof.testimonialsTitle": "Algunos mensajes de lectoras ❤️",
    "proof.description": "<p>Estas mujeres eran como tú.</p><p>Los hombres que querían les daban señales contradictorias y se alejaban.</p><p>Entonces descubrieron el libro.</p><p>Ahora, esos mismos hombres las persiguen, se esfuerzan más, y se vuelven <span class=\"proof-obsessed\">obsesionados</span> con ellas.</p>",
    "proof.nextBtn": "Revela Tu Mayor Señal de Alerta",
    "proof.footerNote": "Tus resultados son propios de tus respuestas, esto no es un consejo genérico.",
    "buy.digitalNotice": "100% eBook Digital &middot; Compatible con iOS, Android, Kindle y lectores de PDF",
    "buy.title": "Hazlo Que Se Obsesione",
    "buy.h1": "Entiéndelo. <em>Deja de Adivinar Qué Hacer Después.</em>",
    "buy.subCopy": "Profundiza en la psicología detrás de la atracción, la conexión emocional, las señales confusas y su comportamiento.",
    "story.eyebrow": "Nuestra Historia",
    "story.s1_1": "Todo empezó con una pregunta que no dejaba de hacerme…",
    "story.s1_2": "Durante mucho tiempo, me encontré una y otra vez en situaciones con hombres que me dejaban confundida.",
    "story.s1_3": "¿Por qué un hombre podía estar tan interesado en un momento y distante al siguiente?",
    "story.s1_4": "¿Por qué algunos parecían alejarse cuanto más me acercaba?",
    "story.s1_5": "¿Por qué dar más atención a veces lo empeoraba todo… mientras que tomar distancia lo cambiaba todo?",
    "story.s2_1": "¿Y sabes qué? No siempre manejé esas situaciones de la mejor manera.",
    "story.s2_2": "Sobreanalizaba cada mensaje. Dudaba de mí misma.",
    "story.s2_3": "Intentaba adivinar qué pensaba él, preguntándome qué había hecho mal…",
    "story.s2_4": "…y por qué algo que se sentía tan sencillo se volvía tan complicado de repente.",
    "story.s2_5": "Pero después de vivir esos patrones una y otra vez, empecé a prestar atención.",
    "story.s3_1": "Empecé a notar las pequeñas cosas que muchas de nosotras pasamos por alto.",
    "story.s3_2": "La forma en que los hombres se comunican. La forma en que la atracción realmente nace.",
    "story.s3_3": "La diferencia entre perseguir a alguien… y crear deseo genuino.",
    "story.s3_4": "Cuánto puede cambiar nuestra propia conducta la dinámica entre dos personas.",
    "story.s3_5": "Cuántas mujeres malinterpretan el comportamiento masculino, no porque amen mal,",
    "story.s3_6": "…sino porque nadie les explicó nunca cómo funciona la atracción.",
    "story.s4_1": "Esa curiosidad se convirtió en algo mucho más grande.",
    "story.s4_2": "Empecé a reunir todo lo que iba aprendiendo en un solo lugar.",
    "story.chip1": "Los Patrones",
    "story.chip2": "Las Lecciones",
    "story.chip3": "Los Errores",
    "story.s4_3": "Las conversaciones, los momentos de claridad, y todo lo que habría querido entender mucho antes.",
    "story.s4_4": "Estudié. Observé. Probé diferentes enfoques hasta que los patrones se volvieron claros.",
    "story.s5_1": "Así nació Make Him Obsessed.",
    "story.s5_2": "Creé el libro para que cada mujer tenga algo real a lo que volver cuando se siente confundida…",
    "story.s5_3": "…algo que te ayuda a entender la situación en vez de darle vueltas sin parar.",
    "story.s5_4": "Y creé esta web por la misma razón: un lugar sencillo para explorar estas ideas y sentirte menos perdida con los hombres y la atracción.",
    "story.s5_5": "No nació de las ganas de vender algo, sino de una necesidad real que yo misma viví.",
    "story.rita1": "¿Todavía te preguntas qué significa su comportamiento?",
    "story.rita2": "Pregúntale a Rita.",
    "story.rita3": "Cuéntale lo que pasó. Ella te ayudará a verlo con claridad.",
    "story.ritaBtn": "Hablar con Rita",
    "story.s6_1": "Porque sé lo que se siente estar ahí preguntándote: «¿Qué estoy haciendo mal?»",
    "story.s6_2": "Y no quiero que tengas que resolverlo todo sola.",
    "story.s6_3": "No se trata de convertirte en alguien que no eres.",
    "story.s6_4": "Se trata de entender la dinámica, entenderte a ti misma y saber qué hacer cuando alguien te gusta de verdad.",
    "story.s6_5": "Por eso existe Make Him Obsessed.",
    "story.finalBtn": "Muéstrame cómo →",
    "journey.s4_2": "Tu Mayor Advertencia",
    "journey.s5_8": "No porque aprendiste a perseguirlo aún más.",
    "journey.s5_9": "Sino porque aprendiste a crear una conexión más fuerte.",
    "journey.finalBtn": "Muéstrame cómo →",
    "jf.b1": "Viniste aquí buscando una respuesta.",
    "jf.b2": "No otra suposición.",
    "jf.b3": "Querías entender qué estaba pasando de verdad.",
    "jf.b4": "Y ahora puedes.",
    "jf.m1": "Lo que esto significa realmente.",
    "jf.m2": "Esto no significa automáticamente que no le gustes.",
    "jf.m3": "Significa que hay algo en la forma en que se está desarrollando esta conexión que necesitas entender.",
    "jf.m4": "Porque saber lo que él siente es solo la mitad.",
    "jf.m5": "Saber qué hacer después es la otra mitad.",
    "jf.t1": "Imagina no tener que perseguir su atención.",
    "jf.t2": "No darle vueltas a cada mensaje.",
    "jf.t3": "No preguntarte dónde estás con él.",
    "jf.r1": "¿Quieres leer más?",
    "jf.r2": "Ver todas las reseñas →",
    "jf.k1": "Entiendes el patrón.",
    "jf.k2": "Ahora aprende qué hacer con él.",
    "jf.c1": "Viniste aquí porque querías claridad.",
    "jf.c2": "Ahora sabes por dónde empezar.",
    "buy.desc1": "No necesitas otro consejo de citas.",
    "buy.desc2": "Necesitas entender por qué se aleja… por qué pierde el interés… y por qué algunas mujeres se quedan en la mente de un hombre mucho después de haber salido de la habitación.",
    "buy.desc3": "Esta guía no se basa en manipulación, juegos ni trucos falsos de mensajes de texto.",
    "buy.desc4": "Está construida en torno a la psicología detrás de la atracción, el apego emocional y los comportamientos que, en silencio, hacen que alguien sea inolvidable.",
    "buy.label1": "Dentro De La Guía, Descubrirás",
    "buy.l1_1": "Por qué los hombres se apegan emocionalmente a ciertas mujeres, y pierden interés en otras.",
    "buy.l1_2": "Los errores sutiles que lo alejan sin que te des cuenta.",
    "buy.l1_3": "Los detonantes de atracción que crean una inversión emocional genuina.",
    "buy.l1_4": "Cómo dejar de sobreanalizar cada mensaje y entender de una vez qué está pasando realmente en su mente.",
    "buy.l1_5": "Qué hace que una relación se fortalezca en lugar de desvanecerse después de la etapa de luna de miel.",
    "buy.label2": "Esta Guía Es Para Ti Si",
    "buy.l2_1": "Estás cansada de preguntarte por qué cambió.",
    "buy.l2_2": "Sigues atrayendo hombres a los que les gustas… pero que nunca se comprometen del todo.",
    "buy.l2_3": "Ya no quieres seguir persiguiendo señales confusas.",
    "buy.l2_4": "Quieres claridad en lugar de confusión.",
    "buy.l2_5": "Quieres generar atracción sin fingir ser alguien que no eres.",
    "buy.label3": "Imagina Esto",
    "buy.im1": "En lugar de revisar tu teléfono cada cinco minutos…",
    "buy.im2": "En lugar de repetir las conversaciones en tu cabeza…",
    "buy.im3": "En lugar de preguntarles a tus amigas qué \"quiso decir realmente\" su último mensaje…",
    "buy.im4": "Por fin entiendes la psicología detrás de su comportamiento, y sabes exactamente cómo responder con confianza.",
    "buy.imCloser": "Eso lo cambia todo.",
    "buy.label4": "Por Qué Esta Guía Es Diferente",
    "buy.diff1": "La mayoría de los consejos de citas te dicen: \"Espera más.\" \"Hazte la difícil.\" \"Sé tú misma.\"",
    "buy.diff2": "Esta guía explica por qué eso a veces funciona… y por qué muchas veces no.",
    "buy.diff3": "Entenderás los principios psicológicos detrás de la atracción, para que dejes de adivinar.",
    "buy.label5": "Acceso Digital Instantáneo",
    "buy.l3_1": "Léelo en cualquier teléfono, tableta u ordenador.",
    "buy.l3_2": "Termínalo en una sola tarde.",
    "buy.l3_3": "Aplícalo de inmediato a tu relación actual o futura.",
    "buy.hangChip": "Precio de Lanzamiento",
    "wheel.teaserTitle": "Un Descuento Te Está Esperando",
    "wheel.teaserSub": "Gira la ruleta para tener la oportunidad de ganar hasta un 100% de descuento en el libro.",
    "wheel.spinBtn": "Girar La Ruleta",
    "wheel.bannerLabel": "🎉 Tu Descuento Está Listo",
    "wheel.codeLabel": "Código:",
    "wheel.copyBtn": "Copiar",
    "wheel.modalTitle": "Gira Para Tu Descuento",
    "wheel.modalSubDefault": "Arrastra la ruleta y suelta para girarla",
    "wheel.resultLabel": "🎉 Has Ganado",
    "wheel.continueBtn": "Continuar",
    "buy.offerEyebrow": "Tu Bono de Lectura",
    "buy.offerNote": "Reservado exclusivamente para tus resultados",
    "buy.chip1": "Psicología masculina",
    "buy.chip2": "Detonantes de atracción",
    "buy.chip3": "Errores de mensajes",
    "buy.chip4": "Conexión emocional",
    "buy.chip5": "Atracción a largo plazo",
    "buy.faqTitle": "Preguntas Frecuentes",
    "buy.faq1q": "¿Esto es manipulación?",
    "buy.faq1a": "No. Se trata de entender la atracción, la confianza y la comunicación sana, no de controlar ni engañar a nadie.",
    "buy.faq2q": "¿Funcionará si él ya perdió el interés?",
    "buy.faq2a": "Depende de por qué perdió el interés. La guía no puede garantizar resultados, pero puede ayudarte a evitar errores comunes y a mejorar tu enfoque.",
    "buy.faq3q": "¿Qué tan larga es esta guía?",
    "buy.faq3a": "Es una guía de 50 páginas, corta y práctica.",
    "buy.ctaBtn": "Acceso Instantáneo",
    "buy.footerNote": "Acceso digital instantáneo, empieza a leer en minutos.",
    "buy.trustLine": "🔒 Pago seguro · 50 páginas",
    "buy.refundLink": "Todas las ventas son definitivas · Ver política",
    "buy.insideLink": "Mira qué incluye ↓",
    "buy.tocTitle": "Lo que aprenderás",
    "buy.tocTakeaway": "<strong>Idea clave:</strong> Este libro trata de volverte tan segura, interesante y emocionalmente inteligente que la atracción se convierte en un efecto secundario natural, no en una actuación.",
    "chat.headerTitle": "Pregúntale a Rita",
    "chat.headerSub": "Tus preguntas de pareja, respondidas",
  };
  CARD_LABELS.es = { strongest: "MAYOR FORTALEZA", growth: "MARGEN DE MEJORA", prepare: "Preparando tu tarjeta…", linkFallback: "Haz tú la prueba" };
})();
