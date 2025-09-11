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
    <View className="w-full relative">
      <View className="absolute top-0 right-10">
        <View className="w-[120px] h-[60px] bg-white border-b-2 border-l-2 border-r-2 border-primary-gray rounded-b-lg flex justify-center items-center px-2">
          <Status status={status} />
        </View>
      </View>
      <MatchDescriptionCard
        field={field}
        date={date}
        start_time={start_time}
        end_time={end_time}
        total_field={total_field}
        participants={participants}
      />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row justify-center items-center pl-4">
          {participants.map((item, index) => {
            return <ParticipantTagItem key={index} participant={item} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

function ParticipantTagItem({ participant }: { participant: IParticipant }) {
  return (
    <View className="px-3 py-2 bg-black rounded-md mx-1">
      <Text className="text-white font-roboto-bold">{`${participant.attendance} ${participant.gender} ${participant.playerLevel.name}`}</Text>
    </View>
  );
}
