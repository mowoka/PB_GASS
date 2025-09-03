import { Image, Text, TouchableOpacity, View } from 'react-native';
import { cn } from '../../utils/func';

// Asset
import Add from '../../assets/icons/add.png';
import Delete from '../../assets/icons/delete.png';
import { IParticipant } from '../../stores/useMatch';

interface IParticipanInputProps {
  label: string;
  inputClass?: string;
  onAddParticipant: () => void;
  participants: IParticipant[];
  onDeleteParticipant: (id: string) => void;
}

export function ParticipanInput({
  label,
  inputClass,
  participants,
  onAddParticipant,
  onDeleteParticipant,
}: IParticipanInputProps) {
  return (
    <View className={cn(`w-full`, inputClass)}>
      <View className="flex flex-row justify-start items-center">
        <Text className="font-roboto-bold text-base">{label}</Text>
        <TouchableOpacity className="ml-3" onPress={onAddParticipant}>
          <Image
            width={48}
            height={48}
            source={Add}
            className="w-[25px] h-[25px]"
          />
        </TouchableOpacity>
      </View>
      <View className="mt-5">
        {participants.map((item, index) => {
          return (
            <ParticipanItem
              number={index + 1}
              key={index}
              participant={item}
              onDelete={() => onDeleteParticipant(item.id)}
            />
          );
        })}
      </View>
    </View>
  );
}

function ParticipanItem({
  number,
  participant,
  onDelete,
}: {
  number: number;
  participant: IParticipant;
  onDelete: () => void;
}) {
  return (
    <View className="flex flex-row justify-between items-center border border-primary-gray p-3 rounded-lg mb-3">
      <Text className="font-roboto-bold">{`${number}. ${participant.gender} - ${participant.playerLevel.name} (${participant.attendance} Partisipan)`}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Image
          source={Delete}
          width={48}
          height={48}
          className="w-[25px] h-[25px]"
        />
      </TouchableOpacity>
    </View>
  );
}
