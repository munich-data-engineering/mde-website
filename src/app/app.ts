import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterOutlet} from '@angular/router';

interface Repo {
	name: string;
	description: string;
	tech: string[];
	link: string;
	docs?: string;
	status: 'Active'|'Stable'|'Beta';
}

interface SuccessStory {
	title: string;
	description: string[];
	image: string;
	tech: string[];
}

const energyProjects: SuccessStory[] = [
	{
		title: 'Gas Market Model',
		description: [
			'Project was commissioned in the wake of the war in Ukraine',
			'Developed a machine learning system for predicting all critical components of the gas market',
			'System was developed from scratch: ETL, Data collection, modelling, productive implementation, cloud orchestration, frontend',
			'System reliably delivers predictions on a daily basis'
		],
		image: 'gas_pipelines.png',
		tech: [
			'Python', 'Machine Learning', 'PostgreSQL', 'Golang',
			'AWS', 'xgboost', 'DevOps', 'TypeScript', 'Angular'
		],
	},
	{
		title: 'Electricity Price Prediction',
		description: [
			'Introduced static typing, static code analysis, automated unit tests and functional-style programming to the Python code',
			'Significantly improved the code quality and maintainability of the existing codebase as well as ETL processes',
			'Increased the runtime performance by a factor of over 20 by rewriting performance-critical parts in C++',
			'Increased UX by introducing a modern user interface, based on TypeScript and Angular',
		],
		image: 'electricity.png',
		tech: [
			'Python', 'C++', 'Docker', 'Kubernetes', 'Helm',
			'Azure DevOps', 'TypeScript', 'Angular'
		],
	},
];

const healthcareProjects: SuccessStory[] = [
	{
		title: 'LLM-Enabled Medical Billing',
		description: [
			'Built a system to automatically write medical bills',
			'System uses LLMs to retrieve billable services from unstructured medical documents',
			'Applies complex business rules to arrive at an invoice to be forwarded to the health insurer',
		],
		image: 'bills.png',
		tech: [
			'Python', 'LLM', 'langchain', 'RabbitMQ', 'Kubernetes',
			'Helm'
		],
	},
	{
		title: 'Readmission Risk Reduction',
		description: [
			'Developed a system for predicting the expected duration of each patient\'s stay in hospital',
			'Used data from over 100 hospitals over multiple years',
			'System is used to improve capacity planning',
		],
		image: 'hospital_beds.png',
		tech: ['Python', 'Machine Learning', 'PostgreSQL'],
	},
	{
		title: 'Hospital Resource Planning',
		description: [
			'Analysed patient data to predict the probability of a patient being rehospitalised due to chronic illness',
			'Resulting system generates significantly better predictions than the existing benchmark system',
			'Prediction system enables a better planning process'
		],
		image: 'hospital.png',
		tech: ['Python', 'Machine Learning', 'PostgreSQL'],
	},
];

const automotiveProjects: SuccessStory[] = [
	{
		title: 'Customer Churn in a Large European Market',
		description: [
			'Predicted customer loyalty across sales and aftersales for every single customer in one of Europe\'s largest markets',
			'Built a large set of relational features',
			'Productionised the successful prototype using AWS, from ETL to connecting the pipeline to SAP/CRM',
			'The system enables targeted use of resources for all sales and aftersales campaigns in this large European country',
		],
		image: 'cars.png',
		tech: [
			'Python', 'Machine Learning', 'PostgreSQL', 'AWS',
			'Airflow', 'Jenkins', 'Docker', 'SAP/CRM'
		],
	},
	{
		title: 'Customer Churn in a Large Non-European Market',
		description: [
			'Developed a prediction system for customer loyalty in aftersales for every single customer in a large non-European country',
			'Built ETL processes and relational features',
			'The system enables targeted use of resources for all aftersales campaigns in this large non-European country'
		],
		image: 'cars2.png',
		tech: [
			'Python',
			'Machine Learning',
			'sqlite',
		],
	},
];

const retailProjects: SuccessStory[] = [
	{
		title: 'Product Return Prediction in Online Retail',
		description: [
			'Developed a system for predicting product returns for online retailers',
			'The system predicts the likelihood of a product being returned as the customer assembles their virtual shopping basket',
			'This enables intervention strategies when the likelihood of a product return is deemed to be too high',
			'Achieved an estimated six-figure saving'
		],
		image: 'ecommerce.png',
		tech: [
			'Python',
			'Machine Learning',
			'Deep Learning',
			'MySQL',
		],
	},
	{
		title: 'Sales Prediction',
		description: [
			'Developed a system for sales prediction to optimise global warehousing and logistics',
			'Built features using self-developed algorithms for automated feature engineering, benchmarked against established manual features',
			'Resulting automatic features generate significantly better predictions than the existing prediction system',
			'Prediction system enables considerably better planning'
		],
		image: 'store.png',
		tech: [
			'Python',
			'Machine Learning',
			'PostgreSQL',
		],
	},
];

