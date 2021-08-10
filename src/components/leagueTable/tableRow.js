import React from 'react';
import { Table, Image } from 'semantic-ui-react';

const TableRow = (props) => {
    return (
        <Table.Row>
            <Table.Cell textAlign='center'>{props.row.rank}</Table.Cell>
            <Table.Cell textAlign='center'><Image centered size='mini' src={props.row.logo}/></Table.Cell>
            <Table.Cell textAlign='left'>{props.row.teamName}</Table.Cell>
            <Table.Cell textAlign='center'>{props.row.all.matchsPlayed}</Table.Cell>
            <Table.Cell textAlign='center'>{props.row.all.win}</Table.Cell>
            <Table.Cell textAlign='center'>{props.row.all.draw}</Table.Cell>
            <Table.Cell textAlign='center'>{props.row.all.lose}</Table.Cell>
            <Table.Cell textAlign='center'>{props.row.all.goalsFor}</Table.Cell>
            <Table.Cell textAlign='center'>{props.row.all.goalsAgainst}</Table.Cell>
            <Table.Cell textAlign='center'>{props.row.goalsDiff}</Table.Cell>
            <Table.Cell textAlign='center'>{props.row.points}</Table.Cell>
        </Table.Row>
    );
}
 
export default TableRow;