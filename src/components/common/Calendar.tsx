import { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from 'react-native-ui-datepicker';
import { Button } from './Button';

export function Calendar() {
  const defaultStyles = useDefaultStyles();
  const [selected, setSelected] = useState<DateType>();
  return (
    <View className="flex-1">
      <DateTimePicker
        mode="single"
        date={selected}
        onChange={({ date }) => setSelected(date)}
        styles={defaultStyles}
      />
      <Button
        isBtnDisable={false}
        btnText="Simpan"
        onPress={() => console.log({ selected: selected?.toString() })}
      />
    </View>
  );
}
