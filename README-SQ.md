# ZIVAG — Kodi i plotë i faqes

Kjo paketë përmban faqen e përditësuar, pa lidhjen “Mehr im Portfolio von Gezim Çela”. Baneri dhe funksionet e tjera janë ruajtur.

## Hapja në kompjuter
1. Nxirre ZIP-in plotësisht.
2. Hap dosjen ZIVAG-Website në VS Code ose editorin që përdor.
3. Hap index.html në browser. Nuk kërkohet npm ose build.

Për zhvillim mund të përdorësh Live Server në VS Code. Nëse ke Python në Windows, hap terminalin brenda dosjes dhe ekzekuto:

    py -m http.server 8000

Pastaj hap http://localhost:8000. Për ta ndaluar shtyp Ctrl+C.

## Skedarët
- index.html: struktura, tekstet, shërbimet, baneri Frenks dhe projektet.
- style.css: dizajni, Dark/Light, responsive dhe animacionet/keyframes.
- theme.js: përcakton temën para shfaqjes së faqes, sipas pajisjes ose zgjedhjes së ruajtur.
- script.js: menuja mobile, paneli i shërbimeve, projektet, tema dhe animacionet.
- zivaglogo.jpg: logoja ZIVAG.
- frenks-logo.png: logoja Frenks.
- project-frenks.jpg, project-delivery.jpg, project-alpha.jpg: pamjet reale të projekteve.

## Ndryshimet e zakonshme
Ndrysho tekstet dhe lidhjet në index.html. Për përmbajtjen e panelit dhe dritaret e projekteve ndrysho edhe objektet solutions dhe projects në script.js.
Ngjyrat bazë ndodhen te :root dhe :root[data-theme=light] në style.css. Rregullat në fund të CSS kanë përparësi kur selektorët kanë të njëjtën specifikë.
Baneri i klientëve është seksioni me id="kunden" në index.html.
Emaili dhe telefoni gjenden në index.html. Kontakti hap programin e emailit/telefonit; nuk ka backend ose formular që dërgon automatikisht.

## Dark / Light / Auto
Auto ndjek preferencën e sistemit dhe ndryshon kur sistemi ndryshon. Zgjedhja manuale ruhet lokalisht në browser. Edhe preferenca për pauzimin e animacioneve ruhet lokalisht. Preferenca reduced motion e pajisjes respektohet.

## Publikimi
Ngarko përmbajtjen e kësaj dosjeje në rrënjën publike të hostingut, në mënyrë që index.html të jetë në rrënjë. Mund të përdoret edhe si faqe statike në GitHub Pages. Nuk nevojitet instalim paketash, server aplikacioni ose databazë.
Mbaji emrat e skedarëve dhe lidhjet relative siç janë. Konfigurimi i domain-it bëhet veçmas në hostingun tënd.
Kjo është kopje e pavarur: ndryshimet këtu nuk përditësojnë automatikisht versionin privat në ChatGPT dhe anasjelltas. Eksporti nuk përmban autentikimin privat të ChatGPT.

## Përmbajtja e projekteve
Frenks është partneri i konfirmuar; dy faqet paraqiten si projekte të të njëjtit partner. Alpha Autos është projekt i Gezim Çela. Casa dhe Forma janë koncepte dizajni të shënuara si të tilla.
