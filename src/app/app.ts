import {Component, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterOutlet} from '@angular/router';

interface Project {
	title: string;
	description: string;
	duration: string;
	tech: string[];
	status: 'Completed'|'Active';
}

interface Repo {
	name: string;
	description: string;
	tech: string[];
	link: string;
	docs?: string;
	status: 'Active'|'Stable'|'Beta';
}

interface EnergyProject {
	title: string;
	description: string;
	image: string;
	tech: string[];
	duration: string;
}

interface HealthcareProject {
	title: string;
	description: string;
	image: string;
	tech: string[];
	duration: string;
}

interface AutomotiveProject {
	title: string;
	description: string;
	image: string;
	tech: string[];
	duration: string;
}

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet, MatTabsModule, MatCardModule, MatButtonModule,
		MatIconModule
	],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	readonly title = signal('Munich Data Engineering');

	activeTab = signal(0);

	readonly completedProjects: Project[] = [
		{
			title: 'Cloud-Native Data Platform',
			description:
			    'Built a scalable data platform on Kubernetes, processing 10TB+ daily with real-time analytics and automated ML model pipelines.',
			duration: '18 months',
			tech:
			    [
				    'Kubernetes', 'Airflow', 'Python',
				    'BigQuery', 'TensorFlow'
			    ],
			status: 'Completed',
		},
		{
			title: 'Real-Time Analytics Pipeline',
			description:
			    'Designed and implemented a streaming data pipeline using Apache Kafka and Flink for sub-second analytics dashboards.',
			duration: '12 months',
			tech: ['Apache Kafka', 'Flink', 'ClickHouse', 'React'],
			status: 'Completed',
		},
		{
			title: 'Enterprise Cloud Migration',
			description:
			    'Led migration of legacy data systems to cloud-native architecture, reducing costs by 40% and improving uptime to 99.99%.',
			duration: '24 months',
			tech:
			    [
				    'AWS', 'Terraform', 'PostgreSQL', 'dbt',
				    'Airbyte'
			    ],
			status: 'Completed',
		},
	];

	readonly activeProjects: Project[] = [
		{
			title: 'Data Governance Framework',
			description:
			    'Developing a comprehensive data governance framework with automated lineage tracking, quality checks, and compliance reporting.',
			duration: 'Ongoing',
			tech:
			    [
				    'OpenMetadata', 'Great Expectations',
				    'Python', 'GraphQL'
			    ],
			status: 'Active',
		},
	];

	readonly energyProjects: EnergyProject[] = [
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
			duration: '6 months',
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
			duration: '8 months',
		},
	];

	readonly healthcareProjects: HealthcareProject[] = [
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
			duration: '8 months',
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
			duration: '6 months',
		},
		{
			title: 'Medical Billing Optimization',
			description:
			    'We built an intelligent claims processing pipeline that automates insurance verification, detects billing anomalies, and accelerates reimbursement cycles — reducing claim denials by 35% and cutting processing time from days to hours.',
			image: 'bills.png',
			tech:
			    [
				    'Python', 'C++', 'Kubernetes', 'Airflow',
				    'AWS', 'DevOps'
			    ],
			duration: '10 months',
		},
	];

	readonly automotiveProjects: AutomotiveProject[] = [
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
			duration: '9 months',
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
			duration: '7 months',
		},
	];


	readonly repos: Repo[] = [
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

	readonly tabNames = [
		'Energy', 'Healthcare', 'Automotive', 'Completed Projects',
		'Active Projects'
	];
}
