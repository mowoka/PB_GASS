import { Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface CheckboxProps {
  onPress: (value: boolean) => void;
  value: boolean;
  text?: string;
}

export function Checkbox({ onPress, text, value }: CheckboxProps) {
  return (
    <BouncyCheckbox
      size={25}
      fillColor="black"
      unFillColor="white"
      onPress={onPress}
      iconStyle={{ borderRadius: 8 }}
      innerIconStyle={{ borderRadius: 8 }}
      isChecked={value}
      textComponent={
        <Text className="ml-3 font-roboto-regular text-base">{text}</Text>
      }
      useBuiltInState={true}
    />
  );
}
