interface Person {
    id: number
    text: string
    correctArticle: string
}

interface Article {
    id: string
    title: string
    text: string
}

interface ReadingSet {
    id: number
    title: string
    persons: Person[]
    articles: Article[]
}

export const readingTeil1Sets: ReadingSet[] = [
    {
        id: 1,
        title: "Lesen Teil 1 – Set 1",
        persons: [
            {
                id: 1,
                text: "Monika interessiert sich für digitale Berufe",
                correctArticle: "a"
            },

             {
                id: 2,
                text: "Laura sucht Tipps zu digitalen Bewerbungsverfahren.",
                correctArticle: "c"
            },

             {
                id: 3,
                text: "Elena fragt sich, welche Abschlüsse aus dem Ausland sie beglaubigen lassen muss.",
                correctArticle: "e"
            },

             {
                id: 4,
                text: "Ivo möchte gerne Konfliktfähiger werden.",
                correctArticle: "b"
            },

             {
                id: 5,
                text: "Sabrina möchte wissen, welche Umschulungen die richtigen für sie sind.",
                correctArticle: "h"
            }
        ],
        articles: [
            {
               id: "a",
               title: "Meine Erfahrungen in der IT Branche",
               text: "Sie hat in Polen als Softwareentwicklerin gearbeitet und jetzt in Deutschland erfolgreich Karriere gemacht. Anja Sawatzka spricht mit uns über ihre Erfahrungen mit verschiedenen Unternehmen dieses Berufsfelds." 
            },

            {
               id: "b",
               title: "Konflikte im Arbeitsalltag besser lösen",
               text: "In vielen Berufen kommt es zu Konflikten zwischen Kollegen oder im Team. In diesem Seminar lernen Sie, ruhig zu bleiben, Missverständnisse zu klären und gemeinsam Lösungen zu finden. Das Training richtet sich an Berufstätige, die ihre Kommunikations- und Konfliktfähigkeit verbessern möchten." 
            },

            {
               id: "c",
               title: "Erfolgreich bewerben – online und digital",
               text: "Viele Unternehmen erwarten heute eine digitale Bewerbung. In diesem Workshop erfahren Sie, wie Sie Bewerbungen per E-Mail richtig formulieren, welche Unterlagen wichtig sind und wie Sie Online-Bewerbungsportale nutzen können." 
            },

            {
               id: "e",
               title: "Studium im Ausland – und jetzt in Deutschland arbeiten?",
               text: "Sie haben Ihr Studium oder Ihre Ausbildung in einem anderen Land, zum Beispiel in England oder Spanien, abgeschlossen? In unserer Beratung erklären wir Ihnen, welche Schritte notwendig sind, damit Sie Ihren Beruf auch in Deutschland ausüben können. Außerdem erfahren Sie, welche Dokumente wichtig sind und an welche Behörden Sie sich wenden müssen." 
            },

            {
               id: "h",
               title: "Neuer Beruf durch Weiterbildung",
               text: "Sie möchten sich beruflich neu orientieren und überlegen, eine neue Qualifikation zu erwerben? In dieser Informationsveranstaltung stellen wir verschiedene Möglichkeiten vor, wie Erwachsene einen anderen Beruf erlernen können. Sie erfahren, welche Programme es gibt, wie lange sie dauern und welche Unterstützung Sie dabei bekommen können." 
            },

            {
               id: "d",
               title: "Gut vorbereitet ins Bewerbungsgespräch",
               text: "Viele Bewerber sind nervös vor einem Vorstellungsgespräch. In diesem Seminar lernen Sie, wie Sie sich gut vorbereiten, typische Fragen beantworten und einen positiven Eindruck bei Arbeitgebern hinterlassen. Außerdem erhalten Sie praktische Tipps für Ihre Körpersprache und für einen sicheren und überzeugenden Auftritt." 
            },

            {
               id: "f",
               title: "Gesund arbeiten im Büro",
               text: "Langes Sitzen und Stress können auf Dauer gesundheitliche Probleme verursachen. In diesem Kurs erfahren Sie, wie Sie Ihren Arbeitsplatz ergonomisch gestalten und im Arbeitsalltag auf Ihre Gesundheit achten können. Zusätzlich lernen Sie einfache Übungen kennen, die Sie direkt während der Arbeit im Büro machen können." 
            },

            {
               id: "g",
               title: "Erfolgreich im Team arbeiten",
               text: "Gute Zusammenarbeit ist in vielen Berufen wichtig. In diesem Training lernen Sie, wie Teams effektiv zusammenarbeiten, Aufgaben besser verteilt werden und gemeinsame Ziele erreicht werden können. Sie üben außerdem, wie man klar kommuniziert und Probleme im Team frühzeitig erkennt und gemeinsam löst." 
            }
        ]
    }
]