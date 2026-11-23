import { TranslationMap } from './translations';

export const translationsEn: TranslationMap = {
  // Language switcher
  'lang.en': 'English',
  'lang.de': 'Deutsch',

  // Hero
  'hero.subtitle': 'We build data-driven software.',
  'hero.learnMore': 'Learn more',

  // Core competencies
  'competencies.intro':
    'We combine software engineering, machine learning and cloud computing to build fast, reliable and maintainable machine learning pipelines and data-driven software.',
  'competencies.software.title': 'Software Engineering',
  'competencies.software.desc':
    'We adhere to industry best practices, including scientific principles and CI/CD workflows.',
  'competencies.ml.title': 'Machine Learning',
  'competencies.ml.desc':
    'From predictive models to intelligent automation using LLMs, we design and deploy ML systems that scale.',
  'competencies.cloud.title': 'Cloud Computing',
  'competencies.cloud.desc':
    'We build resilient, cloud-native infrastructure and data pipelines on AWS, GCP, Azure, and Kubernetes.',

  // Code quality
  'quality.sectionDesc':
    'Code quality is a major challenge in many IT projects – we can help.',
  'quality.card1':
    'Is adding new features challenging? <br> Is your codebase difficult for others to understand? <br> Does onboarding new team members take long? <br> Does building your software involve many manual steps?<br><br> If so, you may be facing issues with code quality.',
  'quality.card2':
    'Software engineering needs to be grounded in theoretical frameworks, like Category Theory and Type Theory.<br><br> Software patterns need to be validated through large-scale empirical analysis.<br><br> Automated testing enables continuous delivery of reliable code.',

  // Open source
  'opensource.sectionDesc':
    'Many say they write good code — we prove it. Explore our successful open-source projects.',
  'opensource.repo': 'Repository',
  'opensource.docs': 'Documentation',

  // Projects (success stories)
  'projects.sectionDesc':
    'Here are some of our past success stories across a wide variety of industries.',

  // Tab labels
  'tabs.energy': 'Energy',
  'tabs.healthcare': 'Healthcare',
  'tabs.automotive': 'Automotive',
  'tabs.retail': 'Retail',
  'tabs.customerService': 'Customer Service',
  'tabs.dataPrivacy': 'Data Privacy',
  'tabs.other': 'Other',

  // Repo / project status
  'status.active': 'Active',
  'status.stable': 'Stable',
  'status.beta': 'Beta',

  // People
  'people.sectionDesc': 'Meet the mind behind Munich Data Engineering.',
  'people.name': 'Dr. Patrick Urbanke',
  'people.role': 'Founder',
  'people.bio':
    "Patrick began programming before the age of 10 and brings over 25 years of programming experience, including more than 10 years leading data-driven software projects in industry. Fluent in German, English, and Mandarin Chinese, he holds a doctorate in machine learning — completed <em>summa cum laude</em> as the fastest student in his institute's history — and brings a research-driven approach to every engagement, ensuring the code we ship is not just functional, but fundamentally sound.",

  // Contact
  'contact.sectionDesc':
    'If you are interested or want to learn more, please contact us:',
  'contact.email': 'Send us an email',

  // Footer
  'footer.tagline': 'Software · Machine Learning · Cloud',
  'footer.projects': 'Projects',
  'footer.openSource': 'Open Source',
  'footer.github': 'GitHub',
  'footer.copyright': '&copy; 2026 Urbanke Ventures UG. All rights reserved.',

  // Energy
  'energy.gasMarket.title': 'Gas Market Model',
  'energy.gasMarket.line0': 'Project was commissioned in the wake of the war in Ukraine',
  'energy.gasMarket.line1': 'Developed a machine learning system for predicting all critical components of the gas market',
  'energy.gasMarket.line2': 'System was developed from scratch: ETL, data collection, production implementation, cloud orchestration, frontend',
  'energy.gasMarket.line3': 'System reliably delivers predictions on a daily basis',
  'energy.electricityPrice.title': 'Electricity Price Prediction',
  'energy.electricityPrice.line0': 'Introduced static typing, static code analysis, automated unit tests and functional-style programming to the Python code',
  'energy.electricityPrice.line1': 'Significantly improved the code quality and maintainability of the existing codebase as well as ETL processes',
  'energy.electricityPrice.line2': 'Increased the runtime performance by a factor of over 20 by rewriting performance-critical parts in C++',
  'energy.electricityPrice.line3': 'Increased UX by introducing a modern user interface, based on TypeScript and Angular',

  // Healthcare
  'healthcare.llmBilling.title': 'LLM-Enabled Medical Billing',
  'healthcare.llmBilling.line0': 'Built a system to automatically write medical bills',
  'healthcare.llmBilling.line1': 'System uses LLMs to retrieve billable services from unstructured medical documents',
  'healthcare.llmBilling.line2': 'Applies complex business rules to arrive at an invoice to be forwarded to the health insurer',
  'healthcare.readmission.title': 'Readmission Risk Reduction',
  'healthcare.readmission.line0': "Developed a system for predicting the expected duration of each patient's stay in hospital",
  'healthcare.readmission.line1': 'Used data from over 100 hospitals over multiple years',
  'healthcare.readmission.line2': 'System is used to improve capacity planning',
  'healthcare.hospitalRp.title': 'Hospital Resource Planning',
  'healthcare.hospitalRp.line0': 'Analysed patient data to predict the probability of a patient being rehospitalised due to chronic illness',
  'healthcare.hospitalRp.line1': 'Resulting system generates significantly better predictions than the existing benchmark system',
  'healthcare.hospitalRp.line2': 'Prediction system enables a better planning process',

  // Automotive
  'automotive.churnEu.title': 'Customer Churn in a Large European Market',
  'automotive.churnEu.line0': 'Predicted customer loyalty across sales and aftersales for every single customer in one of Europe\'s largest markets',
  'automotive.churnEu.line1': 'Built a large set of relational features',
  'automotive.churnEu.line2': 'Productionised the successful prototype using AWS, from ETL to connecting the pipeline to SAP/CRM',
  'automotive.churnEu.line3': 'The system enables targeted use of resources for all sales and aftersales campaigns in this large European country',
  'automotive.churnNonEu.title': 'Customer Churn in a Large Non-European Market',
  'automotive.churnNonEu.line0': 'Developed a prediction system for customer loyalty in aftersales for every single customer in a large non-European country',
  'automotive.churnNonEu.line1': 'Built ETL processes and relational features',
  'automotive.churnNonEu.line2': 'The system enables targeted use of resources for all aftersales campaigns in this large non-European country',

  // Retail
  'retail.returnPrediction.title': 'Product Return Prediction in Online Retail',
  'retail.returnPrediction.line0': 'Developed a system for predicting product returns for online retailers',
  'retail.returnPrediction.line1': 'The system predicts the likelihood of a product being returned as the customer assembles their virtual shopping basket',
  'retail.returnPrediction.line2': 'This enables intervention strategies when the likelihood of a product return is deemed to be too high',
  'retail.returnPrediction.line3': 'Achieved an estimated six-figure saving',
  'retail.salesPrediction.title': 'Sales Prediction',
  'retail.salesPrediction.line0': 'Developed a system for sales prediction to optimise global warehousing and logistics',
  'retail.salesPrediction.line1': 'Built features using self-developed algorithms for automated feature engineering, benchmarked against established manual features',
  'retail.salesPrediction.line2': 'Resulting automatic features generate significantly better predictions than the existing prediction system',
  'retail.salesPrediction.line3': 'Prediction system enables considerably better planning',

  // Customer service
  'customerService.reactivation.title': 'Customer Reactivation',
  'customerService.reactivation.line0': 'Developed a prediction system for customer reactivation of a German state-owned lottery using machine learning',
  'customerService.reactivation.line1': 'Evaluated the system using A/B testing on tens of thousands of customers',
  'customerService.tenantChurn.title': 'Tenant Churn Prediction in Real Estate',
  'customerService.tenantChurn.line0': 'Developed a prediction system for tenants cancelling their contracts',
  'customerService.tenantChurn.line1': 'Resulting prediction system enables a better planning process',

  // Data privacy
  'dataPrivacy.anonymisation.title': 'LLM-Powered Document Anonymisation',
  'dataPrivacy.anonymisation.line0': 'Built a system to automatically redact sensitive personal information from documents',
  'dataPrivacy.anonymisation.line1': 'System uses LLMs and Natural Language Processing to identify sensitive personal information',
  'dataPrivacy.anonymisation.line2': 'The LLMs used are hosted in a GDPR-compliant manner',
  'dataPrivacy.anonymisation.line3': 'Resulting system allows for the upload of PDF files, often containing hundreds of pages, and reliably returns a fully redacted version',
  'dataPrivacy.anonymisation.line4': 'Even works for handwritten comments',
  'dataPrivacy.synthetic.title': 'Synthetic Document Generation',
  'dataPrivacy.synthetic.line0': 'Generated realistic synthetic documents for training AI systems using LLMs',
  'dataPrivacy.synthetic.line1': 'Addressed the scarcity of real documents containing highly sensitive and private information',
  'dataPrivacy.synthetic.line2': 'Produced training data that preserves the structural and semantic properties of real documents without exposing any actual personal data',
  'dataPrivacy.synthetic.line3': 'Avoids running afoul of data protection laws while still enabling effective AI model training',

  // Other
  'other.predictiveMaintenance.title': 'Predictive Maintenance',
  'other.predictiveMaintenance.line0': 'Developed a predictive maintenance system based on sensor data collected from production machinery for optical components deployed worldwide (~300 GB)',
  'other.predictiveMaintenance.line1': 'Built features using self-developed algorithms for automated feature engineering, benchmarked against established manual features',
  'other.predictiveMaintenance.line2': 'Resulting automatic features generate significantly better predictions while taking considerably less time to build',
  'other.predictiveMaintenance.line3': 'System enables considerably better predictions than before',
  'other.audit.title': 'Digitally Enabled Audit',
  'other.audit.line0': 'Designed and developed tools and components for ETL, integration and processing to be used for auditing businesses',
  'other.audit.line1': 'Established best-practice coding standards within the software development team',
  'other.audit.line2': 'Significantly improved code quality and maintainability of the existing codebase',
  'other.audit.line3': 'Introduced static typing, static code analysis and functional-style programming to the Python code',
  'other.audit.line4': 'The developed component for extracting data from SAP is now being used for auditing businesses worldwide',
};
