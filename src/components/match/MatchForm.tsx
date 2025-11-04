import { ScrollView, Text, View } from 'react-native';
import { ToggleButton } from '../common/ToggleButton';
import { IDropdown, InputDropdown } from '../common/InputDropdown';
import { Button } from '../common/Button';
import { useState } from 'react';
import { IPlayer } from '../../stores/useMatch';

interface IMatchFormProps {
  onSubmit: () => void;
  standbyPlayer: IPlayer[];
}

interface IPlayerForm {
  teamA: {
    player1: IDropdown;
    player2: IDropdown;
  };
  teamB: {
    player1: IDropdown;
    player2: IDropdown;
  };
}

const DEFAULT_PARTICIPANT: IDropdown = { id: '', name: '' };
const DEFAULT_PLAYER_FORM: IPlayerForm = {
  teamA: {
    player1: DEFAULT_PARTICIPANT,
    player2: DEFAULT_PARTICIPANT,
  },
  teamB: {
    player1: DEFAULT_PARTICIPANT,
    player2: DEFAULT_PARTICIPANT,
  },
};

export function MatchForm({ onSubmit, standbyPlayer }: IMatchFormProps) {
  const [matchType, setMatchType] = useState<'single' | 'double'>('single');
  const [playerForm, setPlayerForm] = useState<IPlayerForm>({
    ...DEFAULT_PLAYER_FORM,
  });

  const handleToggle = (isLeft: boolean) => {
    setMatchType(isLeft ? 'single' : 'double');
  };

  const handleChangePlayerForm = (
    type: 'teamA' | 'teamB',
    player: 'player1' | 'player2',
    value: IDropdown,
  ) => {
    setPlayerForm(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [player]: value,
      },
    }));
  };

  const isMatchDouble = matchType === 'double';

  // Get all selected player IDs
  const selectedPlayerIds = [
    playerForm.teamA.player1.id,
    playerForm.teamA.player2.id,
    playerForm.teamB.player1.id,
    playerForm.teamB.player2.id,
  ].filter(id => id !== 0); // Filter out default/empty selections

  // Filter out already selected players
  const playerOptions = standbyPlayer
    .filter(player => !selectedPlayerIds.includes(player.id))
    .map(player => ({
      id: player.id,
      name: player.name,
    }));

  console.log({ playerForm });

  return (
    <View className="flex-1">
      <ToggleButton
        leftLabel="Single"
        rightLabel="Double"
        defaultActive="left"
        onToggle={handleToggle}
      />
      <View className="mt-3">
        <InputDropdown
          value={playerForm.teamA.player1}
          onChange={item => handleChangePlayerForm('teamA', 'player1', item)}
          placeholder="Pilih peserta"
          options={playerOptions}
        />
        {isMatchDouble && (
          <InputDropdown
            value={playerForm.teamA.player2}
            onChange={item => handleChangePlayerForm('teamA', 'player2', item)}
            placeholder="Pilih peserta"
            inputClass=" mt-2"
            options={playerOptions}
          />
        )}
        <View className="w-full  flex flex-row justify-center items-center my-3">
          <View className="flex-1 border-[1px] border-black" />
          <Text className="font-roboto-medium text-base px-5">VS</Text>
          <View className="flex-1 border-[1px] border-black" />
        </View>
        <InputDropdown
          value={playerForm.teamB.player1}
          onChange={item => handleChangePlayerForm('teamB', 'player1', item)}
          placeholder="Pilih peserta"
          options={playerOptions}
        />
        {isMatchDouble && (
          <InputDropdown
            value={playerForm.teamB.player2}
            onChange={item => handleChangePlayerForm('teamB', 'player2', item)}
            placeholder="Pilih peserta"
            inputClass=" mt-2"
            options={playerOptions}
          />
        )}
        <Button btnText="Bertanding" onPress={onSubmit} btnClass="mt-3" />
      </View>
      <View className="mt-3 flex-1">
        <View className="border-b border-black py-2">
          <Text className="font-ubuntu-medium text-base">Standby Pemain</Text>
        </View>
        <View className="flex flex-row justify-between items-center mt-3">
          <Text className="font-roboto-medium text-sm">Nama Pemain</Text>
          <Text className="font-roboto-medium text-sm">Total Main</Text>
        </View>
        <ScrollView
          className="flex-1 mt-2"
          showsVerticalScrollIndicator={false}
        >
          {standbyPlayer.map(player => {
            return (
              <View
                className="flex flex-row justify-between items-center py-1 pr-1"
                key={player.id}
              >
                <Text className="font-roboto-medium text-sm">
                  {player.name}
                </Text>
                <Text className="font-roboto-medium text-sm">
                  {player.total_played}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
