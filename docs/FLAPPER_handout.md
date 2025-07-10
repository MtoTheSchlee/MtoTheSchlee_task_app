# FLAPPER Handout (verfeinert)

## Ziel der Plattform

FLAPPER ist eine Flutter Web-App, mit der Affiliate-Produkte – insbesondere von Temu – auf einer modernen Landingpage vorgestellt werden. Du fungierst als Admin und steuerst alle Produkte. Besucher sehen lediglich die fertigen Produktseiten.

## Kernidee

1. Ein Affiliate-Link wird in der Admin-Oberfläche eingefügt.
2. Der Code-Generator liest Produktinformationen direkt aus dem Link oder über eine API aus.
3. Kategorien und Besonderheiten können manuell angepasst werden.
4. Nach dem Speichern erscheint das Produkt sofort auf der öffentlichen Seite.

## Logik für den Code-Generator

* **Affiliate-Link analysieren:**
  * Produkt-ID aus dem Link extrahieren (z. B. mittels RegExp).
  * API-Endpunkt aufrufen oder Crawler verwenden, um Titel, Preis, Bild und Beschreibung zu erhalten.
* **Produktmodell erstellen:**
  * Felder wie `title`, `price`, `imageUrl`, `affiliateUrl` usw. befüllen.
  * Optionale Markierungen wie "Top der Woche" oder "Micha Highlight" setzen.
* **Persistenz:**
  * Produkte in Hive speichern, sodass sie lokal verfügbar sind.
* **Darstellung:**
  * Nach dem Speichern wird das Produkt in der Produktliste sowie auf der Landingpage angezeigt.

## Nächste Schritte

1. Implementation des Code-Generators (Link → Produktdaten).
2. Aufbau einer Produktbibliothek mit Filter- und Sortierfunktionen.
3. Dashboard zur Auswertung der Klickzahlen und Affiliate-Einnahmen.

