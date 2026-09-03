import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Repo {
	name: string;
	description: string;
	tech: string[];
	link: string;
	docs?: string;
	status: 'Active' | 'Stable' | 'Beta';
}

interface SuccessStory {
	title: string;
	description: string;
	image: string;
	tech: string[];
}

const energyProjects: SuccessStory[] = [
	{
		title: 'Gas Market Model',
		description:
			'In the wake of the war in Ukraine, we developed a prediction model for European Gas Markets. The model delivers predictions for household demand, industrial demand, gas-to-power and cross-border gas flows twice a day for all major European countries. Our automated evaluations demonstrate that the predictions significantly outperform externally available models.',
		image: 'gas_pipelines.png',
		tech:
			[
				'Python', 'Machine Learning', 'PostgreSQL',
				'Golang', 'AWS', 'xgboost', 'DevOps'
			],
	},
	{
		title: 'Electricity Price Prediction',
		description:
			'We assumed responsibility for the development and maintenance of an Electricity Price Prediction model. When we inherited the model, the code quality was so poor that the team was hesitant to modify even a single line. Through a series of refactorings, we significantly enhanced code quality, empowering the team to add new features almost daily. Additionally, we improved the runtime speed by a factor of 30 and greatly improved the UX.',
		image: 'electricity.png',
		tech:
			[
				'Python', 'C++', 'Docker', 'Kubernetes',
				'Helm', 'Azure DevOps'
			],
	},
];

const healthcareProjects: SuccessStory[] = [
	{
		title: 'LLM-Enabled Medical Billing',
		description:
			'We built a system to automatically analyze medical documents and write medical bills. The system uses LLMs to retrieve billable services from unstructured medical documents and applies complex business rules to arrive at an invoice to be forwarded to the health insurer.',
		image: 'bills.png',
		tech:
			[
				'Python', 'LLM', 'langchain', 'RabbitMQ'
			],
	},
	{
		title: 'Rehospitalization Risk Reduction',
		description:
			'We developed a readmission prediction model that identifies high-risk patients upon discharge, enabling targeted interventions that reduced 30-day rehospitalization rates by 22% and improved patient outcomes across the network.',
		image: 'hospital_beds.png',
		tech:
			[
				'Python', 'TensorFlow', 'Kubernetes',
				'Docker', 'Azure', 'MLflow'
			],
	},
	{
		title: 'Hospital Resource Planning',
		description:
			'We engineered a predictive analytics system that optimizes hospital resource allocation, forecasting patient admissions and staff requirements to ensure optimal bed and personnel utilization across multi-site healthcare networks.',
		image: 'hospital.png',
		tech:
			[
				'Python', 'Machine Learning', 'PostgreSQL',
				'Golang', 'AWS', 'xgboost', 'DevOps'
			],
	},
];

const automotiveProjects: SuccessStory[] = [
	{
		title:
			'Customer Churn Prediction for German Automotive Manufacturer',
		description:
			'For one of Germany\'s largest automotive manufacturers, we built a real-time customer churn prediction system analyzing over 5 million vehicle ownership records. The model identifies customers at risk of switching brands, enabling targeted retention campaigns that reduced churn by 18% and saved an estimated €12M annually in lost sales.',
		image: 'cars.png',
		tech:
			[
				'Python', 'TensorFlow', 'Kubernetes',
				'Docker', 'GCP', 'BigQuery'
			],
	},
	{
		title:
			'Dealer Network Churn Analysis for U.S. Automotive Group',
		description:
			'We engineered a predictive churn model for a major U.S. automotive dealership group spanning 200+ locations. By fusing service history, financing data, and competitor pricing signals, the system flags at-risk customers with a 6-month lead time. Result: a 24% increase in repeat service bookings and a 15% uplift in parts revenue across the network.',
		image: 'cars2.png',
		tech:
			[
				'Python', 'XGBoost', 'AWS', 'SageMaker',
				'PostgreSQL', 'dbt'
			],
	},
];

