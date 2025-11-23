
var statGame = confirm("Oyun baslasinmi ?")

if (statGame) {

    alert("Oyun basladi... UGURLAR!")
    var score = 0

    var word1 = "BAKI"
    let shuffled1 = "AKBI"
    let userAnswer1 = prompt("Bu herflerden dogru sozu tapmaga calis: " + shuffled1)

    if (userAnswer1 == "BAKI" || userAnswer1 == "Baki" || userAnswer1 == "baki") {
        score += 10
        alert(`Tebrikler. Dogru cavab! Sizin qazandiginiz xal: ${score} xaldir`)

        // ========================================================================================

        var word2 = "GENCE"
        let shuffled2 = "NEGEC"
        let userAnswer2 = prompt("Bu herflerden dogru sozu tapmaga calis: " + shuffled2)

        if (userAnswer2 == "GENCE" || userAnswer2 == "Gence" || userAnswer2 == "gence") {
            score += 10
            alert(`Tebrikler. Dogru cavab! Sizin qazandiginiz xal: ${score} xaldir`)

            // ========================================================================================


            var word3 = "AGDAM"
            let shuffled3 = "GMADM"
            let userAnswer3 = prompt("Bu herflerden dogru sozu tapmaga calis: " + shuffled3)

            if (userAnswer3 == "AGDAM" || userAnswer3 == "Agdam" || userAnswer3 == "agdam") {
                score += 10
                alert(`Tebrikler. Dogru cavab! Sizin qazandiginiz xal: ${score} xaldir`)

                // ========================================================================================


                var word4 = "XANKENDI"
                let shuffled4 = "XKENIDAN"
                let userAnswer4 = prompt("Bu herflerden dogru sozu tapmaga calis: " + shuffled4)


                if (userAnswer4 == "XANKENDI" || userAnswer4 == "Xankendi" || userAnswer4 == "xankendi") {
                    score += 10
                    alert(`Tebrikler. Dogru cavab! Sizin qazandiginiz xal: ${score} xaldir`)

                    // ========================================================================================

                    var word5 = "MASALLI"
                    let shuffled5 = "MALISLA"
                    let userAnswer5 = prompt("Bu herflerden dogru sozu tapmaga calis: " + shuffled5)


                    if (userAnswer5 == "MASALLI" || userAnswer5 == "Masalli" || userAnswer5 == "masalli") {
                        score += 10
                        alert(`Tebrikler. Dogru cavab! Sizin qazandiginiz xal: ${score} xaldir`)
                    } else {
                        alert(`Cox teessuf. yalnis cavab! ${score} xaliniz var. Oyun Bitdi!`)
                    }

                    // ========================================================================================


                } else {
                    alert(`Cox teessuf. yalnis cavab! ${score} xaliniz var. Oyun Bitdi!`)
                }
            } else {
                alert(`Cox teessuf. yalnis cavab! ${score} xaliniz var. Oyun Bitdi!`)
            }
        } else {
            alert(`Cox teessuf. yalnis cavab! ${score} xaliniz var. Oyun Bitdi!`)
        }
    } else {
        alert(`Cox teessuf. yalnis cavab! ${score} xaliniz var. Oyun Bitdi!`)
    }
} else {
    alert("Oyun baslamadan bitdi :) Teessuf!")
}