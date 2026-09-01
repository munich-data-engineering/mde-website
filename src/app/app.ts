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
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, MatTabsModule, MatCardModule, MatButtonModule, MatIconModule
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
      tech: ['Kubernetes', 'Airflow', 'Python', 'BigQuery', 'TensorFlow'],
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
      tech: ['AWS', 'Terraform', 'PostgreSQL', 'dbt', 'Airbyte'],
      status: 'Completed',
    },
  ];

  readonly activeProjects: Project[] = [
    {
      title: 'Data Governance Framework',
      description:
          'Developing a comprehensive data governance framework with automated lineage tracking, quality checks, and compliance reporting.',
      duration: 'Ongoing',
      tech: ['OpenMetadata', 'Great Expectations', 'Python', 'GraphQL'],
      status: 'Active',
    },
  ];

  readonly energyProjects: EnergyProject[] = [
    {
      title: 'Gas Market Model',
      description:
          'In the wake of the war in Ukraine, we developed a prediction model for European Gas Markets. The model delivers predictions for household demand, industrial demand, gas-to-power and cross-border gas flows twice a day for all major European countries. Our automated evaluations demonstrate that the predictions significantly outperform externally available models.',
      image: 'pipeline.png',
      tech:
          [
            'Python', 'Machine Learning', 'PostgreSQL', 'Golang', 'AWS',
            'xgboost', 'DevOps'
          ],
      duration: '6 months',
    },
    {
      title: 'Electricity Price Prediction',
      description:
          'We assumed responsibility for the development and maintenance of an Electricity Price Prediction model. When we inherited the model, the code quality was so poor that the team was hesitant to modify even a single line. Through a series of refactorings, we significantly enhanced code quality, empowering the team to add new features almost daily. Additionally, we improved the runtime speed by a factor of 30 and greatly improved the UX.',
      image: 'power_lines.png',
      tech: ['Python', 'C++', 'Docker', 'Kubernetes', 'Helm', 'Azure DevOps'],
      duration: '8 months',
    },
  ];

  readonly repos: Repo[] = [
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
      docs: 'https://github.com/getml/sqlgen/blob/main/docs/README.md',
      status: 'Stable',
    },
    {
      name: 'ts-simd',
      description:
          'Lightweight library for deploying and serving ML models at scale with automatic scaling and A/B testing support.',
      tech: ['Python', 'C++', 'time series', 'machine learning'],
      link: 'https://github.com/munich-data-eng/ml-serving-lib',
      status: 'Beta',
    },
  ];

  readonly tabNames = ['Energy', 'Completed Projects', 'Active Projects'];
}
