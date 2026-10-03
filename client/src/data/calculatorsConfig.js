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
    description: 'Berechnen Sie den genauen Prozentwert (Wie viel sind P % vom Grundwert?) in Echtzeit.',
    formula: 'W = (p ÷ 100) × G',
    howItWorks: [
      'Teilen Sie den Prozentsatz durch 100, um den Dezimalfaktor zu erhalten.',
      'Multiplizieren Sie den Dezimalfaktor mit dem Ausgangs-Grundwert.',
      'Formel: Prozentwert = (p ÷ 100) × Grundwert'
    ],
    examples: [
      {
        title: '20 % von 250 €',
        scenario: 'Berechnen Sie 20 % von einem Betrag von 250 €.',
        solution: '(20 ÷ 100) × 250 € = 0,20 × 250 € = 50,00 €'
      },
      {
        title: '15 % von 80 €',
        scenario: 'Ermitteln Sie 15 % Trinkgeld auf eine 80 € Rechnung.',
        solution: '(15 ÷ 100) × 80 € = 12,00 €'
      }
    ],
    faqs: [
      {
        q: 'Wie berechnet man den Prozentwert?',
        a: 'Teilen Sie den Prozentsatz durch 100 und multiplizieren Sie das Ergebnis mit dem Ausgangswert (Grundwert).'
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
    formula: 'p = (W ÷ G) × 100 %',
    howItWorks: [
      'Teilen Sie den Teilwert (Prozentwert) durch den gesamten Grundwert.',
      'Multiplizieren Sie mit 100, um den Anteil als Prozentsatz darzustellen.'
    ],
    examples: [
      {
        title: '36 von 40 Punkten',
        scenario: 'Sie haben in einer Prüfung 36 von 40 Fragen richtig beantwortet.',
        solution: '(36 ÷ 40) × 100 % = 90,00 %'
      }
    ],
    faqs: [
      {
        q: 'Kann ein Prozentsatz über 100 % liegen?',
        a: 'Ja, wenn der Teilwert größer als der Ausgangswert ist (z. B. 150 von 100 = 150 %).'
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
    formula: 'Steigerung % = ((Endwert − Startwert) ÷ |Startwert|) × 100 %',
    howItWorks: [
      'Ziehen Sie den Startwert vom Endwert ab, um die absolute Zunahme zu ermitteln.',
      'Teilen Sie die Zunahme durch den Startwert und multiplizieren Sie mit 100.'
    ],
    examples: [
      {
        title: 'Preisanstieg von 50 € auf 75 €',
        scenario: 'Ein Produktpreis steigt von 50 € auf 75 €.',
        solution: '((75 € − 50 €) ÷ 50 €) × 100 % = +50,00 % Steigerung'
      }
    ],
    faqs: [
      {
        q: 'Warum darf der Startwert nicht null sein?',
        a: 'Weil die Division durch null mathematisch nicht definiert ist.'
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
    formula: 'Senkung % = ((Startwert − Endwert) ÷ Startwert) × 100 %',
    howItWorks: [
      'Ziehen Sie den Endwert vom Startwert ab, um den absoluten Rückgang zu ermitteln.',
      'Teilen Sie den Rückgang durch den Startwert und multiplizieren Sie mit 100.'
    ],
    examples: [
      {
        title: 'Preissenkung von 100 € auf 75 €',
        scenario: 'Ein Artikel wird von 100 € auf 75 € reduziert.',
        solution: '((100 € − 75 €) ÷ 100 €) × 100 % = −25,00 % Reduzierung'
      }
    ],
    faqs: [
      {
        q: 'Was ist die maximale prozentuale Senkung?',
        a: 'Eine Senkung um 100 % reduziert einen positiven Ausgangswert auf genau null.'
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
    formula: 'Grundwert = Endwert ÷ (1 ± p ÷ 100) | G = (W × 100) ÷ p',
    howItWorks: [
      'Nach Rabatt: Teilen Sie den reduzierten Endpreis durch (1 − Rabatt % ÷ 100).',
      'Nach Erhöhung: Teilen Sie den Endpreis durch (1 + Erhöhung % ÷ 100).',
      'Aus Anteil: Multiplizieren Sie den Wert mit 100 und teilen Sie durch den Prozentsatz.'
    ],
    examples: [
      {
        title: '75 € nach 25 % Rabatt',
        scenario: 'Finden Sie den ursprünglichen Preis vor einem 25 % Rabatt bei 75 € Angebotspreis.',
        solution: '75 € ÷ (1 − 0,25) = 75 € ÷ 0,75 = 100 € (Ersparnis: 25 €)'
      },
      {
        title: '240 € nach 20 % Erhöhung',
        scenario: 'Finden Sie den ursprünglichen Preis vor einer 20 % Erhöhung bei 240 € Endpreis.',
        solution: '240 € ÷ (1 + 0,20) = 240 € ÷ 1,20 = 200 €'
      },
      {
        title: '40 € entsprechen 20 %',
        scenario: 'Ermitteln Sie den gesamten 100 % Grundwert, wenn 40 € genau 20 % entsprechen.',
        solution: '(40 € × 100) ÷ 20 = 4.000 ÷ 20 = 200 €'
      }
    ],
    faqs: [
      {
        q: 'Wie berechnet man Prozent rückwärts?',
        a: 'Bei Rabatten teilen Sie den reduzierten Preis durch (1 minus Rabattsatz / 100). Bei Erhöhungen teilen Sie durch (1 plus Erhöhungssatz / 100).'
      },
      {
        q: 'Warum darf man den Rabatt nicht einfach wieder dazurechnen?',
        a: 'Weil sich Rabatte auf den höheren Ausgangspreis beziehen. 20 % von 100 € sind 20 €, aber 20 % von 80 € sind nur 16 €.'
      }
    ],
    component: CalculatePercentageBackwards
  },
  {
    id: 'percentage-difference',
    name: 'Prozentuale Differenz Rechner',
    shortName: 'Prozentuale Differenz',
    slug: 'prozentuale-differenz',
    aliases: ['/percentage-difference', '/difference-calculator'],
    category: 'Statistik & Analyse',
    badge: 'Differenz (|Δ|%)',
    icon: RefreshCw,
    description: 'Vergleichen Sie zwei Werte relativ zu ihrem arithmetischen Mittelwert ohne Richtungspräferenz.',
    formula: 'Differenz % = (|A − B| ÷ ((A + B) ÷ 2)) × 100 %',
    howItWorks: [
      'Berechnen Sie die absolute Differenz: |A − B|.',
      'Berechnen Sie den Durchschnitt beider Zahlen: (A + B) ÷ 2.',
      'Teilen Sie die Differenz durch den Durchschnitt und multiplizieren Sie mit 100.'
    ],
    examples: [
      {
        title: 'Vergleich zweier Messwerte',
        scenario: 'Vergleichen Sie 80 Einheiten und 100 Einheiten.',
        solution: '|80 − 100| ÷ ((80 + 100) ÷ 2) = 20 ÷ 90 = 22,22 % Differenz'
      }
    ],
    faqs: [
      {
        q: 'Wann sollte man prozentuale Differenz statt prozentualer Veränderung nutzen?',
        a: 'Verwenden Sie die prozentuale Differenz, wenn keiner der beiden Werte als zeitlicher Ausgangspunkt festgelegt ist.'
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
    formula: 'Euro-Wert = (Prozentsatz ÷ 100) × Euro-Betrag',
    howItWorks: [
      'Teilen Sie den Prozentsatz durch 100, um den Dezimalfaktor zu erhalten.',
      'Multiplizieren Sie den Dezimalfaktor mit dem Euro-Betrag.',
      'Formel: Euro-Wert = (p ÷ 100) × Euro-Betrag'
    ],
    examples: [
      {
        title: '19 % von 100 €',
        scenario: 'Berechnen Sie 19 % Mehrwertsteuer von 100 €.',
        solution: '(19 ÷ 100) × 100 € = 19,00 €'
      },
      {
        title: '15 % Rabatt auf 80 €',
        scenario: 'Ermitteln Sie 15 % Ersparnis auf einen 80 € Einkauf.',
        solution: '(15 ÷ 100) × 80 € = 12,00 € (Endpreis: 68,00 €)'
      }
    ],
    faqs: [
      {
        q: 'Wie berechnet man den Prozentsatz eines Euro-Betrags?',
        a: 'Wandeln Sie die Prozentangabe durch Division durch 100 in eine Dezimalzahl um und multiplizieren Sie mit dem Geldbetrag.'
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
    formula: 'Prozentsatz (%) = (Zähler ÷ Nenner) × 100 %',
    howItWorks: [
      'Teilen Sie den Zähler durch den Nenner, um den Dezimalwert zu erhalten.',
      'Multiplizieren Sie mit 100, um den Prozentsatz zu erhalten.',
      'Formel: Prozent = (Zähler ÷ Nenner) × 100 %'
    ],
    examples: [
      {
        title: '3/4 in Prozent',
        scenario: 'Den Bruch 3/4 als Prozentsatz ausdrücken.',
        solution: '(3 ÷ 4) × 100 % = 0,75 × 100 % = 75 %'
      },
      {
        title: '1/3 in Prozent',
        scenario: 'Den Bruch 1/3 als Prozentwert berechnen.',
        solution: '(1 ÷ 3) × 100 % = 33,33 %'
      }
    ],
    faqs: [
      {
        q: 'Wie macht man aus einem Bruch Prozent?',
        a: 'Teilen Sie die obere Zahl (Zähler) durch die untere Zahl (Nenner) und multiplizieren Sie mit 100.'
      }
    ],
    component: FractionToPercentageCalculator
  },
  {
    id: 'gross-net-19',
    name: 'Brutto Netto Rechner 19 %',
    shortName: 'Brutto Netto 19%',
    slug: 'brutto-netto-rechner-19',
    aliases: ['/gross-net-calculator-19', '/brutto-netto-19', '/netto-brutto-19', '/19-mwst-rechner'],
    category: 'Steuern & Finanzen',
    badge: '19 % MwSt',
    icon: Receipt,
    description: 'Netto in Brutto oder Brutto in Netto mit dem regulären deutschen 19 % Mehrwertsteuersatz umrechnen.',
    formula: 'Brutto = Netto × 1,19 | Netto = Brutto ÷ 1,19',
    howItWorks: [
      'Netto zu Brutto: Nettobetrag mit 1,19 multiplizieren.',
      'Brutto zu Netto: Bruttobetrag durch 1,19 teilen.',
      '19 % Mehrwertsteuer = Brutto − Netto'
    ],
    examples: [
      {
        title: '19 % MwSt auf 100 € Netto',
        scenario: 'Rechnung über 100 € Netto zzgl. 19 % MwSt.',
        solution: '100 € × 1,19 = 119,00 € Brutto (19,00 € MwSt)'
      },
      {
        title: '19 % MwSt aus 119 € Brutto',
        scenario: 'Rechnungsbetrag über 119 € Brutto inklusive 19 % MwSt.',
        solution: '119 € ÷ 1,19 = 100,00 € Netto (19,00 € MwSt)'
      }
    ],
    faqs: [
      {
        q: 'Wie berechnet man 19 % Mehrwertsteuer aus Brutto heraus?',
        a: 'Teilen Sie den Bruttobetrag durch 1,19. Das Ergebnis ist der Nettopreis.'
      }
    ],
    component: GrossNet19Calculator
  },
  {
    id: 'discount-calculator',
    name: 'Prozent Rabatt Rechner',
    shortName: 'Rabattrechner',
    slug: 'rabatt-rechner',
    aliases: ['/percentage-discount-calculator', '/rabattrechner-tool', '/discount-calc'],
    category: 'Einkaufen & Handel',
    badge: 'Rabatt (-%)',
    icon: Tag,
    description: 'Ermitteln Sie reduzierte Angebotspreise, prozentuale Preisnachlässe und Ihre tatsächliche Ersparnis.',
    formula: 'Endpreis = Originalpreis − (Originalpreis × Rabatt % ÷ 100)',
    howItWorks: [
      'Rabattbetrag berechnen: Originalpreis × (Rabatt % ÷ 100).',
      'Rabattbetrag vom Originalpreis abziehen.',
      'Formel: Endpreis = Originalpreis × (1 − Rabatt % ÷ 100)'
    ],
    examples: [
      {
        title: '20 % Rabatt auf 100 €',
        scenario: 'Ein 100 € Artikel im Angebot mit 20 % Rabatt.',
        solution: '100 € − (100 € × 0,20) = 80,00 € (Gespart: 20,00 €)'
      },
      {
        title: '30 % Rabatt auf 150 €',
        scenario: 'Ein 150 € Artikel im Sale mit 30 % Rabatt.',
        solution: '150 € − (150 € × 0,30) = 105,00 € (Gespart: 45,00 €)'
      }
    ],
    faqs: [
      {
        q: 'Wie berechnet man 20 % Rabatt schnell im Kopf?',
        a: 'Multiplizieren Sie den Preis mit 0,80. Das Ergebnis ist direkt der reduzierte Endpreis.'
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
    formula: 'Dezimalzahl = Prozentsatz ÷ 100',
    howItWorks: [
      'Entfernen Sie das Prozentzeichen (%).',
      'Teilen Sie die Zahl durch 100 (Komma um zwei Stellen nach links verschieben).',
      'Formel: Dezimalzahl = Prozentsatz ÷ 100'
    ],
    examples: [
      {
        title: '25 % in Dezimalzahl umwandeln',
        scenario: 'Wandeln Sie reguläre 25 % in eine Dezimalzahl um.',
        solution: '25 % ÷ 100 = 0,25 (Bruch: 1/4)'
      },
      {
        title: '7,5 % in Dezimalzahl umwandeln',
        scenario: 'Wandeln Sie 7,5 % mit Kommastelle um.',
        solution: '7,5 % ÷ 100 = 0,075'
      }
    ],
    faqs: [
      {
        q: 'Wie wird ein Prozentsatz zur Dezimalzahl?',
        a: 'Teilen Sie die Zahl durch 100 oder verschieben Sie das Komma um zwei Stellen nach links.'
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
    formula: 'X = (B × C) ÷ A',
    howItWorks: [
      'Ausgangsproportion bestimmen: Wert A entspricht B %.',
      'Zwischenschritt: Auf 1 Einheit oder 1 % herunterrechnen.',
      'Auf die gesuchte Zielgröße hochrechnen.'
    ],
    examples: [
      {
        title: '200 sind 100 %, gesucht sind 50',
        scenario: 'Finden Sie heraus, wie viel Prozent 50 von 200 sind.',
        solution: '(100 % ÷ 200) × 50 = 0,5 % × 50 = 25 %'
      },
      {
        title: '100 % sind 150 €, gesucht sind 30 %',
        scenario: 'Ermitteln Sie den Euro-Wert von 30 %, wenn 100 % 150 € entsprechen.',
        solution: '(150 € ÷ 100) × 30 = 1,5 € × 30 = 45 €'
      }
    ],
    faqs: [
      {
        q: 'Was ist der Dreisatz bei der Prozentrechnung?',
        a: 'Der Dreisatz ist ein mathematisches Lösungsverfahren in drei Schritten: Ausgangsverhältnis erfassen, auf 1 Einheit herunterrechnen und auf den Zielwert multiplizieren.'
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
    formula: 'Endpreis = Originalpreis ± (Originalpreis × p ÷ 100)',
    howItWorks: [
      'Geben Sie Ihren Originalpreis und die prozentuale Anpassung ein.',
      'Wählen Sie, ob ein Rabatt (-%) abgezogen oder eine Preiserhöhung (+%) aufgeschlagen wird.',
      'Sehen Sie sofort Endpreis, Ersparnis/Aufschlag und den Rechenweg.'
    ],
    examples: [
      {
        title: '20 % Rabatt auf 100 €',
        scenario: 'Verkaufspreis mit 20 % Rabatt auf 100 € berechnen.',
        solution: '100 € − (100 € × 0,20) = 80,00 € (Gespart: 20,00 €)'
      },
      {
        title: '19 % MwSt auf 250 €',
        scenario: 'Endpreis mit 19 % Steueraufschlag auf 250 € berechnen.',
        solution: '250 € + (250 € × 0,19) = 297,50 € (Aufschlag: 47,50 €)'
      }
    ],
    faqs: [
      {
        q: 'Wie berechnet man den Prozentsatz von einem Preis?',
        a: 'Multiplizieren Sie den Preis mit dem Prozentsatz geteilt durch 100 und addieren oder subtrahieren Sie das Ergebnis.'
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
