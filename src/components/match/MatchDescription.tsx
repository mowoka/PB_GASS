import { ScrollView, Text, View } from 'react-native';
import { IField } from '../../stores/useSettings';
import { IParticipant, IStatus } from '../../stores/useMatch';
import { Status } from './Status';
import { MatchDescriptionCard } from '../common/MatchDescription';

interface IMatchDescriptionProps {
  field: IField;
  status: IStatus;
  date: string;
  start_time: string;
  end_time: string;
  total_field: string;
  participants: IParticipant[];
}

export function MatchDescription({
  field,
  status,
  date,
  start_time,
  end_time,
  total_field,
  participants,
}: IMatchDescriptionProps) {
  return (
    <View className="w-full relative mt-5">
      {/* Status Badge - Positioned at Top Right */}
      <View className="absolute top-6 right-8 z-10">
        <Status status={status} />
      </View>

      {/* Match Details Card */}
      <View
        className="mx-4 bg-white rounded-2xl"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 3,
        }}
      >
        <MatchDescriptionCard
          field={field}
          date={date}
          start_time={start_time}
          end_time={end_time}
          total_field={total_field}
          participants={participants}
        />
      </View>

      {/* Participant Tags */}
      {participants.length > 0 && (
        <View className="mt-4">
          <Text className="px-4 mb-2 font-roboto-medium text-sm text-gray-600 uppercase tracking-wide">
            Komposisi Pemain
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row justify-start items-center pl-4 pb-2">
              {participants.map((item, index) => {
                return <ParticipantTagItem key={index} participant={item} />;
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

function ParticipantTagItem({ participant }: { participant: IParticipant }) {
  return (
    <View
      className="px-4 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl mx-1"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
        backgroundColor: '#1f2937',
      }}
    >
      <Text className="text-white font-roboto-bold text-sm">
        {participant.attendance} {participant.gender} •{' '}
        {participant.playerLevel.name}
      </Text>
    </View>
  );
}
