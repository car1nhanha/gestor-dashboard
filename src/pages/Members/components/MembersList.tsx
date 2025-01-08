import React, { useEffect, useState } from 'react';
import { supabase } from '../../../utils/supabase';
import { Member } from '../../../types';

export function MembersList() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMembers() {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('name');

      if (!error && data) {
        setMembers(data);
      }
      setLoading(false);
    }

    loadMembers();
  }, []);

  if (loading) {
    return <div className="text-center">Carregando...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <ul className="divide-y divide-gray-200">
        {members.map((member) => (
          <li key={member.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {member.name}
                </p>
                <p className="text-sm text-gray-500 truncate">{member.email}</p>
              </div>
              <div className="text-sm text-gray-500">
                {member.role === 'admin' ? 'Administrador' : 'Membro'}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}