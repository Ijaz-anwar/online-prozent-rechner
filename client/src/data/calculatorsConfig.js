import {
  Percent,
  Calculator,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Tag,
  Receipt,
  Euro,
  Divide,
  Binary,
  Scale,
  Undo2
} from 'lucide-react';

import PercentageValueCalculator from '../components/calculator/tools/PercentageValueCalculator.jsx';
import PercentageRateCalculator from '../components/calculator/tools/PercentageRateCalculator.jsx';
import PercentageIncreaseCalculator from '../components/calculator/tools/PercentageIncreaseCalculator.jsx';
import PercentageDecreaseCalculator from '../components/calculator/tools/PercentageDecreaseCalculator.jsx';
import CalculatePercentageBackwards from '../components/calculator/tools/CalculatePercentageBackwards.jsx';
import PercentageDifferenceCalculator from '../components/calculator/tools/PercentageDifferenceCalculator.jsx';
import PercentageEuroCalculator from '../components/calculator/tools/PercentageEuroCalculator.jsx';
import FractionToPercentageCalculator from '../components/calculator/tools/FractionToPercentageCalculator.jsx';
import GrossNet19Calculator from '../components/calculator/tools/GrossNet19Calculator.jsx';
import DiscountCalculatorTool from '../components/calculator/tools/DiscountCalculatorTool.jsx';
import PercentageToDecimalCalculator from '../components/calculator/tools/PercentageToDecimalCalculator.jsx';
import RuleOfThreePercentageCalculator from '../components/calculator/tools/RuleOfThreePercentageCalculator.jsx';
import PricePercentageCalculator from '../components/calculator/tools/PricePercentageCalculator.jsx';