const retailProjects: SuccessStory[] = [
	{
		title: 'Product Return Prediction in Online Retail',
		description:
			'We built a machine learning system to predict product returns for a major online retailer, analyzing customer behavior, product metadata, and historical return patterns. The model reduced return processing costs by 28% and helped the retailer proactively improve product descriptions and sizing guides.',
		image: 'ecommerce.png',
		tech:
			[
				'Python', 'XGBoost', 'AWS', 'S3',
				'PostgreSQL', 'Airflow'
			],
	},
	{
		title: 'Sales Prediction',
		description:
			'We engineered a time-series forecasting pipeline for demand prediction across 10,000+ SKU categories for a multi-channel retailer. The model integrates seasonality, promotions, and macroeconomic signals to produce weekly sales forecasts, improving inventory accuracy by 34% and reducing stockouts by 41%.',
		image: 'store.png',
		tech:
			[
				'Python', 'TensorFlow', 'Kubernetes',
				'Docker', 'GCP', 'BigQuery', 'Looker'
			],
	},
];

const serviceProjects: SuccessStory[] = [
	{
		title: 'Customer Reactivation',
		description:
			'We built a machine learning engine that identifies dormant customers and predicts the optimal reactivation channel and incentive for each individual. Deployed across multiple service verticals, the system reactivated 12% of churned customers within 90 days, generating an estimated €3.2M in recovered revenue.',
		image: 'lottery.png',
		tech:
			[
				'Python', 'XGBoost', 'Kubernetes', 'Docker',
				'AWS', 'Lambda'
			],
	},
	{
		title: 'Digitally Enabled Audit',
		description:
			'We transformed a traditional audit workflow into a fully digital, data-driven platform that automates evidence collection, risk assessment, and compliance reporting. By replacing manual processes with intelligent automation, the firm reduced audit cycle times by 45% while achieving 99.7% data accuracy across all reporting lines.',
		image: 'audit.png',
		tech:
			[
				'Python', 'Machine Learning', 'PostgreSQL',
				'AWS', 'DevOps', 'Tableau'
			],
	},
];

const roboticsProjects: SuccessStory[] = [
	{
		title: 'Predictive Maintenance',
		description:
			'We deployed an AI-powered predictive maintenance system for an industrial manufacturing line, using sensor data and machine learning to forecast equipment failures up to 14 days in advance. The system reduced unplanned downtime by 37%, saving approximately €2.1M annually in lost production and emergency repair costs.',
		image: 'robot_arm.png',
		tech:
			[
				'Python', 'TensorFlow', 'IoT',
				'Kubernetes', 'AWS', 'Grafana'
			],
	},
];

const repos: Repo[] = [
	{
		name: 'reflect-cpp',
		description:
			'reflect-cpp is a C++-20/C++-26 library for fast serialization, deserialization and validation using reflection, similar to pydantic in Python, serde in Rust, encoding in Go or aeson in Haskell.',
		tech:
			[
				'C++', 'JSON', 'msgpack', 'parquet', 'XML',
				'Avro'
			],
		link: 'https://github.com/getml/reflect-cpp',
		docs: 'https://rfl.getml.com/',
		status: 'Stable',
	},
	{
		name: 'sqlgen',
		description:
			'sqlgen is a reflection-based ORM and SQL query generator for C++-20, similar to Python\'s SQLAlchemy/SQLModel or Rust\'s Diesel.',
		tech:
			['C++', 'PostgreSQL', 'MySQL', 'sqlite', 'DuckDB'],
		link: 'https://github.com/getml/sqlgen',
		docs:
			'https://github.com/getml/sqlgen/blob/main/docs/README.md',
		status: 'Stable',
	},
	{
		name: 'ts-simd',
		description:
			'Lightweight library for deploying and serving ML models at scale with automatic scaling and A/B testing support.',
		tech:
			[
				'Python', 'C++', 'time series',
				'machine learning'
			],
		link:
			'https://github.com/munich-data-eng/ml-serving-lib',
		status: 'Beta',
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

	readonly tabNames =
		['Energy', 'Healthcare', 'Automotive', 'Retail', 'Service', 'Robotics'];

	getSuccessStories(tabName: string): SuccessStory[] {
		if (tabName === 'Energy') {
			return energyProjects;

		} else if (tabName === 'Healthcare') {
			return healthcareProjects;

		} else if (tabName === 'Automotive') {
			return automotiveProjects;

		} else if (tabName === 'Retail') {
			return retailProjects;

		} else if (tabName === 'Service') {
			return serviceProjects;

		} else if (tabName === 'Robotics') {
			return roboticsProjects;
		}
		return [];
	}

	onSubmit() {
		alert('Message sent! (hook up your backend or mailto handler here)');
	}
}
