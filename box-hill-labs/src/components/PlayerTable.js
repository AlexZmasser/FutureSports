import React from 'react';
import { Container, Table } from 'react-bootstrap';
import playersData from '../JSON/players.json';

function PlayerTable() {
  return (
    <Container id="Players">
      <h2 className="text-center">Players</h2>
      <div style={{ maxHeight: '400px', overflowY: 'scroll', marginBottom: ' 50px' }}>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Jersey Number</th>
              <th>Height</th>
              <th>Batting Average</th>
              <th>Hometown</th>
            </tr>
          </thead>
          <tbody>
            {playersData.map((player, index) => (
              <tr key={index}>
                <td>{player.firstName}</td>
                <td>{player.lastName}</td>
                <td>{player.position}</td>
                <td>{player.jerseyNumber}</td>
                <td>{player.height}</td>
                <td>{player.battingAverage}</td>
                <td>{player.hometown}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default PlayerTable;
