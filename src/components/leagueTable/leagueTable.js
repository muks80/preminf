import '../App.css';
import { Container, Table, Segment } from 'semantic-ui-react';
import PageHeader from '../pageHeader';
import TableRow from './tableRow';
import useAxios from '../../apis/useAxios';
import { useEffect } from 'react';

const LeagueTable = () => {
  const { data: table, isPending: tablePending, error: tableError } 
          = useAxios('leagueTable/3456', (1000 * 60 *60));

  useEffect (() => {
  }, [table])
  
    return (
        <Container className='App'>
            <Container className='border'>
            <PageHeader title={'League Table'} />
            <Segment style={{margin: '15px', padding: '0px', border: '0px'}}>
            <Table striped>
                <Table.Header>
                  <Table.Row textAlign='center'>
                    <Table.HeaderCell collapsing >Rank</Table.HeaderCell>
                    <Table.HeaderCell collapsing ></Table.HeaderCell>
                    <Table.HeaderCell collapsing textAlign='left'>Club</Table.HeaderCell>
                    <Table.HeaderCell collapsing >Played</Table.HeaderCell>
                    <Table.HeaderCell collapsing >Won</Table.HeaderCell>
                    <Table.HeaderCell collapsing >Drawn</Table.HeaderCell>
                    <Table.HeaderCell collapsing >Lost</Table.HeaderCell>
                    <Table.HeaderCell collapsing >GF</Table.HeaderCell>
                    <Table.HeaderCell collapsing >GA</Table.HeaderCell>
                    <Table.HeaderCell collapsing >GD</Table.HeaderCell>
                    <Table.HeaderCell collapsing >Points</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  { tableError && <tr><td>{tableError}</td></tr> }
                  { tablePending && <tr><td>Loading...</td></tr> }
                  { table && table.data.api.standings[0].map(row => {return <TableRow row={row} key={row.rank}/>})}
                </Table.Body>
            </Table>
            </Segment>
            </Container>
        </Container>
    );
}
 
export default LeagueTable;