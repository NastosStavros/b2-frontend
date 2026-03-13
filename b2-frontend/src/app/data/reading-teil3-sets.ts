interface Question {
    id: number
    name: string
    questionText: string
    correctAnswer: number
}

interface AnswerText {
    id: number
    letter: string
    author: string
    text: string
}

interface ReadingTeil3Set {
    questions: Question[]
    answers: AnswerText[]
}

export const readingTeil3Sets: ReadingTeil3Set[] = [
    {
        questions: [
            {
                id: 1,
                name: "Anna",
                questionText: "Hallo zusammen, ich arbeite seit zwei Jahren in einem kleinen Betrieb. In letzter Zeit müssen wir immer häufiger Überstunden machen, weil viele Aufträge gleichzeitig erledigt werden müssen. Mein Chef sagt, dass das im Moment einfach nötig ist. Ich frage mich aber, ob es Regeln dafür gibt. Müssen Überstunden immer bezahlt werden oder kann man sie auch später als Freizeit nehmen? Wie ist das in euren Firmen geregelt?",
                correctAnswer: 1
            },
            {
                id: 2,
                name: "Lukas",
                questionText: "Ich arbeite seit kurzem teilweise im Homeoffice. Das gefällt mir eigentlich sehr gut, weil ich mir den Weg zur Arbeit spare. Jetzt bin ich aber unsicher, wie es mit den Arbeitszeiten ist. Muss ich zu festen Zeiten arbeiten wie im Büro oder kann ich meine Zeit frei einteilen? Mein Arbeitgeber sagt nur, dass ich meine Aufgaben erledigen soll. Wie läuft das bei euch?",
                correctAnswer: 2
            },
            {
                id: 3,
                name: "Maria",
                questionText: "In meinem Team gibt es in letzter Zeit immer öfter Konflikte. Manche Kollegen sprechen nicht offen über Probleme, sondern beschweren sich hinter dem Rücken der anderen. Das führt zu einer schlechten Stimmung bei der Arbeit. Ich frage mich, wie man solche Konflikte am Arbeitsplatz besser lösen kann. Habt ihr Erfahrungen oder Tipps?",
                correctAnswer: 3
            },
            {
                id: 4,
                name: "David",
                questionText: "Unsere Firma überlegt gerade, auch samstags zu arbeiten, weil wir mehr Aufträge bekommen haben. Einige Kollegen finden das nicht gut, weil sie am Wochenende Zeit mit der Familie verbringen möchten. Ich frage mich, ob der Arbeitgeber einfach entscheiden kann, dass wir samstags arbeiten müssen, oder ob es dafür bestimmte Regeln gibt.",
                correctAnswer: 0
            }
        ],
        answers: [
            {
                id: 1,
                letter: "A",
                author: "Ahmed",
                text: "Bei uns im Betrieb kommt es auch manchmal zu Überstunden, besonders wenn viele Aufträge gleichzeitig erledigt werden müssen. Wichtig ist aber, dass diese Stunden genau dokumentiert werden. In vielen Firmen können Mitarbeiter entscheiden, ob sie die Überstunden ausbezahlt bekommen oder später durch zusätzliche freie Tage ausgleichen."
            },
            {
                id: 2,
                letter: "B",
                author: "Beata",
                text: "Auch wenn man im Homeoffice arbeitet, gelten meistens ähnliche Regeln wie im Büro. In vielen Unternehmen gibt es feste Zeiten, in denen man erreichbar sein muss. Trotzdem bieten manche Firmen mehr Flexibilität, solange die Aufgaben erledigt werden und die Zusammenarbeit im Team funktioniert."
            },
            {
                id: 3,
                letter: "C",
                author: "Jasmina",
                text: "Konflikte im Team sollte man möglichst früh ansprechen. Wenn Probleme ignoriert werden, wird die Situation oft schlimmer. In vielen Firmen hilft ein offenes Gespräch mit den beteiligten Kollegen. Manchmal kann auch eine Führungskraft oder eine neutrale Person dabei helfen, eine Lösung zu finden."
            },
            {
                id: 4,
                letter: "D",
                author: "Roberta",
                text: "In einigen Branchen ist es üblich, auch am Wochenende zu arbeiten. Das hängt aber stark vom Arbeitsvertrag oder von Tarifverträgen ab. Bevor neue Arbeitszeiten eingeführt werden, müssen oft bestimmte Regeln eingehalten werden und manchmal wird auch der Betriebsrat einbezogen."
            },
            {
                id: 5,
                letter: "E",
                author: "Benjamin",
                text: "In unserem Unternehmen gibt es regelmäßig Teamtreffen, bei denen wir über Probleme im Arbeitsalltag sprechen können. Dort hat jeder die Möglichkeit, seine Meinung zu sagen und gemeinsam Lösungen zu suchen. Das hat die Zusammenarbeit im Team deutlich verbessert."
            },
            {
                id: 6,
                letter: "F",
                author: "Martin",
                text: "Bei uns im Betrieb können viele Mitarbeiter ihre Arbeitszeit relativ flexibel einteilen. Wichtig ist nur, dass die Aufgaben rechtzeitig erledigt werden und man für wichtige Besprechungen erreichbar ist. Dieses Modell funktioniert besonders gut, wenn alle im Team zuverlässig arbeiten."
            }
        ]
    }
]