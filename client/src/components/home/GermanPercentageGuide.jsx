import React from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Percent, 
  Euro, 
  Receipt, 
  Tag, 
  Divide, 
  Binary, 
  Scale, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Calculator
} from 'lucide-react';
import './GermanPercentageGuide.css';

export default function GermanPercentageGuide() {
  const scrollToTool = (toolId, e) => {
    e.preventDefault();
    const el = document.getElementById(toolId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `/#${toolId}`);
    }
  };

  return (
    <section className="gpg-section" id="prozent-ratgeber" aria-label="Prozent Rechner Online Ratgeber">
      <div className="gpg-container">
        {/* Header */}
        <div className="gpg-header">
          <div className="gpg-badge">
            <BookOpen size={14} aria-hidden="true" />
            <span>Ausführlicher Ratgeber & Formeln</span>
          </div>
          <h2 className="gpg-main-title">
            Prozent Rechner Online – Prozent einfach, schnell und richtig berechnen
          </h2>
          <p className="gpg-intro-lead">
            Ein Prozent Rechner Online hilft dabei, Prozentwerte schnell und ohne komplizierte Formeln zu berechnen. Ob Rabatt beim Einkaufen, Mehrwertsteuer auf einer Rechnung, Zinsen, Preisänderungen, Prüfungsergebnisse oder statistische Werte – Prozentrechnung begegnet uns im Alltag und im Berufsleben sehr häufig.
          </p>
          <p className="gpg-intro-lead">
            Mit einem Online-Prozentrechner lassen sich unterschiedliche Aufgaben lösen: Man kann beispielsweise berechnen, wie viel 20 % von 150 € sind, wie hoch ein Rabatt von 15 % auf einen bestimmten Preis ausfällt oder welcher Prozentsatz einer Gesamtmenge entspricht.
          </p>
          <p className="gpg-intro-lead">
            Die grundlegende Prozentrechnung basiert auf wenigen einfachen Formeln. Wer diese versteht, kann auch komplexere Aufgaben wie Prozent rückwärts rechnen, einen Bruch in Prozent umwandeln oder einen Preis inklusive 19 % Mehrwertsteuer bestimmen.
          </p>
          <p className="gpg-intro-lead" style={{ fontWeight: 600, color: 'var(--text-main, #0f172a)' }}>
            In diesem Ratgeber erklären wir die wichtigsten Funktionen eines Prozentrechners und zeigen anhand verständlicher Beispiele, wie die Berechnungen funktionieren.
          </p>
        </div>

        {/* Article Body Blocks */}
        <div className="gpg-article-content">
          {/* Block 1: Was ist ein Prozent Rechner Online? */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <Calculator size={22} style={{ color: 'var(--primary)' }} />
              Was ist ein Prozent Rechner Online?
            </h2>
            <p>
              Ein Prozent Rechner Online ist ein digitales Werkzeug zur Berechnung von Prozentwerten. Statt die jeweilige Formel selbst aufzuschreiben und mit einem Taschenrechner zu rechnen, können Benutzer die bekannten Werte eingeben und erhalten direkt das Ergebnis.
            </p>
            <p>Das Wort „Prozent“ bedeutet wörtlich „von hundert“. Deshalb entspricht:</p>
            <ul className="gpg-steps-list">
              <li><strong>1 %</strong> = 1 von 100</li>
              <li><strong>5 %</strong> = 5 von 100</li>
              <li><strong>10 %</strong> = 10 von 100</li>
              <li><strong>25 %</strong> = 25 von 100</li>
              <li><strong>50 %</strong> = 50 von 100</li>
              <li><strong>100 %</strong> = das Ganze</li>
            </ul>

            <h2 className="gpg-block-subtitle">Die wichtigsten Begriffe der Prozentrechnung sind:</h2>
            <ul>
              <li><strong>Grundwert (G):</strong> Die gesamte Menge oder der Ausgangswert.</li>
              <li><strong>Prozentsatz (p):</strong> Der Anteil in Prozent.</li>
              <li><strong>Prozentwert (W):</strong> Der konkrete Wert, der dem Prozentsatz entspricht.</li>
            </ul>

            <div className="gpg-formula-box">
              Formel: W = G × p / 100
            </div>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: Wie viel sind 20 % von 250?</div>
              <p>Rechnung: 250 × 20 / 100 = <strong>50</strong></p>
              <p>Der Prozentwert beträgt also 50.</p>
            </div>
            <p>
              Ein Online-Rechner übernimmt diese Berechnung automatisch und eignet sich deshalb besonders für schnelle Alltagsberechnungen.
            </p>
            <a href="#tool-percentage-value" onClick={(e) => scrollToTool('tool-percentage-value', e)} className="gpg-calc-link-btn">
              Zum Prozentwert-Rechner <ArrowRight size={14} />
            </a>
          </article>

          {/* Block 2: Dreisatz Rechner Prozent */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <Scale size={22} style={{ color: 'var(--primary)' }} />
              Dreisatz Rechner Prozent
            </h2>
            <p>
              Der Dreisatz ist eine weitere einfache Methode, um Prozentaufgaben zu lösen. Er eignet sich besonders dann, wenn man nachvollziehen möchte, wie ein Prozentwert Schritt für Schritt entsteht.
            </p>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: 100 % entsprechen 500 €. Gesucht sind 15 %.</div>
              <ol className="gpg-steps-list">
                <li>Zuerst wird berechnet, wie viel 1 % entspricht: 500 € ÷ 100 = <strong>5 €</strong></li>
                <li>Danach wird mit 15 multipliziert: 5 € × 15 = <strong>75 €</strong></li>
              </ol>
              <p>Damit sind 15 % von 500 € = <strong>75 €</strong>.</p>
            </div>

            <p>
              Ein Dreisatz Rechner für Prozent kann deshalb besonders hilfreich sein, wenn du nicht nur das Ergebnis benötigst, sondern auch den Rechenweg verstehen möchtest.
            </p>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel mit einer Menge (Schüler)</div>
              <p>Eine Schule hat 800 Schüler. 12 % davon nehmen an einem Wettbewerb teil.</p>
              <ol className="gpg-steps-list">
                <li>Berechnung: 800 ÷ 100 = <strong>8</strong></li>
                <li>Dann: 8 × 12 = <strong>96</strong></li>
              </ol>
              <p>Es nehmen also <strong>96 Schüler</strong> teil.</p>
            </div>

            <div className="gpg-formula-box">
              Dreisatz-Methode:<br />
              100 % → Grundwert<br />
              1 % → Grundwert ÷ 100<br />
              p % → Grundwert ÷ 100 × p
            </div>
            <p>
              Diese Methode funktioniert unabhängig davon, ob es um Geld, Personen, Gewicht, Entfernungen oder andere Größen geht.
            </p>
            <a href="#tool-rule-of-three" onClick={(e) => scrollToTool('tool-rule-of-three', e)} className="gpg-calc-link-btn">
              Zum Dreisatz-Prozentrechner <ArrowRight size={14} />
            </a>
          </article>

          {/* Block 3: Prozent Euro Rechner */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <Euro size={22} style={{ color: 'var(--primary)' }} />
              Prozent Euro Rechner
            </h2>
            <p>
              Ein Prozent Euro Rechner wird verwendet, wenn Prozentwerte in Geldbeträgen berechnet werden sollen. Typische Anwendungen sind Rabatte, Preissteigerungen, Provisionen, Steuern und Trinkgeld.
            </p>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: 20 % von 80 €</div>
              <p>Gesucht sind 20 % von 80 €:</p>
              <p><code>80 × 20 ÷ 100 = 16 €</code></p>
              <p>20 % entsprechen also <strong>16 €</strong>.</p>
            </div>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: Preis inklusive 10 % Erhöhung</div>
              <p>Ein Produkt kostet 200 €. Der Preis steigt um 10 %.</p>
              <ol className="gpg-steps-list">
                <li>Zuerst wird der Prozentwert berechnet: 200 × 10 ÷ 100 = <strong>20 €</strong></li>
                <li>Anschließend wird der ursprüngliche Preis erhöht: 200 € + 20 € = <strong>220 €</strong></li>
              </ol>
              <p>Der neue Preis beträgt <strong>220 €</strong>.</p>
            </div>

            <h2 className="gpg-block-subtitle">Prozentuale Preisänderungen analysieren</h2>
            <p>
              Ein Prozent-Euro-Rechner kann auch verwendet werden, um Preisänderungen zu analysieren. Beispielsweise steigt ein Preis von 50 € auf 60 €:
            </p>
            <ul className="gpg-steps-list">
              <li>Die Differenz beträgt: 60 € − 50 € = <strong>10 €</strong></li>
              <li>Der prozentuale Anstieg beträgt: 10 ÷ 50 × 100 = <strong>20 %</strong></li>
            </ul>
            <p>Der Preis ist also um <strong>20 %</strong> gestiegen.</p>
            <a href="#tool-percentage-euro" onClick={(e) => scrollToTool('tool-percentage-euro', e)} className="gpg-calc-link-btn">
              Zum Prozent-Euro-Rechner <ArrowRight size={14} />
            </a>
          </article>

          {/* Block 4: Bruch in Prozent Rechner */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <Divide size={22} style={{ color: 'var(--primary)' }} />
              Bruch in Prozent Rechner
            </h2>
            <p>
              Mit einem Bruch in Prozent Rechner kann ein Bruch in einen Prozentsatz umgewandelt werden.
            </p>
            <p>
              Die Formel lautet: Bruch ÷ 100? Nein – zunächst wird der Zähler durch den Nenner geteilt und anschließend mit 100 multipliziert.
            </p>
            <div className="gpg-formula-box">
              Prozent = (Zähler ÷ Nenner) × 100
            </div>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Typische Beispiele für Brüche in Prozent:</div>
              <ul className="gpg-steps-list">
                <li><strong>1/2 in Prozent:</strong> 1 ÷ 2 × 100 = <strong>50 %</strong></li>
                <li><strong>3/4 in Prozent:</strong> 3 ÷ 4 × 100 = <strong>75 %</strong></li>
                <li><strong>7/20 in Prozent:</strong> 7 ÷ 20 × 100 = <strong>35 %</strong></li>
              </ul>
            </div>
            <p>Diese Umrechnung ist besonders nützlich in Mathematik, Statistik und bei der Interpretation von Anteilen.</p>

            <h2 className="gpg-block-subtitle">Der Ablauf beim Umwandeln ist immer gleich:</h2>
            <ol className="gpg-steps-list">
              <li>Zähler durch Nenner teilen.</li>
              <li>Das Ergebnis mit 100 multiplizieren.</li>
              <li>Das Prozentzeichen hinzufügen.</li>
            </ol>
            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: 5/8</div>
              <p>5 ÷ 8 = 0,625 → 0,625 × 100 = <strong>62,5 %</strong></p>
            </div>
            <a href="#tool-fraction-to-percentage" onClick={(e) => scrollToTool('tool-fraction-to-percentage', e)} className="gpg-calc-link-btn">
              Zum Bruch-in-Prozent-Rechner <ArrowRight size={14} />
            </a>
          </article>

          {/* Block 5: Brutto Netto Rechner 19 Prozent */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <Receipt size={22} style={{ color: 'var(--primary)' }} />
              Brutto Netto Rechner 19 Prozent
            </h2>
            <p>
              Ein Brutto Netto Rechner 19 Prozent wird häufig verwendet, um einen Preis mit 19 % Mehrwertsteuer in Netto- und Bruttobetrag aufzuteilen.
            </p>
            <p>
              Dabei ist wichtig, zwischen Netto und Brutto zu unterscheiden:
            </p>
            <ul>
              <li><strong>Der Nettopreis</strong> ist der Preis vor der Mehrwertsteuer.</li>
              <li><strong>Der Bruttopreis</strong> ist der Preis einschließlich Mehrwertsteuer.</li>
            </ul>
            <div className="gpg-formula-box">
              Brutto = Netto × 1,19
            </div>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: 100 € netto mit 19 % MwSt.</div>
              <p>100 € × 1,19 = <strong>119 € Brutto</strong></p>
              <p>Die enthaltene Mehrwertsteuer beträgt: 119 € − 100 € = <strong>19 €</strong></p>
            </div>

            <h2 className="gpg-block-subtitle">Brutto in Netto umrechnen</h2>
            <p>Wenn der Bruttopreis bekannt ist, wird anders gerechnet:</p>
            <div className="gpg-formula-box">
              Netto = Brutto ÷ 1,19
            </div>
            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: Bruttopreis = 238 €</div>
              <p>238 € ÷ 1,19 = <strong>200 € Netto</strong></p>
              <p>Die Mehrwertsteuer beträgt: 238 € − 200 € = <strong>38 €</strong></p>
            </div>

            <div className="gpg-alert-box">
              <div className="gpg-alert-title">
                <AlertTriangle size={18} /> Wichtig bei der Rückrechnung (Häufiger Fehler!)
              </div>
              <p>
                Ein häufiger Fehler besteht darin, bei einem Bruttopreis einfach 19 % abzuziehen. Das ist mathematisch <strong>nicht korrekt</strong>, weil die 19 % auf den Nettopreis bezogen sind.
              </p>
              <p>
                Wenn der Bruttopreis 119 € beträgt, sind 19 € Mehrwertsteuer enthalten. 19 € entsprechen aber nur rund <strong>15,97 %</strong> des Bruttopreises. Deshalb sollte für die Rückrechnung immer die Formel <code>Brutto ÷ 1,19</code> verwendet werden.
              </p>
            </div>
            <a href="#tool-gross-net-19" onClick={(e) => scrollToTool('tool-gross-net-19', e)} className="gpg-calc-link-btn">
              Zum 19% Brutto-Netto-Rechner <ArrowRight size={14} />
            </a>
          </article>

          {/* Block 6: Prozent Rabatt Rechner */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <Tag size={22} style={{ color: 'var(--primary)' }} />
              Prozent Rabatt Rechner
            </h2>
            <p>
              Ein Prozent Rabatt Rechner hilft dabei, reduzierte Preise schnell zu berechnen. Rabatte werden normalerweise als Prozentsatz des ursprünglichen Preises angegeben.
            </p>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: 20 % Rabatt auf 100 €</div>
              <p>Ausgangspreis: 100 € | Rabatt: 20 %</p>
              <p>Rabattbetrag: 100 × 20 ÷ 100 = <strong>20 €</strong></p>
              <p>Neuer Preis: 100 € − 20 € = <strong>80 €</strong></p>
            </div>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: 15 % Rabatt auf 240 €</div>
              <p>Rabattbetrag: 240 × 15 ÷ 100 = <strong>36 €</strong></p>
              <p>Der reduzierte Preis: 240 € − 36 € = <strong>204 €</strong></p>
            </div>

            <h2 className="gpg-block-subtitle">Rabatt direkt berechnen (Praktische Formel)</h2>
            <div className="gpg-formula-box">
              Endpreis = Originalpreis × (1 − Rabatt / 100)
            </div>
            <p>
              Bei 25 % Rabatt rechnen Sie einfach: <code>Endpreis = Originalpreis × 0,75</code>.<br />
              Bei einem ursprünglichen Preis von 80 €: <code>80 × 0,75 = 60 €</code>.
            </p>

            <div className="gpg-alert-box">
              <div className="gpg-alert-title">
                <AlertTriangle size={18} /> Rabatt und zusätzliche Preisänderungen nicht addieren!
              </div>
              <p>
                Mehrere prozentuale Änderungen dürfen nicht einfach addiert werden. Beispielsweise bedeuten 20 % Rabatt und anschließend weitere 10 % Rabatt <strong>nicht</strong> automatisch 30 % Rabatt auf den Ursprungspreis!
              </p>
              <p>
                Bei 100 €: Erster Rabatt (20 %): 100 × 0,80 = 80 €.<br />
                Zweiter Rabatt (10 % auf 80 €): 80 × 0,90 = <strong>72 €</strong>.<br />
                Die gesamte Reduzierung beträgt damit <strong>28 %</strong> und nicht 30 %.
              </p>
            </div>
            <a href="#tool-discount-calculator" onClick={(e) => scrollToTool('tool-discount-calculator', e)} className="gpg-calc-link-btn">
              Zum Rabattrechner <ArrowRight size={14} />
            </a>
          </article>

          {/* Block 7: Prozent rückwärts rechnen */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <TrendingUp size={22} style={{ color: 'var(--primary)' }} />
              Prozent rückwärts rechnen
            </h2>
            <p>
              Prozent rückwärts rechnen bedeutet, dass der ursprüngliche Wert gesucht wird, obwohl nur ein Prozentwert und der dazugehörige Anteil bekannt sind. Diese Aufgabe kommt häufig bei Rabatten, Preissteigerungen, Steuern und Statistiken vor.
            </p>
            <div className="gpg-formula-box">
              Grundwert = Prozentwert × 100 ÷ Prozentsatz
            </div>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: 20 % entsprechen 40 €</div>
              <p>Rechnung: 40 × 100 ÷ 20 = <strong>200 €</strong></p>
              <p>Der ursprüngliche Wert beträgt 200 €.</p>
            </div>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: Nach 25 % Rabatt kostet ein Produkt 75 €</div>
              <p>Nach einem Rabatt von 25 % bleiben 75 % des ursprünglichen Preises übrig:</p>
              <p><code>75 € ÷ 0,75 = 100 €</code></p>
              <p>Der ursprüngliche Preis betrug <strong>100 €</strong>.</p>
            </div>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: Prozentuale Erhöhung rückwärts berechnen</div>
              <p>Ein Produkt kostet nach einer Erhöhung von 20 % insgesamt 240 €.</p>
              <p>Nach der Erhöhung entsprechen 240 € genau 120 % des ursprünglichen Preises:</p>
              <p><code>240 ÷ 1,20 = 200 €</code></p>
              <p>Der ursprüngliche Preis lag bei <strong>200 €</strong>.</p>
            </div>
            <p>Beim rückwärts Rechnen muss daher immer berücksichtigt werden, auf welchen Wert sich der Prozentsatz bezieht.</p>
          </article>

          {/* Block 8: Preis Prozent Rechner */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <Tag size={22} style={{ color: 'var(--primary)' }} />
              Preis Prozent Rechner
            </h2>
            <p>
              Ein Preis Prozent Rechner kann verwendet werden, um Preisänderungen, Preisanteile, Rabatte und Aufschläge zu bestimmen.
            </p>

            <div className="gpg-example-card">
              <div className="gpg-example-title">1. Preissteigerung berechnen (150 € auf 180 €)</div>
              <p>Differenz: 180 − 150 = 30 €</p>
              <p>Prozentuale Veränderung: 30 ÷ 150 × 100 = <strong>20 %</strong> (Preis um 20 % gestiegen)</p>
            </div>

            <div className="gpg-example-card">
              <div className="gpg-example-title">2. Preisreduzierung berechnen (500 € auf 425 €)</div>
              <p>Differenz: 500 − 425 = 75 €</p>
              <p>Prozentuale Reduzierung: 75 ÷ 500 × 100 = <strong>15 %</strong> (Preis um 15 % reduziert)</p>
            </div>

            <div className="gpg-example-card">
              <div className="gpg-example-title">3. Anteil eines Preises berechnen</div>
              <p>Ein Artikel kostet 250 €. Davon sollen 12 % berechnet werden:</p>
              <p>250 × 12 ÷ 100 = <strong>30 €</strong></p>
            </div>
            <p>Ein Preis-Prozent-Rechner kann damit sowohl absolute Beträge als auch prozentuale Veränderungen bestimmen.</p>
            <a href="#tool-price-percentage" onClick={(e) => scrollToTool('tool-price-percentage', e)} className="gpg-calc-link-btn">
              Zum Preis-Prozentrechner <ArrowRight size={14} />
            </a>
          </article>

          {/* Block 9: Prozent in Dezimalzahl Rechner */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <Binary size={22} style={{ color: 'var(--primary)' }} />
              Prozent in Dezimalzahl Rechner
            </h2>
            <p>
              Für viele mathematische Berechnungen ist es notwendig, einen Prozentsatz in eine Dezimalzahl umzuwandeln.
            </p>
            <div className="gpg-formula-box">
              Grundregel: Prozent ÷ 100 = Dezimalzahl
            </div>

            <div className="gpg-table-wrapper">
              <table className="gpg-table">
                <thead>
                  <tr>
                    <th>Prozentsatz</th>
                    <th>Dezimalzahl</th>
                    <th>Als Multiplikator</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>10 %</td><td><code>0,10</code></td><td>Preis × 0,10</td></tr>
                  <tr><td>25 %</td><td><code>0,25</code></td><td>Preis × 0,25</td></tr>
                  <tr><td>50 %</td><td><code>0,50</code></td><td>Preis × 0,50</td></tr>
                  <tr><td>75 %</td><td><code>0,75</code></td><td>Preis × 0,75</td></tr>
                  <tr><td>100 %</td><td><code>1,00</code></td><td>Preis × 1,00</td></tr>
                  <tr><td>5 %</td><td><code>0,05</code></td><td>Preis × 0,05</td></tr>
                  <tr><td>2,5 %</td><td><code>0,025</code></td><td>Preis × 0,025</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="gpg-block-subtitle">Warum ist die Umwandlung wichtig?</h2>
            <p>
              Dezimalzahlen werden beispielsweise verwendet, wenn ein Preis mit einem Prozentsatz multipliziert werden soll:
            </p>
            <ul className="gpg-steps-list">
              <li><strong>20 % von 150 €:</strong> 150 × 0,20 = <strong>30 €</strong></li>
              <li><strong>Bei einer Preissteigerung von 20 %:</strong> Multiplikation mit 1,20: 150 × 1,20 = <strong>180 €</strong></li>
              <li><strong>Bei einer Reduzierung um 20 %:</strong> Multiplikation mit 0,80: 150 × 0,80 = <strong>120 €</strong></li>
            </ul>
            <p>Deshalb ist es wichtig, zwischen dem Prozentsatz und dem Multiplikationsfaktor zu unterscheiden.</p>
            <a href="#tool-percentage-to-decimal" onClick={(e) => scrollToTool('tool-percentage-to-decimal', e)} className="gpg-calc-link-btn">
              Zum Prozent-in-Dezimal-Rechner <ArrowRight size={14} />
            </a>
          </article>

          {/* Block 10: Wie rechne ich Prozent aus? */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <HelpCircle size={22} style={{ color: 'var(--primary)' }} />
              Wie rechne ich Prozent aus?
            </h2>
            <p>
              Die Frage „Wie rechne ich Prozent aus?“ gehört zu den häufigsten Fragen zur Prozentrechnung. Welche Formel verwendet wird, hängt davon ab, welche Werte bekannt sind.
            </p>

            <div className="gpg-example-card">
              <div className="gpg-example-title">1. Prozentwert berechnen (Grundwert & Prozentsatz bekannt)</div>
              <div className="gpg-formula-box">W = G × p ÷ 100</div>
              <p>Wie viel sind 30 % von 400? → <code>400 × 30 ÷ 100 = 120</code></p>
            </div>

            <div className="gpg-example-card">
              <div className="gpg-example-title">2. Prozentsatz berechnen (Grundwert & Prozentwert bekannt)</div>
              <div className="gpg-formula-box">p = W ÷ G × 100</div>
              <p>60 von 240 entsprechen wie viel Prozent? → <code>60 ÷ 240 × 100 = 25 %</code></p>
            </div>

            <div className="gpg-example-card">
              <div className="gpg-example-title">3. Grundwert berechnen (Prozentwert & Prozentsatz bekannt)</div>
              <div className="gpg-formula-box">G = W × 100 ÷ p</div>
              <p>30 entsprechen 15 % von welchem Wert? → <code>30 × 100 ÷ 15 = 200</code></p>
            </div>
            <p>Diese drei Formeln bilden die Grundlage für nahezu alle einfachen Prozentaufgaben.</p>
          </article>

          {/* Block 11: Wie rechne ich Prozent von etwas aus? */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <Percent size={22} style={{ color: 'var(--primary)' }} />
              Wie rechne ich Prozent von etwas aus?
            </h2>
            <p>
              Wenn du wissen möchtest, wie viel Prozent von etwas einem bestimmten Wert entsprechen, kannst du eine einfache Multiplikation verwenden.
            </p>

            <div className="gpg-example-card">
              <div className="gpg-example-title">Beispiel: Wie viel sind 15 % von 200?</div>
              <ol className="gpg-steps-list">
                <li>Zuerst wird 15 % in eine Dezimalzahl umgewandelt: <code>15 % = 0,15</code></li>
                <li>Dann: <code>200 × 0,15 = 30</code></li>
              </ol>
              <p>15 % von 200 sind also <strong>30</strong>.</p>
              <p>Alternativ kann direkt mit der Prozentformel gerechnet werden: <code>200 × 15 ÷ 100 = 30</code></p>
            </div>

            <h2 className="gpg-block-subtitle">Weitere schnelle Beispiele:</h2>
            <ul className="gpg-steps-list">
              <li><strong>10 % von 500:</strong> 500 × 10 ÷ 100 = <strong>50</strong></li>
              <li><strong>25 % von 80:</strong> 80 × 25 ÷ 100 = <strong>20</strong></li>
              <li><strong>35 % von 200:</strong> 200 × 35 ÷ 100 = <strong>70</strong></li>
              <li><strong>7,5 % von 400:</strong> 400 × 7,5 ÷ 100 = <strong>30</strong></li>
            </ul>
            <p>Die gleiche Methode funktioniert bei Eurobeträgen, Mengen, Gewichten, Entfernungen und vielen anderen Zahlen.</p>
          </article>

          {/* Block 12: Prozentrechnung im Alltag */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <CheckCircle size={22} style={{ color: 'var(--primary)' }} />
              Prozentrechnung im Alltag
            </h2>
            <p>
              Prozentrechnung ist nicht nur eine mathematische Übung. Sie spielt in vielen alltäglichen Situationen eine Rolle:
            </p>
            <ul className="gpg-steps-list">
              <li>
                <strong>Einkaufen:</strong> Rabatte werden fast immer als Prozentwerte angegeben. Ein Preis von 120 € mit 30 % Rabatt bedeutet: <code>120 × 0,30 = 36 € Rabatt</code> → Endpreis: <strong>84 €</strong>.
              </li>
              <li>
                <strong>Gehalt:</strong> Wenn ein Gehalt von 3.000 € um 5 % steigt: <code>3.000 × 0,05 = 150 €</code> → Neues Gehalt: <strong>3.150 €</strong>.
              </li>
              <li>
                <strong>Zinsen:</strong> Auch Zinsen werden in Prozent angegeben. Bei einem Betrag von 5.000 € und einem Zinssatz von 3 % ergibt sich für ein Jahr: <code>5.000 × 0,03 = 150 €</code>.
              </li>
              <li>
                <strong>Statistiken:</strong> Wenn 72 von 120 Personen eine bestimmte Antwort auswählen: <code>72 ÷ 120 × 100 = 60 %</code>.
              </li>
            </ul>
          </article>

          {/* Block 13: Häufige Fehler bei der Prozentrechnung */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <AlertTriangle size={22} style={{ color: '#ef4444' }} />
              Häufige Fehler bei der Prozentrechnung
            </h2>
            <p>
              Auch bei einfachen Prozentaufgaben können Fehler entstehen. Besonders häufig wird der falsche Bezugswert verwendet.
            </p>

            <div className="gpg-alert-box">
              <div className="gpg-alert-title">1. Prozentwert und Grundwert verwechseln</div>
              <p>Bei der Frage „20 % von 300“ ist 300 der Grundwert. Die Rechnung lautet: <code>300 × 20 ÷ 100 = 60</code>.</p>
            </div>

            <div className="gpg-alert-box">
              <div className="gpg-alert-title">2. Bei Rückwärtsrechnung den falschen Prozentsatz verwenden</div>
              <p>Nach einem Rabatt von 20 % bleiben 80 % übrig. Wenn der Endpreis bekannt ist, muss deshalb durch <code>0,80</code> geteilt werden (z. B. <code>80 € ÷ 0,80 = 100 €</code>), nicht durch 0,20.</p>
            </div>

            <div className="gpg-alert-box">
              <div className="gpg-alert-title">3. Prozentänderungen nicht einfach addieren</div>
              <p>
                Eine Erhöhung um 20 % und anschließend eine Reduzierung um 20 % führt nicht zum ursprünglichen Wert:<br />
                <code>100 € + 20 % = 120 €</code><br />
                <code>120 € − 20 % = 96 €</code> (und nicht 100 €).<br />
                Der Grund ist, dass sich die zweite Prozentrechnung auf den neuen Ausgangswert (120 €) bezieht.
              </p>
            </div>
          </article>

          {/* Block 14: Die wichtigsten Formeln im Überblick */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <BookOpen size={22} style={{ color: 'var(--primary)' }} />
              Prozent Rechner Online: Die wichtigsten Formeln
            </h2>
            <p>Für die meisten Prozentaufgaben reichen einige wenige Formeln:</p>

            <div className="gpg-table-wrapper">
              <table className="gpg-table">
                <thead>
                  <tr>
                    <th>Gesuchte Größe</th>
                    <th>Formel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Prozentwert (W)</strong></td>
                    <td><code>W = G × p ÷ 100</code></td>
                  </tr>
                  <tr>
                    <td><strong>Prozentsatz (p)</strong></td>
                    <td><code>p = W ÷ G × 100</code></td>
                  </tr>
                  <tr>
                    <td><strong>Grundwert (G)</strong></td>
                    <td><code>G = W × 100 ÷ p</code></td>
                  </tr>
                  <tr>
                    <td><strong>Prozent in Dezimalzahl</strong></td>
                    <td><code>p ÷ 100</code></td>
                  </tr>
                  <tr>
                    <td><strong>Bruch in Prozent</strong></td>
                    <td><code>(Zähler ÷ Nenner) × 100</code></td>
                  </tr>
                  <tr>
                    <td><strong>Brutto bei 19 % MwSt.</strong></td>
                    <td><code>Netto × 1,19</code></td>
                  </tr>
                  <tr>
                    <td><strong>Netto aus Brutto bei 19 %</strong></td>
                    <td><code>Brutto ÷ 1,19</code></td>
                  </tr>
                  <tr>
                    <td><strong>Endpreis nach Rabatt</strong></td>
                    <td><code>Preis × (1 − Rabatt ÷ 100)</code></td>
                  </tr>
                  <tr>
                    <td><strong>Endpreis nach Erhöhung</strong></td>
                    <td><code>Preis × (1 + Erhöhung ÷ 100)</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Mit diesen Formeln lassen sich die meisten klassischen Aufgaben zur Prozentrechnung lösen.</p>
          </article>

          {/* Block 15: Warum einen Online-Prozentrechner verwenden? */}
          <article className="gpg-block">
            <h2 className="gpg-block-title">
              <CheckCircle size={22} style={{ color: 'var(--primary)' }} />
              Warum einen Online-Prozentrechner verwenden?
            </h2>
            <p>
              Ein Online-Rechner spart Zeit und reduziert das Risiko von Rechenfehlern. Besonders bei Dezimalzahlen, größeren Beträgen oder mehreren aufeinanderfolgenden Berechnungen kann ein automatisches Ergebnis hilfreich sein.
            </p>
            <p>Ein guter Prozent Rechner Online sollte möglichst unterschiedliche Berechnungen unterstützen, darunter:</p>

            <ul className="gpg-checklist">
              <li><CheckCircle size={16} style={{ color: '#16a34a' }} /> Prozentwert berechnen</li>
              <li><CheckCircle size={16} style={{ color: '#16a34a' }} /> Prozentsatz berechnen</li>
              <li><CheckCircle size={16} style={{ color: '#16a34a' }} /> Grundwert berechnen</li>
              <li><CheckCircle size={16} style={{ color: '#16a34a' }} /> Rabatt berechnen</li>
              <li><CheckCircle size={16} style={{ color: '#16a34a' }} /> Preissteigerungen berechnen</li>
              <li><CheckCircle size={16} style={{ color: '#16a34a' }} /> Prozent rückwärts rechnen</li>
              <li><CheckCircle size={16} style={{ color: '#16a34a' }} /> Brüche in Prozent umwandeln</li>
              <li><CheckCircle size={16} style={{ color: '#16a34a' }} /> Prozent in Dezimalzahlen</li>
              <li><CheckCircle size={16} style={{ color: '#16a34a' }} /> Euro-Prozent-Berechnungen</li>
              <li><CheckCircle size={16} style={{ color: '#16a34a' }} /> Brutto und Netto berechnen</li>
              <li><CheckCircle size={16} style={{ color: '#16a34a' }} /> 19 % Mehrwertsteuer berechnen</li>
              <li><CheckCircle size={16} style={{ color: '#16a34a' }} /> Dreisatz-Aufgaben lösen</li>
            </ul>
            <p>
              Dabei sollte der Rechner nicht nur das Ergebnis anzeigen, sondern möglichst auch die verwendete Formel oder den Rechenweg verständlich darstellen.
            </p>
          </article>

          {/* Block 16: Fazit */}
          <article className="gpg-block" style={{ borderLeft: '4px solid var(--primary, #2563eb)' }}>
            <h2 className="gpg-block-title">
              Fazit: Prozent schnell und einfach berechnen
            </h2>
            <p>
              Ein Prozent Rechner Online macht viele mathematische Berechnungen einfacher und schneller. Ob du einen Rabatt beim Einkaufen überprüfen, einen Preisvergleich durchführen, einen Bruch in Prozent umwandeln oder einen Brutto-Netto-Betrag berechnen möchtest – die grundlegenden Regeln der Prozentrechnung sind immer ähnlich.
            </p>
            <div className="gpg-formula-box">
              Wichtigste Formel: Prozentwert = Grundwert × Prozentsatz ÷ 100
            </div>
            <p>
              Für Rückwärtsberechnungen wird dagegen der Grundwert aus dem bekannten Prozentwert und Prozentsatz ermittelt.
            </p>
            <p>
              Wer die Unterschiede zwischen Grundwert, Prozentwert und Prozentsatz versteht, kann praktisch jede klassische Prozentaufgabe systematisch lösen. Ein Online-Rechner übernimmt anschließend die Rechenarbeit und liefert schnell das gewünschte Ergebnis.
            </p>
            <p>
              Ob Dreisatz Rechner Prozent, Prozent Euro Rechner, Bruch in Prozent Rechner, Brutto Netto Rechner mit 19 Prozent, Prozent Rabatt Rechner oder Preis Prozent Rechner – mit den richtigen Formeln lassen sich alltägliche Prozentaufgaben zuverlässig und nachvollziehbar berechnen.
            </p>
            <a href="#all-tools" onClick={(e) => scrollToTool('all-tools', e)} className="gpg-calc-link-btn">
              Zu allen 14 Prozentrechnern <ArrowRight size={14} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
