import styles from './Skills.module.scss';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import {Chip, Divider} from '@material-ui/core';
import {useState} from 'react';
import {Radar} from "react-chartjs-2";
import {
  AssessmentTwoTone,
  BrushTwoTone,
  BubbleChartTwoTone,
  CodeTwoTone,
  DesktopMacTwoTone,
  StorageTwoTone,
  TimelineTwoTone
} from "@material-ui/icons";

export default function Skills() {

  const skills = [
    {key: 0, label: 'Programming Languages', icon: <CodeTwoTone/>},
    {key: 1, label: 'Distributed Application & Microservices', icon: <BubbleChartTwoTone/>},
    {key: 2, label: 'Databases', icon: <StorageTwoTone/>},
    {key: 3, label: 'Frontend Development', icon: <DesktopMacTwoTone/>},
    {key: 4, label: 'Design Language', icon: <BrushTwoTone/>},
    {key: 5, label: 'Machine Learning', icon: <TimelineTwoTone/>},
    {key: 6, label: 'Development Process', icon: <AssessmentTwoTone/>}
  ];

  const plChartData = {
    labels: ['Java', 'C/C++', 'Python', 'Swift', 'GoLang', 'PHP', 'C#', 'Reactive Programming'],
    datasets: [
      {
        label: 'My programming skills',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [92, 72, 84, 77, 73, 69, 84, 82]
      }
    ]
  };

  const dapmChartData = {
    labels: ['Microservices Architecture Pattern', 'DevOps',
      'OpenAPI', 'HATEOAS', 'Service Discovery', 'Docker', 'Kubernetes',
      'GraphQL', 'Terraform', 'RabbitMQ', 'Sockets', 'Redis', 'Consul', 'OpenId Connect',
      'Oauth2', 'JWT Token Authentication', 'Protobuf', 'gRPC'],
    datasets: [
      {
        label: 'My distributed application & microservices skills',
        backgroundColor: 'rgba(255,154,99,0.2)',
        borderColor: 'rgba(255,154,99,1)',
        pointBackgroundColor: 'rgba(255,154,99,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255,154,99,1)',
        data: [88, 91, 82, 76, 72, 74, 71, 80, 71, 92, 87, 84, 71, 76, 77, 92, 65, 81]
      }
    ]
  };

  const dbChartData = {
    labels: ['Oracle, PL/SQL', 'MySQL', 'MariaDB',
      'Postgres, PL/pgSQL', 'MongoDB', 'Cassandra',
      'MSSQL/TSQL'
    ],
    datasets: [
      {
        label: 'My databases skills',
        backgroundColor: 'rgba(255,221,99,0.2)',
        borderColor: 'rgba(255,221,99,1)',
        pointBackgroundColor: 'rgba(255,221,99,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255,221,99,1)',
        data: [92, 84, 84, 73, 81, 78, 63]
      }
    ]
  };

  const ftDevChartData = {
    labels: ['HTML5', 'CSS 3.0', 'JavaScript', 'TypeScript',
      'jQuery', 'Angular', 'React', 'NextJs'
    ],
    datasets: [
      {
        label: 'My frontend development & design language skills',
        backgroundColor: 'rgba(74,174,67,0.2)',
        borderColor: 'rgba(74,174,67,1)',
        pointBackgroundColor: 'rgba(74,174,67,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(74,174,67,1)',
        data: [92, 92, 88, 95, 80, 84, 82, 80]
      }
    ]
  };

  const dlChartData = {
    labels: ['Material Design', 'Fluent Design', 'Carbon Design', 'Ant Design', 'Clarity Design'
    ],
    datasets: [
      {
        label: 'My design language skills',
        backgroundColor: 'rgba(129,67,174,0.2)',
        borderColor: 'rgba(129,67,174,1)',
        pointBackgroundColor: 'rgba(129,67,174,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(129,67,174,1)',
        data: [84, 77, 78, 75, 82]
      }
    ]
  };

  const mlChartData = {
    labels: ['keras', 'pandas', 'scikit-learn', 'spacy', 'nltk'
    ],
    datasets: [
      {
        label: 'My machine learning skills',
        backgroundColor: 'rgba(255,92,103,0.2)',
        borderColor: 'rgba(255,92,103,1)',
        pointBackgroundColor: 'rgba(255,92,103,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255,92,103,1)',
        data: [63, 77, 64, 71, 72]
      }
    ]
  };

  const dpChartData = {
    labels: ['Scrum', 'SAFe', 'Agile Development', 'Six Sigma', 'Kaizen', 'ITIL'
    ],
    datasets: [
      {
        label: 'My machine learning skills',
        backgroundColor: 'rgba(67,97,174,0.2)',
        borderColor: 'rgba(67,97,174,1)',
        pointBackgroundColor: 'rgba(67,97,174,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(67,97,174,1)',
        data: [88, 79, 85, 78, 79, 75]
      }
    ]
  };

  const [selectedSkill, setSelectedSkill] = useState(0);
  const [chartData, setChartData] = useState(plChartData);

  const handleSkillSelection = (value) => {
    setSelectedSkill(value);
    switch (value) {
      case 1:
        setChartData(dapmChartData);
        break;
      case 2:
        setChartData(dbChartData);
        break;
      case 3:
        setChartData(ftDevChartData);
        break;
      case 4:
        setChartData(dlChartData);
        break;
      case 5:
        setChartData(mlChartData);
        break;
      case 6:
        setChartData(dpChartData);
        break;
      default:
        setChartData(plChartData);
        break;
    }
  };

  return (
    <div id={"skills"}>
      <div className={styles.skillTitle}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: "wrap"
          }}><BuildOutlinedIcon fontSize={"large"}/>
          <div style={{marginLeft: "1rem", fontSize: "2rem"}}>My skills</div>
        </div>
      </div>
      <div className={styles.skillContainer}>
        <Divider/>
        <div style={{marginTop: "0.5rem", marginBottom: "0.5rem"}}>
          {skills.map((skill) =>
            <Chip
              key={skill.key}
              icon={skill.icon}
              label={skill.label}
              color={"primary"}
              size={"small"}
              variant={skill.key === selectedSkill ? 'default' : 'outlined'}
              style={{marginRight: "1rem"}}
              onClick={() => {
                handleSkillSelection(skill.key);
              }}
            />
          )}
        </div>
        <Divider/>
        <div style={{
          width: "100%", marginTop: "4rem",
          display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"
        }}>
          <div style={{width: "65%"}}>
            <Radar data={chartData} options={
              {
                scale: {
                  angleLines: {
                    display: false
                  },
                  ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100
                  }
                }
              }
            }/>
          </div>
        </div>

      </div>
    </div>
  )
}
