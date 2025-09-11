import { useState } from 'react';
import { IMatch, IParticipant, useMatchStore } from '../../stores/useMatch';
import { IField, useSettingStore } from '../../stores/useSettings';
import { IErrorForm } from '../../types/navigation';

export const DEFAULT_PARTICIPANT: IParticipant = {
  id: Date.now().toString(),
  gender: 'Cowo',
  attendance: 0,
  playerLevel: { id: '', name: '' },
  players: [],
};

const DEFAULT_MATCH: IMatch = {
  id: '',
  date: '',
  start_time: '',
  end_time: '',
  total_field: 0,
  status: 'Mendatang',
  field: { id: '', name: '', link_map: '', address: '' },
  participants: [],
};

export type BottomMenu = 'calendar' | 'field' | 'participant';

export function useCreateMatchHooks({
  openModal,
  backButton,
}: {
  openModal: () => void;
  backButton: () => void;
}) {
  const fields = useSettingStore(state => state.fields);
  const addMatch = useMatchStore(state => state.setMatches);

  const [match, setMatch] = useState<IMatch>(DEFAULT_MATCH);
  const [bottomMenu, setBottomMenu] = useState<BottomMenu>('calendar');
  const [bottomModalHeight, setBottomModalHeight] = useState<number>(450);
  const [error, setError] = useState<IErrorForm>({ show: false, message: '' });

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

  const handleOnChange = (key: string, value: string | number) => {
    setMatch(prev => ({ ...prev, [key]: value }));
  };

  const handleSelectField = (item: IField) => {
    setMatch(prev => ({ ...prev, field: item }));
  };

  const handleSelectDate = (date: string) => {
    setMatch(prev => ({ ...prev, date }));
  };

  const handleOnChangeDateTime = (
    mode: 'start_time' | 'end_time',
    value: string,
  ) => {
    setMatch(prev => ({ ...prev, [mode]: value }));
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

  const validateForm = () => {
    let validatedForm = { isValid: true, message: '' };
    if (match.date === '') {
      validatedForm = {
        isValid: false,
        message: 'Tanggal pertandingan harus diisi',
      };
    }
    if (match.start_time === '' || match.end_time === '') {
      validatedForm = {
        isValid: false,
        message: 'Waktu mulai dan waktu selesai harus diisi',
      };
    }
    if (match.total_field === 0) {
      validatedForm = {
        isValid: false,
        message: 'Jumlah lapangan harus diisi',
      };
    }
    if (match.field.id === '') {
      validatedForm = { isValid: false, message: 'Lapangan harus dipilih' };
    }
    if (match.participants.length === 0) {
      validatedForm = { isValid: false, message: 'Peserta harus ditambahkan' };
    }

    return validatedForm;
  };

  const onSubmit = () => {
    const { isValid, message } = validateForm();
    if (!isValid) {
      setError({ show: true, message });
      return;
    }
    const data = { ...match };
    data.id = Date.now().toString();
    addMatch(data);
    setMatch(DEFAULT_MATCH);
    backButton();
  };

  return {
    error,
    match,
    fields,
    bottomMenu,
    bottomModalHeight,
    openBottomMenu,
    handleSelectField,
    handleSelectDate,
    addParticipant,
    deleteParticipant,
    handleOnChange,
    handleOnChangeDateTime,
    onSubmit,
  };
}
