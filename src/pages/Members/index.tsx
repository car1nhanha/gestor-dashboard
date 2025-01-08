import React from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { VolunteerList } from './components/VolunteerList';
import { InviteButton } from './components/InviteButton';

export function Members() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Voluntários"
        description="Gerencie voluntários e envie convites para novos participantes"
      />
      
      <div className="flex justify-end">
        <InviteButton />
      </div>

      <VolunteerList />
    </div>
  );
}