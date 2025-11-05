import { Text, TouchableOpacity, View } from 'react-native';
import { Status } from './Status';
import { Description } from './Description';
import { IMatch } from '../../stores/useMatch';
import { isDateOverCurrent } from '../../utils/func';

interface IMatchItemProps {
  match: IMatch;
  onPress: () => void;
}

export function MatchItem({ match, onPress }: IMatchItemProps) {
  const isMatchExpired = isDateOverCurrent(new Date(match.date));

  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full bg-white p-4 rounded-2xl mb-4 shadow-sm border border-gray-100"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      {/* Header Section */}
      <View className="flex-row justify-between items-start mb-3">
        {/* Date Display */}
        <View className="flex-row items-center flex-1">
          <View className="bg-gray-100 rounded-xl px-3 py-2 mr-3">
            <Text className="text-xs font-roboto-medium text-black text-center">
              {match.date}
            </Text>
          </View>
        </View>

        {/* Status Badge */}
        <Status status={isMatchExpired ? 'Terlewat' : match.status} />
      </View>

      {/* Divider */}
      <View className="w-full border-b border-gray-100 mb-3" />

      {/* Match Info Section */}
      <View className="bg-gray-100 rounded-xl p-3 mb-3">
        <View className="flex-row items-center mb-1">
          <Text className="text-lg font-ubuntu-bold text-gray-800 flex-1">
            {match.field.name}
          </Text>
        </View>

        <View className="flex-row items-center mt-1">
          <View className="bg-white rounded-lg px-2.5 py-1.5 mr-2">
            <Text className="text-xs font-roboto-bold text-gray-700">
              🕐 {match.start_time} - {match.end_time}
            </Text>
          </View>
          <View className="bg-white rounded-lg px-2.5 py-1.5">
            <Text className="text-xs font-roboto-bold text-gray-700">
              🏟️ {match.total_field} Lapangan
            </Text>
          </View>
        </View>
      </View>

      {/* Participants Section */}
      {match.participants.length > 0 && (
        <View>
          <Text className="text-xs font-roboto-bold text-gray-500 mb-2 uppercase tracking-wide">
            Peserta (
            {match.participants.reduce(
              (total, p) => total + (p.attendance || 0),
              0,
            )}{' '}
            orang)
          </Text>
          <View className="space-y-1">
            {match.participants.map((item, index) => (
              <Description key={index} number={index + 1} participant={item} />
            ))}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}
