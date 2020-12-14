import styles from "./WorkHistory.module.scss";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {CardTravelOutlined} from "@material-ui/icons";

export default function WorkHistory() {
  const workHistories = [
    {
      key: 'acarda',
      company: 'System Architect & Team Lead at acarda GmbH',
      address: 'Frankfurt, Germany',
      url: 'https://acarda.de/',
      year: 'Dec 2015 - present',
      description: '- Maintain legacy infrastructure.<br/>' +
        '- Introduce distributed & microservices architecture.<br/>' +
        '- Migration strategy to migrate legacy infrastructure into more recent architecture' +
        '- Integrate developers into current architecture.<br/>' +
        '- Setup & maintain quality assurance gates for the products.<br/>' +
        '- DevOps compliance.<br/>' +
        '- Enterpise application development.<br/>'
    },
    {
      key: 'vietgreenland',
      company: 'Development Process Administration at Viet Greenland Co.Ltd',
      address: 'Hanoi, Vietnam',
      url: '',
      year: 'June 2011 - June 2012',
      description: '- Develop, deploy and maintain e-commerce platform.<br/>' +
        '- Introduced Kaizen into development process.'
    },
    {
      key: 'hanuRnD',
      company: 'Researcher at Hanu Research & Development',
      address: 'Hanoi, Vietnam',
      url: 'http://hanu.vn/',
      year: 'Aug 2010 - June 2011',
      description: '- Implement license plate number recognition & extraction using Adaptive Boosting and Blob Detection algorithm.<br/>' +
        '- Implement & integrate human detection system into camera using Adaptive Boosting.<br/>'
    },
    {
      key: 'hanusoft',
      company: 'Backend Team Lead at HanuSoft',
      address: 'Hanoi, Vietnam',
      url: 'http://hanu.vn/',
      year: 'Aug 2009 - June 2011',
      description: '- Develop base structure for backend developers to integrate their components.<br/> ' +
        '- Apply Extreme Programming to development process.<br/>' +
        '- Guiding developers on best development practices.<br/>'
    }

  ];

  return (
    <div id={"workHistory"}>
      <div className={styles.workHistoryTitle}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: "wrap"
          }}><CardTravelOutlined fontSize={"large"}/>
          <div style={{marginLeft: "1rem", fontSize: "2rem"}}>My work history</div>
        </div>
      </div>
      <div className={styles.workHistoryContent}>
        <TableContainer style={{width: "90%"}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{width: "35%"}}><strong>Experience</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workHistories.map((workHistory) =>
                <TableRow key={workHistory.key}>
                  <TableCell style={{lineHeight: "175%"}}>
                    <div>{workHistory.company}</div>
                    <div><a href={workHistory.url}>{workHistory.url}</a></div>
                    <div>{workHistory.address}</div>
                    <div>{workHistory.year}</div>
                  </TableCell>
                  <TableCell style={{verticalAlign: "top"}}>
                    <div dangerouslySetInnerHTML={{__html: workHistory.description}}>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
