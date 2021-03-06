import React from 'react';
import { Table } from 'semantic-ui-react';
import ProjectListItem from './ProjectListItem';

const ProjectsList = ({data}) => {
  const projects = data.projects;
  const clients = data.clients;

  return (
    <Table columns={4} color="teal">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Billable</Table.HeaderCell>
          <Table.HeaderCell>Client</Table.HeaderCell>
          <Table.HeaderCell>Billing Cycle</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {projects && clients &&
          projects.map(project => (
            <ProjectListItem key={project.id} project={project} clients={clients} />
          ))}
      </Table.Body>
    </Table>
  );
};

export default ProjectsList;