export const calculatorsConfig = [
  {
    id: 'percentage-value',
    name: 'Prozentwert Rechner',
    shortName: 'Prozentwert',
    slug: 'percentage-calculator',
    aliases: ['/prozentrechner', '/percentage-of-number', '/percentage-value', '/prozentwert-rechner'],
    category: 'Grundlagen',
    badge: 'Sehr beliebt',
    icon: Percent,
    description: 'Berechnen Sie den genauen Prozentwert (Wie viel sind P % vom Grundwert?) in Echtzeit mit Rechenweg.',
    seoTitle: 'Prozentwert Rechner – Prozentwert W einfach online berechnen',
    metaDescription: 'Berechnen Sie den Prozentwert W schnell und exakt: Formel W = (p ÷ 100) × G mit einfacher Schritt-für-Schritt-Anleitung und Beispielen. 100% kostenlos.',
    keywords: 'prozentwert berechnen, prozentwert rechner, prozentwert formel, prozentwert grundwert prozentsatz, w = p * g, wie viel sind prozent von wert, prozentrechnung online',
    guideTitle: 'Was ist der Prozentwert und wie berechnet man ihn?',
    guideText: 'Der Prozentwert (in der Schulmathematik und Wirtschaft oft mit dem Formelzeichen W abgekürzt) gibt den tatsächlichen, absoluten Teil eines Ganzen an. Er ist das mathematische Produkt aus dem Prozentsatz (p %) und dem Grundwert (G).\n\nOb beim Einkaufen, bei der Steuererklärung, bei Zinsabrechnungen oder im beruflichen Rechnungswesen: Immer wenn Sie wissen möchten, welcher Geldbetrag, welches Gewicht oder welche Stückzahl einem relativen Prozentsatz entspricht, berechnen Sie den Prozentwert. Unser moderner Online-Rechner liefert Ihnen neben dem exakten Ergebnis auf zwei Nachkommastellen auch den vollständigen mathematischen Rechenweg.',
    formula: 'W = (p ÷ 100) × G',
    formulaExplanation: 'W = Prozentwert (gesuchtes Ergebnis in € / Einheiten) | p = Prozentsatz (z. B. 19 % oder 25 %) | G = Grundwert (die Gesamtsumme bzw. 100 % Basis)',
    howItWorks: [
      'Wandeln Sie den Prozentsatz in eine Dezimalzahl um, indem Sie p durch 100 teilen (z. B. 20 % ÷ 100 = 0,20).',
      'Multiplizieren Sie diesen Dezimalfaktor direkt mit dem Ausgangs-Grundwert G.',
      'Das Produkt ist der gesuchte absolute Prozentwert W mit derselben Einheit wie der Grundwert.'
    ],
    sections: [
      {
        title: 'Mathematische Grundlagen & Formelherleitung',
        text: 'Das Wort "Prozent" stammt vom lateinischen "per centum" ab und bedeutet wörtlich "von Hundert" oder "je Hundertstel". Ein Prozentsatz wie 25 % ist daher nichts anderes als der Bruch 25/100 bzw. die Dezimalzahl 0,25.\n\nUm den Anteil von einer bestimmten Gesamtheit zu bestimmen, multipliziert man diese Quote mit der Gesamtheit:\n\nFormel: W = G × (p / 100)\n\nBeispiel: Möchten Sie 19 % Mehrwertsteuer auf ein 200 € Netto-Honorar berechnen, entspricht p = 19 und G = 200 €. Sie rechnen 200 € × 0,19 = 38,00 €.',
        bullets: [
          'Grundwert (G): Repräsentiert immer die 100 %-Ausgangsbasis.',
          'Prozentsatz (p %): Definiert das proportionale Verhältnis.',
          'Prozentwert (W): Der tatsächliche Wert des Anteils in Euro, Kilogramm oder Stück.'
        ],
        callout: 'Tipp: Liegt der Prozentsatz über 100 %, ist der Prozentwert größer als der Grundwert (z. B. 150 % von 80 € = 120 €).'
      },
      {
        title: 'Bedeutung im Alltag, bei Steuern und Finanzen',
        text: 'In der Praxis begegnet uns der Prozentwert fast täglich:\n\n1. Finanzen & Kredite: Ermittlung von Kreditzinsen, Renditen von Tagesgeldkonten oder Depotgebühren.\n2. Handel & Shopping: Ausrechnen des realen Rabattbetrags bei Aktionen ("20 % auf alles").\n3. Lohnbuchhaltung & Gehalt: Kalkulation von Sozialabgaben, Kirchensteuer, Urlaubsansprüchen oder Gehaltsboni.\n4. Gastronomie: Zügige Ermittlung des passenden Trinkgeldes (üblicherweise 5 % bis 10 % in Deutschland).'
      }
    ],
    table: {
      title: 'Referenztabelle: Häufige Prozentsätze und ihre Faktoren',
      headers: ['Prozentsatz (p %)', 'Bruchform', 'Dezimalfaktor', 'Prozentwert von 100 €', 'Prozentwert von 250 €'],
      rows: [
        ['5 %', '1/20', '0,05', '5,00 €', '12,50 €'],
        ['10 %', '1/10', '0,10', '10,00 €', '25,00 €'],
        ['15 %', '3/20', '0,15', '15,00 €', '37,50 €'],
        ['19 % (MwSt)', '19/100', '0,19', '19,00 €', '47,50 €'],
        ['20 %', '1/5', '0,20', '20,00 €', '50,00 €'],
        ['25 %', '1/4', '0,25', '25,00 €', '62,50 €'],
        ['50 %', '1/2', '0,50', '50,00 €', '125,00 €'],
        ['75 %', '3/4', '0,75', '75,00 €', '187,50 €']
      ]
    },
    useCases: [
      {
        title: 'Mehrwertsteuer & Rechnungen',
        description: 'Exakte Ermittlung des Umsatzsteueranteils auf Rechnungen und Quittungen für Freiberufler, Gewerbetreibende und Endverbraucher.',
        example: '19 % MwSt von 450 € Netto = 85,50 € Steuerbetrag'
      },
      {
        title: 'Rabatte im Einzelhandel & Online-Shopping',
        description: 'Sofortige Berechnung der realen Ersparnis in Euro, um Werbeversprechen bei Rabattaktionen schnell zu überprüfen.',
        example: '30 % Rabatt auf eine Markenjacke für 140 € = 42,00 € Ersparnis'
      },
      {
        title: 'Maklercourtage & Honorare',
        description: 'Berechnung prozentualer Maklergebühren oder Erfolgsprovisionen beim Immobilienkauf oder Vertrieb.',
        example: '3,57 % Käuferprovision auf 280.000 € Kaufpreis = 9.996,00 €'
      }
    ],
    mistakes: [
      {
        mistake: 'Prozentwert (W) mit Prozentsatz (p) verwechseln',
        correction: '20 % ist der Prozentsatz (die Quote). 50 € ist der Prozentwert (der konkrete Geldbetrag). Einheiten niemals vermischen.'
      },
      {
        mistake: 'Vergessen, durch 100 zu teilen',
        correction: 'Wer 20 × 250 rechnet, erhält 5.000. Sie müssen immer durch 100 teilen, also 0,20 × 250 = 50.'
      },
      {
        mistake: 'Falscher Bezugswert beim Brutto- und Nettopreis',
        correction: '19 % Mehrwertsteuer bezieht sich auf den Nettowert (100 %). Vom Bruttowert dürfen Sie nicht einfach 19 % abziehen.'
      }
    ],
    tips: [
      '10 % im Kopf: Schieben Sie das Komma des Grundwerts einfach um eine Stelle nach links (10 % von 340 € = 34 €).',
      '5 % im Kopf: Erst 10 % berechnen, dann das Ergebnis halbieren (5 % von 340 € = 17 €).',
      '1 % im Kopf: Komma um zwei Stellen nach links verschieben (1 % von 340 € = 3,40 €).',
      'Das Vertauschungsgesetz (Kommutativgesetz): 16 % von 50 ist exakt dasselbe wie 50 % von 16 = 8!'
    ],
    examples: [
      {
        title: '20 % Rabatt von 250 € Einkaufswert',
        scenario: 'Berechnen Sie 20 % von einem Rechnungsbetrag von 250 €.',
        solution: '(20 ÷ 100) × 250 € = 0,20 × 250 € = 50,00 € Prozentwert (Zahlbetrag: 200,00 €)'
      },
      {
        title: '15 % Trinkgeld auf eine 80 € Restaurantrechnung',
        scenario: 'Ermitteln Sie 15 % Trinkgeld auf eine 80 € Bewirtungsrechnung.',
        solution: '(15 ÷ 100) × 80 € = 0,15 × 80 € = 12,00 € Trinkgeld (Gesamt: 92,00 €)'
      },
      {
        title: '7 % ermäßigter Steuersatz auf 140 € Netto',
        scenario: 'Wie viel Euro Steueranteil entsprechen 7 % von 140 € für Bücher oder Lebensmittel?',
        solution: '(7 ÷ 100) × 140 € = 0,07 × 140 € = 9,80 € Steueranteil (Brutto: 149,80 €)'
      }
    ],
    faqs: [
      {
        q: 'Was ist der Unterschied zwischen Prozentwert, Prozentsatz und Grundwert?',
        a: 'Der Grundwert (G) ist das Ganze bzw. 100 %. Der Prozentsatz (p) ist die relative Quote mit dem Prozentzeichen (z. B. 20 %). Der Prozentwert (W) ist der tatsächliche absolute Anteil in Euro oder Stück (z. B. 50 €).'
      },
      {
        q: 'Wie lautet die mathematische Formel für den Prozentwert?',
        a: 'Die Formel lautet W = (p ÷ 100) × G oder kurz W = (p × G) ÷ 100.'
      },
      {
        q: 'Wie berechnet man den Prozentwert im Kopf ohne Taschenrechner?',
        a: 'Rechnen Sie zuerst 10 % aus, indem Sie das Komma um eine Stelle nach links rücken. Für 20 % verdoppeln Sie diesen Betrag, für 5 % teilen Sie ihn durch zwei, und für 15 % addieren Sie beide Beträge.'
      },
      {
        q: 'Kann der Prozentwert größer sein als der Grundwert?',
        a: 'Ja, das ist immer dann der Fall, wenn der Prozentsatz größer als 100 % ist. Beispiel: 150 % von 200 € ergibt einen Prozentwert von 300 €.'
      },
      {
        q: 'Welche Einheit hat der Prozentwert?',
        a: 'Der Prozentwert hat immer dieselbe Maßeinheit wie der Grundwert (z. B. Euro €, Kilogramm kg, Meter m oder Personen).'
      }
    ],
    component: PercentageValueCalculator
  },
  {
    id: 'percentage-rate',
    name: 'Prozentsatz Rechner',
    shortName: 'Prozentsatz',
    slug: 'prozentsatz',
    aliases: ['/percentage-rate', '/what-percentage-is-x-of-y', '/what-percent-is', '/prozentsatz-rechner'],
    category: 'Grundlagen',
    badge: 'Anteil in %',
    icon: Calculator,
    description: 'Ermitteln Sie, wie viel Prozent ein Teilwert vom gesamten Grundwert ausmacht (Wie viel % sind X von Y?).',
    seoTitle: 'Prozentsatz Rechner – Wie viel Prozent sind X von Y?',
    metaDescription: 'Wie viel % sind X von Y? Berechnen Sie den Prozentsatz p sofort online: Formel p = (W ÷ G) × 100 % mit Erklärung, Rechenweg und Beispielen.',
    keywords: 'prozentsatz berechnen, wie viel prozent sind x von y, prozentsatz rechner, anteil in prozent berechnen, p = w / g * 100, prozentrechnung formel',
    guideTitle: 'Wie viel Prozent sind X von Y? Den Prozentsatz verstehen',
    guideText: 'Der Prozentsatz (Formelzeichen p) drückt das proportionale Verhältnis eines Teilwerts (W) zum gesamten Grundwert (G) aus, normiert auf die Basis 100.\n\nEr beantwortet typische Alltagsfragen wie: Wie viel Prozent der Wähler haben für eine Partei gestimmt? Welcher prozentuale Anteil der Klausurpunkte wurde erreicht? Wie hoch ist die Sparquote meines Einkommens? Unser Rechner teilt den Teil durch das Ganze und liefert das Ergebnis sofort mit Prozentzeichen sowie detailliertem Rechenweg.',
    formula: 'p = (W ÷ G) × 100 %',
    formulaExplanation: 'p = Prozentsatz (Ergebnis in %) | W = Prozentwert (der vorhandene Teilwert) | G = Grundwert (die Gesamtsumme bzw. 100 % Basis)',
    howItWorks: [
      'Teilen Sie den Teilwert (W) durch die Gesamtheit bzw. den Grundwert (G). Sie erhalten einen Dezimalbruch.',
      'Multiplizieren Sie diesen Dezimalbruch mit 100, um die Dezimalzahl in Prozent (%) umzuwandeln.',
      'Fügen Sie das Prozentzeichen hinzu und runden Sie bei Bedarf auf 2 Nachkommastellen.'
    ],
    sections: [
      {
        title: 'Verhältnisrechnung und Prozentbegriff',
        text: 'Mathematisch gesehen ist der Prozentsatz ein standardisiertes Verhältnis. Wenn 15 von 60 Personen eine bestimmte Eigenschaft besitzen, lautet das Verhältnis 15/60 = 0,25. Durch Multiplikation mit 100 wird daraus die anschauliche Zahl 25 %.\n\nDer große Vorteil der Prozentrechnung liegt in der Vergleichbarkeit: 15 von 60 und 250 von 1.000 klingen auf den ersten Blick sehr unterschiedlich, stellen aber beide exakt denselben Prozentsatz von 25 % dar.',
        bullets: [
          'Teil durch Ganzes teilen: Immer W ÷ G rechnen.',
          'Auf 100 normieren: Mit 100 multiplizieren.',
          'Prozentzeichen setzen: Ergibt die fertige Kennzahl p %.'
        ]
      },
      {
        title: 'Wichtiger Unterschied: Prozentpunkte vs. Prozent',
        text: 'Ein häufiger Stolperstein in Politik und Wirtschaft ist die Verwechslung von Prozent und Prozentpunkten:\n\nSteigt ein Zinssatz von 2 % auf 3 %, ist er um 1 Prozentpunkt gestiegen. Relativ gesehen ist der Zinssatz jedoch um 50 % gestiegen (weil (3 − 2) ÷ 2 = 0,50 = 50 %). Achten Sie bei Analysen stets darauf, welche der beiden Kennzahlen gemeint ist.',
        callout: 'Merksatz: Absolute Differenzen zwischen zwei Prozentsätzen heißen Prozentpunkte. Relative Veränderungen heißen Prozent.'
      }
    ],
    table: {
      title: 'Typische Anteile und ihre Prozentsätze',
      headers: ['Teilwert (W)', 'Grundwert (G)', 'Rechnung', 'Dezimalzahl', 'Prozentsatz (p %)'],
      rows: [
        ['1 von 4', '4', '1 ÷ 4', '0,25', '25,00 %'],
        ['1 von 3', '3', '1 ÷ 3', '0,3333…', '33,33 %'],
        ['1 von 2', '2', '1 ÷ 2', '0,50', '50,00 %'],
        ['3 von 4', '4', '3 ÷ 4', '0,75', '75,00 %'],
        ['4 von 5', '5', '4 ÷ 5', '0,80', '80,00 %'],
        ['9 von 10', '10', '9 ÷ 10', '0,90', '90,00 %']
      ]
    },
    useCases: [
      {
        title: 'Schule, Studium & Prüfungen',
        description: 'Schnelle Umrechnung von erreichten Prüfungspunkten in Prozent zur Notenermittlung nach IHK- oder universitärem Notenschlüssel.',
        example: '42 von 50 Punkten in der Klausur = (42 ÷ 50) × 100 % = 84,00 %'
      },
      {
        title: 'Vertrieb, KPIs & Zielerreichung',
        description: 'Berechnung des Erfüllungsgrads von Vertriebszielen, Quartalsbudgets oder Produktionsmengen im Unternehmenscontrolling.',
        example: '160 von 200 geplanten Neukunden gewonnen = 80,00 % Zielerreichung'
      },
      {
        title: 'Haushaltsbudget & Sparquote',
        description: 'Ermittlung des Anteils der Warmmiete oder der monatlichen Sparrate am gesamten Nettoeinkommen.',
        example: '600 € Sparbetrag bei 2.400 € Nettoeinkommen = 25,00 % Sparquote'
      }
    ],
    mistakes: [
      {
        mistake: 'Zähler und Nenner vertauschen (G ÷ W statt W ÷ G)',
        correction: 'Der Bezugswert (das Ganze / 100 %) gehört immer in den Nenner! Wer 40 Punkte von 50 erreicht, rechnet 42 ÷ 50 = 0,84 (84 %), nicht 50 ÷ 42.'
      },
      {
        mistake: 'Division durch null versuchen',
        correction: 'Wenn der Grundwert 0 ist, ist eine Prozentberechnung mathematisch unmöglich, da die Division durch 0 undefiniert ist.'
      }
    ],
    tips: [
      'Schnellcheck: Ist der Teilwert genau die Hälfte des Grundwerts, ist das Ergebnis immer 50 %.',
      'Liegt der Teilwert über dem Grundwert, muss der Prozentsatz über 100 % betragen (z. B. 120 von 100 = 120 %).',
      'Teilbarkeit nutzen: Lässt sich der Bruch einfach kürzen (z. B. 25 von 100 = 1/4), wissen Sie sofort, dass es 25 % sind.'
    ],
    examples: [
      {
        title: '36 von 40 Prüfungsfragen richtig beantwortet',
        scenario: 'Sie haben in einer Multiple-Choice-Prüfung 36 von maximal 40 erreichbaren Punkten erzielt. Wie viel Prozent sind das?',
        solution: '(36 ÷ 40) × 100 % = 0,90 × 100 % = 90,00 % (Note: Sehr gut)'
      },
      {
        title: '45 € Ersparnis bei einem 180 € Artikel',
        scenario: 'Ein Händler gewährt Ihnen 45 € Preisnachlass auf ein Gerät mit 180 € UVP. Welchem Rabattsatz entspricht das?',
        solution: '(45 € ÷ 180 €) × 100 % = 0,25 × 100 % = 25,00 % Rabatt'
      },
      {
        title: '150 von 120 geplanten Verkäufen erreicht',
        scenario: 'Ein Vertriebsmitarbeiter erzielt im Monat 150 Abschlüsse bei einer Zielvorgabe von 120.',
        solution: '(150 ÷ 120) × 100 % = 1,25 × 100 % = 125,00 % Zielübererfüllung'
      }
    ],
    faqs: [
      {
        q: 'Wie berechnet man, wie viel Prozent eine Zahl von einer anderen ist?',
        a: 'Teilen Sie die erste Zahl (den Anteil) durch die zweite Zahl (den Grundwert) und multiplizieren Sie das Zwischenergebnis mit 100. Beispiel: 20 von 80 = (20 ÷ 80) × 100 = 25 %.'
      },
      {
        q: 'Wie lautet die Formel zur Berechnung des Prozentsatzes?',
        a: 'Die Formel lautet: p = (W ÷ G) × 100 % (wobei W der Teilwert und G der Grundwert ist).'
      },
      {
        q: 'Kann ein Prozentsatz größer als 100 % sein?',
        a: 'Ja. Wenn der Wert größer als der Ausgangswert ist, liegt der Prozentsatz über 100 %. Wenn ein Unternehmen beispielsweise 150 % des geplanten Umsatzes erzielt, hat es das Ziel um die Hälfte übertroffen.'
      },
      {
        q: 'Was ist der Unterschied zwischen Prozent und Prozentpunkten?',
        a: 'Prozentpunkte bezeichnen die einfache Differenz zweier Prozentsätze (z. B. von 10 % auf 12 % sind 2 Prozentpunkte). Prozent gibt die relative Änderung bezogen auf den Ausgangswert an (von 10 % auf 12 % ist ein relativer Anstieg um 20 %).'
      }
    ],
    component: PercentageRateCalculator
  },
  {
    id: 'percentage-increase',
    name: 'Prozentuale Steigerung Rechner',
    shortName: 'Steigerung (+%)',
    slug: 'prozentuale-zunahme',
    aliases: ['/percentage-increase', '/percentage-growth', '/prozentuale-steigerung'],
    category: 'Wachstum & Trends',
    badge: 'Zunahme (+%)',
    icon: TrendingUp,
    description: 'Berechnen Sie den prozentualen Zuwachs oder die Preiserhöhung von einem Startwert zu einem Endwert.',
    seoTitle: 'Prozentuale Steigerung Rechner – Zuwachs in % berechnen',
    metaDescription: 'Berechnen Sie die prozentuale Steigerung und Preiserhöhungen von Startwert zu Endwert: Formel ((Endwert − Startwert) ÷ Startwert) × 100 % mit Rechenweg.',
    keywords: 'prozentuale steigerung berechnen, prozentuale zunahme rechner, preissteigerung berechnen, wachstum in prozent, prozentualer zuwachs formel',
    guideTitle: 'Prozentuale Steigerung & Zuwachs richtig berechnen',
    guideText: 'Die prozentuale Steigerung (auch prozentualer Zuwachs, Wachstumsrate oder Teuerung) beziffert die relative Vergrößerung von einem Ausgangswert (Startwert) zu einem höheren Zielwert (Endwert).\n\nOb bei Gehaltsverhandlungen, jährlichen Mieterhöhungen, der Teuerung von Lebensmitteln durch Inflation oder dem Umsatzwachstum eines Startups: Die absolute Differenz (z. B. 50 € mehr) ist oft wenig aussagekräftig, solange man sie nicht ins Verhältnis zum Ausgangswert setzt. Unser Online-Rechner ermittelt die exakte Zuwachsrate in Prozent und zeigt Schritt für Schritt, wie sich der Wert entwickelt hat.',
    formula: 'Steigerung % = ((Endwert − Startwert) ÷ Startwert) × 100 %',
    formulaExplanation: 'Endwert = neuer Wert nach Steigerung | Startwert = alter Ausgangswert vor Steigerung (muss größer als 0 sein)',
    howItWorks: [
      'Subtrahieren Sie den Startwert vom Endwert: Endwert − Startwert. Die Differenz ist der absolute Zuwachs.',
      'Teilen Sie diesen absoluten Zuwachs durch den ursprünglichen Startwert (nicht durch den Endwert!).',
      'Multiplizieren Sie das Zwischenergebnis mit 100, um den Prozentwert mit Vorzeichen (+) zu erhalten.'
    ],
    sections: [
      {
        title: 'Warum man immer durch den Startwert teilen muss',
        text: 'Einer der häufigsten Denkfehler bei der Prozentrechnung besteht darin, die Differenz durch den neuen (höheren) Endwert zu teilen. Das ist mathematisch falsch:\n\nDie prozentuale Steigerung misst die Dynamik ausgehend vom Ursprungszustand. Wenn ein Produkt von 50 € auf 75 € verteuert wird, beträgt der Anstieg 25 €. Bezogen auf die ursprünglichen 50 € ist das genau die Hälfte mehr (+50 %). Würde man fälschlicherweise durch 75 € teilen, käme man auf 33,33 % – das entspräche aber einem Rabatt vom Endpreis, nicht der Steigerung des Startpreises.',
        bullets: [
          'Startwert = 100 % Bezugsbasis.',
          'Differenz (Endwert − Startwert) = absoluter Anstieg.',
          'Quotient × 100 = Zuwachsrate in %.'
        ]
      },
      {
        title: 'Verdopplung, Verdreifachung & Vervielfachung',
        text: 'Besonders bei beeindruckenden Wachstumszahlen entstehen im Alltag Missverständnisse:\n\n• Verdopplung: Steigt ein Wert von 100 auf 200, beträgt die Steigerung genau +100 % (nicht +200 %!).\n• Verdreifachung: Steigt ein Wert von 100 auf 300, beträgt der Zuwachs +200 %.\n• Verzehnfachung: Ein Wert steigt von 100 auf 1.000 – das entspricht einem Zuwachs von +900 %.',
        callout: 'Faustformel: Multiplikationsfaktor minus 1, mal 100. Für das 4-Fache: (4 − 1) × 100 = +300 % Zuwachs.'
      }
    ],
    table: {
      title: 'Steigerungstabelle: Vorher-Nachher-Vergleich im Überblick',
      headers: ['Startwert (Alt)', 'Endwert (Neu)', 'Absolute Zunahme', 'Rechenweg', 'Prozentuale Steigerung'],
      rows: [
        ['50,00 €', '60,00 €', '+10,00 €', '(10 ÷ 50) × 100', '+20,00 %'],
        ['80,00 €', '100,00 €', '+20,00 €', '(20 ÷ 80) × 100', '+25,00 %'],
        ['100,00 €', '130,00 €', '+30,00 €', '(30 ÷ 100) × 100', '+30,00 %'],
        ['200,00 €', '300,00 €', '+100,00 €', '(100 ÷ 200) × 100', '+50,00 %'],
        ['500,00 €', '1.000,00 €', '+500,00 €', '(500 ÷ 500) × 100', '+100,00 % (Verdopplung)'],
        ['1.000,00 €', '2.500,00 €', '+1.500,00 €', '(1.500 ÷ 1.000) × 100', '+150,00 %']
      ]
    },
    useCases: [
      {
        title: 'Gehaltsverhandlungen & Beförderungen',
        description: 'Exakte Ermittlung des prozentualen Gehaltssprungs, um Gehaltsforderungen im Jahresgespräch überzeugend zu argumentieren.',
        example: 'Gehaltserhöhung von 3.400 € auf 3.740 € brutto = +10,00 % Steigerung'
      },
      {
        title: 'Miet- & Nebenkostenanpassungen',
        description: 'Überprüfung von Mieterhöhungen im Rahmen der gesetzlichen Kappungsgrenze (z. B. maximal 15 % bzw. 20 % in 3 Jahren).',
        example: 'Kaltmiete steigt von 800 € auf 920 € = +15,00 % Anstieg'
      },
      {
        title: 'Umsatzwachstum & Firmen-KPIs',
        description: 'Berechnung des Year-over-Year (YoY) Wachstums oder Monat-zu-Monat Wachstums (MoM) im E-Commerce und Controlling.',
        example: 'Monatsumsatz wächst von 45.000 € auf 58.500 € = +30,00 % Wachstum'
      }
    ],
    mistakes: [
      {
        mistake: 'Durch den Endwert statt durch den Startwert teilen',
        correction: 'Teilen Sie immer durch den alten Ausgangswert. Bei 50 € zu 75 € teilt man durch 50 € (+50 %), niemals durch 75 €.'
      },
      {
        mistake: 'Verdopplung mit 200 % verwechseln',
        correction: 'Wenn sich eine Zahl verdoppelt, ist der Zuwachs genau 100 %, weil der Ausgangswert um 100 % seiner selbst gewachsen ist.'
      }
    ],
    tips: [
      'Schnellcheck im Kopf: Wenn der absolute Zuwachs genau die Hälfte des Startwerts beträgt, ist die Steigerung +50 %.',
      'Zehntel-Trick: Ist der Zuwachs ein Zehntel des Startwerts, beträgt die Erhöhung genau +10 %.',
      'Über 100 % Zuwachs: Wenn der Zuwachsbetrag größer ist als der ursprüngliche Startwert, liegt die Steigerung über +100 %.'
    ],
    examples: [
      {
        title: 'Preisanstieg von 50 € auf 75 €',
        scenario: 'Ein Produktpreis steigt im Supermarkt von 50 € auf 75 €. Wie hoch ist die Teuerung?',
        solution: '((75 € − 50 €) ÷ 50 €) × 100 % = (25 ÷ 50) × 100 % = +50,00 % Steigerung'
      },
      {
        title: 'Gehaltsanpassung von 3.200 € auf 3.520 €',
        scenario: 'Ein Angestellter erhält eine Gehaltserhöhung von 3.200 € auf 3.520 € brutto monatlich.',
        solution: '((3.520 € − 3.200 €) ÷ 3.200 €) × 100 % = (320 ÷ 3.200) × 100 % = +10,00 % Zuwachs'
      },
      {
        title: 'Webseiten-Besucher von 12.000 auf 18.000 Aufrufe',
        scenario: 'Ein Online-Blog steigert seine monatlichen Besucher von 12.000 auf 18.000 Unique Visitors.',
        solution: '((18.000 − 12.000) ÷ 12.000) × 100 % = (6.000 ÷ 12.000) × 100 % = +50,00 % Traffic-Wachstum'
      }
    ],
    faqs: [
      {
        q: 'Wie berechnet man die prozentuale Steigerung zweier Werte?',
        a: 'Ziehen Sie den alten Wert vom neuen Wert ab, teilen Sie die Differenz durch den alten Wert und multiplizieren Sie das Ergebnis mit 100. Formel: ((Neu − Alt) ÷ Alt) × 100 %.'
      },
      {
        q: 'Warum teilt man durch den Startwert und nicht durch den Endwert?',
        a: 'Weil die Veränderung relativ zum ursprünglichen Ausgangszustand vor der Steigerung gemessen wird. Der Startwert entspricht der 100 % Basis.'
      },
      {
        q: 'Was bedeutet eine Steigerung von 100 %?',
        a: 'Eine Steigerung von 100 % bedeutet, dass sich der Wert exakt verdoppelt hat (z. B. von 100 € auf 200 €).'
      },
      {
        q: 'Kann eine prozentuale Steigerung negativ sein?',
        a: 'Wenn der Endwert kleiner ist als der Startwert, liefert die Formel ein negatives Ergebnis (z. B. −15 %). Man spricht dann von einer prozentualen Abnahme oder Senkung.'
      }
    ],
    component: PercentageIncreaseCalculator
  },
  {
    id: 'percentage-decrease',
    name: 'Prozentuale Senkung Rechner',
    shortName: 'Senkung (-%)',
    slug: 'prozentuale-abnahme',
    aliases: ['/percentage-decrease', '/percentage-drop', '/prozentuale-senkung'],
    category: 'Wachstum & Trends',
    badge: 'Abnahme (-%)',
    icon: TrendingDown,
    description: 'Ermitteln Sie die prozentuale Abnahme, den Preisnachlass oder Verlust zwischen zwei Werten.',
    seoTitle: 'Prozentuale Senkung Rechner – Preissenkung & Abnahme in %',
    metaDescription: 'Prozentuale Senkung & Rabatte präzise berechnen: Formel ((Startwert − Endwert) ÷ Startwert) × 100 % mit nachvollziehbarem Rechenweg und Beispielen.',
    keywords: 'prozentuale senkung berechnen, prozentuale abnahme rechner, rückgang in prozent, verlust in prozent berechnen, preissenkung prozent',
    guideTitle: 'Prozentuale Senkung & Rückgänge präzise kalkulieren',
    guideText: 'Die prozentuale Senkung (auch prozentuale Verringerung, Abnahme oder Verlustrate) beschreibt den relativen Rückgang von einem höheren Anfangswert auf einen niedrigeren Endwert.\n\nTypische Alltagsbeispiele sind Sonderangebote und Preissenkungen im Handel, Gewichtsverluste bei einer Diät, der Rückgang von Stromverbräuchen oder Kursverluste an den Finanzmärkten. Unser Rechner berechnet den genauen prozentualen Abschlag und veranschaulicht die mathematischen Schritte.',
    formula: 'Senkung % = ((Startwert − Endwert) ÷ Startwert) × 100 %',
    formulaExplanation: 'Startwert = ursprünglicher Wert vor der Minderung | Endwert = reduzierter Wert (kleiner als Startwert)',
    howItWorks: [
      'Subtrahieren Sie den reduzierten Endwert vom ursprünglichen Startwert: Startwert − Endwert. Das ergibt den absoluten Minderungsbetrag.',
      'Teilen Sie diesen Minderungsbetrag durch den Ausgangs-Startwert.',
      'Multiplizieren Sie das Ergebnis mit 100, um den Prozentsatz der Abnahme mit Minuszeichen (−) auszuweisen.'
    ],
    sections: [
      {
        title: 'Die fundamentale Asymmetrie: Warum −50 % ein +100 % Plus erfordert',
        text: 'Eines der faszinierendsten und trügerischsten Phänomene der Finanzmathematik ist die Asymmetrie zwischen prozentualer Abnahme und Zunahme:\n\nVerliert ein Aktiendepot mit einem Startwert von 100 € genau 50 % seines Werts, verbleiben 50 €. Um nun wieder den ursprünglichen Stand von 100 € zu erreichen, reicht kein Gewinn von 50 % aus (50 € + 50 % = 75 €), sondern es wird ein satter Gewinn von +100 % benötigt!\n\nJe größer der prozentuale Verlust, desto überproportional höher muss die anschließende Steigerung ausfallen, um die Einbuße wettzumachen.',
        bullets: [
          'Ein Verlust von 20 % benötigt +25 % Aufholgewinn.',
          'Ein Verlust von 33,3 % benötigt +50 % Aufholgewinn.',
          'Ein Verlust von 50 % benötigt +100 % Aufholgewinn.',
          'Ein Verlust von 75 % benötigt +300 % Aufholgewinn.'
        ],
        callout: 'Achtung an der Börse: Aus diesem Grund ist Risikomanagement entscheidend – tiefe Kursverluste sind mathematisch extrem schwer aufzuholen.'
      },
      {
        title: 'Grenzen der prozentualen Senkung',
        text: 'Während eine prozentuale Steigerung theoretisch unendlich hoch sein kann (+1.000 % oder mehr), ist eine prozentuale Senkung bei physikalischen oder finanziellen Größen nach unten auf maximal 100 % begrenzt (sofern keine negativen Zahlen existieren). Fällt ein Preis von 100 € auf 0 €, entspricht das einem Rabatt von exakt 100 %.'
      }
    ],
    table: {
      title: 'Verlust-Tabelle: Verlustquote vs. benötigter Aufholgewinn',
      headers: ['Startwert', 'Endwert', 'Verlust in Euro', 'Prozentuale Senkung', 'Erforderlicher Ausgleichsgewinn'],
      rows: [
        ['100,00 €', '90,00 €', '10,00 €', '−10,00 %', '+11,11 %'],
        ['100,00 €', '80,00 €', '20,00 €', '−20,00 %', '+25,00 %'],
        ['100,00 €', '75,00 €', '25,00 €', '−25,00 %', '+33,33 %'],
        ['100,00 €', '60,00 €', '40,00 €', '−40,00 %', '+66,67 %'],
        ['100,00 €', '50,00 €', '50,00 €', '−50,00 %', '+100,00 % (Verdopplung)'],
        ['100,00 €', '25,00 €', '75,00 €', '−75,00 %', '+300,00 % (Vervierfachung)']
      ]
    },
    useCases: [
      {
        title: 'Rabatte & Sale im Einzelhandel',
        description: 'Ermitteln des tatsächlichen prozentualen Nachlasses bei Streichpreisen und Sonderposten.',
        example: 'Preis sinkt von 120 € UVP auf 90 € Sonderangebot = −25,00 % Rabatt'
      },
      {
        title: 'Energieeinsparung & Nachhaltigkeit',
        description: 'Messung des Erfolgs von Energiesparmaßnahmen bei Strom-, Gas- oder Benzinverbrauch.',
        example: 'Kraftstoffverbrauch sinkt von 7,5 l auf 6,0 l je 100 km = −20,00 % Einsparung'
      },
      {
        title: 'Gewichtsabnahme & Fitness',
        description: 'Verfolgung des prozentualen Körpergewichtsverlusts im Rahmen eines Diät- oder Trainingsplans.',
        example: 'Gewichtsreduktion von 85 kg auf 76,5 kg = −10,00 % Körpergewicht verloren'
      }
    ],
    mistakes: [
      {
        mistake: 'Durch den Endpreis teilen statt durch den Startpreis',
        correction: 'Wenn ein Artikel von 100 € auf 80 € herabgesetzt wird, beträgt der Rabatt 20/100 = 20 %, nicht 20/80 = 25 %.'
      },
      {
        mistake: 'Glauben, dass −50 % durch +50 % ausgeglichen wird',
        correction: '100 € minus 50 % sind 50 €. 50 € plus 50 % sind nur 75 €! Sie benötigen +100 % Steigerung zum Ausgleich.'
      }
    ],
    tips: [
      'Eine Halbierung entspricht immer einer Senkung um exakt 50 %.',
      'Eine Verringerung auf ein Viertel (z. B. von 100 auf 25) bedeutet eine Senkung um 75 %.',
      'Preissenkung um 20 % bedeutet: Der neue Preis entspricht genau 80 % des alten Preises.'
    ],
    examples: [
      {
        title: 'Preissenkung von 100 € auf 75 €',
        scenario: 'Ein Artikel wird von 100 € regulärem Preis auf 75 € herabgesetzt. Wie hoch ist der prozentuale Preisnachlass?',
        solution: '((100 € − 75 €) ÷ 100 €) × 100 % = (25 ÷ 100) × 100 % = −25,00 % Preissenkung'
      },
      {
        title: 'Verbrauchssenkung von 8,0 l auf 6,8 l',
        scenario: 'Durch eine neue Fahrweise sinkt der Kraftstoffverbrauch von 8,0 Liter auf 6,8 Liter je 100 km.',
        solution: '((8,0 − 6,8) ÷ 8,0) × 100 % = (1,2 ÷ 8,0) × 100 % = −15,00 % Spritersparnis'
      },
      {
        title: 'Umsatzeinbruch von 50.000 € auf 35.000 €',
        scenario: 'Ein saisonales Geschäft verzeichnet im Winter einen Umsatzrückgang von 50.000 € auf 35.000 €.',
        solution: '((50.000 € − 35.000 €) ÷ 50.000 €) × 100 % = (15.000 ÷ 50.000) × 100 % = −30,00 % Rückgang'
      }
    ],
    faqs: [
      {
        q: 'Wie berechnet man die prozentuale Abnahme zwischen zwei Werten?',
        a: 'Ziehen Sie den kleineren Endwert vom größeren Startwert ab, teilen Sie die Differenz durch den Startwert und multiplizieren Sie mit 100. Formel: ((Start − End) ÷ Start) × 100 %.'
      },
      {
        q: 'Was ist die maximale prozentuale Senkung?',
        a: 'Bei positiven Werten liegt das Maximum bei 100 %, wenn der Endwert auf null fällt (Totalverlust oder 100 % Rabatt).'
      },
      {
        q: 'Warum gleicht eine 50 % Senkung nicht einer 50 % Steigerung?',
        a: 'Weil sich die Prozentsätze auf unterschiedliche Bezugsgrößen beziehen. Sinkt 100 um 50 %, landet man bei 50. Steigt 50 um 50 %, erreicht man nur 75, da die neue Ausgangsbasis kleiner ist.'
      },
      {
        q: 'Gibt es einen Unterschied zwischen prozentualer Abnahme und Rabatt?',
        a: 'Mathematisch gesehen sind beide identisch. Im Handel wird die prozentuale Abnahme eines Preises schlicht als Rabattsatz oder Preisnachlass bezeichnet.'
      }
    ],
    component: PercentageDecreaseCalculator
  },
  {
    id: 'calculate-percentage-backwards',
    name: 'Prozent rückwärts rechnen',
    shortName: 'Prozent rückwärts',
    slug: 'prozent-rueckwaerts-rechnen',
    aliases: ['/calculate-percentage-backwards', '/prozent-rueckwaerts', '/reverse-percentage-calculator', '/prozent-rueckwaerts-rechner'],
    category: 'Finanzen & Praxis',
    badge: 'Rückwärts rechnen',
    icon: Undo2,
    description: 'Ermitteln Sie den ursprünglichen Ausgangswert vor Rabatten, Aufschlägen oder den 100 % Grundwert aus einem bekannten Anteil.',
    seoTitle: 'Prozent rückwärts rechnen – Grundwert vor Rabatt & MwSt ermitteln',
    metaDescription: 'Prozent rückwärts rechnen: Ursprünglichen Preis vor Rabatt, Preiserhöhung oder Mehrwertsteuer sofort ermitteln. Mit genauer Formel und Erklärung.',
    keywords: 'prozent rückwärts rechnen, ursprünglichen preis berechnen, grundwert berechnen aus prozent, preis vor rabatt berechnen, netto aus brutto rückwärts',
    guideTitle: 'Prozent rückwärts rechnen: Grundwert aus Endbetrag ermitteln',
    guideText: 'Beim Prozent-Rückwärts-Rechnen ist der reduzierte oder erhöhte Endbetrag bekannt und Sie möchten den ursprünglichen 100 % Ausgangswert (z. B. den Normalpreis vor dem Rabatt oder den Nettobetrag vor Steuern) exakt rekonstruieren.\n\nDies ist eine der kniffligsten Aufgaben der Alltagsmathematik: Wer bei einem um 20 % reduzierten Preis von 80 € einfach 20 % aufschlägt, erhält 96 € statt der korrekten 100 €! Unser Rechner wendet die mathematisch korrekte Umkehrformel an und schützt Sie vor teuren Fehlkalkulationen bei Rabatten, Steuern und Preiserhöhungen.',
    formula: 'Grundwert = Endwert ÷ (1 ± p ÷ 100)',
    formulaExplanation: 'Bei Rabatt: Endpreis ÷ (1 − Rabatt ÷ 100) | Bei Aufschlag: Endpreis ÷ (1 + Aufschlag ÷ 100)',
    howItWorks: [
      'Nach Rabatt: Ziehen Sie den Rabatt von 100 % ab und teilen Sie den gezahlten Preis durch diesen Faktor (z. B. bei 20 % Rabatt durch 0,80 teilen).',
      'Nach Erhöhung / Steuer: Addieren Sie den Prozentsatz zu 100 % und teilen Sie den Endpreis durch diesen Faktor (z. B. bei 19 % MwSt durch 1,19 teilen).',
      'Aus partiellem Anteil: Multiplizieren Sie den Teilwert mit 100 und teilen Sie durch den bekannten Prozentsatz (G = (W × 100) ÷ p).'
    ],
    sections: [
      {
        title: 'Der fundamentale Denkfehler beim Rückwärtsrechnen',
        text: 'Warum darf man nach einem Rabatt nicht einfach denselben Prozentsatz wieder aufschlagen?\n\nDer Grund liegt in der veränderten Bezugsbasis:\nWenn ein Pullover 100 € kostet und um 20 % rabattiert wird, beträgt der Nachlass 20 € (20 % von 100 € = 20 €). Der neue Preis beträgt 80 €.\n\nRechnen Sie nun auf die 80 € wieder 20 % hinzu, berechnen Sie 20 % von 80 € = 16 €! Sie landen bei 96 € und haben 4 € zu wenig errechnet. Der Rabatt bezog sich auf die ursprünglichen 100 %, der Wiederaufschlag bezöge sich jedoch auf die kleineren 80 €.',
        bullets: [
          'Falsch: Reduzierter Preis + 20 % = 80 € + 16 € = 96 €.',
          'Richtig: Reduzierter Preis ÷ (1 − 0,20) = 80 € ÷ 0,80 = 100,00 €.',
          'Goldene Regel: Vorher-Werte werden immer durch Division ermittelt, niemals durch einfache Prozentaddition!'
        ]
      },
      {
        title: 'Anwendungsfälle: Vom Einkauf bis zur Buchhaltung',
        text: 'Besonders in folgenden Situationen ist das Rückwärtsrechnen unverzichtbar:\n\n1. Schnäppchen-Check im Sale: Hat der Händler vor dem 30 % Rabatt tatsächlich einen fairen Ursprungspreis verlangt?\n2. Rechnungsprüfung: Wie hoch war der Nettopreis einer Handwerkerrechnung mit 19 % Mehrwertsteuer?\n3. Gehaltsverhandlung: Welches Grundgehalt war nötig, um nach 8 % Tariferhöhung auf den aktuellen Betrag zu kommen?'
      }
    ],
    table: {
      title: 'Umrechnungstabelle: Endpreis zu Original-Normalpreis',
      headers: ['Rabattierter Endpreis', 'Rabattsatz', 'Divisionsfaktor', 'Originalpreis vorher', 'Reale Ersparnis'],
      rows: [
        ['80,00 €', '20 % Rabatt', '÷ 0,80', '100,00 €', '20,00 €'],
        ['75,00 €', '25 % Rabatt', '÷ 0,75', '100,00 €', '25,00 €'],
        ['70,00 €', '30 % Rabatt', '÷ 0,70', '100,00 €', '30,00 €'],
        ['50,00 €', '50 % Rabatt', '÷ 0,50', '100,00 €', '50,00 €'],
        ['119,00 € (Brutto)', '19 % MwSt Aufschlag', '÷ 1,19', '100,00 € (Netto)', '19,00 € (Steuer)'],
        ['107,00 € (Brutto)', '7 % MwSt Aufschlag', '÷ 1,07', '100,00 € (Netto)', '7,00 € (Steuer)']
      ]
    },
    useCases: [
      {
        title: 'Originalpreis vor Sale ermitteln',
        description: 'Ermittlung des ursprünglichen UVP-Preises, wenn im Schaufenster nur der reduzierte Aktionspreis und der Rabattsatz angegeben sind.',
        example: 'Schuhe für 84 € bei 30 % Rabatt = 84 € ÷ 0,70 = 120,00 € Originalpreis'
      },
      {
        title: 'Nettobetrag aus Bruttosumme herausrechnen',
        description: 'Geschäftliche Buchhaltung: Den reinen Warenwert ohne Mehrwertsteuer aus einer Gesamtrechnung ermitteln.',
        example: '595 € Bruttorechnung bei 19 % MwSt = 595 € ÷ 1,19 = 500,00 € Nettobetrag'
      },
      {
        title: 'Grundwert aus absolutem Anteil errechnen',
        description: 'Wenn ein bekannter Geldbetrag einer bestimmten Teilquote entspricht, die Gesamtsumme (100 %) ermitteln.',
        example: '350 € entsprechen 25 % der Kaution = (350 € × 100) ÷ 25 = 1.400,00 € Gesamtsumme'
      }
    ],
    mistakes: [
      {
        mistake: 'Den Rabatt einfach auf den Endpreis addieren (+20 % auf 80 €)',
        correction: 'Teilen Sie den reduzierten Preis immer durch (1 − Rabatt/100). Bei 20 % Rabatt teilt man durch 0,80 (80 € ÷ 0,80 = 100 €).'
      },
      {
        mistake: '19 % von einer Bruttorechnung abziehen',
        correction: '19 % MwSt sind auf den Nettowert aufgeschlagen worden. Vom Bruttobetrag teilt man durch 1,19, anstatt 19 % zu subtrahieren.'
      }
    ],
    tips: [
      '20 % Rabatt Merkhilfe: Teilen Sie den Sonderpreis durch 0,80.',
      '25 % Rabatt Merkhilfe: Teilen Sie den Sonderpreis durch 0,75 (oder multiplizieren Sie mit 4/3).',
      '50 % Rabatt Merkhilfe: Einfach den reduzierten Preis verdoppeln (mal 2 nehmen).',
      '19 % Mehrwertsteuer Merkhilfe: Bruttobetrag immer durch 1,19 teilen.'
    ],
    examples: [
      {
        title: '75 € nach 25 % Rabatt',
        scenario: 'Ein Paar Markenschuhe kostet im Ausverkauf nach 25 % Rabatt genau 75 €. Wie hoch war der Originalpreis vor der Reduzierung?',
        solution: '75 € ÷ (1 − 0,25) = 75 € ÷ 0,75 = 100,00 € Normalpreis (Ersparnis: 25,00 €)'
      },
      {
        title: '240 € nach 20 % Preiserhöhung',
        scenario: 'Ein Jahresticket für den Nahverkehr kostet nach einer 20 % Preiserhöhung 240 €. Wie viel kostete es vor der Tarifanpassung?',
        solution: '240 € ÷ (1 + 0,20) = 240 € ÷ 1,20 = 200,00 € ursprünglicher Preis'
      },
      {
        title: '40 € entsprechen einem 20 % Anteil',
        scenario: 'Wenn eine Anzahlung von 40 € genau 20 % des Gesamtpreises entspricht, wie hoch ist der gesamte Kaufpreis?',
        solution: '(40 € × 100) ÷ 20 = 4.000 ÷ 20 = 200,00 € Gesamtsumme'
      }
    ],
    faqs: [
      {
        q: 'Warum darf man Rabatte nicht einfach wieder dazurechnen?',
        a: 'Weil sich der Rabatt auf den höheren Ursprungspreis bezog. 20 % von 100 € sind 20 €, aber 20 % von 80 € sind nur 16 €. Wer 20 % zu 80 € addiert, kommt nur auf 96 € statt 100 €.'
      },
      {
        q: 'Wie lautet die mathematische Formel für den Normalpreis vor Rabatt?',
        a: 'Die Formel lautet: Originalpreis = Rabattierter Preis ÷ (1 − Rabatt in Prozent ÷ 100).'
      },
      {
        q: 'Wie rechnet man 19 % Mehrwertsteuer rückwärts aus dem Brutto heraus?',
        a: 'Teilen Sie den Bruttobetrag durch 1,19. Das Ergebnis ist der reine Nettobetrag. Die Differenz aus Brutto minus Netto ist die Mehrwertsteuer.'
      },
      {
        q: 'Wie berechnet man den 100 % Grundwert, wenn nur ein Teil und dessen Prozentanteil bekannt sind?',
        a: 'Multiplizieren Sie den Teilwert mit 100 und teilen Sie das Ergebnis durch den Prozentsatz. Formel: Grundwert G = (Teilwert W × 100) ÷ Prozentsatz p.'
      }
    ],
    component: CalculatePercentageBackwards
  },
  {
    id: 'percentage-difference',
    name: 'Prozentuale Differenz Rechner',
    shortName: 'Prozentuale Differenz',
    slug: 'prozentuale-differenz',
    aliases: ['/percentage-difference', '/difference-calculator', '/prozentuale-differenz-rechner'],
    category: 'Statistik & Analyse',
    badge: 'Differenz (|Δ|%)',
    icon: RefreshCw,
    description: 'Vergleichen Sie zwei Werte relativ zu ihrem arithmetischen Mittelwert ohne Richtungspräferenz.',
    seoTitle: 'Prozentuale Differenz Rechner – Unterschied zweier Zahlen in %',
    metaDescription: 'Prozentuale Differenz zweier Werte richtungsunabhängig berechnen: Formel (|A − B| ÷ ((A + B) ÷ 2)) × 100 % mit Beispielen und Erläuterungen.',
    keywords: 'prozentuale differenz berechnen, unterschied in prozent rechner, abweichung in prozent, prozentuale differenz zweier werte formel',
    guideTitle: 'Prozentuale Differenz: Symmetrischer Vergleich zweier Zahlen',
    guideText: 'Die prozentuale Differenz (auch prozentuale Abweichung oder relative Differenz) vergleicht zwei Zahlen objektiv und richtungsunabhängig miteinander, indem sie die Differenz beider Zahlen ins Verhältnis zu ihrem arithmetischen Mittelwert setzt.\n\nDas ist besonders dann unverzichtbar, wenn keiner der beiden Werte als zeitlicher Vorher-Nachher-Ausgangspunkt eingestuft werden kann – beispielsweise beim neutralen Vergleich zweier Gehälter von Kollegen, beim Vergleich der Messgenauigkeit zweier Laborgeräte oder beim Vergleich zweier Produktpreise in verschiedenen Onlineshops.',
    formula: 'Differenz % = (|A − B| ÷ ((A + B) ÷ 2)) × 100 %',
    formulaExplanation: '|A − B| = absolute Differenz beider Werte (Betrag) | (A + B) ÷ 2 = arithmetischer Mittelwert beider Werte',
    howItWorks: [
      'Berechnen Sie die absolute Differenz zwischen den beiden Werten A und B: |A − B|.',
      'Berechnen Sie den arithmetischen Durchschnitt beider Werte: (A + B) ÷ 2.',
      'Teilen Sie die absolute Differenz durch den Durchschnitt und multiplizieren Sie mit 100.'
    ],
    sections: [
      {
        title: 'Unterschied zur prozentualen Steigerung',
        text: 'Warum braucht man eine eigene Formel für die prozentuale Differenz?\n\nBei einer prozentualen Steigerung gibt es eine klare zeitliche Abfolge: Ein alter Wert steigt zu einem neuen Wert. Hier teilt man durch den Startwert.\n\nWenn Sie jedoch zwei gleichberechtigte Werte vergleichen (z. B. Stadt A hat 80.000 Einwohner, Stadt B hat 100.000 Einwohner), gibt es keinen "Startwert". Würde man durch 80.000 teilen, erhielte man +25 %. Würde man durch 100.000 teilen, erhielte man −20 %.\n\nDie prozentuale Differenz löst diesen Widerspruch, indem sie durch den neutralen Mittelwert (90.000) teilt: Das Ergebnis ist für beide Richtungen symmetrisch genau 22,22 %.',
        bullets: [
          'Prozentuale Steigerung: Richtungsabhängig, teilt durch Startwert.',
          'Prozentuale Differenz: Richtungsneutral, teilt durch Durchschnitt beider Zahlen.',
          'Ergebnis ist dank Betragsstrichen |A − B| immer positiv.'
        ]
      },
      {
        title: 'Anwendung in Wissenschaft, Messtechnik & Finanzen',
        text: 'In der wissenschaftlichen Messtechnik, Qualitätskontrolle und Finanzanalyse wird die relative Abweichung standardmäßig genutzt, um Toleranzen zu überprüfen (z. B. maximale Fertigungsabweichung von 2 % gegenüber dem Sollwert).'
      }
    ],
    table: {
      title: 'Vergleichswerte: Absolute Differenz vs. Symmetrische Differenz in %',
      headers: ['Wert A', 'Wert B', 'Absolute Differenz', 'Mittelwert ((A+B)/2)', 'Prozentuale Differenz'],
      rows: [
        ['80', '100', '20', '90,0', '22,22 %'],
        ['100', '120', '20', '110,0', '18,18 %'],
        ['50', '150', '100', '100,0', '100,00 %'],
        ['200', '250', '50', '225,0', '22,22 %'],
        ['1.000 €', '1.200 €', '200 €', '1.100 €', '18,18 %'],
        ['4.000 €', '5.000 €', '1.000 €', '4.500 €', '22,22 %']
      ]
    },
    useCases: [
      {
        title: 'Labor- & Qualitätskontrolle',
        description: 'Prüfung der relativen Abweichung zwischen zwei Messgeräten oder zwischen Laborprobe und Referenzmessung.',
        example: 'Sensor A misst 98 Einheiten, Sensor B misst 102 Einheiten = 4,00 % relative Abweichung'
      },
      {
        title: 'Gehalts- & Honorarvergleiche',
        description: 'Objektiver Vergleich der Verdienste zweier freiberuflicher Dienstleister ohne Vorher-Nachher-Hierarchie.',
        example: 'Stundensatz 85 € vs. 105 € = 20 € Differenz bei 95 € Schnitt = 21,05 % relative Differenz'
      },
      {
        title: 'Markt- & Preisvergleiche',
        description: 'Symmetrischer Vergleich der Preise zweier konkurrierender Softwareanbieter oder Streamingdienste.',
        example: 'Tarif A kostet 12 €/Monat, Tarif B kostet 18 €/Monat = 40,00 % Differenz'
      }
    ],
    mistakes: [
      {
        mistake: 'Einen der beiden Werte willkürlich als Grundwert wählen',
        correction: 'Wenn keine zeitliche Richtung vorliegt, teilen Sie immer durch den Durchschnitt beider Werte ((A + B) ÷ 2), nicht durch A oder B.'
      },
      {
        mistake: 'Ein negatives Vorzeichen erwarten',
        correction: 'Die prozentuale Differenz verwendet den Betrag |A − B| und ist daher per Definition immer positiv.'
      }
    ],
    tips: [
      'Die Reihenfolge der Eingabe spielt keine Rolle: Wert A = 80 und Wert B = 100 liefert dasselbe wie A = 100 und B = 80.',
      'Sind beide Werte identisch (A = B), ist die prozentuale Differenz genau 0,00 %.',
      'Ist einer der beiden Werte dreimal so groß wie der andere (z. B. 50 und 150), beträgt die Differenz exakt 100 %.'
    ],
    examples: [
      {
        title: 'Vergleich zweier Gehälter (4.000 € vs. 5.000 €)',
        scenario: 'Wie groß ist der relative prozentuale Unterschied zwischen einem Gehalt von 4.000 € und einem Gehalt von 5.000 €?',
        solution: '|4.000 − 5.000| ÷ ((4.000 + 5.000) ÷ 2) = 1.000 ÷ 4.500 × 100 % = 22,22 % Differenz'
      },
      {
        title: 'Messwertvergleich zweier Sensoren (80 vs. 100)',
        scenario: 'Zwei unabhängige Temperatursensoren messen 80 °C und 100 °C. Wie groß ist die symmetrische Abweichung?',
        solution: '|80 − 100| ÷ ((80 + 100) ÷ 2) = 20 ÷ 90 × 100 % = 22,22 % prozentuale Abweichung'
      },
      {
        title: 'Vergleich zweier Produktpreise (25 € vs. 35 €)',
        scenario: 'Zwei Händler bieten ein vergleichbares Produkt für 25 € bzw. 35 € an.',
        solution: '|25 − 35| ÷ ((25 + 35) ÷ 2) = 10 ÷ 30 × 100 % = 33,33 % Preisdifferenz'
      }
    ],
    faqs: [
      {
        q: 'Was ist der Unterschied zwischen prozentualer Differenz und prozentualer Steigerung?',
        a: 'Die prozentuale Steigerung bezieht sich auf einen festen Anfangswert (zeitliche Richtung von Alt zu Neu). Die prozentuale Differenz teilt durch das arithmetische Mittel beider Werte und ist vollkommen richtungsneutral.'
      },
      {
        q: 'Spielt die Reihenfolge der Eingabe von Wert A und Wert B eine Rolle?',
        a: 'Nein. Da im Zähler der absolute Betrag |A − B| gebildet wird, ist das Ergebnis für A = 80 und B = 100 exakt dasselbe wie für A = 100 und B = 80.'
      },
      {
        q: 'Wann verwendet man die prozentuale Differenz?',
        a: 'Immer dann, wenn zwei Größen verglichen werden, bei denen keine der beiden als Referenz- oder Ausgangswert bevorzugt werden kann (z. B. Laborversuche, Gehaltsvergleiche, Preisvergleiche).'
      },
      {
        q: 'Kann die prozentuale Differenz größer als 100 % sein?',
        a: 'Ja, wenn das Verhältnis beider Zahlen größer als 3:1 ist (z. B. zwischen 20 und 100 beträgt die prozentuale Differenz 133,33 %). Das theoretische Maximum liegt bei 200 %.'
      }
    ],
    component: PercentageDifferenceCalculator
  },
  {
    id: 'percentage-euro',
    name: 'Prozent Euro Rechner',
    shortName: 'Prozent Euro',
    slug: 'prozent-euro-rechner',
    aliases: ['/percentage-euro-calculator', '/prozent-euro', '/euro-percentage'],
    category: 'Finanzen & Praxis',
    badge: 'Euro (€)',
    icon: Euro,
    description: 'Berechnen Sie den Prozentwert von jedem Euro-Betrag (€) sofort mit Aufschlag- und Rabattsummen.',
    seoTitle: 'Prozent Euro Rechner – Prozent von Euro-Betrag (€) berechnen',
    metaDescription: 'Berechnen Sie den Prozentwert in Euro (€) sofort online: Rabattbeträge, Aufschläge und Anteile direkt kalkulieren. 100% kostenlos und ohne Anmeldung.',
    keywords: 'prozent euro rechner, prozent von euro berechnen, wie viel euro sind prozent, rabatt in euro berechnen, euro prozentrechnung',
    guideTitle: 'Prozente von Euro-Beträgen schnell und fehlerfrei ausrechnen',
    guideText: 'Ob beim Einkaufen, bei Handwerkerrechnungen, Gehaltsverhandlungen, Kreditzinsen oder im Restaurant: Nahezu jede alltägliche Prozentrechnung dreht sich um handfeste Geldbeträge in Euro (€).\n\nUnser Prozent Euro Rechner ist speziell darauf ausgelegt, Ihnen neben dem reinen Euro-Anteil auf Wunsch sofort den abgezogenen Endbetrag (bei Rabatten oder Skonto) und den aufgeschlagenen Gesamtbetrag (bei Mehrwertsteuer, Zinsen oder Trinkgeld) centgenau anzuzeigen.',
    formula: 'Euro-Wert = (p ÷ 100) × Geldbetrag (€)',
    formulaExplanation: 'p = Prozentsatz in % | Geldbetrag = Ausgangssumme in Euro (€)',
    howItWorks: [
      'Geben Sie den gewünschten Prozentsatz p und den Geldbetrag in Euro in die Eingabefelder ein.',
      'Der Rechner wandelt die Prozentangabe in einen Dezimalfaktor um (p ÷ 100) und multipliziert diesen mit dem Geldbetrag.',
      'Das Ergebnis wird nach kaufmännischen Rundungsregeln (DIN 1333) exakt auf zwei Nachkommastellen (Cent) gerundet.'
    ],
    sections: [
      {
        title: 'Euro-Beträge im Geschäftsalltag: Skonto, Rabatt und Zins',
        text: 'Im Wirtschaftsleben begegnen Ihnen typische Standardprozente auf Euro-Beträge:\n\n• 2 % oder 3 % Skonto: Rechnungsabzug bei Zahlung innerhalb der Skontofrist (z. B. 14 Tage). Bei einer Rechnung von 1.500 € sparen 3 % Skonto immerhin 45,00 €!\n• 19 % oder 7 % Umsatzsteuer: Gesetzliche Mehrwertsteuer auf Dienstleistungen und Waren.\n• 5 % bis 10 % Trinkgeld: Freiwilliger Serviceaufschlag im Hotel- und Gaststättengewerbe.',
        bullets: [
          'Skontobetrag = Rechnungsbetrag × (Skontosatz ÷ 100)',
          'Zahlbetrag = Rechnungsbetrag − Skontobetrag',
          'Rundung erfolgt immer centgenau auf 2 Stellen hinter dem Komma.'
        ]
      },
      {
        title: 'Kaufmännische Rundung (DIN 1333)',
        text: 'Bei Prozentrechnungen mit Geld entstehen häufig Bruchteile von Cents (z. B. 12,456 €). In Deutschland gilt die kaufmännische Rundung nach DIN 1333: Endet die dritte Nachkommastelle auf 0, 1, 2, 3 oder 4, wird abgerundet. Endet sie auf 5, 6, 7, 8 oder 9, wird auf den nächsten vollen Cent aufgerundet.'
      }
    ],
    table: {
      title: 'Euro-Schnellübersicht: Standardprozentsätze im Vergleich',
      headers: ['Euro-Betrag', '5 % Trinkgeld', '10 % Ersparnis', '19 % MwSt', '25 % Nachlass'],
      rows: [
        ['20,00 €', '1,00 €', '2,00 €', '3,80 €', '5,00 €'],
        ['50,00 €', '2,50 €', '5,00 €', '9,50 €', '12,50 €'],
        ['100,00 €', '5,00 €', '10,00 €', '19,00 €', '25,00 €'],
        ['250,00 €', '12,50 €', '25,00 €', '47,50 €', '62,50 €'],
        ['500,00 €', '25,00 €', '50,00 €', '95,00 €', '125,00 €'],
        ['1.000,00 €', '50,00 €', '100,00 €', '190,00 €', '250,00 €']
      ]
    },
    useCases: [
      {
        title: 'Trinkgeld im Restaurant & Café',
        description: 'Schnelle und diskrete Ermittlung eines angemessenen Trinkgeldbetrags von 5 %, 10 % oder 15 % auf die Bewirtungsrechnung.',
        example: '64,00 € Rechnung mit 10 % Trinkgeld = 6,40 € Trinkgeld (Zahlbetrag aufgerundet: 70,40 € bzw. 71,00 €)'
      },
      {
        title: 'Skontoabzug bei Rechnungen',
        description: 'Sofortige Berechnung der Ersparnis bei schneller Überweisung innerhalb der Skontofrist von Lieferantenrechnungen.',
        example: '2 % Skonto auf 1.250 € Handwerkerrechnung = 25,00 € gespart'
      },
      {
        title: 'Gehaltsverhandlungen & Bonuszahlungen',
        description: 'Exakte Ermittlung des monatlichen Brutto-Zuwachses in Euro bei einer prozentualen Gehaltserhöhung.',
        example: '6 % mehr Gehalt bei 3.500 € bisherigem Monatsbrutto = 210,00 € monatliches Plus'
      }
    ],
    mistakes: [
      {
        mistake: 'Komma- und Punkt-Eingabe verwechseln',
        correction: 'Unser Rechner verarbeitet sowohl deutsche Kommas (12,50 €) als auch internationale Punkte (12.50 €) automatisch und fehlerfrei.'
      },
      {
        mistake: 'Mehrwertsteuer aus Bruttobetrag fälschlicherweise als Prozentwert berechnen',
        correction: '19 % Mehrwertsteuer auf 100 € Netto sind 19 € Steuer. Wenn Sie jedoch einen Bruttobetrag von 119 € haben, dürfen Sie nicht 19 % abziehen, sondern müssen durch 1,19 teilen!'
      }
    ],
    tips: [
      '10 % im Kopf: Einfach das Komma um 1 Stelle nach links schieben (10 % von 76,00 € = 7,60 €).',
      '1 % im Kopf: Komma um 2 Stellen nach links schieben (1 % von 76,00 € = 0,76 € bzw. 76 Cent).',
      '2 % Skonto im Kopf: 1 % verdoppeln (bei 500 € sind 1 % = 5 €, mal 2 = 10 € Skonto).'
    ],
    examples: [
      {
        title: '19 % Mehrwertsteuer auf 100 €',
        scenario: 'Wie viel Euro Steuer fallen bei einem Nettorechnungsbetrag von 100 € an?',
        solution: '(19 ÷ 100) × 100 € = 19,00 € Steuerbetrag (Brutto-Gesamtbetrag: 119,00 €)'
      },
      {
        title: '15 % Ersparnis auf 80 € Einkauf',
        scenario: 'Berechnen Sie den Sparbetrag und den Endpreis bei 15 % Aktionsrabatt auf 80 €.',
        solution: '(15 ÷ 100) × 80 € = 12,00 € Ersparnis (Endpreis: 68,00 €)'
      },
      {
        title: '3 % Skonto auf 1.800 € Lieferantenrechnung',
        scenario: 'Ein Unternehmer bezahlt eine Rechnung über 1.800 € innerhalb von 10 Tagen unter Abzug von 3 % Skonto.',
        solution: '(3 ÷ 100) × 1.800 € = 54,00 € Skontoersparnis (Überweisungsbetrag: 1.746,00 €)'
      }
    ],
    faqs: [
      {
        q: 'Wie berechnet man den Prozentsatz eines Euro-Betrags?',
        a: 'Teilen Sie den Prozentsatz durch 100 und multiplizieren Sie das Ergebnis mit dem Euro-Betrag. Beispiel: 15 % von 200 € = 0,15 × 200 € = 30,00 €.'
      },
      {
        q: 'Wie viel Prozent Trinkgeld gibt man in Deutschland üblicherweise?',
        a: 'In deutschen Restaurants und Cafés sind 5 % bis 10 % des Rechnungsbetrags üblich und gelten als Zeichen guter Zufriedenheit mit dem Service.'
      },
      {
        q: 'Wie rundet man Cent-Beträge bei der Prozentrechnung richtig?',
        a: 'Nach kaufmännischer Rundung (DIN 1333): Ist die dritte Nachkommastelle eine 5 oder höher, wird der Cent aufgerundet, ansonsten abgerundet.'
      },
      {
        q: 'Was ist der Unterschied zwischen Brutto- und Nettobetrag in Euro?',
        a: 'Der Nettobetrag ist der reine Preis ohne Umsatzsteuer. Der Bruttobetrag enthält die gesetzliche Mehrwertsteuer (meist 19 % oder ermäßigt 7 %).'
      }
    ],
    component: PercentageEuroCalculator
  },
  {
    id: 'fraction-to-percentage',
    name: 'Bruch in Prozent Rechner',
    shortName: 'Bruch in %',
    slug: 'bruch-in-prozent',
    aliases: ['/fraction-to-percentage', '/fraction-calculator', '/bruch-in-prozent-umrechnen'],
    category: 'Grundlagen',
    badge: 'Bruch in %',
    icon: Divide,
    description: 'Wandeln Sie jeden Bruch (Zähler / Nenner) sofort in die exakte Prozentzahl und Dezimalzahl um.',
    seoTitle: 'Bruch in Prozent Rechner – Brüche in Prozente umrechnen',
    metaDescription: 'Wandeln Sie jeden Bruch (Zähler / Nenner) sofort in Prozent und Dezimalzahl um: 3/4 = 75%, 1/3 = 33,33%. Mit Rechenweg, Kürzung und Formel.',
    keywords: 'bruch in prozent umrechnen, bruch zu prozent rechner, zähler nenner prozent, 3/4 in prozent, brüche in prozent umwandeln',
    guideTitle: 'Brüche in Prozente umrechnen: Einfach & verständlich',
    guideText: 'Brüche und Prozente drücken exakt denselben mathematischen Sachverhalt aus: einen proportionalen Teil eines Ganzen.\n\nWährend ein echter Bruch wie 3/4 das Verhältnis zweier ganzer Zahlen (Zähler und Nenner) darstellt, normiert die Prozentangabe (75 %) diesen Wert auf die einheitliche Bezugsgröße 100. Unser Rechner wandelt jeden beliebigen Bruch im Handumdrehen in eine Dezimalzahl und in den entsprechenden Prozentsatz um – inklusive Kürzung und nachvollziehbaren Zwischenschritten.',
    formula: 'Prozent (%) = (Zähler ÷ Nenner) × 100 %',
    formulaExplanation: 'Zähler = obere Zahl des Bruchs (der Teil) | Nenner = untere Zahl des Bruchs (das Ganze, darf nicht 0 sein)',
    howItWorks: [
      'Teilen Sie die obere Zahl (Zähler) durch die untere Zahl (Nenner). Sie erhalten den Dezimalwert des Bruchs.',
      'Multiplizieren Sie diese Dezimalzahl mit 100, um den Wert auf die Basis 100 zu skalieren.',
      'Fügen Sie das Prozentzeichen (%) an und runden Sie bei periodischen Brüchen (z. B. 1/3) auf 2 Dezimalstellen.'
    ],
    sections: [
      {
        title: 'Zwei Methoden zur Umrechnung von Brüchen in Prozent',
        text: 'In der Schulmathematik gibt es zwei bewährte Wege:\n\n1. Methode: Auf den Nenner 100 erweitern\nLässt sich der Nenner durch eine ganze Zahl auf 100 erweitern (z. B. 4 × 25 = 100 oder 5 × 20 = 100), erweitert man Zähler und Nenner mit demselben Faktor. Der Zähler auf dem Nenner 100 ist direkt der Prozentsatz!\nBeispiel: 3/4 = (3 × 25) / (4 × 25) = 75/100 = 75 %.\n\n2. Methode: Division und Multiplikation mit 100 (Universell)\nFunktioniert für jeden Nenner, auch bei krummen Zahlen: Man teilt den Zähler durch den Nenner und nimmt mal 100.\nBeispiel: 5/8 = 5 ÷ 8 = 0,625 × 100 % = 62,50 %.',
        bullets: [
          'Erweitern auf 100: Ideal für Nenner wie 2, 4, 5, 10, 20, 25 und 50.',
          'Schriftliche Division: Universell für alle Nenner wie 3, 7, 8, 9, 12.'
        ]
      },
      {
        title: 'Umgang mit periodischen Dezimalzahlen',
        text: 'Manche Brüche wie 1/3, 2/3 oder 1/7 lassen sich nicht als endliche Dezimalzahl darstellen. 1/3 ergibt 0,333333… Bei Prozentangaben wird in der Praxis und im Schulunterricht standardmäßig auf zwei Nachkommastellen gerundet: 1/3 ≈ 33,33 % und 2/3 ≈ 66,67 %.'
      }
    ],
    table: {
      title: 'Referenztabelle: Die wichtigsten Brüche in Prozent & Dezimal',
      headers: ['Bruch', 'Erweiterung auf 100', 'Dezimalzahl', 'Prozentsatz (%)'],
      rows: [
        ['1/2', '(1 × 50) / 100', '0,50', '50,00 %'],
        ['1/3', 'Periodisch', '0,3333…', '33,33 %'],
        ['1/4', '(1 × 25) / 100', '0,25', '25,00 %'],
        ['3/4', '(3 × 25) / 100', '0,75', '75,00 %'],
        ['1/5', '(1 × 20) / 100', '0,20', '20,00 %'],
        ['1/8', '1 ÷ 8', '0,125', '12,50 %'],
        ['3/8', '3 ÷ 8', '0,375', '37,50 %'],
        ['1/10', '(1 × 10) / 100', '0,10', '10,00 %']
      ]
    },
    useCases: [
      {
        title: 'Mathematikunterricht in Schule & Studium',
        description: 'Hausaufgabenkontrolle und Vorbereitung auf Klassenarbeiten in Bruchrechnung und Prozentrechnung.',
        example: 'Bruch 7/12 umwandeln = (7 ÷ 12) × 100 % = 58,33 %'
      },
      {
        title: 'Kochen, Backen & Mengenangaben',
        description: 'Umrechnen von Rezeptangaben in Prozent des Gesamtvolumens oder Gewichts.',
        example: '3/8 Liter Milch von 1 Liter Gesamtflüssigkeit = 37,50 % Anteil'
      },
      {
        title: 'Wahrscheinlichkeiten & Quoten',
        description: 'Wandeln von Gewinnchancen oder statistischen Wahrscheinlichkeiten (z. B. 1 von 6 beim Würfeln) in intuitive Prozentwerte.',
        example: '1/6 Würfelchance = (1 ÷ 6) × 100 % = 16,67 %'
      }
    ],
    mistakes: [
      {
        mistake: 'Einen Nenner von 0 eingeben',
        correction: 'Ein Bruch mit Nenner 0 (z. B. 5/0) ist mathematisch nicht definiert. Der Nenner muss ungleich null sein.'
      },
      {
        mistake: 'Falsches Runden bei 2/3',
        correction: '2/3 = 0,6666… wird kaufmännisch auf 66,67 % aufgerundet, nicht auf 66,66 % abgerundet!'
      }
    ],
    tips: [
      'Bruch kürzen spart Zeit: 6/8 lässt sich durch 2 kürzen zu 3/4 = 75 %.',
      'Nenner verdoppeln halbiert die Prozentzahl: 1/4 = 25 %, also ist 1/8 = 12,5 % und 1/16 = 6,25 %.',
      'Ist der Zähler größer als der Nenner (z. B. 5/4), liegt das Ergebnis immer über 100 % (hier: 125 %).'
    ],
    examples: [
      {
        title: '3/4 in Prozent umwandeln',
        scenario: 'Wandeln Sie den Bruch 3/4 in eine saubere Prozentangabe um.',
        solution: '(3 ÷ 4) × 100 % = 0,75 × 100 % = 75,00 %'
      },
      {
        title: '1/3 in Prozent umwandeln',
        scenario: 'Wandeln Sie den periodischen Bruch 1/3 in Prozent um.',
        solution: '(1 ÷ 3) × 100 % = 0,3333… × 100 % = 33,33 % (gerundet)'
      },
      {
        title: '5/8 in Prozent umwandeln',
        scenario: 'Berechnen Sie den prozentualen Wert für den Bruch 5/8.',
        solution: '(5 ÷ 8) × 100 % = 0,625 × 100 % = 62,50 %'
      }
    ],
    faqs: [
      {
        q: 'Wie wandelt man einen Bruch in Prozent um?',
        a: 'Teilen Sie den Zähler durch den Nenner und multiplizieren Sie das Ergebnis mit 100. Alternativ erweitern Sie den Bruch so, dass im Nenner 100 steht; der Zähler ist dann direkt die Prozentzahl.'
      },
      {
        q: 'Was ist 1/8 als Prozentzahl?',
        a: '1 geteilt durch 8 ergibt 0,125. Multipliziert mit 100 ergibt das genau 12,50 %.'
      },
      {
        q: 'Kann ein Bruch mehr als 100 Prozent ergeben?',
        a: 'Ja. Wenn der Zähler größer ist als der Nenner (ein unechter Bruch, z. B. 5/4), ist das Ergebnis größer als 100 % (5/4 = 125 %).'
      },
      {
        q: 'Wie rechnet man Prozent zurück in einen Bruch um?',
        a: 'Schreiben Sie die Prozentzahl als Zähler über den Nenner 100 (z. B. 25 % = 25/100) und kürzen Sie den Bruch so weit wie möglich (25/100 gekürzt durch 25 ergibt 1/4).'
      }
    ],
    component: FractionToPercentageCalculator
  },
  {
    id: 'gross-net-19',
    name: 'Brutto Netto Rechner 19 %',
    shortName: 'Brutto Netto 19%',
    slug: 'brutto-netto-rechner-19',
    aliases: ['/gross-net-calculator-19', '/brutto-netto-19', '/netto-brutto-19', '/19-mwst-rechner', '/mwst-rechner'],
    category: 'Steuern & Finanzen',
    badge: '19 % MwSt',
    icon: Receipt,
    description: 'Netto in Brutto oder Brutto in Netto mit dem regulären deutschen 19 % Mehrwertsteuersatz umrechnen.',
    seoTitle: 'Brutto Netto Rechner 19% – Mehrwertsteuer online berechnen',
    metaDescription: '19% MwSt schnell berechnen: Netto zu Brutto oder Brutto zu Netto umrechnen. Zeigt Nettobetrag, Steueranteil und Bruttobetrag exakt auf den Cent.',
    keywords: 'brutto netto rechner 19 prozent, 19 mwst rechner, netto in brutto umrechnen 19, brutto zu netto 19, mehrwertsteuer rechner 19 prozent',
    guideTitle: '19 % Mehrwertsteuer: Brutto und Netto im Handumdrehen berechnen',
    guideText: 'In Deutschland beträgt der reguläre Mehrwertsteuersatz (umgangssprachlich MwSt, steuerrechtlich Umsatzsteuer bzw. USt) 19 %.\n\nFür gewerbliche Rechnungen, die private Steuererklärung, Handwerkerangebote und Preisvergleiche muss tagtäglich zwischen dem Nettopreis (Warenwert ohne Steuer) und dem Bruttopreis (Endpreis inklusive Steuer) hin- und hergerechnet werden. Unser Rechner beherrscht beide Berechnungsrichtungen präzise und weist den enthaltenen Steuerbetrag centgenau aus.',
    formula: 'Brutto = Netto × 1,19 | Netto = Brutto ÷ 1,19',
    formulaExplanation: '1,19 = Multiplikator für 19 % MwSt (100 % Nettogrundwert + 19 % Steueranteil)',
    howItWorks: [
      'Netto zu Brutto (MwSt aufschlagen): Multiplizieren Sie den Nettobetrag mit 1,19. Der Steueranteil beträgt Netto × 0,19.',
      'Brutto zu Netto (MwSt herausrechnen): Teilen Sie den Bruttobetrag durch 1,19. Der Steueranteil ist Brutto minus Netto.',
      'Beide Beträge werden auf zwei Nachkommastellen (Cent) gerundet.'
    ],
    sections: [
      {
        title: 'Der teuerste Fehler der Buchhaltung: 19 % vom Brutto abziehen',
        text: 'Einer der hartnäckigsten Fehler bei Rechnungen und Preiskalkulationen:\nWer aus einem Bruttopreis von 119 € die Mehrwertsteuer herausrechnen möchte und einfach 19 % abzieht, rechnet:\n119 € − (119 € × 0,19) = 119 € − 22,61 € = 96,39 €! Das ist völlig falsch!\n\nDie 19 % Mehrwertsteuer wurden ursprünglich auf den Nettobetrag (100 €) aufgeschlagen (19 % von 100 € = 19 €). Der Bruttobetrag repräsentiert daher 119 % des Nettobetrags. Um den Nettopreis zu erhalten, muss man den Bruttobetrag immer durch 1,19 teilen:\n119 € ÷ 1,19 = exakt 100,00 €.',
        bullets: [
          'Falsch: Brutto minus 19 % (zieht 19 % von 119 % ab).',
          'Richtig: Brutto geteilt durch 1,19 (bringt den Betrag auf die 100 % Basis zurück).',
          'Enthaltene Steuer = Brutto − (Brutto ÷ 1,19) = Brutto × (19 ÷ 119) ≈ Brutto × 0,15966 (ca. 15,97 %).'
        ],
        callout: 'Merksatz: Im Bruttobetrag sind nicht 19 % Mehrwertsteuer enthalten, sondern ca. 15,97 % des Gesamtbetrags!'
      },
      {
        title: 'Vorsteuerabzug für Unternehmer und Freiberufler',
        text: 'Für vorsteuerabzugsberechtigte Unternehmer ist die Mehrwertsteuer ein durchlaufender Posten. Bei der monatlichen oder quartalsweisen Umsatzsteuervoranmeldung wird die selbst gezahlte Vorsteuer mit der von Kunden vereinnahmten Umsatzsteuer verrechnet. Eine exakte Trennung von Netto und Steuer ist daher gesetzliche Pflicht (§ 14 UStG).'
      }
    ],
    table: {
      title: 'Steuertabelle 19 % MwSt: Netto, Steueranteil und Brutto',
      headers: ['Nettobetrag (100 %)', '19 % Mehrwertsteuer', 'Bruttobetrag (119 %)', 'Rechenweg Netto → Brutto', 'Rechenweg Brutto → Netto'],
      rows: [
        ['10,00 €', '1,90 €', '11,90 €', '10 € × 1,19', '11,90 € ÷ 1,19'],
        ['50,00 €', '9,50 €', '59,50 €', '50 € × 1,19', '59,50 € ÷ 1,19'],
        ['100,00 €', '19,00 €', '119,00 €', '100 € × 1,19', '119,00 € ÷ 1,19'],
        ['200,00 €', '38,00 €', '238,00 €', '200 € × 1,19', '238,00 € ÷ 1,19'],
        ['500,00 €', '95,00 €', '595,00 €', '500 € × 1,19', '595,00 € ÷ 1,19'],
        ['1.000,00 €', '190,00 €', '1.190,00 €', '1.000 € × 1,19', '1.190,00 € ÷ 1,19']
      ]
    },
    useCases: [
      {
        title: 'Rechnungsstellung für Selbstständige',
        description: 'Kalkulation des korrekten Bruttorechnungsbetrags und separater Ausweis der 19 % Umsatzsteuer gemäß § 14 UStG.',
        example: 'Dienstleistungshonorar 850,00 € Netto + 161,50 € USt = 1.011,50 € Brutto'
      },
      {
        title: 'Tankquittungen & Gastronomiebelege',
        description: 'Herausrechnen des reinen Nettobetrags aus Quittungen zur Erfassung in der Buchhaltungssoftware oder Reisekostenabrechnung.',
        example: 'Tankquittung über 89,25 € Brutto = 75,00 € Netto + 14,25 € Vorsteuer'
      },
      {
        title: 'B2B- vs. B2C-Preisvergleich',
        description: 'Umrechnung von Großhandelspreisen (Netto) in Endverbraucherpreise (Brutto) zur Margen- und Preiskalkulation.',
        example: 'Großhandelseinkauf für 42,00 € Netto = 49,98 € Brutto-Kundenpreis'
      }
    ],
    mistakes: [
      {
        mistake: '19 % vom Bruttobetrag subtrahieren',
        correction: 'Teilen Sie den Bruttobetrag immer durch 1,19. 19 % abziehen führt zu einem zu niedrigen Nettobetrag und falschen Buchungssätzen.'
      },
      {
        mistake: '19 % und 7 % Steuersatz verwechseln',
        correction: 'Für Grundnahrungsmittel, Bücher, Zeitschriften und Hotelübernachtungen gilt in Deutschland der ermäßigte Steuersatz von 7 % (Teiler: 1,07).'
      }
    ],
    tips: [
      'Netto zu Brutto: Betrag einfach mit 1,19 multiplizieren.',
      'Brutto zu Netto: Betrag immer durch 1,19 teilen.',
      'Schnellschätzung der Steuer im Bruttobetrag: Ungefähr ein Sechstel des Bruttobetrags (genau: 15,97 %) entspricht der Steuer.'
    ],
    examples: [
      {
        title: '19 % MwSt auf 100 € Netto aufschlagen',
        scenario: 'Eine Handwerkerleistung kostet 100 € Netto. Wie viel zahlt der Kunde brutto inklusive Mehrwertsteuer?',
        solution: '100 € × 1,19 = 119,00 € Brutto (darin enthalten: 19,00 € Umsatzsteuer)'
      },
      {
        title: '19 % MwSt aus 119 € Bruttorechnung herausrechnen',
        scenario: 'Auf einer Baumarktquittung stehen 119 € Gesamtbrutto. Was war der Nettowarenwert?',
        solution: '119 € ÷ 1,19 = 100,00 € Netto (ausgewiesene Steuer: 19,00 €)'
      },
      {
        title: 'Netto-Einkauf von 450 € für ein Büro',
        scenario: 'Ein Unternehmer bestellt Büromöbel für 450 € Netto. Wie hoch ist die Rechnungssumme?',
        solution: '450 € × 1,19 = 535,50 € Brutto (darin enthalten: 85,50 € Vorsteuer)'
      }
    ],
    faqs: [
      {
        q: 'Wie rechnet man 19 % Mehrwertsteuer aus einem Bruttobetrag heraus?',
        a: 'Teilen Sie den Bruttobetrag durch 1,19. Das Ergebnis ist der reine Nettobetrag. Die Mehrwertsteuer ist die Differenz aus Brutto minus Netto.'
      },
      {
        q: 'Wie rechnet man 19 % Mehrwertsteuer auf einen Nettobetrag auf?',
        a: 'Multiplizieren Sie den Nettobetrag mit 1,19. Das Ergebnis ist der fertige Bruttobetrag.'
      },
      {
        q: 'Gilt in Deutschland immer der Steuersatz von 19 %?',
        a: 'Nein. 19 % ist der Regelsatz. Für viele Waren des täglichen Bedarfs wie Bücher, Zeitschriften und Lebensmittel gilt der ermäßigte Satz von 7 %.'
      },
      {
        q: 'Warum darf man vom Bruttobetrag nicht einfach 19 % abziehen?',
        a: 'Weil die 19 % auf den kleineren Nettowert bezogen waren. Im Bruttowert (119 %) entspricht der Steueranteil nur ca. 15,97 % der Gesamtsumme.'
      }
    ],
    component: GrossNet19Calculator
  },
  {
    id: 'discount-calculator',
    name: 'Prozent Rabatt Rechner',
    shortName: 'Rabattrechner',
    slug: 'rabatt-rechner',
    aliases: ['/percentage-discount-calculator', '/rabattrechner-tool', '/discount-calc', '/rabattrechner'],
    category: 'Einkaufen & Handel',
    badge: 'Rabatt (-%)',
    icon: Tag,
    description: 'Ermitteln Sie reduzierte Angebotspreise, prozentuale Preisnachlässe und Ihre tatsächliche Ersparnis.',
    seoTitle: 'Prozent Rabatt Rechner – Rabatt & Ersparnis online berechnen',
    metaDescription: 'Rabatte blitzschnell ausrechnen: Geben Sie Originalpreis und Rabatt in % ein und sehen Sie sofort Endpreis und gespartes Geld in Euro. Kostenlos.',
    keywords: 'rabattrechner online, prozent rabatt rechner, wie viel spart man bei 20 prozent, rabatt berechnen formel, sale rabatt rechner',
    guideTitle: 'Rabatte schnell im Kopf und online berechnen',
    guideText: 'Beim Shopping im Sommerschlussverkauf, Black Friday, Cyber Monday oder bei Sonderangeboten im Supermarkt locken Rabattaufkleber mit 20 %, 30 %, 50 % oder 70 %.\n\nUnser kostenloser Rabattrechner berechnet Ihnen sekundenschnell den reduzierten Zahlpreis an der Kasse und zeigt Ihnen schwarz auf weiß, wie viele Euro Sie tatsächlich sparen. So durchschauen Sie Werbemaschen sofort und wissen genau, ob sich ein Schnäppchen wirklich lohnt.',
    formula: 'Endpreis = Originalpreis × (1 − Rabatt % ÷ 100)',
    formulaExplanation: 'Ersparnis (€) = Originalpreis × (Rabatt % ÷ 100)',
    howItWorks: [
      'Tragen Sie den regulären Originalpreis (UVP) und den Rabattsatz in Prozent ein.',
      'Der Rechner ermittelt den Abzugsfaktor (z. B. bei 30 % Rabatt verbleiben 70 % bzw. Faktor 0,70).',
      'Sie sehen sofort den reduzierten Endpreis und die exakte Ersparnis in Euro auf den Cent gerundet.'
    ],
    sections: [
      {
        title: 'Schnellrechnung im Kopf an der Ladenkasse',
        text: 'Stehen Sie im Geschäft vor einem Kleiderständer mit "30 % auf alles", müssen Sie keinen Taschenrechner zücken:\n\n1. Berechnen Sie zuerst 10 % des Preises, indem Sie das Komma um eine Stelle nach links verschieben (z. B. bei 60 € sind 10 % = 6 €).\n2. Multiplizieren Sie diesen Wert mit der ersten Ziffer des Rabatts (bei 30 %: 6 € × 3 = 18 € Ersparnis).\n3. Ziehen Sie die Ersparnis vom Originalpreis ab: 60 € − 18 € = 42,00 € Endpreis.',
        bullets: [
          '20 % Rabatt: 10 % verdoppeln und abziehen.',
          '50 % Rabatt: Einfach den Preis halbieren.',
          '70 % Rabatt: Sie zahlen nur noch 30 % des Preises (10 % verdreifachen).'
        ]
      },
      {
        title: 'Kombinierte Rabatte: Warum 20 % + 10 % nicht 30 % sind',
        text: 'Häufig werben Händler mit Zusatzcoupons ("Heute 20 % Sale + 10 % Extra-Gutschein an der Kasse"). Viele Kunden glauben fälschlicherweise, das ergäbe 30 % Rabatt.\n\nIn der Praxis wird der zweite Rabatt jedoch fast immer auf den bereits reduzierten Zwischenpreis angewendet:\nEin Artikel für 100 € wird um 20 % reduziert auf 80 €. Die weiteren 10 % beziehen sich nun auf die 80 € (10 % von 80 € = 8 € Nachlass). Der Endpreis beträgt 72 €.\nDas entspricht einem Gesamtrabatt von 28 %, nicht 30 %!',
        callout: 'Tipp bei Aktionscodes: Kaskadierende Rabatte immer nacheinander multiplizieren (0,80 × 0,90 = 0,72 = 28 % Gesamtrabatt).'
      }
    ],
    table: {
      title: 'Rabatt-Preistabelle: Gängige Reduzierungen im Überblick',
      headers: ['Originalpreis', '10 % Rabatt', '20 % Rabatt', '30 % Rabatt', '50 % Rabatt'],
      rows: [
        ['20,00 €', '18,00 € (spart 2 €)', '16,00 € (spart 4 €)', '14,00 € (spart 6 €)', '10,00 € (spart 10 €)'],
        ['50,00 €', '45,00 € (spart 5 €)', '40,00 € (spart 10 €)', '35,00 € (spart 15 €)', '25,00 € (spart 25 €)'],
        ['100,00 €', '90,00 € (spart 10 €)', '80,00 € (spart 20 €)', '70,00 € (spart 30 €)', '50,00 € (spart 50 €)'],
        ['150,00 €', '135,00 € (spart 15 €)', '120,00 € (spart 30 €)', '105,00 € (spart 45 €)', '75,00 € (spart 75 €)'],
        ['200,00 €', '180,00 € (spart 20 €)', '160,00 € (spart 40 €)', '140,00 € (spart 60 €)', '100,00 € (spart 100 €)']
      ]
    },
    useCases: [
      {
        title: 'Mode & Bekleidung im Schlussverkauf',
        description: 'Schnelle Kontrolle des Kassenpreises bei roten Prozentaufklebern in Modegeschäften.',
        example: 'Wintermantel für 160 € mit 35 % Rabatt = 56 € gespart, Endpreis 104,00 €'
      },
      {
        title: 'Möbel- & Elektronik-Aktionen',
        description: 'Berechnung großer Anschaffungen bei Mehrwertsteuer-geschenkt-Aktionen oder Jubiläumsrabatten.',
        example: 'Fernseher für 899 € mit 15 % Rabattcode = 134,85 € Ersparnis (Zahlpreis: 764,15 €)'
      },
      {
        title: 'Staffel- & Mengenrabatt im B2B-Einkauf',
        description: 'Ermittlung des Stückpreises bei Abnahme größerer Stückzahlen im Großhandel.',
        example: 'Büromaterial für 500 € bei 12 % Mengenrabatt = 60,00 € Ersparnis'
      }
    ],
    mistakes: [
      {
        mistake: 'Mehrere Rabattstufen einfach zusammenzählen',
        correction: 'Zwei aufeinanderfolgende Rabatte von je 20 % ergeben 36 % Gesamtrabatt (0,8 × 0,8 = 0,64), niemals 40 %.'
      },
      {
        mistake: 'Rabattbetrag und Endpreis verwechseln',
        correction: 'Achten Sie darauf, ob Sie wissen möchten, was Sie sparen (Ersparnis) oder was Sie noch bezahlen müssen (Endpreis).'
      }
    ],
    tips: [
      '20 % Rabatt Trick: Multiplizieren Sie den Preis einfach mit 0,80.',
      '30 % Rabatt Trick: Multiplizieren Sie den Preis mit 0,70.',
      '15 % Trinkgeld oder Rabatt: 10 % berechnen, die Hälfte dazu addieren.'
    ],
    examples: [
      {
        title: '20 % Rabatt auf eine 100 € Jacke',
        scenario: 'Eine Marken-Winterjacke für 100 € UVP ist im Sale um 20 % reduziert.',
        solution: '100 € × (1 − 0,20) = 80,00 € Endpreis (Ersparnis: 20,00 €)'
      },
      {
        title: '30 % Nachlass auf 150 € Laufschuhe',
        scenario: 'Sportschuhe für 150 € werden im Angebot mit 30 % Nachlass beworben.',
        solution: '150 € × (1 − 0,30) = 105,00 € Endpreis (Ersparnis: 45,00 €)'
      },
      {
        title: '40 % Sonderabverkauf auf 220 € Gartenmöbel',
        scenario: 'Ein Gartentisch für regulär 220 € wird zum Saisonende um 40 % herabgesetzt.',
        solution: '220 € × (1 − 0,40) = 132,00 € Endpreis (Ersparnis: 88,00 €)'
      }
    ],
    faqs: [
      {
        q: 'Wie berechnet man Rabatte schnell im Kopf?',
        a: 'Rechnen Sie 10 % des Preises aus (Komma um eine Stelle nach links) und multiplizieren Sie das Ergebnis mit der ersten Ziffer des Rabatts (z. B. bei 30 % mit 3). Ziehen Sie diesen Betrag vom Originalpreis ab.'
      },
      {
        q: 'Wie lautet die mathematische Formel für den Rabatt?',
        a: 'Endpreis = Originalpreis − (Originalpreis × Rabattsatz ÷ 100) bzw. kürzer: Endpreis = Originalpreis × (1 − Rabatt ÷ 100).'
      },
      {
        q: 'Was spart man bei 20 Prozent Rabatt auf 100 Euro?',
        a: 'Bei 20 % auf 100 € spart man genau 20,00 € und bezahlt an der Kasse noch 80,00 €.'
      },
      {
        q: 'Wie rechnet man zwei aufeinanderfolgende Rabatte zusammen?',
        a: 'Multiplizieren Sie die Restfaktoren. Bei 20 % Rabatt und weiteren 10 % Zusatzrabatt rechnen Sie: 0,80 × 0,90 = 0,72. Sie zahlen 72 % des Ursprungspreises, die Gesamtersparnis beträgt 28 %.'
      }
    ],
    component: DiscountCalculatorTool
  },
  {
    id: 'percentage-to-decimal',
    name: 'Prozent in Dezimalzahl Rechner',
    shortName: 'Prozent in Dezimal',
    slug: 'prozent-in-dezimal',
    aliases: ['/percentage-to-decimal', '/prozent-in-dezimalzahl', '/percent-to-decimal', '/prozent-in-kommazahl'],
    category: 'Grundlagen',
    badge: '% in Dezimal',
    icon: Binary,
    description: 'Wandeln Sie Prozentwerte sofort in Dezimalzahlen und vereinfachte Brüche um.',
    seoTitle: 'Prozent in Dezimalzahl Rechner – Prozente in Kommazahlen umrechnen',
    metaDescription: 'Prozentsatz in Dezimalzahl umrechnen: 25% = 0,25. Mit einfacher Regel (Komma 2 Stellen nach links), Erklärung und Umrechnungstabelle.',
    keywords: 'prozent in dezimalzahl, prozent in dezimal umrechnen, prozent zu kommazahl, 15 prozent als dezimalzahl, prozent in bruch',
    guideTitle: 'Prozent in Dezimalzahl umwandeln: Die goldene Komma-Regel',
    guideText: 'Um mit Prozentangaben in Berechnungen, Programmiersprachen oder Tabellenkalkulationen wie Microsoft Excel und Google Sheets zu rechnen, muss man sie in Dezimalzahlen (Kommazahlen) umwandeln.\n\nDie mathematische Regel ist denkbar einfach: Teilen Sie die Prozentzahl durch 100 bzw. verschieben Sie das Komma um genau zwei Stellen nach links. Aus 25 % wird 0,25, aus 19 % wird 0,19 und aus 7,5 % wird 0,075. Unser Rechner liefert Ihnen die exakte Dezimalzahl, den gekürzten Bruch und die wissenschaftliche Notation.',
    formula: 'Dezimalzahl = Prozentsatz ÷ 100',
    formulaExplanation: 'Ein Prozent ist wörtlich ein Hundertstel (1 % = 1/100 = 0,01)',
    howItWorks: [
      'Entfernen Sie das Prozentzeichen (%).',
      'Verschieben Sie das Komma um 2 Stellen nach links (dies entspricht einer Division durch 100).',
      'Füllen Sie bei einstelligen Zahlen leere Stellen mit Nullen auf (z. B. aus 5 % wird 0,05).'
    ],
    sections: [
      {
        title: 'Die goldene Komma-Regel im Detail',
        text: 'Warum verschiebt sich das Komma um genau zwei Stellen?\n\nDa "Prozent" aus dem Lateinischen "per centum" (pro Hundert) stammt, entspricht jede Prozentangabe einem Bruch mit dem Nenner 100. Das Teilen einer Zahl durch 100 bewirkt im Zehnersystem eine Verschiebung jeder Ziffer um zwei Stellen nach rechts bzw. des Kommas um zwei Stellen nach links:\n\n• 45,0 % → 0,45\n• 8,5 % → 0,085\n• 150,0 % → 1,50',
        bullets: [
          'Große Zahlen (> 100 %): 200 % = 2,0 | 350 % = 3,5.',
          'Zweistellige Zahlen (10 % bis 99 %): 25 % = 0,25 | 70 % = 0,70.',
          'Einstellige Zahlen (1 % bis 9 %): 3 % = 0,03 | 9 % = 0,09.',
          'Kommastellen (< 1 %): 0,5 % = 0,005 | 0,25 % = 0,0025.'
        ]
      },
      {
        title: 'Einsatz in Excel und Formeln',
        text: 'In Tabellenkalkulationen wie Excel formatiert die Schaltfläche "%" eine Zelle optisch. Intern rechnet Excel jedoch immer mit der Dezimalzahl. Wenn Sie in einer Formel "=A1*19%" schreiben, multipliziert Excel im Hintergrund automatisch mit 0,19.'
      }
    ],
    table: {
      title: 'Umrechnungstabelle: Prozente, Dezimalzahlen und Brüche',
      headers: ['Prozentsatz (%)', 'Dezimalzahl', 'Bruchform', 'Bedeutung'],
      rows: [
        ['1 %', '0,01', '1/100', 'Ein Hundertstel'],
        ['5 %', '0,05', '1/20', 'Ein Zwanzigstel'],
        ['10 %', '0,10', '1/10', 'Ein Zehntel'],
        ['19 %', '0,19', '19/100', 'Deutscher MwSt-Regelsatz'],
        ['25 %', '0,25', '1/4', 'Ein Viertel'],
        ['50 %', '0,50', '1/2', 'Die Hälfte'],
        ['75 %', '0,75', '3/4', 'Drei Viertel'],
        ['100 %', '1,00', '1/1', 'Das Ganze (100 %)'],
        ['150 %', '1,50', '3/2', 'Das Anderthalbfache']
      ]
    },
    useCases: [
      {
        title: 'Tabellenkalkulation in Excel & Google Sheets',
        description: 'Erstellen von Finanzformeln und Makros, die Dezimalfaktoren statt Prozentangaben voraussetzen.',
        example: 'Bruttoberechnung in Zelle B2: =B1*1,19'
      },
      {
        title: 'Zinsrechnung & Bankwesen',
        description: 'Einsetzen des Zinssatzes in die klassische Zinsformel (Z = K × p × t) als Dezimalzahl.',
        example: '3,5 % Festgeldzins auf 10.000 €: Zinsen = 10.000 € × 0,035 = 350,00 € pro Jahr'
      },
      {
        title: 'Physik, Chemie & Naturwissenschaften',
        description: 'Umrechnen von Massenanteilen und Stoffmengenanteilen in Berechnungsfaktoren für Laborprotokolle.',
        example: '0,9 % Kochsalzlösung = 0,009 Massenanteil NaCl'
      }
    ],
    mistakes: [
      {
        mistake: '5 % als 0,5 schreiben',
        correction: 'Achtung! 0,5 entspricht 50 %! 5 % entspricht 0,05 (zwei Stellen nach links).'
      },
      {
        mistake: 'Das Komma bei Werten über 100 % falsch setzen',
        correction: '120 % entspricht 1,20 (nicht 0,12). Bei Zahlen über 100 steht vor dem Komma mindestens eine 1.'
      }
    ],
    tips: [
      'Merkhilfe: Zählen Sie im Kopf "1 Stelle, 2 Stellen" nach links und setzen Sie dort das Komma.',
      'Umgekehrt von Dezimal zu Prozent: Komma einfach 2 Stellen nach rechts verschieben (0,15 = 15 %).',
      'Schnellcheck: 0,1 ist immer 10 %, 0,01 ist immer 1 %.'
    ],
    examples: [
      {
        title: '25 % in Dezimalzahl umwandeln',
        scenario: 'Wandeln Sie 25 % in eine Dezimalzahl für eine Excel-Kalkulation um.',
        solution: '25 ÷ 100 = 0,25 (entspricht dem Bruch 1/4)'
      },
      {
        title: '7,5 % Zinssatz in Dezimalzahl umwandeln',
        scenario: 'Drücken Sie einen Kreditzins von 7,5 % als Dezimalfaktor aus.',
        solution: '7,5 ÷ 100 = 0,075 (zwei Stellen nach links)'
      },
      {
        title: '175 % Übererfüllung in Dezimalzahl umwandeln',
        scenario: 'Ein Projektziel wurde zu 175 % erreicht. Wie lautet der Multiplikator?',
        solution: '175 ÷ 100 = 1,75'
      }
    ],
    faqs: [
      {
        q: 'Wie wird ein Prozentsatz zur Dezimalzahl?',
        a: 'Teilen Sie die Prozentzahl durch 100 oder verschieben Sie das Komma um zwei Stellen nach links. Beispiel: 42 % = 0,42.'
      },
      {
        q: 'Was ist 5 % als Dezimalzahl?',
        a: '5 % als Dezimalzahl ist 0,05 (nicht 0,5, denn 0,5 entspricht 50 %).'
      },
      {
        q: 'Wie wandelt man eine Dezimalzahl zurück in Prozent um?',
        a: 'Multiplizieren Sie die Dezimalzahl mit 100 oder verschieben Sie das Komma um zwei Stellen nach rechts. Beispiel: 0,85 × 100 = 85 %.'
      },
      {
        q: 'Was ist 0,005 in Prozent?',
        a: '0,005 mit 100 multipliziert ergibt genau 0,5 % (ein halbes Prozent).'
      }
    ],
    component: PercentageToDecimalCalculator
  },
  {
    id: 'rule-of-three',
    name: 'Dreisatz Rechner Prozent',
    shortName: 'Dreisatz Rechner',
    slug: 'dreisatz-prozentrechner',
    aliases: ['/rule-of-three-percentage-calculator', '/dreisatz-rechner', '/dreisatz-prozent', '/rule-of-three'],
    category: 'Mathematik & Dreisatz',
    badge: 'Dreisatz',
    icon: Scale,
    description: 'Lösen Sie proportionale Prozentaufgaben mit der klassischen 3-Schritt-Dreisatz-Methode.',
    seoTitle: 'Dreisatz Rechner Prozent – Dreisatz online einfach berechnen',
    metaDescription: 'Dreisatz bei der Prozentrechnung einfach lösen: Schritt-für-Schritt-Methode für proportionale Zuordnungen mit Erklärung, Zwischenwerten und Formel.',
    keywords: 'dreisatz rechner prozent, dreisatz prozentrechnung, dreisatz aufgaben online lösen, dreisatz formel, dreisatz schritt für schritt',
    guideTitle: 'Dreisatz Rechner Prozent: Schritt für Schritt zum Ziel',
    guideText: 'Der Dreisatz ist das beliebteste und intuitivste mathematische Werkzeug für Schüler, Auszubildende, Handwerker und Kaufleute.\n\nBei der Prozentrechnung verbindet der proportionale Dreisatz drei bekannte Größen logisch miteinander, um die vierte unbekannte Größe fehlerfrei zu ermitteln:\n1. Satz: Das bekannte Ausgangsverhältnis feststellen (z. B. 200 Stück = 100 %).\n2. Satz: Auf die einzelne Einheit (1 Stück oder 1 %) herunterteilen.\n3. Satz: Auf die gesuchte Zielgröße hochmultiplizieren.\nUnser interaktiver Rechner zeigt Ihnen alle 3 Rechensätze vollständig auf!',
    formula: 'Gesuchter Wert X = (B × C) ÷ A',
    formulaExplanation: 'A = Ausgangswert | B = Ausgangs-% | C = Zielwert oder Ziel-%',
    howItWorks: [
      'Satz 1 (Ausgangsverhältnis): Bestimmen Sie, welcher Wert welcher Prozentzahl entspricht (z. B. 240 € = 100 %).',
      'Satz 2 (Zwischenschritt auf 1): Teilen Sie beide Seiten durch den Ausgangswert, um den Wert von 1 % oder 1 Einheit zu ermitteln.',
      'Satz 3 (Zielgröße berechnen): Multiplizieren Sie das Zwischenergebnis mit der gesuchten Zielgröße.'
    ],
    sections: [
      {
        title: 'Die 3 Sätze im Detail an einem Beispiel',
        text: 'Aufgabe: Ein Händler verkauft 40 von insgesamt 200 Artikeln. Wie viel Prozent sind das?\n\n• 1. Satz: 200 Artikel entsprechen 100 %\n• 2. Satz (teilen durch 200): 1 Artikel entspricht 100 % ÷ 200 = 0,5 %\n• 3. Satz (malnehmen mit 40): 40 Artikel entsprechen 0,5 % × 40 = 20 %\n\nErgebnis: 40 Artikel entsprechen genau 20 %.\n\nDer Dreisatz hat den riesigen Vorteil, dass man keine komplizierten Formeln auswendig lernen muss, sondern logisch Schritt für Schritt vorgehen kann.',
        bullets: [
          'Auf einer Seite teilen, auf der anderen Seite genauso teilen (Proportionalität).',
          'Auf einer Seite multiplizieren, auf der anderen Seite genauso multiplizieren.',
          'Gleiche Einheiten immer ordentlich untereinanderschreiben.'
        ]
      },
      {
        title: 'Proportionaler vs. Antiproportionaler Dreisatz',
        text: 'Bei der Prozentrechnung liegt ausnahmslos ein proportionaler Dreisatz vor: Mehr Prozent bedeutet immer mehr Wert ("Je mehr, desto mehr"). Ein antiproportionaler Dreisatz ("Je mehr Arbeiter, desto weniger Tage") kommt bei der klassischen Prozentrechnung nicht vor.'
      }
    ],
    table: {
      title: 'Dreisatz-Matrix: Die beiden typischen Fragestellungen',
      headers: ['Fragestellung', 'Satz 1 (Basis)', 'Satz 2 (auf 1 Einheit)', 'Satz 3 (Ergebnis)'],
      rows: [
        ['Gesucht: Prozentwert W (z. B. 25 % von 200 €)', '100 % = 200 €', '1 % = 200 € ÷ 100 = 2,00 €', '25 % = 2,00 € × 25 = 50,00 €'],
        ['Gesucht: Prozentsatz p (z. B. 50 € von 200 €)', '200 € = 100 %', '1 € = 100 % ÷ 200 = 0,5 %', '50 € = 0,5 % × 50 = 25,00 %'],
        ['Gesucht: Grundwert G (z. B. 30 € sind 15 %)', '15 % = 30 €', '1 % = 30 € ÷ 15 = 2,00 €', '100 % = 2,00 € × 100 = 200,00 €']
      ]
    },
    useCases: [
      {
        title: 'IHK-Prüfungen & kaufmännische Ausbildung',
        description: 'Klassische Prüfungsaufgaben im Groß- und Außenhandel, Einzelhandel oder bei Industriekaufleuten.',
        example: 'Wenn 60 Einheiten Ausschuss 4 % der Produktion entsprechen, wie hoch ist die Gesamtproduktion? (60 ÷ 4 × 100 = 1.500 Einheiten)'
      },
      {
        title: 'Rezeptmengen & Dosierungen',
        description: 'Umrechnen von Zutatenmengen bei veränderter Personenanzahl oder prozentualer Teigmischung.',
        example: '500 g Mehl entsprechen 100 %, für 70 % Wasserzugabe benötigt man 350 g Wasser'
      },
      {
        title: 'Handwerk & Baustelle',
        description: 'Kalkulation von Materialverlusten, Mischungsverhältnissen und Verschnitt auf der Baustelle.',
        example: '12 m² Fliesenverschnitt entsprechen 8 % = Gesamtbedarf 150 m²'
      }
    ],
    mistakes: [
      {
        mistake: 'Einheiten auf den falschen Seiten notieren',
        correction: 'Schreiben Sie links immer dieselbe Einheit (z. B. Euro) und rechts die Prozente (oder umgekehrt). Kreuzen Sie die Seiten niemals unbedacht.'
      },
      {
        mistake: 'Im 2. Schritt multiplizieren statt dividieren',
        correction: 'Um auf 1 herunterzukommen, muss immer dividiert werden. Erst im 3. Schritt wird auf das Ziel hochmultipliziert.'
      }
    ],
    tips: [
      'Notieren Sie sich immer die Tabelle mit zwei Spalten: Spalte 1 = Wert, Spalte 2 = Prozent.',
      'Suchen Sie die Seite, auf der zwei Werte bekannt sind: Auf dieser Seite rechnen Sie zuerst auf 1 herunter.',
      'Schnellrechnung: Multiplizieren Sie die beiden Werte, die sich diagonal gegenüberstehen, und teilen Sie durch den dritten Wert.'
    ],
    examples: [
      {
        title: '200 Einheiten entsprechen 100 %, gesucht sind 50',
        scenario: 'Wie viel Prozent sind 50 von 200 Einheiten?',
        solution: 'Satz 1: 200 = 100 % | Satz 2: 1 = 0,5 % | Satz 3: 50 = 0,5 % × 50 = 25,00 %'
      },
      {
        title: '100 % sind 150 €, gesucht sind 30 %',
        scenario: 'Ermitteln Sie den Euro-Wert von 30 %, wenn 100 % genau 150 € entsprechen.',
        solution: 'Satz 1: 100 % = 150 € | Satz 2: 1 % = 1,50 € | Satz 3: 30 % = 1,50 € × 30 = 45,00 €'
      },
      {
        title: '15 % entsprechen 45 €, gesucht ist der 100 % Grundwert',
        scenario: 'Ein Rabatt von 15 % entsprach genau 45 €. Was war der volle 100 % Grundpreis?',
        solution: 'Satz 1: 15 % = 45 € | Satz 2: 1 % = 45 € ÷ 15 = 3,00 € | Satz 3: 100 % = 3,00 € × 100 = 300,00 €'
      }
    ],
    faqs: [
      {
        q: 'Was ist der Dreisatz bei der Prozentrechnung?',
        a: 'Ein Dreisatz ist ein dreistufiger logischer Rechenweg, der proportionale Aufgaben über den Zwischenschritt einer einzelnen Einheit (1 % oder 1 Stück) löst.'
      },
      {
        q: 'Wie lautet die Dreisatz-Formel?',
        a: 'Die Kurzformel lautet: Gesuchter Wert X = (Diagonale Zahl 1 × Diagonale Zahl 2) ÷ Gegenüberliegende Zahl.'
      },
      {
        q: 'Warum heißt der Dreisatz eigentlich Dreisatz?',
        a: 'Weil die Berechnung aus genau drei logischen Textzeilen bzw. mathematischen Sätzen besteht (1. Ausgangsverhältnis, 2. Schritt auf 1, 3. Hochrechnen auf das Ziel).'
      },
      {
        q: 'Ist Prozentrechnen immer ein proportionaler Dreisatz?',
        a: 'Ja. In der Prozentrechnung gilt immer: Verdoppelt sich der Prozentsatz, verdoppelt sich auch der Wert. Es ist immer ein proportionaler Zusammenhang.'
      }
    ],
    component: RuleOfThreePercentageCalculator
  },
  {
    id: 'price-percentage',
    name: 'Preis Prozent Rechner',
    shortName: 'Preis & %',
    slug: 'preis-prozentrechner',
    aliases: ['/price-percentage-calculator', '/preisrechner-prozent', '/price-calculator', '/price-percentage'],
    category: 'Finanzen & Praxis',
    badge: 'Preis & %',
    icon: Tag,
    description: 'Berechnen Sie Rabatte, Preiserhöhungen, Steueraufschläge und Preisvergleiche auf einen Blick.',
    seoTitle: 'Preis Prozent Rechner – Preise mit Prozenten kalkulieren',
    metaDescription: 'Preise mit Prozenten kalkulieren: Rabatte abziehen, Preisaufschläge berechnen oder zwei Preise prozentual vergleichen. Sofort online rechnen.',
    keywords: 'preis prozent rechner, preisaufschlag berechnen, preise vergleichen prozent, prozentualer preisunterschied, brutto preis kalkulieren',
    guideTitle: 'Preis Prozent Rechner: Preise, Rabatte & Aufschläge im Überblick',
    guideText: 'Der Preis Prozent Rechner ist das Schweizer Taschenmesser für alle Preiskalkulationen im Handel, Handwerk und Alltag.\n\nEgal ob Sie einen Rabatt von einem Verkaufspreis abziehen, eine Gewinnmarge oder Mehrwertsteuer aufschlagen oder zwei konkurrierende Angebote prozentual miteinander vergleichen möchten: Dieses universelle Tool vereint alle Preisberechnungen in einer übersichtlichen Oberfläche.',
    formula: 'Endpreis = Originalpreis ± (Originalpreis × p ÷ 100)',
    formulaExplanation: '+ bei Preiserhöhung / Aufschlag / MwSt | − bei Rabatt / Skonto / Nachlass',
    howItWorks: [
      'Geben Sie den ursprünglichen Preis in Euro ein.',
      'Tragen Sie den gewünschten Prozentsatz ein und wählen Sie, ob ein Rabatt (−) abgezogen oder ein Aufschlag (+) addiert werden soll.',
      'Alternativ können Sie im Vergleichsmodus zwei Preise eingeben, um den relativen Preisunterschied sofort zu sehen.'
    ],
    sections: [
      {
        title: 'Handelsspanne (Marge) vs. Kalkulationsaufschlag',
        text: 'Ein klassischer Unterschied in der kaufmännischen Preiskalkulation:\n\n• Kalkulationsaufschlag (Markup): Bezieht sich auf den Einkaufspreis. Kostet ein Artikel im Einkauf 100 € und Sie schlagen 25 % auf, verkaufen Sie ihn für 125 € (Aufschlag = 25 €).\n• Handelsspanne / Marge (Margin): Bezieht sich auf den Verkaufspreis. Bei einem Verkaufspreis von 125 € und 25 € Gewinn beträgt die Marge: (25 € ÷ 125 €) × 100 % = 20,00 %!\n\nVerwechseln Sie Marge und Aufschlag niemals: Ein Aufschlag von 25 % entspricht einer Marge von genau 20 %.',
        bullets: [
          'Aufschlag % = (Gewinn ÷ Einkaufspreis) × 100 %',
          'Handelsspanne % = (Gewinn ÷ Verkaufspreis) × 100 %',
          'Marge ist rechnerisch immer kleiner als der Aufschlag!'
        ]
      },
      {
        title: 'Preisvergleich im Supermarkt: Wer ist wirklich günstiger?',
        text: 'Oft locken Sondergrößen mit unterschiedlichen Preisen (z. B. 400 g Packung für 2,40 € vs. 500 g Packung für 2,80 €). Durch Umrechnung auf den Grundpreis (z. B. je 100 g oder je Kilogramm) und den anschließenden prozentualen Preisvergleich ermitteln Sie die reale Preisdifferenz.'
      }
    ],
    table: {
      title: 'Kalkulationstabelle: Einkaufspreis, Aufschlag, Verkaufspreis & Marge',
      headers: ['Einkaufspreis Netto', 'Aufschlag (+%)', 'Verkaufspreis Netto', 'Reingewinn', 'Effektive Marge (%)'],
      rows: [
        ['50,00 €', '+20,00 %', '60,00 €', '10,00 €', '16,67 %'],
        ['50,00 €', '+25,00 %', '62,50 €', '12,50 €', '20,00 %'],
        ['100,00 €', '+30,00 %', '130,00 €', '30,00 €', '23,08 %'],
        ['100,00 €', '+50,00 %', '150,00 €', '50,00 €', '33,33 %'],
        ['100,00 €', '+100,00 %', '200,00 €', '100,00 €', '50,00 %']
      ]
    },
    useCases: [
      {
        title: 'Preiskalkulation für Handwerker & Dienstleister',
        description: 'Kalkulation von Materialaufschlägen und Stundensätzen zur Angebotserstellung.',
        example: 'Materialeinkauf für 120 € Netto mit 25 % Materialaufschlag = 150,00 € Netto-Kundenpreis'
      },
      {
        title: 'Preisvergleich zweier Online-Angebote',
        description: 'Ermittlung des prozentualen Preisunterschieds zwischen zwei konkurrierenden Shops.',
        example: 'Shop A verlangt 80 €, Shop B verlangt 100 € = Shop B ist 25 % teurer als Shop A'
      },
      {
        title: 'Gastronomie & Speisekarten-Kalkulation',
        description: 'Berechnung des Brutto-Verkaufspreises aus Wareneinsatz, Personalkostenzuschlag und 19 % bzw. 7 % Mehrwertsteuer.',
        example: 'Wareneinsatz 4,00 € × Faktor 3,5 = 14,00 € Speisekartenpreis'
      }
    ],
    mistakes: [
      {
        mistake: 'Marge (Handelsspanne) und Aufschlag gleichsetzen',
        correction: 'Wenn Sie 50 % Marge erzielen wollen, müssen Sie den Einkaufspreis verdoppeln (+100 % Aufschlag!). Wer nur 50 % aufschlägt, erzielt lediglich 33,3 % Marge.'
      },
      {
        mistake: 'Preisvergleich ohne gemeinsame Bezugsgröße durchführen',
        correction: 'Vergleichen Sie immer dieselbe Einheit (z. B. Kilopreis zu Kilopreis oder Literpreis zu Literpreis).'
      }
    ],
    tips: [
      'Schnellaufschlag im Kopf: Bei 20 % Aufschlag einfach mit 1,20 multiplizieren.',
      'Schnellrabatt im Kopf: Bei 20 % Rabatt einfach mit 0,80 multiplizieren.',
      'Verdopplung des Einkaufspreises entspricht genau 100 % Aufschlag und 50 % Marge.'
    ],
    examples: [
      {
        title: '20 % Rabatt auf einen 100 € Artikel',
        scenario: 'Berechnen Sie den reduzierten Sonderpreis mit 20 % Nachlass auf 100 €.',
        solution: '100 € − (100 € × 0,20) = 80,00 € Endpreis (Ersparnis: 20,00 €)'
      },
      {
        title: '19 % Steueraufschlag auf 250 € Netto',
        scenario: 'Kalkulieren Sie 250 € Nettopreis mit 19 % gesetzlichem Mehrwertsteueraufschlag.',
        solution: '250 € + (250 € × 0,19) = 297,50 € Brutto-Endpreis (Aufschlag: 47,50 €)'
      },
      {
        title: 'Preisvergleich zweier Produkte (Old: 80 €, New: 100 €)',
        scenario: 'Ein Produkt kostete früher 80 € und heute 100 €. Wie hoch ist die prozentuale Teuerung?',
        solution: '((100 € − 80 €) ÷ 80 €) × 100 % = (20 ÷ 80) × 100 % = +25,00 % Preissteigerung'
      }
    ],
    faqs: [
      {
        q: 'Wie berechnet man prozentuale Preisaufschläge?',
        a: 'Multiplizieren Sie den Ausgangspreis mit dem Prozentsatz geteilt durch 100 und addieren Sie den ermittelten Betrag zum Ausgangspreis. Beispiel: 100 € + 20 % = 100 € × 1,20 = 120,00 €.'
      },
      {
        q: 'Was ist der Unterschied zwischen Marge und Kalkulationsaufschlag?',
        a: 'Der Kalkulationsaufschlag bezieht sich auf den Einkaufspreis (Einkauf 100 € + 25 % = 125 €). Die Marge bezieht sich auf den Verkaufspreis (25 € Gewinn bei 125 € Verkauf = 20 % Marge).'
      },
      {
        q: 'Wie vergleicht man zwei Preise prozentual miteinander?',
        a: 'Teilen Sie die Preisdifferenz durch den ursprünglichen Vergleichspreis und multiplizieren Sie mit 100. Kostet etwas 100 € statt 80 €, rechnet man (20 ÷ 80) × 100 = 25 % teurer.'
      },
      {
        q: 'Wie zieht man Rabatt und Mehrwertsteuer zusammen ab?',
        a: 'Zuerst wird der Rabatt auf den Preis gewährt und anschließend auf den reduzierten Nettobetrag die Mehrwertsteuer aufgeschlagen.'
      }
    ],
    component: PricePercentageCalculator
  }
];

export function getCalculatorBySlug(slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().replace(/^\//, '');
  return calculatorsConfig.find(
    c => c.slug.toLowerCase() === clean || c.aliases.some(a => a.replace(/^\//, '').toLowerCase() === clean)
  );
}
