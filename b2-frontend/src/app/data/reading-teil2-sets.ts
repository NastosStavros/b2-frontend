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
                title: "Willkommen im Betrieb",
                content:
                    "Neue Mitarbeitende erhalten in der ersten Woche eine Einführung in die wichtigsten Abläufe des Unternehmens."
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
                    "Neue Mitarbeitende bekommen eine Einführung in der ersten Woche.",
                type: "truefalse",
                correctAnswer: "true"
            },
            {
                id: 2,
                textId: 1,
                question:
                    "Was passiert in der ersten Woche im Betrieb?",
                type: "multiple",
                options: [
                    "a) Neue Mitarbeitende bekommen eine Einführung",
                    "b) Neue Mitarbeitende arbeiten sofort allein",
                    "c) Neue Mitarbeitende gehen direkt in den Urlaub"
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
    }
]