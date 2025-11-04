import { ScrollView, Text, View } from 'react-native';
import { ToggleButton } from '../common/ToggleButton';
import { IDropdown, InputDropdown } from '../common/InputDropdown';
import { Button } from '../common/Button';
import { useCallback, useMemo, useState } from 'react';
import { IMatchType, IPlayer } from '../../stores/useMatch';
import React from 'react';

interface IMatchFormProps {
  onSubmit: (players: string[], matchType: IMatchType) => void;
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
  const [matchType, setMatchType] = useState<IMatchType>('single');
  const [playerForm, setPlayerForm] = useState<IPlayerForm>({
    ...DEFAULT_PLAYER_FORM,
  });

  const handleToggle = (isLeft: boolean) => {
    setMatchType(isLeft ? 'single' : 'double');
  };

  const handleChangePlayerForm = useCallback(
    (
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
    },
    [],
  );

  const selectedPlayerIds = useMemo(() => {
    return [
      playerForm.teamA.player1.id,
      playerForm.teamA.player2.id,
      playerForm.teamB.player1.id,
      playerForm.teamB.player2.id,
    ].filter(id => id); // Filter out default/empty selections
  }, [playerForm]);

  // All available players
  const allPlayers: IDropdown[] = useMemo(() => {
    return standbyPlayer.map(player => ({
      id: player.id,
      name: player.name,
    }));
  }, [standbyPlayer]);

  // Function to get options for a specific dropdown
  const getPlayerOptions = useCallback(
    (currentPlayerId: string) => {
      console.log({ allPlayers });
      return allPlayers.filter(
        player =>
          !selectedPlayerIds.includes(player.id) ||
          player.id === currentPlayerId,
      );
    },
    [allPlayers, selectedPlayerIds],
  );

  const handleSubmit = () => {
    const temp_players: string[] = [];

    if (playerForm.teamA.player1.id) {
      temp_players.push(playerForm.teamA.player1.id.toString());
    }
    if (isMatchDouble && playerForm.teamA.player2.id) {
      temp_players.push(playerForm.teamA.player2.id.toString());
    }
    if (playerForm.teamB.player1.id) {
      temp_players.push(playerForm.teamB.player1.id.toString());
    }
    if (isMatchDouble && playerForm.teamB.player2.id) {
      temp_players.push(playerForm.teamB.player2.id.toString());
    }

    onSubmit(temp_players, matchType);
    setPlayerForm({ ...DEFAULT_PLAYER_FORM });
  };

  const isMatchDouble = useMemo(() => matchType === 'double', [matchType]);

  const isButtonDisabled = useMemo(() => {
    if (isMatchDouble) {
      return (
        !playerForm.teamA.player1.id ||
        !playerForm.teamA.player2.id ||
        !playerForm.teamB.player1.id ||
        !playerForm.teamB.player2.id
      );
    } else {
      return !playerForm.teamA.player1.id || !playerForm.teamB.player1.id;
    }
  }, [isMatchDouble, playerForm]);

  return (
    <View className="flex-1">
      <ToggleButton
        leftLabel="Single"
        rightLabel="Double"
        defaultActive="left"
        onToggle={handleToggle}
      />
      <View className="mt-3">
        <Dropdown
          team="teamA"
          playerKey="player1"
          item={playerForm.teamA.player1}
          onChange={handleChangePlayerForm}
          options={getPlayerOptions(playerForm.teamA.player1.id)}
        />
        {isMatchDouble && (
          <Dropdown
            team="teamA"
            playerKey="player2"
            item={playerForm.teamA.player2}
            onChange={handleChangePlayerForm}
            options={getPlayerOptions(playerForm.teamA.player2.id)}
            inputClass="mt-2"
          />
        )}
        <View className="w-full  flex flex-row justify-center items-center my-3">
          <View className="flex-1 border-[1px] border-black" />
          <Text className="font-roboto-medium text-base px-5">VS</Text>
          <View className="flex-1 border-[1px] border-black" />
        </View>
        <Dropdown
          team="teamB"
          playerKey="player1"
          item={playerForm.teamB.player1}
          onChange={handleChangePlayerForm}
          options={getPlayerOptions(playerForm.teamB.player1.id)}
        />
        {isMatchDouble && (
          <Dropdown
            team="teamB"
            playerKey="player2"
            item={playerForm.teamB.player2}
            onChange={handleChangePlayerForm}
            options={getPlayerOptions(playerForm.teamB.player2.id)}
            inputClass="mt-2"
          />
        )}
        <Button
          isBtnDisable={isButtonDisabled}
          btnText="Bertanding"
          onPress={handleSubmit}
          btnClass="mt-3"
        />
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

const Dropdown = React.memo(
  ({
    team,
    playerKey,
    item,
    options,
    inputClass,
    onChange,
  }: {
    team: 'teamA' | 'teamB';
    playerKey: 'player1' | 'player2';
    item: IDropdown;
    options: IDropdown[];
    inputClass?: string;
    onChange: (
      type: 'teamA' | 'teamB',
      player: 'player1' | 'player2',
      value: IDropdown,
    ) => void;
  }) => {
    return (
      <InputDropdown
        value={item}
        onChange={selectedItem => onChange(team, playerKey, selectedItem)}
        placeholder="Pilih peserta"
        inputClass={inputClass}
        options={options}
      />
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if item, options length, or inputClass changed
    return (
      prevProps.item.id === nextProps.item.id &&
      prevProps.item.name === nextProps.item.name &&
      prevProps.options.length === nextProps.options.length &&
      prevProps.inputClass === nextProps.inputClass &&
      prevProps.team === nextProps.team &&
      prevProps.playerKey === nextProps.playerKey
    );
  },
);
