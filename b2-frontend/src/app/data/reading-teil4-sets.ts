interface Option {
    id: string
    optionText: string
}

interface Question {
    questionText: string
    options: Option[]
    correctAnswer: string
    userAnswer?: string
}

interface Participant {
    name: string
    role: string
}

interface AgendaItem {
    agendaTitle: string
    agendaText: string
}

interface ReadingTeil4Set {
    title: string
    date: string
    participants: Participant[]
    agendaItems: AgendaItem[]
    questions: Question[]
}

export const readingTeil4Sets: ReadingTeil4Set[] = [
    {
        title: "Besprechungsprotokoll – Planung einer internen Fortbildung",
        date: "15.04.2025",

        participants: [
            { name: "Sabine Hoffmann", role: "Leitung Personalabteilung" },
            { name: "Daniel Krüger", role: "Teamleiter Produktion" },
            { name: "Nina Berger", role: "Weiterbildungskoordination" },
            { name: "Ali Demir", role: "Mitarbeitervertretung" },
            { name: "Lisa Brandt", role: "Protokollantin" }
        ],

        agendaItems: [
            {
                agendaTitle: "1. Anlass der Besprechung",
                agendaText:
                    "Frau Hoffmann eröffnet die Sitzung und erklärt den Anlass des Treffens. In den letzten Monaten gab es mehrere neue Mitarbeiter im Unternehmen. Deshalb soll eine interne Fortbildung organisiert werden, um wichtige Arbeitsabläufe zu erklären und die Zusammenarbeit im Team zu verbessern. Außerdem sollen neue digitale Programme vorgestellt werden, die im Unternehmen seit Kurzem verwendet werden."
            },
            {
                agendaTitle: "2. Themen der Fortbildung",
                agendaText:
                    "Herr Krüger schlägt vor, dass die Fortbildung vor allem praktische Inhalte enthalten soll. Viele Mitarbeiter wünschen sich laut seiner Erfahrung konkrete Beispiele aus dem Arbeitsalltag. Frau Berger ergänzt, dass auch Themen wie Kommunikation im Team und Zeitmanagement wichtig sein könnten. Die Teilnehmer sind sich einig, dass die Fortbildung sowohl fachliche als auch organisatorische Themen behandeln soll."
            },
            {
                agendaTitle: "3. Organisation der Veranstaltung",
                agendaText:
                    "Anschließend sprechen die Teilnehmer über die Organisation der Fortbildung. Frau Berger schlägt vor, die Veranstaltung an zwei aufeinanderfolgenden Tagen durchzuführen. So hätten die Mitarbeiter genügend Zeit für Übungen und Diskussionen. Herr Demir merkt an, dass die Termine frühzeitig bekannt gegeben werden müssen, damit die Mitarbeiter ihre Arbeit entsprechend planen können."
            },
            {
                agendaTitle: "4. Budget und Referenten",
                agendaText:
                    "Frau Hoffmann informiert die Teilnehmer über das geplante Budget. Das Unternehmen stellt finanzielle Mittel für externe Referenten zur Verfügung. Dadurch sollen bestimmte Themen von Experten erklärt werden. Herr Krüger schlägt vor, zusätzlich interne Mitarbeiter einzubeziehen, die bereits viel Erfahrung mit den neuen Programmen haben."
            },
            {
                agendaTitle: "5. Weitere Schritte",
                agendaText:
                    "Zum Abschluss der Sitzung werden die nächsten Schritte festgelegt. Frau Berger übernimmt die Aufgabe, mögliche Referenten zu kontaktieren und einen Zeitplan zu erstellen. Außerdem soll eine kurze Umfrage unter den Mitarbeitern durchgeführt werden, um ihre Erwartungen an die Fortbildung zu erfahren. Die Ergebnisse sollen in der nächsten Besprechung vorgestellt werden."
            }
        ],

        questions: [
            {
                questionText: "Warum soll eine Fortbildung organisiert werden?",
                options: [
                    { id: "a", optionText: "Weil viele neue Mitarbeiter im Unternehmen arbeiten." },
                    { id: "b", optionText: "Weil das Unternehmen neue Büros gebaut hat." },
                    { id: "c", optionText: "Weil die Mitarbeiter ihre Arbeitszeiten ändern möchten." }
                ],
                correctAnswer: "a"
            },
            {
                questionText: "Was wünschen sich viele Mitarbeiter laut Herrn Krüger?",
                options: [
                    { id: "a", optionText: "Mehr theoretische Vorträge." },
                    { id: "b", optionText: "Praktische Beispiele aus dem Arbeitsalltag." },
                    { id: "c", optionText: "Eine kürzere Fortbildung." }
                ],
                correctAnswer: "b"
            },
            {
                questionText: "Wie lange soll die Fortbildung dauern?",
                options: [
                    { id: "a", optionText: "Einen Tag." },
                    { id: "b", optionText: "Zwei Tage." },
                    { id: "c", optionText: "Eine Woche." }
                ],
                correctAnswer: "b"
            },
            {
                questionText: "Wofür stellt das Unternehmen Geld zur Verfügung?",
                options: [
                    { id: "a", optionText: "Für externe Referenten." },
                    { id: "b", optionText: "Für neue Computer." },
                    { id: "c", optionText: "Für eine Firmenreise." }
                ],
                correctAnswer: "a"
            },
            {
                questionText: "Was soll Frau Berger als Nächstes tun?",
                options: [
                    { id: "a", optionText: "Eine Umfrage unter den Mitarbeitern organisieren." },
                    { id: "b", optionText: "Die Fortbildung selbst durchführen." },
                    { id: "c", optionText: "Neue Mitarbeiter einstellen." }
                ],
                correctAnswer: "a"
            }
        ]
    }
];