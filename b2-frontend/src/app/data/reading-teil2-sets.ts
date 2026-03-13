interface ReadingTeil2Text {
    id: number
    title: string
    content: string
}

interface ReadingTeil2Question {
    id: number
    textId: number
    question: string
    type: string
    options?: string[]
    correctAnswer: string
}

interface ReadingTeil2Set {
    id: number
    title: string
    texts: ReadingTeil2Text[]
    questions: ReadingTeil2Question[]
}

export const readingTeil2Sets: ReadingTeil2Set[] = [
    {
        id: 1,
        title: "Lesen Teil 2 – Set 1",
        texts: [
            {
                id: 1,
                title: "Arbeitszeiten im Unternehmen",
                content:
                    "In unserem Unternehmen beginnen die meisten Mitarbeitenden ihre Arbeit zwischen 8:00 und 9:00 Uhr. Die tägliche Arbeitszeit beträgt acht Stunden. Sie können Ihren Arbeitsbeginn innerhalb dieses Zeitraums flexibel wählen. Alle Mitarbeitenden müssen ihre Arbeitszeit im digitalen Zeiterfassungssystem eintragen. Wenn Sie später kommen oder früher gehen müssen, sprechen Sie bitte vorher mit Ihrer Abteilungsleitung. Einmal pro Woche haben Sie außerdem die Möglichkeit, im Homeoffice zu arbeiten. Dafür müssen Sie den Termin vorher im System eintragen."
            },
            {
                id: 2,
                title: "Sicherheitsregeln im Betrieb",
                content:
                    "Alle Mitarbeitenden müssen die Sicherheitsanweisungen beachten und Schutzkleidung tragen, wenn sie in der Produktion arbeiten."
            }
        ],
        questions: [
            {
                id: 1,
                textId: 1,
                question:
                    "Die Mitarbeitenden müssen jeden Tag um 8:00 Uhr mit der Arbeit beginnen.",
                type: "truefalse",
                correctAnswer: "true"
            },
            {
                id: 2,
                textId: 1,
                question:
                    "Was müssen Mitarbeitende jeden Tag machen?",
                type: "multiple",
                options: [
                    "a) Sie müssen ihre Arbeitszeit im System eintragen",
                    "b) Sie müssen jeden Tag im Homeoffice arbeiten.",
                    "c) Sie müssen jeden Tag eine Besprechung besuchen."
                ],
                correctAnswer: "a"
            },
            {
                id: 3,
                textId: 2,
                question:
                    "Mitarbeitende müssen Schutzkleidung in der Produktion tragen.",
                type: "truefalse",
                correctAnswer: "true"
            },
            {
                id: 4,
                textId: 2,
                question:
                    "Wo müssen Mitarbeitende die Sicherheitsregeln beachten?",
                type: "multiple",
                options: [
                    "a) Nur im Büro",
                    "b) In der Produktion",
                    "c) Nur außerhalb des Betriebs"
                ],
                correctAnswer: "b"
            }
        ]
    },

    {
        id: 2,
        title: "Lesen Teil 2 – Set 2",
        texts: [
            {
                id: 1,
                title: "Fortbildungsmöglichkeiten im Unternehmen",
                content:
                    "Unser Unternehmen legt großen Wert auf die berufliche Weiterentwicklung seiner Mitarbeitenden. Deshalb haben alle Mitarbeitenden die Möglichkeit, regelmäßig an Fortbildungen teilzunehmen. Diese können entweder intern im Unternehmen oder extern bei spezialisierten Bildungsanbietern stattfinden. Wenn Sie an einer Fortbildung teilnehmen möchten, sprechen Sie bitte zunächst mit Ihrer direkten Führungskraft. Gemeinsam können Sie entscheiden, welche Weiterbildung für Ihre berufliche Entwicklung sinnvoll ist. Die Kosten für viele Fortbildungen übernimmt das Unternehmen ganz oder teilweise. Nach der Teilnahme an einer Fortbildung werden die Mitarbeitenden gebeten, ihre neuen Kenntnisse mit dem Team zu teilen."
            },
            {
                id: 2,
                title: "Neue Regelungen für Dienstreisen",
                content:
                    "Für Dienstreisen gelten in unserem Unternehmen neue Richtlinien. Grundsätzlich sollen Reisen nur dann stattfinden, wenn ein persönliches Treffen unbedingt erforderlich ist. In vielen Fällen können stattdessen Videokonferenzen genutzt werden. Wenn eine Dienstreise notwendig ist, sollen möglichst umweltfreundliche Verkehrsmittel gewählt werden. Innerhalb Deutschlands wird deshalb in der Regel die Bahn bevorzugt. Flugreisen müssen vorab von der Geschäftsleitung genehmigt werden. Alle Mitarbeitenden müssen ihre Dienstreisen außerdem im internen Buchungssystem eintragen, damit eine bessere Planung möglich ist."
            }
        ],
        questions: [
            {
                id: 5,
                textId: 1,
                question:
                    "Alle Fortbildungen finden ausschließlich außerhalb des Unternehmens statt.",
                type: "truefalse",
                correctAnswer: "false"
            },
            {
                id: 6,
                textId: 1,
                question:
                    "Was sollen Mitarbeitende nach einer Fortbildung tun?",
                type: "multiple",
                options: [
                    "a) Sie sollen ihre neuen Kenntnisse mit dem Team teilen.",
                    "b) Sie sollen sofort eine neue Fortbildung besuchen.",
                    "c) Sie sollen einen Bericht an alle Mitarbeitenden im Unternehmen schreiben."
                ],
                correctAnswer: "a"
            },
            {
                id: 7,
                textId: 2,
                question:
                    "Dienstreisen sollen möglichst vermieden werden, wenn Videokonferenzen möglich sind.",
                type: "truefalse",
                correctAnswer: "true"
            },
            {
                id: 8,
                textId: 2,
                question:
                    "Welches Verkehrsmittel wird für Dienstreisen innerhalb Deutschlands bevorzugt?",
                type: "multiple",
                options: [
                    "a) Das Flugzeug",
                    "b) Die Bahn",
                    "c) Das Taxi"
                ],
                correctAnswer: "b"
            }
        ]
    }
]