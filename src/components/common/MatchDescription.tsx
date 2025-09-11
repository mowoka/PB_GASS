import { View } from 'react-native';

// Asset
import SportBuilding from '../../assets/icons/sport-building.png';
import Schedule from '../../assets/icons/schedule.png';
import Time from '../../assets/icons/time.png';
import Person from '../../assets/icons/person.png';
import AddressIcon from '../../assets/icons/address.png';
import { ContentDescription } from '../common/CotentDescription';
import { IParticipant } from '../../stores/useMatch';
import { IField } from '../../stores/useSettings';
import { getTotalParticipants } from '../../utils/func';

interface IMatchDescriptionCardProps {
  field: IField;
  date: string;
  start_time: string;
  end_time: string;
  total_field: string;
  participants: IParticipant[];
}

export function MatchDescriptionCard({
  field,
  date,
  start_time,
  end_time,
  total_field,
  participants,
}: IMatchDescriptionCardProps) {
  return (
    <View className="p-5">
      <ContentDescription
        icon={SportBuilding}
        name={`${field.name} (${total_field} Lapangan)`}
      />
      <ContentDescription icon={Schedule} name={date} />
      <ContentDescription icon={Time} name={`${start_time} - ${end_time}`} />
      <ContentDescription
        icon={Person}
        name={`${getTotalParticipants(participants)} Pemain`}
      />
      <ContentDescription icon={AddressIcon} name={field.address} />
    </View>
  );
}
