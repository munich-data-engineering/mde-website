import {TranslationMap} from './translations';

export const translationsDe:
    TranslationMap = {
	    // Language switcher
	    'lang.en': 'English',
	    'lang.de': 'Deutsch',

	    // Hero
	    'hero.subtitle': 'Wir entwickeln datengetriebene Software.',
	    'hero.learnMore': 'Mehr erfahren',

	    // Core competencies
	    'competencies.intro':
		'Wir verbinden Softwareengineering, Machine Learning und Cloud Computing, um schnelle, zuverlässige und wartbare Machine-Learning-Pipelines und datengetriebene Software zu entwickeln.',
	    'competencies.software.title': 'Softwareengineering',
	    'competencies.software.desc':
		'Wir halten uns an bewährte Best Practices, einschließlich wissenschaftlicher Prinzipien und CI/CD-Workflows.',
	    'competencies.ml.title': 'Machine Learning',
	    'competencies.ml.desc':
		'Von Vorhersagemodellen bis zur intelligenten Automatisierung mit LLMs entwickeln wir skalierbare ML-Systeme.',
	    'competencies.cloud.title': 'Cloud Computing',
	    'competencies.cloud.desc':
		'Wir entwickeln robuste, cloud-native Infrastruktur und Datenpipelines auf AWS, GCP, Azure und Kubernetes.',

	    // Code quality
	    'quality.sectionDesc':
		'Codequalität ist ein großes Problem in vielen IT-Projekten – wir können helfen.',
	    'quality.card1':
		'Fällt das Hinzufügen neuer Features umständlich? <br> Ist Ihr Code für andere schwer verständlich? <br> Dauert das Onboarding neuer Teammitglieder zu lange? <br> Beinhaltet das Kompilieren Ihrer Software viele manuelle Schritte?<br><br> Wenn ja, haben Sie möglicherweise Probleme mit der Codequalität.',
	    'quality.card2':
		'Modernes Softwareengineering muss auf theoretischen Grundlagen wie Kategorietheorie und Typtheorie basieren.<br><br> Software-Patterns müssen durch großangelegte empirische Analysen validiert werden.<br><br> Automatisiertes Testing ermöglicht die kontinuierliche Auslieferung zuverlässiger Software.',

	    // Open source
	    'opensource.sectionDesc':
		'Viele sagen, dass sie guten Code schreiben – wir beweisen es. Entdecken Sie unsere erfolgreichen Open-Source-Projekte.',
	    'opensource.repo': 'Repository',
	    'opensource.docs': 'Dokumentation',
	    'opensource.reflectCpp.description':
		'reflect-cpp ist eine C++-20/C++-26-Bibliothek für schnelle Serialisierung, Deserialisierung und Validierung mittels Reflexion, ähnlich wie pydantic in Python, serde in Rust, encoding in Go oder aeson in Haskell.',
	    'opensource.sqlgen.description':
		'sqlgen ist ein reflexionsbasiertes ORM und SQL-Query-Generator für C++-20, ähnlich wie SQLAlchemy/SQLModel in Python oder Diesel in Rust.',

	    // Projects (success stories)
	    'projects.sectionDesc':
		'Hier sind einige unserer Erfolgsgeschichten aus den verschiedensten Branchen.',

	    // Tab labels
	    'tabs.energy': 'Energie',
	    'tabs.healthcare': 'Gesundheit',
	    'tabs.automotive': 'Automobilindustrie',
	    'tabs.retail': 'Einzelhandel',
	    'tabs.customerService': 'Kundenservice',
	    'tabs.dataPrivacy': 'Datenschutz',
	    'tabs.other': 'Weitere',

	    // Repo / project status
	    'status.active': 'Aktiv',
	    'status.stable': 'Stabil',
	    'status.beta': 'Beta',

	    // People
	    'people.sectionDesc': 'Der Gründer von Munich Data Engineering',
	    'people.name': 'Dr. Patrick Urbanke',
	    'people.role': 'Gründer',
	    'people.bio':
		'Patrick begann mit rund 10 Jahren mit dem Programmieren und bringt über 25 Jahre Berufserfahrung mit, darunter mehr als 10 Jahre bei der Leitung datenbasiierter Softwareprojekte in der Industrie. Er beherrscht Deutsch, Englisch und Mandarin. Bereits seine Doktorarbeit befasste sich mit Machine Learning. Er absolvierte seine Promotion als schnellster Student in der Geschichte seines Instituts, mit der bestmöglichen Bewertung (summa cum laude). Mit einem wissenschaftsorientierten Ansatz sorgt dafür, dass der Code, den wir ausliefern, nicht nur funktioniert, sondern auch langfristig tragfähig ist.',

	    // Contact
	    'contact.sectionDesc':
		'Wenn Sie interessiert sind oder mehr erfahren möchten, kontaktieren Sie uns gerne:',
	    'contact.email': 'Senden Sie uns eine E-Mail',

	    // Footer
	    'footer.tagline': 'Software · Machine Learning · Cloud',
	    'footer.projects': 'Projekte',
	    'footer.openSource': 'Open Source',
	    'footer.github': 'GitHub',
	    'footer.copyright':
		'&copy; 2026 Urbanke Ventures UG. Alle Rechte vorbehalten.',

	    // Energy
	    'energy.gasMarket.title': 'Gasmarktmodell',
	    'energy.gasMarket.line0':
		'Das Projekt wurde im Zuge des Krieges in Ukraine in Auftrag gegeben',
	    'energy.gasMarket.line1':
		'Entwicklung eines Machine-Learning-Systems zur Vorhersage aller kritischen Komponenten des Gasmarktes',
	    'energy.gasMarket.line2':
		'Das System wurde von Grund auf entwickelt: ETL, Datensammlung, Produktive Umsetzung, Cloud-Orchestrierung, Frontend',
	    'energy.gasMarket.line3':
		'Das System liefert zuverlässig mehrfach am Tag Vorhersagen',
	    'energy.electricityPrice.title': 'Strompreisvorhersage',
	    'energy.electricityPrice.line0':
		'Einführung von statischer Typisierung, statischer Code-Analyse, automatisierten Unit-Tests und funktionalen Programmierstil in den Python-Code',
	    'energy.electricityPrice.line1':
		'Deutliche Verbesserung der Codequalität und Wartbarkeit des bestehenden Codebases sowie der ETL-Prozesse',
	    'energy.electricityPrice.line2':
		'Steigerung der Laufleistung um den Faktor über 20 durch das Umschreiben performancekritischer Teile in C++',
	    'energy.electricityPrice.line3':
		'Verbesserung der UX durch eine moderne Benutzeroberfläche, basierend auf TypeScript und Angular',

	    // Healthcare
	    'healthcare.llmBilling.title':
		'LLM-gestützte Abrechnung im Gesundheitswesen',
	    'healthcare.llmBilling.line0':
		'Aufbau eines Systems zur automatischen Erstellung von Arztrechnungen',
	    'healthcare.llmBilling.line1':
		'Das System nutzt LLMs, um abrechnungsfähige Leistungen aus unstrukturierten medizinischen Dokumenten zu ermitteln',
	    'healthcare.llmBilling.line2':
		'Wendet komplexe Geschäftsregeln an, um eine Rechnung zu erstellen, die an die Krankenkasse weitergeleitet wird',
	    'healthcare.readmission.title':
		'Ressourcenplanung in Krankenhäusern',
	    'healthcare.readmission.line0':
		'Entwicklung eines Systems zur Vorhersage der zu erwartenden Verweildauer von Patientinnen und Patienten',
	    'healthcare.readmission.line1':
		'Nutzung von Daten von über 100 Krankenhäusern über mehrere Jahre hinweg',
	    'healthcare.readmission.line2':
		'Das System wird zur Verbesserung der Kapazitätsplanung eingesetzt',
	    'healthcare.hospitalRp.title':
		'Prognose von erneuter Einweisung in Krankenhäusern',
	    'healthcare.hospitalRp.line0': 'Analyse von Patientendaten zur Vorhersage der Wahrscheinlichkeit einer erneuten Einweisung aufgrund einer chronischen Krankheit',
	    'healthcare.hospitalRp.line1':
		'Das entstehende System erzeugt bessere Vorhersagen als das bestehende Benchmark-System',
	    'healthcare.hospitalRp.line2':
		'Das Vorhersagesystem ermöglicht einen besseren Planungsprozess',

	    // Automotive
	    'automotive.churnEu.title':
		'Kundenabwanderung in einem großen europäischen Markt',
	    'automotive.churnEu.line0':
		'Vorhersage der Kundenloyalität im Vertrieb und After Sales für jeden einzelnen Kunden in einem der größten Märkte Europas',
	    'automotive.churnEu.line1':
		'Aufbau einer großen Anzahl relationaler Features',
	    'automotive.churnEu.line2':
		'Umsetzung des erfolgreichen Prototyps in die Produktion mit AWS, von ETL bis zur Anbindung der Pipeline an SAP/CRM',
	    'automotive.churnEu.line3':
		'Das System ermöglicht den gezielten Einsatz von Ressourcen für alle Vertrieb- und After-Sales-Kampagnen in diesem großen europäischen Land',
	    'automotive.churnNonEu.title':
		'Kundenabwanderung in einem großen nicht-europäischen Markt',
	    'automotive.churnNonEu.line0':
		'Entwicklung eines Vorhersagesystems zur Kundenloyalität im After Sales für jeden einzelnen Kunden in einem großen nicht-europäischen Land',
	    'automotive.churnNonEu.line1':
		'Aufbau von ETL-Prozessen und relationaler Features',
	    'automotive.churnNonEu.line2':
		'Das System ermöglicht den gezielten Einsatz von Ressourcen für alle After-Sales-Kampagnen in diesem großen nicht-europäischen Land',

	    // Retail
	    'retail.returnPrediction.title':
		'Vorhersage von Retouren im Online-Handel',
	    'retail.returnPrediction.line0':
		'Entwicklung eines Systems zur Vorhersage von Produktretouren für Online-Händler',
	    'retail.returnPrediction.line1':
		'Das System sagt die Wahrscheinlichkeit einer Produktretouren voraus, während der Kunde seinen virtuellen Warenkorb zusammenstellt',
	    'retail.returnPrediction.line2':
		'Dies ermöglicht Interventionsstrategien, wenn die Wahrscheinlichkeit einer Produktretoure als zu hoch angesehen wird',
	    'retail.returnPrediction.line3':
		'Erreichung einer geschätzten Ersparnis sechsstelliger Höhe',
	    'retail.salesPrediction.title': 'Absatzprognose',
	    'retail.salesPrediction.line0':
		'Entwicklung eines Systems zur Umsatzvorhersage zur Optimierung der globalen Lagerung und Logistik',
	    'retail.salesPrediction.line1':
		'Aufbau von Features mit eigenständig entwickelten Algorithmen für automatisiertes Feature Engineering, gegen etablierte manuelle Features gebenchmarkt',
	    'retail.salesPrediction.line2':
		'Die automatisierten Features erzeugen bessere Vorhersagen als das bestehende Prognosesystem',
	    'retail.salesPrediction.line3':
		'Das Prognosesystem ermöglicht eine bessere Planung',

	    // Customer service
	    'customerService.reactivation.title': 'Kunden-Reaktivierung',
	    'customerService.reactivation.line0':
		'Entwicklung eines Prognosesystems zur Kunden-Reaktivierung einer deutschen staatlichen Lotterie mittels Machine Learning',
	    'customerService.reactivation.line1':
		'Auswertung des Systems mittels A/B-Testing an zehntausenden von Kunden',
	    'customerService.tenantChurn.title':
		'Vorhersage von Mieterabwanderung in der Immobilienwirtschaft',
	    'customerService.tenantChurn.line0':
		'Entwicklung eines Prognosesystems für Mieter, die ihre Verträge kündigen',
	    'customerService.tenantChurn.line1':
		'Das entstehende Prognosesystem ermöglicht einen besseren Planungsprozess',

	    // Data privacy
	    'dataPrivacy.anonymisation.title':
		'LLM-gestützte Dokumenten-Anonymisierung',
	    'dataPrivacy.anonymisation.line0':
		'Aufbau eines Systems zur automatischen Anonymisierung vertraulicher personenbezogener Informationen in Dokumenten',
	    'dataPrivacy.anonymisation.line1':
		'Das System nutzt LLMs und Natural Language Processing zur Identifizierung vertraulicher personenbezogener Informationen',
	    'dataPrivacy.anonymisation.line2':
		'Die eingesetzten LLMs werden GDPR-konform gehostet',
	    'dataPrivacy.anonymisation.line3':
		'Das entstehende System erlaubt das Hochladen von PDF-Dateien, die oft Hunderte von Seiten enthalten, und liefert zuverlässig eine vollständig anonymisierte Version zurück',
	    'dataPrivacy.anonymisation.line4':
		'Funktioniert auch für handschriftliche Kommentare',
	    'dataPrivacy.synthetic.title': 'Synthetische Dokumentengenerierung',
	    'dataPrivacy.synthetic.line0':
		'Realistische synthetische Dokumente werden mit LLMs zum Training von KI-Systemen erzeugt',
	    'dataPrivacy.synthetic.line1':
		'Grund: Reale Dokumente enthalten hochgradig vertrauliche und private Inhalte',
	    'dataPrivacy.synthetic.line2':
		'Erzeugung von Trainingsdaten, die die strukturellen und semantischen Eigenschaften realer Dokumente bewahrt, ohne tatsächlich personenbezogene Daten offenzulegen',
	    'dataPrivacy.synthetic.line3':
		'Vermeidet Verstöße gegen Datenschutzgesetze, während gleichzeitig ein effektives KI-Modelltraining ermöglicht wird',

	    // Other
	    'other.predictiveMaintenance.title': 'Prädiktive Wartung',
	    'other.predictiveMaintenance.line0':
		'Entwicklung eines prädiktiven Wartungssystems auf Basis von Sensordaten der Produktionsmaschinen für optische Bauteile, die weltweit rund 300 GB Datenvolumen erzeugen',
	    'other.predictiveMaintenance.line1':
		'Aufbau von Features mit eigenständig entwickelten Algorithmen für automatisiertes Feature Engineering, gegen etablierte manuelle Features gebenchmarkt',
	    'other.predictiveMaintenance.line2':
		'Die entstehenden automatisierten Features erzeugen bessere Vorhersagen und können deutlich schneller erzeugt werden',
	    'other.predictiveMaintenance.line3':
		'Das System ermöglicht bessere Vorhersagen als zuvor',
	    'other.audit.title': 'Digital unterstützte Wirtschaftsprüfung',
	    'other.audit.line0':
		'Konzipierung und Entwicklung von Tools und Komponenten für ETL, Integration und Verarbeitung, die für Wirtschaftsprüfungen eingesetzt werden',
	    'other.audit.line1':
		'Einführung von Best-Practice-Code-Standards innerhalb des Software-Development-Teams',
	    'other.audit.line2':
		'Deutliche Verbesserung der Codequalität und Wartbarkeit des bestehenden Codebases',
	    'other.audit.line3':
		'Einführung von statischen Typisierungen, statischer Code-Analyse und funktionalen Programmierstil in den Python-Code',
	    'other.audit.line4':
		'Das entwickelte Komponente zur Datenextraktion aus SAP wird derzeit weltweit für Wirtschaftsprüfungen eingesetzt',
    };