const customerServiceProjects: SuccessStory[] = [
	{
		title: 'Customer Reactivation',
		description: [
			'Developed a prediction system for customer reactivation of a German state-owned lottery using machine learning',
			'Evaluated the system using A/B testing on tens of thousands of customers',
		],
		image: 'lottery.png',
		tech: [
			'Python', 'XGBoost', 'Kubernetes', 'Docker', 'AWS',
			'Lambda'
		],
	},
	{
		title: 'Tenant Churn Prediction in Real Estate',
		description: [
			'Developed a prediction system for tenants cancelling their contracts',
			'Resulting prediction system enables a better planning process',
		],
		image: 'real_estate.png',
		tech: [
			'Python', 'XGBoost', 'Machine Learning',
			'Microsoft SQL Server'
		],
	}
];

const accountingProjects: SuccessStory[] = [
	{
		title: 'Digitally Enabled Audit',
		description: [
			'Designed and developed tools and components for ETL, integration and processing to be used for auditing businesses',
			'Established best-practice coding standards within the software development team',
			'Significantly improved code quality and maintainability of the existing codebase',
			'Introduced static typing, static code analysis and functional-style programming to the Python code',
			'The developed component for extracting data from SAP is now being used for auditing businesses worldwide',
		],
		image: 'audit.png',
		tech: ['Python', 'SAP S4/HANA', 'ABAP', 'Docker'],
	},

];

const otherProjects: SuccessStory[] = [
	{
		title: 'Predictive Maintenance',
		description: [
			'Developed a predictive maintenance system based on sensor data collected from production machinery for optical components deployed worldwide (~300 GB)',
			'Built features using self-developed algorithms for automated feature engineering, benchmarked against established manual features',
			'Resulting automatic features generate significantly better predictions while taking considerably less time to build',
			'System enables considerably better predictions than before'
		],
		image: 'robot_arm.png',
		tech: ['Python', 'Machine Learning', 'PostgreSQL'],
	},
	{
		title: 'LLM-Powered Document Anonymisation',
		description: [
			'Built a system to automatically redact sensitive personal information from documents',
			'System uses LLMs and Natural Language Processing to identify sensitive personal information',
			'The LLMs used are hosted in a GDPR-compliant manner',
			'Resulting system allows for the upload of PDF files, often containing hundreds of pages, and reliably returns a fully redacted version',
			'Even works for handwritten comments'
		],
		image: 'redactions.png',
		tech: [
			'Python', 'LLM', 'OCR', 'langchain', 'RabbitMQ',
			'Kubernetes', 'Helm'
		],
	},
];

const repos: Repo[] = [
	{
		name: 'reflect-cpp',
		description:
		    'reflect-cpp is a C++-20/C++-26 library for fast serialization, deserialization and validation using reflection, similar to pydantic in Python, serde in Rust, encoding in Go or aeson in Haskell.',
		tech: ['C++', 'JSON', 'msgpack', 'parquet', 'XML', 'Avro'],
		link: 'https://github.com/getml/reflect-cpp',
		docs: 'https://rfl.getml.com/',
		status: 'Stable',
	},
	{
		name: 'sqlgen',
		description:
		    'sqlgen is a reflection-based ORM and SQL query generator for C++-20, similar to Python\'s SQLAlchemy/SQLModel or Rust\'s Diesel.',
		tech: ['C++', 'PostgreSQL', 'MySQL', 'sqlite', 'DuckDB'],
		link: 'https://github.com/getml/sqlgen',
		docs: 'https://getml.github.io/sqlgen/',
		status: 'Stable',
	},
];

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet, MatTabsModule, MatCardModule, MatButtonModule,
		MatIconModule, FormsModule
	],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	readonly title = signal('Munich Data Engineering');

	activeTab = signal(0);

	readonly repos: Repo[] = repos;

	readonly tabNames = [
		'Energy', 'Healthcare', 'Automotive', 'Retail',
		'Customer Service', 'Accounting', 'Other'
	];

	getSuccessStories(tabName: string): SuccessStory[] {
		if (tabName === 'Energy') {
			return energyProjects;

		} else if (tabName === 'Healthcare') {
			return healthcareProjects;

		} else if (tabName === 'Automotive') {
			return automotiveProjects;

		} else if (tabName === 'Retail') {
			return retailProjects;

		} else if (tabName === 'Customer Service') {
			return customerServiceProjects;

		} else if (tabName === 'Accounting') {
			return accountingProjects;

		} else if (tabName === 'Other') {
			return otherProjects;
		}
		return [];
	}
}
