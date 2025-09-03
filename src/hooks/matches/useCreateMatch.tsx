import { useState } from 'react';
import { IMatch } from '../../stores/useMatch';
import { IField, useSettingStore } from '../../stores/useSettings';

const DEFAULT_MATCH: IMatch = {
  id: '',
  date: '',
  start_time: '',
  end_time: '',
  field: { id: '', name: '', link_map: '', address: '' },
};

export type BottomMenu = 'calendar' | 'field';

export function useCreateMatchHooks({ openModal }: { openModal: () => void }) {
  const fields = useSettingStore(state => state.fields);

  const [match, setMatch] = useState<IMatch>(DEFAULT_MATCH);
  const [bottomMenu, setBottomMenu] = useState<BottomMenu>('calendar');

  const openBottomMenu = (menu: BottomMenu) => {
    setBottomMenu(menu);
    openModal();
  };

  const handleSelectField = (item: IField) => {
    setMatch(prev => ({ ...prev, field: item }));
  };

  const handleSelectDate = (date: string) => {
    setMatch(prev => ({ ...prev, date }));
  };

  return {
    match,
    fields,
    bottomMenu,
    openBottomMenu,
    handleSelectField,
    handleSelectDate,
  };
}
