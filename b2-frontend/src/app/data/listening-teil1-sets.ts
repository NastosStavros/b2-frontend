interface ListeningQuestion {
    id: number;
    type: 'true-false' | 'multiple-choice';
    question: string;
    options: string[];
    correctAnswer: string;
}

interface Transcript {
    text: string
}

interface ListeningSet {
    id: number;
    title: string;
    transcript: string;
    questions: ListeningQuestion[];
}

export const listeningSets = [
    {
        id: 1,
        title: "Hören Teil 1 – Set 1",
        dialog: [
            "VORGESETZTER: Guten Morgen, Herr Klein. Haben Sie kurz Zeit?",
            "MITARBEITER: Ja, natürlich. Worum geht es?",
            "VORGESETZTER: Es gibt ein Problem mit dem Dienstplan.",
            "MITARBEITER: Soll ich zusätzliche Schichten übernehmen?",
        ],
        questions: [
            {
                id: 1,
                type: 'true-false',
                question: "Es gibt Probleme mit dem Dienstplan.",
                options: ["richtig", "falsch"],
                correctAnswer: "richtig"
            },
            {
                id: 2,
                type: 'multiple-choice',
                question: "Wann kann der Mitarbeiter länger arbeiten?",
                options: ["a) Dienstag", "b) Mittwoch", "c) Donnerstag"],
                correctAnswer: "a"
            }
        ]
    }
];