import { useState } from 'react';
import { IMatch, IParticipant } from '../../stores/useMatch';
import { IField, useSettingStore } from '../../stores/useSettings';

export const DEFAULT_PARTICIPANT: IParticipant = {
  id: Date.now().toString(),
  gender: 'Cowo',
  attendance: 0,
  playerLevel: { id: '', name: '' },
};

const DEFAULT_MATCH: IMatch = {
  id: '',
  date: '',
  start_time: '',
  end_time: '',
  field: { id: '', name: '', link_map: '', address: '' },
  participants: [],
};

export type BottomMenu = 'calendar' | 'field' | 'participant';

export function useCreateMatchHooks({ openModal }: { openModal: () => void }) {
  const fields = useSettingStore(state => state.fields);

  const [match, setMatch] = useState<IMatch>(DEFAULT_MATCH);
  const [bottomMenu, setBottomMenu] = useState<BottomMenu>('calendar');
  const [bottomModalHeight, setBottomModalHeight] = useState<number>(450);

  const openBottomMenu = (menu: BottomMenu) => {
    setBottomMenu(menu);
    setBottomModalHeight(_ => {
      if (menu === 'participant') {
        return 600;
      }
      return 450;
    });
    openModal();
  };

  const handleSelectField = (item: IField) => {
    setMatch(prev => ({ ...prev, field: item }));
  };

  const handleSelectDate = (date: string) => {
    setMatch(prev => ({ ...prev, date }));
  };

  const addParticipant = (form: IParticipant) => {
    const data = { ...form };
    data.id = Date.now().toString();
    setMatch(prev => ({ ...prev, participants: [...prev.participants, data] }));
  };

  const deleteParticipant = (id: string) => {
    setMatch(prev => ({
      ...prev,
      participants: prev.participants.filter(
        participant => participant.id !== id,
      ),
    }));
  };

  return {
    match,
    fields,
    bottomMenu,
    bottomModalHeight,
    openBottomMenu,
    handleSelectField,
    handleSelectDate,
    addParticipant,
    deleteParticipant,
  };
}
