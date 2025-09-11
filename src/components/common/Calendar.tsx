import { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from 'react-native-ui-datepicker';
import { Button } from './Button';
import { format } from 'date-fns';

interface ICalendarProps {
  onPress: (value?: string) => void;
}

export function Calendar({ onPress }: ICalendarProps) {
  const defaultStyles = useDefaultStyles();
  const [selected, setSelected] = useState<DateType>();
  return (
    <View className="flex-1">
      <DateTimePicker
        mode="single"
        date={selected}
        onChange={({ date }) => {
          setSelected(date);
        }}
        styles={defaultStyles}
      />
      <Button
        isBtnDisable={selected === undefined}
        btnText="Simpan"
        onPress={() => {
          const date = selected?.toString();
          if (date === undefined) return;
          const d = format(date, 'dd MMMM yyyy');
          onPress(d);
        }}
      />
    </View>
  );
}
