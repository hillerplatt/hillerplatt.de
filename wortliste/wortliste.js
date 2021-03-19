const wortliste = [
  {
    artikel: 'dat',
    plattdeutsch: 'Aai; de Aaier',
    hochdeutsch: 'Ei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Aaierpliumen',
    hochdeutsch: 'Eierpflaume'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Aaierschoalen',
    hochdeutsch: 'Eierschale'
  },
  {
    artikel: '',
    plattdeutsch: 'aaiher',
    hochdeutsch: 'eher'
  },
  {
    artikel: '',
    plattdeutsch: 'aais',
    hochdeutsch: 'erst'
  },
  {
    artikel: '',
    plattdeutsch: 'aaiste',
    hochdeutsch: 'erste'
  },
  {
    artikel: '',
    plattdeutsch: 'aalbern',
    hochdeutsch: 'albern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Aarn',
    hochdeutsch: 'Ernte, Erntezeit'
  },
  {
    artikel: '',
    plattdeutsch: 'aas',
    hochdeutsch: 'erst'
  },
  {
    artikel: '',
    plattdeutsch: 'achen',
    hochdeutsch: 'beachten, achten'
  },
  {
    artikel: '',
    plattdeutsch: 'achielen',
    hochdeutsch: 'essen (übermäßig)'
  },
  {
    artikel: '',
    plattdeutsch: 'achte',
    hochdeutsch: 'hinten'
  },
  {
    artikel: '',
    plattdeutsch: 'achter',
    hochdeutsch: 'hinter'
  },
  {
    artikel: '',
    plattdeutsch: 'achteran',
    hochdeutsch: 'hinterher'
  },
  {
    artikel: '',
    plattdeutsch: 'achterheer',
    hochdeutsch: 'hinterher'
  },
  {
    artikel: '',
    plattdeutsch: 'achternanner',
    hochdeutsch: 'hintereinander'
  },
  {
    artikel: '',
    plattdeutsch: 'achterümme',
    hochdeutsch: 'hintenherum'
  },
  {
    artikel: '',
    plattdeutsch: 'af',
    hochdeutsch: 'ab'
  },
  {
    artikel: '',
    plattdeutsch: 'af un an',
    hochdeutsch: 'ab und zu, manchmal, hin und wieder'
  },
  {
    artikel: '',
    plattdeutsch: 'af un teo',
    hochdeutsch: 'ab und zu, manchmal'
  },
  {
    artikel: '',
    plattdeutsch: 'afännern',
    hochdeutsch: 'abändern'
  },
  {
    artikel: '',
    plattdeutsch: 'afbaalgen',
    hochdeutsch: 'verausgaben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Afbidde',
    hochdeutsch: 'Verzeihung, Entschuldigung'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Afbidde deon',
    hochdeutsch: 'Verzeihung (um Verzeihung bitten)'
  },
  {
    artikel: '',
    plattdeutsch: 'afbieten',
    hochdeutsch: 'abbeißen'
  },
  {
    artikel: '',
    plattdeutsch: 'afbloaen',
    hochdeutsch: 'abblättern'
  },
  {
    artikel: '',
    plattdeutsch: 'afbloasen (afsäggen)',
    hochdeutsch: 'absagen'
  },
  {
    artikel: '',
    plattdeutsch: 'afböagen',
    hochdeutsch: 'abbiegen'
  },
  {
    artikel: '',
    plattdeutsch: 'afbrennen',
    hochdeutsch: 'abbrennen'
  },
  {
    artikel: '',
    plattdeutsch: 'afdanken',
    hochdeutsch: 'abdanken'
  },
  {
    artikel: '',
    plattdeutsch: 'afdeckeln',
    hochdeutsch: 'rügen'
  },
  {
    artikel: '',
    plattdeutsch: 'afdecken',
    hochdeutsch: 'abdecken'
  },
  {
    artikel: '',
    plattdeutsch: 'afdeon',
    hochdeutsch: 'abwinken (für belanglos erklären)'
  },
  {
    artikel: '',
    plattdeutsch: 'afdisken',
    hochdeutsch: 'abräumen (Tisch)'
  },
  {
    artikel: '',
    plattdeutsch: 'afdöppen',
    hochdeutsch: 'ablösen  (Blüte und Stiel vom Obst und Gemüse entfernen)'
  },
  {
    artikel: '',
    plattdeutsch: 'afdössken',
    hochdeutsch: 'abdreschen (das letzte Getreide dreschen)'
  },
  {
    artikel: '',
    plattdeutsch: 'afdröagen',
    hochdeutsch: 'abtrocknen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Afecke',
    hochdeutsch: 'Winkel (hinterste Ecke)'
  },
  {
    artikel: '',
    plattdeutsch: 'affienen',
    hochdeutsch: 'abfinden'
  },
  {
    artikel: '',
    plattdeutsch: 'affillen',
    hochdeutsch: 'abpellen'
  },
  {
    artikel: '',
    plattdeutsch: 'affitken',
    hochdeutsch: 'abstauben (mit dem Gänseflügel)'
  },
  {
    artikel: '',
    plattdeutsch: 'affreten',
    hochdeutsch: 'abfressen'
  },
  {
    artikel: '',
    plattdeutsch: 'afgeiten',
    hochdeutsch: 'abgießen'
  },
  {
    artikel: '',
    plattdeutsch: 'afgierm',
    hochdeutsch: 'abgeben'
  },
  {
    artikel: '',
    plattdeutsch: 'afglippen',
    hochdeutsch: 'abrutschen'
  },
  {
    artikel: '',
    plattdeutsch: 'afgnabbeln',
    hochdeutsch: 'abnagen'
  },
  {
    artikel: '',
    plattdeutsch: 'afgresen',
    hochdeutsch: 'abgrasen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Afgrund',
    hochdeutsch: 'Abgrund'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Afgunst',
    hochdeutsch: 'Neid'
  },
  {
    artikel: '',
    plattdeutsch: 'afgünstig',
    hochdeutsch: 'neidisch'
  },
  {
    artikel: '',
    plattdeutsch: 'afhanden',
    hochdeutsch: 'abhanden'
  },
  {
    artikel: '',
    plattdeutsch: 'afhängig (afhängich)',
    hochdeutsch: 'abhängig'
  },
  {
    artikel: '',
    plattdeutsch: 'afhaulen',
    hochdeutsch: 'abhalten'
  },
  {
    artikel: '',
    plattdeutsch: 'afhaulen',
    hochdeutsch: 'abhalten (ein Kind zum Wasserlassen abhalten)'
  },
  {
    artikel: '',
    plattdeutsch: 'afheoen',
    hochdeutsch: 'abhauen (weglaufen)'
  },
  {
    artikel: '',
    plattdeutsch: 'afhoaken',
    hochdeutsch: 'abhaken'
  },
  {
    artikel: '',
    plattdeutsch: 'afhoarken',
    hochdeutsch: 'abharken'
  },
  {
    artikel: '',
    plattdeutsch: 'afhöarn',
    hochdeutsch: 'abhören'
  },
  {
    artikel: '',
    plattdeutsch: 'afhocken',
    hochdeutsch: 'abhocken (Getreidefläche wird für die Zwischenfrucht freigetragen)'
  },
  {
    artikel: '',
    plattdeutsch: 'afjachtern',
    hochdeutsch: 'abhetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'afkanzeln',
    hochdeutsch: 'erniedrigen'
  },
  {
    artikel: '',
    plattdeutsch: 'afkeoen',
    hochdeutsch: 'abkauen'
  },
  {
    artikel: '',
    plattdeutsch: 'afkieken',
    hochdeutsch: 'abgucken'
  },
  {
    artikel: '',
    plattdeutsch: 'afkiemen',
    hochdeutsch: 'abkeimen'
  },
  {
    artikel: '',
    plattdeutsch: 'afkloppen',
    hochdeutsch: 'abklopfen'
  },
  {
    artikel: '',
    plattdeutsch: 'afkniusen',
    hochdeutsch: 'abzweigen'
  },
  {
    artikel: '',
    plattdeutsch: 'afköarten',
    hochdeutsch: 'abkürzen'
  },
  {
    artikel: '',
    plattdeutsch: 'afkriegen',
    hochdeutsch: 'abpflücken, abbekommen'
  },
  {
    artikel: '',
    plattdeutsch: 'afküen',
    hochdeutsch: 'ausreden, absprechen'
  },
  {
    artikel: '',
    plattdeutsch: 'afkurm van',
    hochdeutsch: 'loskommen von'
  },
  {
    artikel: '',
    plattdeutsch: 'afläen',
    hochdeutsch: 'abgewöhnen'
  },
  {
    artikel: '',
    plattdeutsch: 'aflaupen',
    hochdeutsch: 'ablaufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Aflegger',
    hochdeutsch: 'Ableger  (Pflanze oder Mensch)'
  },
  {
    artikel: '',
    plattdeutsch: 'aflicken',
    hochdeutsch: 'ablecken'
  },
  {
    artikel: '',
    plattdeutsch: 'aflierbern',
    hochdeutsch: 'abliefern'
  },
  {
    artikel: '',
    plattdeutsch: 'aflihrnen',
    hochdeutsch: 'ablehnen'
  },
  {
    artikel: '',
    plattdeutsch: 'afloaen',
    hochdeutsch: 'abladen'
  },
  {
    artikel: '',
    plattdeutsch: 'aflünsen',
    hochdeutsch: 'abgaunern'
  },
  {
    artikel: '',
    plattdeutsch: 'afmaaihen',
    hochdeutsch: 'abmähen'
  },
  {
    artikel: '',
    plattdeutsch: 'afmelken',
    hochdeutsch: 'abmelken (auslaufen der Milchproduktion bei einer Kuh)'
  },
  {
    artikel: '',
    plattdeutsch: 'afmessen',
    hochdeutsch: 'abmisten'
  },
  {
    artikel: '',
    plattdeutsch: 'afmeten',
    hochdeutsch: 'abmessen'
  },
  {
    artikel: '',
    plattdeutsch: 'afmoaken',
    hochdeutsch: 'abmachen (vereinbaren)'
  },
  {
    artikel: '',
    plattdeutsch: 'afmoihen',
    hochdeutsch: 'abmühen'
  },
  {
    artikel: '',
    plattdeutsch: 'afmurksen',
    hochdeutsch: 'umbringen'
  },
  {
    artikel: '',
    plattdeutsch: 'afnierm',
    hochdeutsch: 'abnehmen'
  },
  {
    artikel: '',
    plattdeutsch: 'afplücken',
    hochdeutsch: 'abpflücken'
  },
  {
    artikel: '',
    plattdeutsch: 'afreken',
    hochdeutsch: 'abrechnen'
  },
  {
    artikel: '',
    plattdeutsch: 'afrieten',
    hochdeutsch: 'abreißen'
  },
  {
    artikel: '',
    plattdeutsch: 'afroaen van',
    hochdeutsch: 'abraten von'
  },
  {
    artikel: '',
    plattdeutsch: 'afrümen',
    hochdeutsch: 'abräumen'
  },
  {
    artikel: '',
    plattdeutsch: 'afsäggen',
    hochdeutsch: 'absagen, abkündigen (in der Kirche)'
  },
  {
    artikel: '',
    plattdeutsch: 'afsaaien',
    hochdeutsch: 'abschöpfen (Rahm, Fett)'
  },
  {
    artikel: '',
    plattdeutsch: 'afsärpen',
    hochdeutsch: 'abseifen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Afsatz',
    hochdeutsch: 'Absatz'
  },
  {
    artikel: '',
    plattdeutsch: 'afscheiten',
    hochdeutsch: 'abschießen'
  },
  {
    artikel: '',
    plattdeutsch: 'afschiehen',
    hochdeutsch: 'abtrennen'
  },
  {
    artikel: '',
    plattdeutsch: 'afschillen',
    hochdeutsch: 'abschälen'
  },
  {
    artikel: '',
    plattdeutsch: 'afschliuten',
    hochdeutsch: 'abschließen'
  },
  {
    artikel: '',
    plattdeutsch: 'afschloan',
    hochdeutsch: 'abschlagen, verweigern'
  },
  {
    artikel: '',
    plattdeutsch: 'afschmicken',
    hochdeutsch: 'abschmecken'
  },
  {
    artikel: '',
    plattdeutsch: 'afschmieten',
    hochdeutsch: 'abwerfen, einbringen'
  },
  {
    artikel: '',
    plattdeutsch: 'afschneoen',
    hochdeutsch: 'Schnur ziehen'
  },
  {
    artikel: '',
    plattdeutsch: 'afschniehen',
    hochdeutsch: 'abschneiden'
  },
  {
    artikel: '',
    plattdeutsch: 'afschobben',
    hochdeutsch: 'abscheuern'
  },
  {
    artikel: '',
    plattdeutsch: 'afschrappen',
    hochdeutsch: 'abschaben'
  },
  {
    artikel: '',
    plattdeutsch: 'afseihn',
    hochdeutsch: 'absehen von, verzichten'
  },
  {
    artikel: '',
    plattdeutsch: 'afsetten',
    hochdeutsch: 'absetzen, entwöhnen'
  },
  {
    artikel: '',
    plattdeutsch: 'afsiupen',
    hochdeutsch: 'ertrinken'
  },
  {
    artikel: '',
    plattdeutsch: 'afsiusen',
    hochdeutsch: 'abwarten, absausen, etwas überstehen'
  },
  {
    artikel: '',
    plattdeutsch: 'afsoagen',
    hochdeutsch: 'absägen'
  },
  {
    artikel: '',
    plattdeutsch: 'afsperrn',
    hochdeutsch: 'absperren'
  },
  {
    artikel: '',
    plattdeutsch: 'afsteerben',
    hochdeutsch: 'absterben'
  },
  {
    artikel: '',
    plattdeutsch: 'afsteken',
    hochdeutsch: 'abstechen  (Heu, Stroh … abladen)'
  },
  {
    artikel: '',
    plattdeutsch: 'afstoahn',
    hochdeutsch: 'abgestanden, verzichten auf'
  },
  {
    artikel: '',
    plattdeutsch: 'afstörten',
    hochdeutsch: 'abstoßen, abstürzen'
  },
  {
    artikel: '',
    plattdeutsch: 'afsträngen',
    hochdeutsch: 'Zugstränge lösen  (bei Zugtieren)'
  },
  {
    artikel: '',
    plattdeutsch: 'afstriehen',
    hochdeutsch: 'abstreiten, leugnen'
  },
  {
    artikel: '',
    plattdeutsch: 'afstrirpen',
    hochdeutsch: 'abstreifen'
  },
  {
    artikel: '',
    plattdeutsch: 'afstruppen',
    hochdeutsch: 'abstreifen (Tabak entrippen)'
  },
  {
    artikel: '',
    plattdeutsch: 'afstüsseln',
    hochdeutsch: 'abstützen (behelfsmäßig)'
  },
  {
    artikel: '',
    plattdeutsch: 'afteiken',
    hochdeutsch: 'abzeichnen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Afteiken',
    hochdeutsch: 'Abzeichen'
  },
  {
    artikel: '',
    plattdeutsch: 'aftellen',
    hochdeutsch: 'abzählen'
  },
  {
    artikel: '',
    plattdeutsch: 'aftoiben',
    hochdeutsch: 'abwarten'
  },
  {
    artikel: '',
    plattdeutsch: 'aftrehen',
    hochdeutsch: 'abschreiten'
  },
  {
    artikel: '',
    plattdeutsch: 'afwasken',
    hochdeutsch: 'abwaschen'
  },
  {
    artikel: '',
    plattdeutsch: 'afwisken',
    hochdeutsch: 'abwischen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Aggedoage',
    hochdeutsch: 'Woche (ganze Woche)'
  },
  {
    artikel: '',
    plattdeutsch: 'ahne',
    hochdeutsch: 'drin, an'
  },
  {
    artikel: '',
    plattdeutsch: 'akkedaaien',
    hochdeutsch: 'verhandeln, immer wieder über etwas reden'
  },
  {
    artikel: '',
    plattdeutsch: 'akkroat',
    hochdeutsch: 'akkurat'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Allhöarn',
    hochdeutsch: 'Holunder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Allhöarnbiehen',
    hochdeutsch: 'Holunderbeeren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Allühen',
    hochdeutsch: 'Eigenarten (negativ)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Altoar',
    hochdeutsch: 'Altar'
  },
  {
    artikel: '',
    plattdeutsch: 'annen Enne',
    hochdeutsch: 'am Ende (schließlich, vielleicht)'
  },
  {
    artikel: '',
    plattdeutsch: 'Amerikoa',
    hochdeutsch: 'Amerika'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Amerikoaner',
    hochdeutsch: 'Amerikaner'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Amt',
    hochdeutsch: 'Behörde, Rathaus'
  },
  {
    artikel: 'uppen',
    plattdeutsch: 'Amte',
    hochdeutsch: 'im Rathaus'
  },
  {
    artikel: '',
    plattdeutsch: 'an',
    hochdeutsch: 'an'
  },
  {
    artikel: '',
    plattdeutsch: 'an dem sien',
    hochdeutsch: 'wahr sein'
  },
  {
    artikel: '',
    plattdeutsch: 'anbaaien',
    hochdeutsch: 'anbieten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Anbeo',
    hochdeutsch: 'Anbau'
  },
  {
    artikel: '',
    plattdeutsch: 'anbeoen',
    hochdeutsch: 'anbauen'
  },
  {
    artikel: '',
    plattdeutsch: 'anbienen',
    hochdeutsch: 'anbinden'
  },
  {
    artikel: '',
    plattdeutsch: 'anbieten',
    hochdeutsch: 'anbeißen'
  },
  {
    artikel: '',
    plattdeutsch: 'anblierken',
    hochdeutsch: 'anbellen'
  },
  {
    artikel: '',
    plattdeutsch: 'anbloasen',
    hochdeutsch: 'anblasen  (Signal zum Beginn der Treibjagd)'
  },
  {
    artikel: '',
    plattdeutsch: 'anböagen',
    hochdeutsch: 'anbiegen'
  },
  {
    artikel: '',
    plattdeutsch: 'anboiten',
    hochdeutsch: 'anheizen'
  },
  {
    artikel: '',
    plattdeutsch: 'anbrennen',
    hochdeutsch: 'anbrennen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Anbrennzel',
    hochdeutsch: 'Angebranntes'
  },
  {
    artikel: '',
    plattdeutsch: 'anbucken',
    hochdeutsch: 'anlehnen, ankuscheln'
  },
  {
    artikel: '',
    plattdeutsch: 'anbühen',
    hochdeutsch: 'anheben'
  },
  {
    artikel: '',
    plattdeutsch: 'andeinen',
    hochdeutsch: 'anbieten'
  },
  {
    artikel: '',
    plattdeutsch: 'andeon',
    hochdeutsch: 'anreichen  (Heu oder Getreide)'
  },
  {
    artikel: '',
    plattdeutsch: 'andeon (sick wat andeon)',
    hochdeutsch: 'verletzen, Selbstmord'
  },
  {
    artikel: '',
    plattdeutsch: 'andössken',
    hochdeutsch: 'andreschen (das erste Getreide dreschen)'
  },
  {
    artikel: '',
    plattdeutsch: 'andraaihen',
    hochdeutsch: 'andrehen, aufschwatzen'
  },
  {
    artikel: '',
    plattdeutsch: 'andrieben',
    hochdeutsch: 'antreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'andröagen',
    hochdeutsch: 'antrocknen'
  },
  {
    artikel: '',
    plattdeutsch: 'anecken',
    hochdeutsch: 'anecken (undiplomatisches Verhalten)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Anfang',
    hochdeutsch: 'Anfang'
  },
  {
    artikel: '',
    plattdeutsch: 'anfangen',
    hochdeutsch: 'anfangen, beginnen'
  },
  {
    artikel: '',
    plattdeutsch: 'anfoihen',
    hochdeutsch: 'anführen, anfahren, zitieren'
  },
  {
    artikel: '',
    plattdeutsch: 'anfoihlen',
    hochdeutsch: 'anfühlen'
  },
  {
    artikel: '',
    plattdeutsch: 'anfutken',
    hochdeutsch: 'anziehen  (geschmacklos)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Angebott',
    hochdeutsch: 'Angebot'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Angehöarige',
    hochdeutsch: 'Angehörige'
  },
  {
    artikel: '',
    plattdeutsch: 'angeiten',
    hochdeutsch: 'angießen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Angest',
    hochdeutsch: 'Angst'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Angesthoase',
    hochdeutsch: 'Angsthase'
  },
  {
    artikel: '',
    plattdeutsch: 'ängestig (ängestich)',
    hochdeutsch: 'ängstlich'
  },
  {
    artikel: '',
    plattdeutsch: 'angierm',
    hochdeutsch: 'angeben'
  },
  {
    artikel: '',
    plattdeutsch: 'angnabbeln',
    hochdeutsch: 'annagen'
  },
  {
    artikel: '',
    plattdeutsch: 'angoahn',
    hochdeutsch: 'angehen, anfangen'
  },
  {
    artikel: '',
    plattdeutsch: 'anhänglik',
    hochdeutsch: 'anhänglich, treu'
  },
  {
    artikel: '',
    plattdeutsch: 'anhaulen',
    hochdeutsch: 'anhalten, ermahnen'
  },
  {
    artikel: '',
    plattdeutsch: 'anheoen',
    hochdeutsch: 'annageln, erinnern, bitten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Anhöachte',
    hochdeutsch: 'Anhöhe'
  },
  {
    artikel: '',
    plattdeutsch: 'anhöarn',
    hochdeutsch: 'anhören'
  },
  {
    artikel: '',
    plattdeutsch: 'anhutken',
    hochdeutsch: 'ankleiden (unpassend)'
  },
  {
    artikel: '',
    plattdeutsch: 'ankeoen',
    hochdeutsch: 'anknabbern'
  },
  {
    artikel: '',
    plattdeutsch: 'ankieken',
    hochdeutsch: 'ansehen'
  },
  {
    artikel: '',
    plattdeutsch: 'ankloppen',
    hochdeutsch: 'anklopfen'
  },
  {
    artikel: '',
    plattdeutsch: 'ankriegen',
    hochdeutsch: 'anziehen, etwas in Gang setzen'
  },
  {
    artikel: '',
    plattdeutsch: 'anküen',
    hochdeutsch: 'ansprechen, aufschwatzen'
  },
  {
    artikel: '',
    plattdeutsch: 'ankurm',
    hochdeutsch: 'ankommen'
  },
  {
    artikel: '',
    plattdeutsch: 'ankurm Wierken',
    hochdeutsch: 'Woche (kommende Woche)'
  },
  {
    artikel: '',
    plattdeutsch: 'anläen',
    hochdeutsch: 'anlernen'
  },
  {
    artikel: '',
    plattdeutsch: 'anlaupen',
    hochdeutsch: 'anlaufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Anlegger',
    hochdeutsch: 'Anleger'
  },
  {
    artikel: '',
    plattdeutsch: 'anleigen',
    hochdeutsch: 'anlügen'
  },
  {
    artikel: '',
    plattdeutsch: 'anlichen',
    hochdeutsch: 'anheben  (wenig)'
  },
  {
    artikel: '',
    plattdeutsch: 'anlicken',
    hochdeutsch: 'anlecken'
  },
  {
    artikel: '',
    plattdeutsch: 'anlierbern',
    hochdeutsch: 'anliefern'
  },
  {
    artikel: '',
    plattdeutsch: 'anliggen',
    hochdeutsch: 'erinnern  (sich erinnern)'
  },
  {
    artikel: '',
    plattdeutsch: 'anlihrnen',
    hochdeutsch: 'anlehnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Anloage',
    hochdeutsch: 'Anlage'
  },
  {
    artikel: '',
    plattdeutsch: 'anmaaihen',
    hochdeutsch: 'anmähen'
  },
  {
    artikel: '',
    plattdeutsch: 'anmelken',
    hochdeutsch: 'vormelken (junge Kuh ans Melken gewöhnen)'
  },
  {
    artikel: '',
    plattdeutsch: 'anmeten',
    hochdeutsch: 'Maßnehmen für die Maßanfertigung'
  },
  {
    artikel: '',
    plattdeutsch: 'anmoaken',
    hochdeutsch: 'anmachen'
  },
  {
    artikel: '',
    plattdeutsch: 'annanner',
    hochdeutsch: 'aneinander'
  },
  {
    artikel: '',
    plattdeutsch: 'annegeln',
    hochdeutsch: 'annageln'
  },
  {
    artikel: '',
    plattdeutsch: 'anne',
    hochdeutsch: 'an der'
  },
  {
    artikel: '',
    plattdeutsch: 'annen',
    hochdeutsch: 'an den, an dem'
  },
  {
    artikel: '',
    plattdeutsch: 'annere',
    hochdeutsch: 'andere'
  },
  {
    artikel: '',
    plattdeutsch: 'ännern',
    hochdeutsch: 'ändern'
  },
  {
    artikel: '',
    plattdeutsch: 'anners',
    hochdeutsch: 'anders'
  },
  {
    artikel: '',
    plattdeutsch: 'annersrümme',
    hochdeutsch: 'umgekehrt'
  },
  {
    artikel: '',
    plattdeutsch: 'annertiet',
    hochdeutsch: 'sonst, früher'
  },
  {
    artikel: '',
    plattdeutsch: 'annerwärts, annerwegens',
    hochdeutsch: 'woanders'
  },
  {
    artikel: '',
    plattdeutsch: 'annierm',
    hochdeutsch: 'annehmen'
  },
  {
    artikel: '',
    plattdeutsch: 'annoomen Kiend',
    hochdeutsch: 'Adoptivkind'
  },
  {
    artikel: '',
    plattdeutsch: 'annücken',
    hochdeutsch: 'anknoten'
  },
  {
    artikel: '',
    plattdeutsch: 'anpacken',
    hochdeutsch: 'anfassen'
  },
  {
    artikel: '',
    plattdeutsch: 'anpierken',
    hochdeutsch: 'ankleben'
  },
  {
    artikel: '',
    plattdeutsch: 'anplanten',
    hochdeutsch: 'anpflanzen'
  },
  {
    artikel: '',
    plattdeutsch: 'anpöahlen',
    hochdeutsch: 'anpflocken'
  },
  {
    artikel: '',
    plattdeutsch: 'anpriesen',
    hochdeutsch: 'anpreisen'
  },
  {
    artikel: '',
    plattdeutsch: 'anranzen',
    hochdeutsch: 'anschnauzen'
  },
  {
    artikel: '',
    plattdeutsch: 'anrecken',
    hochdeutsch: 'anreichen'
  },
  {
    artikel: '',
    plattdeutsch: 'anreken',
    hochdeutsch: 'anrechnen'
  },
  {
    artikel: '',
    plattdeutsch: 'anrennen',
    hochdeutsch: 'anstoßen, rempeln'
  },
  {
    artikel: '',
    plattdeutsch: 'anreopen',
    hochdeutsch: 'anrufen'
  },
  {
    artikel: '',
    plattdeutsch: 'anrieten',
    hochdeutsch: 'anreißen, markieren'
  },
  {
    artikel: '',
    plattdeutsch: 'anroaen',
    hochdeutsch: 'empfehlen'
  },
  {
    artikel: '',
    plattdeutsch: 'anröahrgen',
    hochdeutsch: 'berühren, anrühren'
  },
  {
    artikel: '',
    plattdeutsch: 'anroihen',
    hochdeutsch: 'anrühren'
  },
  {
    artikel: '',
    plattdeutsch: 'ansäggen',
    hochdeutsch: 'ansagen'
  },
  {
    artikel: '',
    plattdeutsch: 'anscheiten',
    hochdeutsch: 'anschießen'
  },
  {
    artikel: '',
    plattdeutsch: 'anschiehen',
    hochdeutsch: 'Geschirr anlegen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Anschien',
    hochdeutsch: 'Anschein'
  },
  {
    artikel: '',
    plattdeutsch: 'anschieten',
    hochdeutsch: 'anscheißen, anschwärzen, verpetzen, übervorteilen'
  },
  {
    artikel: '',
    plattdeutsch: 'anschloan',
    hochdeutsch: 'anschlagen, anwachsen, Heilwirkung zeigen, bekannt machen'
  },
  {
    artikel: '',
    plattdeutsch: 'anschmieten',
    hochdeutsch: 'anwerfen (Motor, Putz)'
  },
  {
    artikel: '',
    plattdeutsch: 'anschniehen',
    hochdeutsch: 'anschneiden'
  },
  {
    artikel: '',
    plattdeutsch: 'anschroien',
    hochdeutsch: 'ansengen'
  },
  {
    artikel: '',
    plattdeutsch: 'anschwullen',
    hochdeutsch: 'angeschwollen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Anseihn',
    hochdeutsch: 'Ansehen, Achtung'
  },
  {
    artikel: '',
    plattdeutsch: 'ansetten',
    hochdeutsch: 'ansetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'ansiusen',
    hochdeutsch: 'ankommen (schnell)'
  },
  {
    artikel: '',
    plattdeutsch: 'anspaaien',
    hochdeutsch: 'anspucken'
  },
  {
    artikel: '',
    plattdeutsch: 'ansteken',
    hochdeutsch: 'anstechen'
  },
  {
    artikel: '',
    plattdeutsch: 'anstellen',
    hochdeutsch: 'anstellen, sich zieren'
  },
  {
    artikel: '',
    plattdeutsch: 'ansticken',
    hochdeutsch: 'anstecken, anzünden'
  },
  {
    artikel: '',
    plattdeutsch: 'anstiehe',
    hochdeutsch: 'anstatt'
  },
  {
    artikel: '',
    plattdeutsch: 'anstoahn',
    hochdeutsch: 'anstehen'
  },
  {
    artikel: '',
    plattdeutsch: 'anstörten',
    hochdeutsch: 'anstoßen'
  },
  {
    artikel: '',
    plattdeutsch: 'ansträngen',
    hochdeutsch: 'Zugstränge befestigen  (bei Zugtieren)'
  },
  {
    artikel: '',
    plattdeutsch: 'anstrengen',
    hochdeutsch: 'anstrengen'
  },
  {
    artikel: '',
    plattdeutsch: 'anstrieken',
    hochdeutsch: 'anstreichen'
  },
  {
    artikel: '',
    plattdeutsch: 'ant (an dat)',
    hochdeutsch: 'an das, ans'
  },
  {
    artikel: '',
    plattdeutsch: 'anteihn',
    hochdeutsch: 'anziehen'
  },
  {
    artikel: '',
    plattdeutsch: 'anteiken',
    hochdeutsch: 'anzeichnen, markieren'
  },
  {
    artikel: '',
    plattdeutsch: 'antellen',
    hochdeutsch: 'anzählen'
  },
  {
    artikel: '',
    plattdeutsch: 'anticken',
    hochdeutsch: 'anstoßen (sanft)'
  },
  {
    artikel: '',
    plattdeutsch: 'antrehen',
    hochdeutsch: 'antreten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Antwoort',
    hochdeutsch: 'Antwort'
  },
  {
    artikel: '',
    plattdeutsch: 'antwoorten',
    hochdeutsch: 'antworten'
  },
  {
    artikel: '',
    plattdeutsch: 'anwassen',
    hochdeutsch: 'anwachsen'
  },
  {
    artikel: '',
    plattdeutsch: 'anwennen',
    hochdeutsch: 'anwenden'
  },
  {
    artikel: '',
    plattdeutsch: 'anwiernen',
    hochdeutsch: 'angewöhnen'
  },
  {
    artikel: '',
    plattdeutsch: 'anwiesen',
    hochdeutsch: 'anweisen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Appel',
    hochdeutsch: 'Apfel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Appelbottern',
    hochdeutsch: 'Apfelmus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Appelkeoken',
    hochdeutsch: 'Apfelkuchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Appelkoahn',
    hochdeutsch: 'Boot (abfällig)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Appelplücker',
    hochdeutsch: 'Apfelpflücker'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Appelsaft',
    hochdeutsch: 'Apfelsaft'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Appelstütk',
    hochdeutsch: 'Apfelrest mit Kerngehäuse und Stiel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'April',
    hochdeutsch: 'April'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Apteiken',
    hochdeutsch: 'Apotheke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ärhn',
    hochdeutsch: 'Erde, Boden'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ärmitten',
    hochdeutsch: 'Ameisen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ärmittenschärper',
    hochdeutsch: 'Sonderling'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Asken',
    hochdeutsch: 'Asche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Askenkassen',
    hochdeutsch: 'Aschekasten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Assen',
    hochdeutsch: 'Achse'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Auge',
    hochdeutsch: 'Auge'
  },
  {
    artikel: 'de',
    plattdeutsch: 'August',
    hochdeutsch: 'August'
  },
  {
    artikel: '',
    plattdeutsch: 'auk',
    hochdeutsch: 'auch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'aule Reff',
    hochdeutsch: 'Frau (frech)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Aulen',
    hochdeutsch: 'Eltern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Aulske',
    hochdeutsch: 'Greisin, alte Frau (abfällig)'
  },
  {
    artikel: '',
    plattdeutsch: 'ault',
    hochdeutsch: 'alt'
  },
  {
    artikel: '',
    plattdeutsch: 'aule',
    hochdeutsch: 'alte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Aultjoahrsoabend',
    hochdeutsch: 'Silvester'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Austerfüer',
    hochdeutsch: 'Osterfeuer'
  },
  {
    artikel: '',
    plattdeutsch: 'Austern',
    hochdeutsch: 'Ostern'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Auto',
    hochdeutsch: 'Auto'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Äxen',
    hochdeutsch: 'Axt'
  },
  {
    artikel: '',
    plattdeutsch: 'baaien',
    hochdeutsch: 'bieten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Baal',
    hochdeutsch: 'Ball'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Baalg (Baalch)',
    hochdeutsch: 'Balg, Bauch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Baalgen',
    hochdeutsch: 'Wanne (groß)'
  },
  {
    artikel: '',
    plattdeutsch: 'baalgen',
    hochdeutsch: 'raufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Baalgeraaie',
    hochdeutsch: 'Toberei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Baalgreimen (Baalchreimen)',
    hochdeutsch: 'Bauchgurt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Baalken',
    hochdeutsch: 'Balken, Bodenraum, Kantholz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Baalkenliuken',
    hochdeutsch: 'Bodenluke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bär',
    hochdeutsch: 'Eber'
  },
  {
    artikel: '',
    plattdeutsch: 'bähen',
    hochdeutsch: 'saufen, Sau ist rauschig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bähentrecker',
    hochdeutsch: 'Bärenführer'
  },
  {
    artikel: '',
    plattdeutsch: 'bärsk',
    hochdeutsch: 'rauschiges Schwein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Babutz',
    hochdeutsch: 'Friseur'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Backelken',
    hochdeutsch: 'Primel'
  },
  {
    artikel: '',
    plattdeutsch: 'backen',
    hochdeutsch: 'backen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Backen',
    hochdeutsch: 'Wangen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Backenboart',
    hochdeutsch: 'Wangenbart'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Backentoahn',
    hochdeutsch: 'Backenzahn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bäcker',
    hochdeutsch: 'Bäcker'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bäckeraaie',
    hochdeutsch: 'Bäckerei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Backetrog  (Backetroch)',
    hochdeutsch: 'Backtrog'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Backohmn',
    hochdeutsch: 'Backofen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Backs',
    hochdeutsch: 'Backhaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Backstein',
    hochdeutsch: 'Ziegelstein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Backvull',
    hochdeutsch: 'Armvoll'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Bad',
    hochdeutsch: 'Heilbad'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ballerkoorn',
    hochdeutsch: 'Hafer-Bohnengemisch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ballerkopp',
    hochdeutsch: 'Polterer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bammel',
    hochdeutsch: 'Angst'
  },
  {
    artikel: '',
    plattdeutsch: 'Bammel hämmen',
    hochdeutsch: 'Angst haben'
  },
  {
    artikel: '',
    plattdeutsch: 'bange',
    hochdeutsch: 'ängstlich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bange',
    hochdeutsch: 'Angst'
  },
  {
    artikel: '',
    plattdeutsch: 'bange moaken',
    hochdeutsch: 'einschüchtern'
  },
  {
    artikel: '',
    plattdeutsch: 'bange sien',
    hochdeutsch: 'ängstlich sein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bangeböxen',
    hochdeutsch: 'Angsthase'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bank; de Bänke',
    hochdeutsch: 'Bank'
  },
  {
    artikel: '',
    plattdeutsch: 'bannig  (bannich)',
    hochdeutsch: 'sehr (viel, scharf, lange …)'
  },
  {
    artikel: '',
    plattdeutsch: 'bännigen',
    hochdeutsch: 'bändigen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bansen',
    hochdeutsch: 'Packraum für Getreidegarben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bär',
    hochdeutsch: 'Bär'
  },
  {
    artikel: '',
    plattdeutsch: 'bärde',
    hochdeutsch: 'beide'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Bass',
    hochdeutsch: 'Baumrinde, Haut, Bast'
  },
  {
    artikel: '',
    plattdeutsch: 'bassen',
    hochdeutsch: 'bersten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Batzen',
    hochdeutsch: 'Menge (viel, groß)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bauhnen',
    hochdeutsch: 'Bohnen'
  },
  {
    artikel: '',
    plattdeutsch: 'baule',
    hochdeutsch: 'bald'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Baum; de Böame',
    hochdeutsch: 'Baum'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Baumlöarper',
    hochdeutsch: 'Spechtmeise, Baumläufer'
  },
  {
    artikel: '',
    plattdeutsch: 'bedacht sien',
    hochdeutsch: 'überlegt'
  },
  {
    artikel: '',
    plattdeutsch: 'Bedacht (mit Bedacht)',
    hochdeutsch: 'Überlegung (mit Überlegung)'
  },
  {
    artikel: '',
    plattdeutsch: 'bedanken',
    hochdeutsch: 'bedanken'
  },
  {
    artikel: '',
    plattdeutsch: 'bedeinen',
    hochdeutsch: 'bedienen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bedenktiet',
    hochdeutsch: 'Bedenkzeit'
  },
  {
    artikel: '',
    plattdeutsch: 'bediuern',
    hochdeutsch: 'bedauern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bedragg  (Bedrach)',
    hochdeutsch: 'Betrag'
  },
  {
    artikel: '',
    plattdeutsch: 'bedregen',
    hochdeutsch: 'betragen'
  },
  {
    artikel: '',
    plattdeutsch: 'bedreigen',
    hochdeutsch: 'betrügen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bedreiger',
    hochdeutsch: 'Betrüger'
  },
  {
    artikel: '',
    plattdeutsch: 'bedrieben',
    hochdeutsch: 'betreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'bedroibet',
    hochdeutsch: 'betrübt, traurig'
  },
  {
    artikel: '',
    plattdeutsch: 'bedroopen',
    hochdeutsch: 'betroffen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bedrugg  (Bedruch)',
    hochdeutsch: 'Betrug'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bedrulje',
    hochdeutsch: 'Bedrängnis'
  },
  {
    artikel: '',
    plattdeutsch: 'bedrüüst',
    hochdeutsch: 'betäubt, schwindelig'
  },
  {
    artikel: '',
    plattdeutsch: 'bedüüen',
    hochdeutsch: 'bedeuten'
  },
  {
    artikel: '',
    plattdeutsch: 'belen',
    hochdeutsch: 'betteln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beleraaie',
    hochdeutsch: 'Bettelei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beerg (Beerch); de Beerge',
    hochdeutsch: 'Berg'
  },
  {
    artikel: '',
    plattdeutsch: 'beerg-af  (beerch-af)',
    hochdeutsch: 'bergab'
  },
  {
    artikel: '',
    plattdeutsch: 'beerg-doal  (beerch-doal)',
    hochdeutsch: 'bergab'
  },
  {
    artikel: '',
    plattdeutsch: 'beerg-rünner  (beerch-rünner)',
    hochdeutsch: 'bergab'
  },
  {
    artikel: '',
    plattdeutsch: 'beerg-up  (beerch-up)',
    hochdeutsch: 'bergauf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beerken',
    hochdeutsch: 'Birke'
  },
  {
    artikel: '',
    plattdeutsch: 'beter',
    hochdeutsch: 'besser'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beterung',
    hochdeutsch: 'Besserung'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Beffken',
    hochdeutsch: 'Beffchen (weißes Beffchen am Talar des Pastors)'
  },
  {
    artikel: '',
    plattdeutsch: 'befoaten',
    hochdeutsch: 'befassen'
  },
  {
    artikel: '',
    plattdeutsch: 'befoihlen',
    hochdeutsch: 'befühlen'
  },
  {
    artikel: '',
    plattdeutsch: 'begeiten',
    hochdeutsch: 'begießen'
  },
  {
    artikel: '',
    plattdeutsch: 'begierm',
    hochdeutsch: 'begeben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Begiermhert',
    hochdeutsch: 'Begebenheit, Anwesen'
  },
  {
    artikel: '',
    plattdeutsch: 'begoabt',
    hochdeutsch: 'begabt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Begräfte',
    hochdeutsch: 'Grabstätte'
  },
  {
    artikel: '',
    plattdeutsch: 'begrautmiulen',
    hochdeutsch: 'begutachten'
  },
  {
    artikel: '',
    plattdeutsch: 'begriepen',
    hochdeutsch: 'begreifen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Begriff',
    hochdeutsch: 'Vorstellung von etwas'
  },
  {
    artikel: '',
    plattdeutsch: 'begroaben',
    hochdeutsch: 'begraben'
  },
  {
    artikel: '',
    plattdeutsch: 'begrünnen',
    hochdeutsch: 'begründen'
  },
  {
    artikel: '',
    plattdeutsch: 'behaulen',
    hochdeutsch: 'behalten'
  },
  {
    artikel: '',
    plattdeutsch: 'behen',
    hochdeutsch: 'beten, bitten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Behiusung',
    hochdeutsch: 'Behausung'
  },
  {
    artikel: '',
    plattdeutsch: 'behoagen',
    hochdeutsch: 'behagen'
  },
  {
    artikel: '',
    plattdeutsch: 'behoien',
    hochdeutsch: 'behüten, beschützen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Beier',
    hochdeutsch: 'Bier'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Bein',
    hochdeutsch: 'Bein'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Beispierl',
    hochdeutsch: 'Beispiel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Beist',
    hochdeutsch: 'Biest, Untier'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beistmelk',
    hochdeutsch: 'Kolostralmilch (Erstmilch nach der Geburt)'
  },
  {
    artikel: '',
    plattdeutsch: 'bekehen',
    hochdeutsch: 'bekehren'
  },
  {
    artikel: '',
    plattdeutsch: 'bekieken',
    hochdeutsch: 'ansehen'
  },
  {
    artikel: '',
    plattdeutsch: 'bekinnen',
    hochdeutsch: 'bekennen'
  },
  {
    artikel: '',
    plattdeutsch: 'bekoakeln',
    hochdeutsch: 'bereden'
  },
  {
    artikel: '',
    plattdeutsch: 'beköstigen',
    hochdeutsch: 'verpflegen'
  },
  {
    artikel: '',
    plattdeutsch: 'bekriegen',
    hochdeutsch: 'beherrschen, beruhigen, sich umtun'
  },
  {
    artikel: '',
    plattdeutsch: 'beküen',
    hochdeutsch: 'besprechen'
  },
  {
    artikel: '',
    plattdeutsch: 'beküesk',
    hochdeutsch: 'gesprächig, redselig'
  },
  {
    artikel: '',
    plattdeutsch: 'bekurm',
    hochdeutsch: 'bekommen, vertragen (in gesundheitlicher Hinsicht)'
  },
  {
    artikel: '',
    plattdeutsch: 'belaupen',
    hochdeutsch: 'belaufen, erledigen'
  },
  {
    artikel: '',
    plattdeutsch: 'beleggen',
    hochdeutsch: 'belegen'
  },
  {
    artikel: '',
    plattdeutsch: 'beleigen',
    hochdeutsch: 'belügen'
  },
  {
    artikel: '',
    plattdeutsch: 'beliekteiken',
    hochdeutsch: 'etwas erklären'
  },
  {
    artikel: '',
    plattdeutsch: 'belierben',
    hochdeutsch: 'erleben'
  },
  {
    artikel: '',
    plattdeutsch: 'bemiegen',
    hochdeutsch: 'einnässen, anpinkeln'
  },
  {
    artikel: '',
    plattdeutsch: 'bemoalen',
    hochdeutsch: 'bemalen'
  },
  {
    artikel: '',
    plattdeutsch: 'bemoihen',
    hochdeutsch: 'bemühen'
  },
  {
    artikel: '',
    plattdeutsch: 'bemoiten',
    hochdeutsch: 'begegnen'
  },
  {
    artikel: '',
    plattdeutsch: 'benierbelt',
    hochdeutsch: 'benebelt'
  },
  {
    artikel: '',
    plattdeutsch: 'benierm',
    hochdeutsch: 'benehmen'
  },
  {
    artikel: '',
    plattdeutsch: 'benoadeilen',
    hochdeutsch: 'benachteilen'
  },
  {
    artikel: '',
    plattdeutsch: 'benömmen',
    hochdeutsch: 'benennen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beo',
    hochdeutsch: 'Bau'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Beoed',
    hochdeutsch: 'Bord, Regal'
  },
  {
    artikel: '',
    plattdeutsch: 'beoen',
    hochdeutsch: 'bauen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Beok; de Boiker',
    hochdeutsch: 'Buch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beokbiener',
    hochdeutsch: 'Buchbinder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beokeckern',
    hochdeutsch: 'Bucheckern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beokfink',
    hochdeutsch: 'Buchfink'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beokstoabe',
    hochdeutsch: 'Buchstabe'
  },
  {
    artikel: '',
    plattdeutsch: 'beokstoabiehen',
    hochdeutsch: 'buchstabieren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beokweiten',
    hochdeutsch: 'Buchweizen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beoplatz',
    hochdeutsch: 'Bauplatz'
  },
  {
    artikel: '',
    plattdeutsch: 'berappen',
    hochdeutsch: 'bezahlen'
  },
  {
    artikel: '',
    plattdeutsch: 'bereken',
    hochdeutsch: 'berechnen'
  },
  {
    artikel: '',
    plattdeutsch: 'bereopen',
    hochdeutsch: 'berufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Beritt',
    hochdeutsch: 'Bereich, Bezirk'
  },
  {
    artikel: '',
    plattdeutsch: 'beriuken',
    hochdeutsch: 'beriechen, Kontakt aufnehmen'
  },
  {
    artikel: '',
    plattdeutsch: 'beroaen',
    hochdeutsch: 'beraten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Berre; de Bedden',
    hochdeutsch: 'Bett'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Berregoahnstiet',
    hochdeutsch: 'Schlafenszeit'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Berreloaken',
    hochdeutsch: 'Bettlaken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Berremieger',
    hochdeutsch: 'Bettnässer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Berrestiehe, Bettstiehe',
    hochdeutsch: 'Bettgestell'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Berrestrauh',
    hochdeutsch: 'Bettstroh (anstatt Matratze)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bertel',
    hochdeutsch: 'Stecheisen'
  },
  {
    artikel: '',
    plattdeutsch: 'besoiken',
    hochdeutsch: 'besuchen'
  },
  {
    artikel: '',
    plattdeutsch: 'besonners',
    hochdeutsch: 'besonders'
  },
  {
    artikel: '',
    plattdeutsch: 'besöamen',
    hochdeutsch: 'besäumen'
  },
  {
    artikel: '',
    plattdeutsch: 'bespriehen',
    hochdeutsch: 'bespreizen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bessen',
    hochdeutsch: 'Besen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bessenbiener',
    hochdeutsch: 'Besenbinder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bessenrieser',
    hochdeutsch: 'Besenreisig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bessenstierl',
    hochdeutsch: 'Besenstiel'
  },
  {
    artikel: '',
    plattdeutsch: 'bestännig (bestännich)',
    hochdeutsch: 'beständig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bestännigkert (Bestännichkert)',
    hochdeutsch: 'Beständigkeit'
  },
  {
    artikel: '',
    plattdeutsch: 'bestellen',
    hochdeutsch: 'bestellen'
  },
  {
    artikel: '',
    plattdeutsch: 'bestimmt',
    hochdeutsch: 'bestimmt'
  },
  {
    artikel: '',
    plattdeutsch: 'bestriehen',
    hochdeutsch: 'bestreiten'
  },
  {
    artikel: '',
    plattdeutsch: 'bet',
    hochdeutsch: 'bis'
  },
  {
    artikel: '',
    plattdeutsch: 'Betand',
    hochdeutsch: 'Wichtigkeit'
  },
  {
    artikel: '',
    plattdeutsch: 'beteihn',
    hochdeutsch: 'beziehen'
  },
  {
    artikel: '',
    plattdeutsch: 'beteiken',
    hochdeutsch: 'bezeichnen'
  },
  {
    artikel: '',
    plattdeutsch: 'betheer',
    hochdeutsch: 'bisher'
  },
  {
    artikel: '',
    plattdeutsch: 'betiehen',
    hochdeutsch: 'beizeiten'
  },
  {
    artikel: '',
    plattdeutsch: 'betoahlen',
    hochdeutsch: 'bezahlen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Betogg (Betoch)',
    hochdeutsch: 'Bezug'
  },
  {
    artikel: '',
    plattdeutsch: 'betügen',
    hochdeutsch: 'bezeugen'
  },
  {
    artikel: '',
    plattdeutsch: 'bewassen',
    hochdeutsch: 'bewachsen'
  },
  {
    artikel: '',
    plattdeutsch: 'beweerkstelligen',
    hochdeutsch: 'hinbekommen'
  },
  {
    artikel: '',
    plattdeutsch: 'bewegen',
    hochdeutsch: 'bewegen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bewies',
    hochdeutsch: 'Beweis, Kleinigkeit'
  },
  {
    artikel: '',
    plattdeutsch: 'bewiesen',
    hochdeutsch: 'beweisen'
  },
  {
    artikel: '',
    plattdeutsch: 'bewoahen',
    hochdeutsch: 'bewahren'
  },
  {
    artikel: '',
    plattdeutsch: 'bewotteln',
    hochdeutsch: 'bewurzeln'
  },
  {
    artikel: '',
    plattdeutsch: 'bewunnern',
    hochdeutsch: 'bewundern'
  },
  {
    artikel: '',
    plattdeutsch: 'bi',
    hochdeutsch: 'bei'
  },
  {
    artikel: '',
    plattdeutsch: 'biaf',
    hochdeutsch: 'übrig'
  },
  {
    artikel: '',
    plattdeutsch: 'bian',
    hochdeutsch: 'stetig weiter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bichte',
    hochdeutsch: 'Beichte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bichtkommern',
    hochdeutsch: 'Beichtkammer'
  },
  {
    artikel: '',
    plattdeutsch: 'bidann',
    hochdeutsch: 'zeitnah'
  },
  {
    artikel: '',
    plattdeutsch: 'bidenne',
    hochdeutsch: 'trennen, vereinzeln'
  },
  {
    artikel: '',
    plattdeutsch: 'bidenneliuken',
    hochdeutsch: 'vereinzeln (bei Rübenpflanzen)'
  },
  {
    artikel: '',
    plattdeutsch: 'bidoal',
    hochdeutsch: 'vorbei, nebenher'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Biehen',
    hochdeutsch: 'Birnen, Beeren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bielen',
    hochdeutsch: 'Zimmermannsbeil'
  },
  {
    artikel: '',
    plattdeutsch: 'bien',
    hochdeutsch: 'beim'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Biend',
    hochdeutsch: 'Maßeinheit für Garn (Haspel)'
  },
  {
    artikel: '',
    plattdeutsch: 'bienen',
    hochdeutsch: 'binden'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Biendken',
    hochdeutsch: 'Band zur Trachtenmütze'
  },
  {
    artikel: '',
    plattdeutsch: 'bierben',
    hochdeutsch: 'beben, zittern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bierke',
    hochdeutsch: 'Bach'
  },
  {
    artikel: '',
    plattdeutsch: 'biersen',
    hochdeutsch: 'sausen, rennen'
  },
  {
    artikel: '',
    plattdeutsch: 'bieten',
    hochdeutsch: 'beißen'
  },
  {
    artikel: '',
    plattdeutsch: 'bietsk',
    hochdeutsch: 'bissig'
  },
  {
    artikel: '',
    plattdeutsch: 'bifoihlen',
    hochdeutsch: 'Follikelkontrolle'
  },
  {
    artikel: '',
    plattdeutsch: 'bikriupen',
    hochdeutsch: 'beikriechen (Annäherung)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Bild; de Biller',
    hochdeutsch: 'Bild'
  },
  {
    artikel: '',
    plattdeutsch: 'bileibe',
    hochdeutsch: 'beileibe'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Billerbeok',
    hochdeutsch: 'Bilderbuch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Billerboahn',
    hochdeutsch: 'schiefe Bahn (sozialer Abstieg)'
  },
  {
    artikel: '',
    plattdeutsch: 'billig (billich)',
    hochdeutsch: 'billig'
  },
  {
    artikel: '',
    plattdeutsch: 'sien',
    hochdeutsch: ''
  },
  {
    artikel: 'eck bin                  was           bin wesen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu bis                   woies        bis wesen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et es        was           es wesen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei sind      woien        sind wesen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'sein',
    hochdeutsch: ''
  },
  {
    artikel: 'ich bin                    war           bin gewesen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du bist                    warst',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es ist           war',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir sind ….             waren  ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bindfissen, Bindfoaden',
    hochdeutsch: 'Bindfaden'
  },
  {
    artikel: '',
    plattdeutsch: 'binnen',
    hochdeutsch: 'innen, hinein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Binoame',
    hochdeutsch: 'Beiname (Hofname)'
  },
  {
    artikel: '',
    plattdeutsch: 'biober',
    hochdeutsch: 'übrig'
  },
  {
    artikel: '',
    plattdeutsch: 'birten',
    hochdeutsch: 'etwas'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bischlöaper',
    hochdeutsch: 'Beischläfer'
  },
  {
    artikel: '',
    plattdeutsch: 'bisetten',
    hochdeutsch: 'dazusetzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bisetteschaaien',
    hochdeutsch: 'Aufsatzbrett vom Ackerwagen'
  },
  {
    artikel: '',
    plattdeutsch: 'bisiete',
    hochdeutsch: 'beiseite'
  },
  {
    artikel: '',
    plattdeutsch: 'bisse, bis diu',
    hochdeutsch: 'bist du'
  },
  {
    artikel: '',
    plattdeutsch: 'bisteken',
    hochdeutsch: 'Hinweis geben'
  },
  {
    artikel: '',
    plattdeutsch: 'bistoahn',
    hochdeutsch: 'beistehen, helfen'
  },
  {
    artikel: '',
    plattdeutsch: 'bistüen',
    hochdeutsch: 'beisteuern'
  },
  {
    artikel: '',
    plattdeutsch: 'biteo',
    hochdeutsch: 'nebenbei'
  },
  {
    artikel: '',
    plattdeutsch: 'biteogoahn',
    hochdeutsch: 'fremdgehen'
  },
  {
    artikel: '',
    plattdeutsch: 'bitiehen',
    hochdeutsch: 'beizeiten'
  },
  {
    artikel: '',
    plattdeutsch: 'bitiets',
    hochdeutsch: 'beizeiten'
  },
  {
    artikel: '',
    plattdeutsch: 'bitken',
    hochdeutsch: 'wenig, bisschen'
  },
  {
    artikel: '',
    plattdeutsch: 'bitterböase',
    hochdeutsch: 'bitterböse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Biuer',
    hochdeutsch: 'Bauer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Biueraaie',
    hochdeutsch: 'bäuerlicher Betrieb'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Biuernhoff',
    hochdeutsch: 'Bauernhof'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Biuerntrampel',
    hochdeutsch: 'Trottel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Biuk',
    hochdeutsch: 'Bauch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Biukpiene',
    hochdeutsch: 'Bauchschmerzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Biulen',
    hochdeutsch: 'Beule'
  },
  {
    artikel: '',
    plattdeutsch: 'biuten',
    hochdeutsch: 'draußen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Biutenwand',
    hochdeutsch: 'Außenwand'
  },
  {
    artikel: '',
    plattdeutsch: 'biwieten',
    hochdeutsch: 'beiweiten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Blaag (Blaach); de Bloargen',
    hochdeutsch: 'Kind'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Blackglass',
    hochdeutsch: 'Tintenfass'
  },
  {
    artikel: '',
    plattdeutsch: 'blackstärt',
    hochdeutsch: 'nackt'
  },
  {
    artikel: '',
    plattdeutsch: 'blaffen',
    hochdeutsch: 'kläffen'
  },
  {
    artikel: '',
    plattdeutsch: 'blahen',
    hochdeutsch: 'weinen, untröstlich heulen'
  },
  {
    artikel: '',
    plattdeutsch: 'blänken',
    hochdeutsch: 'glitzern, blinken, schimmern'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Blatt; de Bleare',
    hochdeutsch: 'Blatt am Baum'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Blatt (innen Bloae)',
    hochdeutsch: 'Tageszeitung (in der Tageszeitung)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Blattlius; de Blattlüse',
    hochdeutsch: 'Blattlaus'
  },
  {
    artikel: '',
    plattdeutsch: 'blau',
    hochdeutsch: 'blau'
  },
  {
    artikel: '',
    plattdeutsch: 'blaus',
    hochdeutsch: 'nur'
  },
  {
    artikel: '',
    plattdeutsch: 'blaut',
    hochdeutsch: 'bloß, unbedeckt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Bleck',
    hochdeutsch: 'Blech'
  },
  {
    artikel: '',
    plattdeutsch: 'bleckern',
    hochdeutsch: 'blechern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bleckschähen',
    hochdeutsch: 'Blechschere'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bleser',
    hochdeutsch: 'Bläser'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bleifehen',
    hochdeutsch: 'Bleistift'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bleike',
    hochdeutsch: 'Grasfläche zur Wäschebleiche'
  },
  {
    artikel: '',
    plattdeutsch: 'bleiken',
    hochdeutsch: 'bleichen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Bleikestück',
    hochdeutsch: 'Leinenballen, Leinenmaß'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bleomen',
    hochdeutsch: 'Blume'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bleomenbusk',
    hochdeutsch: 'Blumenstrauß'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bleomengoahen',
    hochdeutsch: 'Blumengarten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bleomenkaul',
    hochdeutsch: 'Blumenkohl'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Bleot',
    hochdeutsch: 'Blut'
  },
  {
    artikel: '',
    plattdeutsch: 'bleotoarm',
    hochdeutsch: 'blutarm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Blesse',
    hochdeutsch: 'Stirnzeichnung von Pferd und Kuh (weiß)'
  },
  {
    artikel: '',
    plattdeutsch: 'blieben',
    hochdeutsch: 'bleiben'
  },
  {
    artikel: '',
    plattdeutsch: 'bliend',
    hochdeutsch: 'blind'
  },
  {
    artikel: '',
    plattdeutsch: 'blienddoiken',
    hochdeutsch: 'Augen zubinden (bei scheuenTieren)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Blienefleigen',
    hochdeutsch: 'Stechfliege'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Blienekeoh',
    hochdeutsch: 'Blindekuh  (Kinderspiel)'
  },
  {
    artikel: '',
    plattdeutsch: 'blierken',
    hochdeutsch: 'bellen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Blierker',
    hochdeutsch: 'Beller  (ständig bellender Hund)'
  },
  {
    artikel: '',
    plattdeutsch: 'blitzeblank',
    hochdeutsch: 'sauber  (sehr sauber)'
  },
  {
    artikel: '',
    plattdeutsch: 'blitzen',
    hochdeutsch: 'betrinken'
  },
  {
    artikel: '',
    plattdeutsch: 'blitzen',
    hochdeutsch: 'glänzen'
  },
  {
    artikel: '',
    plattdeutsch: 'bloa',
    hochdeutsch: 'blau'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bloagen',
    hochdeutsch: 'Kinder'
  },
  {
    artikel: '',
    plattdeutsch: 'bloahen',
    hochdeutsch: 'blättern'
  },
  {
    artikel: '',
    plattdeutsch: 'bloaihen',
    hochdeutsch: 'blühen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bloasebaalg (Bloasebaalch)',
    hochdeutsch: 'Blasebalg'
  },
  {
    artikel: '',
    plattdeutsch: 'bloasen',
    hochdeutsch: 'blasen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bloasen',
    hochdeutsch: 'Blase'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Bloashörn',
    hochdeutsch: 'Blashorn'
  },
  {
    artikel: '',
    plattdeutsch: 'blöde',
    hochdeutsch: 'blöd'
  },
  {
    artikel: '',
    plattdeutsch: 'bloien',
    hochdeutsch: 'bluten'
  },
  {
    artikel: '',
    plattdeutsch: 'bloimerig',
    hochdeutsch: 'trüb (trübe Flüssigkeit)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Blombe',
    hochdeutsch: 'Plombe (Zahnfüllung)'
  },
  {
    artikel: '',
    plattdeutsch: 'bluchterig (bluchterich)',
    hochdeutsch: 'ungestüm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Boahn',
    hochdeutsch: 'Bahn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Boan',
    hochdeutsch: 'Beil'
  },
  {
    artikel: '',
    plattdeutsch: 'boan',
    hochdeutsch: 'baden'
  },
  {
    artikel: '',
    plattdeutsch: 'boarselig  (boarselich)',
    hochdeutsch: 'unachtsam'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Boarselkopp',
    hochdeutsch: 'Mensch, ungeschickt'
  },
  {
    artikel: '',
    plattdeutsch: 'boarsk',
    hochdeutsch: 'barfuß'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Boart',
    hochdeutsch: 'Bart'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Boartlicker',
    hochdeutsch: 'Schleimer, Speichellecker'
  },
  {
    artikel: '',
    plattdeutsch: 'bockbeinig',
    hochdeutsch: 'widerspenstig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Boiken',
    hochdeutsch: 'Buche'
  },
  {
    artikel: '',
    plattdeutsch: 'boistern',
    hochdeutsch: 'wegjagen'
  },
  {
    artikel: '',
    plattdeutsch: 'boiten',
    hochdeutsch: 'heizen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bokemührlen',
    hochdeutsch: 'Bokemühle (Hammerwerk zur Flachsbearbeitung)'
  },
  {
    artikel: '',
    plattdeutsch: 'bölken',
    hochdeutsch: 'schreien'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bölkeraaie',
    hochdeutsch: 'Geschrei'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Bölkewoater',
    hochdeutsch: 'Mineralwasser mit Kohlensäure'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bölkhaals',
    hochdeutsch: 'Schreihals'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bönsel',
    hochdeutsch: 'Junge (klein)'
  },
  {
    artikel: '',
    plattdeutsch: 'boom',
    hochdeutsch: 'oben'
  },
  {
    artikel: '',
    plattdeutsch: 'böase',
    hochdeutsch: 'böse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Böasewicht',
    hochdeutsch: 'Bösewicht'
  },
  {
    artikel: '',
    plattdeutsch: 'bossen',
    hochdeutsch: 'geborsten, aufgeplatzt'
  },
  {
    artikel: '',
    plattdeutsch: 'bössen',
    hochdeutsch: 'bürsten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bössen',
    hochdeutsch: 'Bürste'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bost; de Böste',
    hochdeutsch: 'Brust, Euter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bostkassen',
    hochdeutsch: 'Brustkasten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Botter',
    hochdeutsch: 'Butterbrot'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Botterbecken',
    hochdeutsch: 'Butterschale'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Botterbleomen',
    hochdeutsch: 'Löwenzahn'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Botterfatt; de Botterkaan',
    hochdeutsch: 'Butterfass (zur Butterherstellung)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bottermelk',
    hochdeutsch: 'Buttermilch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Bottermelksanballerßel',
    hochdeutsch: 'Buttermilchgericht mit Kartoffeln (Suppe/Eintopf)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bottermullen',
    hochdeutsch: 'Holzschale zum Kneten der Butter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bottern',
    hochdeutsch: 'Butter'
  },
  {
    artikel: '',
    plattdeutsch: 'bottern',
    hochdeutsch: 'buttern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Böxen',
    hochdeutsch: 'Hose'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Böxenschieter',
    hochdeutsch: 'Hosenscheißer, ängstlicher Mensch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Böxenwulf',
    hochdeutsch: 'Junge (klein)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Braaien',
    hochdeutsch: 'Ackerstück (sehr breit)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bracken',
    hochdeutsch: 'Kinder'
  },
  {
    artikel: '',
    plattdeutsch: 'bräet',
    hochdeutsch: 'breit'
  },
  {
    artikel: '',
    plattdeutsch: 'bräetbeinig',
    hochdeutsch: 'breitbeinig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bramm',
    hochdeutsch: 'Ginster'
  },
  {
    artikel: '',
    plattdeutsch: 'brammen',
    hochdeutsch: 'husten (trocken)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brand',
    hochdeutsch: 'Feuersbrunst, Vorrat an Heizmaterial, Durst (großer)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brandbreif',
    hochdeutsch: 'Bittbrief (sehr dringend)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brannewien',
    hochdeutsch: 'Branntwein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brassel',
    hochdeutsch: 'Aufgabenvielfalt, Wust'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brast',
    hochdeutsch: 'Zorn, Erregung'
  },
  {
    artikel: '',
    plattdeutsch: 'brästig (brästich)',
    hochdeutsch: 'breit, kräftig'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Braut; de Bröe',
    hochdeutsch: 'Brot'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brautkoorf',
    hochdeutsch: 'Brotkorb'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brautkossen',
    hochdeutsch: 'Brotkruste'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Brautmest',
    hochdeutsch: 'Brotmesser'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Brautwoater',
    hochdeutsch: 'Brotwasser (Getränk aus Wasser und Schwarzbrotstücke)'
  },
  {
    artikel: '',
    plattdeutsch: 'breken',
    hochdeutsch: 'brechen, erbrechen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Brekiesen',
    hochdeutsch: 'Brechstange'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bregen',
    hochdeutsch: 'Gehirn'
  },
  {
    artikel: '',
    plattdeutsch: 'bregenklürterig',
    hochdeutsch: 'vergesslich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bregenwost',
    hochdeutsch: 'Wurst mit Gehirn vom Schwein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Breif; de Breiwe',
    hochdeutsch: 'Brief'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Breifdiuben',
    hochdeutsch: 'Brieftaube, Brieftauben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Breifdreger',
    hochdeutsch: 'Briefträger'
  },
  {
    artikel: '',
    plattdeutsch: 'breitz',
    hochdeutsch: 'beinahe, fast'
  },
  {
    artikel: '',
    plattdeutsch: 'brennen',
    hochdeutsch: 'brennen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brenneraaie',
    hochdeutsch: 'Brennerei'
  },
  {
    artikel: '',
    plattdeutsch: 'brennerig  (brennerich)',
    hochdeutsch: 'Brenngeruch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Brennhult',
    hochdeutsch: 'Brennholz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brennniertel',
    hochdeutsch: 'Brennnessel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brennschähen',
    hochdeutsch: 'Brennschere'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brenntrogg (Brenntroch)',
    hochdeutsch: 'Holzwanne zum Enthaaren eines getöteten Schlachtschweins'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Breoer; de Broier',
    hochdeutsch: 'Bruder'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Breok',
    hochdeutsch: 'Bruch  (Feuchtwiesen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brerre',
    hochdeutsch: 'Breite'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Brett; de Breere',
    hochdeutsch: 'Brett'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brettsteohl',
    hochdeutsch: 'Brettstuhl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brickentwärnt',
    hochdeutsch: 'Stern mit Handzwirn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brill',
    hochdeutsch: 'Brille, Drahtkrampe im Schweinerüssel (Piercing), Klositz'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Brillenfeoer',
    hochdeutsch: 'Brillenetui'
  },
  {
    artikel: '',
    plattdeutsch: 'bringen',
    hochdeutsch: 'bringen'
  },
  {
    artikel: '',
    plattdeutsch: 'briuken',
    hochdeutsch: 'brauchen'
  },
  {
    artikel: '',
    plattdeutsch: 'briun',
    hochdeutsch: 'braun'
  },
  {
    artikel: '',
    plattdeutsch: 'Briusejoahre',
    hochdeutsch: 'Pubertät'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Briusen',
    hochdeutsch: 'Brause, Gießkannenvorsatz'
  },
  {
    artikel: '',
    plattdeutsch: 'briusen',
    hochdeutsch: 'brausen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Briut',
    hochdeutsch: 'Braut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Briutdisk',
    hochdeutsch: 'Hochzeitsgeschenketisch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Briutklärd',
    hochdeutsch: 'Brautkleid'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Briutlühe',
    hochdeutsch: 'Brautleute'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Briutpoar',
    hochdeutsch: 'Brautpaar'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Briutwoagen',
    hochdeutsch: 'Brautwagen mit Aussteuer (Wäsche, Möbel, Mitgift)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Broabiehen',
    hochdeutsch: 'Birnen (getrocknet)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Broabiehen teohaupepacken',
    hochdeutsch: 'Habe einpacken'
  },
  {
    artikel: '',
    plattdeutsch: 'broaen',
    hochdeutsch: 'braten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Broaen',
    hochdeutsch: 'Braten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Broaken',
    hochdeutsch: 'Flachsbrecher, Zweig (abgeschnitten)'
  },
  {
    artikel: '',
    plattdeutsch: 'broaken',
    hochdeutsch: 'Flachs brechen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Broakenkrüpers',
    hochdeutsch: 'Bohnenvariante (die an Ästen ranken kann)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Broakland',
    hochdeutsch: 'Brachland'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Broatappel',
    hochdeutsch: 'Bratapfel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Broatohmn',
    hochdeutsch: 'Bratofen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Broatpannen',
    hochdeutsch: 'Bratpfanne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brocken',
    hochdeutsch: 'Person (schwergewichtig), Sachen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brügamm',
    hochdeutsch: 'Bräutigam'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brüggen',
    hochdeutsch: 'Brücke'
  },
  {
    artikel: '',
    plattdeutsch: 'brühen',
    hochdeutsch: 'necken, veräppeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brummitten',
    hochdeutsch: 'Brombeeren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Brummkrüsel',
    hochdeutsch: 'Brummkreisel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bübbitten',
    hochdeutsch: 'Blaubeeren'
  },
  {
    artikel: '',
    plattdeutsch: 'bücken',
    hochdeutsch: 'bücken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Budding',
    hochdeutsch: 'Pudding'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Büen',
    hochdeutsch: 'Dachboden'
  },
  {
    artikel: '',
    plattdeutsch: 'bühen',
    hochdeutsch: 'heben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bühl; de Bühls',
    hochdeutsch: 'Beutel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'bühlt Mehl',
    hochdeutsch: 'Mehl (gesiebtes Weizenmehl)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bullenpiersel',
    hochdeutsch: 'Ochsenziemer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bullerbass',
    hochdeutsch: 'Mensch (grob und ungehobelt)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bullerböxen',
    hochdeutsch: 'Hose (weit)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bullerwoagen',
    hochdeutsch: 'Handwagen'
  },
  {
    artikel: '',
    plattdeutsch: 'bullsterig (bullsterich)',
    hochdeutsch: 'ungekämmt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bullsterkopp',
    hochdeutsch: 'Wuschelkopf'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Bullweerk',
    hochdeutsch: 'Hand- und Spanndienste für die Kommune (unentgeltlich)'
  },
  {
    artikel: '',
    plattdeutsch: 'bullweerken',
    hochdeutsch: 'arbeiten für das Gemeinwesen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bult; de Bülte',
    hochdeutsch: 'grasbewachsene Stelle im sumpfigen Gelände (inselhaft)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bulten',
    hochdeutsch: 'Bolzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bulthütten',
    hochdeutsch: 'Behausung (baufällig)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bulzen',
    hochdeutsch: 'Kater'
  },
  {
    artikel: '',
    plattdeutsch: 'bündken',
    hochdeutsch: 'wickeln (Windeln)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bunken',
    hochdeutsch: 'Erdklumpen (grobe)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bünsel',
    hochdeutsch: 'Rind oder Bulle (Stufe nach dem Kalb)'
  },
  {
    artikel: '',
    plattdeutsch: 'bunt',
    hochdeutsch: 'bunt, unerträglich'
  },
  {
    artikel: '',
    plattdeutsch: 'bunt moaken',
    hochdeutsch: 'schmücken, kränzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Burch',
    hochdeutsch: 'Eber (kastriert)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Burchpiersel',
    hochdeutsch: 'Geschlechtsteil vom kastrierten Eber'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bürgel',
    hochdeutsch: 'Bügel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bürgelkoorf',
    hochdeutsch: 'Bügelkorb'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Burrei',
    hochdeutsch: 'Porree'
  },
  {
    artikel: '',
    plattdeutsch: 'burseln',
    hochdeutsch: 'wühlen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Bus',
    hochdeutsch: 'Bus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Busk; de Büske',
    hochdeutsch: 'Busch, Strauch, Waldstück (klein)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Büssen',
    hochdeutsch: 'Buchse, Blechdose'
  },
  {
    artikel: '',
    plattdeutsch: 'butt',
    hochdeutsch: 'schlimm'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Buttenne',
    hochdeutsch: 'Wurst im Dickdarm'
  },
  {
    artikel: '',
    plattdeutsch: 'butz',
    hochdeutsch: 'sofort'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Butz',
    hochdeutsch: 'Friseur'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Chriskiend',
    hochdeutsch: 'Christkind'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Chriskindken',
    hochdeutsch: 'Christkindchen, Weihnachtsgeschenk'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Christ',
    hochdeutsch: 'Christ'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Cloon',
    hochdeutsch: 'Clown'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Colon',
    hochdeutsch: 'Kleinbauer'
  },
  {
    artikel: '',
    plattdeutsch: 'daaien',
    hochdeutsch: 'tauen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Daaiet',
    hochdeutsch: 'Tier oder Mensch (widerspenstig)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Dack; de Däcker (uppen Doake)',
    hochdeutsch: 'Dach (auf dem Dach)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dackpannen',
    hochdeutsch: 'Dachziegel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dackrennen',
    hochdeutsch: 'Dachrinne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dacksteohl',
    hochdeutsch: 'Dachstuhl'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Dackstrauh',
    hochdeutsch: 'Langstroh für Strohdächer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dagg (Dach); de Doage',
    hochdeutsch: 'Tag'
  },
  {
    artikel: '',
    plattdeutsch: 'dämpen',
    hochdeutsch: 'dämpfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dämper',
    hochdeutsch: 'Kartoffeldämpfer'
  },
  {
    artikel: '',
    plattdeutsch: 'dämpig (dämpich)',
    hochdeutsch: 'asthmatisch (in der Regel bei Pferden)'
  },
  {
    artikel: '',
    plattdeutsch: 'dampen',
    hochdeutsch: 'dampfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Damp',
    hochdeutsch: 'Dampf'
  },
  {
    artikel: '',
    plattdeutsch: 'danken',
    hochdeutsch: 'danken'
  },
  {
    artikel: '',
    plattdeutsch: 'danne',
    hochdeutsch: 'fit, entwickelt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dannen',
    hochdeutsch: 'Tanne, Fichte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dannenappel',
    hochdeutsch: 'Tannenzapfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dannenbaum',
    hochdeutsch: 'Tannenbaum'
  },
  {
    artikel: '',
    plattdeutsch: 'danzen',
    hochdeutsch: 'tanzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dassel',
    hochdeutsch: 'Schädel'
  },
  {
    artikel: '',
    plattdeutsch: 'dat',
    hochdeutsch: 'das'
  },
  {
    artikel: '',
    plattdeutsch: 'datt',
    hochdeutsch: 'dass'
  },
  {
    artikel: '',
    plattdeutsch: 'dau',
    hochdeutsch: 'damals (zu dem Zeitpunkt), da'
  },
  {
    artikel: '',
    plattdeutsch: 'daumoals',
    hochdeutsch: 'damals'
  },
  {
    artikel: '',
    plattdeutsch: 'dauf',
    hochdeutsch: 'taub'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Daut',
    hochdeutsch: 'Tod'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Daute; de Dohen',
    hochdeutsch: 'Tote'
  },
  {
    artikel: '',
    plattdeutsch: 'daute',
    hochdeutsch: 'tot'
  },
  {
    artikel: '',
    plattdeutsch: 'de',
    hochdeutsch: 'der, die'
  },
  {
    artikel: '',
    plattdeutsch: 'decken',
    hochdeutsch: 'decken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Deken',
    hochdeutsch: 'Decke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Deel',
    hochdeutsch: 'Diele'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Deetz',
    hochdeutsch: 'Kopf'
  },
  {
    artikel: '',
    plattdeutsch: 'dehen',
    hochdeutsch: 'den, denen, deren, dessen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Deif; de Deibe',
    hochdeutsch: 'Dieb'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Deig  (Deich)',
    hochdeutsch: 'Teig'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Deil; de Deile',
    hochdeutsch: 'Teil'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Deil',
    hochdeutsch: 'Ackerstück'
  },
  {
    artikel: '',
    plattdeutsch: 'deilen',
    hochdeutsch: 'teilen'
  },
  {
    artikel: '',
    plattdeutsch: 'deinen',
    hochdeutsch: 'dienen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Deiner',
    hochdeutsch: 'Diener'
  },
  {
    artikel: '',
    plattdeutsch: 'deipe',
    hochdeutsch: 'tief'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Deipte',
    hochdeutsch: 'Tiefe'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Dell',
    hochdeutsch: 'Hornhaut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dellen',
    hochdeutsch: 'Delle'
  },
  {
    artikel: '',
    plattdeutsch: 'dem',
    hochdeutsch: 'dem'
  },
  {
    artikel: '',
    plattdeutsch: 'den',
    hochdeutsch: 'den, dem'
  },
  {
    artikel: '',
    plattdeutsch: 'denken',
    hochdeutsch: 'denken'
  },
  {
    artikel: '',
    plattdeutsch: 'denken helpen',
    hochdeutsch: 'erinnern'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Denkmoal',
    hochdeutsch: 'Denkmal'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Denkziertel',
    hochdeutsch: 'Denkzettel'
  },
  {
    artikel: '',
    plattdeutsch: 'denn',
    hochdeutsch: 'dann, denn'
  },
  {
    artikel: '',
    plattdeutsch: 'denne (Goah dor denne!)',
    hochdeutsch: 'weg'
  },
  {
    artikel: '',
    plattdeutsch: 'denne (Wo kumms diu denne?)',
    hochdeutsch: 'her'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Deoh',
    hochdeutsch: 'Tau'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Deok; de Doiker',
    hochdeutsch: 'Tuch'
  },
  {
    artikel: '',
    plattdeutsch: 'deon',
    hochdeutsch: ''
  },
  {
    artikel: 'eck deo                   döa       häbbe doan',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu döas                  döes     häss doan',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et döat       döa       häff doan',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei deot        döen     häbb doan',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'tun',
    hochdeutsch: ''
  },
  {
    artikel: 'ich tue                      tat             habe getan',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du tust                      tatest',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es tut            tat',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir tun ...                  taten ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dezember',
    hochdeutsch: 'Dezember'
  },
  {
    artikel: '',
    plattdeutsch: 'di',
    hochdeutsch: 'dir, dich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dibbel',
    hochdeutsch: 'Dibbelmaschine'
  },
  {
    artikel: '',
    plattdeutsch: 'dibbeln',
    hochdeutsch: 'säen mit der Dibbelmaschine'
  },
  {
    artikel: '',
    plattdeutsch: 'dichte',
    hochdeutsch: 'dicht'
  },
  {
    artikel: '',
    plattdeutsch: 'dicke',
    hochdeutsch: 'dick, betrunken'
  },
  {
    artikel: '',
    plattdeutsch: 'dickköppig (dickköppich)',
    hochdeutsch: 'dickköpfig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dickkopp',
    hochdeutsch: 'Dickkopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Diek',
    hochdeutsch: 'Teich'
  },
  {
    artikel: '',
    plattdeutsch: 'dien',
    hochdeutsch: 'dein'
  },
  {
    artikel: '',
    plattdeutsch: 'diene',
    hochdeutsch: 'deine'
  },
  {
    artikel: '',
    plattdeutsch: 'dienen',
    hochdeutsch: 'deinen, deinem'
  },
  {
    artikel: '',
    plattdeutsch: 'dierbesk',
    hochdeutsch: 'schwindelig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dierlen',
    hochdeutsch: 'Fußbodenbretter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dießel',
    hochdeutsch: 'Distel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dießen',
    hochdeutsch: 'Deichsel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dießenstock',
    hochdeutsch: 'Deichselstock (Eisenbolzen zur Befestigung des Schwengels)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Diktoat',
    hochdeutsch: 'Diktat'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ding',
    hochdeutsch: 'Ding'
  },
  {
    artikel: '',
    plattdeutsch: 'Dingens',
    hochdeutsch: 'Füllwort bei Wortfindungsstörungen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dingesdagg  (Dingesdach)',
    hochdeutsch: 'Dienstag'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Disk',
    hochdeutsch: 'Tisch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Diskdeken',
    hochdeutsch: 'Tischdecke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Disker',
    hochdeutsch: 'Tischler'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Diskeraaie',
    hochdeutsch: 'Tischlerei'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Diskloaken',
    hochdeutsch: 'Tischtuch (lang)'
  },
  {
    artikel: '',
    plattdeutsch: 'diu',
    hochdeutsch: 'du'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Diuben',
    hochdeutsch: 'Taube'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Diuer',
    hochdeutsch: 'Dauer'
  },
  {
    artikel: '',
    plattdeutsch: 'diuern',
    hochdeutsch: 'dauern'
  },
  {
    artikel: '',
    plattdeutsch: 'diuken',
    hochdeutsch: 'tauchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Diumen',
    hochdeutsch: 'Daumen'
  },
  {
    artikel: '',
    plattdeutsch: 'diune',
    hochdeutsch: 'betrunken'
  },
  {
    artikel: '',
    plattdeutsch: 'diusend',
    hochdeutsch: 'tausend'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Doageblatt',
    hochdeutsch: 'Tageszeitung'
  },
  {
    artikel: '',
    plattdeutsch: 'doagelang',
    hochdeutsch: 'tagelang'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Doageslicht',
    hochdeutsch: 'Tageslicht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Doagestiet',
    hochdeutsch: 'Tageszeit'
  },
  {
    artikel: '',
    plattdeutsch: 'doal',
    hochdeutsch: 'runter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Doaler',
    hochdeutsch: 'Taler'
  },
  {
    artikel: '',
    plattdeutsch: 'doalknaaien',
    hochdeutsch: 'hinknien'
  },
  {
    artikel: '',
    plattdeutsch: 'doameln',
    hochdeutsch: 'herumhampeln'
  },
  {
    artikel: '',
    plattdeutsch: 'dor',
    hochdeutsch: 'dort, da'
  },
  {
    artikel: '',
    plattdeutsch: 'dorachter',
    hochdeutsch: 'dahinter'
  },
  {
    artikel: '',
    plattdeutsch: 'doran',
    hochdeutsch: 'daran'
  },
  {
    artikel: '',
    plattdeutsch: 'dorbi',
    hochdeutsch: 'dabei'
  },
  {
    artikel: '',
    plattdeutsch: 'dorfür',
    hochdeutsch: 'dafür'
  },
  {
    artikel: '',
    plattdeutsch: 'dorhenn',
    hochdeutsch: 'dahin'
  },
  {
    artikel: '',
    plattdeutsch: 'dorin',
    hochdeutsch: 'darin'
  },
  {
    artikel: '',
    plattdeutsch: 'dormiehe',
    hochdeutsch: 'damit'
  },
  {
    artikel: '',
    plattdeutsch: 'dornoa',
    hochdeutsch: 'danach'
  },
  {
    artikel: '',
    plattdeutsch: 'dorrober',
    hochdeutsch: 'darüber'
  },
  {
    artikel: '',
    plattdeutsch: 'dorrümme',
    hochdeutsch: 'darum'
  },
  {
    artikel: '',
    plattdeutsch: 'dorrünner',
    hochdeutsch: 'darunter'
  },
  {
    artikel: '',
    plattdeutsch: 'dorteo',
    hochdeutsch: 'dazu'
  },
  {
    artikel: '',
    plattdeutsch: 'dortiergen',
    hochdeutsch: 'daneben'
  },
  {
    artikel: '',
    plattdeutsch: 'dorrup',
    hochdeutsch: 'darauf'
  },
  {
    artikel: '',
    plattdeutsch: 'dorvan',
    hochdeutsch: 'davon'
  },
  {
    artikel: '',
    plattdeutsch: 'dorvür',
    hochdeutsch: 'davor'
  },
  {
    artikel: '',
    plattdeutsch: 'doch',
    hochdeutsch: 'doch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Docken',
    hochdeutsch: 'Strohbündel zur Abdichtung unter den Dachziegeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dohen',
    hochdeutsch: 'Toten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dohenfiehe',
    hochdeutsch: 'Totensonntag'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dohengreber',
    hochdeutsch: 'Totengräber'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Dohenhiermd',
    hochdeutsch: 'Totenhemd'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dohenklocken',
    hochdeutsch: 'Totenglocke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dohenkopp',
    hochdeutsch: 'Totenkopf'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Dohenriek',
    hochdeutsch: 'Totenreich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dohenschien',
    hochdeutsch: 'Totenschein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dohensönndagg (Dohensönndach)',
    hochdeutsch: 'Totensonntag'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dohenvurgel',
    hochdeutsch: 'Eule'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dohenwoagen',
    hochdeutsch: 'Totenwagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dohenwoake',
    hochdeutsch: 'Totenwache'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Doikershund',
    hochdeutsch: 'Mensch (arglistig, durchtrieben)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dokter',
    hochdeutsch: 'Arzt'
  },
  {
    artikel: '',
    plattdeutsch: 'doktern',
    hochdeutsch: 'verarzten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Döllmer',
    hochdeutsch: 'Mensch (verspielt, tollpatschig, albern)'
  },
  {
    artikel: '',
    plattdeutsch: 'döllmern',
    hochdeutsch: 'blödeln, schimpfen (lauthals)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dönekens',
    hochdeutsch: 'Anekdote, spaßige Geschichte'
  },
  {
    artikel: '',
    plattdeutsch: 'donne biehe',
    hochdeutsch: 'nahe bei'
  },
  {
    artikel: '',
    plattdeutsch: 'donnehaulen',
    hochdeutsch: 'festhalten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dönner',
    hochdeutsch: 'Donner'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dönnerbaalken',
    hochdeutsch: 'einfache Toilette, offene Grube mit Sitzbalken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dönnerdagg (Dönnerdach)',
    hochdeutsch: 'Donnerstag'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dönnergürte',
    hochdeutsch: 'Starkregen bei Gewitter'
  },
  {
    artikel: '',
    plattdeutsch: 'dönnern',
    hochdeutsch: 'donnern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dönnerschlagg (Dönnerschlach)',
    hochdeutsch: 'Donnerschlag, Mensch voller Streiche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dooen',
    hochdeutsch: 'Dornen'
  },
  {
    artikel: '',
    plattdeutsch: 'doof',
    hochdeutsch: 'doof, gefühllos'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Door',
    hochdeutsch: 'Tor'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Doorp; de Döörper',
    hochdeutsch: 'Dorf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Döörper',
    hochdeutsch: 'Bewohner im Ortskern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dopp; de Döppe',
    hochdeutsch: 'Fingerkuppe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Doppelender',
    hochdeutsch: 'schweres Kalb'
  },
  {
    artikel: '',
    plattdeutsch: 'döppen',
    hochdeutsch: 'untertauchen (jemanden aus Spaß untertauchen)'
  },
  {
    artikel: '',
    plattdeutsch: 'dörlk',
    hochdeutsch: 'überdreht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dörpe',
    hochdeutsch: 'Taufe'
  },
  {
    artikel: '',
    plattdeutsch: 'dörpen',
    hochdeutsch: 'taufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dörpstein',
    hochdeutsch: 'Taufstein'
  },
  {
    artikel: '',
    plattdeutsch: 'dösig',
    hochdeutsch: 'begriffstutzig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Döskopp',
    hochdeutsch: 'Dummkopf, Trottel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dösskekerl',
    hochdeutsch: 'Maschinist und Aufseher beim Dreschen mit der Dreschmaschine'
  },
  {
    artikel: '',
    plattdeutsch: 'dössken',
    hochdeutsch: 'dreschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dössker',
    hochdeutsch: 'Dreschmaschine'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Döst',
    hochdeutsch: 'Durst'
  },
  {
    artikel: '',
    plattdeutsch: 'draaihen',
    hochdeutsch: 'drehen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Drachloaken',
    hochdeutsch: 'Tuch (zum Tragen von Heu, Gras und Runkelblätter)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Drangfüllen',
    hochdeutsch: 'Schöpfkelle (für Schweinefutter)'
  },
  {
    artikel: '',
    plattdeutsch: 'Dreck',
    hochdeutsch: 'Dreck, Schmutz'
  },
  {
    artikel: '',
    plattdeutsch: 'dreckig',
    hochdeutsch: 'dreckig, schmutzig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dreckschüppen',
    hochdeutsch: 'Kehrblech'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dreffsand',
    hochdeutsch: 'Treibsand'
  },
  {
    artikel: '',
    plattdeutsch: 'dregen',
    hochdeutsch: 'tragen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dreger',
    hochdeutsch: 'Träger (tragendes Element auf dem Bau)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dreger',
    hochdeutsch: 'Sargträger'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dreitimpen',
    hochdeutsch: 'Dreieck (in der Regel ein Grundstück)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dreom',
    hochdeutsch: 'Traum'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dreoßel',
    hochdeutsch: 'Frau (trottelige, verschrobene)'
  },
  {
    artikel: '',
    plattdeutsch: 'drepen',
    hochdeutsch: 'treffen'
  },
  {
    artikel: '',
    plattdeutsch: 'drieben',
    hochdeutsch: 'treiben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Drieber',
    hochdeutsch: 'Treiber'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Driefhius',
    hochdeutsch: 'Treibhaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Driefjagd',
    hochdeutsch: 'Treibjagd'
  },
  {
    artikel: '',
    plattdeutsch: 'drieste',
    hochdeutsch: 'dreist'
  },
  {
    artikel: '',
    plattdeutsch: 'drinken',
    hochdeutsch: 'trinken'
  },
  {
    artikel: '',
    plattdeutsch: 'dröage',
    hochdeutsch: 'trocken'
  },
  {
    artikel: '',
    plattdeutsch: 'dröage Schwetzken',
    hochdeutsch: 'Backpflaumen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dröagebäcker',
    hochdeutsch: 'Mensch (humorlos)'
  },
  {
    artikel: '',
    plattdeutsch: 'dröagen',
    hochdeutsch: 'trocknen'
  },
  {
    artikel: '',
    plattdeutsch: 'dröahen',
    hochdeutsch: 'drahten (Schweineschnauze mit Krampen versehen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Droaht; de Dröahe',
    hochdeutsch: 'Draht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Droahtbössen',
    hochdeutsch: 'Drahtbürste'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Droahtirsel',
    hochdeutsch: 'Fahrrad'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Droahtwurm',
    hochdeutsch: 'Drahtwurm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Droaken',
    hochdeutsch: 'Erpel (männliche Ente)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dreoßel',
    hochdeutsch: 'Drossel (der Singvogel)'
  },
  {
    artikel: '',
    plattdeutsch: 'droff',
    hochdeutsch: 'darf'
  },
  {
    artikel: '',
    plattdeutsch: 'drömmen',
    hochdeutsch: 'träumen'
  },
  {
    artikel: '',
    plattdeutsch: 'drücken',
    hochdeutsch: 'drücken'
  },
  {
    artikel: '',
    plattdeutsch: 'drüesken',
    hochdeutsch: 'dösen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Druffel',
    hochdeutsch: 'Ansammlung auf engem Raum (Menschen, Tiere)'
  },
  {
    artikel: '',
    plattdeutsch: 'drupp',
    hochdeutsch: 'drauf'
  },
  {
    artikel: '',
    plattdeutsch: 'drüppen',
    hochdeutsch: 'tropfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Drüppen',
    hochdeutsch: 'Tropfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Drüppenfaal',
    hochdeutsch: 'Tropfenfall (bei fehlender Dachrinne)'
  },
  {
    artikel: '',
    plattdeutsch: 'drürben',
    hochdeutsch: 'dürfen'
  },
  {
    artikel: '',
    plattdeutsch: 'drürmelig (drürmelich)',
    hochdeutsch: 'langsam'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Drürmelpott',
    hochdeutsch: 'Bummelant'
  },
  {
    artikel: '',
    plattdeutsch: 'drürseln',
    hochdeutsch: 'dösen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Drüttel',
    hochdeutsch: 'Drittel'
  },
  {
    artikel: '',
    plattdeutsch: 'dubbelt',
    hochdeutsch: 'doppelt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dübel',
    hochdeutsch: 'Teufel'
  },
  {
    artikel: '',
    plattdeutsch: 'düchtig (düchtich)',
    hochdeutsch: 'tüchtig'
  },
  {
    artikel: '',
    plattdeutsch: 'düen',
    hochdeutsch: 'deuten'
  },
  {
    artikel: '',
    plattdeutsch: 'düenanner',
    hochdeutsch: 'verwirrt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Düenanner',
    hochdeutsch: 'Eintopf'
  },
  {
    artikel: '',
    plattdeutsch: 'dull',
    hochdeutsch: 'doll, heftig, toll'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Dullhius',
    hochdeutsch: 'Irrenhaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dümling',
    hochdeutsch: 'Däumling (Verbandsschutz für Finger)'
  },
  {
    artikel: '',
    plattdeutsch: 'dumm',
    hochdeutsch: 'dumm'
  },
  {
    artikel: '',
    plattdeutsch: 'dummdrieste',
    hochdeutsch: 'dummdreist'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dümmerwiend',
    hochdeutsch: 'Wind aus der Richtung vom Dümmer See (Nordwestwind)'
  },
  {
    artikel: '',
    plattdeutsch: 'dummet Tügg (dummet Tüch)',
    hochdeutsch: 'dummes Zeug'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dummhert',
    hochdeutsch: 'Dummheit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dummkopp',
    hochdeutsch: 'Dummkopf'
  },
  {
    artikel: '',
    plattdeutsch: 'dumpen',
    hochdeutsch: 'ersticken'
  },
  {
    artikel: '',
    plattdeutsch: 'dumpig (dumpich)',
    hochdeutsch: 'stickig'
  },
  {
    artikel: '',
    plattdeutsch: 'dünig (dünich)',
    hochdeutsch: 'dickköpfig, uneinsichtig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dünkel',
    hochdeutsch: 'Stolz'
  },
  {
    artikel: '',
    plattdeutsch: 'dünne',
    hochdeutsch: 'dünn (spärlich)'
  },
  {
    artikel: '',
    plattdeutsch: 'dür',
    hochdeutsch: 'dadurch, durch, teuer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dür; de Dürs',
    hochdeutsch: 'Tür'
  },
  {
    artikel: '',
    plattdeutsch: 'dürbieten',
    hochdeutsch: 'durchbeißen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dürbogen',
    hochdeutsch: 'Türbogen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürbreken',
    hochdeutsch: 'durchbrechen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürbrennen',
    hochdeutsch: 'durchbrennen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürbringen',
    hochdeutsch: 'durchbringen, vergeuden, hindurchretten'
  },
  {
    artikel: '',
    plattdeutsch: 'dürdeilen',
    hochdeutsch: 'durchteilen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürdenken',
    hochdeutsch: 'durchdenken'
  },
  {
    artikel: '',
    plattdeutsch: 'dürdraaihen',
    hochdeutsch: 'durchdrehen (Nervenzusammenbruch)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dürfall',
    hochdeutsch: 'Durchfall'
  },
  {
    artikel: '',
    plattdeutsch: 'dürfechten',
    hochdeutsch: 'durchfechten'
  },
  {
    artikel: '',
    plattdeutsch: 'dürfeoern',
    hochdeutsch: 'durchfuttern'
  },
  {
    artikel: '',
    plattdeutsch: 'dürfienen',
    hochdeutsch: 'durchfinden'
  },
  {
    artikel: '',
    plattdeutsch: 'dürfreisen',
    hochdeutsch: 'durchfrieren'
  },
  {
    artikel: '',
    plattdeutsch: 'dürfreten',
    hochdeutsch: 'durchfressen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürgallern',
    hochdeutsch: 'durchregnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dürgang',
    hochdeutsch: 'Durchgang'
  },
  {
    artikel: '',
    plattdeutsch: 'Dürgung (geoen)',
    hochdeutsch: 'Verdauung (gute)'
  },
  {
    artikel: '',
    plattdeutsch: 'dürgen',
    hochdeutsch: 'taugen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürgoahn',
    hochdeutsch: 'durchgehen (Pferde)'
  },
  {
    artikel: '',
    plattdeutsch: 'dürgriepen',
    hochdeutsch: 'durchgreifen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dürgriff',
    hochdeutsch: 'Türgriff'
  },
  {
    artikel: '',
    plattdeutsch: 'dürhaulen',
    hochdeutsch: 'durchhalten'
  },
  {
    artikel: '',
    plattdeutsch: 'dürheer',
    hochdeutsch: 'durcheinander (verwirrt)'
  },
  {
    artikel: '',
    plattdeutsch: 'dürhelpen',
    hochdeutsch: 'durchhelfen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Dürhäng',
    hochdeutsch: 'Türscharnier'
  },
  {
    artikel: '',
    plattdeutsch: 'dürkieken',
    hochdeutsch: 'durchblicken (verstehen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dürklinken',
    hochdeutsch: 'Türklinke'
  },
  {
    artikel: '',
    plattdeutsch: 'dürkriupen',
    hochdeutsch: 'durchkriechen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürkurm',
    hochdeutsch: 'durchkommen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dürl',
    hochdeutsch: 'Eidotter'
  },
  {
    artikel: '',
    plattdeutsch: 'dürlasken',
    hochdeutsch: 'verprügeln'
  },
  {
    artikel: '',
    plattdeutsch: 'dürlaupen',
    hochdeutsch: 'durchlaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürleigen',
    hochdeutsch: 'durchlügen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürliggen',
    hochdeutsch: 'durchliegen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürloaten',
    hochdeutsch: 'durchlassen, verprügeln'
  },
  {
    artikel: '',
    plattdeutsch: 'dürmessen',
    hochdeutsch: 'durchfeuchtet'
  },
  {
    artikel: '',
    plattdeutsch: 'dürmoaken',
    hochdeutsch: 'durchmachen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürnaaihen',
    hochdeutsch: 'durchnähen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürnaaien',
    hochdeutsch: 'verprügeln'
  },
  {
    artikel: '',
    plattdeutsch: 'dürnierm',
    hochdeutsch: 'durchnehmen (über etwas tratschen)'
  },
  {
    artikel: '',
    plattdeutsch: 'dürpatken',
    hochdeutsch: 'hindurchpatschen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürquelen',
    hochdeutsch: 'hindurchquälen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürreengen',
    hochdeutsch: 'durchregnen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürrieten',
    hochdeutsch: 'durchreißen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürroihen',
    hochdeutsch: 'durchrühren'
  },
  {
    artikel: '',
    plattdeutsch: 'dürsaaihen',
    hochdeutsch: 'durchseihen, filtern'
  },
  {
    artikel: '',
    plattdeutsch: 'dürscheiten',
    hochdeutsch: 'durchschießen (Pflanzenschosser, Fäden beim Weben)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dürschlagg  (Dürschlach)',
    hochdeutsch: 'Durchschlag (Sieb)'
  },
  {
    artikel: '',
    plattdeutsch: 'dürschloan',
    hochdeutsch: 'durchschlagen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürschloapen',
    hochdeutsch: 'durchschlafen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürsetten',
    hochdeutsch: 'durchsetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'dürsierben',
    hochdeutsch: 'durchsieben'
  },
  {
    artikel: '',
    plattdeutsch: 'dürsoiken',
    hochdeutsch: 'durchsuchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dürstänner',
    hochdeutsch: 'Türständer für 2-flg. Tür'
  },
  {
    artikel: '',
    plattdeutsch: 'dürwossen',
    hochdeutsch: 'durchwachsen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'dürwossen Speck',
    hochdeutsch: 'durchwachsener Speck'
  },
  {
    artikel: '',
    plattdeutsch: 'düsse',
    hochdeutsch: 'diese, dieser'
  },
  {
    artikel: '',
    plattdeutsch: 'düsse Doage',
    hochdeutsch: 'dieser Tage (kürzlich)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dussel',
    hochdeutsch: 'Dummkopf'
  },
  {
    artikel: '',
    plattdeutsch: 'Dussel hat',
    hochdeutsch: 'Glück gehabt'
  },
  {
    artikel: '',
    plattdeutsch: 'düsset',
    hochdeutsch: 'dieses'
  },
  {
    artikel: '',
    plattdeutsch: 'düster',
    hochdeutsch: 'dunkel'
  },
  {
    artikel: '',
    plattdeutsch: 'dütsk',
    hochdeutsch: 'deutsch'
  },
  {
    artikel: '',
    plattdeutsch: 'Dütskland',
    hochdeutsch: 'Deutschland'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dutt',
    hochdeutsch: 'Haarknoten'
  },
  {
    artikel: '',
    plattdeutsch: 'dütt',
    hochdeutsch: 'dies, dieses'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Dutk',
    hochdeutsch: 'Bett (eingebaut)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Dutzend',
    hochdeutsch: 'Dutzend (12 Stück)'
  },
  {
    artikel: '',
    plattdeutsch: 'ebens',
    hochdeutsch: 'möglichst'
  },
  {
    artikel: '',
    plattdeutsch: 'echte',
    hochdeutsch: 'echt, ehrlich'
  },
  {
    artikel: '',
    plattdeutsch: 'eck',
    hochdeutsch: 'ich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ecke',
    hochdeutsch: 'Ecke, Gegend'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Eckhius',
    hochdeutsch: 'Eckhaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Eeln',
    hochdeutsch: 'Elle (altes Längenmaß)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Eelnbogen',
    hochdeutsch: 'Ellenbogen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Eerbe',
    hochdeutsch: 'Erbe'
  },
  {
    artikel: '',
    plattdeutsch: 'eerben',
    hochdeutsch: 'erben'
  },
  {
    artikel: '',
    plattdeutsch: 'eergelik',
    hochdeutsch: 'ärgerlich'
  },
  {
    artikel: '',
    plattdeutsch: 'eergen',
    hochdeutsch: 'ärgern (sich ärgern)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Eerger',
    hochdeutsch: 'Ärger'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Egen',
    hochdeutsch: 'Egge'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Egentienen',
    hochdeutsch: 'Eggenzinken'
  },
  {
    artikel: '',
    plattdeutsch: 'eggen',
    hochdeutsch: 'eggen'
  },
  {
    artikel: '',
    plattdeutsch: 'egoal',
    hochdeutsch: 'egal'
  },
  {
    artikel: '',
    plattdeutsch: 'egoalwegg (egoalwech)',
    hochdeutsch: 'andauernd'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ehrfen',
    hochdeutsch: 'Erbsen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ehrfenbroaken',
    hochdeutsch: 'Äste (an denen die Erbsen hochranken können)'
  },
  {
    artikel: '',
    plattdeutsch: 'eigen',
    hochdeutsch: 'empfindlich, wählerisch'
  },
  {
    artikel: '',
    plattdeutsch: 'eigene',
    hochdeutsch: 'eigene'
  },
  {
    artikel: '',
    plattdeutsch: 'eigentlik',
    hochdeutsch: 'eigentlich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Eiken',
    hochdeutsch: 'Eiche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Eikkatten',
    hochdeutsch: 'Eichhörnchen'
  },
  {
    artikel: '',
    plattdeutsch: 'ein up anner',
    hochdeutsch: 'aufeinander, immer wieder'
  },
  {
    artikel: '',
    plattdeutsch: 'einen',
    hochdeutsch: 'einen, einem'
  },
  {
    artikel: '',
    plattdeutsch: 'einer',
    hochdeutsch: 'einer, jemand'
  },
  {
    artikel: '',
    plattdeutsch: 'einfach',
    hochdeutsch: 'einfach'
  },
  {
    artikel: '',
    plattdeutsch: 'einige',
    hochdeutsch: 'einige'
  },
  {
    artikel: '',
    plattdeutsch: 'einigermoaten',
    hochdeutsch: 'einigermaßen'
  },
  {
    artikel: '',
    plattdeutsch: 'einsoam',
    hochdeutsch: 'einsam'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Einspänner',
    hochdeutsch: 'Einspänner'
  },
  {
    artikel: '',
    plattdeutsch: 'eis',
    hochdeutsch: 'einmal'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Elefant',
    hochdeutsch: 'Elefant'
  },
  {
    artikel: '',
    plattdeutsch: 'elben',
    hochdeutsch: 'elf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Elk',
    hochdeutsch: 'Iltis'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ellern',
    hochdeutsch: 'Erle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Elm',
    hochdeutsch: 'Erdstaub'
  },
  {
    artikel: '',
    plattdeutsch: 'en',
    hochdeutsch: 'ein, einen'
  },
  {
    artikel: '',
    plattdeutsch: 'endlik',
    hochdeutsch: 'endlich'
  },
  {
    artikel: '',
    plattdeutsch: 'enge',
    hochdeutsch: 'eng'
  },
  {
    artikel: '',
    plattdeutsch: 'engeböstig (engeböstich)',
    hochdeutsch: 'kurzatmig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Enkel',
    hochdeutsch: 'Knöchel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Enne',
    hochdeutsch: 'Ende'
  },
  {
    artikel: '',
    plattdeutsch: 'entloaten',
    hochdeutsch: 'entlassen'
  },
  {
    artikel: '',
    plattdeutsch: 'entschliuten',
    hochdeutsch: 'entschließen'
  },
  {
    artikel: '',
    plattdeutsch: 'enzeln',
    hochdeutsch: 'einzeln'
  },
  {
    artikel: '',
    plattdeutsch: 'erfienen',
    hochdeutsch: 'erfinden'
  },
  {
    artikel: '',
    plattdeutsch: 'ernst',
    hochdeutsch: 'ernst'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ernst',
    hochdeutsch: 'Ernst'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ernst',
    hochdeutsch: 'Ferkel bzw. Schwein (in der Entwicklung zurückgeblieben)'
  },
  {
    artikel: '',
    plattdeutsch: 'ersetten',
    hochdeutsch: 'ersetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'es',
    hochdeutsch: 'ist'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Esken',
    hochdeutsch: 'Esche'
  },
  {
    artikel: '',
    plattdeutsch: 'et',
    hochdeutsch: 'es, sie'
  },
  {
    artikel: '',
    plattdeutsch: 'eten',
    hochdeutsch: 'essen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Eten',
    hochdeutsch: 'Essen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Etensmoarken',
    hochdeutsch: 'Essensmarken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Etenstiet',
    hochdeutsch: 'Essenszeit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Etlierpel',
    hochdeutsch: 'Esslöffel'
  },
  {
    artikel: '',
    plattdeutsch: 'ewig',
    hochdeutsch: 'ewig'
  },
  {
    artikel: '',
    plattdeutsch: 'extroa',
    hochdeutsch: 'extra'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Faal',
    hochdeutsch: 'Fall'
  },
  {
    artikel: '',
    plattdeutsch: 'faalen',
    hochdeutsch: 'fallen, fehlen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Faalenkrankhert',
    hochdeutsch: 'Fallsucht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Faalgen',
    hochdeutsch: 'Falle'
  },
  {
    artikel: '',
    plattdeutsch: 'faalsk',
    hochdeutsch: 'falsch'
  },
  {
    artikel: '',
    plattdeutsch: 'faaste',
    hochdeutsch: 'fest'
  },
  {
    artikel: '',
    plattdeutsch: 'faastebienen',
    hochdeutsch: 'festbinden'
  },
  {
    artikel: '',
    plattdeutsch: 'faastehaulen',
    hochdeutsch: 'festhalten'
  },
  {
    artikel: '',
    plattdeutsch: 'faastenegeln',
    hochdeutsch: 'festnageln'
  },
  {
    artikel: '',
    plattdeutsch: 'faastenierm',
    hochdeutsch: 'festnehmen'
  },
  {
    artikel: '',
    plattdeutsch: 'faasteschriuben',
    hochdeutsch: 'festschrauben'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fachweerk',
    hochdeutsch: 'Fachwerk'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fachweerkhius',
    hochdeutsch: 'Fachwerkhaus'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fack',
    hochdeutsch: 'Fach'
  },
  {
    artikel: '',
    plattdeutsch: 'fackeln',
    hochdeutsch: 'zögern, zündeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fall',
    hochdeutsch: 'Fall'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Färld; de Färler',
    hochdeutsch: 'Feld'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Färldheohn',
    hochdeutsch: 'Rebhuhn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Färldkiertel',
    hochdeutsch: 'Essenstopf fürs Feld'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Färldmius',
    hochdeutsch: 'Feldmaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Färldwegg  (Färldwech)',
    hochdeutsch: 'Feldweg'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fass',
    hochdeutsch: 'Dachfirst'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fasspannen',
    hochdeutsch: 'Firstpfanne(n)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fatt; de Feete',
    hochdeutsch: 'Fass'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fattbiener',
    hochdeutsch: 'Fassbinder'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fattwiep',
    hochdeutsch: 'Scheuergebinde (Topfkratzer aus Heidereisig)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fauln',
    hochdeutsch: 'Falte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Febewoar',
    hochdeutsch: 'Februar'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Febriek',
    hochdeutsch: 'Fabrik'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fehen',
    hochdeutsch: 'Feder(n)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fehenwoagen',
    hochdeutsch: 'Pferdewagen (gefedert, für Besorgungen)'
  },
  {
    artikel: '',
    plattdeutsch: 'feerben',
    hochdeutsch: 'färben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Feergen',
    hochdeutsch: 'Ferien'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Feerken',
    hochdeutsch: 'Ferkel'
  },
  {
    artikel: '',
    plattdeutsch: 'fegen',
    hochdeutsch: 'fegen'
  },
  {
    artikel: '',
    plattdeutsch: 'Fehler',
    hochdeutsch: 'Fehler'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fell',
    hochdeutsch: 'Fell, Haut, Pelle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fellketuffel',
    hochdeutsch: 'Pellkartoffel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Femielge',
    hochdeutsch: 'Familie'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Femielgenbeok',
    hochdeutsch: 'Familienbuch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fenster',
    hochdeutsch: 'Fenster'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Feoer',
    hochdeutsch: 'Futter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Feoermann',
    hochdeutsch: 'Fuhrmann'
  },
  {
    artikel: '',
    plattdeutsch: 'feoern',
    hochdeutsch: 'füttern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Feot (teo Feote); de Foite',
    hochdeutsch: 'Fuß  (zu Fuß)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Feotbank',
    hochdeutsch: 'Fußbank'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Feotenne',
    hochdeutsch: 'Fußende vom Bett'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Feotlappen',
    hochdeutsch: 'Leinenlappen als Strumpfersatz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ferre',
    hochdeutsch: 'Onkel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fest',
    hochdeutsch: 'Fest'
  },
  {
    artikel: '',
    plattdeutsch: 'feste',
    hochdeutsch: 'heftig, tüchtig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fidibus',
    hochdeutsch: 'Feueranzünder (z.B. aus einem Holzspan oder aus einem kleinen Stück einer zusammengedrehten Zeitung)'
  },
  {
    artikel: '',
    plattdeutsch: 'fief, fiebe',
    hochdeutsch: 'fünf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fiehe',
    hochdeutsch: 'Feier'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fiehedagg (Fiehedach)',
    hochdeutsch: 'Feiertag'
  },
  {
    artikel: '',
    plattdeutsch: 'fiehen',
    hochdeutsch: 'feiern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fieheoabend',
    hochdeutsch: 'Feierabend'
  },
  {
    artikel: '',
    plattdeutsch: 'fielen',
    hochdeutsch: 'feilen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fielen',
    hochdeutsch: 'Feile'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fiend',
    hochdeutsch: 'Feind'
  },
  {
    artikel: '',
    plattdeutsch: 'fiene',
    hochdeutsch: 'fein, zartgliedrig'
  },
  {
    artikel: '',
    plattdeutsch: 'fienen',
    hochdeutsch: 'finden'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fietzebaunen',
    hochdeutsch: 'Bohnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fietzebaunenspielen',
    hochdeutsch: 'Bohnenstange(n)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Filius',
    hochdeutsch: 'Nachkomme (männlich)'
  },
  {
    artikel: '',
    plattdeutsch: 'fillen',
    hochdeutsch: 'pellen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fimmel',
    hochdeutsch: 'Hirngespinst'
  },
  {
    artikel: '',
    plattdeutsch: 'fimmelig (fimmelich)',
    hochdeutsch: 'nervös, durchgedreht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Finger',
    hochdeutsch: 'Finger'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fingerhansken',
    hochdeutsch: 'Fingerhandschuhe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fingerheot',
    hochdeutsch: 'Fingerhut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fisematenten',
    hochdeutsch: 'Unfug'
  },
  {
    artikel: '',
    plattdeutsch: 'fisentaaien',
    hochdeutsch: 'untersuchen, analysieren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fisk; de Fiske',
    hochdeutsch: 'Fisch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fiskediek',
    hochdeutsch: 'Fischteich'
  },
  {
    artikel: '',
    plattdeutsch: 'fisken',
    hochdeutsch: 'fischen'
  },
  {
    artikel: '',
    plattdeutsch: 'fisseln',
    hochdeutsch: 'nieseln (feiner Regen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fissen',
    hochdeutsch: 'Bindfaden'
  },
  {
    artikel: '',
    plattdeutsch: 'fissig (fissich)',
    hochdeutsch: 'ungeduldig engagiert'
  },
  {
    artikel: '',
    plattdeutsch: 'fit fit fit',
    hochdeutsch: 'Pfui! Schäm dich!'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fitk',
    hochdeutsch: 'Flügel, Gänseflügel (wurde zum Fegen in den Ecken und an schwer zugänglichen Stellen benutzt)'
  },
  {
    artikel: '',
    plattdeutsch: 'fitken',
    hochdeutsch: 'fegen mit dem Gänseflügel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fitkenfest',
    hochdeutsch: 'Geflügelfest'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fitzereout',
    hochdeutsch: 'Weidenrute (dünn, biegsam)'
  },
  {
    artikel: '',
    plattdeutsch: 'fiul',
    hochdeutsch: 'faul'
  },
  {
    artikel: '',
    plattdeutsch: 'fiulen',
    hochdeutsch: 'faulen'
  },
  {
    artikel: '',
    plattdeutsch: 'fiulenzen',
    hochdeutsch: 'faulenzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fiulwams',
    hochdeutsch: 'Faulpelz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fiust; de Füüste',
    hochdeutsch: 'Faust'
  },
  {
    artikel: '',
    plattdeutsch: 'fiustdicke',
    hochdeutsch: 'faustdick'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fiusthansken',
    hochdeutsch: 'Fausthandschuhe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flachen',
    hochdeutsch: 'Brotscheibe (dick), Seitenbrett vom Ackerwagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flasken',
    hochdeutsch: 'Flasche(n)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Flass',
    hochdeutsch: 'Flachs'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flauh; de Floihe',
    hochdeutsch: 'Floh'
  },
  {
    artikel: '',
    plattdeutsch: 'flechen',
    hochdeutsch: 'flechten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flegen',
    hochdeutsch: 'Flegel (Dreschwerkzeug)'
  },
  {
    artikel: '',
    plattdeutsch: 'fleigen',
    hochdeutsch: 'fliegen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fleigen',
    hochdeutsch: 'Fliege(n)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fleisk',
    hochdeutsch: 'Fleisch'
  },
  {
    artikel: '',
    plattdeutsch: 'fleiten',
    hochdeutsch: 'fließen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fleoch',
    hochdeutsch: 'Fluch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fleomen',
    hochdeutsch: 'Bauchfett vom Schwein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fleot',
    hochdeutsch: 'Flut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fleppen',
    hochdeutsch: 'Ausweispapiere, Siebensachen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Flett',
    hochdeutsch: 'Raum um das Herdfeuer in einem alten Bauernhaus (oberhalb der Diele)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flettmieger',
    hochdeutsch: 'Mädchen (klein und noch nicht trocken)'
  },
  {
    artikel: '',
    plattdeutsch: 'fliedig (fliedich)',
    hochdeutsch: 'fleißig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flinsen',
    hochdeutsch: 'Brotscheibe (dünn)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flinten',
    hochdeutsch: 'Flinte, Gewehr'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Flittken',
    hochdeutsch: 'Flittchen, Vielliebchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flitzebogen',
    hochdeutsch: 'Pfeil und Bogen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Flitzepeh',
    hochdeutsch: 'Fahrrad'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flius',
    hochdeutsch: 'Schleife'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fliusen',
    hochdeutsch: 'Flusen, Spinnerei'
  },
  {
    artikel: '',
    plattdeutsch: 'flöcken',
    hochdeutsch: 'fluchen'
  },
  {
    artikel: '',
    plattdeutsch: 'flötken',
    hochdeutsch: 'pfeifen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flötkepiepen',
    hochdeutsch: 'Trillerpfeife'
  },
  {
    artikel: '',
    plattdeutsch: 'flotten Heinrich',
    hochdeutsch: 'Durchfall'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flucht',
    hochdeutsch: 'Holzbügel mit kleinen Metallhaken über der Spinnradspule'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flucht',
    hochdeutsch: 'Flucht, Richtung (gerade Linie)'
  },
  {
    artikel: '',
    plattdeutsch: 'fludderig (fludderich)',
    hochdeutsch: 'flatterhaft'
  },
  {
    artikel: '',
    plattdeutsch: 'flüchten',
    hochdeutsch: 'flüchten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flunk',
    hochdeutsch: 'Arm, Flügel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flürgel',
    hochdeutsch: 'Flügel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flürter',
    hochdeutsch: 'Fließgewässer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Flutkebrei',
    hochdeutsch: 'Kürbisgericht mit Milchreis'
  },
  {
    artikel: '',
    plattdeutsch: 'flutsken',
    hochdeutsch: 'flutschen'
  },
  {
    artikel: '',
    plattdeutsch: 'foahl',
    hochdeutsch: 'fahl, blass'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Foahnen',
    hochdeutsch: 'Fahne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Foahrkoarten',
    hochdeutsch: 'Fahrkarte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Foahrt',
    hochdeutsch: 'Fahrt'
  },
  {
    artikel: '',
    plattdeutsch: 'foaken',
    hochdeutsch: 'oft'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Foarbe',
    hochdeutsch: 'Farbe'
  },
  {
    artikel: '',
    plattdeutsch: 'föarig (föarich)',
    hochdeutsch: 'fertig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Foarnken',
    hochdeutsch: 'Farn, Farnkraut'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Foaselschwien',
    hochdeutsch: 'Jungschwein (nichttragend)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fohmt; de Föhme',
    hochdeutsch: 'Faden'
  },
  {
    artikel: '',
    plattdeutsch: 'foihen',
    hochdeutsch: 'fahren'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Foiher',
    hochdeutsch: 'Fuder (Wagenladung)'
  },
  {
    artikel: '',
    plattdeutsch: 'foilen',
    hochdeutsch: 'fühlen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Foorken',
    hochdeutsch: 'Forke'
  },
  {
    artikel: '',
    plattdeutsch: 'förrern',
    hochdeutsch: 'fordern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Foss; de Fösse',
    hochdeutsch: 'Fuchs'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fotzendaaiet',
    hochdeutsch: 'Frauenzimmer (verächtlich)'
  },
  {
    artikel: '',
    plattdeutsch: 'fraaien',
    hochdeutsch: 'heiraten'
  },
  {
    artikel: '',
    plattdeutsch: 'Frankriek',
    hochdeutsch: 'Frankreich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fransen',
    hochdeutsch: 'Fransen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Franzeose',
    hochdeutsch: 'Franzose'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Franzeosenkriut',
    hochdeutsch: 'Franzosenkraut (Unkraut)'
  },
  {
    artikel: '',
    plattdeutsch: 'franzoisk',
    hochdeutsch: 'französisch'
  },
  {
    artikel: '',
    plattdeutsch: 'frauh',
    hochdeutsch: 'froh'
  },
  {
    artikel: '',
    plattdeutsch: 'frech',
    hochdeutsch: 'frech'
  },
  {
    artikel: '',
    plattdeutsch: 'frei',
    hochdeutsch: 'frei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Freidagg (Freidach)',
    hochdeutsch: 'Freitag'
  },
  {
    artikel: '',
    plattdeutsch: 'freimoaken',
    hochdeutsch: 'freimachen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Freimoaken',
    hochdeutsch: 'Briefmarke'
  },
  {
    artikel: '',
    plattdeutsch: 'freisen',
    hochdeutsch: 'frieren'
  },
  {
    artikel: '',
    plattdeutsch: 'freiwillig',
    hochdeutsch: 'freiwillig'
  },
  {
    artikel: '',
    plattdeutsch: 'freoh',
    hochdeutsch: 'früh'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Freohjoahr',
    hochdeutsch: 'Frühjahr'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Freohstücke',
    hochdeutsch: 'Frühstück'
  },
  {
    artikel: '',
    plattdeutsch: 'freohstücken',
    hochdeutsch: 'frühstücken'
  },
  {
    artikel: '',
    plattdeutsch: 'freten',
    hochdeutsch: 'fressen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Frettsack',
    hochdeutsch: 'Vielfraß'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Frewel',
    hochdeutsch: 'Frevel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Frieden',
    hochdeutsch: 'Frieden'
  },
  {
    artikel: '',
    plattdeutsch: 'friermeln',
    hochdeutsch: 'friemeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Frieseln',
    hochdeutsch: 'Masern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Frisierkemeode',
    hochdeutsch: 'Frisierkommode mit Klappspiegel'
  },
  {
    artikel: '',
    plattdeutsch: 'frisk',
    hochdeutsch: 'frisch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Froage',
    hochdeutsch: 'Frage'
  },
  {
    artikel: '',
    plattdeutsch: 'froagen',
    hochdeutsch: 'fragen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Froagoars',
    hochdeutsch: 'fragender Mensch (vielfragend)'
  },
  {
    artikel: '',
    plattdeutsch: 'fröalik',
    hochdeutsch: 'fröhlich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Frochen',
    hochdeutsch: 'Achtung, Respekt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Froide',
    hochdeutsch: 'Freude'
  },
  {
    artikel: '',
    plattdeutsch: 'froien',
    hochdeutsch: 'freuen'
  },
  {
    artikel: '',
    plattdeutsch: 'frösterig (frösterich)',
    hochdeutsch: 'fröstelnd'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Frostkürtel',
    hochdeutsch: 'frierender Mensch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Frostweer',
    hochdeutsch: 'Frostwetter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Früame',
    hochdeutsch: 'Fremde'
  },
  {
    artikel: '',
    plattdeutsch: 'früamt',
    hochdeutsch: 'fremd'
  },
  {
    artikel: '',
    plattdeutsch: 'früamtgoahn',
    hochdeutsch: 'fremdgehen'
  },
  {
    artikel: '',
    plattdeutsch: 'früher',
    hochdeutsch: 'früher'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fründ; de Frünne',
    hochdeutsch: 'Freund'
  },
  {
    artikel: '',
    plattdeutsch: 'fründlik',
    hochdeutsch: 'freundlich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Frünne',
    hochdeutsch: 'Verwandte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fründskopp',
    hochdeutsch: 'Verwandtschaft, Freundschaft'
  },
  {
    artikel: '',
    plattdeutsch: 'fucheln',
    hochdeutsch: 'fuchteln'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Füer',
    hochdeutsch: 'Feuer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Füerhoaken',
    hochdeutsch: 'Feuerhaken'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Füerhoinken',
    hochdeutsch: 'Grille'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Füerlock',
    hochdeutsch: 'Brennraum des Ofens'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Füerömmer',
    hochdeutsch: 'Wassereimer (aus Leder für Löschzwecke)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Füerstein',
    hochdeutsch: 'Feuerstein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Füerstiehe',
    hochdeutsch: 'Feuerstelle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Füertangen',
    hochdeutsch: 'Feuerzange'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Füerwehr',
    hochdeutsch: 'Feuerwehr'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Füerwiehen',
    hochdeutsch: 'Befestigungsstück am Schwengel für ein drittes Pferd'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fuhr',
    hochdeutsch: 'Furche'
  },
  {
    artikel: '',
    plattdeutsch: 'fulgen',
    hochdeutsch: 'folgen'
  },
  {
    artikel: '',
    plattdeutsch: 'füllen',
    hochdeutsch: 'füllen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Füllen',
    hochdeutsch: 'Schöpflöffel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Fülllierpel',
    hochdeutsch: 'Schöpfkelle'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Fummelbrett',
    hochdeutsch: 'Scheuerbrettchen für Maurer'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Funnament',
    hochdeutsch: 'Fundament'
  },
  {
    artikel: '',
    plattdeutsch: 'für',
    hochdeutsch: 'für'
  },
  {
    artikel: '',
    plattdeutsch: 'fürwoahr',
    hochdeutsch: 'fürwahr, wirklich'
  },
  {
    artikel: '',
    plattdeutsch: 'furtern',
    hochdeutsch: 'fummeln'
  },
  {
    artikel: '',
    plattdeutsch: 'fusken',
    hochdeutsch: 'pfuschen'
  },
  {
    artikel: '',
    plattdeutsch: 'futken',
    hochdeutsch: 'arbeiten (unordentlich, oberflächlich)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gaailbülte',
    hochdeutsch: 'Geilstellen (Kot- und Urinstellen auf Grünland durch Weidetiere)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gaalgen',
    hochdeutsch: 'Galgen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gaalgenstrick',
    hochdeutsch: 'Spitzbube'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gaffel',
    hochdeutsch: 'Holzgabel (womit das Rauchfleisch aufgehängt und entnommen werden konnte)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gaffeltangen',
    hochdeutsch: 'Ohrenkneifer'
  },
  {
    artikel: '',
    plattdeutsch: 'gaffen',
    hochdeutsch: 'gucken'
  },
  {
    artikel: '',
    plattdeutsch: 'gallern',
    hochdeutsch: 'regnen (heftig)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ganter',
    hochdeutsch: 'Gänserich'
  },
  {
    artikel: '',
    plattdeutsch: 'ganz',
    hochdeutsch: 'ganz'
  },
  {
    artikel: '',
    plattdeutsch: 'ganz un goar',
    hochdeutsch: 'ganz und gar'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gärchel',
    hochdeutsch: 'Gaumen, Zahnfleisch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gärßel',
    hochdeutsch: 'Giersch (Unkraut, Wildsalatkräuter)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gassen',
    hochdeutsch: 'Gerste'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gatt',
    hochdeutsch: 'Hintern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gaus; de Göase',
    hochdeutsch: 'Gans'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gausefitk',
    hochdeutsch: 'Gänseflügel (wurde zum Fegen in den Ecken und an schwer zugänglichen Stellen benutzt)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gausekiel',
    hochdeutsch: 'Gänsekiel (Schreibfeder)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gauseküken',
    hochdeutsch: 'Gänseküken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gausewien',
    hochdeutsch: 'Gänsewein (Wasser)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gebett',
    hochdeutsch: 'Gebet'
  },
  {
    artikel: '',
    plattdeutsch: 'ge',
    hochdeutsch: 'je'
  },
  {
    artikel: '',
    plattdeutsch: 'geboen',
    hochdeutsch: 'geboren'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gebott',
    hochdeutsch: 'Gebot, Angebot'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gebreken',
    hochdeutsch: 'Gebrechen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gebriuk',
    hochdeutsch: 'Gebrauch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Geburt',
    hochdeutsch: 'Geburt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Geburtsdagg (Geburtsdach)',
    hochdeutsch: 'Geburtstag'
  },
  {
    artikel: '',
    plattdeutsch: 'gedaaihen',
    hochdeutsch: 'gedeihen'
  },
  {
    artikel: '',
    plattdeutsch: 'gede',
    hochdeutsch: 'jede'
  },
  {
    artikel: '',
    plattdeutsch: 'geden',
    hochdeutsch: 'jeden'
  },
  {
    artikel: '',
    plattdeutsch: 'geder',
    hochdeutsch: 'jeder'
  },
  {
    artikel: '',
    plattdeutsch: 'gedereiner',
    hochdeutsch: 'jedermann'
  },
  {
    artikel: '',
    plattdeutsch: 'gedertiet',
    hochdeutsch: 'jederzeit'
  },
  {
    artikel: '',
    plattdeutsch: 'gediegen',
    hochdeutsch: 'seltsam'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gedinen',
    hochdeutsch: 'Gardinen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gedirm',
    hochdeutsch: 'Gedärm'
  },
  {
    artikel: '',
    plattdeutsch: 'gedüllig (gedüllich)',
    hochdeutsch: 'geduldig'
  },
  {
    artikel: '',
    plattdeutsch: 'geel',
    hochdeutsch: 'gelb'
  },
  {
    artikel: '',
    plattdeutsch: 'geerben',
    hochdeutsch: 'gerben'
  },
  {
    artikel: '',
    plattdeutsch: 'gefaalen',
    hochdeutsch: 'gefallen'
  },
  {
    artikel: '',
    plattdeutsch: 'gefährlik',
    hochdeutsch: 'gefährlich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gefoahr',
    hochdeutsch: 'Gefahr'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gefoihl',
    hochdeutsch: 'Gefühl'
  },
  {
    artikel: '',
    plattdeutsch: 'gegen',
    hochdeutsch: 'entgegen'
  },
  {
    artikel: '',
    plattdeutsch: 'gegenenanner',
    hochdeutsch: 'gegeneinander'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gegendeil',
    hochdeutsch: 'Gegenteil'
  },
  {
    artikel: '',
    plattdeutsch: 'gegenober',
    hochdeutsch: 'gegenüber'
  },
  {
    artikel: '',
    plattdeutsch: 'gegensietig (gegensietich)',
    hochdeutsch: 'gegenseitig'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gehöar',
    hochdeutsch: 'Gehör'
  },
  {
    artikel: '',
    plattdeutsch: 'gehöarig  (gehörich)',
    hochdeutsch: 'stark'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Geist',
    hochdeutsch: 'Geist'
  },
  {
    artikel: '',
    plattdeutsch: 'geiten',
    hochdeutsch: 'gießen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Geitkannen',
    hochdeutsch: 'Gießkanne'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gekoarkel',
    hochdeutsch: 'Gegacker'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gelänner',
    hochdeutsch: 'Geländer'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Geld (mitten Gelle)',
    hochdeutsch: 'Geld (mit dem Geld)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Geldbühl',
    hochdeutsch: 'Geldbeutel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Geldschien',
    hochdeutsch: 'Geldschein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gelegenhert',
    hochdeutsch: 'Gelegenheit'
  },
  {
    artikel: '',
    plattdeutsch: 'gelinne',
    hochdeutsch: 'gelinde'
  },
  {
    artikel: '',
    plattdeutsch: 'gellen',
    hochdeutsch: 'gelten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Geloat',
    hochdeutsch: 'Gefäß (Behälter)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gelott',
    hochdeutsch: 'Gelass (kleiner Raum)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gelühe',
    hochdeutsch: 'Geläut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gemeinhert',
    hochdeutsch: 'Gemeinheit'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gemoite',
    hochdeutsch: 'Gemüt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gemüse',
    hochdeutsch: 'Gemüse'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gemüsestücke',
    hochdeutsch: 'Gemüsegarten'
  },
  {
    artikel: '',
    plattdeutsch: 'geneoe',
    hochdeutsch: 'genau'
  },
  {
    artikel: '',
    plattdeutsch: 'geneog  (geneoch)',
    hochdeutsch: 'genug'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Generatzieon',
    hochdeutsch: 'Generation'
  },
  {
    artikel: '',
    plattdeutsch: 'genne',
    hochdeutsch: 'jene, jener'
  },
  {
    artikel: '',
    plattdeutsch: 'gennet',
    hochdeutsch: 'jene, jenes'
  },
  {
    artikel: '',
    plattdeutsch: 'genoten',
    hochdeutsch: 'genossen'
  },
  {
    artikel: '',
    plattdeutsch: 'geo',
    hochdeutsch: 'euch'
  },
  {
    artikel: '',
    plattdeutsch: 'geoe',
    hochdeutsch: 'eure, euer'
  },
  {
    artikel: '',
    plattdeutsch: 'geoe',
    hochdeutsch: 'gute'
  },
  {
    artikel: '',
    plattdeutsch: 'geoen',
    hochdeutsch: 'guten'
  },
  {
    artikel: '',
    plattdeutsch: 'geoet',
    hochdeutsch: 'gutes'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Geogienen',
    hochdeutsch: 'Dahlien'
  },
  {
    artikel: '',
    plattdeutsch: 'geot',
    hochdeutsch: 'gut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Geothert',
    hochdeutsch: 'Gutheit (Güte)'
  },
  {
    artikel: '',
    plattdeutsch: 'geotmoitig (geotmoitich)',
    hochdeutsch: 'gutmütig'
  },
  {
    artikel: '',
    plattdeutsch: 'geotsäggen',
    hochdeutsch: 'bürgen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gerechtigkert',
    hochdeutsch: 'Gerechtigkeit'
  },
  {
    artikel: '',
    plattdeutsch: 'gern',
    hochdeutsch: 'gern'
  },
  {
    artikel: '',
    plattdeutsch: 'geroade',
    hochdeutsch: 'gerade'
  },
  {
    artikel: '',
    plattdeutsch: 'geroaen (geot geroaen)',
    hochdeutsch: 'gelungen (wohlgeraten)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gesangbeok',
    hochdeutsch: 'Gesangbuch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Geschenk',
    hochdeutsch: 'Geschenk'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Geschirr',
    hochdeutsch: 'Geschirr'
  },
  {
    artikel: '',
    plattdeutsch: 'geschoiet',
    hochdeutsch: 'gescheit'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Geschraaie',
    hochdeutsch: 'Geschrei'
  },
  {
    artikel: '',
    plattdeutsch: 'geschwiege',
    hochdeutsch: 'geschweige'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gesichte',
    hochdeutsch: 'Gesicht'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gesocks',
    hochdeutsch: 'Pöbel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gest',
    hochdeutsch: 'Hefe'
  },
  {
    artikel: '',
    plattdeutsch: 'geste geste',
    hochdeutsch: 'erstaunlich'
  },
  {
    artikel: '',
    plattdeutsch: 'gestrenge',
    hochdeutsch: 'streng'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gestrich',
    hochdeutsch: 'Gegend, Gebiet'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gesummse',
    hochdeutsch: 'Summen der Bienen vor dem Bienenstock'
  },
  {
    artikel: '',
    plattdeutsch: 'getz',
    hochdeutsch: 'jetzt'
  },
  {
    artikel: '',
    plattdeutsch: 'gewährn loaten',
    hochdeutsch: 'gewähren lassen'
  },
  {
    artikel: '',
    plattdeutsch: 'gewiernen',
    hochdeutsch: 'gewöhnen'
  },
  {
    artikel: '',
    plattdeutsch: 'gewinnen (gewunnen)',
    hochdeutsch: 'gewinnen (gewonnen)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gewierten',
    hochdeutsch: 'Gewissen'
  },
  {
    artikel: '',
    plattdeutsch: 'gewoahr wärn',
    hochdeutsch: 'erfahren, gewahr werden'
  },
  {
    artikel: '',
    plattdeutsch: 'gie',
    hochdeutsch: 'ihr, sie'
  },
  {
    artikel: '',
    plattdeutsch: 'gierm',
    hochdeutsch: 'geben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Giez',
    hochdeutsch: 'Geiz'
  },
  {
    artikel: '',
    plattdeutsch: 'giezig (giezich)',
    hochdeutsch: 'geizig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Giezkroagen',
    hochdeutsch: 'Geizhals'
  },
  {
    artikel: '',
    plattdeutsch: 'ginne',
    hochdeutsch: 'dahinten'
  },
  {
    artikel: '',
    plattdeutsch: 'gistern',
    hochdeutsch: 'gestern'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Glass; de Gleser',
    hochdeutsch: 'Glas'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Glassschieben',
    hochdeutsch: 'Glasscheibe'
  },
  {
    artikel: '',
    plattdeutsch: 'glatt',
    hochdeutsch: 'glatt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gleot',
    hochdeutsch: 'Glut'
  },
  {
    artikel: '',
    plattdeutsch: 'glieke',
    hochdeutsch: 'gleich'
  },
  {
    artikel: '',
    plattdeutsch: 'glieken',
    hochdeutsch: 'gleichen'
  },
  {
    artikel: '',
    plattdeutsch: 'glieks',
    hochdeutsch: 'gleich, sofort'
  },
  {
    artikel: '',
    plattdeutsch: 'gloaihen',
    hochdeutsch: 'glühen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Glöppe',
    hochdeutsch: 'Dummheiten (verrückte Ideen)'
  },
  {
    artikel: '',
    plattdeutsch: 'glörben',
    hochdeutsch: 'glauben'
  },
  {
    artikel: '',
    plattdeutsch: 'glörben',
    hochdeutsch: ''
  },
  {
    artikel: 'eck glörbe                   glörbere',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu glörbes                  glörberes',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et glörbet       glörbere',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei glörbet        glörben',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'glauben',
    hochdeutsch: ''
  },
  {
    artikel: 'ich glaube                      glaubte',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du glaubst                      glaubtest',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es glaubt            glaubte',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir glauben ...                glaubten',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'glörnig (glörnich)',
    hochdeutsch: 'glühend (bei Fieber, Alkoholkonsum, …)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Glücke',
    hochdeutsch: 'Glück'
  },
  {
    artikel: '',
    plattdeutsch: 'glücken',
    hochdeutsch: 'gelingen'
  },
  {
    artikel: '',
    plattdeutsch: 'gnabbeln',
    hochdeutsch: 'abnagen'
  },
  {
    artikel: '',
    plattdeutsch: 'gnatzig (gnatzich)',
    hochdeutsch: 'unzufrieden'
  },
  {
    artikel: '',
    plattdeutsch: 'gneisen',
    hochdeutsch: 'lächeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gnickeraaie',
    hochdeutsch: 'Kicherei'
  },
  {
    artikel: '',
    plattdeutsch: 'gnickern',
    hochdeutsch: 'kichern'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gnoadenbeok',
    hochdeutsch: 'Gnadenbuch (von einer Strafe absehen)'
  },
  {
    artikel: '',
    plattdeutsch: 'gnuen',
    hochdeutsch: 'knurren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gnuepott',
    hochdeutsch: 'Brummbart'
  },
  {
    artikel: '',
    plattdeutsch: 'gnürterig (gnürterich)',
    hochdeutsch: 'nörgelnd'
  },
  {
    artikel: '',
    plattdeutsch: 'gnürtern',
    hochdeutsch: 'nörgeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gnürterpott',
    hochdeutsch: 'Nörgler'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Goabel',
    hochdeutsch: 'Gabel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Goaen',
    hochdeutsch: 'Garten'
  },
  {
    artikel: '',
    plattdeutsch: 'goahn',
    hochdeutsch: ''
  },
  {
    artikel: 'eck goah                    güng       bin goahn',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu gäahs                   güngs     bis goahn',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et gäaht        güng       es goahn',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei goaht         güngen   sind goahn',
    plattdeutsch: 'gehen',
    hochdeutsch: ''
  },
  {
    artikel: 'ich gehe                        ging         bin gegangen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du gehst                        gingst',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es geht              ging',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir gehen ...                  gingen ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'goahn',
    hochdeutsch: 'aufgehen des Hefeteiges'
  },
  {
    artikel: '',
    plattdeutsch: 'goar',
    hochdeutsch: 'gar'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Goarn',
    hochdeutsch: 'Garn'
  },
  {
    artikel: '',
    plattdeutsch: 'goar nich',
    hochdeutsch: 'gar nicht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Göarte',
    hochdeutsch: 'Grütze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Göbel',
    hochdeutsch: 'Göpel (Maschinenantrieb mit Muskelkraft)'
  },
  {
    artikel: '',
    plattdeutsch: 'göbeln',
    hochdeutsch: 'kotzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gooten',
    hochdeutsch: 'Gosse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Göpsen',
    hochdeutsch: 'Maßeinheit (zwei aneinanderliegende Hände voll)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gössel',
    hochdeutsch: 'Gänseküken'
  },
  {
    artikel: '',
    plattdeutsch: 'gottlaus',
    hochdeutsch: 'gottlos'
  },
  {
    artikel: '',
    plattdeutsch: 'gottserbärmlik',
    hochdeutsch: 'erbärmlich (ganz und gar)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Graff; de Greber',
    hochdeutsch: 'Grab'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Graffstein',
    hochdeutsch: 'Grabstein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grammen',
    hochdeutsch: 'Grummet  (zweiter Grasschnitt, getrocknet zu Heu)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grappen',
    hochdeutsch: 'Fratzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grappen',
    hochdeutsch: 'komische Einfälle (wirres Zeug)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gräss',
    hochdeutsch: 'Gras'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grässklöpper',
    hochdeutsch: 'Hagelkörner'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grässnurf',
    hochdeutsch: 'Grasnarbe'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Grässspier',
    hochdeutsch: 'Grashalm'
  },
  {
    artikel: '',
    plattdeutsch: 'graut',
    hochdeutsch: 'groß'
  },
  {
    artikel: '',
    plattdeutsch: 'graute',
    hochdeutsch: 'große'
  },
  {
    artikel: '',
    plattdeutsch: 'grauten',
    hochdeutsch: 'großen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grautaulen',
    hochdeutsch: 'Großeltern'
  },
  {
    artikel: '',
    plattdeutsch: 'grautendeils',
    hochdeutsch: 'größtenteils'
  },
  {
    artikel: '',
    plattdeutsch: 'grautjöahrig  (grautjöahrich)',
    hochdeutsch: 'volljährig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grautmoime',
    hochdeutsch: 'Großmutter'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Grautmiul',
    hochdeutsch: 'Großmaul'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grautvoar',
    hochdeutsch: 'Großvater'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grenze',
    hochdeutsch: 'Grenze'
  },
  {
    artikel: '',
    plattdeutsch: 'greoen',
    hochdeutsch: 'grauen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Greoen',
    hochdeutsch: 'Grauen'
  },
  {
    artikel: '',
    plattdeutsch: 'gresen',
    hochdeutsch: 'grasen'
  },
  {
    artikel: '',
    plattdeutsch: 'grienen',
    hochdeutsch: 'grinsen, weinen'
  },
  {
    artikel: '',
    plattdeutsch: 'griensmoate',
    hochdeutsch: 'Gemütszustand (zum Weinen zumute)'
  },
  {
    artikel: '',
    plattdeutsch: 'griepen',
    hochdeutsch: 'greifen'
  },
  {
    artikel: '',
    plattdeutsch: 'griersig (griersich)',
    hochdeutsch: 'grässlich'
  },
  {
    artikel: '',
    plattdeutsch: 'gries',
    hochdeutsch: 'grau'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Griesbiehen',
    hochdeutsch: 'Birnensorte'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Griesbraut',
    hochdeutsch: 'Graubrot'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Griesegreitken',
    hochdeutsch: 'Buttermilch-Grießsuppe (mit Nudeln, Zwieback und Rosinen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Griesenetten',
    hochdeutsch: 'Apfelsorte (graue Renette)'
  },
  {
    artikel: '',
    plattdeutsch: 'grieskault',
    hochdeutsch: 'nasskalt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Griesköppe',
    hochdeutsch: 'Grauköpfe (alte Menschen)'
  },
  {
    artikel: '',
    plattdeutsch: 'grimstig (grimstich)',
    hochdeutsch: 'übereifrig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gripps',
    hochdeutsch: 'Verstand'
  },
  {
    artikel: '',
    plattdeutsch: 'griusen',
    hochdeutsch: 'rasen, ängstigen'
  },
  {
    artikel: '',
    plattdeutsch: 'groaben',
    hochdeutsch: 'graben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Groaben',
    hochdeutsch: 'Graben'
  },
  {
    artikel: '',
    plattdeutsch: 'groade',
    hochdeutsch: 'gerade'
  },
  {
    artikel: '',
    plattdeutsch: 'groadedür',
    hochdeutsch: 'geradedurch (direkt)'
  },
  {
    artikel: '',
    plattdeutsch: 'groadeiut',
    hochdeutsch: 'geradeaus'
  },
  {
    artikel: '',
    plattdeutsch: 'groff',
    hochdeutsch: 'grob'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Groffbraut',
    hochdeutsch: 'Schwarzbrot'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Groffschmett',
    hochdeutsch: 'Grobschmied, Grobian'
  },
  {
    artikel: '',
    plattdeutsch: 'groin',
    hochdeutsch: 'grün'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Groschen',
    hochdeutsch: 'Geldstück (10 Pfennig-Stück)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gross',
    hochdeutsch: 'Gros (Maßeinheit/12 Dutzend = 144 Stück)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grötte',
    hochdeutsch: 'Größe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grull',
    hochdeutsch: 'Groll'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grund; de Grünne',
    hochdeutsch: 'Grund'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Grundbeok',
    hochdeutsch: 'Grundbuch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grundmüen',
    hochdeutsch: 'Fundament, Grundmauer'
  },
  {
    artikel: '',
    plattdeutsch: 'grünnen',
    hochdeutsch: 'gründen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grüppen',
    hochdeutsch: 'Abzugsgraben (klein)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Gruppsel',
    hochdeutsch: 'Reste (fein, im Torf- oder Holzstall)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Grutt',
    hochdeutsch: 'Abfall (fein)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Guld',
    hochdeutsch: 'Gold'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Guldlack',
    hochdeutsch: 'Goldlack (Blume)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Guldschmett',
    hochdeutsch: 'Goldschmied'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Guldwächte',
    hochdeutsch: 'Goldwaage'
  },
  {
    artikel: '',
    plattdeutsch: 'gümme',
    hochdeutsch: 'immer'
  },
  {
    artikel: '',
    plattdeutsch: 'gürlen',
    hochdeutsch: 'rieseln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Gürte',
    hochdeutsch: 'Regenguss'
  },
  {
    artikel: '',
    plattdeutsch: 'güst',
    hochdeutsch: 'gerade eben'
  },
  {
    artikel: '',
    plattdeutsch: 'güste',
    hochdeutsch: 'gerade eben'
  },
  {
    artikel: '',
    plattdeutsch: 'güstemente',
    hochdeutsch: 'gerade jetzt'
  },
  {
    artikel: '',
    plattdeutsch: 'güüste',
    hochdeutsch: 'unfruchtbar (bei Säugetieren)'
  },
  {
    artikel: '',
    plattdeutsch: 'haalbe',
    hochdeutsch: 'halbe'
  },
  {
    artikel: '',
    plattdeutsch: 'haalberlei',
    hochdeutsch: 'halbwegs'
  },
  {
    artikel: '',
    plattdeutsch: 'haalf',
    hochdeutsch: 'halb'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Haalfklabaster',
    hochdeutsch: 'Halbstarker'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Haalfter',
    hochdeutsch: 'Halfter (Zaum ohne Gebiss)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Haalm',
    hochdeutsch: 'Halm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Haals; de Hälse',
    hochdeutsch: 'Hals'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Haalsafschnieher',
    hochdeutsch: 'Halsabschneider (Wucherer)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Haalsdeok',
    hochdeutsch: 'Halstuch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Haalskiehen',
    hochdeutsch: 'Halskette'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Haalslear',
    hochdeutsch: 'Halsleder beim Zuggeschirr'
  },
  {
    artikel: '',
    plattdeutsch: 'haalsoberkopps',
    hochdeutsch: 'überstürzt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Haarte',
    hochdeutsch: 'Herz'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Haarteblatt',
    hochdeutsch: 'Herzblatt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Haarteklabastern',
    hochdeutsch: 'Herzrasen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Haartepucken',
    hochdeutsch: 'Herzklopfen'
  },
  {
    artikel: '',
    plattdeutsch: 'hacken',
    hochdeutsch: 'hacken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hacken',
    hochdeutsch: 'Ferse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hackenrieter',
    hochdeutsch: 'Schlittschuhe mit Schraubverbindung am Absatz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hacker',
    hochdeutsch: 'Hacker'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hackfleisk',
    hochdeutsch: 'Hackfleisch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hacksel',
    hochdeutsch: 'Häcksel'
  },
  {
    artikel: '',
    plattdeutsch: 'Hacksel straaien',
    hochdeutsch: 'Häcksel streuen (Brauch vor der Hochzeit)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hackselbock',
    hochdeutsch: 'Strohschneidemaschine'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hackselkommern',
    hochdeutsch: 'Häcksellagerraum'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Haaimweih',
    hochdeutsch: 'Heimweh'
  },
  {
    artikel: '',
    plattdeutsch: 'hämmen',
    hochdeutsch: ''
  },
  {
    artikel: 'eck häbbe                   haa       häbbe hat',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu häss                      haas     häss hat',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et häff            haa       häff hat',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei häbb           haan     häbb hat',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'haben',
    hochdeutsch: ''
  },
  {
    artikel: 'ich habe                      hatte         habe gehabt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du hast                        hattest',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es hat              hatte',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir haben ...                hatten ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hand; de Hänne',
    hochdeutsch: 'Hand'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Handeok',
    hochdeutsch: 'Handtuch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Handiulen',
    hochdeutsch: 'Handfeger'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Handpeerd',
    hochdeutsch: 'Pferd links im Gespann'
  },
  {
    artikel: '',
    plattdeutsch: 'handwoarm',
    hochdeutsch: 'lauwarm'
  },
  {
    artikel: '',
    plattdeutsch: 'hannebräet',
    hochdeutsch: 'handbreit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hannel',
    hochdeutsch: 'Handel'
  },
  {
    artikel: '',
    plattdeutsch: 'hanneln',
    hochdeutsch: 'handeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hannoiwersken',
    hochdeutsch: 'Niedersachsen (Provinz Hannover)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hansken',
    hochdeutsch: 'Handschuh'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hanswost',
    hochdeutsch: 'Hanswurst'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hantekassen',
    hochdeutsch: 'Akkordeon'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Häring',
    hochdeutsch: 'Hering'
  },
  {
    artikel: '',
    plattdeutsch: 'hart',
    hochdeutsch: 'hart'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Haspel',
    hochdeutsch: 'Haspel  (Garnwinde)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hauchdütsk',
    hochdeutsch: 'Hochdeutsch'
  },
  {
    artikel: '',
    plattdeutsch: 'hauge',
    hochdeutsch: 'hoch'
  },
  {
    artikel: '',
    plattdeutsch: 'haujoahnen',
    hochdeutsch: 'gähnen'
  },
  {
    artikel: '',
    plattdeutsch: 'haulen',
    hochdeutsch: 'halten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Haumierlen',
    hochdeutsch: 'Windhalm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Haupen; de Höape',
    hochdeutsch: 'Haufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heekstern',
    hochdeutsch: 'Elster'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heemel',
    hochdeutsch: 'Hammel'
  },
  {
    artikel: '',
    plattdeutsch: 'heer',
    hochdeutsch: 'her'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heerfst',
    hochdeutsch: 'Herbst'
  },
  {
    artikel: '',
    plattdeutsch: 'heerkurm',
    hochdeutsch: 'herkommen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Heerkurm',
    hochdeutsch: 'Herkunft'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Heft',
    hochdeutsch: 'Heft, Heft (Feilengriff)'
  },
  {
    artikel: '',
    plattdeutsch: 'hei',
    hochdeutsch: 'er'
  },
  {
    artikel: '',
    plattdeutsch: 'heile',
    hochdeutsch: 'heil'
  },
  {
    artikel: '',
    plattdeutsch: 'heit',
    hochdeutsch: 'heiß'
  },
  {
    artikel: '',
    plattdeutsch: 'heit',
    hochdeutsch: 'läufig (Hund)'
  },
  {
    artikel: '',
    plattdeutsch: 'heiten',
    hochdeutsch: ''
  },
  {
    artikel: 'eck heite                heitere    häbbe heiten',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu hess                 heiteres  häss heiten',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et hett       heitere    häff heiten',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei heitet     heiten      häbb heiten',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'heißen',
    hochdeutsch: ''
  },
  {
    artikel: 'ich heiße                      hieß            habe geheißen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du heißt                        hießest',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es heißt            hieß',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir heißen ...                hießen ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'helle',
    hochdeutsch: 'hell, laut, schlau'
  },
  {
    artikel: '',
    plattdeutsch: 'helpen',
    hochdeutsch: 'helfen'
  },
  {
    artikel: '',
    plattdeutsch: 'henn',
    hochdeutsch: 'hin'
  },
  {
    artikel: '',
    plattdeutsch: 'henndrieben',
    hochdeutsch: 'hintreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'henndür',
    hochdeutsch: 'hindurch'
  },
  {
    artikel: '',
    plattdeutsch: 'hennfaalen',
    hochdeutsch: 'hinfallen'
  },
  {
    artikel: '',
    plattdeutsch: 'hennfraaien',
    hochdeutsch: 'einheiraten'
  },
  {
    artikel: '',
    plattdeutsch: 'henngriepen',
    hochdeutsch: 'hingreifen'
  },
  {
    artikel: '',
    plattdeutsch: 'hennhaulen',
    hochdeutsch: 'hinhalten'
  },
  {
    artikel: '',
    plattdeutsch: 'hennhucken',
    hochdeutsch: 'hinhocken'
  },
  {
    artikel: '',
    plattdeutsch: 'hennig (hennich)',
    hochdeutsch: 'einfach (ging gut, leicht, klein)'
  },
  {
    artikel: '',
    plattdeutsch: 'hennkieken',
    hochdeutsch: 'hinschauen'
  },
  {
    artikel: '',
    plattdeutsch: 'hennknaaien',
    hochdeutsch: 'hinknien'
  },
  {
    artikel: '',
    plattdeutsch: 'hennkriegen',
    hochdeutsch: 'hinbekommen'
  },
  {
    artikel: '',
    plattdeutsch: 'hennkurm',
    hochdeutsch: 'hinkommen'
  },
  {
    artikel: '',
    plattdeutsch: 'hennlangen',
    hochdeutsch: 'hinlangen'
  },
  {
    artikel: '',
    plattdeutsch: 'hennlaupen',
    hochdeutsch: 'hinlaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'hennleggen',
    hochdeutsch: 'hinlegen'
  },
  {
    artikel: '',
    plattdeutsch: 'hennsetten',
    hochdeutsch: 'hinsetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'hennteo',
    hochdeutsch: 'hinzu'
  },
  {
    artikel: '',
    plattdeutsch: 'henn un heer',
    hochdeutsch: 'hin und her'
  },
  {
    artikel: '',
    plattdeutsch: 'hennwiesen',
    hochdeutsch: 'hinweisen'
  },
  {
    artikel: '',
    plattdeutsch: 'heoen',
    hochdeutsch: 'hauen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Heohn; de Hoihner',
    hochdeutsch: 'Huhn'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Heohneraai',
    hochdeutsch: 'Hühnerei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heohnerdroaht',
    hochdeutsch: 'Hühnerdraht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heohnerfehen',
    hochdeutsch: 'Hühnerfeder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heohnerkamm',
    hochdeutsch: 'Hühnerkamm'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Heohnerküken',
    hochdeutsch: 'Küken (weiblich)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Heohnerlock',
    hochdeutsch: 'Hühnerloch (Durchschlupf für Hühner)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heohnermess',
    hochdeutsch: 'Hühnermist'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heohnerschieten',
    hochdeutsch: 'Hühnerdreck'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heohnerstaal',
    hochdeutsch: 'Hühnerstall'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heohnerwiehm',
    hochdeutsch: 'Hühnerschlafplatz mit Sitzstangen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heohnerzuppen',
    hochdeutsch: 'Hühnersuppe'
  },
  {
    artikel: '',
    plattdeutsch: 'heoßen',
    hochdeutsch: 'husten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heoßen',
    hochdeutsch: 'Husten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Heot; de Hoie',
    hochdeutsch: 'Hut'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hiermd; de Hierme',
    hochdeutsch: 'Hemd'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hiermdknöape',
    hochdeutsch: 'Hemdknöpfe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hiermdkroagen',
    hochdeutsch: 'Hemdkragen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hiermdschlippk',
    hochdeutsch: 'Hemdzipfel'
  },
  {
    artikel: '',
    plattdeutsch: 'hibbelig (hibbelich)',
    hochdeutsch: 'unruhig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hielen',
    hochdeutsch: 'Zwischenboden über dem Stall'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hielenkieker',
    hochdeutsch: 'Neugieriger (Spion)'
  },
  {
    artikel: '',
    plattdeutsch: 'hiemen',
    hochdeutsch: 'einatmen (beim Asthmaanfall)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hiemitten',
    hochdeutsch: 'Himbeeren'
  },
  {
    artikel: '',
    plattdeutsch: 'hier',
    hochdeutsch: 'hier'
  },
  {
    artikel: '',
    plattdeutsch: 'hierbi',
    hochdeutsch: 'hierbei'
  },
  {
    artikel: '',
    plattdeutsch: 'hiesig (hiesich)',
    hochdeutsch: 'einheimisch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hiesige',
    hochdeutsch: 'Ortsansässige'
  },
  {
    artikel: '',
    plattdeutsch: 'hii',
    hochdeutsch: 'linksherum (Befehl für Zugtiere)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Himmel',
    hochdeutsch: 'Himmel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Himmelsziergen',
    hochdeutsch: 'Bekassine (Sumpfschnepfe)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Himpen',
    hochdeutsch: 'Kornmaß (Hohlmaß = 40 Pfund)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Himphamp',
    hochdeutsch: 'Rückenbereich (zwischen Beckenkamm und Wirbelsäule)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hingst',
    hochdeutsch: 'Hengst'
  },
  {
    artikel: '',
    plattdeutsch: 'hinkeln',
    hochdeutsch: 'hinkeln'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hinkelspell',
    hochdeutsch: 'Hüpfspiel (mit einem Stein oder einer Dose)'
  },
  {
    artikel: '',
    plattdeutsch: 'hinken',
    hochdeutsch: 'hinken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hinner',
    hochdeutsch: 'Verhinderung'
  },
  {
    artikel: '',
    plattdeutsch: 'hinnern',
    hochdeutsch: 'hindern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hinnick',
    hochdeutsch: 'Heinrich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hippe',
    hochdeutsch: 'Ziege'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hirkel',
    hochdeutsch: 'Hechel (Flachskamm)'
  },
  {
    artikel: '',
    plattdeutsch: 'hirkeln',
    hochdeutsch: 'sticheln, Flachs kämmen'
  },
  {
    artikel: '',
    plattdeutsch: 'hissen',
    hochdeutsch: 'hetzen (sticheln)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hitken',
    hochdeutsch: 'Ziegenlamm, Mädchen (flott)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hitte',
    hochdeutsch: 'Hitze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hittestippen',
    hochdeutsch: 'Hautausschlag bei Hitze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hiue',
    hochdeutsch: 'Miete'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hiuemann',
    hochdeutsch: 'Heuerling'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hiuemannshius',
    hochdeutsch: 'Heuerlingshaus'
  },
  {
    artikel: '',
    plattdeutsch: 'hiulen',
    hochdeutsch: 'heulen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hius; de Hüser',
    hochdeutsch: 'Haus'
  },
  {
    artikel: '',
    plattdeutsch: 'hiusen',
    hochdeutsch: 'hausen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hiushöllerske',
    hochdeutsch: 'Haushälterin'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hiusmannskost',
    hochdeutsch: 'Hausmannskost'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hiusmittel',
    hochdeutsch: 'Hausmittel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hiusnoame',
    hochdeutsch: 'Familienname, Nachname'
  },
  {
    artikel: '',
    plattdeutsch: 'hiustern',
    hochdeutsch: 'verwahrlost wohnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hiusupgoaben',
    hochdeutsch: 'Hausaufgaben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hiut',
    hochdeutsch: 'Haut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoaber',
    hochdeutsch: 'Hafer'
  },
  {
    artikel: '',
    plattdeutsch: 'hoabhaft moaken',
    hochdeutsch: 'habhaft machen, festnehmen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Höachte',
    hochdeutsch: 'Höhe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoagel',
    hochdeutsch: 'Hagel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoagelkörns',
    hochdeutsch: 'Hagelkörner'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hoagelschiuer',
    hochdeutsch: 'Hagelschauer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoahn; de Hehne',
    hochdeutsch: 'Hahn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoahnenkamm',
    hochdeutsch: 'Hahnenkamm'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hoahnentreaßel',
    hochdeutsch: 'Hahnentritt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hoai',
    hochdeutsch: 'Heu'
  },
  {
    artikel: '',
    plattdeutsch: 'hoaien',
    hochdeutsch: 'heuen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoaihaupen',
    hochdeutsch: 'Heuhaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'hoalen',
    hochdeutsch: 'holen'
  },
  {
    artikel: '',
    plattdeutsch: 'hoan',
    hochdeutsch: 'dengeln (einer Sense)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoarbessen',
    hochdeutsch: 'Haarbesen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoarbössen',
    hochdeutsch: 'Haarbürste'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hoar; de Hoare',
    hochdeutsch: 'Haar'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoarfoarbe',
    hochdeutsch: 'Haarfarbe'
  },
  {
    artikel: '',
    plattdeutsch: 'hoarken',
    hochdeutsch: 'harken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoarken',
    hochdeutsch: 'Harke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoaken; de Hoakens',
    hochdeutsch: 'Haken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoarkentienen',
    hochdeutsch: 'Harkenzinken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoarklemmen',
    hochdeutsch: 'Haarklemme'
  },
  {
    artikel: '',
    plattdeutsch: 'hoarn',
    hochdeutsch: 'haaren'
  },
  {
    artikel: '',
    plattdeutsch: 'höarn',
    hochdeutsch: 'hören, gehören'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Höarn; de Höarns',
    hochdeutsch: 'Horn'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hoarnetz',
    hochdeutsch: 'Haarnetz'
  },
  {
    artikel: '',
    plattdeutsch: 'höarpen',
    hochdeutsch: 'Heuhaufen machen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoarspangen',
    hochdeutsch: 'Haarspange'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hoarspier',
    hochdeutsch: 'Haar (einzeln)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoasticken',
    hochdeutsch: 'Amboss zum Dengeln der Sense'
  },
  {
    artikel: '',
    plattdeutsch: 'höart',
    hochdeutsch: 'gehört'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoase',
    hochdeutsch: 'Hase, Schwungpflug (von Hand geführt)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoawk',
    hochdeutsch: 'Habicht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hochtiet; de Hochtiehen',
    hochdeutsch: 'Hochzeit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hochtietsbitter',
    hochdeutsch: 'Hochzeitsbitter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hochtietsdagg  (Hochtietsdach)',
    hochdeutsch: 'Hochzeitstag'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hochtietspoar',
    hochdeutsch: 'Hochzeitspaar'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hocken',
    hochdeutsch: 'Getreidegarben (20 zusammengestellte Garben)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoff; de Höbe (uppen Hobe)',
    hochdeutsch: 'Hof (auf dem Hof)'
  },
  {
    artikel: '',
    plattdeutsch: 'hoffentlich',
    hochdeutsch: 'hoffentlich'
  },
  {
    artikel: '',
    plattdeutsch: 'hoien',
    hochdeutsch: 'hüten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoihnerwiehm',
    hochdeutsch: 'Hühnerstall mit Sitzstangen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hoiete',
    hochdeutsch: 'Gatter (kleines)'
  },
  {
    artikel: '',
    plattdeutsch: 'hökern',
    hochdeutsch: 'handeln'
  },
  {
    artikel: '',
    plattdeutsch: 'hölten',
    hochdeutsch: 'hölzern, ungeschickt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hölter',
    hochdeutsch: 'Kopf'
  },
  {
    artikel: '',
    plattdeutsch: 'hopen',
    hochdeutsch: ''
  },
  {
    artikel: 'eck hope                hopere      häbbe hopet',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu hopes               hoperes    häss hopet',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et hopet    hopere      häff hopet',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei hopet     hoperen    häbb hopet',
    plattdeutsch: 'hoffen',
    hochdeutsch: ''
  },
  {
    artikel: 'ich hoffe                   hoffte          habe gehofft',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du hoffst                   hofftest',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es hofft         hoffte',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir hoffen ...             hofften ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hörlkoorf; de Hörlköörbe',
    hochdeutsch: 'Bügelkorb'
  },
  {
    artikel: '',
    plattdeutsch: 'hott',
    hochdeutsch: 'rechtsherum (Befehl für Zugtiere)'
  },
  {
    artikel: '',
    plattdeutsch: 'hottvetwass',
    hochdeutsch: 'durcheinander'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hueraaie',
    hochdeutsch: 'Hurerei'
  },
  {
    artikel: '',
    plattdeutsch: 'hügen',
    hochdeutsch: 'betteln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hülpe',
    hochdeutsch: 'Hilfe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hulster',
    hochdeutsch: 'Halbstarker'
  },
  {
    artikel: '',
    plattdeutsch: 'hult',
    hochdeutsch: 'halt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hult',
    hochdeutsch: 'Holz'
  },
  {
    artikel: '',
    plattdeutsch: 'Hult (innen Hulte)',
    hochdeutsch: 'Wald (im Wald)'
  },
  {
    artikel: '',
    plattdeutsch: 'hult moal',
    hochdeutsch: 'warte mal'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hultbock; de Hultböcke',
    hochdeutsch: 'Holzbock, Zecke'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hultdeil',
    hochdeutsch: 'Waldstück'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hultdiuben',
    hochdeutsch: 'Ringeltaube'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hulthaupen',
    hochdeutsch: 'Holzhaufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hultkopp',
    hochdeutsch: 'Holzkopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hultlierpel',
    hochdeutsch: 'Holzlöffel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hultnoagel; de Hultnegel',
    hochdeutsch: 'Holznagel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hultwurm',
    hochdeutsch: 'Holzwurm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hulzken',
    hochdeutsch: 'Holzschuhe'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hulzkenlear',
    hochdeutsch: 'Holzschuhleder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hulzkenmoaker',
    hochdeutsch: 'Holzschuhmacher'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hulzkenstierbel',
    hochdeutsch: 'Holzschuhstiefel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hunger',
    hochdeutsch: 'Hunger'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hungerhoarken',
    hochdeutsch: 'Stroh- oder Heuharke (große)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hungerhoaken',
    hochdeutsch: 'Mensch (hager)'
  },
  {
    artikel: '',
    plattdeutsch: 'hüngerig (hüngerich)',
    hochdeutsch: 'hungrig'
  },
  {
    artikel: '',
    plattdeutsch: 'hüünsken',
    hochdeutsch: 'schluchzen'
  },
  {
    artikel: '',
    plattdeutsch: 'hüünskerig (hüünskerich)',
    hochdeutsch: 'weinerlich'
  },
  {
    artikel: '',
    plattdeutsch: 'hüpig (hüpich)',
    hochdeutsch: 'übermäßig'
  },
  {
    artikel: '',
    plattdeutsch: 'hüppken',
    hochdeutsch: 'hüpfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hürbel',
    hochdeutsch: 'Hügel, Hobel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hürbelbank',
    hochdeutsch: 'Hobelbank'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Hurken',
    hochdeutsch: 'Hocke'
  },
  {
    artikel: '',
    plattdeutsch: 'hüü',
    hochdeutsch: 'los (Befehl für Zugtiere)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Hüüsken',
    hochdeutsch: 'Häuschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iber',
    hochdeutsch: 'Übereifer'
  },
  {
    artikel: '',
    plattdeutsch: 'iberig (iberich)',
    hochdeutsch: 'übereifrig'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Iis',
    hochdeutsch: 'Eis'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iisbär',
    hochdeutsch: 'Eisbär'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iisbleomen',
    hochdeutsch: 'Eisblumen'
  },
  {
    artikel: '',
    plattdeutsch: 'iisig (iisich)',
    hochdeutsch: 'eisig'
  },
  {
    artikel: '',
    plattdeutsch: 'iiskault',
    hochdeutsch: 'eiskalt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iistappen',
    hochdeutsch: 'Eiszapfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iisvurgel',
    hochdeutsch: 'Eisvogel'
  },
  {
    artikel: '',
    plattdeutsch: 'ile',
    hochdeutsch: 'alleine (schier)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ile',
    hochdeutsch: 'Eile'
  },
  {
    artikel: '',
    plattdeutsch: 'ilig (ilich)',
    hochdeutsch: 'eilig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Imme',
    hochdeutsch: 'Biene'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Immekoorf',
    hochdeutsch: 'Bienenkorb'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Immeschiuer',
    hochdeutsch: 'Bienenhaus'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Immevulk',
    hochdeutsch: 'Bienenvolk'
  },
  {
    artikel: '',
    plattdeutsch: 'in',
    hochdeutsch: 'in, in (Vorsilbe)'
  },
  {
    artikel: '',
    plattdeutsch: 'inbilgen',
    hochdeutsch: 'einbilden'
  },
  {
    artikel: '',
    plattdeutsch: 'inboiten',
    hochdeutsch: 'einheizen'
  },
  {
    artikel: '',
    plattdeutsch: 'inbreken',
    hochdeutsch: 'einbrechen'
  },
  {
    artikel: '',
    plattdeutsch: 'inbuchten',
    hochdeutsch: 'inhaftieren'
  },
  {
    artikel: '',
    plattdeutsch: 'inbündken',
    hochdeutsch: 'windeln'
  },
  {
    artikel: '',
    plattdeutsch: 'indecken',
    hochdeutsch: 'eindecken'
  },
  {
    artikel: '',
    plattdeutsch: 'indiuken',
    hochdeutsch: 'eintauchen'
  },
  {
    artikel: '',
    plattdeutsch: 'indregen',
    hochdeutsch: 'eintragen'
  },
  {
    artikel: '',
    plattdeutsch: 'indröagen',
    hochdeutsch: 'eintrocknen'
  },
  {
    artikel: '',
    plattdeutsch: 'indröahen',
    hochdeutsch: 'einzäunen'
  },
  {
    artikel: '',
    plattdeutsch: 'indrürsken',
    hochdeutsch: 'eindösen'
  },
  {
    artikel: '',
    plattdeutsch: 'indrürseln',
    hochdeutsch: 'einnicken'
  },
  {
    artikel: '',
    plattdeutsch: 'indusseln',
    hochdeutsch: 'einduseln'
  },
  {
    artikel: '',
    plattdeutsch: 'infaalen',
    hochdeutsch: 'einfallen'
  },
  {
    artikel: '',
    plattdeutsch: 'inföhmen',
    hochdeutsch: 'einfädeln'
  },
  {
    artikel: '',
    plattdeutsch: 'infoihen',
    hochdeutsch: 'Ernte einfahren'
  },
  {
    artikel: '',
    plattdeutsch: 'infreisen',
    hochdeutsch: 'einfrieren'
  },
  {
    artikel: '',
    plattdeutsch: 'infriedigen',
    hochdeutsch: 'einzäunen'
  },
  {
    artikel: '',
    plattdeutsch: 'ingeiten',
    hochdeutsch: 'eingießen'
  },
  {
    artikel: '',
    plattdeutsch: 'ingierm',
    hochdeutsch: 'eingeben'
  },
  {
    artikel: '',
    plattdeutsch: 'inkoken',
    hochdeutsch: 'einkochen'
  },
  {
    artikel: '',
    plattdeutsch: 'inkörpen',
    hochdeutsch: 'einkaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'inkriegen',
    hochdeutsch: 'beruhigen, einfahren'
  },
  {
    artikel: '',
    plattdeutsch: 'inloaen',
    hochdeutsch: 'einladen'
  },
  {
    artikel: '',
    plattdeutsch: 'inmessen',
    hochdeutsch: 'durchnässen'
  },
  {
    artikel: '',
    plattdeutsch: 'inmoaken',
    hochdeutsch: 'einmachen'
  },
  {
    artikel: '',
    plattdeutsch: 'inne (in de)',
    hochdeutsch: 'in der, in die'
  },
  {
    artikel: '',
    plattdeutsch: 'inne',
    hochdeutsch: 'zu Hause'
  },
  {
    artikel: '',
    plattdeutsch: 'inne Fissen',
    hochdeutsch: 'in Ordnung'
  },
  {
    artikel: '',
    plattdeutsch: 'inne Fuhr liggen',
    hochdeutsch: 'in der Furche liegen'
  },
  {
    artikel: '',
    plattdeutsch: 'inne Kiuhlen trehen',
    hochdeutsch: 'hinken'
  },
  {
    artikel: '',
    plattdeutsch: 'inne Richte',
    hochdeutsch: 'in gerader Richtung'
  },
  {
    artikel: '',
    plattdeutsch: 'inne Schiermskeraaie',
    hochdeutsch: 'in der Dämmerung'
  },
  {
    artikel: '',
    plattdeutsch: 'inne Tunnen trehen',
    hochdeutsch: 'in die Tonne treten'
  },
  {
    artikel: '',
    plattdeutsch: 'innedutten',
    hochdeutsch: 'entzweit, zerbrochen, kaputt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Innefuhrpeerd',
    hochdeutsch: 'Pferd (rechts im Gespann, das in der Furche geht)'
  },
  {
    artikel: '',
    plattdeutsch: 'innehoien',
    hochdeutsch: 'einhüten (Haus hüten)'
  },
  {
    artikel: '',
    plattdeutsch: 'innemoite',
    hochdeutsch: 'entgegen'
  },
  {
    artikel: '',
    plattdeutsch: 'innemoitekurm',
    hochdeutsch: 'entgegenkommen'
  },
  {
    artikel: '',
    plattdeutsch: 'innen',
    hochdeutsch: 'in den, in dem, im'
  },
  {
    artikel: '',
    plattdeutsch: 'innen Dürbogen',
    hochdeutsch: 'Deelenvorraum (offen)'
  },
  {
    artikel: '',
    plattdeutsch: 'innessen',
    hochdeutsch: 'einnisten'
  },
  {
    artikel: '',
    plattdeutsch: 'innicken',
    hochdeutsch: 'einnicken'
  },
  {
    artikel: '',
    plattdeutsch: 'innierm',
    hochdeutsch: 'einnehmen'
  },
  {
    artikel: '',
    plattdeutsch: 'inpacken',
    hochdeutsch: 'einpacken'
  },
  {
    artikel: '',
    plattdeutsch: 'inplocken',
    hochdeutsch: 'einbröckeln'
  },
  {
    artikel: '',
    plattdeutsch: 'inpucken',
    hochdeutsch: 'einschlagen (Wickeltechnik bei Säuglingen)'
  },
  {
    artikel: '',
    plattdeutsch: 'inpündken',
    hochdeutsch: 'abwiegen'
  },
  {
    artikel: '',
    plattdeutsch: 'inrenken',
    hochdeutsch: 'einrenken'
  },
  {
    artikel: '',
    plattdeutsch: 'inrichen',
    hochdeutsch: 'einrichten'
  },
  {
    artikel: '',
    plattdeutsch: 'inrieben',
    hochdeutsch: 'einreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'inriegen',
    hochdeutsch: 'einreihen'
  },
  {
    artikel: '',
    plattdeutsch: 'inroihen',
    hochdeutsch: 'einrühren'
  },
  {
    artikel: '',
    plattdeutsch: 'inrümen',
    hochdeutsch: 'einräumen'
  },
  {
    artikel: '',
    plattdeutsch: 'insacken',
    hochdeutsch: 'einsacken'
  },
  {
    artikel: '',
    plattdeutsch: 'insäggen',
    hochdeutsch: 'überzeugen'
  },
  {
    artikel: '',
    plattdeutsch: 'insärpen',
    hochdeutsch: 'einseifen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Inschlagg (Inschlach)',
    hochdeutsch: 'Schussgarn beim Weben'
  },
  {
    artikel: '',
    plattdeutsch: 'inschloan',
    hochdeutsch: 'einschlagen'
  },
  {
    artikel: '',
    plattdeutsch: 'inschloapen',
    hochdeutsch: 'einschlafen, entschlafen'
  },
  {
    artikel: '',
    plattdeutsch: 'inschmehen',
    hochdeutsch: 'einschmieren'
  },
  {
    artikel: '',
    plattdeutsch: 'inschoalen',
    hochdeutsch: 'einschalen'
  },
  {
    artikel: '',
    plattdeutsch: 'insetten',
    hochdeutsch: 'einsetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'insoarken',
    hochdeutsch: 'einsargen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Insoat',
    hochdeutsch: 'Einsaat'
  },
  {
    artikel: '',
    plattdeutsch: 'insoiken',
    hochdeutsch: 'sortieren (Kartoffeln)'
  },
  {
    artikel: '',
    plattdeutsch: 'insölten',
    hochdeutsch: 'einsalzen'
  },
  {
    artikel: '',
    plattdeutsch: 'insperrn',
    hochdeutsch: 'einsperren'
  },
  {
    artikel: '',
    plattdeutsch: 'inspringen',
    hochdeutsch: 'einspringen (schnell helfen)'
  },
  {
    artikel: '',
    plattdeutsch: 'instanne',
    hochdeutsch: 'imstande (gut entwickelte Person), fähig'
  },
  {
    artikel: '',
    plattdeutsch: 'insteken',
    hochdeutsch: 'einstecken'
  },
  {
    artikel: '',
    plattdeutsch: 'instippen',
    hochdeutsch: 'einstippen'
  },
  {
    artikel: '',
    plattdeutsch: 'instoahn',
    hochdeutsch: 'einstehen'
  },
  {
    artikel: '',
    plattdeutsch: 'insutken',
    hochdeutsch: 'einsauen'
  },
  {
    artikel: '',
    plattdeutsch: 'int (in dat)',
    hochdeutsch: 'ins (in das)'
  },
  {
    artikel: '',
    plattdeutsch: 'intappen',
    hochdeutsch: 'einzapfen'
  },
  {
    artikel: '',
    plattdeutsch: 'inteihn',
    hochdeutsch: 'einziehen'
  },
  {
    artikel: '',
    plattdeutsch: 'intiusken',
    hochdeutsch: 'eintauschen'
  },
  {
    artikel: '',
    plattdeutsch: 'intrechtern',
    hochdeutsch: 'eintrichtern'
  },
  {
    artikel: '',
    plattdeutsch: 'intrehen',
    hochdeutsch: 'eintreten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Intucht',
    hochdeutsch: 'Inzucht'
  },
  {
    artikel: '',
    plattdeutsch: 'intüsken',
    hochdeutsch: 'inzwischen'
  },
  {
    artikel: '',
    plattdeutsch: 'intüünen',
    hochdeutsch: 'einzäunen'
  },
  {
    artikel: '',
    plattdeutsch: 'investoahn',
    hochdeutsch: 'einverstanden'
  },
  {
    artikel: '',
    plattdeutsch: 'inwennig (inwennich)',
    hochdeutsch: 'inwendig'
  },
  {
    artikel: '',
    plattdeutsch: 'inwilligen',
    hochdeutsch: 'einwilligen'
  },
  {
    artikel: '',
    plattdeutsch: 'inwossen',
    hochdeutsch: 'eingewachsen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Inwürpel',
    hochdeutsch: 'Türverriegelung von innen bei Spangentüren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Inwürpelhoaken',
    hochdeutsch: 'Gegenstück zur Türverriegelung'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Irmel',
    hochdeutsch: 'Blattläuse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Irsel',
    hochdeutsch: 'Esel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Iisen',
    hochdeutsch: 'Eisen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iisenboahn',
    hochdeutsch: 'Eisenbahn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iuhe',
    hochdeutsch: 'Uhr'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iuhekiehen',
    hochdeutsch: 'Uhrkette'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iuhemoaker',
    hochdeutsch: 'Uhrmacher'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iuhetiet',
    hochdeutsch: 'Uhrzeit'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Iuheweerk',
    hochdeutsch: 'Uhrwerk'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iulen',
    hochdeutsch: 'Eule'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iulenkassen',
    hochdeutsch: 'Eulenkasten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Iulenlock',
    hochdeutsch: 'Eulenloch (Einflugloch)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iulenspaaigel',
    hochdeutsch: 'Eulenspiegel'
  },
  {
    artikel: '',
    plattdeutsch: 'iuse',
    hochdeutsch: 'unser, unsere'
  },
  {
    artikel: '',
    plattdeutsch: 'Iuse',
    hochdeutsch: 'Unsrige (Familienanhörige)'
  },
  {
    artikel: '',
    plattdeutsch: 'iusereiner',
    hochdeutsch: 'unsereiner'
  },
  {
    artikel: '',
    plattdeutsch: 'iust',
    hochdeutsch: 'unser'
  },
  {
    artikel: '',
    plattdeutsch: 'iutbacken',
    hochdeutsch: 'ausbacken'
  },
  {
    artikel: '',
    plattdeutsch: 'iutbetern',
    hochdeutsch: 'ausbessern'
  },
  {
    artikel: '',
    plattdeutsch: 'iutbeoen',
    hochdeutsch: 'ausbauen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutbetoahlen',
    hochdeutsch: 'ausbezahlen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutbiulen',
    hochdeutsch: 'ausbeulen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutblieben',
    hochdeutsch: 'ausbleiben'
  },
  {
    artikel: '',
    plattdeutsch: 'iutbloaihen',
    hochdeutsch: 'ausblühen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutbloien',
    hochdeutsch: 'ausbluten'
  },
  {
    artikel: '',
    plattdeutsch: 'iutbössen',
    hochdeutsch: 'ausbürsten, weglaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutbottern',
    hochdeutsch: 'ausgeschlagen (z. B. Achslager)'
  },
  {
    artikel: '',
    plattdeutsch: 'iutbrähen',
    hochdeutsch: 'ausbreiten'
  },
  {
    artikel: '',
    plattdeutsch: 'iutbreken',
    hochdeutsch: 'ausbrechen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iutbund',
    hochdeutsch: 'Taugenichts'
  },
  {
    artikel: '',
    plattdeutsch: 'iutdeilen',
    hochdeutsch: 'austeilen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutdenken',
    hochdeutsch: 'ausdenken'
  },
  {
    artikel: '',
    plattdeutsch: 'iutdeon',
    hochdeutsch: 'spendieren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iutdiuer',
    hochdeutsch: 'Ausdauer'
  },
  {
    artikel: '',
    plattdeutsch: 'iutdöppen',
    hochdeutsch: 'aushülsen (Erbsen, Bohnen)'
  },
  {
    artikel: '',
    plattdeutsch: 'iutdössken',
    hochdeutsch: 'ausdreschen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutdraaihen',
    hochdeutsch: 'ausdrehen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutdregen',
    hochdeutsch: 'austragen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutdrieben',
    hochdeutsch: 'austreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'iutdrinken',
    hochdeutsch: 'austrinken'
  },
  {
    artikel: '',
    plattdeutsch: 'iutdröagen',
    hochdeutsch: 'austrocknen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutdrücken',
    hochdeutsch: 'ausdrücken'
  },
  {
    artikel: '',
    plattdeutsch: 'iut, iute',
    hochdeutsch: 'aus'
  },
  {
    artikel: '',
    plattdeutsch: 'iuten',
    hochdeutsch: 'aus dem'
  },
  {
    artikel: '',
    plattdeutsch: 'iutenanner',
    hochdeutsch: 'auseinander'
  },
  {
    artikel: '',
    plattdeutsch: 'iuteneine',
    hochdeutsch: 'getrennt'
  },
  {
    artikel: '',
    plattdeutsch: 'iutfaalen',
    hochdeutsch: 'ausfallen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutfechten',
    hochdeutsch: 'ausfechten'
  },
  {
    artikel: '',
    plattdeutsch: 'iutfegen',
    hochdeutsch: 'ausfegen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutfeogen',
    hochdeutsch: 'ausfugen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutfitken',
    hochdeutsch: 'abstauben (mit dem Gänseflügel)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iutflugg; de Iutflüge',
    hochdeutsch: 'Ausflug'
  },
  {
    artikel: '',
    plattdeutsch: 'iutfoihen',
    hochdeutsch: 'ausfahren'
  },
  {
    artikel: '',
    plattdeutsch: 'iutfransen',
    hochdeutsch: 'ausfransen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutfreten',
    hochdeutsch: 'ausfressen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutfroagen',
    hochdeutsch: 'ausfragen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutgeiten',
    hochdeutsch: 'ausgießen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutgierm',
    hochdeutsch: 'ausgeben'
  },
  {
    artikel: '',
    plattdeutsch: 'iutgoahn',
    hochdeutsch: 'ausgehen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutgroaben',
    hochdeutsch: 'ausgraben'
  },
  {
    artikel: '',
    plattdeutsch: 'iutgürlen',
    hochdeutsch: 'herausrieseln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iutguss',
    hochdeutsch: 'Ausguss'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iuthang',
    hochdeutsch: 'Aushang'
  },
  {
    artikel: '',
    plattdeutsch: 'iuthaulen',
    hochdeutsch: 'aushalten'
  },
  {
    artikel: '',
    plattdeutsch: 'iutheilen',
    hochdeutsch: 'ausheilen'
  },
  {
    artikel: '',
    plattdeutsch: 'iuthoalen',
    hochdeutsch: 'ausholen'
  },
  {
    artikel: '',
    plattdeutsch: 'iuthöarn',
    hochdeutsch: 'aushorchen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutjuckeln',
    hochdeutsch: 'ausleiern'
  },
  {
    artikel: '',
    plattdeutsch: 'iutkieken',
    hochdeutsch: 'auswählen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutkielen',
    hochdeutsch: 'ausschlagen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutkinnen',
    hochdeutsch: 'auskennen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutklaaien',
    hochdeutsch: 'ausbuddeln'
  },
  {
    artikel: '',
    plattdeutsch: 'iutklamüsern',
    hochdeutsch: 'erforschen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutkloppen',
    hochdeutsch: 'ausklopfen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutkniepen',
    hochdeutsch: 'auskneifen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutkniepen',
    hochdeutsch: 'fortlaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutkroamen',
    hochdeutsch: 'auskramen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutküen',
    hochdeutsch: 'aussprechen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutlachen',
    hochdeutsch: 'auslachen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iutlänner',
    hochdeutsch: 'Ausländer'
  },
  {
    artikel: '',
    plattdeutsch: 'iutlappen',
    hochdeutsch: 'aussaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutlährnen',
    hochdeutsch: 'ausleihen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutleggen',
    hochdeutsch: 'auslegen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutlicken',
    hochdeutsch: 'auslecken'
  },
  {
    artikel: '',
    plattdeutsch: 'iutlierpeln',
    hochdeutsch: 'auslöffeln'
  },
  {
    artikel: '',
    plattdeutsch: 'iutliuken',
    hochdeutsch: 'herausziehen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iutlöarper',
    hochdeutsch: 'Ausläufer (Ableger)'
  },
  {
    artikel: '',
    plattdeutsch: 'iutlöasen',
    hochdeutsch: 'herauslösen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutlösken',
    hochdeutsch: 'auslöschen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutmessen',
    hochdeutsch: 'ausmisten'
  },
  {
    artikel: '',
    plattdeutsch: 'iutmeten',
    hochdeutsch: 'ausmessen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutnaaien',
    hochdeutsch: 'weglaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutnauten',
    hochdeutsch: 'ausdenken'
  },
  {
    artikel: '',
    plattdeutsch: 'iutnierm',
    hochdeutsch: 'ausnehmen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutoaen',
    hochdeutsch: 'ausarten'
  },
  {
    artikel: '',
    plattdeutsch: 'iutpündken',
    hochdeutsch: 'auswiegen (pfundweise)'
  },
  {
    artikel: '',
    plattdeutsch: 'iutreken',
    hochdeutsch: 'ausrechnen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutrenken',
    hochdeutsch: 'ausrenken'
  },
  {
    artikel: '',
    plattdeutsch: 'iutrichen',
    hochdeutsch: 'ausrichten'
  },
  {
    artikel: '',
    plattdeutsch: 'iutrieten',
    hochdeutsch: 'ausreißen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutriuhen',
    hochdeutsch: 'ausruhen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutscheiten',
    hochdeutsch: 'ausschießen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutschellen',
    hochdeutsch: 'ausschimpfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iutschlagg (Iutschlach)',
    hochdeutsch: 'Ausschlag'
  },
  {
    artikel: '',
    plattdeutsch: 'iutschliuten',
    hochdeutsch: 'ausschließen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutschloapen',
    hochdeutsch: 'ausschlafen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutschniehen',
    hochdeutsch: 'ausschneiden, kastrieren'
  },
  {
    artikel: '',
    plattdeutsch: 'iutsetten',
    hochdeutsch: 'aussetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutsiedeln',
    hochdeutsch: 'aussiedeln'
  },
  {
    artikel: '',
    plattdeutsch: 'iutsierben',
    hochdeutsch: 'aussieben'
  },
  {
    artikel: '',
    plattdeutsch: 'iutsitten',
    hochdeutsch: 'aussitzen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutsoiken',
    hochdeutsch: 'aussuchen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutspaaien',
    hochdeutsch: 'ausspucken'
  },
  {
    artikel: '',
    plattdeutsch: 'iutsteerben',
    hochdeutsch: 'aussterben'
  },
  {
    artikel: '',
    plattdeutsch: 'iutsteken',
    hochdeutsch: 'ausstechen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutstoahn',
    hochdeutsch: 'ausstehen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutstoppen',
    hochdeutsch: 'ausstopfen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutstörten',
    hochdeutsch: 'ausstoßen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iutstüer',
    hochdeutsch: 'Aussteuer'
  },
  {
    artikel: '',
    plattdeutsch: 'iutteihn',
    hochdeutsch: 'ausziehen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iutteihnedisk',
    hochdeutsch: 'Ausziehtisch'
  },
  {
    artikel: '',
    plattdeutsch: 'iutteiken',
    hochdeutsch: 'auszeichnen'
  },
  {
    artikel: '',
    plattdeutsch: 'iuttellen',
    hochdeutsch: 'auszählen'
  },
  {
    artikel: '',
    plattdeutsch: 'iuttrehen',
    hochdeutsch: 'austreten'
  },
  {
    artikel: '',
    plattdeutsch: 'iutwannern',
    hochdeutsch: 'auswandern'
  },
  {
    artikel: '',
    plattdeutsch: 'iutwasken',
    hochdeutsch: 'auswaschen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutwassen',
    hochdeutsch: 'auswachsen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iutwegg (Iutwech)',
    hochdeutsch: 'Ausweg'
  },
  {
    artikel: '',
    plattdeutsch: 'iutwennig (iutwennich)',
    hochdeutsch: 'auswendig'
  },
  {
    artikel: '',
    plattdeutsch: 'iutwieken',
    hochdeutsch: 'ausweichen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Iutwies',
    hochdeutsch: 'Ausweis'
  },
  {
    artikel: '',
    plattdeutsch: 'iutwiesen',
    hochdeutsch: 'ausweisen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutwossen',
    hochdeutsch: 'ausgewachsen'
  },
  {
    artikel: '',
    plattdeutsch: 'iutzappen',
    hochdeutsch: 'ausschwatzen'
  },
  {
    artikel: '',
    plattdeutsch: 'jabbeln',
    hochdeutsch: 'plappern (viel)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Jabbeloars',
    hochdeutsch: 'Vielredner'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Jabbelpott',
    hochdeutsch: 'Quasselstrippe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Jacht',
    hochdeutsch: 'Jagd'
  },
  {
    artikel: '',
    plattdeutsch: 'jachtern',
    hochdeutsch: 'hinterherlaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'jackelig (jackelich)',
    hochdeutsch: 'instabil (ausgeleiert)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Jacken',
    hochdeutsch: 'Damenjacke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Janewoar',
    hochdeutsch: 'Januar'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Japp',
    hochdeutsch: 'Heißhunger'
  },
  {
    artikel: '',
    plattdeutsch: 'jappen',
    hochdeutsch: 'Luft schnappen, gaffen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Jauche',
    hochdeutsch: 'Jauche'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Jauchefatt',
    hochdeutsch: 'Jauchefass'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Jauchelock',
    hochdeutsch: 'Jauchegrube'
  },
  {
    artikel: '',
    plattdeutsch: 'jauchen',
    hochdeutsch: 'jauchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Jeger',
    hochdeutsch: 'Jäger'
  },
  {
    artikel: '',
    plattdeutsch: 'jeo',
    hochdeutsch: 'ja'
  },
  {
    artikel: '',
    plattdeutsch: 'jickelig',
    hochdeutsch: 'instabil (ausgeleiert)'
  },
  {
    artikel: '',
    plattdeutsch: 'jitken',
    hochdeutsch: 'fahren (zum Vergnügen)'
  },
  {
    artikel: '',
    plattdeutsch: 'jiuchen',
    hochdeutsch: 'jauchzen'
  },
  {
    artikel: '',
    plattdeutsch: 'joa',
    hochdeutsch: 'ja'
  },
  {
    artikel: '',
    plattdeutsch: 'joagen',
    hochdeutsch: 'jagen'
  },
  {
    artikel: '',
    plattdeutsch: 'joahnen',
    hochdeutsch: 'gähnen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Joahr',
    hochdeutsch: 'Jahr'
  },
  {
    artikel: '',
    plattdeutsch: 'joahrelang',
    hochdeutsch: 'jahrelang'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Joahrestiet; de Joahrestiehen',
    hochdeutsch: 'Jahreszeit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Joahreszoahl',
    hochdeutsch: 'Jahreszahl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Joahrmoark',
    hochdeutsch: 'Jahrmarkt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Jucht',
    hochdeutsch: 'Prügel'
  },
  {
    artikel: '',
    plattdeutsch: 'juckeln',
    hochdeutsch: 'herumfahren'
  },
  {
    artikel: '',
    plattdeutsch: 'jüjacken',
    hochdeutsch: 'hin- und herbewegen (ohne rechtes Weiterkommen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Juli',
    hochdeutsch: 'Juli'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Junge',
    hochdeutsch: 'Sohn, Junge'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Juni',
    hochdeutsch: 'Juni'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Juppen',
    hochdeutsch: 'Herrenjacke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Jürk',
    hochdeutsch: 'Juckreiz'
  },
  {
    artikel: '',
    plattdeutsch: 'jürken',
    hochdeutsch: 'jucken'
  },
  {
    artikel: '',
    plattdeutsch: 'kaalben',
    hochdeutsch: 'kalben'
  },
  {
    artikel: '',
    plattdeutsch: 'kaalbern',
    hochdeutsch: 'balgen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kaalf; de Kälber',
    hochdeutsch: 'Kalb'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaalk',
    hochdeutsch: 'Kalk'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaalkkiuhlen',
    hochdeutsch: 'Kalkgrube'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaalkloaen',
    hochdeutsch: 'Kalkwanne zum Kalk löschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaalkohmn',
    hochdeutsch: 'Kalkofen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kabacke',
    hochdeutsch: 'Haus (verfallen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kabbelaaie',
    hochdeutsch: 'Streiterei (freundschaftlich)'
  },
  {
    artikel: '',
    plattdeutsch: 'kabbeln',
    hochdeutsch: 'streiten (freundschaftlich)'
  },
  {
    artikel: '',
    plattdeutsch: 'käbbeln',
    hochdeutsch: 'streiten (freundschaftlich)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kachelohmn',
    hochdeutsch: 'Kachelofen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kaff',
    hochdeutsch: 'Spreu (die beim Korn dreschen anfällt)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaffe',
    hochdeutsch: 'Kaffee'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaffebauhnen',
    hochdeutsch: 'Kaffeebohnen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kaffedicksel',
    hochdeutsch: 'Kaffeesatz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaffekannen',
    hochdeutsch: 'Kaffeekanne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaffekiertel',
    hochdeutsch: 'Kaffeekessel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaffemührlen',
    hochdeutsch: 'Kaffeemühle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaffeprütt',
    hochdeutsch: 'Kaffeesatz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaffetiet',
    hochdeutsch: 'Kaffeezeit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaffwannen',
    hochdeutsch: 'Spreuwanne'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kammrad',
    hochdeutsch: 'Zahnrad aus Holz'
  },
  {
    artikel: '',
    plattdeutsch: 'kann (kanns)',
    hochdeutsch: 'kann (kannst)'
  },
  {
    artikel: '',
    plattdeutsch: 'kanns diu (konns diu)',
    hochdeutsch: 'kannst du'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kanter',
    hochdeutsch: 'Kantor (Organist)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kanthoaken',
    hochdeutsch: 'Kanthaken (Stange mit Eisenhaken zum Bewegen von Baumstämmen)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kanthult',
    hochdeutsch: 'Kantholz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Käse',
    hochdeutsch: 'Käse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kasse',
    hochdeutsch: 'Kasse, Geldinstitut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Katte',
    hochdeutsch: 'Katze'
  },
  {
    artikel: '',
    plattdeutsch: 'katthoaken',
    hochdeutsch: 'streiten'
  },
  {
    artikel: '',
    plattdeutsch: 'katrente goahn',
    hochdeutsch: 'fliehen, abhauen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kaul',
    hochdeutsch: 'Kohl'
  },
  {
    artikel: '',
    plattdeutsch: 'kault',
    hochdeutsch: 'kalt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Keerken',
    hochdeutsch: 'Kirche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Keerkenbank',
    hochdeutsch: 'Kirchenbank'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Keerkenbeok',
    hochdeutsch: 'Kirchenbuch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Keerkeniuhe',
    hochdeutsch: 'Kirchenuhr'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Keerkensteohl',
    hochdeutsch: 'Kirchenstuhl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Keerkhoff',
    hochdeutsch: 'Friedhof'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Keerkturm',
    hochdeutsch: 'Kirchturm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kehln',
    hochdeutsch: 'Kehle'
  },
  {
    artikel: '',
    plattdeutsch: 'kein',
    hochdeutsch: 'kein'
  },
  {
    artikel: '',
    plattdeutsch: 'keinen',
    hochdeutsch: 'keinen'
  },
  {
    artikel: '',
    plattdeutsch: 'keinmoal',
    hochdeutsch: 'niemals'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kellerlock',
    hochdeutsch: 'Kellerloch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kelln',
    hochdeutsch: 'Kelle, Schöpfkelle'
  },
  {
    artikel: '',
    plattdeutsch: 'kelln (et kellt)',
    hochdeutsch: 'schmerzen (es schmerzt)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kemellen',
    hochdeutsch: 'Kamille'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kemeode',
    hochdeutsch: 'Kommode'
  },
  {
    artikel: '',
    plattdeutsch: 'kemeodig (kemeodich)',
    hochdeutsch: 'angenehm, bequem'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kenienken',
    hochdeutsch: 'Kaninchen'
  },
  {
    artikel: '',
    plattdeutsch: 'keoen',
    hochdeutsch: 'kauen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Keoh',
    hochdeutsch: 'Kuh'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Keohbiuer',
    hochdeutsch: 'Kuhbauer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Keohkiehen',
    hochdeutsch: 'Kuhkette'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Keohstärt',
    hochdeutsch: 'Kuhschwanz'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Keohveih',
    hochdeutsch: 'Kühe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Keoken',
    hochdeutsch: 'Kuchen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Keokenbleck',
    hochdeutsch: 'Kuchenblech'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Keokenploaten',
    hochdeutsch: 'Kuchenblech'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kerl',
    hochdeutsch: 'Mann'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kerls',
    hochdeutsch: 'Männer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ketuffel',
    hochdeutsch: 'Kartoffel'
  },
  {
    artikel: '',
    plattdeutsch: 'kehen',
    hochdeutsch: 'kehren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kiehen',
    hochdeutsch: 'Kette'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kiehenlett',
    hochdeutsch: 'Kettenglied'
  },
  {
    artikel: '',
    plattdeutsch: 'kieken',
    hochdeutsch: 'gucken, schauen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kiel',
    hochdeutsch: 'Keil'
  },
  {
    artikel: '',
    plattdeutsch: 'kielhacken',
    hochdeutsch: 'weglaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'kiemen',
    hochdeutsch: 'keimen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kiemen',
    hochdeutsch: 'Keim'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kiend',
    hochdeutsch: 'Kind'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kierseling',
    hochdeutsch: 'Findling'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kiertel',
    hochdeutsch: 'Kessel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kinkerlitzken',
    hochdeutsch: 'Nichtigkeit (unnützer Kram)'
  },
  {
    artikel: '',
    plattdeutsch: 'kinnen',
    hochdeutsch: 'kennen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kinner',
    hochdeutsch: 'Kinder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kinneraaie',
    hochdeutsch: 'Kinderei'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kinnerberre',
    hochdeutsch: 'Kinderbett'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kinnerdörpe',
    hochdeutsch: 'Kindtaufe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kinnergoaen',
    hochdeutsch: 'Kindergarten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kinnersteohl',
    hochdeutsch: 'Kinderstuhl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kinnerwoagen',
    hochdeutsch: 'Kinderwagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kipp',
    hochdeutsch: 'Walm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kippkoaen',
    hochdeutsch: 'Kippkarre'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kisken',
    hochdeutsch: 'Kirschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kiskenstein',
    hochdeutsch: 'Kirschenstein'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kitken',
    hochdeutsch: 'Gefängnis'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kiugel',
    hochdeutsch: 'Kugel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kiuhlen',
    hochdeutsch: 'Kuhle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kiuhlengreber',
    hochdeutsch: 'Friedhofswärter'
  },
  {
    artikel: '',
    plattdeutsch: 'kium',
    hochdeutsch: 'kaum'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kiusen',
    hochdeutsch: 'Backenzahn, Scharte im Werkzeug'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kiusenbreker',
    hochdeutsch: 'Zahnarzt'
  },
  {
    artikel: '',
    plattdeutsch: 'klaaien',
    hochdeutsch: 'klettern, kratzen, kritzeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Klaaieraaie',
    hochdeutsch: 'Schmiererei (im Schulheft)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kläärbürgel',
    hochdeutsch: 'Kleiderbügel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kläärschapp',
    hochdeutsch: 'Kleiderschrank'
  },
  {
    artikel: '',
    plattdeutsch: 'klabasterig (klabasterich)',
    hochdeutsch: 'hektisch'
  },
  {
    artikel: '',
    plattdeutsch: 'klabastern',
    hochdeutsch: 'hasten'
  },
  {
    artikel: '',
    plattdeutsch: 'kläen',
    hochdeutsch: 'kleiden'
  },
  {
    artikel: '',
    plattdeutsch: 'klamüsern',
    hochdeutsch: 'zerlegen, sortieren'
  },
  {
    artikel: '',
    plattdeutsch: 'klärben',
    hochdeutsch: 'kleben'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Klärd',
    hochdeutsch: 'Kleid'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Klasse',
    hochdeutsch: 'Klasse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Klatten',
    hochdeutsch: 'Haare  (verfilzt)'
  },
  {
    artikel: '',
    plattdeutsch: 'klebusterig (klebusterich)',
    hochdeutsch: 'hektisch'
  },
  {
    artikel: '',
    plattdeutsch: 'klebustern',
    hochdeutsch: 'hasten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kleoen',
    hochdeutsch: 'Knäuel'
  },
  {
    artikel: '',
    plattdeutsch: 'kleok',
    hochdeutsch: 'klug, schlau'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kleokschieter',
    hochdeutsch: 'Klugscheißer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kleokschieter',
    hochdeutsch: 'Wasserwaage'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Klierbeklatten',
    hochdeutsch: 'Kletten'
  },
  {
    artikel: '',
    plattdeutsch: 'klierben',
    hochdeutsch: 'kleben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kliester',
    hochdeutsch: 'Kleister'
  },
  {
    artikel: '',
    plattdeutsch: 'kliestern',
    hochdeutsch: 'kleistern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Klingelbühl',
    hochdeutsch: 'Klingelbeutel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Klitzkenzapp',
    hochdeutsch: 'Lakritz'
  },
  {
    artikel: '',
    plattdeutsch: 'klitzkerig (klitzkerich)',
    hochdeutsch: 'klebrig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kliuten',
    hochdeutsch: 'Erdklumpen'
  },
  {
    artikel: '',
    plattdeutsch: 'kliutendichte',
    hochdeutsch: 'klar im Kopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kliutentreher',
    hochdeutsch: 'Bauer  (scherzhaft)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kloaber',
    hochdeutsch: 'Klee'
  },
  {
    artikel: '',
    plattdeutsch: 'kloar',
    hochdeutsch: 'klar'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Klöarben',
    hochdeutsch: 'Klöben'
  },
  {
    artikel: '',
    plattdeutsch: 'kloarmoaken',
    hochdeutsch: 'erklären'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Klobenmest',
    hochdeutsch: 'Schälmesser'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Klocken',
    hochdeutsch: 'Glocke, Glocken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Klopphingst',
    hochdeutsch: 'Hengst  (analog zum Binneneber)'
  },
  {
    artikel: '',
    plattdeutsch: 'kloterig (kloterich)',
    hochdeutsch: 'kaputt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Klucke',
    hochdeutsch: 'Bruthenne'
  },
  {
    artikel: '',
    plattdeutsch: 'klucksk',
    hochdeutsch: 'brutbereit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Klümpe',
    hochdeutsch: 'Grießklöße, Mehlklöße'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Klümpken',
    hochdeutsch: 'Bonbons'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Klumpsoat',
    hochdeutsch: 'Stoppelrübensamen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Klüngelpott',
    hochdeutsch: 'Trödelfritze'
  },
  {
    artikel: '',
    plattdeutsch: 'klunstern',
    hochdeutsch: 'hinfallen, polterndes Hinfallen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Klürtergeld',
    hochdeutsch: 'Kleingeld'
  },
  {
    artikel: '',
    plattdeutsch: 'klürterig  (klürterich)',
    hochdeutsch: 'klapperig  (krank)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Klürtern',
    hochdeutsch: 'Kotbrocken am Tierfell  (besonders bei Kühen)'
  },
  {
    artikel: '',
    plattdeutsch: 'klürtern',
    hochdeutsch: 'klackerndes Geräusch'
  },
  {
    artikel: '',
    plattdeutsch: 'klüütken',
    hochdeutsch: 'werfen mit Erdklumpen oder Steinchen'
  },
  {
    artikel: '',
    plattdeutsch: 'knaaien',
    hochdeutsch: 'knien'
  },
  {
    artikel: '',
    plattdeutsch: 'Knaail',
    hochdeutsch: 'Kaneel (Zimt)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Knai; de Knaaie',
    hochdeutsch: 'Knie'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knaibiulen',
    hochdeutsch: 'Kniekehle'
  },
  {
    artikel: '',
    plattdeutsch: 'knaisärlen',
    hochdeutsch: 'Kniefessel (bei einer Kuh einen Strick von den Hörnern zum Knie binden)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knaischieben',
    hochdeutsch: 'Kniescheibe'
  },
  {
    artikel: '',
    plattdeutsch: 'knappe',
    hochdeutsch: 'knapp, eng, kaum'
  },
  {
    artikel: '',
    plattdeutsch: 'knappen',
    hochdeutsch: 'knacken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knaup',
    hochdeutsch: 'Knopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kneost',
    hochdeutsch: 'Knust (Endstück des Brotes)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knibbelaaie',
    hochdeutsch: 'Feinarbeit'
  },
  {
    artikel: '',
    plattdeutsch: 'knibbelig (knibbelich)',
    hochdeutsch: 'kniffelig'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Knick',
    hochdeutsch: 'Genick'
  },
  {
    artikel: '',
    plattdeutsch: 'knickerig (knickerich)',
    hochdeutsch: 'knauserig'
  },
  {
    artikel: '',
    plattdeutsch: 'kniepen',
    hochdeutsch: 'kneifen, frieren'
  },
  {
    artikel: '',
    plattdeutsch: 'kniepig  (kniepich)',
    hochdeutsch: 'geizig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knieptangen',
    hochdeutsch: 'Kneifzange'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knierpe',
    hochdeutsch: 'Kniff'
  },
  {
    artikel: '',
    plattdeutsch: 'knippörgen',
    hochdeutsch: 'zwinkern'
  },
  {
    artikel: '',
    plattdeutsch: 'kniuserig  (kniuserich)',
    hochdeutsch: 'geizig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knoal',
    hochdeutsch: 'Kanal'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knoken',
    hochdeutsch: 'Knochen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knokenbreker',
    hochdeutsch: 'Osteopat'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knubbel',
    hochdeutsch: 'Knoten unter der Haut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knubbelknoken',
    hochdeutsch: 'Knorpel'
  },
  {
    artikel: '',
    plattdeutsch: 'knüppen',
    hochdeutsch: 'knüpfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knüppen',
    hochdeutsch: 'Knoten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Knüttelstock',
    hochdeutsch: 'Stricknadel'
  },
  {
    artikel: '',
    plattdeutsch: 'knütten',
    hochdeutsch: 'stricken'
  },
  {
    artikel: '',
    plattdeutsch: 'knüücheln',
    hochdeutsch: 'knittern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Koaen',
    hochdeutsch: 'Karre'
  },
  {
    artikel: '',
    plattdeutsch: 'koahl',
    hochdeutsch: 'kahl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Koahn',
    hochdeutsch: 'Kahn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Koarten',
    hochdeutsch: 'Karte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kohlflachen',
    hochdeutsch: 'Seitenwände beim Kastenwagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kohlflachenwoagen',
    hochdeutsch: 'Kastenwagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Koihe',
    hochdeutsch: 'Kühe'
  },
  {
    artikel: '',
    plattdeutsch: 'koken',
    hochdeutsch: 'kochen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kokmeschinen',
    hochdeutsch: 'Küchenherd'
  },
  {
    artikel: '',
    plattdeutsch: 'kölpen',
    hochdeutsch: 'rülpsen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kommerfack',
    hochdeutsch: 'Zimmer in der hinteren Giebelseite'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Konfematzieon',
    hochdeutsch: 'Konfirmation'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Konfiefken',
    hochdeutsch: 'Seilschaft'
  },
  {
    artikel: 'de',
    plattdeutsch: 'König',
    hochdeutsch: 'König'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Königin',
    hochdeutsch: 'Königin'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kooen',
    hochdeutsch: 'Getreide, Getreidekorn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kooen',
    hochdeutsch: 'Korn (alkoholisches Getränk)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kooenbleomen',
    hochdeutsch: 'Kornblumen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kööksel',
    hochdeutsch: 'Eintopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Koorf',
    hochdeutsch: 'Korb'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Koorfpullen',
    hochdeutsch: 'Korbflasche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kopp; de Köppe',
    hochdeutsch: 'Kopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Koppelbaum',
    hochdeutsch: 'Querstück aus Eisen an der Deichsel für Zweispänner'
  },
  {
    artikel: '',
    plattdeutsch: 'köppen',
    hochdeutsch: 'köpfen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Köppken',
    hochdeutsch: 'Tasse'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Koppküssen',
    hochdeutsch: 'Kopfkissen'
  },
  {
    artikel: '',
    plattdeutsch: 'koppsober',
    hochdeutsch: 'kopfüber (mit dem Kopf voran)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Koppweih',
    hochdeutsch: 'Kopfschmerzen'
  },
  {
    artikel: '',
    plattdeutsch: 'köörfken',
    hochdeutsch: 'flechten (Weidenkörbe)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Köörfker',
    hochdeutsch: 'Korbflechter'
  },
  {
    artikel: '',
    plattdeutsch: 'körpen',
    hochdeutsch: 'kaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'kort',
    hochdeutsch: 'kurz'
  },
  {
    artikel: '',
    plattdeutsch: 'kossen',
    hochdeutsch: 'kosten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kossen',
    hochdeutsch: 'Kruste'
  },
  {
    artikel: '',
    plattdeutsch: 'kputt',
    hochdeutsch: 'kaputt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Krach',
    hochdeutsch: 'Krach'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kräcken',
    hochdeutsch: 'Türverschluss (drehbares Querholz)'
  },
  {
    artikel: '',
    plattdeutsch: 'krank',
    hochdeutsch: 'krank'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Krankhert',
    hochdeutsch: 'Krankheit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Krassen',
    hochdeutsch: 'Handgerät zum Kämmen von Rohwolle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kraum',
    hochdeutsch: 'Kram'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kreog',
    hochdeutsch: 'Krug, Gastwirtschaft Meyers Krug'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kreonsbiehen',
    hochdeutsch: 'Preiselbeeren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kresseohn',
    hochdeutsch: 'Endstück einer Peitsche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kriede',
    hochdeutsch: 'Kreide'
  },
  {
    artikel: '',
    plattdeutsch: 'kriegen',
    hochdeutsch: 'bekommen'
  },
  {
    artikel: '',
    plattdeutsch: 'kriegen',
    hochdeutsch: 'einfangen'
  },
  {
    artikel: '',
    plattdeutsch: 'kriermeln',
    hochdeutsch: 'krimmeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kries',
    hochdeutsch: 'Kreis'
  },
  {
    artikel: '',
    plattdeutsch: 'kriesken',
    hochdeutsch: 'kreischen'
  },
  {
    artikel: '',
    plattdeutsch: 'krieskensiuer',
    hochdeutsch: 'sauer (extrem)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kring',
    hochdeutsch: 'Kreis'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kriuken',
    hochdeutsch: 'Karaffe aus Ton'
  },
  {
    artikel: '',
    plattdeutsch: 'kriupen',
    hochdeutsch: 'kriechen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kriuplock',
    hochdeutsch: 'Schlupfloch'
  },
  {
    artikel: '',
    plattdeutsch: 'krius',
    hochdeutsch: 'kraus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kriuskopp',
    hochdeutsch: 'Lockenkopf'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kriut',
    hochdeutsch: 'Unkraut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kroam',
    hochdeutsch: 'Kram'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kroamsticken',
    hochdeutsch: 'Krempel'
  },
  {
    artikel: '',
    plattdeutsch: 'kroasken',
    hochdeutsch: 'Hühnerlaut (vom zufriedenen Huhn)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kroiger',
    hochdeutsch: 'Gastwirt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kroinen',
    hochdeutsch: 'Kraniche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kruck',
    hochdeutsch: 'Quergriff am Spatenstiel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Krummstänner',
    hochdeutsch: 'Schrägbalken im Fachwerk'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Krummstock',
    hochdeutsch: 'Querholz zum Aufhängen eines geschlachteten Schweines'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Krüpers',
    hochdeutsch: 'Buschbohnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Krüppen',
    hochdeutsch: 'Futtertrog, Krippe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Krüsel',
    hochdeutsch: 'Kreisel'
  },
  {
    artikel: '',
    plattdeutsch: 'krüseln',
    hochdeutsch: 'wirbeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Krüselwiend',
    hochdeutsch: 'Windhose (schwach)'
  },
  {
    artikel: '',
    plattdeutsch: 'krüsselig (krüsselich)',
    hochdeutsch: 'geschwächt und hinfällig'
  },
  {
    artikel: '',
    plattdeutsch: 'küen',
    hochdeutsch: 'reden, sprechen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Küeraaie',
    hochdeutsch: 'Gerede, Gerücht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kuffer',
    hochdeutsch: 'Koffer, Holztruhe mit gewölbtem Deckel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Külle',
    hochdeutsch: 'Kälte'
  },
  {
    artikel: '',
    plattdeutsch: 'kumm',
    hochdeutsch: 'komm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kump',
    hochdeutsch: 'Schüssel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kumst',
    hochdeutsch: 'Weißkohl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kumsthürbel',
    hochdeutsch: 'Kohlhobel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kunne',
    hochdeutsch: 'Kunde, Kenntnis'
  },
  {
    artikel: '',
    plattdeutsch: 'künnig (künnich)',
    hochdeutsch: 'sachkundig (erfahren)'
  },
  {
    artikel: '',
    plattdeutsch: 'künnt',
    hochdeutsch: 'könnt'
  },
  {
    artikel: '',
    plattdeutsch: 'kuntant',
    hochdeutsch: 'munter, gesund'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kürken',
    hochdeutsch: 'Küche'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kürkendeok',
    hochdeutsch: 'Küchentuch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kürkendisk',
    hochdeutsch: 'Küchentisch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kürkenschapp',
    hochdeutsch: 'Küchenschrank'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kürkensteohl',
    hochdeutsch: 'Küchenstuhl'
  },
  {
    artikel: '',
    plattdeutsch: 'kurm (kamm)',
    hochdeutsch: 'kommen (kam)'
  },
  {
    artikel: '',
    plattdeutsch: 'kürnen',
    hochdeutsch: ''
  },
  {
    artikel: 'eck kann                  könn       häbbe könnt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu konns                 könns     häss könnt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et kann       könn       häff könnt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei künnt       können   häbb könnt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'können',
    hochdeutsch: ''
  },
  {
    artikel: 'ich kann                      konnte        habe gekonnt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du kannst                    konntest',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es kann           konnte',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir können ...              konnten ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Kürßel',
    hochdeutsch: 'Gerede'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kürtel',
    hochdeutsch: 'Köttel'
  },
  {
    artikel: '',
    plattdeutsch: 'kürteln',
    hochdeutsch: 'koten von Kotklümpchen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Küssen',
    hochdeutsch: 'Kissen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Küssenbetogg (Küssenbetoch)',
    hochdeutsch: 'Kissenbezug'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kutsken',
    hochdeutsch: 'Kutsche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kutskwoagen',
    hochdeutsch: 'Kutschwagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Kuttosse',
    hochdeutsch: 'Kuh (flapsig)'
  },
  {
    artikel: '',
    plattdeutsch: 'laaien',
    hochdeutsch: 'leiten (zügeln)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Laaien',
    hochdeutsch: 'Leine'
  },
  {
    artikel: '',
    plattdeutsch: 'labberig (labberich)',
    hochdeutsch: 'fade (geschmacklos)'
  },
  {
    artikel: '',
    plattdeutsch: 'lachen',
    hochdeutsch: 'lachen'
  },
  {
    artikel: '',
    plattdeutsch: 'lacke',
    hochdeutsch: 'locker, lose, ertraglos (taube Ähren oder Nüsse)'
  },
  {
    artikel: '',
    plattdeutsch: 'läen',
    hochdeutsch: 'lernen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Läerjunge',
    hochdeutsch: 'Lehrling (Auszubildender)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Läertiet',
    hochdeutsch: 'Lehrzeit'
  },
  {
    artikel: '',
    plattdeutsch: 'laff',
    hochdeutsch: 'dünn (z. B. Kaffee)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lämmken',
    hochdeutsch: 'Lämmlein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Landstroate',
    hochdeutsch: 'Landstraße'
  },
  {
    artikel: '',
    plattdeutsch: 'lang',
    hochdeutsch: 'lang'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Längde',
    hochdeutsch: 'Länge'
  },
  {
    artikel: '',
    plattdeutsch: 'lange',
    hochdeutsch: 'lange'
  },
  {
    artikel: '',
    plattdeutsch: 'langen',
    hochdeutsch: 'reichen'
  },
  {
    artikel: '',
    plattdeutsch: 'längen',
    hochdeutsch: 'länger werden'
  },
  {
    artikel: '',
    plattdeutsch: 'längest',
    hochdeutsch: 'längst'
  },
  {
    artikel: '',
    plattdeutsch: 'langes',
    hochdeutsch: 'entlang'
  },
  {
    artikel: '',
    plattdeutsch: 'langeskieken',
    hochdeutsch: 'entlangsehen, verstehen'
  },
  {
    artikel: '',
    plattdeutsch: 'langeskurm',
    hochdeutsch: 'entlangkommen, auskommen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Langewiele',
    hochdeutsch: 'Langeweile'
  },
  {
    artikel: '',
    plattdeutsch: 'langsoam',
    hochdeutsch: 'langsam'
  },
  {
    artikel: '',
    plattdeutsch: 'langwielig (langwielich)',
    hochdeutsch: 'langweilig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Langwoagen',
    hochdeutsch: 'Verbindungsstück zur Verlängerung eines Ackerwagens'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Land (uppen Lanne)',
    hochdeutsch: 'Land, Acker'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Länneraaien',
    hochdeutsch: 'Ländereien, Grundbesitz'
  },
  {
    artikel: '',
    plattdeutsch: 'lappen',
    hochdeutsch: 'trinken'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lärd',
    hochdeutsch: 'Leid'
  },
  {
    artikel: '',
    plattdeutsch: 'lärge',
    hochdeutsch: 'schlimm'
  },
  {
    artikel: '',
    plattdeutsch: 'Lärges',
    hochdeutsch: 'Schlimmes'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lärghert  (Lärchhert)',
    hochdeutsch: 'Schlechtigkeit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lährm',
    hochdeutsch: 'Lehm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lährmkiuhlen',
    hochdeutsch: 'Lehmkuhle'
  },
  {
    artikel: '',
    plattdeutsch: 'lährnen',
    hochdeutsch: 'leihen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Latüchen',
    hochdeutsch: 'Laterne'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lauf',
    hochdeutsch: 'Laub'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lauhn',
    hochdeutsch: 'Lohn'
  },
  {
    artikel: '',
    plattdeutsch: 'lauhnen',
    hochdeutsch: 'lohnen, entlohnen'
  },
  {
    artikel: '',
    plattdeutsch: 'laupen',
    hochdeutsch: ''
  },
  {
    artikel: 'eck laupe                   leip       bin laupen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu lopps                    leips     bis laupen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et lopp          leip       es laupen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei laupet        leipen   sind laupen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'laufen',
    hochdeutsch: ''
  },
  {
    artikel: 'ich laufe                      lief            bin gelaufen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du läufst                      liefest',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es läuft            lief',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir laufen ...                liefen ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lauperaaie',
    hochdeutsch: 'Lauferei, Durchfall, Verwaltungshäufigkeit'
  },
  {
    artikel: '',
    plattdeutsch: 'laus',
    hochdeutsch: 'los'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Laus',
    hochdeutsch: 'Los'
  },
  {
    artikel: '',
    plattdeutsch: 'lausbienen',
    hochdeutsch: 'losbinden'
  },
  {
    artikel: '',
    plattdeutsch: 'lausbössen',
    hochdeutsch: 'lossausen'
  },
  {
    artikel: '',
    plattdeutsch: 'lause',
    hochdeutsch: 'lose'
  },
  {
    artikel: '',
    plattdeutsch: 'lauslaupen',
    hochdeutsch: 'loslaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'laustrehen',
    hochdeutsch: 'lostreten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lear',
    hochdeutsch: 'Leder'
  },
  {
    artikel: '',
    plattdeutsch: 'lebennig (lebennich)',
    hochdeutsch: 'lebendig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lechmissen',
    hochdeutsch: 'Lichtmess (2. Februar)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lecht',
    hochdeutsch: 'Licht, Kerze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Legenten',
    hochdeutsch: 'Nutzloses'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Leggeheohn',
    hochdeutsch: 'Legehenne'
  },
  {
    artikel: '',
    plattdeutsch: 'leggen',
    hochdeutsch: 'legen'
  },
  {
    artikel: '',
    plattdeutsch: 'leibe',
    hochdeutsch: 'liebe'
  },
  {
    artikel: '',
    plattdeutsch: 'leiber',
    hochdeutsch: 'lieber'
  },
  {
    artikel: '',
    plattdeutsch: 'leif',
    hochdeutsch: 'lieb'
  },
  {
    artikel: '',
    plattdeutsch: 'leif hämmen',
    hochdeutsch: 'lieb haben, lieben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Leifte',
    hochdeutsch: 'Liebe'
  },
  {
    artikel: '',
    plattdeutsch: 'leigen',
    hochdeutsch: 'lügen'
  },
  {
    artikel: '',
    plattdeutsch: 'leo',
    hochdeutsch: 'lau'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Leoe',
    hochdeutsch: 'Flamme (lodernd)'
  },
  {
    artikel: '',
    plattdeutsch: 'leowoarm',
    hochdeutsch: 'lauwarm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lerrern',
    hochdeutsch: 'Leiter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lerrernstock',
    hochdeutsch: 'Leitersprosse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lerrernwoagen',
    hochdeutsch: 'Leiterwagen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lesebeok',
    hochdeutsch: 'Lesebuch'
  },
  {
    artikel: '',
    plattdeutsch: 'leste',
    hochdeutsch: 'letzte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Leste',
    hochdeutsch: 'Letzter'
  },
  {
    artikel: '',
    plattdeutsch: 'lestenennes',
    hochdeutsch: 'letztendlich'
  },
  {
    artikel: '',
    plattdeutsch: 'lestens',
    hochdeutsch: 'kürzlich'
  },
  {
    artikel: '',
    plattdeutsch: 'letten',
    hochdeutsch: 'achten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lexen',
    hochdeutsch: 'Lektionen (Hausaufgaben)'
  },
  {
    artikel: '',
    plattdeutsch: 'libbe',
    hochdeutsch: 'geschmacklos, fade'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lichwitz',
    hochdeutsch: 'Leichtfuß  (Spinner)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lichfitk',
    hochdeutsch: 'Leichtfuß'
  },
  {
    artikel: '',
    plattdeutsch: 'lichföarig  (lichföarich)',
    hochdeutsch: 'leichtfertig'
  },
  {
    artikel: '',
    plattdeutsch: 'lichte',
    hochdeutsch: 'leicht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lichtschinken',
    hochdeutsch: 'Leichtfuß'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lichwitz',
    hochdeutsch: 'Lebemann'
  },
  {
    artikel: '',
    plattdeutsch: 'licken',
    hochdeutsch: 'lecken'
  },
  {
    artikel: '',
    plattdeutsch: 'lickmiulen',
    hochdeutsch: 'Mund lecken (vor Begierde, in Erwartung)'
  },
  {
    artikel: '',
    plattdeutsch: 'licksk',
    hochdeutsch: 'scharf sein auf etwas'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Liebertroan',
    hochdeutsch: 'Lebertran'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lied',
    hochdeutsch: 'Lied'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lief',
    hochdeutsch: 'Leib'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Liefken',
    hochdeutsch: 'Leibchen (Mieder)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lieftiet',
    hochdeutsch: 'Altenteil, Ruhestand'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Liefweih',
    hochdeutsch: 'Bauchschmerzen'
  },
  {
    artikel: '',
    plattdeutsch: 'liehen',
    hochdeutsch: 'leiden, zulassen, gern haben'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Liek (noan Lieke)',
    hochdeutsch: 'Beerdigung (zur Beerdigung)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Liekdörn',
    hochdeutsch: 'Hühnerauge'
  },
  {
    artikel: '',
    plattdeutsch: 'lieke',
    hochdeutsch: 'gerade'
  },
  {
    artikel: '',
    plattdeutsch: 'lieke ault',
    hochdeutsch: 'gleichaltrig'
  },
  {
    artikel: '',
    plattdeutsch: 'lieke doal',
    hochdeutsch: 'gerade herunter'
  },
  {
    artikel: '',
    plattdeutsch: 'lieke iut',
    hochdeutsch: 'geradeaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Liekenbitter',
    hochdeutsch: 'Leichenbitter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Liekenwoagen',
    hochdeutsch: 'Leichenwagen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Liekloaken',
    hochdeutsch: 'Leichentuch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Liem',
    hochdeutsch: 'Leim'
  },
  {
    artikel: '',
    plattdeutsch: 'liemen',
    hochdeutsch: 'leimen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Liempott',
    hochdeutsch: 'Leimtopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lien',
    hochdeutsch: 'Lein (Flachs)'
  },
  {
    artikel: '',
    plattdeutsch: 'lienen',
    hochdeutsch: 'leinen (aus Leinen)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lienen',
    hochdeutsch: 'Leinen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Liengen',
    hochdeutsch: 'Leine'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Liengen',
    hochdeutsch: 'Linie'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lienölge',
    hochdeutsch: 'Leinöl'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Liensoat',
    hochdeutsch: 'Leinsamen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lierbedoage',
    hochdeutsch: 'Ereignis (mit vielen Menschen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lierbedoage',
    hochdeutsch: 'Umstand (aufwändig, übertrieben)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lierbedoage',
    hochdeutsch: 'Lebenszeit'
  },
  {
    artikel: '',
    plattdeutsch: 'lierben',
    hochdeutsch: 'leben'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lierben',
    hochdeutsch: 'Leben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lierbern',
    hochdeutsch: 'Leber'
  },
  {
    artikel: '',
    plattdeutsch: 'lierbern',
    hochdeutsch: 'liefern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lierberwost',
    hochdeutsch: 'Leberwurst'
  },
  {
    artikel: '',
    plattdeutsch: 'lierg  (lierch)',
    hochdeutsch: 'leer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lierglörper  (Lierchlörper)',
    hochdeutsch: 'Müßiggänger'
  },
  {
    artikel: '',
    plattdeutsch: 'liergmoaken  (lierchmoaken)',
    hochdeutsch: 'leeren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lierpel',
    hochdeutsch: 'Löffel'
  },
  {
    artikel: '',
    plattdeutsch: 'liese',
    hochdeutsch: 'leise'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lieskentreher',
    hochdeutsch: 'Scheinheiliger'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Liesten',
    hochdeutsch: 'Leiste'
  },
  {
    artikel: '',
    plattdeutsch: 'liggen',
    hochdeutsch: 'liegen'
  },
  {
    artikel: '',
    plattdeutsch: 'lihrnen',
    hochdeutsch: 'lehnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lihrnen',
    hochdeutsch: 'Lehne'
  },
  {
    artikel: '',
    plattdeutsch: 'linkehand',
    hochdeutsch: 'links'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Litter',
    hochdeutsch: 'Liter'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Littermoate',
    hochdeutsch: 'Litermaß'
  },
  {
    artikel: '',
    plattdeutsch: 'liuen',
    hochdeutsch: 'warten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Liuer',
    hochdeutsch: 'Lauer'
  },
  {
    artikel: '',
    plattdeutsch: 'liuerig (liuerich)',
    hochdeutsch: 'schwülwarm'
  },
  {
    artikel: '',
    plattdeutsch: 'liuern',
    hochdeutsch: 'lauern, warten'
  },
  {
    artikel: '',
    plattdeutsch: 'liuken',
    hochdeutsch: 'ziehen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Liuken',
    hochdeutsch: 'Luke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lius',
    hochdeutsch: 'Laus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Liusebummel',
    hochdeutsch: 'Kind (das Läuse hat)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Liusemähln',
    hochdeutsch: 'Melde (Unkraut)'
  },
  {
    artikel: '',
    plattdeutsch: 'liuter',
    hochdeutsch: 'lauter, nur'
  },
  {
    artikel: '',
    plattdeutsch: 'liuthaals',
    hochdeutsch: 'lauthals'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Löabecken',
    hochdeutsch: 'Feldlerche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Loaden',
    hochdeutsch: 'Laden, Geschäft'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Loadendeiner',
    hochdeutsch: 'Verkäufer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Loaen',
    hochdeutsch: 'Schublade, Lade'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Loage',
    hochdeutsch: 'Lage'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Loager',
    hochdeutsch: 'Lager'
  },
  {
    artikel: '',
    plattdeutsch: 'loahm',
    hochdeutsch: 'lahm'
  },
  {
    artikel: '',
    plattdeutsch: 'loahmen',
    hochdeutsch: 'lahmen'
  },
  {
    artikel: '',
    plattdeutsch: 'löahnen',
    hochdeutsch: 'löhnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Loake',
    hochdeutsch: 'Lake'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Loaken',
    hochdeutsch: 'Laken'
  },
  {
    artikel: '',
    plattdeutsch: 'löan',
    hochdeutsch: 'löten, saufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Löarper',
    hochdeutsch: 'Läufer'
  },
  {
    artikel: '',
    plattdeutsch: 'loate',
    hochdeutsch: 'spät'
  },
  {
    artikel: '',
    plattdeutsch: 'loaten',
    hochdeutsch: 'lassen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lock',
    hochdeutsch: 'Loch, Talsenke, Gefängnis'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Loff',
    hochdeutsch: 'Lob'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Löffte',
    hochdeutsch: 'Verlobung'
  },
  {
    artikel: '',
    plattdeutsch: 'loie',
    hochdeutsch: 'träge'
  },
  {
    artikel: '',
    plattdeutsch: 'loien',
    hochdeutsch: 'weinen (ausdauernd)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lokus',
    hochdeutsch: 'Toilette'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Löskeblatt',
    hochdeutsch: 'Löschblatt'
  },
  {
    artikel: '',
    plattdeutsch: 'lösken',
    hochdeutsch: 'löschen'
  },
  {
    artikel: '',
    plattdeutsch: 'lüchen',
    hochdeutsch: 'leuchten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lüchen',
    hochdeutsch: 'Leuchte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lucht',
    hochdeutsch: 'Lampe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Luchtort',
    hochdeutsch: 'Seitenausgang im alten Bauernhaus  (Bereich davor)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Luft',
    hochdeutsch: 'Luft'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lügbühl, de Lürgenbühl',
    hochdeutsch: 'Lügner (verlogener Mensch)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lühe',
    hochdeutsch: 'Leute'
  },
  {
    artikel: '',
    plattdeutsch: 'lühen',
    hochdeutsch: 'läuten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lüht',
    hochdeutsch: 'Mädchen, Tochter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lüning',
    hochdeutsch: 'Spatz oder Sperling'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lürgen',
    hochdeutsch: 'Lügen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lürgeniis',
    hochdeutsch: 'Eis mit Hohlräumen (nichttragend)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lüse',
    hochdeutsch: 'Läuse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lussen',
    hochdeutsch: 'Lust'
  },
  {
    artikel: '',
    plattdeutsch: 'lüssen',
    hochdeutsch: 'wundern'
  },
  {
    artikel: '',
    plattdeutsch: 'lussenlaus',
    hochdeutsch: 'lustlos'
  },
  {
    artikel: '',
    plattdeutsch: 'lütk',
    hochdeutsch: 'klein'
  },
  {
    artikel: '',
    plattdeutsch: 'lütke',
    hochdeutsch: 'kleine'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Lütke',
    hochdeutsch: 'Mädchen (klein)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lütke',
    hochdeutsch: 'Junge (klein)'
  },
  {
    artikel: '',
    plattdeutsch: 'lütken',
    hochdeutsch: 'gebären'
  },
  {
    artikel: '',
    plattdeutsch: 'lütker Knaup',
    hochdeutsch: 'Junge (klein)'
  },
  {
    artikel: '',
    plattdeutsch: 'Lütkes (wat Lütkes)',
    hochdeutsch: 'Neugeborenes'
  },
  {
    artikel: '',
    plattdeutsch: 'lutt',
    hochdeutsch: 'klingt, lautet'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Lutten',
    hochdeutsch: 'Geläut, Klang'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Maai',
    hochdeutsch: 'Mai'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Maaibaum',
    hochdeutsch: 'Maibaum'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Maaigroin',
    hochdeutsch: 'Birkengrün zu Pfingsten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Maaihbaalken',
    hochdeutsch: 'Mähbalken'
  },
  {
    artikel: '',
    plattdeutsch: 'maaihen',
    hochdeutsch: 'mähen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Maaihmeschinen',
    hochdeutsch: 'Mähmaschine'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Maairegen',
    hochdeutsch: 'Mairegen (gut für die Saat)'
  },
  {
    artikel: '',
    plattdeutsch: 'maaisten',
    hochdeutsch: 'meisten'
  },
  {
    artikel: '',
    plattdeutsch: 'maaistendeils',
    hochdeutsch: 'größtenteils'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Maaitiet',
    hochdeutsch: 'Frühjahr'
  },
  {
    artikel: '',
    plattdeutsch: 'magg (mach)',
    hochdeutsch: 'mag'
  },
  {
    artikel: '',
    plattdeutsch: 'mähr',
    hochdeutsch: 'mehr'
  },
  {
    artikel: '',
    plattdeutsch: 'mährere',
    hochdeutsch: 'mehrere'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mama',
    hochdeutsch: 'Mama'
  },
  {
    artikel: '',
    plattdeutsch: 'man',
    hochdeutsch: 'man, nur'
  },
  {
    artikel: '',
    plattdeutsch: 'man teo',
    hochdeutsch: 'los (anfeuern)'
  },
  {
    artikel: '',
    plattdeutsch: 'mannicheiner',
    hochdeutsch: 'mehrere, einige, viele'
  },
  {
    artikel: '',
    plattdeutsch: 'mannichmoal',
    hochdeutsch: 'manchmal'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Männken',
    hochdeutsch: 'männliches Tier'
  },
  {
    artikel: '',
    plattdeutsch: 'Manschetten hämmen',
    hochdeutsch: 'Respekt haben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Manschettenknaup',
    hochdeutsch: 'Manschettenknopf'
  },
  {
    artikel: '',
    plattdeutsch: 'märßen',
    hochdeutsch: 'mästen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Märßeschwien',
    hochdeutsch: 'Mastschwein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'März',
    hochdeutsch: 'März'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Masken',
    hochdeutsch: 'Masche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Maskendroaht',
    hochdeutsch: 'Maschendraht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Matten',
    hochdeutsch: 'Matte'
  },
  {
    artikel: '',
    plattdeutsch: 'meerken',
    hochdeutsch: 'merken'
  },
  {
    artikel: '',
    plattdeutsch: 'meinen',
    hochdeutsch: 'meinen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Melessen',
    hochdeutsch: 'Zipperlein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Melk',
    hochdeutsch: 'Milch'
  },
  {
    artikel: '',
    plattdeutsch: 'melk',
    hochdeutsch: 'milchgebend'
  },
  {
    artikel: '',
    plattdeutsch: 'Melk dürsaaien',
    hochdeutsch: 'Milch filtern'
  },
  {
    artikel: '',
    plattdeutsch: 'melk wern',
    hochdeutsch: 'kalben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Melkebock',
    hochdeutsch: 'Melkschemel'
  },
  {
    artikel: '',
    plattdeutsch: 'melken',
    hochdeutsch: 'melken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Melkkannen',
    hochdeutsch: 'Milchkanne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Melkkommern',
    hochdeutsch: 'Milchkammer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Melkömmer',
    hochdeutsch: 'Milcheimer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Melkpott',
    hochdeutsch: 'Milchtopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Melkstroate',
    hochdeutsch: 'Milchstraße'
  },
  {
    artikel: '',
    plattdeutsch: 'mellen',
    hochdeutsch: 'melden'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Meniuten',
    hochdeutsch: 'Minute'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Meode',
    hochdeutsch: 'Mode, Sitte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Meoen',
    hochdeutsch: 'Ärmel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Meoer',
    hochdeutsch: 'Moor'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Meoerhulzken',
    hochdeutsch: 'Moorholzschuhe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Meoerschluck',
    hochdeutsch: 'Moorbrand (alkoholisches Getränk)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Meoertiet',
    hochdeutsch: 'Torfstichzeit'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Meos',
    hochdeutsch: 'Mus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Meot',
    hochdeutsch: 'Mut'
  },
  {
    artikel: '',
    plattdeutsch: 'meotwillig (meotwillich)',
    hochdeutsch: 'mutwillig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Meschinen',
    hochdeutsch: 'Maschine'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mess',
    hochdeutsch: 'Mist, Quatsch'
  },
  {
    artikel: '',
    plattdeutsch: 'messen',
    hochdeutsch: 'misten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Messflachen',
    hochdeutsch: 'Seitenbretter vom Ackerwagen (niedrig)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Messfoorken',
    hochdeutsch: 'Mistforke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Messhaupen',
    hochdeutsch: 'Misthaufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Messkiuhlen',
    hochdeutsch: 'Mistkuhle'
  },
  {
    artikel: '',
    plattdeutsch: 'messnait',
    hochdeutsch: 'ungebraucht (ganz neu)'
  },
  {
    artikel: '',
    plattdeutsch: 'messnatt',
    hochdeutsch: 'klatschnass'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Mest',
    hochdeutsch: 'Messer'
  },
  {
    artikel: '',
    plattdeutsch: 'meten',
    hochdeutsch: 'messen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Meter',
    hochdeutsch: 'Meter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Meters',
    hochdeutsch: 'Landvermesser'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Mett',
    hochdeutsch: 'Gehacktes'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mettwost',
    hochdeutsch: 'Mettwurst'
  },
  {
    artikel: '',
    plattdeutsch: 'mi',
    hochdeutsch: 'mir, mich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Miegematten',
    hochdeutsch: 'Ameise'
  },
  {
    artikel: '',
    plattdeutsch: 'miegen',
    hochdeutsch: 'urinieren'
  },
  {
    artikel: '',
    plattdeutsch: 'miegenwoarm',
    hochdeutsch: 'lauwarm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Miegewüppen',
    hochdeutsch: 'Schiffschaukel (scherzhaft)'
  },
  {
    artikel: '',
    plattdeutsch: 'miehe',
    hochdeutsch: 'mit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Miehen',
    hochdeutsch: 'Vogelmiere'
  },
  {
    artikel: '',
    plattdeutsch: 'mien',
    hochdeutsch: 'mein'
  },
  {
    artikel: '',
    plattdeutsch: 'miene',
    hochdeutsch: 'meine'
  },
  {
    artikel: '',
    plattdeutsch: 'Mienejoahr',
    hochdeutsch: 'Neujahrsgruß'
  },
  {
    artikel: '',
    plattdeutsch: 'mienen',
    hochdeutsch: 'meinen, meinem'
  },
  {
    artikel: '',
    plattdeutsch: 'mienthaalben',
    hochdeutsch: 'meinethalben'
  },
  {
    artikel: '',
    plattdeutsch: 'mientwegen',
    hochdeutsch: 'meinetwegen'
  },
  {
    artikel: '',
    plattdeutsch: 'miehegoahn',
    hochdeutsch: 'mitgehen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mierken',
    hochdeutsch: 'Regenwürmer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Miesepriem',
    hochdeutsch: 'Miesepeter'
  },
  {
    artikel: '',
    plattdeutsch: 'mießeln',
    hochdeutsch: 'nieseln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Milljeonen',
    hochdeutsch: 'Millionen'
  },
  {
    artikel: '',
    plattdeutsch: 'minne',
    hochdeutsch: 'zart, klein, wenig'
  },
  {
    artikel: '',
    plattdeutsch: 'minnesaaien',
    hochdeutsch: 'reduzieren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Minske',
    hochdeutsch: 'Mensch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Minskenkiend',
    hochdeutsch: 'Menschenkind'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mirragg (Mirrach)',
    hochdeutsch: 'Mittag'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Mirragg (Mirrach)',
    hochdeutsch: 'Mittagessen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mirraggschloap (Mirrachschloap)',
    hochdeutsch: 'Mittagsschlaf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mirre',
    hochdeutsch: 'Mitte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mirrewierken',
    hochdeutsch: 'Mittwoch'
  },
  {
    artikel: '',
    plattdeutsch: 'mirroages',
    hochdeutsch: 'mittags'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mirroagestiet',
    hochdeutsch: 'Mittagszeit'
  },
  {
    artikel: '',
    plattdeutsch: 'misken',
    hochdeutsch: 'mischen'
  },
  {
    artikel: '',
    plattdeutsch: 'missen',
    hochdeutsch: 'entbehren'
  },
  {
    artikel: '',
    plattdeutsch: 'mit',
    hochdeutsch: 'mit'
  },
  {
    artikel: '',
    plattdeutsch: 'miteis',
    hochdeutsch: 'plötzlich'
  },
  {
    artikel: '',
    plattdeutsch: 'mitte',
    hochdeutsch: 'mit der'
  },
  {
    artikel: '',
    plattdeutsch: 'mitten',
    hochdeutsch: 'mit den, mit dem'
  },
  {
    artikel: '',
    plattdeutsch: 'mittenanner',
    hochdeutsch: 'miteinander'
  },
  {
    artikel: '',
    plattdeutsch: 'mittendür',
    hochdeutsch: 'mittendurch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Miuken',
    hochdeutsch: 'Dreschabfall'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Miul',
    hochdeutsch: 'Maul'
  },
  {
    artikel: '',
    plattdeutsch: 'miulen',
    hochdeutsch: 'maulen'
  },
  {
    artikel: '',
    plattdeutsch: 'miulfiul',
    hochdeutsch: 'wortkarg'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Miulkoorf',
    hochdeutsch: 'Maulkorb'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Miuloape',
    hochdeutsch: 'Maulaffe'
  },
  {
    artikel: '',
    plattdeutsch: 'miuloapen',
    hochdeutsch: 'gaffen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mius',
    hochdeutsch: 'Maus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Miusefaalgen',
    hochdeutsch: 'Mausefalle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Miusekürtel',
    hochdeutsch: 'Mausekot'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Miuselock',
    hochdeutsch: 'Mauseloch'
  },
  {
    artikel: '',
    plattdeutsch: 'miusen',
    hochdeutsch: 'mausen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Moaged',
    hochdeutsch: 'Magd'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Moagen',
    hochdeutsch: 'Magen'
  },
  {
    artikel: '',
    plattdeutsch: 'moahlen',
    hochdeutsch: 'mahlen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Moahltiet',
    hochdeutsch: 'Mahlzeit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Moaite',
    hochdeutsch: 'Mühe'
  },
  {
    artikel: '',
    plattdeutsch: 'moaken',
    hochdeutsch: 'machen'
  },
  {
    artikel: '',
    plattdeutsch: 'moal',
    hochdeutsch: 'einmal, mal'
  },
  {
    artikel: '',
    plattdeutsch: 'moalen',
    hochdeutsch: 'malen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Moand',
    hochdeutsch: 'Mond'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Moandagg (Moandach)',
    hochdeutsch: 'Montag'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Moark',
    hochdeutsch: 'Markt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Moark',
    hochdeutsch: 'Mark (Knochenmark)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Moark',
    hochdeutsch: 'DM  (Deutsche Mark)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Moate',
    hochdeutsch: 'Maß'
  },
  {
    artikel: '',
    plattdeutsch: 'möche',
    hochdeutsch: 'möchte'
  },
  {
    artikel: '',
    plattdeutsch: 'mohen',
    hochdeutsch: 'morgen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mohen',
    hochdeutsch: 'Morgen'
  },
  {
    artikel: '',
    plattdeutsch: 'moie',
    hochdeutsch: 'müde'
  },
  {
    artikel: '',
    plattdeutsch: 'Moain',
    hochdeutsch: 'guten Morgen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Moime',
    hochdeutsch: 'Mutter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Möller',
    hochdeutsch: 'Müller'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Monat',
    hochdeutsch: 'Monat'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Moss',
    hochdeutsch: 'Moos'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Möttke',
    hochdeutsch: 'Matsch'
  },
  {
    artikel: '',
    plattdeutsch: 'müe',
    hochdeutsch: 'morsch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Muen',
    hochdeutsch: 'Morast'
  },
  {
    artikel: '',
    plattdeutsch: 'müen',
    hochdeutsch: 'mauern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Müen',
    hochdeutsch: 'Mauer'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Müerweerk',
    hochdeutsch: 'Mauerwerk'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Müggen',
    hochdeutsch: 'Mücken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mührlen',
    hochdeutsch: 'Mühle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mührlendiek',
    hochdeutsch: 'Mühlenteich'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Mührlenfärld',
    hochdeutsch: 'Mühlenfeld'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mührlenflürgel',
    hochdeutsch: 'Mühlenflügel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Mührlenrad',
    hochdeutsch: 'Mühlrad'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Mulkenschapp',
    hochdeutsch: 'Milchschrank mit Klappe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mulkeraaie',
    hochdeutsch: 'Molkerei'
  },
  {
    artikel: '',
    plattdeutsch: 'müülsk',
    hochdeutsch: 'mürrisch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mund',
    hochdeutsch: 'Mund'
  },
  {
    artikel: '',
    plattdeutsch: 'mundsmoate',
    hochdeutsch: 'mundgerecht'
  },
  {
    artikel: '',
    plattdeutsch: 'mundvull',
    hochdeutsch: 'bisschen'
  },
  {
    artikel: '',
    plattdeutsch: 'mürgen (magg, möche)',
    hochdeutsch: 'mögen (mag, möchte)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Murken',
    hochdeutsch: 'Knopfakkordeon'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mürker',
    hochdeutsch: 'Maurer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Müssen',
    hochdeutsch: 'Mütze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Musick',
    hochdeutsch: 'Musik'
  },
  {
    artikel: '',
    plattdeutsch: 'mürten',
    hochdeutsch: ''
  },
  {
    artikel: 'eck mott                 mösse      häbbe mösst',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu moss                mösses    häss mösst',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et mott      mösse      häff mösst',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei mütt       mössen    häbb mösst',
    plattdeutsch: 'müssen',
    hochdeutsch: ''
  },
  {
    artikel: 'ich muss                     musste         habe gemusst',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du musst                     musstest',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es muss          musste',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir müssen ...             mussten ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mutte',
    hochdeutsch: 'Mutter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mutten',
    hochdeutsch: 'Matsch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Mutz',
    hochdeutsch: 'Pfeife  (kurz)'
  },
  {
    artikel: '',
    plattdeutsch: 'nä',
    hochdeutsch: 'nein'
  },
  {
    artikel: '',
    plattdeutsch: 'naaie Stoobm',
    hochdeutsch: 'Wohnzimmer für den Besuch'
  },
  {
    artikel: '',
    plattdeutsch: 'naaien',
    hochdeutsch: 'neuen'
  },
  {
    artikel: '',
    plattdeutsch: 'naaien (eine naaien)',
    hochdeutsch: 'hauen'
  },
  {
    artikel: '',
    plattdeutsch: 'naaiet',
    hochdeutsch: 'neues'
  },
  {
    artikel: '',
    plattdeutsch: 'naaihen',
    hochdeutsch: 'nähen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Naaihgoarn',
    hochdeutsch: 'Nähgarn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Naaihkassen',
    hochdeutsch: 'Nähkasten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Naaihmeschinen',
    hochdeutsch: 'Nähmaschine'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Naaihnoartel',
    hochdeutsch: 'Nähnadel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Naaihske',
    hochdeutsch: 'Schneiderin, Hausschneiderin'
  },
  {
    artikel: '',
    plattdeutsch: 'Naamd',
    hochdeutsch: 'guten Abend'
  },
  {
    artikel: '',
    plattdeutsch: 'naarsk',
    hochdeutsch: 'närrisch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nachmisse',
    hochdeutsch: 'Abendbrot'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nachmüssen',
    hochdeutsch: 'Nachtmütze'
  },
  {
    artikel: '',
    plattdeutsch: 'Nacht',
    hochdeutsch: 'gute Nacht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nacht',
    hochdeutsch: 'Nacht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nachtiuln',
    hochdeutsch: 'Nachteule, Nachtschwärmer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nachtschloapenstiet',
    hochdeutsch: 'Schlafenszeit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nachtsteohl',
    hochdeutsch: 'Toilettenstuhl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nacken',
    hochdeutsch: 'Nacken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Naffel',
    hochdeutsch: 'Bauchnabel'
  },
  {
    artikel: '',
    plattdeutsch: 'nait, naaie',
    hochdeutsch: 'neu, neue'
  },
  {
    artikel: '',
    plattdeutsch: 'naitmelken (Keoh)',
    hochdeutsch: 'frischmelkend (Kuh)'
  },
  {
    artikel: '',
    plattdeutsch: 'naitmoidsk',
    hochdeutsch: 'neumodisch'
  },
  {
    artikel: '',
    plattdeutsch: 'naitschierig (naitschierig)',
    hochdeutsch: 'neugierig'
  },
  {
    artikel: '',
    plattdeutsch: 'nämlich',
    hochdeutsch: 'nämlich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nammdagg (Nammdach)',
    hochdeutsch: 'Nachmittag'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Napp',
    hochdeutsch: 'Napf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nask',
    hochdeutsch: 'Dose'
  },
  {
    artikel: '',
    plattdeutsch: 'natt',
    hochdeutsch: 'nass'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nätte',
    hochdeutsch: 'Nässe'
  },
  {
    artikel: '',
    plattdeutsch: 'nattkault',
    hochdeutsch: 'nasskalt'
  },
  {
    artikel: '',
    plattdeutsch: 'natürlich',
    hochdeutsch: 'natürlich'
  },
  {
    artikel: '',
    plattdeutsch: 'nau',
    hochdeutsch: 'noch'
  },
  {
    artikel: '',
    plattdeutsch: 'naumoal',
    hochdeutsch: 'nochmal'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Naut',
    hochdeutsch: 'Not'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nautgroschen',
    hochdeutsch: 'Notgroschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nautriepe',
    hochdeutsch: 'Notreife'
  },
  {
    artikel: '',
    plattdeutsch: 'ne',
    hochdeutsch: 'eine'
  },
  {
    artikel: '',
    plattdeutsch: 'negeln',
    hochdeutsch: 'nageln'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Nejoahr',
    hochdeutsch: 'Neujahr'
  },
  {
    artikel: '',
    plattdeutsch: 'nen',
    hochdeutsch: 'einen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nesen',
    hochdeutsch: 'Nase'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Nesenlock',
    hochdeutsch: 'Nasenloch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Nest',
    hochdeutsch: 'Nest'
  },
  {
    artikel: '',
    plattdeutsch: 'nich',
    hochdeutsch: 'nicht'
  },
  {
    artikel: '',
    plattdeutsch: 'nich woar?',
    hochdeutsch: 'nicht wahr?'
  },
  {
    artikel: '',
    plattdeutsch: 'nickköppen',
    hochdeutsch: 'nicken'
  },
  {
    artikel: '',
    plattdeutsch: 'nie',
    hochdeutsch: 'nie'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Niehen',
    hochdeutsch: 'Niere'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Niehendür',
    hochdeutsch: 'Deelentür (in der Regel viergeteilt)'
  },
  {
    artikel: '',
    plattdeutsch: 'niepe',
    hochdeutsch: 'genau'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nierbel',
    hochdeutsch: 'Nebel'
  },
  {
    artikel: '',
    plattdeutsch: 'nierbelig (nierbelich)',
    hochdeutsch: 'neblig'
  },
  {
    artikel: '',
    plattdeutsch: 'niergen',
    hochdeutsch: 'neun'
  },
  {
    artikel: '',
    plattdeutsch: 'niergens',
    hochdeutsch: 'nirgends'
  },
  {
    artikel: '',
    plattdeutsch: 'nierm',
    hochdeutsch: 'nehmen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Niertel',
    hochdeutsch: 'Nessel'
  },
  {
    artikel: '',
    plattdeutsch: 'nimmernöchtern',
    hochdeutsch: 'blass'
  },
  {
    artikel: '',
    plattdeutsch: 'niu',
    hochdeutsch: 'nun'
  },
  {
    artikel: '',
    plattdeutsch: 'nix',
    hochdeutsch: 'nichts'
  },
  {
    artikel: '',
    plattdeutsch: 'noa',
    hochdeutsch: 'nach, zu'
  },
  {
    artikel: '',
    plattdeutsch: 'noa un noa',
    hochdeutsch: 'nach und nach, allmählich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Noaber',
    hochdeutsch: 'Nachbar'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Noaberskopp',
    hochdeutsch: 'Nachbarschaft'
  },
  {
    artikel: '',
    plattdeutsch: 'noadenken',
    hochdeutsch: 'nachdenken'
  },
  {
    artikel: '',
    plattdeutsch: 'noadregen',
    hochdeutsch: 'nachtragen'
  },
  {
    artikel: '',
    plattdeutsch: 'noafroagen',
    hochdeutsch: 'nachfragen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Noageburt',
    hochdeutsch: 'Nachgeburt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Noagel; de Negel',
    hochdeutsch: 'Nagel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Noagelschmett',
    hochdeutsch: 'Nagelschmied'
  },
  {
    artikel: '',
    plattdeutsch: 'nöagen',
    hochdeutsch: 'bedrängen (intensives Bitten)'
  },
  {
    artikel: '',
    plattdeutsch: 'nöager',
    hochdeutsch: 'näher'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nöagesten',
    hochdeutsch: 'nahe Verwandte'
  },
  {
    artikel: '',
    plattdeutsch: 'noagierm',
    hochdeutsch: 'nachgeben'
  },
  {
    artikel: '',
    plattdeutsch: 'noah',
    hochdeutsch: 'nah'
  },
  {
    artikel: '',
    plattdeutsch: 'noahe',
    hochdeutsch: 'nahe'
  },
  {
    artikel: '',
    plattdeutsch: 'noahebi',
    hochdeutsch: 'nahebei'
  },
  {
    artikel: '',
    plattdeutsch: 'noaheer',
    hochdeutsch: 'nachher'
  },
  {
    artikel: '',
    plattdeutsch: 'noahoarken',
    hochdeutsch: 'nachharken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Noaht',
    hochdeutsch: 'Naht'
  },
  {
    artikel: '',
    plattdeutsch: 'noakend',
    hochdeutsch: 'nackt'
  },
  {
    artikel: '',
    plattdeutsch: 'noakieken',
    hochdeutsch: 'nachsehen, überprüfen'
  },
  {
    artikel: '',
    plattdeutsch: 'noalaupen',
    hochdeutsch: 'nachlaufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Noaloat',
    hochdeutsch: 'Nachkomme, Nachlass'
  },
  {
    artikel: '',
    plattdeutsch: 'noaloaten',
    hochdeutsch: 'nachlassen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Noame',
    hochdeutsch: 'Name'
  },
  {
    artikel: '',
    plattdeutsch: 'noamhaft moaken',
    hochdeutsch: 'namhaft machen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Noarben',
    hochdeutsch: 'Narbe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Noaricht',
    hochdeutsch: 'Nachricht'
  },
  {
    artikel: '',
    plattdeutsch: 'nöarig (nöarich)',
    hochdeutsch: 'nötig, notwendig'
  },
  {
    artikel: '',
    plattdeutsch: 'noasäggen',
    hochdeutsch: 'nachsagen, verleumden'
  },
  {
    artikel: '',
    plattdeutsch: 'noaseihn',
    hochdeutsch: 'nachsehen, verprügeln'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Noaseihn',
    hochdeutsch: 'Enttäuschung'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Noaspell',
    hochdeutsch: 'Nachspiel'
  },
  {
    artikel: '',
    plattdeutsch: 'noavetellen',
    hochdeutsch: 'nacherzählen'
  },
  {
    artikel: '',
    plattdeutsch: 'nöchtern',
    hochdeutsch: 'nüchtern'
  },
  {
    artikel: '',
    plattdeutsch: 'noisterig (noisterich)',
    hochdeutsch: 'zornig'
  },
  {
    artikel: '',
    plattdeutsch: 'nömms',
    hochdeutsch: 'keiner, niemand'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nott; de Nürte',
    hochdeutsch: 'Nuss, Nüsse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nottbaum',
    hochdeutsch: 'Nussbaum'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nottbusk',
    hochdeutsch: 'Haselnussstrauch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nottschoalen',
    hochdeutsch: 'Nussschale(n)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'November',
    hochdeutsch: 'November'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nuck',
    hochdeutsch: 'Groll'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Nücke',
    hochdeutsch: 'Macken oder Eigenarten in der Persönlichkeit'
  },
  {
    artikel: '',
    plattdeutsch: 'nücken',
    hochdeutsch: 'knoten'
  },
  {
    artikel: '',
    plattdeutsch: 'nur',
    hochdeutsch: 'nur'
  },
  {
    artikel: '',
    plattdeutsch: 'nüssken',
    hochdeutsch: 'stoßen (hinterhältig einen kleinen Hieb verpassen)'
  },
  {
    artikel: '',
    plattdeutsch: 'nütte',
    hochdeutsch: 'nützlich'
  },
  {
    artikel: '',
    plattdeutsch: 'oabe',
    hochdeutsch: 'ab'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oabend',
    hochdeutsch: 'Abend'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Oabendbraut',
    hochdeutsch: 'Abendbrot'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Oabendmoahl',
    hochdeutsch: 'Abendmahl'
  },
  {
    artikel: '',
    plattdeutsch: 'oahnen',
    hochdeutsch: 'ahnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oahnunge',
    hochdeutsch: 'Vorahnung'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Oahr',
    hochdeutsch: 'Ähre'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oahre',
    hochdeutsch: 'Ähren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oal',
    hochdeutsch: 'Aal, Jauche'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Oalfatt',
    hochdeutsch: 'Jauchefass'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oant; de Eene',
    hochdeutsch: 'Ente'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oape',
    hochdeutsch: 'Affe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oarbert',
    hochdeutsch: 'Arbeit'
  },
  {
    artikel: '',
    plattdeutsch: 'oarberten',
    hochdeutsch: 'arbeiten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oarberters',
    hochdeutsch: 'Arbeiter'
  },
  {
    artikel: '',
    plattdeutsch: 'oarkeoen',
    hochdeutsch: 'wiederkäuen'
  },
  {
    artikel: '',
    plattdeutsch: 'oarm',
    hochdeutsch: 'arm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oarm',
    hochdeutsch: 'Arm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oarmkoorf',
    hochdeutsch: 'Bügelkorb (zu feinen Anlässen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oarnewennge',
    hochdeutsch: 'Wendestreifen vor dem Acker'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oarnunge',
    hochdeutsch: 'Ordnung'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oars',
    hochdeutsch: 'Arsch, Hintern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oarsbacken',
    hochdeutsch: 'Gesäß'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Oarslock',
    hochdeutsch: 'Arschloch, After'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oart',
    hochdeutsch: 'Art, Ausartung'
  },
  {
    artikel: '',
    plattdeutsch: 'ob',
    hochdeutsch: 'ob'
  },
  {
    artikel: '',
    plattdeutsch: 'oaber',
    hochdeutsch: 'aber'
  },
  {
    artikel: '',
    plattdeutsch: 'ober',
    hochdeutsch: 'über, übrig'
  },
  {
    artikel: '',
    plattdeutsch: 'oberbaaien',
    hochdeutsch: 'überbieten'
  },
  {
    artikel: '',
    plattdeutsch: 'oberbölken',
    hochdeutsch: 'überschreien'
  },
  {
    artikel: '',
    plattdeutsch: 'oberdraaihen',
    hochdeutsch: 'überdrehen'
  },
  {
    artikel: '',
    plattdeutsch: 'oberdrieben',
    hochdeutsch: 'übertreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'oberfoihen',
    hochdeutsch: 'überfahren'
  },
  {
    artikel: '',
    plattdeutsch: 'obergebott',
    hochdeutsch: 'zusätzlich'
  },
  {
    artikel: '',
    plattdeutsch: 'oberhaupt',
    hochdeutsch: 'überhaupt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Oberhiermd',
    hochdeutsch: 'Oberhemd'
  },
  {
    artikel: '',
    plattdeutsch: 'oberkopps',
    hochdeutsch: 'kopfüber'
  },
  {
    artikel: '',
    plattdeutsch: 'oberlaupen',
    hochdeutsch: 'überlaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'oberlierben',
    hochdeutsch: 'überleben'
  },
  {
    artikel: '',
    plattdeutsch: 'oberloaten',
    hochdeutsch: 'überlassen'
  },
  {
    artikel: '',
    plattdeutsch: 'obernierm',
    hochdeutsch: 'übernehmen'
  },
  {
    artikel: '',
    plattdeutsch: 'oberschiersk',
    hochdeutsch: 'überjährig'
  },
  {
    artikel: '',
    plattdeutsch: 'oberschnappen',
    hochdeutsch: 'überschnappen'
  },
  {
    artikel: '',
    plattdeutsch: 'obersetten',
    hochdeutsch: 'übersetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'oberstrieken',
    hochdeutsch: 'überstreichen'
  },
  {
    artikel: '',
    plattdeutsch: 'oberstülpen',
    hochdeutsch: 'überstülpen'
  },
  {
    artikel: '',
    plattdeutsch: 'oberteihn',
    hochdeutsch: 'überziehen'
  },
  {
    artikel: '',
    plattdeutsch: 'obertügen',
    hochdeutsch: 'überzeugen'
  },
  {
    artikel: '',
    plattdeutsch: 'oberull',
    hochdeutsch: 'überall'
  },
  {
    artikel: '',
    plattdeutsch: 'oberweggseihn (oberwechseihn)',
    hochdeutsch: 'darüber hinwegsehen'
  },
  {
    artikel: '',
    plattdeutsch: 'oberwittken',
    hochdeutsch: 'überweißen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Oberwoater',
    hochdeutsch: 'Oberwasser'
  },
  {
    artikel: '',
    plattdeutsch: 'och',
    hochdeutsch: 'ach'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ööfken',
    hochdeutsch: 'Pflaumenart (klein und rund)'
  },
  {
    artikel: '',
    plattdeutsch: 'oh Gäste',
    hochdeutsch: 'Hilfe (Ausdruck des Erstaunens)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ohen',
    hochdeutsch: 'Ohren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ohmn',
    hochdeutsch: 'Ofen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ohmndür',
    hochdeutsch: 'Ofentür'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ohmnklappen',
    hochdeutsch: 'Ofenklappe'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ohmnlock',
    hochdeutsch: 'Ofenloch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ohmnringe',
    hochdeutsch: 'Ofenringe'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ohmnrohr',
    hochdeutsch: 'Ofenrohr'
  },
  {
    artikel: '',
    plattdeutsch: 'ohne',
    hochdeutsch: 'ohne'
  },
  {
    artikel: '',
    plattdeutsch: 'öhn',
    hochdeutsch: 'ihn, ihm'
  },
  {
    artikel: '',
    plattdeutsch: 'öhne',
    hochdeutsch: 'seine'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ohr',
    hochdeutsch: 'Ohr'
  },
  {
    artikel: '',
    plattdeutsch: 'öhr',
    hochdeutsch: 'ihr'
  },
  {
    artikel: '',
    plattdeutsch: 'öhre',
    hochdeutsch: 'ihre'
  },
  {
    artikel: '',
    plattdeutsch: 'öhrt',
    hochdeutsch: 'ihres'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Oiber',
    hochdeutsch: 'Steg in der Torfkuhle, Menge (große)'
  },
  {
    artikel: '',
    plattdeutsch: 'oilen',
    hochdeutsch: 'wühlen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oisen',
    hochdeutsch: 'Ösen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oktober',
    hochdeutsch: 'Oktober'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ölge',
    hochdeutsch: 'Öl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ölgemührlen',
    hochdeutsch: 'Ölmühle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ölgepullen',
    hochdeutsch: 'Ölflasche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ölgesoat',
    hochdeutsch: 'Rübsamen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Öllern',
    hochdeutsch: 'Eltern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ölste',
    hochdeutsch: 'Ältester'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oma',
    hochdeutsch: 'Oma'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ömmer',
    hochdeutsch: 'Eimer'
  },
  {
    artikel: '',
    plattdeutsch: 'onnink',
    hochdeutsch: 'ordentlich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oort',
    hochdeutsch: 'Ort'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Oortstein',
    hochdeutsch: 'Ortstein (verfestigte Bodenschicht)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Opa',
    hochdeutsch: 'Opa'
  },
  {
    artikel: '',
    plattdeutsch: 'open',
    hochdeutsch: 'offen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Openoars',
    hochdeutsch: 'Mensch (der die Tür offen lässt)'
  },
  {
    artikel: '',
    plattdeutsch: 'orre',
    hochdeutsch: 'oder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Örtel',
    hochdeutsch: 'Orgel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Örtelbüen',
    hochdeutsch: 'Orgelempore'
  },
  {
    artikel: '',
    plattdeutsch: 'örteln',
    hochdeutsch: 'orgeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Örtelspierler',
    hochdeutsch: 'Orgelspieler'
  },
  {
    artikel: '',
    plattdeutsch: 'oss',
    hochdeutsch: 'als'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Osse',
    hochdeutsch: 'Ochse'
  },
  {
    artikel: '',
    plattdeutsch: 'össen',
    hochdeutsch: 'malochen, schuften'
  },
  {
    artikel: '',
    plattdeutsch: 'paalken',
    hochdeutsch: 'spielen mit dem Ball'
  },
  {
    artikel: '',
    plattdeutsch: 'packen',
    hochdeutsch: 'fangen, fassen, packen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Packen',
    hochdeutsch: 'Bündel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Packloage',
    hochdeutsch: 'Unterbau einer Straße'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Packnoartel',
    hochdeutsch: 'Packnadel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Padjacke',
    hochdeutsch: 'Schlunz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Panducken',
    hochdeutsch: 'Kinder'
  },
  {
    artikel: '',
    plattdeutsch: 'pankrott',
    hochdeutsch: 'bankrott'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pannen',
    hochdeutsch: 'Bratpfanne, Dachziegel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pannendask',
    hochdeutsch: 'Schlägermütze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pannenfeot',
    hochdeutsch: 'Dreibein für die offene Feuerstelle'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pannenroießel',
    hochdeutsch: 'Speise mit Eiern, Mehl, Milch und ausgelassenem Speck (in der Pfanne zubereitet)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pannenschöare',
    hochdeutsch: 'Dachziegelscherben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pannkeoken',
    hochdeutsch: 'Pfannkuchen (in Oel gebacken)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pannkeokendeil',
    hochdeutsch: 'Grundstücksbezeichnung (Sahnestück)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Panzen',
    hochdeutsch: 'Kinder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Papa',
    hochdeutsch: 'Papa'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pappe',
    hochdeutsch: 'Pappe'
  },
  {
    artikel: '',
    plattdeutsch: 'pärken',
    hochdeutsch: 'petzen'
  },
  {
    artikel: '',
    plattdeutsch: 'passen',
    hochdeutsch: 'passen'
  },
  {
    artikel: '',
    plattdeutsch: 'passig (passich)',
    hochdeutsch: 'passend'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Patt',
    hochdeutsch: 'Pfad'
  },
  {
    artikel: '',
    plattdeutsch: 'pattken',
    hochdeutsch: 'latschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pattwegg (Pattwech)',
    hochdeutsch: 'Fußweg, Trampelpfad'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pause',
    hochdeutsch: 'Pause'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pauten',
    hochdeutsch: 'Pfoten, Hände'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Peck',
    hochdeutsch: 'Pech'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peckedroaht',
    hochdeutsch: 'Pechschnur'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peerbiuern',
    hochdeutsch: 'Pferdebauern'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Peerd; de Peere',
    hochdeutsch: 'Pferd, Pferde'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peerdeeken',
    hochdeutsch: 'Pferdedecke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peerdeif',
    hochdeutsch: 'Pferdedieb'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peerfleigen',
    hochdeutsch: 'Bremsen (blinde Fliegen)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Peerfleisk',
    hochdeutsch: 'Pferdefleisch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Peergeschirr',
    hochdeutsch: 'Pferdegeschirr'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peerschieten',
    hochdeutsch: 'Pferdekot'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peerschlächter',
    hochdeutsch: 'Pferdeschlachter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peerstaal',
    hochdeutsch: 'Pferdestall, Hosenschlitz der Männerhosen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peerwespen',
    hochdeutsch: 'Hornissen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peerwost',
    hochdeutsch: 'Pferdewurst'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peiatz',
    hochdeutsch: 'Hanswurst'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pekeet',
    hochdeutsch: 'Paket'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pekeit',
    hochdeutsch: 'Paket'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pendoalen',
    hochdeutsch: 'Pedale'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Penning',
    hochdeutsch: 'Pfennig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Penongen',
    hochdeutsch: 'Pfingstrosen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Penongenhürbel',
    hochdeutsch: 'weißer Hügel in Mindenerwald'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peoerten',
    hochdeutsch: 'Gartentor'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Peohl',
    hochdeutsch: 'Pfuhl'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pertelheohn',
    hochdeutsch: 'Perlhuhn'
  },
  {
    artikel: '',
    plattdeutsch: 'pessiehen',
    hochdeutsch: 'passieren, ereignen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pesteoer',
    hochdeutsch: 'Pastor'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pesteoernhius',
    hochdeutsch: 'Pfarrhaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pesteoerske',
    hochdeutsch: 'Pastorenfrau, Pastorin'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Petersielgen',
    hochdeutsch: 'Petersilie'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pichelbreoer',
    hochdeutsch: 'Zechkumpane'
  },
  {
    artikel: '',
    plattdeutsch: 'picheln',
    hochdeutsch: 'trinken (kontinuierlich Alkohol trinken)'
  },
  {
    artikel: '',
    plattdeutsch: 'picken',
    hochdeutsch: 'picken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Picker',
    hochdeutsch: 'Kartoffelpfannkuchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pickerploaten',
    hochdeutsch: 'Pickerplatte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pickhacken',
    hochdeutsch: 'Spitzhacke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pieler',
    hochdeutsch: 'Pfeiler'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pielhacken',
    hochdeutsch: 'Spitzhacke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Piene',
    hochdeutsch: 'Schmerzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Piepen',
    hochdeutsch: 'Pfeife'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Piepenkopp',
    hochdeutsch: 'Pfeifenkopf (Schimpfwort)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Piepensärbeßel',
    hochdeutsch: 'Tabakrückstand in der Pfeife'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pierk',
    hochdeutsch: 'Inlett beim Federbett'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pierk',
    hochdeutsch: 'Innerstes'
  },
  {
    artikel: '',
    plattdeutsch: 'pierken',
    hochdeutsch: 'kleben'
  },
  {
    artikel: '',
    plattdeutsch: 'pierkerig (pierkerich)',
    hochdeutsch: 'klebrig'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pierksel',
    hochdeutsch: 'Klebemasse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pierper',
    hochdeutsch: 'Pfeffer'
  },
  {
    artikel: '',
    plattdeutsch: 'pierperig (pierperich)',
    hochdeutsch: 'pfeffrig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pierpermührlen',
    hochdeutsch: 'Pfeffermühle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pierpernürte',
    hochdeutsch: 'Pfeffernüsse'
  },
  {
    artikel: '',
    plattdeutsch: 'piesacken',
    hochdeutsch: 'quälen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pieselotten',
    hochdeutsch: 'Sachen (Kleidung, Gegenstände usw.)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pietsken',
    hochdeutsch: 'Peitsche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Piewitt',
    hochdeutsch: 'Kiebitz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Piewittsaaier',
    hochdeutsch: 'Kiebitzeier'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Piewittsbleomen',
    hochdeutsch: 'Wiesenschaumkraut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pingel',
    hochdeutsch: 'Klingel'
  },
  {
    artikel: '',
    plattdeutsch: 'pingelig',
    hochdeutsch: 'kleinlich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pingelmüssen',
    hochdeutsch: 'Zipfelmütze'
  },
  {
    artikel: '',
    plattdeutsch: 'pingeln',
    hochdeutsch: 'klingeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pingelwost',
    hochdeutsch: 'Kochwurst (kleine runde Wurst für Kinder als Geschenk bei der Hausschlachtung)'
  },
  {
    artikel: '',
    plattdeutsch: 'Pingsten',
    hochdeutsch: 'Pfingsten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pingstosse',
    hochdeutsch: 'Pfingstochse (mit Maigrün geschmückt), Mensch  (sonderbar gekleidet)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pinken',
    hochdeutsch: 'Mettwurst in der Schweinsblase'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pinn',
    hochdeutsch: 'Holzpflock, Nagel'
  },
  {
    artikel: '',
    plattdeutsch: 'pinnebassenvull',
    hochdeutsch: 'berstenvoll'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pisse',
    hochdeutsch: 'Urin'
  },
  {
    artikel: '',
    plattdeutsch: 'pissen',
    hochdeutsch: 'urinieren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pisspott',
    hochdeutsch: 'Nachttopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pittmann',
    hochdeutsch: 'Penis'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Piußbacken',
    hochdeutsch: 'Pausbacken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Piuße',
    hochdeutsch: 'Puste,  Atem'
  },
  {
    artikel: '',
    plattdeutsch: 'piußen',
    hochdeutsch: 'pusten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Piuter',
    hochdeutsch: 'Truthahn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Placken',
    hochdeutsch: 'Fleck, Feldstück (klein)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plackeraaie',
    hochdeutsch: 'Quälerei'
  },
  {
    artikel: '',
    plattdeutsch: 'pläckerig (pläckerich)',
    hochdeutsch: 'fleckig'
  },
  {
    artikel: '',
    plattdeutsch: 'pläckerig küen',
    hochdeutsch: 'reden (hochgestochen)'
  },
  {
    artikel: '',
    plattdeutsch: 'pladdern',
    hochdeutsch: 'regnen (stark)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plaggen',
    hochdeutsch: 'Sode (Grassode)'
  },
  {
    artikel: '',
    plattdeutsch: 'planten',
    hochdeutsch: 'pflanzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Planten',
    hochdeutsch: 'Pflanze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plänter',
    hochdeutsch: 'Pflanzstock'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plänters',
    hochdeutsch: 'Pflanzkartoffeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plantespoan',
    hochdeutsch: 'Pflanzspaten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plantketuffel',
    hochdeutsch: 'Pflanzkartoffel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plass',
    hochdeutsch: 'Platz'
  },
  {
    artikel: '',
    plattdeutsch: 'pläästern',
    hochdeutsch: 'regnen (stark)'
  },
  {
    artikel: '',
    plattdeutsch: 'platt',
    hochdeutsch: 'flach, sprachlos'
  },
  {
    artikel: '',
    plattdeutsch: 'plattboarsk',
    hochdeutsch: 'barfuß'
  },
  {
    artikel: '',
    plattdeutsch: 'plattdütsk',
    hochdeutsch: 'plattdeutsch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Plattdütsk',
    hochdeutsch: 'Plattdeutsch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Platten',
    hochdeutsch: 'Platte, Kopf'
  },
  {
    artikel: '',
    plattdeutsch: 'plätten',
    hochdeutsch: 'bügeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plattfeot',
    hochdeutsch: 'Plattfuß'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Plättisen',
    hochdeutsch: 'Bügeleisen'
  },
  {
    artikel: '',
    plattdeutsch: 'plattoars',
    hochdeutsch: 'sitzen auf dem Hosenboden'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plattschiuten',
    hochdeutsch: 'Schaufel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plattschüppen',
    hochdeutsch: 'Schaufel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plätzen',
    hochdeutsch: 'Plätzchen, Kekse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plege',
    hochdeutsch: 'Pflege'
  },
  {
    artikel: '',
    plattdeutsch: 'plegen',
    hochdeutsch: 'pflegen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pleog (Pleoch)',
    hochdeutsch: 'Pflug'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pleogisen',
    hochdeutsch: 'Pflugschar'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pleogstärt',
    hochdeutsch: 'Pflugsterz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plieten',
    hochdeutsch: 'Verletzung (klein)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pliumen',
    hochdeutsch: 'Pflaumen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pliumenbaum',
    hochdeutsch: 'Pflaumenbaum'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ploage',
    hochdeutsch: 'Plage, Magen- Darmerkrankung'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ploagegeist',
    hochdeutsch: 'Plagegeist'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ploan',
    hochdeutsch: 'Plan'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ploane',
    hochdeutsch: 'Plane'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ploaster',
    hochdeutsch: 'Pflaster'
  },
  {
    artikel: '',
    plattdeutsch: 'ploastern',
    hochdeutsch: 'pflastern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ploaten',
    hochdeutsch: 'Plate'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ploatenkeoken',
    hochdeutsch: 'Blechkuchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plocken',
    hochdeutsch: 'Stückchen'
  },
  {
    artikel: '',
    plattdeutsch: 'ploigen',
    hochdeutsch: 'pflügen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plörre',
    hochdeutsch: 'Getränk (wässrig und fad)'
  },
  {
    artikel: '',
    plattdeutsch: 'plöahen',
    hochdeutsch: 'verschütten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pluck',
    hochdeutsch: 'Pflock, Holznagel, Mensch (klein und rund)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Plückefett',
    hochdeutsch: 'Fettgewebe vom Schwein (gepflückt)'
  },
  {
    artikel: '',
    plattdeutsch: 'plücken',
    hochdeutsch: 'pflücken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plüggen',
    hochdeutsch: 'Holzstifte (klein, zur Befestigung einer Schuhlaufsohle)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plüh',
    hochdeutsch: 'Anstand'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plünnemelk',
    hochdeutsch: 'Dickmilch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plünnen',
    hochdeutsch: 'Kleidung (abgelegt und herumliegend), Windel(n)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Plünnenloaden',
    hochdeutsch: 'Textilgeschäft'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Poahl; de Pöahle',
    hochdeutsch: 'Pfahl'
  },
  {
    artikel: '',
    plattdeutsch: 'pöahlen',
    hochdeutsch: 'pfählen'
  },
  {
    artikel: '',
    plattdeutsch: 'poahlrisk',
    hochdeutsch: 'kerzengerade'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Poppier',
    hochdeutsch: 'Papier'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Poppiere',
    hochdeutsch: 'Dokumente'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Poapst',
    hochdeutsch: 'Papst'
  },
  {
    artikel: '',
    plattdeutsch: 'poar',
    hochdeutsch: 'paar'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Poar',
    hochdeutsch: 'Paar'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Poater',
    hochdeutsch: 'Pater'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Poater',
    hochdeutsch: 'Schleuderegge'
  },
  {
    artikel: '',
    plattdeutsch: 'poatern',
    hochdeutsch: 'eggen mit der Schleuderegge'
  },
  {
    artikel: '',
    plattdeutsch: 'poaterwelsk',
    hochdeutsch: 'kauderwelsch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pogge; de Poggen',
    hochdeutsch: 'Frosch, Frösche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Poggenfiller',
    hochdeutsch: 'Messer (stumpf)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Poggensteohl',
    hochdeutsch: 'Pilz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pölter',
    hochdeutsch: 'Nachthemd'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pöppel',
    hochdeutsch: 'Pappel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Post',
    hochdeutsch: 'Post'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pott; de Pötte',
    hochdeutsch: 'Topf'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Potthius',
    hochdeutsch: 'Torfstapel (in dem der Torf trocknen konnte - 6 Stück, zwei lang, zwei quer, zwei lang)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pottkeoken',
    hochdeutsch: 'Topfkuchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pottkieker',
    hochdeutsch: 'Topfgucker'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pottlappen',
    hochdeutsch: 'Topflappen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pottlicker',
    hochdeutsch: 'Topfauslecker'
  },
  {
    artikel: '',
    plattdeutsch: 'pricke',
    hochdeutsch: 'adrett'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Prieche',
    hochdeutsch: 'Empore'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Prierkel',
    hochdeutsch: 'Holzstange mit Metallspitze'
  },
  {
    artikel: '',
    plattdeutsch: 'prierkeln',
    hochdeutsch: 'reizen, sticheln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pries',
    hochdeutsch: 'Preis'
  },
  {
    artikel: '',
    plattdeutsch: 'priesen',
    hochdeutsch: 'preisen'
  },
  {
    artikel: '',
    plattdeutsch: 'proahlen',
    hochdeutsch: 'prahlen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Proahlhans',
    hochdeutsch: 'Angeber'
  },
  {
    artikel: '',
    plattdeutsch: 'proat',
    hochdeutsch: 'fertig, parat'
  },
  {
    artikel: '',
    plattdeutsch: 'probaaien',
    hochdeutsch: 'probieren'
  },
  {
    artikel: '',
    plattdeutsch: 'proimken',
    hochdeutsch: 'priemen (Kautabak kauen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Proimken',
    hochdeutsch: 'Priem (Kautabak)'
  },
  {
    artikel: '',
    plattdeutsch: 'proppen',
    hochdeutsch: 'pfropfen, vollstopfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Proppen',
    hochdeutsch: 'Pfropfen, Korken'
  },
  {
    artikel: '',
    plattdeutsch: 'proppenfull',
    hochdeutsch: 'vollgestopft, übervoll'
  },
  {
    artikel: '',
    plattdeutsch: 'propper',
    hochdeutsch: 'sauber, ordentlich, wohlgenährt'
  },
  {
    artikel: '',
    plattdeutsch: 'prötken',
    hochdeutsch: 'angeben, prahlen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Prötker',
    hochdeutsch: 'Angeber'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Prott',
    hochdeutsch: 'Redeschwall (großes Wort)'
  },
  {
    artikel: '',
    plattdeutsch: 'prrr',
    hochdeutsch: 'stopp (bei Pferden)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Prull',
    hochdeutsch: 'Traube'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Prullneegelken',
    hochdeutsch: 'Bartnelken'
  },
  {
    artikel: '',
    plattdeutsch: 'prünen',
    hochdeutsch: 'unordentlich nähen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Prurk',
    hochdeutsch: 'Lebewesen (klein)'
  },
  {
    artikel: '',
    plattdeutsch: 'prurken',
    hochdeutsch: 'bohren (mit den Fingern)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Prurkeraaie',
    hochdeutsch: 'Kleinarbeit (mühsam), Landwirtschaft (kleine), Pfuscherei'
  },
  {
    artikel: '',
    plattdeutsch: 'prüssen',
    hochdeutsch: 'niesen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Prütt',
    hochdeutsch: 'Kaffeesatz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Puckel',
    hochdeutsch: 'Rücken'
  },
  {
    artikel: '',
    plattdeutsch: 'pucken',
    hochdeutsch: 'schlagen (Herz)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pucken',
    hochdeutsch: 'Wickelbund bei Säuglingen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Püel',
    hochdeutsch: 'Federkissen als Unterlage für die Kopfkissen (lang und schmal)'
  },
  {
    artikel: '',
    plattdeutsch: 'püüsken',
    hochdeutsch: 'zündeln (mit Feuer spielen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Püüster',
    hochdeutsch: 'Schrotflinte, Gewehr'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pull',
    hochdeutsch: 'Baumkrone'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pullacken',
    hochdeutsch: 'Polen (Bevölkerung)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pullen',
    hochdeutsch: 'Flasche(n)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pullhult',
    hochdeutsch: 'Baumkronengeäst'
  },
  {
    artikel: '',
    plattdeutsch: 'pülsken',
    hochdeutsch: 'planschen'
  },
  {
    artikel: '',
    plattdeutsch: 'pultern',
    hochdeutsch: 'poltern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pulteroabend',
    hochdeutsch: 'Polterabend'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pulwer',
    hochdeutsch: 'Pulver'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pümpel',
    hochdeutsch: 'Holzpfahl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pumpen',
    hochdeutsch: 'Pumpe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pumpenschwengel',
    hochdeutsch: 'Pumpenschwengel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Punken',
    hochdeutsch: 'Sack voll Korn oder Mehl'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pund',
    hochdeutsch: 'Pfund'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Pundstücke; de Punkstücke',
    hochdeutsch: 'Gewichtsstück'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Punkt',
    hochdeutsch: 'Punkt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Püppken',
    hochdeutsch: 'Püppchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Puppm',
    hochdeutsch: 'Puppe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Puppmwoagen',
    hochdeutsch: 'Puppenwagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Puschen',
    hochdeutsch: 'Hausschuhe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pusken',
    hochdeutsch: 'Hausschuhe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Puttappel',
    hochdeutsch: 'Bratapfel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Pütten',
    hochdeutsch: 'Pfütze'
  },
  {
    artikel: '',
    plattdeutsch: 'putken',
    hochdeutsch: 'trippeln'
  },
  {
    artikel: '',
    plattdeutsch: 'putzen',
    hochdeutsch: 'putzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Quaalm',
    hochdeutsch: 'Qualm'
  },
  {
    artikel: '',
    plattdeutsch: 'quaalmen',
    hochdeutsch: 'qualmen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Quackelaaie',
    hochdeutsch: 'Unentschlossenheit'
  },
  {
    artikel: '',
    plattdeutsch: 'quackelig (quackelich)',
    hochdeutsch: 'hinfällig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Quadderaaie',
    hochdeutsch: 'Geschwätz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Quadderkopp',
    hochdeutsch: 'Quatschkopf'
  },
  {
    artikel: '',
    plattdeutsch: 'quaddern',
    hochdeutsch: 'schwatzen'
  },
  {
    artikel: '',
    plattdeutsch: 'quäken',
    hochdeutsch: 'schreien'
  },
  {
    artikel: '',
    plattdeutsch: 'quäkerig (quäkerich)',
    hochdeutsch: 'nörgelich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Quanten',
    hochdeutsch: 'Füße (groß)'
  },
  {
    artikel: '',
    plattdeutsch: 'quatsken',
    hochdeutsch: 'Gehgeräusche im Matsch'
  },
  {
    artikel: '',
    plattdeutsch: 'quatskenatt',
    hochdeutsch: 'klatschnass'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Quedroat',
    hochdeutsch: 'Quadrat'
  },
  {
    artikel: '',
    plattdeutsch: 'quelen',
    hochdeutsch: 'quälen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Queleraaie',
    hochdeutsch: 'Quälerei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Quengeloars',
    hochdeutsch: 'Nörgler'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Querre',
    hochdeutsch: 'Bündchen am Rock, Quere'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Quesen',
    hochdeutsch: 'Blut- oder Druckblasen'
  },
  {
    artikel: '',
    plattdeutsch: 'quetsken',
    hochdeutsch: 'quetschen'
  },
  {
    artikel: '',
    plattdeutsch: 'quieken',
    hochdeutsch: 'quieken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Quierken',
    hochdeutsch: 'Quecke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Quierkenscheole',
    hochdeutsch: 'Landwirtschaftsschule'
  },
  {
    artikel: '',
    plattdeutsch: 'quietsken',
    hochdeutsch: 'quietschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Quirkstärt',
    hochdeutsch: 'Lebewesen (klein und mickrig)'
  },
  {
    artikel: '',
    plattdeutsch: 'quittengeel',
    hochdeutsch: 'quittengelb'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Quittunge',
    hochdeutsch: 'Quittung'
  },
  {
    artikel: '',
    plattdeutsch: 'quutsken',
    hochdeutsch: 'Gehgeräusche bei nassen Füßen'
  },
  {
    artikel: '',
    plattdeutsch: 'raaihen',
    hochdeutsch: 'reihen (vorläufig nähen)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Räap',
    hochdeutsch: 'Seil (dick und lang)'
  },
  {
    artikel: '',
    plattdeutsch: 'räaßen',
    hochdeutsch: 'ausruhen'
  },
  {
    artikel: '',
    plattdeutsch: 'rabbeln',
    hochdeutsch: 'sabbeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rackefatt',
    hochdeutsch: 'Arbeiter (besonders eifrig)'
  },
  {
    artikel: '',
    plattdeutsch: 'racken',
    hochdeutsch: 'scharren'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Rad; de Reere',
    hochdeutsch: 'Fahrrad, Wagenrad'
  },
  {
    artikel: '',
    plattdeutsch: 'radfoihen',
    hochdeutsch: 'Fahrrad fahren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Radwienen',
    hochdeutsch: 'Drehwinde (zum Lasten heben)'
  },
  {
    artikel: '',
    plattdeutsch: 'ramentern',
    hochdeutsch: 'randalieren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ramm',
    hochdeutsch: 'Wadenkrampf'
  },
  {
    artikel: '',
    plattdeutsch: 'rammdösig',
    hochdeutsch: 'benebelt im Kopf'
  },
  {
    artikel: '',
    plattdeutsch: 'ran',
    hochdeutsch: 'heran, herbei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rand',
    hochdeutsch: 'Mund (scherzhaft)'
  },
  {
    artikel: '',
    plattdeutsch: 'ranticken',
    hochdeutsch: 'arbeiten (fleißig)'
  },
  {
    artikel: '',
    plattdeutsch: 'rapp',
    hochdeutsch: 'ausgeleiert'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rattenfaalgen',
    hochdeutsch: 'Rattenfalle'
  },
  {
    artikel: '',
    plattdeutsch: 'ratzekoahl',
    hochdeutsch: 'ratzekahl'
  },
  {
    artikel: '',
    plattdeutsch: 'raut',
    hochdeutsch: 'rot'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rautdooen',
    hochdeutsch: 'Rotdorn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rautkaul',
    hochdeutsch: 'Rotkohl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rautwien',
    hochdeutsch: 'Rotwein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rebelljeon',
    hochdeutsch: 'Magenverstimmung, Rebellion'
  },
  {
    artikel: '',
    plattdeutsch: 'rebelsk',
    hochdeutsch: 'rebellisch'
  },
  {
    artikel: '',
    plattdeutsch: 'rechtehand',
    hochdeutsch: 'rechts'
  },
  {
    artikel: '',
    plattdeutsch: 'rechtföarigen',
    hochdeutsch: 'rechtfertigen'
  },
  {
    artikel: '',
    plattdeutsch: 'recken',
    hochdeutsch: 'ausreichend, reichen'
  },
  {
    artikel: '',
    plattdeutsch: 'reckhaalsen',
    hochdeutsch: 'Hals recken'
  },
  {
    artikel: '',
    plattdeutsch: 'reke',
    hochdeutsch: 'sauber, ordentlich'
  },
  {
    artikel: '',
    plattdeutsch: 'reengen',
    hochdeutsch: 'regnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reengen',
    hochdeutsch: 'Regen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reengenbogen',
    hochdeutsch: 'Regenbogen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reengentunnen',
    hochdeutsch: 'Regentonne'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Reengenweer',
    hochdeutsch: 'Regenwetter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reengenwurm',
    hochdeutsch: 'Regenwurm'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Reff',
    hochdeutsch: 'Gerippe (abfällig auch für eine magere, garstige Frau)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reformatzieon',
    hochdeutsch: 'Reformation'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Regeloator',
    hochdeutsch: 'Wanduhr  (mit Schlag)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Reid',
    hochdeutsch: 'Flechtrohr  (für Hiller Stühle)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reimen',
    hochdeutsch: 'Riemen'
  },
  {
    artikel: '',
    plattdeutsch: 'reken',
    hochdeutsch: 'rechnen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Rekenbeok',
    hochdeutsch: 'Rechenbuch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reknunge',
    hochdeutsch: 'Rechnung'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Relegijeon',
    hochdeutsch: 'Religion'
  },
  {
    artikel: '',
    plattdeutsch: 'rennen',
    hochdeutsch: 'stoßen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rennen',
    hochdeutsch: 'Rinne, Dachrinne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reoen',
    hochdeutsch: 'Maßeinheit einer Moorfläche (wo Torf gestochen werden konnte, ca. 3,80 m x 3,80 m)'
  },
  {
    artikel: '',
    plattdeutsch: 'reoh',
    hochdeutsch: 'roh'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reohdecker',
    hochdeutsch: 'Naturbursche (derber, ungenauer, rauer Mensch)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reohfrost',
    hochdeutsch: 'Raureif, Raufrost'
  },
  {
    artikel: '',
    plattdeutsch: 'reopen',
    hochdeutsch: 'rufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reosen',
    hochdeutsch: 'Rose'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Reosenblatt',
    hochdeutsch: 'Rosenblatt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reosenkaul',
    hochdeutsch: 'Rosenkohl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Reosenschähen',
    hochdeutsch: 'Rosenschere'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Reosenwoater',
    hochdeutsch: 'Rosenwasser'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Reot',
    hochdeutsch: 'Ruß im Schornstein (wässrig)'
  },
  {
    artikel: '',
    plattdeutsch: 'reseliut',
    hochdeutsch: 'resolut'
  },
  {
    artikel: '',
    plattdeutsch: 'reseniehen',
    hochdeutsch: 'streiten, stänkern'
  },
  {
    artikel: '',
    plattdeutsch: 'retern',
    hochdeutsch: 'rattern, klappern'
  },
  {
    artikel: '',
    plattdeutsch: 'retten',
    hochdeutsch: 'retten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Revelutzieon',
    hochdeutsch: 'Revolution'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ribbe',
    hochdeutsch: 'Rippe'
  },
  {
    artikel: '',
    plattdeutsch: 'ribbeln',
    hochdeutsch: 'auflösen (von Gestricktem und Gehäkeltem)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Richte',
    hochdeutsch: 'Richtung'
  },
  {
    artikel: '',
    plattdeutsch: 'richten',
    hochdeutsch: 'richten (jur.), Dachstuhl aufstellen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Richtewegg (Richtewech)',
    hochdeutsch: 'Weg (kürzester)'
  },
  {
    artikel: '',
    plattdeutsch: 'richtig',
    hochdeutsch: 'richtig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Richtunge',
    hochdeutsch: 'Dachstuhl aufstellen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Rick',
    hochdeutsch: 'Fichtenstange (für die Einzäunung)'
  },
  {
    artikel: '',
    plattdeutsch: 'riebe',
    hochdeutsch: 'großzügig, verschwenderisch'
  },
  {
    artikel: '',
    plattdeutsch: 'rieben',
    hochdeutsch: 'reiben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rieben',
    hochdeutsch: 'Reibe'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Riefiisen',
    hochdeutsch: 'Reibeisen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Riege',
    hochdeutsch: 'Reihe'
  },
  {
    artikel: '',
    plattdeutsch: 'riegen',
    hochdeutsch: 'reihen'
  },
  {
    artikel: '',
    plattdeutsch: 'riehen',
    hochdeutsch: 'reiten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Riek',
    hochdeutsch: 'Reich'
  },
  {
    artikel: '',
    plattdeutsch: 'rieke',
    hochdeutsch: 'reich'
  },
  {
    artikel: '',
    plattdeutsch: 'riemen',
    hochdeutsch: 'reimen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Riemsel',
    hochdeutsch: 'Reim, Gereimtes'
  },
  {
    artikel: '',
    plattdeutsch: 'riep',
    hochdeutsch: 'reif'
  },
  {
    artikel: '',
    plattdeutsch: 'riepen',
    hochdeutsch: 'reifen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Riergel',
    hochdeutsch: 'Riegel, Querbalken beim Fachwerk'
  },
  {
    artikel: '',
    plattdeutsch: 'rierpen',
    hochdeutsch: 'rittlings rutschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rierte',
    hochdeutsch: 'Riss'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ries',
    hochdeutsch: 'Reis'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ries',
    hochdeutsch: 'Pfropfreis'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Riesebessen',
    hochdeutsch: 'Besen aus Reisigzweigen (zum Hof kehren)'
  },
  {
    artikel: '',
    plattdeutsch: 'riesen',
    hochdeutsch: 'veredeln (z. B. von Bäumen)'
  },
  {
    artikel: '',
    plattdeutsch: 'rieten',
    hochdeutsch: 'reißen, umbauen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rieteraaie',
    hochdeutsch: 'Umbauarbeiten, Gelenkschmerzen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Rietpeerd',
    hochdeutsch: 'Reitpferd'
  },
  {
    artikel: '',
    plattdeutsch: 'rin',
    hochdeutsch: 'hinein, herein'
  },
  {
    artikel: '',
    plattdeutsch: 'rinbössen',
    hochdeutsch: 'reinpoltern'
  },
  {
    artikel: '',
    plattdeutsch: 'rinbottern',
    hochdeutsch: 'reinbuttern'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Rindfleisk',
    hochdeutsch: 'Rindfleisch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Rindlear',
    hochdeutsch: 'Rindleder'
  },
  {
    artikel: '',
    plattdeutsch: 'rindössken',
    hochdeutsch: 'reindreschen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Rindveih',
    hochdeutsch: 'Rindvieh'
  },
  {
    artikel: '',
    plattdeutsch: 'rinfegen',
    hochdeutsch: 'hineinfegen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ring',
    hochdeutsch: 'Ring'
  },
  {
    artikel: '',
    plattdeutsch: 'ringoahn',
    hochdeutsch: 'hineingehen'
  },
  {
    artikel: '',
    plattdeutsch: 'rinheoen',
    hochdeutsch: 'essen (gierig)'
  },
  {
    artikel: '',
    plattdeutsch: 'rinheoen',
    hochdeutsch: 'reinhauen'
  },
  {
    artikel: '',
    plattdeutsch: 'rinkieken',
    hochdeutsch: 'hineinschauen, vorbeikommen'
  },
  {
    artikel: '',
    plattdeutsch: 'rinkloppen',
    hochdeutsch: 'hineinschlagen'
  },
  {
    artikel: '',
    plattdeutsch: 'rinküen',
    hochdeutsch: 'hineinreden'
  },
  {
    artikel: '',
    plattdeutsch: 'rinkurm',
    hochdeutsch: 'hereinkommen'
  },
  {
    artikel: '',
    plattdeutsch: 'rinlasken',
    hochdeutsch: 'trinken und essen (gierig)'
  },
  {
    artikel: '',
    plattdeutsch: 'rinlaupen',
    hochdeutsch: 'hereinlaufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rinner',
    hochdeutsch: 'Rinder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rinnerbroaen',
    hochdeutsch: 'Rinderbraten'
  },
  {
    artikel: '',
    plattdeutsch: 'rinriehen',
    hochdeutsch: 'reinreiten'
  },
  {
    artikel: '',
    plattdeutsch: 'rinrieten',
    hochdeutsch: 'reinreißen'
  },
  {
    artikel: '',
    plattdeutsch: 'rinschieten',
    hochdeutsch: 'hineinscheißen'
  },
  {
    artikel: '',
    plattdeutsch: 'rinschloan',
    hochdeutsch: 'hineinschlagen, essen (gierig)'
  },
  {
    artikel: '',
    plattdeutsch: 'risk',
    hochdeutsch: 'aufrecht, gerade, steil'
  },
  {
    artikel: '',
    plattdeutsch: 'risk dür',
    hochdeutsch: 'gerade durch'
  },
  {
    artikel: '',
    plattdeutsch: 'risk iut',
    hochdeutsch: 'zielstrebig'
  },
  {
    artikel: '',
    plattdeutsch: 'risk up',
    hochdeutsch: 'gerade hoch'
  },
  {
    artikel: '',
    plattdeutsch: 'risk wegg (risk wech)',
    hochdeutsch: 'unmissverständlich'
  },
  {
    artikel: '',
    plattdeutsch: 'riske Schiuten',
    hochdeutsch: 'Spaten'
  },
  {
    artikel: '',
    plattdeutsch: 'risken',
    hochdeutsch: 'aufrichten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Riuhe',
    hochdeutsch: 'Ruhe'
  },
  {
    artikel: '',
    plattdeutsch: 'riuhen',
    hochdeutsch: 'ruhen'
  },
  {
    artikel: '',
    plattdeutsch: 'riuken',
    hochdeutsch: 'riechen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rium',
    hochdeutsch: 'Raum'
  },
  {
    artikel: '',
    plattdeutsch: 'riumbeint',
    hochdeutsch: 'breitbeinig'
  },
  {
    artikel: '',
    plattdeutsch: 'riume',
    hochdeutsch: 'weit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Riupen',
    hochdeutsch: 'Raupe'
  },
  {
    artikel: '',
    plattdeutsch: 'riusemiuserig (riusemiuserich)',
    hochdeutsch: 'ungemütlich'
  },
  {
    artikel: '',
    plattdeutsch: 'riut',
    hochdeutsch: 'heraus, hinaus'
  },
  {
    artikel: '',
    plattdeutsch: 'riutbreken',
    hochdeutsch: 'herausbrechen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Riuten',
    hochdeutsch: 'Fensterscheibe'
  },
  {
    artikel: '',
    plattdeutsch: 'riutfienen',
    hochdeutsch: 'herausfinden'
  },
  {
    artikel: '',
    plattdeutsch: 'riutfoihen',
    hochdeutsch: 'herausfahren'
  },
  {
    artikel: '',
    plattdeutsch: 'riutförrern',
    hochdeutsch: 'herausfordern'
  },
  {
    artikel: '',
    plattdeutsch: 'riuthelpen',
    hochdeutsch: 'heraushelfen'
  },
  {
    artikel: '',
    plattdeutsch: 'riutkriegen',
    hochdeutsch: 'herausfinden'
  },
  {
    artikel: '',
    plattdeutsch: 'riutkurm',
    hochdeutsch: 'herauskommen'
  },
  {
    artikel: '',
    plattdeutsch: 'riutlaupen',
    hochdeutsch: 'herauslaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'riutliuken',
    hochdeutsch: 'herausziehen'
  },
  {
    artikel: '',
    plattdeutsch: 'riutmoaken',
    hochdeutsch: 'ernten (Hackfrüchte), entwickeln (positiv)'
  },
  {
    artikel: '',
    plattdeutsch: 'riutputzen',
    hochdeutsch: 'herausputzen'
  },
  {
    artikel: '',
    plattdeutsch: 'riutschmieten',
    hochdeutsch: 'rausschmeißen, herauswerfen'
  },
  {
    artikel: '',
    plattdeutsch: 'riutstellen',
    hochdeutsch: 'herausstellen, betonen'
  },
  {
    artikel: '',
    plattdeutsch: 'roaen',
    hochdeutsch: 'raten'
  },
  {
    artikel: '',
    plattdeutsch: 'röagen',
    hochdeutsch: 'bewegen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Röakekommern',
    hochdeutsch: 'Räucherkammer'
  },
  {
    artikel: '',
    plattdeutsch: 'roaken',
    hochdeutsch: 'schaffen'
  },
  {
    artikel: '',
    plattdeutsch: 'röaken',
    hochdeutsch: 'räuchern'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Röakeschapp',
    hochdeutsch: 'Räucherschrank'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Röakewiehm',
    hochdeutsch: 'Lattengerüst zum Räuchern und Trocknen auf der Bauerndeele'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Roat',
    hochdeutsch: 'Rat'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Roathius',
    hochdeutsch: 'Rathaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Röatekiuhlen',
    hochdeutsch: 'Rötekuhle (zum Wässern des Flachses)'
  },
  {
    artikel: '',
    plattdeutsch: 'rober',
    hochdeutsch: 'rüber'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rock',
    hochdeutsch: 'Rock'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Roggen',
    hochdeutsch: 'Roggen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Roggenbleomen',
    hochdeutsch: 'Kornblume'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Roggenbraut',
    hochdeutsch: 'Roggenbrot'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Roggenfärld',
    hochdeutsch: 'Roggenfeld'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Roggenwief',
    hochdeutsch: 'Kornmuhme (Korngeist)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Röhen',
    hochdeutsch: 'Röhre'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Roibe',
    hochdeutsch: 'Stoppelrübe'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Roibesoat',
    hochdeutsch: 'Rübensaat'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Roießel',
    hochdeutsch: 'Rührei, Blödsinn'
  },
  {
    artikel: '',
    plattdeutsch: 'roihen',
    hochdeutsch: 'rühren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Romen',
    hochdeutsch: 'Kruste auf der Wunde'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rotthacken',
    hochdeutsch: 'Wiedehopfhacke'
  },
  {
    artikel: '',
    plattdeutsch: 'röttlick',
    hochdeutsch: 'rötlich'
  },
  {
    artikel: '',
    plattdeutsch: 'ruckoasen',
    hochdeutsch: 'sitzen (unruhig)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rügge',
    hochdeutsch: 'Rücken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rüggenweihdoage',
    hochdeutsch: 'Rückenschmerzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rüggestrang',
    hochdeutsch: 'Kotelettstrang'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rühe',
    hochdeutsch: 'Hund'
  },
  {
    artikel: '',
    plattdeutsch: 'rühen',
    hochdeutsch: 'mausern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rühenbleomen',
    hochdeutsch: 'Hundskamille'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Rullbrett',
    hochdeutsch: 'Rollbrett, Holzbrett zur Zigarrenherstellung'
  },
  {
    artikel: '',
    plattdeutsch: 'rullen',
    hochdeutsch: 'rollen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rullen',
    hochdeutsch: 'Rolle'
  },
  {
    artikel: '',
    plattdeutsch: 'rümme',
    hochdeutsch: 'herum'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmebölken',
    hochdeutsch: 'herumschreien'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmedöllmern',
    hochdeutsch: 'schimpfen, stänkern'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmefutken',
    hochdeutsch: 'arbeiten (oberflächlich)'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmelungern',
    hochdeutsch: 'herumstreunen'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmenüssken',
    hochdeutsch: 'herumklüngeln'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmeroaken',
    hochdeutsch: 'herumwälzen'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmerutken',
    hochdeutsch: 'unsauber arbeiten'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmesiusängeln',
    hochdeutsch: 'herumfeiern (immer unterwegs sein)'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmespecken',
    hochdeutsch: 'herumschnüffeln'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmespoiken',
    hochdeutsch: 'herumgeistern'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmestoahn',
    hochdeutsch: 'herumstehen'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmesüen',
    hochdeutsch: 'saufen (tagelang)'
  },
  {
    artikel: '',
    plattdeutsch: 'rümmesürlen',
    hochdeutsch: 'herumschleppen'
  },
  {
    artikel: '',
    plattdeutsch: 'rumooen',
    hochdeutsch: 'rumoren'
  },
  {
    artikel: '',
    plattdeutsch: 'rumstern',
    hochdeutsch: 'krachen (dumpfes Geräusch)'
  },
  {
    artikel: '',
    plattdeutsch: 'rund',
    hochdeutsch: 'rund'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rundlöarper',
    hochdeutsch: 'Baum mit gewundenen Fasern'
  },
  {
    artikel: '',
    plattdeutsch: 'rundümme',
    hochdeutsch: 'rundherum'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rungen',
    hochdeutsch: 'Wagenstützen (aufrechte für Ackerwagen)'
  },
  {
    artikel: '',
    plattdeutsch: 'rungenaaien',
    hochdeutsch: 'ruinieren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rungenwoagen',
    hochdeutsch: 'Ackerwagen für Holztransporte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Runkel',
    hochdeutsch: 'Runkel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Runkelbleere',
    hochdeutsch: 'Runkelblätter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Runkelkiuhlen',
    hochdeutsch: 'Runkelkuhle'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Runkellauf',
    hochdeutsch: 'Runkelblätter'
  },
  {
    artikel: '',
    plattdeutsch: 'rünner',
    hochdeutsch: 'herunter'
  },
  {
    artikel: '',
    plattdeutsch: 'rünnerfaalen',
    hochdeutsch: 'herunterfallen'
  },
  {
    artikel: '',
    plattdeutsch: 'rupp',
    hochdeutsch: 'herauf'
  },
  {
    artikel: '',
    plattdeutsch: 'ruppdössken',
    hochdeutsch: 'draufschlagen'
  },
  {
    artikel: '',
    plattdeutsch: 'ruppen',
    hochdeutsch: 'rupfen'
  },
  {
    artikel: '',
    plattdeutsch: 'ruppkurm',
    hochdeutsch: 'heraufkommen, darauf kommen'
  },
  {
    artikel: '',
    plattdeutsch: 'rupplasken',
    hochdeutsch: 'draufschlagen (maßlos)'
  },
  {
    artikel: '',
    plattdeutsch: 'rüserig (rüserich)',
    hochdeutsch: 'unruhig'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Rusk',
    hochdeutsch: 'Binse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Russen',
    hochdeutsch: 'Gitterrost einer Feuerstelle oder Fußabtreter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rust',
    hochdeutsch: 'Rost'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rüstbaum',
    hochdeutsch: 'Gerüstbaum'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rüstbreere',
    hochdeutsch: 'Gerüstbretter'
  },
  {
    artikel: '',
    plattdeutsch: 'rusterig  (rusterich)',
    hochdeutsch: 'rostig'
  },
  {
    artikel: '',
    plattdeutsch: 'rustern',
    hochdeutsch: 'rosten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Rüsthult',
    hochdeutsch: 'Gerüstholz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rüstkiehen',
    hochdeutsch: 'Gerüstkette'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rüstlöker',
    hochdeutsch: 'Gerüstlöcher im Mauerwerk'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rutk',
    hochdeutsch: 'Kümmerer (in der Entwicklung zurückgebliebenes Tier), Mensch (ungepflegt)'
  },
  {
    artikel: '',
    plattdeutsch: 'rutken',
    hochdeutsch: 'arbeiten (unsorgfältig)'
  },
  {
    artikel: '',
    plattdeutsch: 'rutkerig (rutkerich)',
    hochdeutsch: 'ungepflegt'
  },
  {
    artikel: '',
    plattdeutsch: 'rutsken',
    hochdeutsch: 'rutschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rutsken',
    hochdeutsch: 'Rutsche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Rüümte',
    hochdeutsch: 'Weite'
  },
  {
    artikel: '',
    plattdeutsch: 'saachte',
    hochdeutsch: 'leise, vorsichtig, langsam'
  },
  {
    artikel: '',
    plattdeutsch: 'saaien',
    hochdeutsch: 'säen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Saaiefatt',
    hochdeutsch: 'Säbehälter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Saaiekassen',
    hochdeutsch: 'Säkasten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Saaiekatten',
    hochdeutsch: 'Katze (weibl.)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Saaiemeschinen',
    hochdeutsch: 'Sämaschine'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Saaißen',
    hochdeutsch: 'Sense'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Saaißenbaum',
    hochdeutsch: 'Sensenstiel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Saaißenhommer',
    hochdeutsch: 'Sensenhammer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Saaißenschoner',
    hochdeutsch: 'Sensenschutz'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Saaißenstreck',
    hochdeutsch: 'Sensenstreicher'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Saalben',
    hochdeutsch: 'Salbe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Saalbenveband',
    hochdeutsch: 'Salbenverband'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sabbelaaie',
    hochdeutsch: 'Geschwätz'
  },
  {
    artikel: '',
    plattdeutsch: 'sabbeln',
    hochdeutsch: 'schwatzen'
  },
  {
    artikel: '',
    plattdeutsch: 'sacken',
    hochdeutsch: 'sacken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sackkoaen',
    hochdeutsch: 'Sackkarre'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sackschörten',
    hochdeutsch: 'Sackschürze'
  },
  {
    artikel: '',
    plattdeutsch: 'sackvull',
    hochdeutsch: 'Maßeinheit (ein Sack voll ...)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Säel',
    hochdeutsch: 'Seil, Strohhalme zum Binden der Korngarben'
  },
  {
    artikel: '',
    plattdeutsch: 'säggen',
    hochdeutsch: 'sagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sammler',
    hochdeutsch: 'Drainagerohr  (großer Durchmesser)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sand',
    hochdeutsch: 'Sand'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sandhaupen',
    hochdeutsch: 'Sandhaufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sandkassen',
    hochdeutsch: 'Sandkasten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Sandpoppier',
    hochdeutsch: 'Schmiergelpapier'
  },
  {
    artikel: '',
    plattdeutsch: 'sannig  (sannich)',
    hochdeutsch: 'sandig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Särpen',
    hochdeutsch: 'Seife'
  },
  {
    artikel: '',
    plattdeutsch: 'satt',
    hochdeutsch: 'satt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Satz',
    hochdeutsch: 'Satz'
  },
  {
    artikel: '',
    plattdeutsch: 'sau',
    hochdeutsch: 'so'
  },
  {
    artikel: '',
    plattdeutsch: 'saubaule',
    hochdeutsch: 'sobald'
  },
  {
    artikel: '',
    plattdeutsch: 'saubutz',
    hochdeutsch: 'sofort, rasch'
  },
  {
    artikel: '',
    plattdeutsch: 'saufoort',
    hochdeutsch: 'sofort'
  },
  {
    artikel: '',
    plattdeutsch: 'saugeot',
    hochdeutsch: 'so gut'
  },
  {
    artikel: '',
    plattdeutsch: 'saugoar',
    hochdeutsch: 'sogar'
  },
  {
    artikel: '',
    plattdeutsch: 'saulange',
    hochdeutsch: 'solange'
  },
  {
    artikel: '',
    plattdeutsch: 'saune',
    hochdeutsch: 'solche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Saut',
    hochdeutsch: 'Brunnen'
  },
  {
    artikel: '',
    plattdeutsch: 'sauteosäggen',
    hochdeutsch: 'sozusagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sautkring',
    hochdeutsch: 'Brunnenring'
  },
  {
    artikel: '',
    plattdeutsch: 'sauvierl',
    hochdeutsch: 'soviel'
  },
  {
    artikel: '',
    plattdeutsch: 'sauvull',
    hochdeutsch: 'so voll'
  },
  {
    artikel: '',
    plattdeutsch: 'sauwatt',
    hochdeutsch: 'sowas'
  },
  {
    artikel: '',
    plattdeutsch: 'sauwiet',
    hochdeutsch: 'soweit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schärtel',
    hochdeutsch: 'Scheitel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schähen',
    hochdeutsch: 'Schere'
  },
  {
    artikel: '',
    plattdeutsch: 'schall',
    hochdeutsch: ''
  },
  {
    artikel: 'eck schall               scheol      häbbe scheolt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu schoss              scheols    häss scheolt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et schall    scheol      häff scheolt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei schütt     scheolen  häbb schoelt',
    plattdeutsch: 'soll',
    hochdeutsch: ''
  },
  {
    artikel: 'ich soll                     sollte         habe gesollt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du sollst                   solltest',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es soll          sollte',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir sollen ...             sollten ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schanne',
    hochdeutsch: 'Schande'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schapp',
    hochdeutsch: 'Schrank'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schärdießen',
    hochdeutsch: 'Einspännerdeichsel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schärper',
    hochdeutsch: 'Schäfer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schärperkoahen',
    hochdeutsch: 'Schäferkarre'
  },
  {
    artikel: '',
    plattdeutsch: 'schasken',
    hochdeutsch: 'rausschmeißen  (aus einer Position entlassen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schateken',
    hochdeutsch: 'Plunder  (alte Sachen)'
  },
  {
    artikel: '',
    plattdeutsch: 'schatten',
    hochdeutsch: 'Brauchtum  (von einem Hochzeitszug Geschenke erbitten)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schaut',
    hochdeutsch: 'Schoß'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Scheeges',
    hochdeutsch: 'Kerl, Bräutigam  (abwertend)'
  },
  {
    artikel: '',
    plattdeutsch: 'scheehen',
    hochdeutsch: 'scheren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Scheeheraaie',
    hochdeutsch: 'Schererei'
  },
  {
    artikel: '',
    plattdeutsch: 'scheemen',
    hochdeutsch: 'schämen'
  },
  {
    artikel: '',
    plattdeutsch: 'scheemern',
    hochdeutsch: 'verschämt, schüchtern'
  },
  {
    artikel: '',
    plattdeutsch: 'scheemshaalber',
    hochdeutsch: 'anstandshalber'
  },
  {
    artikel: '',
    plattdeutsch: 'scheesen',
    hochdeutsch: 'herumstreifen'
  },
  {
    artikel: '',
    plattdeutsch: 'scheibe',
    hochdeutsch: 'schief'
  },
  {
    artikel: '',
    plattdeutsch: 'scheiten',
    hochdeutsch: 'schießen'
  },
  {
    artikel: '',
    plattdeutsch: 'schellen',
    hochdeutsch: 'schimpfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schelles',
    hochdeutsch: 'Schimpfe'
  },
  {
    artikel: '',
    plattdeutsch: 'schellü',
    hochdeutsch: 'antriebslos, bedrückt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schendoam',
    hochdeutsch: 'Polizist'
  },
  {
    artikel: '',
    plattdeutsch: 'schenken',
    hochdeutsch: 'schenken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Scheohbänner',
    hochdeutsch: 'Schnürsenkel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Scheohe',
    hochdeutsch: 'Schuhe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Scheohmoaker',
    hochdeutsch: 'Schuhmacher'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Scheohnoagel',
    hochdeutsch: 'Schuhnagel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Scheohweerk',
    hochdeutsch: 'Schuhwerk'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Scheohwichse',
    hochdeutsch: 'Schuhcreme'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Scheole',
    hochdeutsch: 'Schule'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Scheolfeergen',
    hochdeutsch: 'Schulferien'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Scheolgeld',
    hochdeutsch: 'Schulgeld'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Scheolkiend',
    hochdeutsch: 'Schulkind'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Scheolmester',
    hochdeutsch: 'Lehrer, Lehrerin'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Scheoster',
    hochdeutsch: 'Schuster'
  },
  {
    artikel: '',
    plattdeutsch: 'scheostern',
    hochdeutsch: 'Schuhe anfertigen'
  },
  {
    artikel: '',
    plattdeutsch: 'scheostert',
    hochdeutsch: 'arbeiten (oberflächlich)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schesee',
    hochdeutsch: 'Straße'
  },
  {
    artikel: '',
    plattdeutsch: 'schicken',
    hochdeutsch: 'schicken, senden'
  },
  {
    artikel: '',
    plattdeutsch: 'Schieben',
    hochdeutsch: 'Scheibe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schiebenstand',
    hochdeutsch: 'Schießstand'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schien',
    hochdeutsch: 'Schein'
  },
  {
    artikel: '',
    plattdeutsch: 'schienen',
    hochdeutsch: 'scheinen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schiermskeraaie',
    hochdeutsch: 'Dämmerung'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schierwand',
    hochdeutsch: 'Trennwand'
  },
  {
    artikel: '',
    plattdeutsch: 'schierweerken',
    hochdeutsch: 'arbeiten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schiete',
    hochdeutsch: 'Scheiße'
  },
  {
    artikel: '',
    plattdeutsch: 'schietegoal',
    hochdeutsch: 'scheißegal'
  },
  {
    artikel: '',
    plattdeutsch: 'schieten',
    hochdeutsch: 'scheißen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schieteraaie',
    hochdeutsch: 'Durchfall'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schiethius',
    hochdeutsch: 'Scheißhaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schietpott',
    hochdeutsch: 'Nachttopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schillegassen',
    hochdeutsch: 'Graupen  (geschälte Gerste)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schillemest',
    hochdeutsch: 'Schälmesser'
  },
  {
    artikel: '',
    plattdeutsch: 'schillen',
    hochdeutsch: 'schälen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schillsel',
    hochdeutsch: 'Abgeschältes von Obst und Gemüse'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schindliuder',
    hochdeutsch: 'Schindluder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schinkenbühl',
    hochdeutsch: 'Schlüpfer XXL (scherzhaft für Übergröße)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schinn',
    hochdeutsch: 'Kopfschuppen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schipp; de Schirpe',
    hochdeutsch: 'Schiff'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schipper',
    hochdeutsch: 'Schiffer'
  },
  {
    artikel: '',
    plattdeutsch: 'schiuben',
    hochdeutsch: 'schieben'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schiuer',
    hochdeutsch: 'Schauer'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schiuer',
    hochdeutsch: 'Regenschauer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schiuer',
    hochdeutsch: 'Unterstand als Wetterschutz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schiufiut',
    hochdeutsch: 'Mensch  (der ausgenutzt wird)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schiufkoahen',
    hochdeutsch: 'Schubkarre'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schium',
    hochdeutsch: 'Schaum'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schiumkellen',
    hochdeutsch: 'Schaumkelle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schiuten',
    hochdeutsch: 'Schaufel'
  },
  {
    artikel: '',
    plattdeutsch: 'schlaaie',
    hochdeutsch: 'stumpf  (Zähne)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlaaier',
    hochdeutsch: 'Schleier'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlächter',
    hochdeutsch: 'Schlachter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlächteraaie',
    hochdeutsch: 'Schlachterei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlackerschnei',
    hochdeutsch: 'Schnee  (wässrig)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlagg (Schlach)',
    hochdeutsch: 'Schlag'
  },
  {
    artikel: '',
    plattdeutsch: 'Schlangenoart eggen',
    hochdeutsch: 'schlangenförmig eggen'
  },
  {
    artikel: '',
    plattdeutsch: 'schlappbüken',
    hochdeutsch: 'außer Atem sein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlappen',
    hochdeutsch: 'Pantoffeln'
  },
  {
    artikel: '',
    plattdeutsch: 'Schlappen',
    hochdeutsch: 'Reifenpanne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlatz',
    hochdeutsch: 'Flüssigkeit  (kleine Menge)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlawitken',
    hochdeutsch: 'Rockzipfel'
  },
  {
    artikel: '',
    plattdeutsch: 'Schlebutten moaken',
    hochdeutsch: 'Dummheiten machen'
  },
  {
    artikel: '',
    plattdeutsch: 'schlecht',
    hochdeutsch: 'schlecht'
  },
  {
    artikel: '',
    plattdeutsch: 'schlecht moaken',
    hochdeutsch: 'schlecht machen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlege',
    hochdeutsch: 'Schläge'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schleger',
    hochdeutsch: 'Schläger'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlegeraaie',
    hochdeutsch: 'Schlägerei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schleif',
    hochdeutsch: 'Schöpfkelle  (groß aus Holz)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlennerjoahn',
    hochdeutsch: 'Schlendrian'
  },
  {
    artikel: '',
    plattdeutsch: 'schlennern',
    hochdeutsch: 'schlendern'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schlepp',
    hochdeutsch: 'Wagenschmiere'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlickeraaie',
    hochdeutsch: 'Süßigkeiten'
  },
  {
    artikel: '',
    plattdeutsch: 'schlickern',
    hochdeutsch: 'naschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlickupp',
    hochdeutsch: 'Schluckauf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schliehen',
    hochdeutsch: 'Schlitten'
  },
  {
    artikel: '',
    plattdeutsch: 'schlieken',
    hochdeutsch: 'schleichen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schliem',
    hochdeutsch: 'Schleim'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schliemschieter',
    hochdeutsch: 'Schleimscheißer'
  },
  {
    artikel: '',
    plattdeutsch: 'schliepen',
    hochdeutsch: 'schleifen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schliepstein',
    hochdeutsch: 'Schleifstein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlierke',
    hochdeutsch: 'Schliche'
  },
  {
    artikel: '',
    plattdeutsch: 'schlierpen',
    hochdeutsch: 'schleppen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schlierpsel',
    hochdeutsch: 'Traglast'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schlierpsel',
    hochdeutsch: 'Schleppgerät zum Einebnen von Maulwurfshaufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlipk',
    hochdeutsch: 'Zipfel eines Kleidungsstückes'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlippen',
    hochdeutsch: 'Schürze (umgebundene Schürze als Tragetuch verwenden)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlittscheoh',
    hochdeutsch: 'Schlittschuh'
  },
  {
    artikel: '',
    plattdeutsch: 'schliuken',
    hochdeutsch: 'schlucken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schliuken',
    hochdeutsch: 'Rachen'
  },
  {
    artikel: '',
    plattdeutsch: 'schliuten',
    hochdeutsch: 'schließen'
  },
  {
    artikel: '',
    plattdeutsch: 'schloan',
    hochdeutsch: 'schlagen, geschlagen'
  },
  {
    artikel: '',
    plattdeutsch: 'schloapen',
    hochdeutsch: 'schlafen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schloapmüssen',
    hochdeutsch: 'Schlafmütze'
  },
  {
    artikel: '',
    plattdeutsch: 'schlobbern',
    hochdeutsch: 'schlabbern'
  },
  {
    artikel: '',
    plattdeutsch: 'schlodderig (schlodderich)',
    hochdeutsch: 'unordentlich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlonten',
    hochdeutsch: 'Sachen  (minderwertige oder heruntergekommene Maschinen, Werkzeuge, Kleidung, Gegenstände usw.)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlonz',
    hochdeutsch: 'unordentlicher Mensch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schlott',
    hochdeutsch: 'Türschloss'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schluck',
    hochdeutsch: 'Schnaps'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schluckpullen',
    hochdeutsch: 'Schnapsflasche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlüngel',
    hochdeutsch: 'Schlingel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlüngelbank',
    hochdeutsch: 'Sitzbank  (vornehmlich für Kinder)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlünze',
    hochdeutsch: 'Flocken in der Milch (von einer Euterentzündung)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlünze',
    hochdeutsch: 'Auswurf  (gelb)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schluppäsen',
    hochdeutsch: 'Pflaumen (kleine, gelbe)'
  },
  {
    artikel: '',
    plattdeutsch: 'schlürhen',
    hochdeutsch: 'schlüren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlürke',
    hochdeutsch: 'Mund voll'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlürschluck',
    hochdeutsch: 'Abschiedsschnaps'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schlürtel',
    hochdeutsch: 'Schlüssel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schlürtelbrett',
    hochdeutsch: 'Schlüsselbrett'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schlürtellock',
    hochdeutsch: 'Schlüsselloch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schmaaitiet',
    hochdeutsch: 'Frühling'
  },
  {
    artikel: '',
    plattdeutsch: 'schmachen',
    hochdeutsch: 'schmachten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schmachtlappen',
    hochdeutsch: 'Hungerleider  (dürrer Mensch)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schmant',
    hochdeutsch: 'Rahm'
  },
  {
    artikel: '',
    plattdeutsch: 'schmehen',
    hochdeutsch: 'schmieren (bestechen), ölen, fetten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schmehr',
    hochdeutsch: 'Schmiere'
  },
  {
    artikel: '',
    plattdeutsch: 'schmehrig  (schmehrich)',
    hochdeutsch: 'schmierig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schmehrkannen',
    hochdeutsch: 'Ölkanne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schmehrlappen',
    hochdeutsch: 'Schmierlappen, Schleimer, Person (unsauber)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schmehrnippel',
    hochdeutsch: 'Schmiernippel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schmehrsärpen',
    hochdeutsch: 'Schmierseife'
  },
  {
    artikel: '',
    plattdeutsch: 'schmelten',
    hochdeutsch: 'schmelzen'
  },
  {
    artikel: '',
    plattdeutsch: 'schmeoen',
    hochdeutsch: 'schmoren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schmett',
    hochdeutsch: 'Schmied'
  },
  {
    artikel: '',
    plattdeutsch: 'schmicken',
    hochdeutsch: 'schmecken'
  },
  {
    artikel: '',
    plattdeutsch: 'schmiddoages',
    hochdeutsch: 'mittags'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schmiehe',
    hochdeutsch: 'Schmiede'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schmiehefüer',
    hochdeutsch: 'Schmiedefeuer'
  },
  {
    artikel: '',
    plattdeutsch: 'schmiehen',
    hochdeutsch: 'schmieden'
  },
  {
    artikel: '',
    plattdeutsch: 'schmieten',
    hochdeutsch: 'werfen'
  },
  {
    artikel: '',
    plattdeutsch: 'schmirroages',
    hochdeutsch: 'mittags'
  },
  {
    artikel: '',
    plattdeutsch: 'schmöaken',
    hochdeutsch: 'rauchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schmöakepiepen',
    hochdeutsch: 'Tabakpfeife'
  },
  {
    artikel: '',
    plattdeutsch: 'schmohens',
    hochdeutsch: 'morgens'
  },
  {
    artikel: '',
    plattdeutsch: 'schmohens freoh',
    hochdeutsch: 'frühmorgens'
  },
  {
    artikel: '',
    plattdeutsch: 'schmoihe',
    hochdeutsch: 'sämig, schleimig reden'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schmu',
    hochdeutsch: 'Betrug'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schmulln',
    hochdeutsch: 'Wellfleisch'
  },
  {
    artikel: '',
    plattdeutsch: 'schnaaien',
    hochdeutsch: 'schneien'
  },
  {
    artikel: '',
    plattdeutsch: 'schnachts',
    hochdeutsch: 'nachts'
  },
  {
    artikel: '',
    plattdeutsch: 'schnasseln',
    hochdeutsch: 'betrinken'
  },
  {
    artikel: '',
    plattdeutsch: 'schnaulen',
    hochdeutsch: 'mürrisch äußern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnei',
    hochdeutsch: 'Schnee'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schneibaal',
    hochdeutsch: 'Schneeball'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schneiglöckchen',
    hochdeutsch: 'Schneeglöckchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schneikerl',
    hochdeutsch: 'Schneemann'
  },
  {
    artikel: '',
    plattdeutsch: 'schneischiebern',
    hochdeutsch: 'abfällig reden'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schneischiuer',
    hochdeutsch: 'Schneeschauer'
  },
  {
    artikel: '',
    plattdeutsch: 'schneiwitt',
    hochdeutsch: 'schneeweiß'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schneiwoater',
    hochdeutsch: 'Schneewasser'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnelllöarper',
    hochdeutsch: 'Elektromotor oder Traktor  (schnelllaufend)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schneoer',
    hochdeutsch: 'Schnur'
  },
  {
    artikel: '',
    plattdeutsch: 'schneterig  (schneterich)',
    hochdeutsch: 'schwatzhaft'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnetertasken',
    hochdeutsch: 'schwatzhafte Person'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnieder',
    hochdeutsch: 'Schneider, Wasserläufer (Insekt)'
  },
  {
    artikel: '',
    plattdeutsch: 'Schnieder',
    hochdeutsch: 'Wasserläufer (Insekt)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schniederfiehe',
    hochdeutsch: 'Arbeitspause in der Dämmerung'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schniederske',
    hochdeutsch: 'Frau des Schneiders'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnieheloahn',
    hochdeutsch: 'Gerät zum manuellen Schneiden der Rübenblätter'
  },
  {
    artikel: '',
    plattdeutsch: 'schniehen',
    hochdeutsch: 'schneiden'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnieheraaie',
    hochdeutsch: 'Sägewerk'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schniggen',
    hochdeutsch: 'Schnecke'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schniggenhius',
    hochdeutsch: 'Schneckenhaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnippelbauhnen',
    hochdeutsch: 'Schnippelbohnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnippelmeschinen',
    hochdeutsch: 'Schnippelgerät für Bohnen'
  },
  {
    artikel: '',
    plattdeutsch: 'schnitken',
    hochdeutsch: 'schnitzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnitker',
    hochdeutsch: 'Schnitzer'
  },
  {
    artikel: '',
    plattdeutsch: 'schniuben',
    hochdeutsch: 'schnäuzen, schnaufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schniuten',
    hochdeutsch: 'Schnauze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schniutenhürbel',
    hochdeutsch: 'Mundharmonika'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schniutweerk',
    hochdeutsch: 'Mundwerk'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnoabel',
    hochdeutsch: 'Schnabel'
  },
  {
    artikel: '',
    plattdeutsch: 'schnoaihen',
    hochdeutsch: 'schnorren, zündeln, verschmoren (Elektrik)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schnoieband',
    hochdeutsch: 'Schnürsenkel'
  },
  {
    artikel: '',
    plattdeutsch: 'schnoien',
    hochdeutsch: 'schnüren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnöppen',
    hochdeutsch: 'Schnupfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnöppenlicker',
    hochdeutsch: 'Person  (bei der der Schnupfen aus der Nase hängt und abgeleckt wird)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnöppenpatt',
    hochdeutsch: 'Schnupfenspur'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnöppentrogg  (Schnöppentroch)',
    hochdeutsch: 'Person mit ständig laufender Nase'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnösel',
    hochdeutsch: 'altkluger Jugendlicher'
  },
  {
    artikel: '',
    plattdeutsch: 'schnurhen',
    hochdeutsch: 'schnurren'
  },
  {
    artikel: '',
    plattdeutsch: 'schnurken',
    hochdeutsch: 'schnarchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnurrkatten',
    hochdeutsch: 'Kinderspielzeug (aus einem Zwirnsfaden und einem großen Knopf), Frau (umgarnend), Katze (mit Wohlbehagen)'
  },
  {
    artikel: '',
    plattdeutsch: 'schnurterig  (schnurterich)',
    hochdeutsch: 'schmutzig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schnüsk',
    hochdeutsch: 'Schnauze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schoal',
    hochdeutsch: 'Schal'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schoalbrett',
    hochdeutsch: 'Schalbrett'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schoalen',
    hochdeutsch: 'Schale(n)'
  },
  {
    artikel: '',
    plattdeutsch: 'schöane',
    hochdeutsch: 'schöne'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schoap',
    hochdeutsch: 'Schaf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schoapstaal',
    hochdeutsch: 'Schafstall'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schoar',
    hochdeutsch: 'Pflugschar'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schoer; de Schöare',
    hochdeutsch: 'Scherbe'
  },
  {
    artikel: '',
    plattdeutsch: 'schoarp',
    hochdeutsch: 'scharf'
  },
  {
    artikel: '',
    plattdeutsch: 'schobben',
    hochdeutsch: 'scheuern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schockeloade',
    hochdeutsch: 'Schokolade'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schockeloadenbudding',
    hochdeutsch: 'Schokoladenpudding'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schockeloadenkeoken',
    hochdeutsch: 'Schokoladenkuchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schoehbössen',
    hochdeutsch: 'Schuhbürste'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schoelklasse',
    hochdeutsch: 'Schulklasse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schoiler',
    hochdeutsch: 'Schüler'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schoppk',
    hochdeutsch: 'Bund  (Stroh oder Heu)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schoppen',
    hochdeutsch: 'Schuppen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schoppendeel',
    hochdeutsch: 'Schuppendurchfahrt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schoppendür',
    hochdeutsch: 'Schuppentür'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schöppsel',
    hochdeutsch: 'Schuppen mit Schleppdach (klein)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schörten',
    hochdeutsch: 'Schürze'
  },
  {
    artikel: '',
    plattdeutsch: 'schoss',
    hochdeutsch: 'sollst'
  },
  {
    artikel: '',
    plattdeutsch: 'schoss seihn',
    hochdeutsch: 'sollst sehen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schosstein',
    hochdeutsch: 'Schornstein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schossteinfeger',
    hochdeutsch: 'Schornsteinfeger'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schöttel',
    hochdeutsch: 'Schüssel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schöttelbeoed',
    hochdeutsch: 'Tellerbord'
  },
  {
    artikel: '',
    plattdeutsch: 'schraaien',
    hochdeutsch: 'schreien'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schraaihaals',
    hochdeutsch: 'Schreihals'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schräem',
    hochdeutsch: 'Griebenschmalz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schräempott',
    hochdeutsch: 'Schmalztopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schräempott',
    hochdeutsch: 'Lippenherpes'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schräemschieter',
    hochdeutsch: 'Mensch  (klein)'
  },
  {
    artikel: '',
    plattdeutsch: 'schrappen',
    hochdeutsch: 'schaben'
  },
  {
    artikel: '',
    plattdeutsch: 'schrapperig  (schrapperich)',
    hochdeutsch: 'raffgierig'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schrappsel',
    hochdeutsch: 'Abgeschabtes'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schraut',
    hochdeutsch: 'Schrot'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schrautmührlen',
    hochdeutsch: 'Schrotmühle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schrautsoagen',
    hochdeutsch: 'Blattsäge'
  },
  {
    artikel: '',
    plattdeutsch: 'schretten',
    hochdeutsch: 'gerinnen'
  },
  {
    artikel: '',
    plattdeutsch: 'schrieben',
    hochdeutsch: 'schreiben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schrieberaaie',
    hochdeutsch: 'Schreiberei  (Verwaltungsaufwand)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schriefsel',
    hochdeutsch: 'Schriftstück, Schrieb, Text'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schriefstoben',
    hochdeutsch: 'Schreibstube'
  },
  {
    artikel: '',
    plattdeutsch: 'schrienen  (et schrinnt)',
    hochdeutsch: 'brennen von Hautwunden'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schrift',
    hochdeutsch: 'Schrift'
  },
  {
    artikel: '',
    plattdeutsch: 'schriuben',
    hochdeutsch: 'schrauben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schriuben',
    hochdeutsch: 'Schraube'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schriubenschlürtel',
    hochdeutsch: 'Schraubenschlüssel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schriufstock',
    hochdeutsch: 'Schraubstock'
  },
  {
    artikel: '',
    plattdeutsch: 'schroaien',
    hochdeutsch: 'versengen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schrullen',
    hochdeutsch: 'Falten im Gesicht'
  },
  {
    artikel: '',
    plattdeutsch: 'schrumpeln',
    hochdeutsch: 'schrumpfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schucht',
    hochdeutsch: 'Vogelscheuche'
  },
  {
    artikel: '',
    plattdeutsch: 'schuen',
    hochdeutsch: 'rutschen  (gleiten)'
  },
  {
    artikel: '',
    plattdeutsch: 'schüen',
    hochdeutsch: 'scheuern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schüen',
    hochdeutsch: 'Scheune'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schüht',
    hochdeutsch: 'Bretter vorne und hinten am Kasten-Ackerwagen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schullerblatt',
    hochdeutsch: 'Schulterblatt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schullern',
    hochdeutsch: 'Schulter'
  },
  {
    artikel: '',
    plattdeutsch: 'schüllig  (schüllich)',
    hochdeutsch: 'schuldig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schülligkert  (Schüllichkert)',
    hochdeutsch: 'Schuldigkeit'
  },
  {
    artikel: '',
    plattdeutsch: 'schümen',
    hochdeutsch: 'schäumen'
  },
  {
    artikel: '',
    plattdeutsch: 'schuppen',
    hochdeutsch: 'schubsen, stoßen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schüppen',
    hochdeutsch: 'Schaufel'
  },
  {
    artikel: '',
    plattdeutsch: 'schüppken',
    hochdeutsch: 'schubsen, stoßen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schuppsel',
    hochdeutsch: 'Frau  (schlecht angezogen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schürbössen',
    hochdeutsch: 'Scheuerbürste'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schürbrett',
    hochdeutsch: 'Handbrett  (Maurerwerkzeug)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schürken',
    hochdeutsch: 'Babymimik  (unbewusst)'
  },
  {
    artikel: '',
    plattdeutsch: 'schürköppen',
    hochdeutsch: 'Kopfschütteln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schürte',
    hochdeutsch: 'Schuss  (Wachstum)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schüssel',
    hochdeutsch: 'Kuhgatter im Stall'
  },
  {
    artikel: '',
    plattdeutsch: 'schüttkern',
    hochdeutsch: 'schießen (zum Spaß)'
  },
  {
    artikel: '',
    plattdeutsch: 'schwaat',
    hochdeutsch: 'schwarz'
  },
  {
    artikel: '',
    plattdeutsch: 'schwack',
    hochdeutsch: 'schwach'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwamm',
    hochdeutsch: 'Schwamm'
  },
  {
    artikel: '',
    plattdeutsch: 'schwanke',
    hochdeutsch: 'schnell'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwärt',
    hochdeutsch: 'Schweiß'
  },
  {
    artikel: '',
    plattdeutsch: 'schwärten',
    hochdeutsch: 'schwitzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwärtfoite',
    hochdeutsch: 'Schweißfüße'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schwattbraut',
    hochdeutsch: 'Schwarzbrot'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwattbrautskossen',
    hochdeutsch: 'Schwarzbrotkruste'
  },
  {
    artikel: '',
    plattdeutsch: 'schwattbunt',
    hochdeutsch: 'schwarzbunt  (Kühe)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwattdoorn',
    hochdeutsch: 'Schlehe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwattdreoßel',
    hochdeutsch: 'Schwarzdrossel'
  },
  {
    artikel: '',
    plattdeutsch: 'schwattken',
    hochdeutsch: 'schwärzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwattwottel',
    hochdeutsch: 'Schwarzwurzel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwebelsticken, de Sticken',
    hochdeutsch: 'Streichholzer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schween',
    hochdeutsch: 'Geschwür, Furunkel'
  },
  {
    artikel: '',
    plattdeutsch: 'schwemmen',
    hochdeutsch: 'schwimmen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwengel',
    hochdeutsch: 'Schwengel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwengelschieter',
    hochdeutsch: 'Schlappschwanz, Schwächling'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwetzken',
    hochdeutsch: 'Zwetschgen, Pflaumen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwetzkenbottern',
    hochdeutsch: 'Pflaumenmus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwetzkenkeoken',
    hochdeutsch: 'Pflaumenkuchen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schwetzkenmirragg',
    hochdeutsch: 'Pflaumeneintopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwetzkenstippen',
    hochdeutsch: 'Pflaumenmus'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schwetzkenzapp',
    hochdeutsch: 'Pflaumenmus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwick-Schwack',
    hochdeutsch: 'Doppelmühle (Mühlespiel), Untergrund  (schwammig)'
  },
  {
    artikel: '',
    plattdeutsch: 'schwiegen',
    hochdeutsch: 'schweigen'
  },
  {
    artikel: '',
    plattdeutsch: 'schwiemelig  (schwiemelich)',
    hochdeutsch: 'schwindelig'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schwien',
    hochdeutsch: 'Schwein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwienedroaht',
    hochdeutsch: 'Krampen für Schweinepiercing'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schwienefeoer',
    hochdeutsch: 'Schweinefutter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwienehoite',
    hochdeutsch: 'Auslauf für Schweine'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwieneketuffel',
    hochdeutsch: 'Schweinekartoffel  (stärkereiche Futterkartoffel)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwieneköaper',
    hochdeutsch: 'Viehhändler'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Schwienelear',
    hochdeutsch: 'Schweinsleder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwienepott',
    hochdeutsch: 'Kessel zum Kochen des Schweinefutters'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwienewaaide',
    hochdeutsch: 'Schweineweide'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwienirgel',
    hochdeutsch: 'Schmutzfink'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwienstaal',
    hochdeutsch: 'Schweinestall'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwienstaalsklappen',
    hochdeutsch: 'Schweinebuchtentür'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwindsucht',
    hochdeutsch: 'Tuberkulose'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwoaen',
    hochdeutsch: 'Schwarte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwoager',
    hochdeutsch: 'Schwager'
  },
  {
    artikel: '',
    plattdeutsch: 'schwoar',
    hochdeutsch: 'schwer'
  },
  {
    artikel: '',
    plattdeutsch: 'schwoarfällig  (schwoarfällich)',
    hochdeutsch: 'schwerfällig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwoarm',
    hochdeutsch: 'Schwarm, Wasserdampf'
  },
  {
    artikel: '',
    plattdeutsch: 'schwoigen',
    hochdeutsch: 'schwer atmen'
  },
  {
    artikel: '',
    plattdeutsch: 'schwucken',
    hochdeutsch: 'schwappen  (hin und her)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwungpleog',
    hochdeutsch: 'Pflug  (handgeführt mit einem Stützrad)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Schwürpen',
    hochdeutsch: 'Peitsche'
  },
  {
    artikel: '',
    plattdeutsch: 'se',
    hochdeutsch: 'sie'
  },
  {
    artikel: 'de',
    plattdeutsch: 'See',
    hochdeutsch: 'See'
  },
  {
    artikel: '',
    plattdeutsch: 'sei',
    hochdeutsch: 'sie'
  },
  {
    artikel: '',
    plattdeutsch: 'seihn',
    hochdeutsch: ''
  },
  {
    artikel: 'eck seih               saug (sauch)  häbbe seihn',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu sühs               soiges            häss seihn',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et süht    saug (sauch)  häff seihn',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei seiht    soigen             häbb seihn',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'sehen',
    hochdeutsch: ''
  },
  {
    artikel: 'ich sehe                 sah           habe gesehen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du siehst                sahst',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es sieht      sah',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir sehen ...           sahen ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'seit',
    hochdeutsch: 'seit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sekunne',
    hochdeutsch: 'Sekunde'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Seldoat',
    hochdeutsch: 'Soldat'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Seloat',
    hochdeutsch: 'Salat'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Seloatketuffel',
    hochdeutsch: 'Salatkartoffel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Seloatkopp',
    hochdeutsch: 'Salatkopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Seloatschöttel',
    hochdeutsch: 'Salatschüssel'
  },
  {
    artikel: '',
    plattdeutsch: 'Selskopp deon',
    hochdeutsch: 'Gesellschaft leisten'
  },
  {
    artikel: '',
    plattdeutsch: 'selten',
    hochdeutsch: 'selten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Seoln',
    hochdeutsch: 'Pfriemen  (um Löcher in Leder zu stechen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'September',
    hochdeutsch: 'September'
  },
  {
    artikel: '',
    plattdeutsch: 'sesse',
    hochdeutsch: 'sechs'
  },
  {
    artikel: '',
    plattdeutsch: 'setten',
    hochdeutsch: 'setzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Setten',
    hochdeutsch: 'Schale zur Rahmbildung (flach)'
  },
  {
    artikel: '',
    plattdeutsch: 'si',
    hochdeutsch: 'sei'
  },
  {
    artikel: '',
    plattdeutsch: 'sicher',
    hochdeutsch: 'sicher'
  },
  {
    artikel: '',
    plattdeutsch: 'sick',
    hochdeutsch: 'sich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Siede',
    hochdeutsch: 'Seide'
  },
  {
    artikel: '',
    plattdeutsch: 'siege',
    hochdeutsch: 'niedrig'
  },
  {
    artikel: '',
    plattdeutsch: 'siehen',
    hochdeutsch: 'seiden (aus Seide)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Siehendeok',
    hochdeutsch: 'Seidentuch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Siehengoarn',
    hochdeutsch: 'Seidengarn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Siehenspeck',
    hochdeutsch: 'Speckseite (fett)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Siehenstrümpe',
    hochdeutsch: 'Seidenstrümpfe (aus Kunstfaser)'
  },
  {
    artikel: '',
    plattdeutsch: 'sien',
    hochdeutsch: ''
  },
  {
    artikel: 'eck bin                 was              bin wesen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu bis                  woies           bis wesen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et  es      was              es wesen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei sind     woien           sind wesen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'sein',
    hochdeutsch: ''
  },
  {
    artikel: 'ich bin                 war             bin gewesen',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du bist                 warst',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es ist       war',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir sind ...           waren ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: '',
    plattdeutsch: 'sien',
    hochdeutsch: 'sein'
  },
  {
    artikel: '',
    plattdeutsch: 'siene',
    hochdeutsch: 'seine'
  },
  {
    artikel: '',
    plattdeutsch: 'sienesglieken',
    hochdeutsch: 'seinesgleichen'
  },
  {
    artikel: '',
    plattdeutsch: 'sienloaten',
    hochdeutsch: 'unterlassen'
  },
  {
    artikel: '',
    plattdeutsch: 'sient',
    hochdeutsch: 'seins'
  },
  {
    artikel: '',
    plattdeutsch: 'sientwegen',
    hochdeutsch: 'seinetwegen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Sierbe',
    hochdeutsch: 'Sieb'
  },
  {
    artikel: '',
    plattdeutsch: 'sierben',
    hochdeutsch: 'sieben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sierberand',
    hochdeutsch: 'Trottel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sierln',
    hochdeutsch: 'Holztruhe mit flachem Deckel'
  },
  {
    artikel: '',
    plattdeutsch: 'sierm',
    hochdeutsch: 'sieben (Zahl)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Siermschlörper',
    hochdeutsch: 'Siebenschläfer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Siermt',
    hochdeutsch: 'Senf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Siernen',
    hochdeutsch: 'Sehnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Siete',
    hochdeutsch: 'Seite'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sietendür',
    hochdeutsch: 'Seitentür'
  },
  {
    artikel: '',
    plattdeutsch: 'simmelieren',
    hochdeutsch: 'simulieren'
  },
  {
    artikel: '',
    plattdeutsch: 'sind',
    hochdeutsch: 'sind'
  },
  {
    artikel: '',
    plattdeutsch: 'singen',
    hochdeutsch: 'singen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sittegaus',
    hochdeutsch: 'Besucherin (die übermäßig lange bleibt)'
  },
  {
    artikel: '',
    plattdeutsch: 'sitten',
    hochdeutsch: 'sitzen'
  },
  {
    artikel: '',
    plattdeutsch: 'siuer',
    hochdeutsch: 'sauer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Siuerbühl',
    hochdeutsch: 'Schweinegehacktes mit Roggenmehl vermischt (angesäuert, als Beigabe zum Eintopf)'
  },
  {
    artikel: '',
    plattdeutsch: 'siugen',
    hochdeutsch: 'saugen'
  },
  {
    artikel: '',
    plattdeutsch: 'siupen',
    hochdeutsch: 'saufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Siupstängel',
    hochdeutsch: 'Säufer'
  },
  {
    artikel: '',
    plattdeutsch: 'Sius un Brius',
    hochdeutsch: 'Saus und Braus'
  },
  {
    artikel: '',
    plattdeutsch: 'siusen',
    hochdeutsch: 'sausen'
  },
  {
    artikel: '',
    plattdeutsch: 'siusengeln',
    hochdeutsch: 'herumlungern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Soagebock',
    hochdeutsch: 'Sägebock'
  },
  {
    artikel: '',
    plattdeutsch: 'soagen',
    hochdeutsch: 'sägen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Soagen',
    hochdeutsch: 'Säge'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Soagespoine',
    hochdeutsch: 'Sägespäne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Soake',
    hochdeutsch: 'Sache'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Söameraaien',
    hochdeutsch: 'Sämereien'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Soarg',
    hochdeutsch: 'Sarg'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Soargnoagel',
    hochdeutsch: 'Sargnagel (Zigarette)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Soat',
    hochdeutsch: 'Saat'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Soatketuffel',
    hochdeutsch: 'Saatkartoffel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Söcken',
    hochdeutsch: 'Socken'
  },
  {
    artikel: '',
    plattdeutsch: 'soiken',
    hochdeutsch: 'suchen'
  },
  {
    artikel: '',
    plattdeutsch: 'soite',
    hochdeutsch: 'süß'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Soiten',
    hochdeutsch: 'Likör, Kuss'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Soitigkert  (Soitichkert)',
    hochdeutsch: 'Süßigkeit'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Sölt',
    hochdeutsch: 'Salz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sommer',
    hochdeutsch: 'Sommer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sommerdagg  (Sommerdach)',
    hochdeutsch: 'Sommertag'
  },
  {
    artikel: '',
    plattdeutsch: 'sommerdoages',
    hochdeutsch: 'sommertags'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sommerroggen',
    hochdeutsch: 'Sommerroggen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sönndagg  (Sönndach)',
    hochdeutsch: 'Sonntag'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Sönndoageseten',
    hochdeutsch: 'Sonntagsessen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sönndoageshaals',
    hochdeutsch: 'Luftröhre'
  },
  {
    artikel: '',
    plattdeutsch: 'sonnerboar',
    hochdeutsch: 'sonderbar'
  },
  {
    artikel: '',
    plattdeutsch: 'sonnerlick',
    hochdeutsch: 'sonderlich'
  },
  {
    artikel: '',
    plattdeutsch: 'sonnern',
    hochdeutsch: 'sondern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sööle',
    hochdeutsch: 'Salzlake  (zum Pökeln)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Soorgen',
    hochdeutsch: 'Sorgen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Soorgensteohl',
    hochdeutsch: 'Ohrensessel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Sörpekaalf',
    hochdeutsch: 'Kalb (ganz jung)'
  },
  {
    artikel: '',
    plattdeutsch: 'sörpen',
    hochdeutsch: 'tränken'
  },
  {
    artikel: '',
    plattdeutsch: 'spaaien',
    hochdeutsch: 'spucken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spaaigel',
    hochdeutsch: 'Spiegel'
  },
  {
    artikel: '',
    plattdeutsch: 'spalkoen',
    hochdeutsch: 'toben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spangen',
    hochdeutsch: 'Spange, Querverbindung im Dachstuhl'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Spann',
    hochdeutsch: 'Dachsparrenpaar'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spannsoagen',
    hochdeutsch: 'Säge mit Spannschnur'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spärken',
    hochdeutsch: 'Speiche'
  },
  {
    artikel: '',
    plattdeutsch: 'speckeliehen',
    hochdeutsch: 'spekulieren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Speckschwoaen',
    hochdeutsch: 'Speckschwarte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Specksiehen',
    hochdeutsch: 'Speckseite (vor allem vom Schwein)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Spektoakel',
    hochdeutsch: 'Spektakel, Krach'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Speis',
    hochdeutsch: 'Mörtel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Spell',
    hochdeutsch: 'Spiel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spendierböxen',
    hochdeutsch: 'Spendierhose'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Speolen',
    hochdeutsch: 'Spule'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Speolrad',
    hochdeutsch: 'Spulrad'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Speon',
    hochdeutsch: 'Span'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sperenzken',
    hochdeutsch: 'Umschweife'
  },
  {
    artikel: '',
    plattdeutsch: 'sperrangelwiet',
    hochdeutsch: 'sperrangelweit'
  },
  {
    artikel: '',
    plattdeutsch: 'sperrn',
    hochdeutsch: 'sperren'
  },
  {
    artikel: '',
    plattdeutsch: 'sperrwiet',
    hochdeutsch: 'sperrweit'
  },
  {
    artikel: '',
    plattdeutsch: 'spickeliehen',
    hochdeutsch: 'spekulieren'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Spickeliehriisen',
    hochdeutsch: 'Brille'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spieker',
    hochdeutsch: 'Speicher'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spielen',
    hochdeutsch: 'Bohnenstange aus Holz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spielenbaunen',
    hochdeutsch: 'Stangenbohnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spient',
    hochdeutsch: 'Flächenmaß (250 m$^2$)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Spier',
    hochdeutsch: 'Halm'
  },
  {
    artikel: '',
    plattdeutsch: 'spierlen',
    hochdeutsch: 'spielen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spierleraaie',
    hochdeutsch: 'Spielerei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spierlsachen',
    hochdeutsch: 'Spielsachen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spiese',
    hochdeutsch: 'Speise'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spiesekommern',
    hochdeutsch: 'Speisekammer'
  },
  {
    artikel: '',
    plattdeutsch: 'spinkelig  (spinkelich)',
    hochdeutsch: 'gesprenkelt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spinndicke',
    hochdeutsch: 'Kohlmeise'
  },
  {
    artikel: '',
    plattdeutsch: 'spinnefiend',
    hochdeutsch: 'spinnefeind'
  },
  {
    artikel: '',
    plattdeutsch: 'spinnen',
    hochdeutsch: 'spinnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spinners',
    hochdeutsch: 'Besuchergruppe (geselliges Beisammensein, vorwiegend im Winter)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spinnewüppen',
    hochdeutsch: 'Spinngewebe'
  },
  {
    artikel: '',
    plattdeutsch: 'spinnewüppenhaft',
    hochdeutsch: 'instabil'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spinnoabend',
    hochdeutsch: 'Geselligkeit im Winter (ursprünglich mit Spinnrad und Handarbeiten)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spinoat',
    hochdeutsch: 'Spinat'
  },
  {
    artikel: '',
    plattdeutsch: 'spiss',
    hochdeutsch: 'dünn (hager), spitz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spissbüen',
    hochdeutsch: 'Spitzboden'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spisse',
    hochdeutsch: 'Mensch  (dünn, hager)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spissen',
    hochdeutsch: 'Spitze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spitzmius',
    hochdeutsch: 'Spitzmaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spitznoame',
    hochdeutsch: 'Spitzname'
  },
  {
    artikel: '',
    plattdeutsch: 'spletten',
    hochdeutsch: 'spreizen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Splien',
    hochdeutsch: 'Spleen'
  },
  {
    artikel: '',
    plattdeutsch: 'splienig  (splienich)',
    hochdeutsch: 'spleenig'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Splinthult',
    hochdeutsch: 'Splintholz'
  },
  {
    artikel: '',
    plattdeutsch: 'splitternoakend',
    hochdeutsch: 'splitternackt'
  },
  {
    artikel: '',
    plattdeutsch: 'spoan',
    hochdeutsch: 'sparen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spoan',
    hochdeutsch: 'Spaten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spoar; de Spoars',
    hochdeutsch: 'Sparren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spoarkasse',
    hochdeutsch: 'Sparkasse'
  },
  {
    artikel: '',
    plattdeutsch: 'spoarsoam',
    hochdeutsch: 'sparsam'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spoarsoamkert',
    hochdeutsch: 'Sparsamkeit'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spoaß',
    hochdeutsch: 'Spaß'
  },
  {
    artikel: '',
    plattdeutsch: 'spoaßig  (spoaßich)',
    hochdeutsch: 'spaßig'
  },
  {
    artikel: '',
    plattdeutsch: 'spoiken',
    hochdeutsch: 'spuken'
  },
  {
    artikel: '',
    plattdeutsch: 'spoikenhaftig  (spoikenhaftich)',
    hochdeutsch: 'gespenstisch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spoikenkieker',
    hochdeutsch: 'Hellseher'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Spoiksel',
    hochdeutsch: 'Spuk'
  },
  {
    artikel: '',
    plattdeutsch: 'spoilen',
    hochdeutsch: 'spülen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spoilstein',
    hochdeutsch: 'Spülstein'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Spoilwoater',
    hochdeutsch: 'Spülwasser'
  },
  {
    artikel: '',
    plattdeutsch: 'spöttsk',
    hochdeutsch: 'spöttisch, gering'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spraaien',
    hochdeutsch: 'Stare'
  },
  {
    artikel: '',
    plattdeutsch: 'spreken',
    hochdeutsch: 'sprechen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spricker',
    hochdeutsch: 'Reisig zum Feuer anzünden'
  },
  {
    artikel: '',
    plattdeutsch: 'springen',
    hochdeutsch: 'springen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Springhoase',
    hochdeutsch: 'Heuschrecke, Kind (lebhaft)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Springhoasenoabend',
    hochdeutsch: 'Treffen von Verliebten  (am Mittwoch und Samstag)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spriudel',
    hochdeutsch: 'Sprudel (Limonade)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sproake',
    hochdeutsch: 'Sprache'
  },
  {
    artikel: '',
    plattdeutsch: 'sprützen',
    hochdeutsch: 'spritzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sprützen',
    hochdeutsch: 'Spitze'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Sprützenhius',
    hochdeutsch: 'Spritzenhaus  (Feuerwehrgerätehaus), Arrestzelle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Spucht',
    hochdeutsch: 'Mensch  (schmächtig)'
  },
  {
    artikel: '',
    plattdeutsch: 'spüen',
    hochdeutsch: 'spüren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Staal',
    hochdeutsch: 'Stall'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Staaldür',
    hochdeutsch: 'Stalltür'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Staalhoasen',
    hochdeutsch: 'Kaninchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Staallucht',
    hochdeutsch: 'Stalllaterne'
  },
  {
    artikel: '',
    plattdeutsch: 'stäbig',
    hochdeutsch: 'stabil, stämmig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stadt; de Stehe',
    hochdeutsch: 'Stadt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Stammenne',
    hochdeutsch: 'Flaschenhals'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Stammhius',
    hochdeutsch: 'Stammhaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stampel',
    hochdeutsch: 'Stampfer'
  },
  {
    artikel: '',
    plattdeutsch: 'stampeln',
    hochdeutsch: 'stampfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stamperaaie',
    hochdeutsch: 'Betonwerkstatt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stampketuffel',
    hochdeutsch: 'Kartoffelbrei'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Standweer',
    hochdeutsch: 'Hochdruckwetterlage (beständig)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stangen',
    hochdeutsch: 'Schwein (jung, kein Ferkel)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stangenknail',
    hochdeutsch: 'Zimtstange'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stänkeraaie',
    hochdeutsch: 'Stänkerei'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Stankett',
    hochdeutsch: 'Staketenzaun'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stänner',
    hochdeutsch: 'Ständer'
  },
  {
    artikel: '',
    plattdeutsch: 'stännern',
    hochdeutsch: 'herumstehen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Stännerweerk',
    hochdeutsch: 'Fachwerk'
  },
  {
    artikel: '',
    plattdeutsch: 'stännig (stännich)',
    hochdeutsch: 'ständig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stärt; de Stäre',
    hochdeutsch: 'Schwanz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stärtreimen',
    hochdeutsch: 'Schwanzriemen (Pferdegeschirr)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Statiuer',
    hochdeutsch: 'Statur'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Steckroibe',
    hochdeutsch: 'Steckrübe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Steckroibenscheole',
    hochdeutsch: 'landwirtschaftliche Fachschule'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Steekiisen',
    hochdeutsch: 'Stecheisen'
  },
  {
    artikel: '',
    plattdeutsch: 'steerben (sturm)',
    hochdeutsch: 'sterben (gestorben)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Steerbenswoort',
    hochdeutsch: 'Sterbenswort'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Steffkiend',
    hochdeutsch: 'Stiefkind'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Steffmoime',
    hochdeutsch: 'Stiefmutter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stefföllern',
    hochdeutsch: 'Stiefeltern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Steffvoar',
    hochdeutsch: 'Stiefvater'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stein',
    hochdeutsch: 'Stein'
  },
  {
    artikel: '',
    plattdeutsch: 'steken',
    hochdeutsch: 'stechen'
  },
  {
    artikel: '',
    plattdeutsch: 'stellen',
    hochdeutsch: 'stellen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stellmoaker',
    hochdeutsch: 'Stellmacher'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Steo',
    hochdeutsch: 'Stau'
  },
  {
    artikel: '',
    plattdeutsch: 'steoen',
    hochdeutsch: 'stauen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Steohl',
    hochdeutsch: 'Stuhl'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Steohlbein',
    hochdeutsch: 'Stuhlbein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Steohlgang',
    hochdeutsch: 'Stuhlgang'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Steohlküssen',
    hochdeutsch: 'Stuhlkissen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Steohllihrnen',
    hochdeutsch: 'Stuhllehne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stich',
    hochdeutsch: 'Stich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stickbiehen',
    hochdeutsch: 'Stachelbeeren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sticken',
    hochdeutsch: 'Streichholz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stickheoßen',
    hochdeutsch: 'Keuchhusten'
  },
  {
    artikel: '',
    plattdeutsch: 'stickum',
    hochdeutsch: 'heimlich, still'
  },
  {
    artikel: '',
    plattdeutsch: 'stiebe',
    hochdeutsch: 'steif'
  },
  {
    artikel: '',
    plattdeutsch: 'stiegen',
    hochdeutsch: 'steigen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stiehe',
    hochdeutsch: 'Stelle, Stätte'
  },
  {
    artikel: '',
    plattdeutsch: 'stiehenwiese',
    hochdeutsch: 'stellenweise'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stiepel',
    hochdeutsch: 'Stütze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stierbel',
    hochdeutsch: 'Stiefel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stierbelknecht',
    hochdeutsch: 'Stiefelknecht'
  },
  {
    artikel: '',
    plattdeutsch: 'stierbeln',
    hochdeutsch: 'stiefeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stierke',
    hochdeutsch: 'Halsfleisch vom geschlachteten Schwein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stierl',
    hochdeutsch: 'Stiel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stierlpott',
    hochdeutsch: 'Stieltopf'
  },
  {
    artikel: '',
    plattdeutsch: 'stiften goahn',
    hochdeutsch: 'flüchten, weglaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'stille',
    hochdeutsch: 'still, ruhig, leise'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stillenfreidagg  (Stillenfreidach)',
    hochdeutsch: 'Karfreitag'
  },
  {
    artikel: '',
    plattdeutsch: 'stilleschwiegen',
    hochdeutsch: 'stillschweigen'
  },
  {
    artikel: '',
    plattdeutsch: 'stillken',
    hochdeutsch: 'heimlich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stillkenbieter',
    hochdeutsch: 'Wadenbeißer'
  },
  {
    artikel: '',
    plattdeutsch: 'stimmen',
    hochdeutsch: 'stimmen'
  },
  {
    artikel: '',
    plattdeutsch: 'stinken (stünk)',
    hochdeutsch: 'stinken (stank)'
  },
  {
    artikel: '',
    plattdeutsch: 'stinkenfiul',
    hochdeutsch: 'stinkfaul'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stinkeraaie',
    hochdeutsch: 'Stinkerei'
  },
  {
    artikel: '',
    plattdeutsch: 'stippen',
    hochdeutsch: 'nieseln, tunken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stippen',
    hochdeutsch: 'Pickel, Punkt (kleiner Fleck)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stippgöarte',
    hochdeutsch: 'Stippgrütze'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Stippsel',
    hochdeutsch: 'Tunke'
  },
  {
    artikel: '',
    plattdeutsch: 'stiuben (stauf)',
    hochdeutsch: 'stauben (staubte)'
  },
  {
    artikel: '',
    plattdeutsch: 'stiuken',
    hochdeutsch: 'stauchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stiuken',
    hochdeutsch: 'Baumstumpf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stiupstärt',
    hochdeutsch: 'Stängel und Kerngehäuse vom Kernobst'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stiuten',
    hochdeutsch: 'Hefegebäck, Süßbrot'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stiutenkerl',
    hochdeutsch: 'Stutenkerl'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Stiutenkieken',
    hochdeutsch: 'Kinderspiel (Zwei Personen sehen sich in die Augen, ohne eine Miene zu verziehen. Wer zuerst lacht, hat verloren.)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Stoafehenmirragg (Stoafehenmirrach)',
    hochdeutsch: 'Schnippelbohneneintopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stoah-in-Wegg  (Stoah-in-Wech)',
    hochdeutsch: 'jemand der im Weg steht, Gegenstand der überflüssig ist'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stoahl',
    hochdeutsch: 'Stahl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stoahlen',
    hochdeutsch: 'Tischbein, Stuhlbein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stoahlfehen',
    hochdeutsch: 'Schreibfeder'
  },
  {
    artikel: '',
    plattdeutsch: 'stoahn',
    hochdeutsch: 'stehen'
  },
  {
    artikel: '',
    plattdeutsch: 'stoakelig (stoakelich)',
    hochdeutsch: 'ungelenk gehen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stoaken',
    hochdeutsch: 'Holzstange'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stoapel',
    hochdeutsch: 'Stapel'
  },
  {
    artikel: '',
    plattdeutsch: 'stoapeln',
    hochdeutsch: 'stapeln'
  },
  {
    artikel: '',
    plattdeutsch: 'stoark',
    hochdeutsch: 'stark'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stoat',
    hochdeutsch: 'Staat'
  },
  {
    artikel: '',
    plattdeutsch: 'stoats',
    hochdeutsch: 'anstatt'
  },
  {
    artikel: '',
    plattdeutsch: 'stoatsk',
    hochdeutsch: 'stattlich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stockneegelken',
    hochdeutsch: 'Stocknelken'
  },
  {
    artikel: '',
    plattdeutsch: 'stockstiebe',
    hochdeutsch: 'stocksteif'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Stockweerk',
    hochdeutsch: 'Stockwerk'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stoff',
    hochdeutsch: 'Staub, Stoff'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stoffbaallen',
    hochdeutsch: 'Stoffballen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stökel',
    hochdeutsch: 'Schürhaken'
  },
  {
    artikel: '',
    plattdeutsch: 'stökeln',
    hochdeutsch: 'stochern, aufwiegeln, anstoßen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stoobm',
    hochdeutsch: 'Stube  (Wohnzimmer)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stoppekoorf',
    hochdeutsch: 'Korb mit Stopfsachen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stöppel',
    hochdeutsch: 'Stoppel'
  },
  {
    artikel: '',
    plattdeutsch: 'stoppen',
    hochdeutsch: 'stopfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stoppnoartel',
    hochdeutsch: 'Stopfnadel'
  },
  {
    artikel: '',
    plattdeutsch: 'störten',
    hochdeutsch: 'stoßen'
  },
  {
    artikel: '',
    plattdeutsch: 'stramme',
    hochdeutsch: 'stramm, volltrunken'
  },
  {
    artikel: '',
    plattdeutsch: 'strammen',
    hochdeutsch: 'ziehender Schmerz, einschnüren (zu enge Kleidung)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stratz',
    hochdeutsch: 'Spritzer'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Strauh',
    hochdeutsch: 'Stroh'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Strauhbleomen',
    hochdeutsch: 'Strohblumen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Strauhdack',
    hochdeutsch: 'Strohdach'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Strauhdocken',
    hochdeutsch: 'Strohbüschel zum Abdichten von Dachziegeln (Rechtsdecker)'
  },
  {
    artikel: '',
    plattdeutsch: 'strauhdoof',
    hochdeutsch: 'strohdumm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Strauhfissen',
    hochdeutsch: 'Bindfaden für Strohbunde'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Strauhheot',
    hochdeutsch: 'Strohhut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Strauhpuppen',
    hochdeutsch: 'Strohpuppe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Strauhsack',
    hochdeutsch: 'Strohsack'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Strauhspier',
    hochdeutsch: 'Getreidehalm'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Strauhwiep',
    hochdeutsch: 'Strohbündel (klein)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Strick',
    hochdeutsch: 'Spitzbube'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Strick',
    hochdeutsch: 'Strick (kurzes Seil)'
  },
  {
    artikel: '',
    plattdeutsch: 'strieken',
    hochdeutsch: 'streichen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Strierke',
    hochdeutsch: 'Strich'
  },
  {
    artikel: '',
    plattdeutsch: 'strierkenvull',
    hochdeutsch: 'randvoll'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Striermel',
    hochdeutsch: 'Stremel, Streifen (schmales Reststück)'
  },
  {
    artikel: '',
    plattdeutsch: 'strierpen',
    hochdeutsch: 'streicheln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Striet',
    hochdeutsch: 'Streit'
  },
  {
    artikel: '',
    plattdeutsch: 'strieten',
    hochdeutsch: 'streiten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Strieteraaie',
    hochdeutsch: 'Streiterei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Striethammel',
    hochdeutsch: 'Streithammel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stritz',
    hochdeutsch: 'Spritzer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stritzebock',
    hochdeutsch: 'Melkschemel'
  },
  {
    artikel: '',
    plattdeutsch: 'stritzen',
    hochdeutsch: 'spritzen  (kleiner Strahl)'
  },
  {
    artikel: '',
    plattdeutsch: 'striube',
    hochdeutsch: 'schwergängig'
  },
  {
    artikel: '',
    plattdeutsch: 'striukeln',
    hochdeutsch: 'straucheln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Striusk',
    hochdeutsch: 'Strauch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stroafe',
    hochdeutsch: 'Strafe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stroate',
    hochdeutsch: 'Straße'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stroatengroaben',
    hochdeutsch: 'Straßengraben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stroatenoarberter',
    hochdeutsch: 'Straßenarbeiter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stroten',
    hochdeutsch: 'Speiseröhre'
  },
  {
    artikel: '',
    plattdeutsch: 'strükeln',
    hochdeutsch: 'straucheln'
  },
  {
    artikel: '',
    plattdeutsch: 'strullen',
    hochdeutsch: 'urinieren, Flüssigkeit läuft im Strahl'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Strumpband',
    hochdeutsch: 'Strumpfband'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Strümpe',
    hochdeutsch: 'Strümpfe'
  },
  {
    artikel: '',
    plattdeutsch: 'strunzen',
    hochdeutsch: 'angeben'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Stücke',
    hochdeutsch: 'Stück, Ackerstück'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Stüer',
    hochdeutsch: 'Steuer (Lenkvorrichtung)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stüer',
    hochdeutsch: 'Steuer (Finanzabgaben)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stüern',
    hochdeutsch: 'Steuern (Finanzabgaben)'
  },
  {
    artikel: '',
    plattdeutsch: 'stührnen',
    hochdeutsch: 'stöhnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stürterbock',
    hochdeutsch: 'Stotterer  (abfällig)'
  },
  {
    artikel: '',
    plattdeutsch: 'stürtern',
    hochdeutsch: 'stottern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stülpen',
    hochdeutsch: 'Deckel'
  },
  {
    artikel: '',
    plattdeutsch: 'stulte',
    hochdeutsch: 'stolz'
  },
  {
    artikel: '',
    plattdeutsch: 'stump',
    hochdeutsch: 'stumpf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stump',
    hochdeutsch: 'Stumpf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stunne',
    hochdeutsch: 'Stunde'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sturmhoaken',
    hochdeutsch: 'Sturmhaken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sturmliuken',
    hochdeutsch: 'Sturmluke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sturmlüchen',
    hochdeutsch: 'Petroleumlampe'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Stürnzel',
    hochdeutsch: 'Neugeborenengeschenk'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stüssel',
    hochdeutsch: 'Stütze'
  },
  {
    artikel: '',
    plattdeutsch: 'stüsseln',
    hochdeutsch: 'abstützen  (behelfsmäßig), stapeln (unordentlich)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stütk',
    hochdeutsch: 'Schwanzwurzel  (bei Geflügel)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Stutz (uppen Stutz)',
    hochdeutsch: 'Augenblick (sofort)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Subbelaaie',
    hochdeutsch: 'Schnitt (mit stumpfem Messer oder Säge)'
  },
  {
    artikel: '',
    plattdeutsch: 'subbeln',
    hochdeutsch: 'schneiden (mit stumpfem Messer)'
  },
  {
    artikel: '',
    plattdeutsch: 'süen',
    hochdeutsch: 'säuern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Süger',
    hochdeutsch: 'Drainagerohr  (kleiner Durchmesser)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Süke',
    hochdeutsch: 'Seuche'
  },
  {
    artikel: '',
    plattdeutsch: 'süken',
    hochdeutsch: 'siechen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Sülber',
    hochdeutsch: 'Silber'
  },
  {
    artikel: '',
    plattdeutsch: 'sülbige',
    hochdeutsch: 'dasselbe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sülen',
    hochdeutsch: 'Säule, Weidepfahl (dick)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Süll',
    hochdeutsch: 'Schwelle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sülte',
    hochdeutsch: 'Sülze'
  },
  {
    artikel: '',
    plattdeutsch: 'sümen',
    hochdeutsch: 'säumen'
  },
  {
    artikel: '',
    plattdeutsch: 'sümms',
    hochdeutsch: 'selber, selbst'
  },
  {
    artikel: '',
    plattdeutsch: 'sümmsbacken',
    hochdeutsch: 'selbstgebacken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sump',
    hochdeutsch: 'Sumpf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sünne',
    hochdeutsch: 'Sonne, Sünde'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Sünnekindken',
    hochdeutsch: 'Marienkäfer  (oder auch komischer Mensch)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sünnematen',
    hochdeutsch: 'Martinstag'
  },
  {
    artikel: '',
    plattdeutsch: 'sünnen',
    hochdeutsch: 'sonnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sünnenschien',
    hochdeutsch: 'Sonnenschein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sünnoabend',
    hochdeutsch: 'Samstag, Sonnabend'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Süper',
    hochdeutsch: 'Säufer'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sürgedießel',
    hochdeutsch: 'Gänsedistel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Sürgen',
    hochdeutsch: 'Sau'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Sürgeschwien',
    hochdeutsch: 'Schwein (weiblich)'
  },
  {
    artikel: '',
    plattdeutsch: 'sürlk',
    hochdeutsch: 'verdorben (Lebensmittel), säuerlich'
  },
  {
    artikel: '',
    plattdeutsch: 'süss',
    hochdeutsch: 'früher, sonst'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Süster',
    hochdeutsch: 'Schwester'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Sutken',
    hochdeutsch: 'Schmierfink'
  },
  {
    artikel: '',
    plattdeutsch: 'szau',
    hochdeutsch: 'so'
  },
  {
    artikel: '',
    plattdeutsch: 'taalfoitken',
    hochdeutsch: 'zappeln mit Beinen (hilflos, ohne Bodenberührung)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Taalg',
    hochdeutsch: 'Talg'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Taalgen',
    hochdeutsch: 'Zweig'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Taalglecht',
    hochdeutsch: 'Kerze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tacken',
    hochdeutsch: 'Zacke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tadder',
    hochdeutsch: 'Zittern'
  },
  {
    artikel: '',
    plattdeutsch: 'tadderig  (tadderich)',
    hochdeutsch: 'zitterig'
  },
  {
    artikel: '',
    plattdeutsch: 'Tagg  (Tach)',
    hochdeutsch: 'guten Tag'
  },
  {
    artikel: '',
    plattdeutsch: 'tamm',
    hochdeutsch: 'zahm'
  },
  {
    artikel: '',
    plattdeutsch: 'tamm moaken',
    hochdeutsch: 'zähmen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tante',
    hochdeutsch: 'Tante'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tänte',
    hochdeutsch: 'Tand'
  },
  {
    artikel: '',
    plattdeutsch: 'tappen',
    hochdeutsch: 'zapfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tappen',
    hochdeutsch: 'Zapfen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Tappenlock',
    hochdeutsch: 'Zapfenloch  (im Fachwerk)'
  },
  {
    artikel: '',
    plattdeutsch: 'tapziehen',
    hochdeutsch: 'tapezieren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tärnen',
    hochdeutsch: 'Zeh'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Taske',
    hochdeutsch: 'Frau  (zickig)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tasken',
    hochdeutsch: 'Tasche'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Taskendeok',
    hochdeutsch: 'Taschentuch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Taskengeld',
    hochdeutsch: 'Taschengeld'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Taskeniuhe',
    hochdeutsch: 'Taschenuhr'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Taskenlucht',
    hochdeutsch: 'Taschenlampe'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Taskenmest',
    hochdeutsch: 'Taschenmesser'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tassen',
    hochdeutsch: 'Tasse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Taum',
    hochdeutsch: 'Zaum'
  },
  {
    artikel: '',
    plattdeutsch: 'teergen',
    hochdeutsch: 'ärgern (andere ärgern)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tehne',
    hochdeutsch: 'Zähne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tehnebreker',
    hochdeutsch: 'Zahnarzt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tehnekelln',
    hochdeutsch: 'Zahnschmerzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tei',
    hochdeutsch: 'Tee'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Teiaai',
    hochdeutsch: 'Teeei'
  },
  {
    artikel: '',
    plattdeutsch: 'teihn',
    hochdeutsch: 'ziehen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Teikannen',
    hochdeutsch: 'Teekanne'
  },
  {
    artikel: '',
    plattdeutsch: 'teiken',
    hochdeutsch: 'zeichnen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Teiken',
    hochdeutsch: 'Zeichen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Teilierpel',
    hochdeutsch: 'Teelöffel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Teisierbe',
    hochdeutsch: 'Teesieb'
  },
  {
    artikel: '',
    plattdeutsch: 'tellen',
    hochdeutsch: 'zählen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Teller',
    hochdeutsch: 'Teller'
  },
  {
    artikel: '',
    plattdeutsch: 'Teller vull',
    hochdeutsch: 'Teller voll'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Tellerbeoed',
    hochdeutsch: 'Tellerbord'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Tellerschapp',
    hochdeutsch: 'Tellerschrank'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tenöster',
    hochdeutsch: 'Tornister, Schulranzen, Persönlichkeit (mit Ecken und Kanten)'
  },
  {
    artikel: '',
    plattdeutsch: 'teo',
    hochdeutsch: 'zügig, zu'
  },
  {
    artikel: '',
    plattdeutsch: 'teo bunt',
    hochdeutsch: 'unerträglich'
  },
  {
    artikel: '',
    plattdeutsch: 'teo Enne',
    hochdeutsch: 'zu Ende, Schluss'
  },
  {
    artikel: '',
    plattdeutsch: 'teo kort',
    hochdeutsch: 'zu kurz'
  },
  {
    artikel: '',
    plattdeutsch: 'teo korte kurm',
    hochdeutsch: 'zu kurz kommen, benachteiligen'
  },
  {
    artikel: '',
    plattdeutsch: 'teo Liebe',
    hochdeutsch: 'zu Leibe'
  },
  {
    artikel: '',
    plattdeutsch: 'teo loate',
    hochdeutsch: 'zu spät'
  },
  {
    artikel: '',
    plattdeutsch: 'teo teo',
    hochdeutsch: 'zügig'
  },
  {
    artikel: '',
    plattdeutsch: 'teo tweien',
    hochdeutsch: 'zu zweit'
  },
  {
    artikel: '',
    plattdeutsch: 'teo vierl',
    hochdeutsch: 'zu viel'
  },
  {
    artikel: '',
    plattdeutsch: 'teoaaist',
    hochdeutsch: 'zuerst'
  },
  {
    artikel: '',
    plattdeutsch: 'teoballern',
    hochdeutsch: 'verschlämmt  (Acker), zuknallen'
  },
  {
    artikel: '',
    plattdeutsch: 'teobienen',
    hochdeutsch: 'zubinden'
  },
  {
    artikel: '',
    plattdeutsch: 'teobottern',
    hochdeutsch: 'zubuttern'
  },
  {
    artikel: '',
    plattdeutsch: 'teobringen',
    hochdeutsch: 'zubringen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Teodecke',
    hochdeutsch: 'Zudecke'
  },
  {
    artikel: '',
    plattdeutsch: 'teodecken',
    hochdeutsch: 'zudecken'
  },
  {
    artikel: '',
    plattdeutsch: 'teodeon',
    hochdeutsch: 'anreichen  (Heu oder Korngarben), zutun'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Teodeon',
    hochdeutsch: 'Zutun'
  },
  {
    artikel: '',
    plattdeutsch: 'teodregen',
    hochdeutsch: 'zutragen (heimlich berichten)'
  },
  {
    artikel: '',
    plattdeutsch: 'teodrepen',
    hochdeutsch: 'zutreffen'
  },
  {
    artikel: '',
    plattdeutsch: 'teodrücken',
    hochdeutsch: 'zudrücken'
  },
  {
    artikel: '',
    plattdeutsch: 'teoe',
    hochdeutsch: 'zu, geschlossen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Teofall',
    hochdeutsch: 'Zufall'
  },
  {
    artikel: '',
    plattdeutsch: 'teofällig  (teofällich)',
    hochdeutsch: 'zufällig'
  },
  {
    artikel: '',
    plattdeutsch: 'teofeoern',
    hochdeutsch: 'zufüttern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Teoflucht',
    hochdeutsch: 'Zuflucht'
  },
  {
    artikel: '',
    plattdeutsch: 'teofreisen',
    hochdeutsch: 'zufrieren'
  },
  {
    artikel: '',
    plattdeutsch: 'teofreten',
    hochdeutsch: 'zufressen'
  },
  {
    artikel: '',
    plattdeutsch: 'teofriehe',
    hochdeutsch: 'zufrieden'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Teogang',
    hochdeutsch: 'Zugang'
  },
  {
    artikel: '',
    plattdeutsch: 'teogange',
    hochdeutsch: 'zugange, aktiv'
  },
  {
    artikel: '',
    plattdeutsch: 'teogeoe',
    hochdeutsch: 'zugute'
  },
  {
    artikel: '',
    plattdeutsch: 'teogierm',
    hochdeutsch: 'zugeben'
  },
  {
    artikel: '',
    plattdeutsch: 'teoglieke',
    hochdeutsch: 'zugleich'
  },
  {
    artikel: '',
    plattdeutsch: 'teogoahn',
    hochdeutsch: 'zugehen'
  },
  {
    artikel: '',
    plattdeutsch: 'teogriepen',
    hochdeutsch: 'zugreifen'
  },
  {
    artikel: '',
    plattdeutsch: 'teogrunne',
    hochdeutsch: 'zugrunde'
  },
  {
    artikel: '',
    plattdeutsch: 'teogürlen',
    hochdeutsch: 'zurieseln'
  },
  {
    artikel: '',
    plattdeutsch: 'teohaupe',
    hochdeutsch: 'zusammen'
  },
  {
    artikel: '',
    plattdeutsch: 'teohaupebienen',
    hochdeutsch: 'zusammenbinden'
  },
  {
    artikel: '',
    plattdeutsch: 'teohaupeküen',
    hochdeutsch: 'verkuppeln'
  },
  {
    artikel: '',
    plattdeutsch: 'teohaupetellen',
    hochdeutsch: 'zusammenzählen'
  },
  {
    artikel: '',
    plattdeutsch: 'teohegen',
    hochdeutsch: 'zukommen lassen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoheoen',
    hochdeutsch: 'zuschlagen'
  },
  {
    artikel: '',
    plattdeutsch: 'teohius',
    hochdeutsch: 'zuhause'
  },
  {
    artikel: '',
    plattdeutsch: 'teohöarn',
    hochdeutsch: 'zuhören'
  },
  {
    artikel: '',
    plattdeutsch: 'teoken',
    hochdeutsch: 'nächste, nächstes'
  },
  {
    artikel: '',
    plattdeutsch: 'teoken Joahr',
    hochdeutsch: 'nächstes Jahr'
  },
  {
    artikel: '',
    plattdeutsch: 'teoken Wierken',
    hochdeutsch: 'nächste Woche'
  },
  {
    artikel: '',
    plattdeutsch: 'teokieken',
    hochdeutsch: 'zusehen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoklappen',
    hochdeutsch: 'zuklappen'
  },
  {
    artikel: '',
    plattdeutsch: 'teokniepen',
    hochdeutsch: 'zukneifen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoknörpen',
    hochdeutsch: 'zuknöpfen'
  },
  {
    artikel: '',
    plattdeutsch: 'teokoken',
    hochdeutsch: 'zukochen'
  },
  {
    artikel: '',
    plattdeutsch: 'teokoppe stiegen',
    hochdeutsch: 'zu Kopfe steigen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoküen',
    hochdeutsch: 'zureden'
  },
  {
    artikel: '',
    plattdeutsch: 'teoläen',
    hochdeutsch: 'dazulernen'
  },
  {
    artikel: '',
    plattdeutsch: 'teolaupen',
    hochdeutsch: 'zulaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoleggen',
    hochdeutsch: 'zulegen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoleibe',
    hochdeutsch: 'zuliebe'
  },
  {
    artikel: '',
    plattdeutsch: 'teolest',
    hochdeutsch: 'zuletzt'
  },
  {
    artikel: '',
    plattdeutsch: 'teoloaten',
    hochdeutsch: 'zulassen, erlauben'
  },
  {
    artikel: '',
    plattdeutsch: 'teolustern',
    hochdeutsch: 'zuhören'
  },
  {
    artikel: '',
    plattdeutsch: 'teomeote',
    hochdeutsch: 'zumute'
  },
  {
    artikel: '',
    plattdeutsch: 'teomeoten',
    hochdeutsch: 'zumuten'
  },
  {
    artikel: '',
    plattdeutsch: 'teominnest',
    hochdeutsch: 'zumindest'
  },
  {
    artikel: '',
    plattdeutsch: 'teomoaken',
    hochdeutsch: 'zumachen'
  },
  {
    artikel: '',
    plattdeutsch: 'teomüen',
    hochdeutsch: 'zumauern'
  },
  {
    artikel: '',
    plattdeutsch: 'teon annern',
    hochdeutsch: 'zum anderen'
  },
  {
    artikel: '',
    plattdeutsch: 'teonaaien',
    hochdeutsch: 'zunähen'
  },
  {
    artikel: '',
    plattdeutsch: 'teonichte moaken',
    hochdeutsch: 'vernichten'
  },
  {
    artikel: '',
    plattdeutsch: 'teonierm',
    hochdeutsch: 'zunehmen'
  },
  {
    artikel: '',
    plattdeutsch: 'teooilen',
    hochdeutsch: 'Überblick verlieren'
  },
  {
    artikel: '',
    plattdeutsch: 'teopacken',
    hochdeutsch: 'zufassen'
  },
  {
    artikel: '',
    plattdeutsch: 'teopassekurm',
    hochdeutsch: 'zupassekommen'
  },
  {
    artikel: '',
    plattdeutsch: 'teopierken',
    hochdeutsch: 'zukleben'
  },
  {
    artikel: '',
    plattdeutsch: 'teoplanten',
    hochdeutsch: 'bepflanzen, zupflanzen (Reststück),'
  },
  {
    artikel: '',
    plattdeutsch: 'teoploigen',
    hochdeutsch: 'zupflügen (Reststück)'
  },
  {
    artikel: '',
    plattdeutsch: 'teopottekurm',
    hochdeutsch: 'zurechtkommen'
  },
  {
    artikel: '',
    plattdeutsch: 'teorecken',
    hochdeutsch: 'anreichen, zureichen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoreken',
    hochdeutsch: 'zurechnen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoreopen',
    hochdeutsch: 'zurufen'
  },
  {
    artikel: '',
    plattdeutsch: 'teorichen',
    hochdeutsch: 'zurichten'
  },
  {
    artikel: '',
    plattdeutsch: 'teoroaen',
    hochdeutsch: 'zuraten'
  },
  {
    artikel: '',
    plattdeutsch: 'teosäggen',
    hochdeutsch: 'zusagen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoschanne',
    hochdeutsch: 'zuschanden'
  },
  {
    artikel: '',
    plattdeutsch: 'teoscheostern',
    hochdeutsch: 'zuschustern'
  },
  {
    artikel: '',
    plattdeutsch: 'teoschicken',
    hochdeutsch: 'zuschicken'
  },
  {
    artikel: '',
    plattdeutsch: 'teoschieten',
    hochdeutsch: 'zuscheißen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoschiuben',
    hochdeutsch: 'zuschieben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Teoschlagghommer  (Teoschlachhommer)',
    hochdeutsch: 'Vorschlaghammer (beim Schmied und Auktionator)'
  },
  {
    artikel: '',
    plattdeutsch: 'teoschliuten',
    hochdeutsch: 'zuschließen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoschloan',
    hochdeutsch: 'zuschlagen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoschmehen',
    hochdeutsch: 'zuschmieren'
  },
  {
    artikel: '',
    plattdeutsch: 'teoschmieten',
    hochdeutsch: 'zuschmeißen, zuwerfen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoschnaaien',
    hochdeutsch: 'zuschneien'
  },
  {
    artikel: '',
    plattdeutsch: 'teoschüppen',
    hochdeutsch: 'zuschaufeln'
  },
  {
    artikel: '',
    plattdeutsch: 'teosetten',
    hochdeutsch: 'aufziehen (Tier zur Zucht verwenden), bedrängen (körperliche oder seelische Verletzung), dazusetzen, zusetzen (verstopfen)'
  },
  {
    artikel: '',
    plattdeutsch: 'teospierlen',
    hochdeutsch: 'zuspielen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Teostand',
    hochdeutsch: 'Zustand'
  },
  {
    artikel: '',
    plattdeutsch: 'teostanne',
    hochdeutsch: 'zustande'
  },
  {
    artikel: '',
    plattdeutsch: 'teostännig  (teostännich)',
    hochdeutsch: 'zuständig'
  },
  {
    artikel: '',
    plattdeutsch: 'teosteken',
    hochdeutsch: 'zustechen, zustecken'
  },
  {
    artikel: '',
    plattdeutsch: 'teostimmen',
    hochdeutsch: 'zustimmen'
  },
  {
    artikel: '',
    plattdeutsch: 'teostoahn',
    hochdeutsch: 'zustehen, aussehen'
  },
  {
    artikel: '',
    plattdeutsch: 'teostoppen',
    hochdeutsch: 'zustopfen'
  },
  {
    artikel: '',
    plattdeutsch: 'teostörten',
    hochdeutsch: 'zustoßen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoteihn',
    hochdeutsch: 'zuziehen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoteosetten',
    hochdeutsch: 'zuzusetzen (nichts zuzusetzen)'
  },
  {
    artikel: '',
    plattdeutsch: 'teotreoen',
    hochdeutsch: 'zutrauen'
  },
  {
    artikel: '',
    plattdeutsch: 'teoulleraaist',
    hochdeutsch: 'zuallererst'
  },
  {
    artikel: '',
    plattdeutsch: 'teoullerlest',
    hochdeutsch: 'zuallerletzt'
  },
  {
    artikel: '',
    plattdeutsch: 'teovedeinen',
    hochdeutsch: 'dazuverdienen'
  },
  {
    artikel: '',
    plattdeutsch: 'teovelässig',
    hochdeutsch: 'zuverlässig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Teovesicht',
    hochdeutsch: 'Zuversicht'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Teovetreoen',
    hochdeutsch: 'Zuvertrauen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Teowass',
    hochdeutsch: 'Zuwachs, Nachwuchs'
  },
  {
    artikel: '',
    plattdeutsch: 'teowassen',
    hochdeutsch: 'zuwachsen'
  },
  {
    artikel: '',
    plattdeutsch: 'teowiernen',
    hochdeutsch: 'zuwider, widerwärtig'
  },
  {
    artikel: '',
    plattdeutsch: 'teowossen',
    hochdeutsch: 'zugewachsen'
  },
  {
    artikel: '',
    plattdeutsch: 'ticken',
    hochdeutsch: 'stoßen (leicht)'
  },
  {
    artikel: '',
    plattdeutsch: 'tiehen',
    hochdeutsch: 'zehren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tiehen',
    hochdeutsch: 'Zeiten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tielösken',
    hochdeutsch: 'Narzissen, Osterglocken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tienen',
    hochdeutsch: 'Zinken'
  },
  {
    artikel: '',
    plattdeutsch: 'tiergen',
    hochdeutsch: 'neben'
  },
  {
    artikel: '',
    plattdeutsch: 'tiergenan',
    hochdeutsch: 'nebenan'
  },
  {
    artikel: '',
    plattdeutsch: 'tiergenangoahn',
    hochdeutsch: 'nebenhergehen, Widerspruch einlegen'
  },
  {
    artikel: '',
    plattdeutsch: 'tiergenanner',
    hochdeutsch: 'nebeneinander'
  },
  {
    artikel: '',
    plattdeutsch: 'tiergenbi',
    hochdeutsch: 'nebenbei'
  },
  {
    artikel: '',
    plattdeutsch: 'tiergenheer',
    hochdeutsch: 'nebenher'
  },
  {
    artikel: '',
    plattdeutsch: 'tiergenteo',
    hochdeutsch: 'nebenher, nebenbei, daneben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tierm',
    hochdeutsch: 'Hündin'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tiet',
    hochdeutsch: 'Zeit'
  },
  {
    artikel: '',
    plattdeutsch: 'tietlierbens',
    hochdeutsch: 'zeitlebens'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tietvedrief',
    hochdeutsch: 'Zeitvertreib'
  },
  {
    artikel: '',
    plattdeutsch: 'tietwiese',
    hochdeutsch: 'zeitweise'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tiffen',
    hochdeutsch: 'Hund (klein)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Timmerlühe',
    hochdeutsch: 'Zimmerleute'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Timmermann',
    hochdeutsch: 'Zimmermann'
  },
  {
    artikel: '',
    plattdeutsch: 'timmern',
    hochdeutsch: 'zimmern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Timmerplass',
    hochdeutsch: 'Zimmerplatz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Timpen',
    hochdeutsch: 'Ecke, Spitze, Zipfel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Timpendeok',
    hochdeutsch: 'Dreieckstuch (bei der Tracht)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tinnef',
    hochdeutsch: 'Unsinn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tinsen',
    hochdeutsch: 'Zinsen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tinshoahn',
    hochdeutsch: 'Mann (leicht erregbar), Zinshahn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tippelbreoer',
    hochdeutsch: 'Landstreicher, Geselle auf Wanderschaft'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Titte',
    hochdeutsch: 'Zitze, Brust (weibl.)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tittentommen',
    hochdeutsch: 'BH'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tittliunen',
    hochdeutsch: 'Verlangen nach der Mutterbrust, Heimweh'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tiuer',
    hochdeutsch: 'Intervall (Beschwerden, Koliken usw.)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tiun; de Tüüne',
    hochdeutsch: 'Zaun'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tiunirgel',
    hochdeutsch: 'Igel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tiusel',
    hochdeutsch: 'Rindvieh (zurückgeblieben)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tiuske',
    hochdeutsch: 'Tausch'
  },
  {
    artikel: '',
    plattdeutsch: 'tiusken',
    hochdeutsch: 'tauschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tiuten',
    hochdeutsch: 'Tüte'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toafel',
    hochdeutsch: 'Tafel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toahn',
    hochdeutsch: 'Zahn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toahnbössen',
    hochdeutsch: 'Zahnbürste'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toahndokter',
    hochdeutsch: 'Zahnarzt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Toahnfleisk',
    hochdeutsch: 'Zahnfleisch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toahnpiene',
    hochdeutsch: 'Zahnschmerzen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Toahnrad',
    hochdeutsch: 'Zahnrad'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toahnwottel',
    hochdeutsch: 'Zahnwurzel'
  },
  {
    artikel: '',
    plattdeutsch: 'toahr',
    hochdeutsch: 'zäh'
  },
  {
    artikel: '',
    plattdeutsch: 'töamen',
    hochdeutsch: 'zäumen'
  },
  {
    artikel: '',
    plattdeutsch: 'tocken',
    hochdeutsch: 'locken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Töge',
    hochdeutsch: 'Unsinn, Unarten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Togg (Toch)',
    hochdeutsch: 'Zug'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toggbank (Tochbank)',
    hochdeutsch: 'Ziehbank (Werkbank zum Festklemmen von Holz)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Togggeschirr (Tochgeschirr)',
    hochdeutsch: 'Zuggeschirr'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Togghoarken (Tochhoaken)',
    hochdeutsch: 'Holzharke mit langen Zinken zum Garben ziehen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Toggiisen (Tochiisen)',
    hochdeutsch: 'Zugeisen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Toggmest (Tochmest)',
    hochdeutsch: 'Ziehmesser'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Toggräap (Tochräap)',
    hochdeutsch: 'Zugseil beim Gespann'
  },
  {
    artikel: '',
    plattdeutsch: 'toiben',
    hochdeutsch: 'warten'
  },
  {
    artikel: '',
    plattdeutsch: 'töllig  (töllich)',
    hochdeutsch: 'zöllig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tommen',
    hochdeutsch: 'Kleiderhaken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tonten',
    hochdeutsch: 'Kinder (abfällig), Haare (lang)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toorf',
    hochdeutsch: 'Torf'
  },
  {
    artikel: '',
    plattdeutsch: 'Toorf ringen',
    hochdeutsch: 'Torf ringen (Torfstücke ringförmig zum Trocknen aufstapeln)'
  },
  {
    artikel: '',
    plattdeutsch: 'Toorf steken',
    hochdeutsch: 'Torf stechen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toorfkassen',
    hochdeutsch: 'Torfkiste'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toorfkiuhlen',
    hochdeutsch: 'Torfkuhle'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Toorfmest',
    hochdeutsch: 'Torfmesser'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toorfmull',
    hochdeutsch: 'Torfmull'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toorfplass',
    hochdeutsch: 'Torfplatz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toorfring  (4 Potthüser)',
    hochdeutsch: 'Torfring  (24 Torfstücke ringförmig zum Kegel aufgestapelt)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toorfspoan',
    hochdeutsch: 'Torfspaten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Toorfstaal',
    hochdeutsch: 'Torflager'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Torrer',
    hochdeutsch: 'Verwirrung, Streit'
  },
  {
    artikel: '',
    plattdeutsch: 'torrerig  (torrerich)',
    hochdeutsch: 'verheddern'
  },
  {
    artikel: '',
    plattdeutsch: 'torrern',
    hochdeutsch: 'verstreuen'
  },
  {
    artikel: '',
    plattdeutsch: 'trappieren',
    hochdeutsch: 'ertappen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Traust',
    hochdeutsch: 'Trost'
  },
  {
    artikel: '',
    plattdeutsch: 'trechte',
    hochdeutsch: 'zurecht, fertig'
  },
  {
    artikel: '',
    plattdeutsch: 'trechtekurm',
    hochdeutsch: 'zurechtkommem'
  },
  {
    artikel: '',
    plattdeutsch: 'trechteleggen',
    hochdeutsch: 'zurechtlegen'
  },
  {
    artikel: '',
    plattdeutsch: 'trechtemoaken',
    hochdeutsch: 'zurechtmachen, vorbereiten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Trechter',
    hochdeutsch: 'Trichter'
  },
  {
    artikel: '',
    plattdeutsch: 'trechtern',
    hochdeutsch: 'trichtern'
  },
  {
    artikel: '',
    plattdeutsch: 'trechtesetten',
    hochdeutsch: 'zurechtweisen'
  },
  {
    artikel: '',
    plattdeutsch: 'trechtestiuken',
    hochdeutsch: 'zurechtstauchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Trecken',
    hochdeutsch: 'Schublade'
  },
  {
    artikel: '',
    plattdeutsch: 'trecken',
    hochdeutsch: 'führen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Trecker',
    hochdeutsch: 'Traktor'
  },
  {
    artikel: '',
    plattdeutsch: 'trehen',
    hochdeutsch: 'treten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Trentel',
    hochdeutsch: 'Scheibe (rund),  Wurstscheibe'
  },
  {
    artikel: '',
    plattdeutsch: 'trenteln',
    hochdeutsch: 'Reifen treiben (Kinderspiel)'
  },
  {
    artikel: '',
    plattdeutsch: 'treoe',
    hochdeutsch: 'treu'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Treoe',
    hochdeutsch: 'Treue'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Treoe',
    hochdeutsch: 'Treue'
  },
  {
    artikel: '',
    plattdeutsch: 'treoen',
    hochdeutsch: 'trauen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Treoer',
    hochdeutsch: 'Trauer'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Treoerhius',
    hochdeutsch: 'Trauerhaus'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Treoerlühe',
    hochdeutsch: 'Trauergesellschaft'
  },
  {
    artikel: '',
    plattdeutsch: 'treoern',
    hochdeutsch: 'trauern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Treppen',
    hochdeutsch: 'Treppe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Trett',
    hochdeutsch: 'Tritt, Schritt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Trieenkopp',
    hochdeutsch: 'Umlenkrolle'
  },
  {
    artikel: '',
    plattdeutsch: 'trierselig  (trierselich)',
    hochdeutsch: 'schwindelig'
  },
  {
    artikel: '',
    plattdeutsch: 'trierseln',
    hochdeutsch: 'taumeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Troaen',
    hochdeutsch: 'Wagenradspuren (tiefe)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Troan',
    hochdeutsch: 'Tran'
  },
  {
    artikel: '',
    plattdeutsch: 'troanen',
    hochdeutsch: 'tränen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Troanen',
    hochdeutsch: 'Tränen'
  },
  {
    artikel: '',
    plattdeutsch: 'tröasten',
    hochdeutsch: 'trösten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tröate',
    hochdeutsch: 'Tröte'
  },
  {
    artikel: '',
    plattdeutsch: 'tröaten',
    hochdeutsch: 'tröten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tröateraaie',
    hochdeutsch: 'Tröterei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Trogg  (Troch)',
    hochdeutsch: 'Trog'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tropp',
    hochdeutsch: 'Trupp, Gruppe, Herde, Rudel'
  },
  {
    artikel: '',
    plattdeutsch: 'trotzdem',
    hochdeutsch: 'trotzdem'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Trüen',
    hochdeutsch: 'Futterschöpfkelle'
  },
  {
    artikel: '',
    plattdeutsch: 'trügge',
    hochdeutsch: 'zurück'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggebieten',
    hochdeutsch: 'zurückbeißen, antworten (scharf)'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggeblieben',
    hochdeutsch: 'zurückbleiben  (auch geistig)'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggebringen',
    hochdeutsch: 'zurückbringen'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggedenken',
    hochdeutsch: 'erinnern, zurückdenken'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggedrieben',
    hochdeutsch: 'zurücktreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggefoihen',
    hochdeutsch: 'zurückfahren'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggegierm',
    hochdeutsch: 'zurückgeben'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggegoahn',
    hochdeutsch: 'zurückgehen'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggehaulen',
    hochdeutsch: 'zurückhalten'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggeheoen',
    hochdeutsch: 'zurückhauen'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggehoalen',
    hochdeutsch: 'zurückholen'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggeiut',
    hochdeutsch: 'rückwärts'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggekieken',
    hochdeutsch: 'zurückblicken'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggekurm',
    hochdeutsch: 'zurückkommen'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggelaupen',
    hochdeutsch: 'zurücklaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggeleggen',
    hochdeutsch: 'zurücklegen'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggelihrnen',
    hochdeutsch: 'zurücklehnen'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggeloaten',
    hochdeutsch: 'zurücklassen'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggenierm',
    hochdeutsch: 'zurücknehmen'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggeoars',
    hochdeutsch: 'rückwärts'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggeschiuben',
    hochdeutsch: 'zurückschieben'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggeschrieben',
    hochdeutsch: 'zurückschreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggesetten',
    hochdeutsch: 'zurücksetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggesteken',
    hochdeutsch: 'zurückstecken'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggeszoppen',
    hochdeutsch: 'zurücksetzen (Gespann)'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggeteihn',
    hochdeutsch: 'zurückziehen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Trüggewegg  (Trüggewech)',
    hochdeutsch: 'Rückweg, Heimweg'
  },
  {
    artikel: '',
    plattdeutsch: 'trüggewiesen',
    hochdeutsch: 'zurückweisen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Trummel',
    hochdeutsch: 'Trommel'
  },
  {
    artikel: '',
    plattdeutsch: 'trummeln',
    hochdeutsch: 'trommeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tucht',
    hochdeutsch: 'Zucht, Gegend (einsam und ablegen)'
  },
  {
    artikel: '',
    plattdeutsch: 'tüchten',
    hochdeutsch: 'züchten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Tuchthius',
    hochdeutsch: 'Zuchthaus'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Tuchtschwien',
    hochdeutsch: 'Zuchtschwein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tuck',
    hochdeutsch: 'Stoß, Augenblick'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tucken',
    hochdeutsch: 'Kleinigkeit (Maß, Zeit, Entfernung usw.)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tucksache',
    hochdeutsch: 'Augenblickssache'
  },
  {
    artikel: '',
    plattdeutsch: 'tuckschullern',
    hochdeutsch: 'Schulterzucken'
  },
  {
    artikel: '',
    plattdeutsch: 'tüddelig  (tüddelich)',
    hochdeutsch: 'verwirrt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tüge',
    hochdeutsch: 'Zeuge'
  },
  {
    artikel: '',
    plattdeutsch: 'tügen',
    hochdeutsch: 'zeugen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tüllen',
    hochdeutsch: 'Spitze für Zigarren oder Spritzbeutel'
  },
  {
    artikel: '',
    plattdeutsch: 'tülken',
    hochdeutsch: 'pinkeln  (bei kleinen Kindern)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tungen',
    hochdeutsch: 'Zunge'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tungenbreker',
    hochdeutsch: 'Zungenbrecher'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tungenschlagg (Tungenschlach)',
    hochdeutsch: 'Zungenschlag'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tunnen',
    hochdeutsch: 'Tonne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tunnenwulf',
    hochdeutsch: 'Mensch (dick und ungepflegt)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Tuppen',
    hochdeutsch: 'Wanne'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Türgel',
    hochdeutsch: 'Zügel'
  },
  {
    artikel: '',
    plattdeutsch: 'türgeln',
    hochdeutsch: 'zügeln'
  },
  {
    artikel: '',
    plattdeutsch: 'turken',
    hochdeutsch: 'gelingen, rauchen'
  },
  {
    artikel: '',
    plattdeutsch: 'turnen',
    hochdeutsch: 'turnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Turteldiuben',
    hochdeutsch: 'Taubenart, Liebespärchen'
  },
  {
    artikel: '',
    plattdeutsch: 'tüsken',
    hochdeutsch: 'zwischen'
  },
  {
    artikel: '',
    plattdeutsch: 'tüskendür',
    hochdeutsch: 'zwischendurch'
  },
  {
    artikel: '',
    plattdeutsch: 'tüskenküen',
    hochdeutsch: 'dazwischenreden'
  },
  {
    artikel: '',
    plattdeutsch: 'tüskensteken',
    hochdeutsch: 'einmischen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tüskentiet',
    hochdeutsch: 'Zwischenzeit'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Tüüg  (Tüüch)',
    hochdeutsch: 'Kleidung, Zeug'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tüügbössen  (Tüüchbössen)',
    hochdeutsch: 'Kleiderbürste'
  },
  {
    artikel: '',
    plattdeutsch: 'twaaie',
    hochdeutsch: 'entzweit, zerbrochen, kaputt'
  },
  {
    artikel: '',
    plattdeutsch: 'twaaiebreken',
    hochdeutsch: 'zerbrechen'
  },
  {
    artikel: '',
    plattdeutsch: 'twaaiedrücken',
    hochdeutsch: 'kaputtdrücken'
  },
  {
    artikel: '',
    plattdeutsch: 'twaaiegoahn',
    hochdeutsch: 'kaputtgehen'
  },
  {
    artikel: '',
    plattdeutsch: 'twaaieheoen',
    hochdeutsch: 'kaputtschlagen'
  },
  {
    artikel: '',
    plattdeutsch: 'twaaierieten',
    hochdeutsch: 'kaputtreißen'
  },
  {
    artikel: '',
    plattdeutsch: 'twaaieschloan',
    hochdeutsch: 'kaputtschlagen'
  },
  {
    artikel: '',
    plattdeutsch: 'twaaieschniehen',
    hochdeutsch: 'kaputtschneiden'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Twang',
    hochdeutsch: 'Zwang'
  },
  {
    artikel: '',
    plattdeutsch: 'twangswiese',
    hochdeutsch: 'zwangsweise'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Twärnt',
    hochdeutsch: 'Zwirn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Twärntsfohmt',
    hochdeutsch: 'Zwirnsfaden'
  },
  {
    artikel: '',
    plattdeutsch: 'twass',
    hochdeutsch: 'quer'
  },
  {
    artikel: '',
    plattdeutsch: 'twassaf',
    hochdeutsch: 'querab'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Twassbroaken',
    hochdeutsch: 'Quertreiber, Seitentrieb'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Twasskopp',
    hochdeutsch: 'Querkopf'
  },
  {
    artikel: '',
    plattdeutsch: 'twassköppig  (twassköppich)',
    hochdeutsch: 'querköpfig'
  },
  {
    artikel: '',
    plattdeutsch: 'twassober',
    hochdeutsch: 'querüber'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Twassriergel',
    hochdeutsch: 'Querriegel (Kämpfer)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Twasstroate',
    hochdeutsch: 'Querstraße'
  },
  {
    artikel: '',
    plattdeutsch: 'twei, tweie',
    hochdeutsch: 'zwei'
  },
  {
    artikel: '',
    plattdeutsch: 'tweibeinig (tweibeinich)',
    hochdeutsch: 'zweibeinig'
  },
  {
    artikel: '',
    plattdeutsch: 'tweimoal',
    hochdeutsch: 'zweimal'
  },
  {
    artikel: '',
    plattdeutsch: 'tweischlöaperiget Berre',
    hochdeutsch: 'Doppelbett'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Tweispänner',
    hochdeutsch: 'Gespann mit zwei Zugtieren'
  },
  {
    artikel: '',
    plattdeutsch: 'tweispännig eten',
    hochdeutsch: 'essen mit Messer und Gabel'
  },
  {
    artikel: '',
    plattdeutsch: 'tweistöckig (tweistöckich)',
    hochdeutsch: 'zweistöckig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Twieback',
    hochdeutsch: 'Zwieback'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Twieg  (Twiech)',
    hochdeutsch: 'Zweig'
  },
  {
    artikel: '',
    plattdeutsch: 'twillen',
    hochdeutsch: 'gabeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Twillen',
    hochdeutsch: 'Astgabel, Gummiflitsche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Twillinge',
    hochdeutsch: 'Zwillinge'
  },
  {
    artikel: '',
    plattdeutsch: 'twingen',
    hochdeutsch: 'zwingen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Twingen',
    hochdeutsch: 'Schraubzwinge'
  },
  {
    artikel: '',
    plattdeutsch: 'üben',
    hochdeutsch: 'üben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Übunge',
    hochdeutsch: 'Übung'
  },
  {
    artikel: '',
    plattdeutsch: 'ull',
    hochdeutsch: 'schon, bereits'
  },
  {
    artikel: '',
    plattdeutsch: 'ull wier',
    hochdeutsch: 'schon wieder'
  },
  {
    artikel: '',
    plattdeutsch: 'ullärne',
    hochdeutsch: 'alleine'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ulldagg  (Ulldach)',
    hochdeutsch: 'Alltag'
  },
  {
    artikel: '',
    plattdeutsch: 'ulldoages',
    hochdeutsch: 'alltags'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ulldoagestüüg  (Ulldoagestüüch)',
    hochdeutsch: 'Alltagskleidung'
  },
  {
    artikel: '',
    plattdeutsch: 'ulle',
    hochdeutsch: 'alle'
  },
  {
    artikel: '',
    plattdeutsch: 'ulle Doage',
    hochdeutsch: 'alle Tage'
  },
  {
    artikel: '',
    plattdeutsch: 'ullebeste',
    hochdeutsch: 'allerbeste'
  },
  {
    artikel: '',
    plattdeutsch: 'ullehand',
    hochdeutsch: 'allerhand'
  },
  {
    artikel: '',
    plattdeutsch: 'ullehaupe',
    hochdeutsch: 'alle zusammen'
  },
  {
    artikel: '',
    plattdeutsch: 'ulleleste',
    hochdeutsch: 'allerletzte'
  },
  {
    artikel: '',
    plattdeutsch: 'ulles',
    hochdeutsch: 'alles'
  },
  {
    artikel: '',
    plattdeutsch: 'ulletiet',
    hochdeutsch: 'jederzeit'
  },
  {
    artikel: '',
    plattdeutsch: 'ullewärts, ullewegens',
    hochdeutsch: 'überall'
  },
  {
    artikel: '',
    plattdeutsch: 'ullhante',
    hochdeutsch: 'manchmal, hin und wieder'
  },
  {
    artikel: '',
    plattdeutsch: 'ullteo',
    hochdeutsch: 'allzu'
  },
  {
    artikel: '',
    plattdeutsch: 'ullteovierl',
    hochdeutsch: 'allzu viel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ümmeleitunge',
    hochdeutsch: 'Umleitung'
  },
  {
    artikel: '',
    plattdeutsch: 'ümme',
    hochdeutsch: 'um'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmebäarn',
    hochdeutsch: 'umrauschen (bei Sauen)'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmebienen',
    hochdeutsch: 'umbinden'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmebloaen',
    hochdeutsch: 'umblättern'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeböagen',
    hochdeutsch: 'umbiegen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeböcken',
    hochdeutsch: 'umbocken  (Ziege oder Schaf), Meinung ändern'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmebreken',
    hochdeutsch: 'umbrechen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmebringen',
    hochdeutsch: 'umbringen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmebullen',
    hochdeutsch: 'umbullen (bei Rindern)'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmebündken',
    hochdeutsch: 'wechseln von Windeln'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmedenken',
    hochdeutsch: 'umdenken'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmedeon',
    hochdeutsch: 'umtun, bekehren, ändern'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmedörpen',
    hochdeutsch: 'umtaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmedraaihen',
    hochdeutsch: 'umdrehen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmedregen',
    hochdeutsch: 'umtragen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmefaalen',
    hochdeutsch: 'umfallen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmefoaten',
    hochdeutsch: 'umfassen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmefoihen',
    hochdeutsch: 'umfahren'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmefüllen',
    hochdeutsch: 'umfüllen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ümmegang',
    hochdeutsch: 'Umgang (miteinander)'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmegeiten',
    hochdeutsch: 'umgießen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmegoahn',
    hochdeutsch: 'behandeln (Umgang), umgehen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmegroaben',
    hochdeutsch: 'umgraben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ümmehang',
    hochdeutsch: 'Umhang'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmehangen',
    hochdeutsch: 'umhängen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmehenn',
    hochdeutsch: 'umhin'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmehöapen',
    hochdeutsch: 'umschichten (von Heuhaufen bei unbeständiger Witterung)'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmehöarn',
    hochdeutsch: 'umhören, erkundigen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmehocken',
    hochdeutsch: 'Getreidegarben neu zum Trocknen aufstellen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmekieken',
    hochdeutsch: 'umsehen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmekippen',
    hochdeutsch: 'umkippen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeknicken',
    hochdeutsch: 'umknicken'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmekrempeln',
    hochdeutsch: 'umkrempeln'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmekurm',
    hochdeutsch: 'umkommen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmemeten',
    hochdeutsch: 'messen (erneut vermessen)'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmepiußen',
    hochdeutsch: 'umpusten'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeploigen',
    hochdeutsch: 'umpflügen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeracken',
    hochdeutsch: 'umstoßen  (unachtsam)'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeroaken',
    hochdeutsch: 'umwerfen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeroihen',
    hochdeutsch: 'umrühren'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmesau',
    hochdeutsch: 'umso'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeschichtig (ümmeschichtich)',
    hochdeutsch: 'abwechselnd'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ümmeschlagg',
    hochdeutsch: 'Umschlag, Umsatz'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeschmieten',
    hochdeutsch: 'umwerfen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeschwenken',
    hochdeutsch: 'umschwenken'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmesetten',
    hochdeutsch: 'umsetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmesoiken',
    hochdeutsch: 'sortieren'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmesöamen',
    hochdeutsch: 'umsäumen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmespringen',
    hochdeutsch: 'umspringen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ümmestand; de Ümmestänne',
    hochdeutsch: 'Umstand'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeständlich',
    hochdeutsch: 'umständlich'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ümmestänne',
    hochdeutsch: 'Schwangerschaft'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmestiegen',
    hochdeutsch: 'umsteigen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmestülpen',
    hochdeutsch: 'umstülpen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmesüss',
    hochdeutsch: 'umsonst'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeteihn',
    hochdeutsch: 'umziehen'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmeteo',
    hochdeutsch: 'herum'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmetiusken',
    hochdeutsch: 'umtauschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ümmewegg (Ümmewech)',
    hochdeutsch: 'Umweg'
  },
  {
    artikel: '',
    plattdeutsch: 'ümmewesseln',
    hochdeutsch: 'umwechseln'
  },
  {
    artikel: '',
    plattdeutsch: 'un',
    hochdeutsch: 'und'
  },
  {
    artikel: '',
    plattdeutsch: 'unbännig (unbännich)',
    hochdeutsch: 'unbändig'
  },
  {
    artikel: '',
    plattdeutsch: 'unbehulpen',
    hochdeutsch: 'unbeholfen'
  },
  {
    artikel: '',
    plattdeutsch: 'unbesoorget',
    hochdeutsch: 'unbesorgt'
  },
  {
    artikel: '',
    plattdeutsch: 'unbestännig (unbestännich)',
    hochdeutsch: 'unbeständig'
  },
  {
    artikel: '',
    plattdeutsch: 'undankboar',
    hochdeutsch: 'undankbar'
  },
  {
    artikel: '',
    plattdeutsch: 'undütlig (undütlich)',
    hochdeutsch: 'undeutlich'
  },
  {
    artikel: '',
    plattdeutsch: 'ungedüllig (ungedüllich)',
    hochdeutsch: 'ungeduldig'
  },
  {
    artikel: '',
    plattdeutsch: 'ungefähr',
    hochdeutsch: 'ungefähr'
  },
  {
    artikel: '',
    plattdeutsch: 'ungeot',
    hochdeutsch: 'ungut'
  },
  {
    artikel: '',
    plattdeutsch: 'ungewiernt',
    hochdeutsch: 'ungewohnt'
  },
  {
    artikel: '',
    plattdeutsch: 'unglieke',
    hochdeutsch: 'ungleich'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Unglücke',
    hochdeutsch: 'Unglück'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Unkel',
    hochdeutsch: 'Onkel'
  },
  {
    artikel: '',
    plattdeutsch: 'unkleok',
    hochdeutsch: 'unklug'
  },
  {
    artikel: '',
    plattdeutsch: 'unkloar',
    hochdeutsch: 'unklar'
  },
  {
    artikel: '',
    plattdeutsch: 'unlente',
    hochdeutsch: 'unvernünftig, unverschämt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Unminske',
    hochdeutsch: 'Unmensch'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnen',
    hochdeutsch: 'unten'
  },
  {
    artikel: '',
    plattdeutsch: 'ünner',
    hochdeutsch: 'unter'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerbienen',
    hochdeutsch: 'unterbinden'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerboiten',
    hochdeutsch: 'einheizen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ünnerböxen',
    hochdeutsch: 'Unterhose'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerbreken',
    hochdeutsch: 'unterbrechen'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerdeilen',
    hochdeutsch: 'unterteilen'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerdiuken',
    hochdeutsch: 'untertauchen'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerdrücken',
    hochdeutsch: 'unterdrücken'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerdür',
    hochdeutsch: 'untendurch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ünnererdsken',
    hochdeutsch: 'Lebewesen (im Erdboden lebend)'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerfüünsk',
    hochdeutsch: 'hinterhältig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ünnergang',
    hochdeutsch: 'Untergang'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnergoahn',
    hochdeutsch: 'untergehen, sinken'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerhaulen',
    hochdeutsch: 'unterhalten'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerheer',
    hochdeutsch: 'unterher'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ünnerhiermd',
    hochdeutsch: 'Unterhemd'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ünnerkinn',
    hochdeutsch: 'Doppelkinn'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerkriupen',
    hochdeutsch: 'unterkriechen'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerkurm',
    hochdeutsch: 'unterkommen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ünnerlief',
    hochdeutsch: 'Unterleib'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ünnerloage',
    hochdeutsch: 'Unterlage, Bodenbretter vom Ackerwagen'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnernanner',
    hochdeutsch: 'untereinander'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnernierm',
    hochdeutsch: 'unternehmen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ünneroffizier',
    hochdeutsch: 'Unteroffizier'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerploigen',
    hochdeutsch: 'unterpflügen'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerrichen',
    hochdeutsch: 'unterrichten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ünnerricht',
    hochdeutsch: 'Unterricht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ünnerrock',
    hochdeutsch: 'Unterrock'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ünnersatz',
    hochdeutsch: 'Untersatz'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerschaaien',
    hochdeutsch: 'unterscheiden'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ünnerscheid',
    hochdeutsch: 'Unterscheid'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerschloan',
    hochdeutsch: 'unterschlagen'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerschrieben',
    hochdeutsch: 'unterschreiben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ünnerschrift',
    hochdeutsch: 'Unterschrift'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnersedt',
    hochdeutsch: 'untersetzt'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnersoiken',
    hochdeutsch: 'untersuchen'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerste',
    hochdeutsch: 'untere'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerstoahn',
    hochdeutsch: 'unterstehen, wagen'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerstrieken',
    hochdeutsch: 'unterstreichen'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerstüsseln',
    hochdeutsch: 'abstützen (provisorisch)'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerstützen',
    hochdeutsch: 'unterstützen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ünnertassen',
    hochdeutsch: 'Untertasse'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerteihn',
    hochdeutsch: 'unterziehen'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerteo',
    hochdeutsch: 'darunter, unterhalb'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ünnerwäske',
    hochdeutsch: 'Unterwäsche'
  },
  {
    artikel: '',
    plattdeutsch: 'ünnerweges',
    hochdeutsch: 'unterwegs'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Unneweer',
    hochdeutsch: 'Unwetter'
  },
  {
    artikel: '',
    plattdeutsch: 'unnöarig (unnöarich)',
    hochdeutsch: 'unnötig'
  },
  {
    artikel: '',
    plattdeutsch: 'unnütte',
    hochdeutsch: 'unnütz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Unoart',
    hochdeutsch: 'Unart'
  },
  {
    artikel: '',
    plattdeutsch: 'unpatt',
    hochdeutsch: 'ungerade (bei Zahlen)'
  },
  {
    artikel: '',
    plattdeutsch: 'unriep',
    hochdeutsch: 'unreif'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Unroat',
    hochdeutsch: 'Unrat'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Untiet',
    hochdeutsch: 'Unzeit (ungelegen)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Untüüg (Untüüch)',
    hochdeutsch: 'Ungeziefer'
  },
  {
    artikel: '',
    plattdeutsch: 'unvescheemt',
    hochdeutsch: 'unverschämt'
  },
  {
    artikel: '',
    plattdeutsch: 'unvestännig (unvestännich)',
    hochdeutsch: 'unverständig, bewustlos'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Unweer',
    hochdeutsch: 'Unwetter'
  },
  {
    artikel: '',
    plattdeutsch: 'up',
    hochdeutsch: 'auf'
  },
  {
    artikel: '',
    plattdeutsch: 'up iut sien',
    hochdeutsch: 'darauf aus sein'
  },
  {
    artikel: '',
    plattdeutsch: 'up sick hämmen',
    hochdeutsch: 'bedeuten'
  },
  {
    artikel: '',
    plattdeutsch: 'up Trillitt',
    hochdeutsch: 'auf Achse  (zum Vergnügen)'
  },
  {
    artikel: '',
    plattdeutsch: 'up ulle Fälle',
    hochdeutsch: 'auf jeden Fall, unbedingt'
  },
  {
    artikel: '',
    plattdeutsch: 'up un af',
    hochdeutsch: 'auf und ab'
  },
  {
    artikel: '',
    plattdeutsch: 'up un doal',
    hochdeutsch: 'auf und nieder, rauf und runter'
  },
  {
    artikel: '',
    plattdeutsch: 'upbassen',
    hochdeutsch: 'aufplatzen'
  },
  {
    artikel: '',
    plattdeutsch: 'upbeoen',
    hochdeutsch: 'aufbauen'
  },
  {
    artikel: '',
    plattdeutsch: 'upbewoahen',
    hochdeutsch: 'aufbewahren'
  },
  {
    artikel: '',
    plattdeutsch: 'upbienen',
    hochdeutsch: 'aufbinden'
  },
  {
    artikel: '',
    plattdeutsch: 'upblieben',
    hochdeutsch: 'aufbleiben'
  },
  {
    artikel: '',
    plattdeutsch: 'upboiten',
    hochdeutsch: 'verheizen, verbrennen'
  },
  {
    artikel: '',
    plattdeutsch: 'upbreken',
    hochdeutsch: 'aufbrechen'
  },
  {
    artikel: '',
    plattdeutsch: 'upbrennen',
    hochdeutsch: 'aufbrennen'
  },
  {
    artikel: '',
    plattdeutsch: 'upbringen',
    hochdeutsch: 'aufbringen'
  },
  {
    artikel: '',
    plattdeutsch: 'upbriuken',
    hochdeutsch: 'aufbrauchen'
  },
  {
    artikel: '',
    plattdeutsch: 'upbriusen',
    hochdeutsch: 'aufbrausen'
  },
  {
    artikel: '',
    plattdeutsch: 'upbühen',
    hochdeutsch: 'aufheben'
  },
  {
    artikel: '',
    plattdeutsch: 'updaaien',
    hochdeutsch: 'auftauen'
  },
  {
    artikel: '',
    plattdeutsch: 'updeilen',
    hochdeutsch: 'aufteilen'
  },
  {
    artikel: '',
    plattdeutsch: 'updeon',
    hochdeutsch: 'auftun (auf den Teller laden)'
  },
  {
    artikel: '',
    plattdeutsch: 'updisken',
    hochdeutsch: 'auftischen'
  },
  {
    artikel: '',
    plattdeutsch: 'updiuken',
    hochdeutsch: 'auftauchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Updoat',
    hochdeutsch: 'Tauwetter'
  },
  {
    artikel: '',
    plattdeutsch: 'updönnern',
    hochdeutsch: 'aufgetakelt, herausputzen (übertrieben), aufbrezeln'
  },
  {
    artikel: '',
    plattdeutsch: 'updraaihen',
    hochdeutsch: 'aufdrehen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Updragg  (Updrach)',
    hochdeutsch: 'Auftrag'
  },
  {
    artikel: '',
    plattdeutsch: 'updrängen',
    hochdeutsch: 'aufdrängen'
  },
  {
    artikel: '',
    plattdeutsch: 'updregen',
    hochdeutsch: 'auftragen'
  },
  {
    artikel: '',
    plattdeutsch: 'updrieben',
    hochdeutsch: 'auftreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'updrülken',
    hochdeutsch: 'aufwickeln  (Haare auf Lockenwickler drehen)'
  },
  {
    artikel: '',
    plattdeutsch: 'updullen',
    hochdeutsch: 'aufquellen'
  },
  {
    artikel: '',
    plattdeutsch: 'updunsen',
    hochdeutsch: 'aufgedunsen'
  },
  {
    artikel: '',
    plattdeutsch: 'upeten',
    hochdeutsch: 'aufessen'
  },
  {
    artikel: '',
    plattdeutsch: 'uppenanner',
    hochdeutsch: 'aufeinander'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Upenthault',
    hochdeutsch: 'Aufenthalt'
  },
  {
    artikel: '',
    plattdeutsch: 'upfaalen',
    hochdeutsch: 'auffallen'
  },
  {
    artikel: '',
    plattdeutsch: 'upfangen',
    hochdeutsch: 'auffangen'
  },
  {
    artikel: '',
    plattdeutsch: 'upfiulen',
    hochdeutsch: 'auffaulen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Upfoahrt',
    hochdeutsch: 'Auffahrt'
  },
  {
    artikel: '',
    plattdeutsch: 'upfoarten',
    hochdeutsch: 'auffassen'
  },
  {
    artikel: '',
    plattdeutsch: 'upfoihen',
    hochdeutsch: 'auffahren'
  },
  {
    artikel: '',
    plattdeutsch: 'upfoorken',
    hochdeutsch: 'Kartoffeln mit der Forke aus dem Erdboden holen'
  },
  {
    artikel: '',
    plattdeutsch: 'upförrern',
    hochdeutsch: 'auffordern'
  },
  {
    artikel: '',
    plattdeutsch: 'upfreisen',
    hochdeutsch: 'hochfrieren (sich durch Frost heben)'
  },
  {
    artikel: '',
    plattdeutsch: 'upfreten',
    hochdeutsch: 'auffressen'
  },
  {
    artikel: '',
    plattdeutsch: 'upfrisken',
    hochdeutsch: 'auffrischen'
  },
  {
    artikel: '',
    plattdeutsch: 'upfüllen',
    hochdeutsch: 'auffüllen'
  },
  {
    artikel: '',
    plattdeutsch: 'upgeiten',
    hochdeutsch: 'aufgießen'
  },
  {
    artikel: '',
    plattdeutsch: 'upgierm',
    hochdeutsch: 'aufgeben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Upgoabe',
    hochdeutsch: 'Aufgabe'
  },
  {
    artikel: '',
    plattdeutsch: 'upgoabeln',
    hochdeutsch: 'aufgabeln'
  },
  {
    artikel: '',
    plattdeutsch: 'upgoahn',
    hochdeutsch: 'aufgehen'
  },
  {
    artikel: '',
    plattdeutsch: 'uphaalsen',
    hochdeutsch: 'aufhalsen'
  },
  {
    artikel: '',
    plattdeutsch: 'uphangen',
    hochdeutsch: 'aufhängen, erhängen (Selbstmord)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Uphängsel',
    hochdeutsch: 'Schlaufe zum Aufhängen'
  },
  {
    artikel: '',
    plattdeutsch: 'uphaulen',
    hochdeutsch: 'aufhalten'
  },
  {
    artikel: '',
    plattdeutsch: 'uphegen',
    hochdeutsch: 'aufbewahren'
  },
  {
    artikel: '',
    plattdeutsch: 'uphelpen',
    hochdeutsch: 'aufhelfen'
  },
  {
    artikel: '',
    plattdeutsch: 'uphenn goahn',
    hochdeutsch: 'vergangen (Zeit), verbraucht (Zeit)'
  },
  {
    artikel: '',
    plattdeutsch: 'uphissen',
    hochdeutsch: 'aufhetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'uphiulen',
    hochdeutsch: 'aufheulen'
  },
  {
    artikel: '',
    plattdeutsch: 'uphöarn',
    hochdeutsch: 'aufhören'
  },
  {
    artikel: '',
    plattdeutsch: 'uphörpen, uphüpen',
    hochdeutsch: 'aufhäufen'
  },
  {
    artikel: '',
    plattdeutsch: 'upjoagen',
    hochdeutsch: 'aufjagen'
  },
  {
    artikel: '',
    plattdeutsch: 'upklaaien',
    hochdeutsch: 'herausbuddeln von Kartoffeln'
  },
  {
    artikel: '',
    plattdeutsch: 'upklärn',
    hochdeutsch: 'aufklären'
  },
  {
    artikel: '',
    plattdeutsch: 'upkloarn',
    hochdeutsch: 'aufklaren'
  },
  {
    artikel: '',
    plattdeutsch: 'upknörpen',
    hochdeutsch: 'aufknöpfen'
  },
  {
    artikel: '',
    plattdeutsch: 'upknüppen',
    hochdeutsch: 'aufknoten'
  },
  {
    artikel: '',
    plattdeutsch: 'upkoken',
    hochdeutsch: 'aufkochen'
  },
  {
    artikel: '',
    plattdeutsch: 'upkrempeln',
    hochdeutsch: 'aufkrempeln'
  },
  {
    artikel: '',
    plattdeutsch: 'upkriegen',
    hochdeutsch: 'aufkriegen, aufnehmen, öffnen, aufessen'
  },
  {
    artikel: '',
    plattdeutsch: 'upkurm',
    hochdeutsch: 'aufkommen, entstehen, haften, bürgen'
  },
  {
    artikel: '',
    plattdeutsch: 'uplaupen',
    hochdeutsch: 'auflaufen, aufgehen (Saat)'
  },
  {
    artikel: '',
    plattdeutsch: 'upleggen',
    hochdeutsch: 'auflegen'
  },
  {
    artikel: '',
    plattdeutsch: 'upliuern',
    hochdeutsch: 'auflauern'
  },
  {
    artikel: '',
    plattdeutsch: 'uploaen',
    hochdeutsch: 'aufladen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Uploage',
    hochdeutsch: 'Auflage'
  },
  {
    artikel: '',
    plattdeutsch: 'uploaten',
    hochdeutsch: 'auflassen'
  },
  {
    artikel: '',
    plattdeutsch: 'upmeten',
    hochdeutsch: 'aufmessen'
  },
  {
    artikel: '',
    plattdeutsch: 'upmoaken',
    hochdeutsch: 'aufmachen'
  },
  {
    artikel: '',
    plattdeutsch: 'upmucken',
    hochdeutsch: 'aufmucken'
  },
  {
    artikel: '',
    plattdeutsch: 'upmutken',
    hochdeutsch: 'aufmöbeln'
  },
  {
    artikel: '',
    plattdeutsch: 'upnegeln',
    hochdeutsch: 'aufnageln'
  },
  {
    artikel: '',
    plattdeutsch: 'upnierm',
    hochdeutsch: 'aufnehmen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Upniermer',
    hochdeutsch: 'Aufnehmer'
  },
  {
    artikel: '',
    plattdeutsch: 'uppassen',
    hochdeutsch: 'aufpassen'
  },
  {
    artikel: '',
    plattdeutsch: 'uppe',
    hochdeutsch: 'auf, auf der, auf die'
  },
  {
    artikel: '',
    plattdeutsch: 'uppe sien',
    hochdeutsch: 'auf sein'
  },
  {
    artikel: '',
    plattdeutsch: 'uppeblieben',
    hochdeutsch: 'aufbleiben'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Uppehandpeerd',
    hochdeutsch: 'Pferd (links im Gespann)'
  },
  {
    artikel: '',
    plattdeutsch: 'uppen',
    hochdeutsch: 'auf dem, auf den'
  },
  {
    artikel: '',
    plattdeutsch: 'uppiußen',
    hochdeutsch: 'aufpusten'
  },
  {
    artikel: '',
    plattdeutsch: 'uppliustern',
    hochdeutsch: 'aufplustern'
  },
  {
    artikel: '',
    plattdeutsch: 'uppumpen',
    hochdeutsch: 'aufpumpen'
  },
  {
    artikel: '',
    plattdeutsch: 'upquellen',
    hochdeutsch: 'aufquellen'
  },
  {
    artikel: '',
    plattdeutsch: 'upraffen',
    hochdeutsch: 'aufraffen'
  },
  {
    artikel: '',
    plattdeutsch: 'upregen',
    hochdeutsch: 'aufregen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Upregunge',
    hochdeutsch: 'Aufregung'
  },
  {
    artikel: '',
    plattdeutsch: 'upribbeln',
    hochdeutsch: 'auflösen  (von Gestricktem und Gehäkeltem)'
  },
  {
    artikel: '',
    plattdeutsch: 'uprieten',
    hochdeutsch: 'aufreißen, verschleißen (Kleidung)'
  },
  {
    artikel: '',
    plattdeutsch: 'uprisken',
    hochdeutsch: 'aufrichten'
  },
  {
    artikel: '',
    plattdeutsch: 'uprücken',
    hochdeutsch: 'aufrücken'
  },
  {
    artikel: '',
    plattdeutsch: 'uprümen',
    hochdeutsch: 'aufräumen'
  },
  {
    artikel: '',
    plattdeutsch: 'uprüsten',
    hochdeutsch: 'aufrüsten'
  },
  {
    artikel: '',
    plattdeutsch: 'upsäggen',
    hochdeutsch: 'aufsagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Upsatz',
    hochdeutsch: 'Aufsatz'
  },
  {
    artikel: '',
    plattdeutsch: 'upschiuben',
    hochdeutsch: 'aufschieben'
  },
  {
    artikel: '',
    plattdeutsch: 'upschliuten',
    hochdeutsch: 'aufschließen'
  },
  {
    artikel: '',
    plattdeutsch: 'upschloan',
    hochdeutsch: 'aufschlagen, aufladen (Mist)'
  },
  {
    artikel: '',
    plattdeutsch: 'upschmierten',
    hochdeutsch: 'aufgeschmissen'
  },
  {
    artikel: '',
    plattdeutsch: 'upschmieten',
    hochdeutsch: 'aufwerfen'
  },
  {
    artikel: '',
    plattdeutsch: 'upschrieben',
    hochdeutsch: 'aufschreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'upschüchtern',
    hochdeutsch: 'aufscheuchen'
  },
  {
    artikel: '',
    plattdeutsch: 'upschütten',
    hochdeutsch: 'aufschütteln'
  },
  {
    artikel: '',
    plattdeutsch: 'upsiugen',
    hochdeutsch: 'aufsaugen'
  },
  {
    artikel: '',
    plattdeutsch: 'upsoiken',
    hochdeutsch: 'aufsuchen'
  },
  {
    artikel: '',
    plattdeutsch: 'upsperrn',
    hochdeutsch: 'aufsperren'
  },
  {
    artikel: '',
    plattdeutsch: 'upsteken',
    hochdeutsch: 'aufstechen'
  },
  {
    artikel: '',
    plattdeutsch: 'upstellen',
    hochdeutsch: 'aufstellen'
  },
  {
    artikel: '',
    plattdeutsch: 'upsteoen',
    hochdeutsch: 'aufstauen'
  },
  {
    artikel: '',
    plattdeutsch: 'upstoahn',
    hochdeutsch: 'aufstehen'
  },
  {
    artikel: '',
    plattdeutsch: 'upstoapeln',
    hochdeutsch: 'aufstapeln'
  },
  {
    artikel: '',
    plattdeutsch: 'upstokeln',
    hochdeutsch: 'aufstacheln, aufhetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'upstörten',
    hochdeutsch: 'aufstoßen'
  },
  {
    artikel: '',
    plattdeutsch: 'upstund (upstunds)',
    hochdeutsch: 'zurzeit, jetzt, heutzutage'
  },
  {
    artikel: '',
    plattdeutsch: 'upt (up dat)',
    hochdeutsch: 'auf das'
  },
  {
    artikel: '',
    plattdeutsch: 'upteihn',
    hochdeutsch: 'aufziehen'
  },
  {
    artikel: '',
    plattdeutsch: 'uptellen',
    hochdeutsch: 'aufzählen'
  },
  {
    artikel: '',
    plattdeutsch: 'uptiergen',
    hochdeutsch: 'dagegen'
  },
  {
    artikel: '',
    plattdeutsch: 'uptoakeln',
    hochdeutsch: 'auftakeln'
  },
  {
    artikel: '',
    plattdeutsch: 'uptöamen',
    hochdeutsch: 'aufzäumen'
  },
  {
    artikel: '',
    plattdeutsch: 'uptrehen',
    hochdeutsch: 'auftreten'
  },
  {
    artikel: '',
    plattdeutsch: 'uptrumpfen',
    hochdeutsch: 'auftrumpfen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Upwand',
    hochdeutsch: 'Aufwand'
  },
  {
    artikel: '',
    plattdeutsch: 'upwännig (upwännich)',
    hochdeutsch: 'aufwändig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Upwaskelappen',
    hochdeutsch: 'Abwaschlappen'
  },
  {
    artikel: '',
    plattdeutsch: 'upwasken',
    hochdeutsch: 'abwaschen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Upwaskewoater',
    hochdeutsch: 'Abwaschwasser'
  },
  {
    artikel: '',
    plattdeutsch: 'upwassen',
    hochdeutsch: 'aufwachsen'
  },
  {
    artikel: '',
    plattdeutsch: 'upwecken',
    hochdeutsch: 'aufwecken'
  },
  {
    artikel: '',
    plattdeutsch: 'upweermen',
    hochdeutsch: 'aufwärmen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Upweermsel',
    hochdeutsch: 'Aufgewärmtes  (Essen)'
  },
  {
    artikel: '',
    plattdeutsch: 'upweiken',
    hochdeutsch: 'aufweichen'
  },
  {
    artikel: '',
    plattdeutsch: 'upwellen',
    hochdeutsch: 'blanchieren, aufwellen'
  },
  {
    artikel: '',
    plattdeutsch: 'upwiesen',
    hochdeutsch: 'aufweisen'
  },
  {
    artikel: '',
    plattdeutsch: 'upwoilen',
    hochdeutsch: 'aufwühlen'
  },
  {
    artikel: '',
    plattdeutsch: 'urault',
    hochdeutsch: 'uralt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Urbär',
    hochdeutsch: 'Eber mit je einem Hoden innen und außen'
  },
  {
    artikel: '',
    plattdeutsch: 'ürbel',
    hochdeutsch: 'übel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ürbelkert',
    hochdeutsch: 'Übelkeit'
  },
  {
    artikel: '',
    plattdeutsch: 'urboar',
    hochdeutsch: 'urbar'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Urdeil',
    hochdeutsch: 'Urteil'
  },
  {
    artikel: '',
    plattdeutsch: 'urdeilen',
    hochdeutsch: 'urteilen'
  },
  {
    artikel: '',
    plattdeutsch: 'uren',
    hochdeutsch: 'unordentlich leben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Urkel',
    hochdeutsch: 'Ferkel (zurückgeblieben)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Urksel',
    hochdeutsch: 'Abfall (feiner Abfall beim Dreschen von Holz oder Torf)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Uröllern',
    hochdeutsch: 'Ureltern'
  },
  {
    artikel: '',
    plattdeutsch: 'urseln',
    hochdeutsch: 'rieseln'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Urßel',
    hochdeutsch: 'Abfall beim Dreschen'
  },
  {
    artikel: '',
    plattdeutsch: 'us',
    hochdeutsch: 'uns'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Üßen',
    hochdeutsch: 'Kröte'
  },
  {
    artikel: '',
    plattdeutsch: 'vaaieeckig (vaaieeckich)',
    hochdeutsch: 'viereckig'
  },
  {
    artikel: '',
    plattdeutsch: 'vaaiespännig',
    hochdeutsch: 'vierspännig'
  },
  {
    artikel: '',
    plattdeutsch: 'van',
    hochdeutsch: 'von'
  },
  {
    artikel: '',
    plattdeutsch: 'van dor',
    hochdeutsch: 'von da'
  },
  {
    artikel: '',
    plattdeutsch: 'van dor an',
    hochdeutsch: 'von da an, seitdem'
  },
  {
    artikel: '',
    plattdeutsch: 'van niu an',
    hochdeutsch: 'von nun an'
  },
  {
    artikel: '',
    plattdeutsch: 'van sümms',
    hochdeutsch: 'von selbst'
  },
  {
    artikel: '',
    plattdeutsch: 'van Tiet teo Tiet',
    hochdeutsch: 'von Zeit zu Zeit'
  },
  {
    artikel: '',
    plattdeutsch: 'van wieten',
    hochdeutsch: 'von weitem'
  },
  {
    artikel: '',
    plattdeutsch: 'vanne (van de)',
    hochdeutsch: 'von der, von den'
  },
  {
    artikel: '',
    plattdeutsch: 'vannen (van den)',
    hochdeutsch: 'vom, von dem'
  },
  {
    artikel: '',
    plattdeutsch: 'vannenanner',
    hochdeutsch: 'voneinander'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Varre',
    hochdeutsch: 'Taufpate(in)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vatte',
    hochdeutsch: 'Vater'
  },
  {
    artikel: '',
    plattdeutsch: 'veännern',
    hochdeutsch: 'verändern'
  },
  {
    artikel: '',
    plattdeutsch: 'veäppeln',
    hochdeutsch: 'verulken, foppen'
  },
  {
    artikel: '',
    plattdeutsch: 'vebaaien',
    hochdeutsch: 'verbieten'
  },
  {
    artikel: '',
    plattdeutsch: 'vebaast',
    hochdeutsch: 'geschockt'
  },
  {
    artikel: '',
    plattdeutsch: 'veballern',
    hochdeutsch: 'verprassen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Veband',
    hochdeutsch: 'Verband'
  },
  {
    artikel: '',
    plattdeutsch: 'vebeergen',
    hochdeutsch: 'verbergen'
  },
  {
    artikel: '',
    plattdeutsch: 'vebeoen',
    hochdeutsch: 'verbauen'
  },
  {
    artikel: '',
    plattdeutsch: 'vebetern',
    hochdeutsch: 'verbessern'
  },
  {
    artikel: '',
    plattdeutsch: 'vebi',
    hochdeutsch: 'vorbei'
  },
  {
    artikel: '',
    plattdeutsch: 'vebienen',
    hochdeutsch: 'verbinden'
  },
  {
    artikel: '',
    plattdeutsch: 'vebierten',
    hochdeutsch: 'verbissen'
  },
  {
    artikel: '',
    plattdeutsch: 'vebiestern',
    hochdeutsch: 'verirrt, verlaufen, verrennen'
  },
  {
    artikel: '',
    plattdeutsch: 'vebieten',
    hochdeutsch: 'verbeißen (Wildverbiss)'
  },
  {
    artikel: '',
    plattdeutsch: 'vebikurm',
    hochdeutsch: 'vorbeikommen, besuchen'
  },
  {
    artikel: '',
    plattdeutsch: 'vebiulen',
    hochdeutsch: 'verbeulen'
  },
  {
    artikel: '',
    plattdeutsch: 'veblieben',
    hochdeutsch: 'verbleiben'
  },
  {
    artikel: '',
    plattdeutsch: 'vebloaihen',
    hochdeutsch: 'verblühen'
  },
  {
    artikel: '',
    plattdeutsch: 'veblöden',
    hochdeutsch: 'verblöden'
  },
  {
    artikel: '',
    plattdeutsch: 'vebloien',
    hochdeutsch: 'verbluten'
  },
  {
    artikel: '',
    plattdeutsch: 'veböagen',
    hochdeutsch: 'verbiegen'
  },
  {
    artikel: '',
    plattdeutsch: 'veboarseln',
    hochdeutsch: 'verlegen (Dinge)'
  },
  {
    artikel: '',
    plattdeutsch: 'vebohen',
    hochdeutsch: 'verboten'
  },
  {
    artikel: '',
    plattdeutsch: 'vebohrt',
    hochdeutsch: 'verbohrt'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Vebott',
    hochdeutsch: 'Verbot'
  },
  {
    artikel: '',
    plattdeutsch: 'vebreken',
    hochdeutsch: 'verbrechen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vebreker',
    hochdeutsch: 'Verbrecher'
  },
  {
    artikel: '',
    plattdeutsch: 'vebrennen',
    hochdeutsch: 'verbrennen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vebriuk',
    hochdeutsch: 'Verbrauch'
  },
  {
    artikel: '',
    plattdeutsch: 'vebriuken',
    hochdeutsch: 'verbrauchen'
  },
  {
    artikel: '',
    plattdeutsch: 'vebroaen',
    hochdeutsch: 'verbraten'
  },
  {
    artikel: '',
    plattdeutsch: 'vebroken',
    hochdeutsch: 'verbrochen'
  },
  {
    artikel: '',
    plattdeutsch: 'vebühen',
    hochdeutsch: 'verheben'
  },
  {
    artikel: '',
    plattdeutsch: 'vebummeln',
    hochdeutsch: 'verbummeln'
  },
  {
    artikel: '',
    plattdeutsch: 'vebürgen',
    hochdeutsch: 'verbürgen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vedacht',
    hochdeutsch: 'Verdacht'
  },
  {
    artikel: '',
    plattdeutsch: 'vedaddert',
    hochdeutsch: 'verdattert'
  },
  {
    artikel: '',
    plattdeutsch: 'vedauen',
    hochdeutsch: 'verdauen'
  },
  {
    artikel: '',
    plattdeutsch: 'vedeerben',
    hochdeutsch: 'verderben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vedeerf',
    hochdeutsch: 'Verderb, Vergänglichkeit'
  },
  {
    artikel: '',
    plattdeutsch: 'vedeilen',
    hochdeutsch: 'verteilen'
  },
  {
    artikel: '',
    plattdeutsch: 'vedeinen',
    hochdeutsch: 'verdienen'
  },
  {
    artikel: '',
    plattdeutsch: 'vedenken',
    hochdeutsch: 'verdenken, verübeln'
  },
  {
    artikel: '',
    plattdeutsch: 'vedenne',
    hochdeutsch: 'vorher, ab'
  },
  {
    artikel: '',
    plattdeutsch: 'vedeon',
    hochdeutsch: 'vertun, irren'
  },
  {
    artikel: '',
    plattdeutsch: 'vedönnern',
    hochdeutsch: 'verdonnern  (verurteilen)'
  },
  {
    artikel: '',
    plattdeutsch: 'vedösten',
    hochdeutsch: 'verdursten'
  },
  {
    artikel: '',
    plattdeutsch: 'vedraaihen',
    hochdeutsch: 'verdrehen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vedragg (Vedrach)',
    hochdeutsch: 'Vertrag'
  },
  {
    artikel: '',
    plattdeutsch: 'vedregen',
    hochdeutsch: 'vertragen'
  },
  {
    artikel: '',
    plattdeutsch: 'vedrieben',
    hochdeutsch: 'vertreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'vedrinken',
    hochdeutsch: 'ertrinken'
  },
  {
    artikel: '',
    plattdeutsch: 'vedröagen',
    hochdeutsch: 'vertrocknen'
  },
  {
    artikel: '',
    plattdeutsch: 'vedrömmeln',
    hochdeutsch: 'verschlafen, vergessen, verpassen'
  },
  {
    artikel: '',
    plattdeutsch: 'vedrücken',
    hochdeutsch: 'verdrücken'
  },
  {
    artikel: '',
    plattdeutsch: 'vedubbeln',
    hochdeutsch: 'verdoppeln'
  },
  {
    artikel: '',
    plattdeutsch: 'vedübeln',
    hochdeutsch: 'verteufeln'
  },
  {
    artikel: '',
    plattdeutsch: 'vedummdübeln',
    hochdeutsch: 'verulken  (für dumm verkaufen)'
  },
  {
    artikel: '',
    plattdeutsch: 'vedüstern',
    hochdeutsch: 'verdunkeln'
  },
  {
    artikel: '',
    plattdeutsch: 'vedütlichen',
    hochdeutsch: 'verdeutlichen'
  },
  {
    artikel: '',
    plattdeutsch: 'vedütsken',
    hochdeutsch: 'verdeutschen (energisch zurechtweisen)'
  },
  {
    artikel: '',
    plattdeutsch: 'veeerben',
    hochdeutsch: 'vererben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Veein',
    hochdeutsch: 'Verein'
  },
  {
    artikel: '',
    plattdeutsch: 'veenzeln',
    hochdeutsch: 'vereinzeln (z. B. Gemüsepflanzen)'
  },
  {
    artikel: '',
    plattdeutsch: 'vefaalen',
    hochdeutsch: 'verfallen'
  },
  {
    artikel: '',
    plattdeutsch: 'vefangen',
    hochdeutsch: 'verfangen'
  },
  {
    artikel: '',
    plattdeutsch: 'vefeoern',
    hochdeutsch: 'verfüttern'
  },
  {
    artikel: '',
    plattdeutsch: 'vefiulen',
    hochdeutsch: 'verfaulen'
  },
  {
    artikel: '',
    plattdeutsch: 'veflogen',
    hochdeutsch: 'verflogen'
  },
  {
    artikel: '',
    plattdeutsch: 'veflötken',
    hochdeutsch: 'verpfeifen'
  },
  {
    artikel: '',
    plattdeutsch: 'vefoihen',
    hochdeutsch: 'verfahren'
  },
  {
    artikel: '',
    plattdeutsch: 'vefreisen',
    hochdeutsch: 'verfrieren'
  },
  {
    artikel: '',
    plattdeutsch: 'vefreten',
    hochdeutsch: 'verfressen'
  },
  {
    artikel: '',
    plattdeutsch: 'vefrohen',
    hochdeutsch: 'verfroren, unterkühlt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vegang',
    hochdeutsch: 'Schwund, Vergänglichkeit'
  },
  {
    artikel: '',
    plattdeutsch: 'vegierbens',
    hochdeutsch: 'vergeblich'
  },
  {
    artikel: '',
    plattdeutsch: 'vegierm',
    hochdeutsch: 'vergeben'
  },
  {
    artikel: '',
    plattdeutsch: 'vegierten',
    hochdeutsch: 'vergessen'
  },
  {
    artikel: '',
    plattdeutsch: 'vegiertern',
    hochdeutsch: 'vergesslich'
  },
  {
    artikel: '',
    plattdeutsch: 'veglieken',
    hochdeutsch: 'vergleichen'
  },
  {
    artikel: '',
    plattdeutsch: 'vegnoigen',
    hochdeutsch: 'vergnügen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Vegnoigen',
    hochdeutsch: 'Vergnügen'
  },
  {
    artikel: '',
    plattdeutsch: 'vegnoiget',
    hochdeutsch: 'vergnügt'
  },
  {
    artikel: '',
    plattdeutsch: 'vegoahn',
    hochdeutsch: 'vergehen'
  },
  {
    artikel: '',
    plattdeutsch: 'vegrellen',
    hochdeutsch: 'vergrellen'
  },
  {
    artikel: '',
    plattdeutsch: 'vegrellt',
    hochdeutsch: 'vergrellt, erzürnt'
  },
  {
    artikel: '',
    plattdeutsch: 'vegriepen',
    hochdeutsch: 'vergreifen'
  },
  {
    artikel: '',
    plattdeutsch: 'vegroaben',
    hochdeutsch: 'vergraben'
  },
  {
    artikel: '',
    plattdeutsch: 'vegröttern',
    hochdeutsch: 'vergrößern'
  },
  {
    artikel: '',
    plattdeutsch: 'vegulden',
    hochdeutsch: 'vergolden'
  },
  {
    artikel: '',
    plattdeutsch: 'vehackstücken',
    hochdeutsch: 'erklären, bereden, auseinandersetzen (sich mit etwas auseinandersetzen)'
  },
  {
    artikel: '',
    plattdeutsch: 'vehaften',
    hochdeutsch: 'verhaften'
  },
  {
    artikel: '',
    plattdeutsch: 'vehanneln',
    hochdeutsch: 'verhandeln'
  },
  {
    artikel: '',
    plattdeutsch: 'vehaspeln',
    hochdeutsch: 'verhaspeln'
  },
  {
    artikel: '',
    plattdeutsch: 'vehaulen',
    hochdeutsch: 'verhalten'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Vehaulen',
    hochdeutsch: 'Verhalten'
  },
  {
    artikel: '',
    plattdeutsch: 'veheddern',
    hochdeutsch: 'verheddern'
  },
  {
    artikel: '',
    plattdeutsch: 'veheer',
    hochdeutsch: 'vorher'
  },
  {
    artikel: '',
    plattdeutsch: 'Veheerfst',
    hochdeutsch: 'im kommenden Herbst'
  },
  {
    artikel: '',
    plattdeutsch: 'vehelpen',
    hochdeutsch: 'verhelfen'
  },
  {
    artikel: '',
    plattdeutsch: 'vehinnern',
    hochdeutsch: 'verhindern'
  },
  {
    artikel: '',
    plattdeutsch: 'vehoalen',
    hochdeutsch: 'erholen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Vehöar',
    hochdeutsch: 'Verhör'
  },
  {
    artikel: '',
    plattdeutsch: 'vehöarn',
    hochdeutsch: 'verhören'
  },
  {
    artikel: '',
    plattdeutsch: 'vehungern',
    hochdeutsch: 'verhungern'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Veih',
    hochdeutsch: 'Vieh'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Veihdokter',
    hochdeutsch: 'Tierarzt'
  },
  {
    artikel: '',
    plattdeutsch: 'vekehen',
    hochdeutsch: 'verkehren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Veihkörper',
    hochdeutsch: 'Viehhändler'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Veihkürken',
    hochdeutsch: 'Viehküche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Veihlierpel',
    hochdeutsch: 'Schöpfkelle für Viehfutter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Veihmoark',
    hochdeutsch: 'Viehmarkt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Veihstaal',
    hochdeutsch: 'Viehstall'
  },
  {
    artikel: '',
    plattdeutsch: 'vejoagen',
    hochdeutsch: 'verjagen, erschrecken'
  },
  {
    artikel: '',
    plattdeutsch: 'vejöahrt',
    hochdeutsch: 'verjährt'
  },
  {
    artikel: '',
    plattdeutsch: 'vejuckeln',
    hochdeutsch: 'verprassen'
  },
  {
    artikel: '',
    plattdeutsch: 'vekährt',
    hochdeutsch: 'verkehrt, falsch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vekehr',
    hochdeutsch: 'Verkehr'
  },
  {
    artikel: '',
    plattdeutsch: 'vekieken',
    hochdeutsch: 'verlieben, vergucken, versehen (täuschen)'
  },
  {
    artikel: '',
    plattdeutsch: 'vekitten',
    hochdeutsch: 'verkitten'
  },
  {
    artikel: '',
    plattdeutsch: 'vekläen',
    hochdeutsch: 'verkleiden'
  },
  {
    artikel: '',
    plattdeutsch: 'vekloamt',
    hochdeutsch: 'erkaltet, erfroren'
  },
  {
    artikel: '',
    plattdeutsch: 'vekloien',
    hochdeutsch: 'verfärben (Gesicht)'
  },
  {
    artikel: '',
    plattdeutsch: 'vekloppen',
    hochdeutsch: 'verkloppen'
  },
  {
    artikel: '',
    plattdeutsch: 'veklüngeln',
    hochdeutsch: 'verlegen, verlieren'
  },
  {
    artikel: '',
    plattdeutsch: 'veknacken',
    hochdeutsch: 'verknacken, verknacksen'
  },
  {
    artikel: '',
    plattdeutsch: 'vekniepen',
    hochdeutsch: 'verkneifen'
  },
  {
    artikel: '',
    plattdeutsch: 'vekniusen',
    hochdeutsch: 'verknusen'
  },
  {
    artikel: '',
    plattdeutsch: 'veknüppen',
    hochdeutsch: 'verknoten, verknüpfen'
  },
  {
    artikel: '',
    plattdeutsch: 'veknüücheln',
    hochdeutsch: 'zerknittern'
  },
  {
    artikel: '',
    plattdeutsch: 'vekohlen',
    hochdeutsch: 'verkohlen'
  },
  {
    artikel: '',
    plattdeutsch: 'vekoken',
    hochdeutsch: 'verkochen'
  },
  {
    artikel: '',
    plattdeutsch: 'vekörpen',
    hochdeutsch: 'verkaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'veköstigen',
    hochdeutsch: 'verköstigen'
  },
  {
    artikel: '',
    plattdeutsch: 'vekriupen',
    hochdeutsch: 'verkriechen'
  },
  {
    artikel: '',
    plattdeutsch: 'vekrüen',
    hochdeutsch: 'verkrauten'
  },
  {
    artikel: '',
    plattdeutsch: 'veküen',
    hochdeutsch: 'versprechen'
  },
  {
    artikel: '',
    plattdeutsch: 'vekülgen',
    hochdeutsch: 'erkälten'
  },
  {
    artikel: '',
    plattdeutsch: 'vekurm',
    hochdeutsch: 'verkommen'
  },
  {
    artikel: '',
    plattdeutsch: 'veläen',
    hochdeutsch: 'verlernen'
  },
  {
    artikel: '',
    plattdeutsch: 'velangen',
    hochdeutsch: 'verlangen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Velangen',
    hochdeutsch: 'Verlangen, Sehnsucht'
  },
  {
    artikel: '',
    plattdeutsch: 'velängern',
    hochdeutsch: 'verlängern'
  },
  {
    artikel: '',
    plattdeutsch: 'velährnen',
    hochdeutsch: 'verleihen'
  },
  {
    artikel: '',
    plattdeutsch: 'velaupen',
    hochdeutsch: 'verlaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'velegen',
    hochdeutsch: 'verlegen (verschämt)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Velegenhert',
    hochdeutsch: 'Verlegenheit'
  },
  {
    artikel: '',
    plattdeutsch: 'veleggen',
    hochdeutsch: 'verlegen (Gegenstand)'
  },
  {
    artikel: '',
    plattdeutsch: 'veleisen',
    hochdeutsch: 'verlieren'
  },
  {
    artikel: '',
    plattdeutsch: 'velichte',
    hochdeutsch: 'vielleicht'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Veloat',
    hochdeutsch: 'Verlass'
  },
  {
    artikel: '',
    plattdeutsch: 'veloaten',
    hochdeutsch: 'verlassen'
  },
  {
    artikel: '',
    plattdeutsch: 'veloben',
    hochdeutsch: 'verloben'
  },
  {
    artikel: '',
    plattdeutsch: 'veloddern',
    hochdeutsch: 'verwahrlosen'
  },
  {
    artikel: '',
    plattdeutsch: 'velogen',
    hochdeutsch: 'verlogen'
  },
  {
    artikel: '',
    plattdeutsch: 'velohen',
    hochdeutsch: 'verloren'
  },
  {
    artikel: '',
    plattdeutsch: 'velopp',
    hochdeutsch: 'verläuft'
  },
  {
    artikel: '',
    plattdeutsch: 'velustern',
    hochdeutsch: 'verhören'
  },
  {
    artikel: '',
    plattdeutsch: 'velüstig  (velüstich)',
    hochdeutsch: 'verloren gehen'
  },
  {
    artikel: '',
    plattdeutsch: 'vemärhen',
    hochdeutsch: 'vermehren'
  },
  {
    artikel: '',
    plattdeutsch: 'vemasseln',
    hochdeutsch: 'vermasseln'
  },
  {
    artikel: '',
    plattdeutsch: 'vemeten',
    hochdeutsch: 'vermessen'
  },
  {
    artikel: '',
    plattdeutsch: 'vemirragg  (vemirrach)',
    hochdeutsch: 'heute Mittag'
  },
  {
    artikel: '',
    plattdeutsch: 'vemissen',
    hochdeutsch: 'vermissen'
  },
  {
    artikel: '',
    plattdeutsch: 'vemoahnen',
    hochdeutsch: 'ermahnen'
  },
  {
    artikel: '',
    plattdeutsch: 'vemoaken',
    hochdeutsch: 'vermachen, vererben'
  },
  {
    artikel: '',
    plattdeutsch: 'vemöbeln',
    hochdeutsch: 'vermöbeln, verprügeln'
  },
  {
    artikel: '',
    plattdeutsch: 'vemohen',
    hochdeutsch: 'heute Morgen'
  },
  {
    artikel: '',
    plattdeutsch: 'vemoien',
    hochdeutsch: 'ermüden'
  },
  {
    artikel: '',
    plattdeutsch: 'vemuckt',
    hochdeutsch: 'tatsächlich'
  },
  {
    artikel: '',
    plattdeutsch: 'vemuckt naumoal',
    hochdeutsch: 'verflixt nochmal'
  },
  {
    artikel: '',
    plattdeutsch: 'venaahen, venaahen hämmen, venaahen kriegen',
    hochdeutsch: 'verulken'
  },
  {
    artikel: '',
    plattdeutsch: 'venacht',
    hochdeutsch: 'heute Nacht'
  },
  {
    artikel: '',
    plattdeutsch: 'venammdagg  (venammdach)',
    hochdeutsch: 'heute Nachmittag'
  },
  {
    artikel: '',
    plattdeutsch: 'vendoage',
    hochdeutsch: 'heute'
  },
  {
    artikel: '',
    plattdeutsch: 'venient',
    hochdeutsch: 'entzündet'
  },
  {
    artikel: '',
    plattdeutsch: 'venoabend',
    hochdeutsch: 'heute Abend'
  },
  {
    artikel: '',
    plattdeutsch: 'vepassen',
    hochdeutsch: 'verpassen'
  },
  {
    artikel: '',
    plattdeutsch: 'vepissen',
    hochdeutsch: 'verpissen'
  },
  {
    artikel: '',
    plattdeutsch: 'vepiußen',
    hochdeutsch: 'verpusten'
  },
  {
    artikel: '',
    plattdeutsch: 'vepulvern',
    hochdeutsch: 'verpulvern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Veputz',
    hochdeutsch: 'Verputz'
  },
  {
    artikel: '',
    plattdeutsch: 'veputzen',
    hochdeutsch: 'verputzen'
  },
  {
    artikel: '',
    plattdeutsch: 'verecken',
    hochdeutsch: 'verrecken'
  },
  {
    artikel: '',
    plattdeutsch: 'vereengen',
    hochdeutsch: 'verregnen'
  },
  {
    artikel: '',
    plattdeutsch: 'vereken',
    hochdeutsch: 'verrechnen'
  },
  {
    artikel: '',
    plattdeutsch: 'veriut',
    hochdeutsch: 'voraus'
  },
  {
    artikel: '',
    plattdeutsch: 'veklürtern',
    hochdeutsch: 'erklären, verklickern'
  },
  {
    artikel: '',
    plattdeutsch: 'veroaen',
    hochdeutsch: 'verraten'
  },
  {
    artikel: '',
    plattdeutsch: 'veröaken',
    hochdeutsch: 'verräuchern'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Versk',
    hochdeutsch: 'Vers'
  },
  {
    artikel: '',
    plattdeutsch: 'verückt',
    hochdeutsch: 'verrückt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Verückte',
    hochdeutsch: 'Verrückter'
  },
  {
    artikel: '',
    plattdeutsch: 'verungenaaien',
    hochdeutsch: 'ruinieren'
  },
  {
    artikel: '',
    plattdeutsch: 'verupp',
    hochdeutsch: 'voraus (aufwärts)'
  },
  {
    artikel: '',
    plattdeutsch: 'verustern',
    hochdeutsch: 'verrosten'
  },
  {
    artikel: '',
    plattdeutsch: 'vesacken',
    hochdeutsch: 'versacken'
  },
  {
    artikel: '',
    plattdeutsch: 'vesammeln',
    hochdeutsch: 'versammeln'
  },
  {
    artikel: '',
    plattdeutsch: 'vescheemt',
    hochdeutsch: 'verschämt'
  },
  {
    artikel: '',
    plattdeutsch: 'veschliuken',
    hochdeutsch: 'verschlucken'
  },
  {
    artikel: '',
    plattdeutsch: 'veschloan',
    hochdeutsch: 'hinterlistig, verschlagen, leicht erwärmt (Luft)'
  },
  {
    artikel: '',
    plattdeutsch: 'veschloapen',
    hochdeutsch: 'verschlafen'
  },
  {
    artikel: '',
    plattdeutsch: 'veschlonzen',
    hochdeutsch: 'verschludern'
  },
  {
    artikel: '',
    plattdeutsch: 'veschlüen',
    hochdeutsch: 'verlegen (Gegenstand)'
  },
  {
    artikel: '',
    plattdeutsch: 'veschmachen',
    hochdeutsch: 'verschmachten'
  },
  {
    artikel: '',
    plattdeutsch: 'veschnaaien',
    hochdeutsch: 'verschneien'
  },
  {
    artikel: '',
    plattdeutsch: 'veschoalen',
    hochdeutsch: 'verschalen'
  },
  {
    artikel: '',
    plattdeutsch: 'veschwiegen',
    hochdeutsch: 'verschwiegen'
  },
  {
    artikel: '',
    plattdeutsch: 'veschwinnen  (veschwunnen)',
    hochdeutsch: 'verschwinden  (verschwunden)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Veseihn',
    hochdeutsch: 'Versehen'
  },
  {
    artikel: '',
    plattdeutsch: 'veseihn (sick veseihn)',
    hochdeutsch: 'versehen (sich versehen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vesienen',
    hochdeutsch: 'Besuch'
  },
  {
    artikel: '',
    plattdeutsch: 'vesiupen',
    hochdeutsch: 'versaufen, ertrinken'
  },
  {
    artikel: '',
    plattdeutsch: 'vesohlen',
    hochdeutsch: 'versohlen'
  },
  {
    artikel: '',
    plattdeutsch: 'vesoiken',
    hochdeutsch: 'versuchen'
  },
  {
    artikel: '',
    plattdeutsch: 'vesölten',
    hochdeutsch: 'versalzen'
  },
  {
    artikel: '',
    plattdeutsch: 'vesoorgen',
    hochdeutsch: 'versorgen'
  },
  {
    artikel: '',
    plattdeutsch: 'vesperrn',
    hochdeutsch: 'versperren'
  },
  {
    artikel: '',
    plattdeutsch: 'vespierlen',
    hochdeutsch: 'verspielen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vestand',
    hochdeutsch: 'Verstand'
  },
  {
    artikel: '',
    plattdeutsch: 'vesteerben  (vesturm)',
    hochdeutsch: 'versterben  (verstorben)'
  },
  {
    artikel: '',
    plattdeutsch: 'vesteken',
    hochdeutsch: 'verstecken'
  },
  {
    artikel: '',
    plattdeutsch: 'vestiuken',
    hochdeutsch: 'verstauchen'
  },
  {
    artikel: '',
    plattdeutsch: 'vestoahn',
    hochdeutsch: 'verstehen'
  },
  {
    artikel: '',
    plattdeutsch: 'vesülbern',
    hochdeutsch: 'versilbern (zu Geld machen)'
  },
  {
    artikel: '',
    plattdeutsch: 'vesümen',
    hochdeutsch: 'versäumen'
  },
  {
    artikel: '',
    plattdeutsch: 'vesünnigen',
    hochdeutsch: 'versündigen'
  },
  {
    artikel: '',
    plattdeutsch: 'vetellen',
    hochdeutsch: 'erzählen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Vetellsel',
    hochdeutsch: 'Erzählung, Geschichte (Erzählung)'
  },
  {
    artikel: '',
    plattdeutsch: 'veticken',
    hochdeutsch: 'essen (viel), verkaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'vetiehen',
    hochdeutsch: 'verzehren'
  },
  {
    artikel: '',
    plattdeutsch: 'vetinsen',
    hochdeutsch: 'verzinsen'
  },
  {
    artikel: '',
    plattdeutsch: 'vetiusken',
    hochdeutsch: 'vertauschen'
  },
  {
    artikel: '',
    plattdeutsch: 'vetobacken',
    hochdeutsch: 'verhauen'
  },
  {
    artikel: '',
    plattdeutsch: 'vetogen',
    hochdeutsch: 'verzogen'
  },
  {
    artikel: '',
    plattdeutsch: 'vetorrern',
    hochdeutsch: 'verlieren, verlegen'
  },
  {
    artikel: '',
    plattdeutsch: 'vetrehen',
    hochdeutsch: 'vertreten'
  },
  {
    artikel: '',
    plattdeutsch: 'vetwass',
    hochdeutsch: 'verquer, ungelegen'
  },
  {
    artikel: '',
    plattdeutsch: 'veunglücken',
    hochdeutsch: 'verunglücken'
  },
  {
    artikel: '',
    plattdeutsch: 'veürbeln',
    hochdeutsch: 'verübeln'
  },
  {
    artikel: '',
    plattdeutsch: 'veurdeilen',
    hochdeutsch: 'verurteilen'
  },
  {
    artikel: '',
    plattdeutsch: 'vewämsen',
    hochdeutsch: 'verprügeln'
  },
  {
    artikel: '',
    plattdeutsch: 'vewasken',
    hochdeutsch: 'verwaschen'
  },
  {
    artikel: '',
    plattdeutsch: 'vewassen',
    hochdeutsch: 'verwachsen'
  },
  {
    artikel: '',
    plattdeutsch: 'vewegen',
    hochdeutsch: 'verwegen'
  },
  {
    artikel: '',
    plattdeutsch: 'vewesseln',
    hochdeutsch: 'verwechseln'
  },
  {
    artikel: '',
    plattdeutsch: 'vewielen',
    hochdeutsch: 'verweilen'
  },
  {
    artikel: '',
    plattdeutsch: 'vewienen',
    hochdeutsch: 'überwinden, verschmerzen'
  },
  {
    artikel: '',
    plattdeutsch: 'vewiernen',
    hochdeutsch: 'verwöhnen'
  },
  {
    artikel: '',
    plattdeutsch: 'vewittken',
    hochdeutsch: 'verschwenden'
  },
  {
    artikel: '',
    plattdeutsch: 'vewoahen',
    hochdeutsch: 'verwahren'
  },
  {
    artikel: '',
    plattdeutsch: 'vewunnern',
    hochdeutsch: 'verwundern'
  },
  {
    artikel: '',
    plattdeutsch: 'vewünsken',
    hochdeutsch: 'verwünschen'
  },
  {
    artikel: '',
    plattdeutsch: 'vezichen',
    hochdeutsch: 'verzichten'
  },
  {
    artikel: '',
    plattdeutsch: 'vierl',
    hochdeutsch: 'viel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vigeline',
    hochdeutsch: 'Geige'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vigelinenstrieker',
    hochdeutsch: 'Geiger'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Voar',
    hochdeutsch: 'Vater'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Vörtel',
    hochdeutsch: 'Viertel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Vulk',
    hochdeutsch: 'Volk'
  },
  {
    artikel: '',
    plattdeutsch: 'vull',
    hochdeutsch: 'voll'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vullboart',
    hochdeutsch: 'Vollbart'
  },
  {
    artikel: '',
    plattdeutsch: 'vuller',
    hochdeutsch: 'voller'
  },
  {
    artikel: '',
    plattdeutsch: 'vullfreten',
    hochdeutsch: 'vollfressen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vullhert',
    hochdeutsch: 'Vollheit, Gedränge'
  },
  {
    artikel: '',
    plattdeutsch: 'vullkurm',
    hochdeutsch: 'vollkommen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vullmacht',
    hochdeutsch: 'Vollmacht'
  },
  {
    artikel: '',
    plattdeutsch: 'vullmoaken',
    hochdeutsch: 'vollmachen, füllen'
  },
  {
    artikel: '',
    plattdeutsch: 'vullproppen',
    hochdeutsch: 'vollstopfen'
  },
  {
    artikel: '',
    plattdeutsch: 'vullsabbern',
    hochdeutsch: 'vollsabbern'
  },
  {
    artikel: '',
    plattdeutsch: 'vullschieten',
    hochdeutsch: 'vollscheißen'
  },
  {
    artikel: '',
    plattdeutsch: 'vullschlabbern',
    hochdeutsch: 'vollkleckern'
  },
  {
    artikel: '',
    plattdeutsch: 'vullstännig (vullstännich)',
    hochdeutsch: 'vollständig'
  },
  {
    artikel: '',
    plattdeutsch: 'vündoage',
    hochdeutsch: 'heute'
  },
  {
    artikel: '',
    plattdeutsch: 'vür',
    hochdeutsch: 'vor'
  },
  {
    artikel: '',
    plattdeutsch: 'vüran',
    hochdeutsch: 'voran'
  },
  {
    artikel: '',
    plattdeutsch: 'vürbestellen',
    hochdeutsch: 'vorbestellen'
  },
  {
    artikel: '',
    plattdeutsch: 'vürchte',
    hochdeutsch: 'vorherige'
  },
  {
    artikel: '',
    plattdeutsch: 'vürdoal',
    hochdeutsch: 'vorher'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vurgel',
    hochdeutsch: 'Vogel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vurgelbiehen',
    hochdeutsch: 'Vogelbeeren  (Eberesche)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vurgelbiuer',
    hochdeutsch: 'Vogelkäfig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vurgelschieten',
    hochdeutsch: 'Vogelscheiße'
  },
  {
    artikel: '',
    plattdeutsch: 'vürgistern',
    hochdeutsch: 'vorgestern'
  },
  {
    artikel: '',
    plattdeutsch: 'vürheer',
    hochdeutsch: 'vorher'
  },
  {
    artikel: '',
    plattdeutsch: 'vürheerschniehen',
    hochdeutsch: 'abschneiden  (Scheiben von Wurst, Käse, Brot usw.)'
  },
  {
    artikel: '',
    plattdeutsch: 'vürkurm',
    hochdeutsch: 'vorkommen'
  },
  {
    artikel: '',
    plattdeutsch: 'vürmoaken',
    hochdeutsch: 'vormachen, Theater spielen'
  },
  {
    artikel: '',
    plattdeutsch: 'vürne',
    hochdeutsch: 'vorne'
  },
  {
    artikel: '',
    plattdeutsch: 'vürniehrm',
    hochdeutsch: 'vornehm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Vürschlagghommer (Vürschlachhommer)',
    hochdeutsch: 'Vorschlaghammer'
  },
  {
    artikel: '',
    plattdeutsch: 'vürsichtig  (vürsichtich)',
    hochdeutsch: 'vorsichtig'
  },
  {
    artikel: '',
    plattdeutsch: 'vürwärts',
    hochdeutsch: 'vorwärts'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Waaide',
    hochdeutsch: 'Weide'
  },
  {
    artikel: '',
    plattdeutsch: 'wabbelig  (wabbelich)',
    hochdeutsch: 'wabbelig'
  },
  {
    artikel: '',
    plattdeutsch: 'wach',
    hochdeutsch: 'wach'
  },
  {
    artikel: '',
    plattdeutsch: 'wach blieben',
    hochdeutsch: 'wach bleiben'
  },
  {
    artikel: '',
    plattdeutsch: 'wach sien',
    hochdeutsch: 'wach sein'
  },
  {
    artikel: '',
    plattdeutsch: 'wach wern',
    hochdeutsch: 'aufwachen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wachsdeok',
    hochdeutsch: 'Wachstuch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wächte',
    hochdeutsch: 'Waage'
  },
  {
    artikel: '',
    plattdeutsch: 'wacke',
    hochdeutsch: 'schön, gesund'
  },
  {
    artikel: '',
    plattdeutsch: 'wägen',
    hochdeutsch: 'wiegen (Kind schaukeln)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wägen',
    hochdeutsch: 'Kinderwiege für Säuglinge'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wääske',
    hochdeutsch: 'Frau (alte Tante)'
  },
  {
    artikel: '',
    plattdeutsch: 'waaien',
    hochdeutsch: 'jäten von Unkraut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Waaihemührlen',
    hochdeutsch: 'Windfege (Gerät zur Reinigung von Getreide und Saatgut)'
  },
  {
    artikel: '',
    plattdeutsch: 'waaihen',
    hochdeutsch: 'wehen'
  },
  {
    artikel: '',
    plattdeutsch: 'wall',
    hochdeutsch: 'wohl (Verwendung in Fragesätzen)'
  },
  {
    artikel: '',
    plattdeutsch: 'wall (wutt diu wall heerkurm)',
    hochdeutsch: 'wohl (Bekräftigung einer Aufforderung)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Walnott; de Walnürte',
    hochdeutsch: 'Walnuss'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Walnottsbaum',
    hochdeutsch: 'Walnussbaum'
  },
  {
    artikel: '',
    plattdeutsch: 'walten',
    hochdeutsch: 'walzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Walten',
    hochdeutsch: 'Walze'
  },
  {
    artikel: '',
    plattdeutsch: 'wältern',
    hochdeutsch: 'wälzen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wand; de Wänne',
    hochdeutsch: 'Wand'
  },
  {
    artikel: '',
    plattdeutsch: 'wanken',
    hochdeutsch: 'besuchen (gegenseitig)'
  },
  {
    artikel: '',
    plattdeutsch: 'wann',
    hochdeutsch: 'wann'
  },
  {
    artikel: '',
    plattdeutsch: 'warnen',
    hochdeutsch: 'warnen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wäske',
    hochdeutsch: 'Wäsche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Waskelappen',
    hochdeutsch: 'Waschlappen'
  },
  {
    artikel: '',
    plattdeutsch: 'wasken',
    hochdeutsch: 'waschen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Waskkürken',
    hochdeutsch: 'Waschküche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Waskmeschinen',
    hochdeutsch: 'Waschmaschine'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wasktuppen',
    hochdeutsch: 'Waschwanne aus verzinktem Blech'
  },
  {
    artikel: '',
    plattdeutsch: 'wassen',
    hochdeutsch: 'wachsen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wassenweer',
    hochdeutsch: 'Wachstumswetter'
  },
  {
    artikel: '',
    plattdeutsch: 'wat',
    hochdeutsch: 'was, etwas'
  },
  {
    artikel: '',
    plattdeutsch: 'wat up sick hämmen',
    hochdeutsch: 'bedeuten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wauld',
    hochdeutsch: 'Wald'
  },
  {
    artikel: '',
    plattdeutsch: 'wecke',
    hochdeutsch: 'welche, welcher, manche'
  },
  {
    artikel: '',
    plattdeutsch: 'wecket',
    hochdeutsch: 'welches'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Weeldoage',
    hochdeutsch: 'Tage des Übermutes'
  },
  {
    artikel: '',
    plattdeutsch: 'weelig (weelich)',
    hochdeutsch: 'übermütig'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Weer',
    hochdeutsch: 'Wetter'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Weerk',
    hochdeutsch: 'Werk'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Weerke',
    hochdeutsch: 'Stallarbeit (alltäglich)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Weerktüüg  (Werktüüch)',
    hochdeutsch: 'Werkzeug'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Weerlüchen',
    hochdeutsch: 'Wetterleuchten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Weerkstiehe',
    hochdeutsch: 'Werkstatt'
  },
  {
    artikel: '',
    plattdeutsch: 'weermen',
    hochdeutsch: 'wärmen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Weermte',
    hochdeutsch: 'Wärme'
  },
  {
    artikel: '',
    plattdeutsch: 'weert',
    hochdeutsch: 'wert'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Weert',
    hochdeutsch: 'Wert'
  },
  {
    artikel: '',
    plattdeutsch: 'wege',
    hochdeutsch: 'weg'
  },
  {
    artikel: '',
    plattdeutsch: 'wegen',
    hochdeutsch: 'wegen, wiegen'
  },
  {
    artikel: '',
    plattdeutsch: 'wegg (wech)',
    hochdeutsch: 'her, weg'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wegg; de Wege',
    hochdeutsch: 'Weg'
  },
  {
    artikel: '',
    plattdeutsch: 'weggblieben  (wechblieben)',
    hochdeutsch: 'wegbleiben'
  },
  {
    artikel: '',
    plattdeutsch: 'weggbloasen (wechbloasen)',
    hochdeutsch: 'wegblasen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggbringen (wechbringen)',
    hochdeutsch: 'wegbringen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggdeon  (wechdeon)',
    hochdeutsch: 'weggeben'
  },
  {
    artikel: '',
    plattdeutsch: 'weggdrieben (wechdrieben)',
    hochdeutsch: 'wegtreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'weggfleigen (wechfleigen)',
    hochdeutsch: 'wegfliegen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggfleiten  (wechfleiten)',
    hochdeutsch: 'wegfließen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggfoihen  (wechfoihen)',
    hochdeutsch: 'wegfahren, verreisen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggfraaien',
    hochdeutsch: 'heiraten und wegziehen'
  },
  {
    artikel: '',
    plattdeutsch: 'wegggeiten (wechgeiten)',
    hochdeutsch: 'weggießen, wegschütten'
  },
  {
    artikel: '',
    plattdeutsch: 'wegggierm (wechgierm)',
    hochdeutsch: 'weggeben'
  },
  {
    artikel: '',
    plattdeutsch: 'wegggoahn (wechgoahn)',
    hochdeutsch: 'weggehen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggjoagen (wechjoagen)',
    hochdeutsch: 'fortjagen, vertreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'weggkieken (wechkieken)',
    hochdeutsch: 'wegsehen, ignorieren'
  },
  {
    artikel: '',
    plattdeutsch: 'weggkurm (wechkurm)',
    hochdeutsch: 'abhandenkommen'
  },
  {
    artikel: '',
    plattdeutsch: 'wegglaupen  (wechlaupen)',
    hochdeutsch: 'weglaufen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggmoaken (wechmoaken)',
    hochdeutsch: 'entfernen, abtreiben'
  },
  {
    artikel: '',
    plattdeutsch: 'weggnierm (wechnierm)',
    hochdeutsch: 'wegnehmen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggpacken',
    hochdeutsch: 'wegpacken'
  },
  {
    artikel: '',
    plattdeutsch: 'weggrieten (wechrieten)',
    hochdeutsch: 'wegreißen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggscheehen',
    hochdeutsch: 'wegscheren'
  },
  {
    artikel: '',
    plattdeutsch: 'weggschicken',
    hochdeutsch: 'wegschicken, abweisen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggschiuben',
    hochdeutsch: 'wegschieben'
  },
  {
    artikel: '',
    plattdeutsch: 'weggschlieken (wechschlieken)',
    hochdeutsch: 'wegschleichen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggschlierpen (wechschlierpen)',
    hochdeutsch: 'wegschleppen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggschliuten (wechschliuten)',
    hochdeutsch: 'wegschließen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggschmieten (wechschmieten)',
    hochdeutsch: 'wegschmeißen, wegwerfen, entsorgen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggschnappen (wechschnappen)',
    hochdeutsch: 'wegschnappen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggsetten (wechsetten)',
    hochdeutsch: 'wegsetzen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggspoilen (wechspoilen)',
    hochdeutsch: 'wegspülen'
  },
  {
    artikel: '',
    plattdeutsch: 'weggsteken (wechsteken)',
    hochdeutsch: 'wegstecken'
  },
  {
    artikel: '',
    plattdeutsch: 'weggsturm (wechsturm)',
    hochdeutsch: 'verstorben'
  },
  {
    artikel: '',
    plattdeutsch: 'weggteihn (wechteihn)',
    hochdeutsch: 'wegziehen'
  },
  {
    artikel: '',
    plattdeutsch: 'weih',
    hochdeutsch: 'weh'
  },
  {
    artikel: '',
    plattdeutsch: 'weihdeon',
    hochdeutsch: 'verletzen, wehtun'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Weihdoage',
    hochdeutsch: 'Schmerzen'
  },
  {
    artikel: '',
    plattdeutsch: 'weik',
    hochdeutsch: 'weich'
  },
  {
    artikel: '',
    plattdeutsch: 'weil',
    hochdeutsch: 'weil'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Weiten',
    hochdeutsch: 'Weizen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Weitenbraut',
    hochdeutsch: 'Weizenbrot'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Weitenmehl',
    hochdeutsch: 'Weizenmehl'
  },
  {
    artikel: '',
    plattdeutsch: 'well',
    hochdeutsch: ''
  },
  {
    artikel: 'eck well                   weol          häbbe weolt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'diu wutt                   weols        häss weolt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'hei, sei, et well        weol         häff weolt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wi, gi, sei wütt         weolen     häbb weolt',
    plattdeutsch: 'will',
    hochdeutsch: ''
  },
  {
    artikel: 'ich will                     wollte          habe gewollt',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'du willst                   wolltest',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'er, sie, es will          wollte',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'wir wollen ...            wollten ...',
    plattdeutsch: '',
    hochdeutsch: ''
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wellerhult',
    hochdeutsch: 'Wellerholz (Holz für Lehmbauweise)'
  },
  {
    artikel: '',
    plattdeutsch: 'wellern',
    hochdeutsch: 'bauen in Lehmbauweise (mit Holz und Stroh)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wellerweerk',
    hochdeutsch: 'Lehmdecke und Lehmwand (mit Holz und Stroh)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Welt',
    hochdeutsch: 'Welt'
  },
  {
    artikel: '',
    plattdeutsch: 'wen',
    hochdeutsch: 'wen, wem'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wendken',
    hochdeutsch: 'Kleid (abschätzig bewertet)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wenk',
    hochdeutsch: 'Wink'
  },
  {
    artikel: '',
    plattdeutsch: 'wenken',
    hochdeutsch: 'winken'
  },
  {
    artikel: '',
    plattdeutsch: 'wenn',
    hochdeutsch: 'wenn'
  },
  {
    artikel: '',
    plattdeutsch: 'wennen',
    hochdeutsch: 'wenden, schälen (flach pflügen)'
  },
  {
    artikel: '',
    plattdeutsch: 'wer',
    hochdeutsch: 'wer'
  },
  {
    artikel: '',
    plattdeutsch: 'werd',
    hochdeutsch: 'wird, werden'
  },
  {
    artikel: '',
    plattdeutsch: 'wern',
    hochdeutsch: 'werden'
  },
  {
    artikel: '',
    plattdeutsch: 'wernig (wernich)',
    hochdeutsch: 'wenig'
  },
  {
    artikel: '',
    plattdeutsch: 'wernigstens (wernichstens)',
    hochdeutsch: 'wenigstens'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Werre',
    hochdeutsch: 'Wette'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wessel',
    hochdeutsch: 'Wechsel'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wesselgeld',
    hochdeutsch: 'Wechselgeld'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wesseljoahre',
    hochdeutsch: 'Wechseljahre'
  },
  {
    artikel: '',
    plattdeutsch: 'wesseln',
    hochdeutsch: 'wechseln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Westentasken',
    hochdeutsch: 'Westentasche'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Westfoalen',
    hochdeutsch: 'Westfalen'
  },
  {
    artikel: '',
    plattdeutsch: 'wi',
    hochdeutsch: 'wir'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wichse',
    hochdeutsch: 'Prügel, Wichse (Schuhcreme)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wichsebössen',
    hochdeutsch: 'Schuhbürste'
  },
  {
    artikel: '',
    plattdeutsch: 'wichsen',
    hochdeutsch: 'eincremen von Lederwaren,  prügeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wichsenask',
    hochdeutsch: 'Schuhcremedose'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wickel',
    hochdeutsch: 'Zigarrenrohling'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wickeldisk',
    hochdeutsch: 'Wickeltisch (zur Anfertigung von Zigarren)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wickeldisk',
    hochdeutsch: 'Wickeltisch (für Babys)'
  },
  {
    artikel: '',
    plattdeutsch: 'wickeln',
    hochdeutsch: 'wickeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wicken',
    hochdeutsch: 'Wicken (Blume, Futterpflanze)'
  },
  {
    artikel: '',
    plattdeutsch: 'wie',
    hochdeutsch: 'wie, als'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wiebertüüg (Wiebertüüch)',
    hochdeutsch: 'Frauenthemen (spezielle)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wieberschluck',
    hochdeutsch: 'Likör'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wief; de Wieber',
    hochdeutsch: 'Weib, Frau'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wiefken',
    hochdeutsch: 'weibliches Tier'
  },
  {
    artikel: '',
    plattdeutsch: 'wiehen',
    hochdeutsch: 'wehren'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiehen',
    hochdeutsch: 'Weide (Baum)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiehenbaum',
    hochdeutsch: 'Weidenbaum'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiehenbusk',
    hochdeutsch: 'Weidenbusch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wiehenhult',
    hochdeutsch: 'Weidenholz'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiehm',
    hochdeutsch: 'Aufbewahrungsort für geräucherte Wurst und Schinken (Ort unter der Dielendecke vor dem Flett für Räucherware "Westfälischer Himmel"), erhöhter Sitz für die Hühner im Hühnerstall.'
  },
  {
    artikel: '',
    plattdeutsch: 'Wiehnachen',
    hochdeutsch: 'Weihnachten'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiehnachtsbaum',
    hochdeutsch: 'Weihnachtsbaum'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiehnachtsfiehe',
    hochdeutsch: 'Weihnachtsfeier'
  },
  {
    artikel: '',
    plattdeutsch: 'wieken',
    hochdeutsch: 'weichen'
  },
  {
    artikel: '',
    plattdeutsch: 'wield',
    hochdeutsch: 'wild'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiele',
    hochdeutsch: 'Weile'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiemwupp',
    hochdeutsch: 'Maulwurf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiemwuppsfaalgen',
    hochdeutsch: 'Maulwurfsfalle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiemwuppshaupen',
    hochdeutsch: 'Maulwurfshaufen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wien',
    hochdeutsch: 'Wein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiend',
    hochdeutsch: 'Wind'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wiendaai',
    hochdeutsch: 'Windei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiendbreere',
    hochdeutsch: 'Windbretter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiendbühl',
    hochdeutsch: 'Windbeutel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiendmührlen',
    hochdeutsch: 'Windmühle'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiendriuben',
    hochdeutsch: 'Weintrauben'
  },
  {
    artikel: '',
    plattdeutsch: 'wiendscheibe',
    hochdeutsch: 'windschief'
  },
  {
    artikel: '',
    plattdeutsch: 'wiendstille',
    hochdeutsch: 'windstill'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wienglass',
    hochdeutsch: 'Weinglas'
  },
  {
    artikel: '',
    plattdeutsch: 'wienig (wienich)',
    hochdeutsch: 'windig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wienpullen',
    hochdeutsch: 'Weinflasche'
  },
  {
    artikel: '',
    plattdeutsch: 'wier',
    hochdeutsch: 'wieder'
  },
  {
    artikel: '',
    plattdeutsch: 'wierbringen',
    hochdeutsch: 'wiederbringen'
  },
  {
    artikel: '',
    plattdeutsch: 'wierfienen',
    hochdeutsch: 'wiederfinden'
  },
  {
    artikel: '',
    plattdeutsch: 'wierhämmen',
    hochdeutsch: 'wiederhaben'
  },
  {
    artikel: '',
    plattdeutsch: 'wierhoalen',
    hochdeutsch: 'wiederholen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wierhülpe',
    hochdeutsch: 'Gegenleistung'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wierken',
    hochdeutsch: 'Woche'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wierkenberre',
    hochdeutsch: 'Wochenbett'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wierkenbesuch',
    hochdeutsch: 'Wochenbesuch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wierkendagg (Wierkendach)',
    hochdeutsch: 'Wochentag'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wierkenwief',
    hochdeutsch: 'Wöchnerin'
  },
  {
    artikel: '',
    plattdeutsch: 'wierkriegen',
    hochdeutsch: 'wiederbekommen, wiederkriegen'
  },
  {
    artikel: '',
    plattdeutsch: 'wierkurm',
    hochdeutsch: 'wiederkommen'
  },
  {
    artikel: '',
    plattdeutsch: 'wierlk',
    hochdeutsch: 'welk'
  },
  {
    artikel: '',
    plattdeutsch: 'wiermeln',
    hochdeutsch: 'wimmeln'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiermelstärt',
    hochdeutsch: 'Zappelphilipp'
  },
  {
    artikel: '',
    plattdeutsch: 'wiernen',
    hochdeutsch: 'gewöhnen'
  },
  {
    artikel: '',
    plattdeutsch: 'wiersäggen',
    hochdeutsch: 'petzen, wiedersagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiersebaum',
    hochdeutsch: 'Bindebaum für Heu- und Strohwagen'
  },
  {
    artikel: '',
    plattdeutsch: 'wierseihn',
    hochdeutsch: 'wiedersehen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wierser',
    hochdeutsch: 'Weser'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wirsinn',
    hochdeutsch: 'Widersinn'
  },
  {
    artikel: '',
    plattdeutsch: 'wirsinnig  (wirsinnich)',
    hochdeutsch: 'starrsinnig, widersinnig'
  },
  {
    artikel: '',
    plattdeutsch: 'wierten',
    hochdeutsch: 'wissen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wierwoort; de Wierwööre',
    hochdeutsch: 'Widerwort'
  },
  {
    artikel: '',
    plattdeutsch: 'wiesau',
    hochdeutsch: 'wieso'
  },
  {
    artikel: '',
    plattdeutsch: 'wiese',
    hochdeutsch: 'weise'
  },
  {
    artikel: '',
    plattdeutsch: 'wiesen',
    hochdeutsch: 'weisen, zeigen'
  },
  {
    artikel: '',
    plattdeutsch: 'wiesmoaken',
    hochdeutsch: 'weismachen, erklären'
  },
  {
    artikel: '',
    plattdeutsch: 'wiet',
    hochdeutsch: 'weit'
  },
  {
    artikel: '',
    plattdeutsch: 'wieter',
    hochdeutsch: 'weiter'
  },
  {
    artikel: '',
    plattdeutsch: 'wietersäggen',
    hochdeutsch: 'weitersagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Willen',
    hochdeutsch: 'Wille(n)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Winter',
    hochdeutsch: 'Winter'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Winterdagg  (Winterdach)',
    hochdeutsch: 'Wintertag'
  },
  {
    artikel: '',
    plattdeutsch: 'winterdoages',
    hochdeutsch: 'wintertags'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wintergassen',
    hochdeutsch: 'Wintergerste'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wintersoat',
    hochdeutsch: 'Wintersaat'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wippstärt',
    hochdeutsch: 'Bachstelze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wirhoaken',
    hochdeutsch: 'Widerhaken'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wirschien',
    hochdeutsch: 'Widerschein'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wisk',
    hochdeutsch: 'Wiese'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiskdünger',
    hochdeutsch: 'Wiesendünger (Mist und Erde schichtweise aufgesetzt)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiskelappen',
    hochdeutsch: 'Putzlappen'
  },
  {
    artikel: '',
    plattdeutsch: 'wisken',
    hochdeutsch: 'wischen'
  },
  {
    artikel: '',
    plattdeutsch: 'witt',
    hochdeutsch: 'weiß'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wittbraut',
    hochdeutsch: 'Weißbrot'
  },
  {
    artikel: '',
    plattdeutsch: 'wittbunt',
    hochdeutsch: 'weißbunt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wittfrost',
    hochdeutsch: 'Rauhreif'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wittkekaalk',
    hochdeutsch: 'Weißkalk'
  },
  {
    artikel: '',
    plattdeutsch: 'wittken',
    hochdeutsch: 'weißen (Wände mit Kalk streichen)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wittkequass',
    hochdeutsch: 'Quast'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wittkopp',
    hochdeutsch: 'Blondschopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wittnaaiske',
    hochdeutsch: 'Weißnäherin'
  },
  {
    artikel: '',
    plattdeutsch: 'wittschierterig (wittschierterich)',
    hochdeutsch: 'blass'
  },
  {
    artikel: '',
    plattdeutsch: 'wittschnürterig (wittschnürterich)',
    hochdeutsch: 'blass'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wittschnüsk',
    hochdeutsch: 'Hauttyp (blass)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wittsel',
    hochdeutsch: 'Eiweiß'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wiut',
    hochdeutsch: 'Wut'
  },
  {
    artikel: '',
    plattdeutsch: 'wo',
    hochdeutsch: 'wo'
  },
  {
    artikel: '',
    plattdeutsch: 'wo foaken',
    hochdeutsch: 'wie oft'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Woaben',
    hochdeutsch: 'Honigwaben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Woagen',
    hochdeutsch: 'Wagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Woagendießen',
    hochdeutsch: 'Woagendeichsel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Woagenlucht',
    hochdeutsch: 'Wagenlampe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Woagenmoaker',
    hochdeutsch: 'Wagenmacher'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Woagenrad',
    hochdeutsch: 'Wagenrad'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Woagenschiuer',
    hochdeutsch: 'Wagenunterstand'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Woagenstell',
    hochdeutsch: 'Wagengestell (Grundgerüst)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Woagentroaen',
    hochdeutsch: 'Spuren von Speichenrädern im weichen Boden'
  },
  {
    artikel: '',
    plattdeutsch: 'woahen',
    hochdeutsch: 'lagerfähig (Obst u. Gemüse)'
  },
  {
    artikel: '',
    plattdeutsch: 'woahr',
    hochdeutsch: 'wahr'
  },
  {
    artikel: '',
    plattdeutsch: 'woahr di',
    hochdeutsch: 'pass auf, Achtung (letzte Warnung)'
  },
  {
    artikel: '',
    plattdeutsch: 'woahrhaftig (woahrhaftich)',
    hochdeutsch: 'wahrhaftig'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Woahrhert',
    hochdeutsch: 'Wahrheit'
  },
  {
    artikel: '',
    plattdeutsch: 'woahrnierm',
    hochdeutsch: 'wahrnehmen'
  },
  {
    artikel: '',
    plattdeutsch: 'woahrsäggen',
    hochdeutsch: 'wahrsagen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Woahrsägger',
    hochdeutsch: 'Wahrsager'
  },
  {
    artikel: '',
    plattdeutsch: 'woaken',
    hochdeutsch: 'wachen'
  },
  {
    artikel: '',
    plattdeutsch: 'woanners',
    hochdeutsch: 'woanders'
  },
  {
    artikel: '',
    plattdeutsch: 'woarm',
    hochdeutsch: 'warm'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Woarten',
    hochdeutsch: 'Warze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Woaterpullen',
    hochdeutsch: 'Wasserflasche'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Woater',
    hochdeutsch: 'Wasser'
  },
  {
    artikel: '',
    plattdeutsch: 'woaterstiebe',
    hochdeutsch: 'klebrig  (Wasserstreifen im Backwerk)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Woaterwoage',
    hochdeutsch: 'Wasserwaage'
  },
  {
    artikel: '',
    plattdeutsch: 'wobi',
    hochdeutsch: 'wobei'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wocken',
    hochdeutsch: 'Flachswickel  (Rohmaterial zum Spinnen)'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wockenblatt',
    hochdeutsch: 'Pappband mit Spruch und Verzierungen am Flachswickel (beim Spinnrad)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wockenstock',
    hochdeutsch: 'Stock für Flachswickel'
  },
  {
    artikel: '',
    plattdeutsch: 'wodenne',
    hochdeutsch: 'woher'
  },
  {
    artikel: '',
    plattdeutsch: 'wodür',
    hochdeutsch: 'wodurch'
  },
  {
    artikel: '',
    plattdeutsch: 'wofür',
    hochdeutsch: 'wofür'
  },
  {
    artikel: '',
    plattdeutsch: 'woheer',
    hochdeutsch: 'woher'
  },
  {
    artikel: '',
    plattdeutsch: 'wohenn',
    hochdeutsch: 'wohin'
  },
  {
    artikel: '',
    plattdeutsch: 'woilen',
    hochdeutsch: 'wühlen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Woiler',
    hochdeutsch: 'Wühler (Schwerstarbeiter)'
  },
  {
    artikel: '',
    plattdeutsch: 'woisen',
    hochdeutsch: 'essen (viel, hastig und unmanierlich)'
  },
  {
    artikel: '',
    plattdeutsch: 'woiste',
    hochdeutsch: 'grobschlächtig, wüst'
  },
  {
    artikel: '',
    plattdeutsch: 'womiehe',
    hochdeutsch: 'womit'
  },
  {
    artikel: '',
    plattdeutsch: 'wonaaie',
    hochdeutsch: 'wann'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wöörbeok',
    hochdeutsch: 'Wörterbuch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Woort; de Wööre',
    hochdeutsch: 'Wort'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wöpkenbraut',
    hochdeutsch: 'Wurstbrot (Kugel aus Schweineblut, Roggenschrot, Speckwürfel, wenig Schweinefleisch und Gewürze)'
  },
  {
    artikel: '',
    plattdeutsch: 'woran',
    hochdeutsch: 'woran'
  },
  {
    artikel: '',
    plattdeutsch: 'worober',
    hochdeutsch: 'worüber'
  },
  {
    artikel: '',
    plattdeutsch: 'worümme',
    hochdeutsch: 'warum'
  },
  {
    artikel: '',
    plattdeutsch: 'worupp',
    hochdeutsch: 'worauf'
  },
  {
    artikel: '',
    plattdeutsch: 'wössen',
    hochdeutsch: 'wursten (Fleischverarbeitung)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wost; de Wöste',
    hochdeutsch: 'Wurst'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wöstefinger',
    hochdeutsch: 'Wurstfinger'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wöstefissen',
    hochdeutsch: 'Wurstbindfaden'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wöstekiertel',
    hochdeutsch: 'Wurstkessel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wöstestock',
    hochdeutsch: 'Stock zum Wurst aufhängen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wostschieben',
    hochdeutsch: 'Wurstscheibe'
  },
  {
    artikel: '',
    plattdeutsch: 'woteo',
    hochdeutsch: 'wozu'
  },
  {
    artikel: '',
    plattdeutsch: 'Wottel',
    hochdeutsch: 'Möhre, Wurzel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wottelburg',
    hochdeutsch: 'Mensch (klein)'
  },
  {
    artikel: '',
    plattdeutsch: 'wovan',
    hochdeutsch: 'wovon'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wrist',
    hochdeutsch: 'Spann'
  },
  {
    artikel: '',
    plattdeutsch: 'wrutzen',
    hochdeutsch: 'arbeiten (schwer), wühlen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wulf',
    hochdeutsch: 'Wolf, Wundsein am Po'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wulken',
    hochdeutsch: 'Wolke'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wulkenbruch',
    hochdeutsch: 'Wolkenbruch'
  },
  {
    artikel: '',
    plattdeutsch: 'wullacken',
    hochdeutsch: 'malochen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wulldeok',
    hochdeutsch: 'Wolltuch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wulle',
    hochdeutsch: 'Wolle'
  },
  {
    artikel: '',
    plattdeutsch: 'wüllen',
    hochdeutsch: 'Gestricktes aus Wolle'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wullgoarn',
    hochdeutsch: 'Wollgarn'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wullgräss',
    hochdeutsch: 'Wollgras'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wullkleoen',
    hochdeutsch: 'Wollknäuel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wullmüse',
    hochdeutsch: 'Wollmäuse'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wullmüssen',
    hochdeutsch: 'Wollmütze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wunne',
    hochdeutsch: 'Wunde'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wunner',
    hochdeutsch: 'Wunder'
  },
  {
    artikel: '',
    plattdeutsch: 'wunnerboar',
    hochdeutsch: 'wunderbar'
  },
  {
    artikel: '',
    plattdeutsch: 'wunnerlick',
    hochdeutsch: 'wunderlich'
  },
  {
    artikel: '',
    plattdeutsch: 'wunnern',
    hochdeutsch: 'wundern'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Wunnerweerk',
    hochdeutsch: 'Wunderwerk'
  },
  {
    artikel: '',
    plattdeutsch: 'wünsken',
    hochdeutsch: 'wünschen'
  },
  {
    artikel: '',
    plattdeutsch: 'wünskensweert',
    hochdeutsch: 'wünschenswert'
  },
  {
    artikel: '',
    plattdeutsch: 'wuppen',
    hochdeutsch: 'heben (schwer)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wüppen',
    hochdeutsch: 'Wippe'
  },
  {
    artikel: '',
    plattdeutsch: 'wüppen',
    hochdeutsch: 'wippen'
  },
  {
    artikel: '',
    plattdeutsch: 'würken',
    hochdeutsch: 'weben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Würker',
    hochdeutsch: 'Weber'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Würkesteohl',
    hochdeutsch: 'Webstuhl'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Würksel',
    hochdeutsch: 'Gewebtes'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Wurm; de Würmer',
    hochdeutsch: 'Wurm'
  },
  {
    artikel: '',
    plattdeutsch: 'wurmsteeks',
    hochdeutsch: 'wurmstichig'
  },
  {
    artikel: '',
    plattdeutsch: 'wurnen',
    hochdeutsch: 'wohnen'
  },
  {
    artikel: '',
    plattdeutsch: 'wutt',
    hochdeutsch: 'willst'
  },
  {
    artikel: '',
    plattdeutsch: 'wutte (wutt diu)',
    hochdeutsch: 'willst du'
  },
  {
    artikel: '',
    plattdeutsch: 'wutte wall … (wutt diu wall …)',
    hochdeutsch: 'willst du wohl …'
  },
  {
    artikel: '',
    plattdeutsch: 'zackenaaien',
    hochdeutsch: 'rennen'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Zapp',
    hochdeutsch: 'Zuckerrübensirup, Rübenkraut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zappedeus',
    hochdeutsch: 'Kopf'
  },
  {
    artikel: '',
    plattdeutsch: 'zappen',
    hochdeutsch: 'schwatzen, bluten (heftig)'
  },
  {
    artikel: '',
    plattdeutsch: 'zappendüster',
    hochdeutsch: 'dunkel (extrem), aussichtslos'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zegaarn',
    hochdeutsch: 'Zigarre, Rüge'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zegaarndisk',
    hochdeutsch: 'Zigarrentisch'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zegaarnfebriek',
    hochdeutsch: 'Zigarrenfabrik'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Zegaarnmest',
    hochdeutsch: 'Zigarrenmesser'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zegaarnmoaker',
    hochdeutsch: 'Zigarrenmacher'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zegaarnspitzen',
    hochdeutsch: 'Zigarrenspitze'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zeitung',
    hochdeutsch: 'Zeitung'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zeitungsdreger',
    hochdeutsch: 'Zeitungsbote'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zelinner',
    hochdeutsch: 'Zylinder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zelinnerputzer',
    hochdeutsch: 'Moorkolben'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zereinen',
    hochdeutsch: 'Flieder'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zichurgen',
    hochdeutsch: 'Zichorie (Wegwarte, Pflanzenwurzel als Kaffee-Ersatz)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zichurgenkaffe',
    hochdeutsch: 'Kaffee-Ersatz (aus den Wurzeln der Zichorie)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ziepel',
    hochdeutsch: 'Zwiebel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ziergen',
    hochdeutsch: 'Ziege'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ziergenboart',
    hochdeutsch: 'Ziegenbart'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ziergenkürtel',
    hochdeutsch: 'Ziegenköttel'
  },
  {
    artikel: '',
    plattdeutsch: 'zierpken',
    hochdeutsch: 'zwitschern (von jungen Vögeln)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zierroat',
    hochdeutsch: 'Zierrat'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ziertel',
    hochdeutsch: 'Zettel'
  },
  {
    artikel: '',
    plattdeutsch: 'zinken',
    hochdeutsch: 'verzinkt'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zinkömmer',
    hochdeutsch: 'Zinkeimer'
  },
  {
    artikel: '',
    plattdeutsch: 'zisken',
    hochdeutsch: 'zischen, betrinken'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Ziskewoater',
    hochdeutsch: 'Sprudel (Limonade)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zissi',
    hochdeutsch: 'Orangenlimonade'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zitreonen',
    hochdeutsch: 'Zitrone'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Ziuken',
    hochdeutsch: 'Hund (klein)'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zoahl; de Zoahlen',
    hochdeutsch: 'Zahl'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zossen',
    hochdeutsch: 'Pferd (altes, ungepflegtes)'
  },
  {
    artikel: '',
    plattdeutsch: 'zü',
    hochdeutsch: 'so, siehe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zuckerfisk',
    hochdeutsch: 'Bonbon'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zuckerkeoken',
    hochdeutsch: 'Zuckerkuchen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zuckerroibe',
    hochdeutsch: 'Zuckerrübe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zugg (Zuch)',
    hochdeutsch: 'Antrieb (innerer), Durchzug, Eisenbahn'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zuggsaalben (Zuchsaalben)',
    hochdeutsch: 'Zugsalbe'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zuggvürgel  (Zuchvürgel)',
    hochdeutsch: 'Zugvögel'
  },
  {
    artikel: '',
    plattdeutsch: 'züpken',
    hochdeutsch: 'nippen'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zuppen',
    hochdeutsch: 'Suppe'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Zuppenfleisk',
    hochdeutsch: 'Suppenfleisch'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Zuppenheohn',
    hochdeutsch: 'Suppenhuhn'
  },
  {
    artikel: 'dat',
    plattdeutsch: 'Zuppenkriut',
    hochdeutsch: 'Suppenkraut'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zuppenlierpel',
    hochdeutsch: 'Suppenlöffel'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zuppenpott',
    hochdeutsch: 'Suppentopf'
  },
  {
    artikel: 'de',
    plattdeutsch: 'Zuppenschöttel',
    hochdeutsch: 'Suppenschüssel'
  }
]
