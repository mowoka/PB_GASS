import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  View,
} from 'react-native';

// Asset
import SportBuilding from '../../assets/icons/sport-building.png';
import Schedule from '../../assets/icons/schedule.png';
import Time from '../../assets/icons/time.png';
import Person from '../../assets/icons/person.png';
import AddressIcon from '../../assets/icons/address.png';
import { IField } from '../../stores/useSettings';
import { IParticipant, IStatus } from '../../stores/useMatch';
import { getTotalParticipants } from '../../utils/func';
import { Status } from './Status';

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
      <View className="p-5">
        <Cotent
          icon={SportBuilding}
          name={`${field.name} (${total_field} Lapangan)`}
        />
        <Cotent icon={Schedule} name={date} />
        <Cotent icon={Time} name={`${start_time} - ${end_time}`} />
        <Cotent
          icon={Person}
          name={`${getTotalParticipants(participants)} Pemain`}
        />
        <Cotent icon={AddressIcon} name={field.address} />
      </View>
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

function Cotent({ icon, name }: { icon: ImageSourcePropType; name: string }) {
  return (
    <View className="w-full flex flex-row justify-start items-start mb-2">
      <Image
        source={icon}
        width={48}
        height={48}
        className="w-[18px] h-[18px] mt-0.5"
      />
      <View className="ml-2">
        <Text className="text-md font-roboto-regular">{name}</Text>
      </View>
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
