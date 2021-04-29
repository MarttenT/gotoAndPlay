# gotoAndPlay
Minu lahendus ja katse gotoAndPlay suvepraktika ülesandele.

gotoAndPlay kausta lisasin 4 faili : index.html (leht mille valmis sain), index.css (taust, particles, explosives(firework) kujundus), index.js (javascript tulem, kuidas kogu projekt töötab (fireworks + kahjuks katkine boonus 2) ja photoshopis loodud GotoTekst.png.

Ajaliselt ei oskagi täpselt hinnata kaua aega võis kuluda, sest tegin iga päev natukene (nii palju kui jõudsin kooli ja tervise kõrvalt) ja sain kaks korda projekti uuesti alustada, sest tundsin, et lihtsam oli uuesti alustada, kui jätkata täiesti puntrast. Lisaks sain väga palju google'st otsida ja proovida.

Vaatasin väga palju youtube videosid ja googlest otsisin, et mõista täpselt mida üks või teine asi teeb. Kahjuks lõpuks tegin ikkagi midagi valesti, sest kuigi tahtsin, et tulemus oleks selline, et hiireklõpsu puhul "plahvatab" hiire asukohas uus ilutulestik ning see muudab värvi, siis läks hoopis nii, et hiireklõps lõhkus kõik ära, aga kuna vead oli ka osa tööst, siis jätsin selle sisse. Ilma addEventListenerita kõik toimis.

Ma üritasin index.html failis teha nii, et pilt (õnnitlused) oleks peal pool ning javascript efektid all pool, selleks kasutasin z-indexit. Ma pole täiesti kindel, kas see õnnestus või mitte, sest pildil jätsin opacity 70% peale ja seetõttu oli raske aru saada kas ilutulestik on teksti all või peal (loodan siiski, et all).

Lisaks tegin pildi paigutuse html failis mitte css failis, sest nii läks kõik täpselt ekraani mõõtudes, css failis tehes jäi pilt suurem, kui pidi ja ainult F11 nupus oli ta n.ö "õiges mõõdus".

index.js failis on olemas Particle class ja Explosive class. Particles puhul on siis tegu osakestega ja nende lenduvus kaugusega plahvatuskohast, muutsin selle math.random funktsiooniga nii, et osakesed lendaksid erinevatele kaugustele. Explosive classi puhul oli tegu siis ilutulestiku lennutrajektooriga ning seal jälgisin, et oleks kaetud kogu ekraani ulatuses, mitte ainult kindel rida või kaar, ka see lahendus tuli math.random funktsiooni abil. Lisaks kasutasin Intervale, et muuta seda kui kiiresti tekivad uued ilutulestikud.

Ülesanne oli äärmiselt põnev ning õppisin javascripti kohta palju rohkem kui koolis üldse õppinud olen. Tekkis kindlasti huvi kuidas luua paremini ning efektiivsemalt veebilehti ning nende rakendusi nii et isegi, kui ma praktikale ei pääse, siis suur aitäh juba selle eest!

See miks kõik pushid on nii hilised on sellepärast, et tegin antud ülesannet alguses lokaalselt ning laadisin lõpus üles githubi.
