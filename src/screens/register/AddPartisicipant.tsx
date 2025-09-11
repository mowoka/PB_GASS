import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { useAddParticipantHooks } from '../../hooks/register/useAddParticipant';
import { ScrollView, View } from 'react-native';
import { MatchDescriptionCard } from '../../components/common/MatchDescription';
import { Participan } from '../../components/register/Participant';

type AddParticipantScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddParticipant'
>;

interface Props {
  navigation: AddParticipantScreenNavigationProp;
}

export default function AddParticipant({ navigation }: Props) {
  const { match } = useAddParticipantHooks({
    id:
      navigation
        .getState()
        .routes.find(route => route.name === 'AddParticipant')?.params?.id ??
      '',
  });

  return (
    <Layout safeView={true}>
      <Header
        title={match.field.name}
        hideBackButton={false}
        onPress={() => navigation.goBack()}
      />
      <ScrollView className="flex-1">
        <View className="flex-1">
          <MatchDescriptionCard
            date={match.date}
            start_time={match.start_time}
            end_time={match.end_time}
            field={match.field}
            total_field={match.total_field.toString()}
            participants={match.participants}
          />
          {match.participants.map((item, index) => {
            return <Participan key={index} participant={item} />;
          })}
        </View>
      </ScrollView>
    </Layout>
  );
}
