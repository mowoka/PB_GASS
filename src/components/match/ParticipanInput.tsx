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
      {label && (
        <View className="flex flex-row justify-start items-center mb-3">
          <Text className="font-roboto-bold text-base">{label}</Text>
        </View>
      )}

      {/* Add Participant Button */}
      <TouchableOpacity
        className="bg-primary-red rounded-xl p-4 flex flex-row justify-center items-center mb-4 shadow-sm active:opacity-80"
        onPress={onAddParticipant}
        activeOpacity={0.7}
      >
        <Image
          width={24}
          height={24}
          source={Add}
          className="w-[24px] h-[24px] mr-2"
        />
        <Text className="font-roboto-bold text-base text-white">
          Tambah Partisipan
        </Text>
      </TouchableOpacity>

      {/* Participants List */}
      <View>
        {participants.length === 0 ? (
          <View className="bg-gray-50 rounded-xl p-6 border border-dashed border-gray-300">
            <Text className="font-roboto-medium text-sm text-center text-gray-500">
              Belum ada partisipan yang ditambahkan
            </Text>
            <Text className="font-roboto text-xs text-center text-gray-400 mt-1">
              Klik tombol di atas untuk menambahkan
            </Text>
          </View>
        ) : (
          <View>
            <Text className="font-roboto-semi-bold text-xs text-gray-500 mb-2">
              {participants.length} Kategori Partisipan
            </Text>
            {participants.map((item, index) => {
              return (
                <ParticipanItem
                  number={index + 1}
                  key={item.id}
                  participant={item}
                  onDelete={() => onDeleteParticipant(item.id)}
                />
              );
            })}
          </View>
        )}
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
  const genderIcon = participant.gender === 'Cowo' ? '👨' : '👩';
  const genderBgColor =
    participant.gender === 'Cowo' ? 'bg-blue-50' : 'bg-pink-50';
  const genderTextColor =
    participant.gender === 'Cowo' ? 'text-blue-700' : 'text-pink-700';
  const genderBorderColor =
    participant.gender === 'Cowo' ? 'border-blue-200' : 'border-pink-200';

  return (
    <View
      className={`flex flex-row justify-between items-center ${genderBgColor} border ${genderBorderColor} p-4 rounded-xl mb-3 shadow-sm`}
    >
      <View className="flex-1 flex flex-row items-center">
        {/* Number Badge */}
        <View className="bg-white w-8 h-8 rounded-full flex items-center justify-center mr-3 border border-gray-200">
          <Text className="font-roboto-bold text-xs text-gray-700">
            {number}
          </Text>
        </View>

        {/* Participant Info */}
        <View className="flex-1">
          <View className="flex flex-row items-center mb-1">
            <Text
              className={`font-roboto-bold text-sm ${genderTextColor} mr-2`}
            >
              {genderIcon} {participant.gender}
            </Text>
            <View
              className={`${genderBgColor} px-2 py-1 rounded-md border ${genderBorderColor}`}
            >
              <Text
                className={`font-roboto-semi-bold text-xs ${genderTextColor}`}
              >
                {participant.playerLevel.name}
              </Text>
            </View>
          </View>
          <Text className="font-roboto-medium text-xs text-gray-600">
            🎯 {participant.attendance} Partisipan
          </Text>
        </View>
      </View>

      {/* Delete Button */}
      <TouchableOpacity
        onPress={onDelete}
        className="bg-red-100 w-9 h-9 rounded-lg flex items-center justify-center ml-2 active:bg-red-200"
        activeOpacity={0.7}
      >
        <Image
          source={Delete}
          width={20}
          height={20}
          className="w-[20px] h-[20px]"
        />
      </TouchableOpacity>
    </View>
  );
}
