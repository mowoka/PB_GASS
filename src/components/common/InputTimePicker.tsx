import { Text, TouchableOpacity, View } from 'react-native';
import { cn, getTime } from '../../utils/func';
import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface InputTimePickerProps {
  inputClass: string;
  onChange: (mode: 'start_time' | 'end_time', value: string) => void;
}

export function InputTimePicker({
  inputClass,
  onChange,
}: InputTimePickerProps) {
  const [mode, setMode] = useState<'start_time' | 'end_time'>('start_time');
  const [time, setTime] = useState<{ start_time?: Date; end_time?: Date }>({
    start_time: undefined,
    end_time: undefined,
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <View
      className={cn(
        'w-full flex flex-row justify-between items-center',
        inputClass,
      )}
    >
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        locale="id_ID"
        onConfirm={date => {
          setTime(prev => ({
            ...prev,
            [mode]: date,
          }));
          onChange(mode, getTime(date));
          hideDatePicker();
        }}
        onCancel={hideDatePicker}
      />
      <InputTime
        label="Waktu Mulai"
        value={getTime(time.start_time)}
        onPress={() => {
          setMode('start_time');
          showDatePicker();
        }}
      />
      <View className="w-10 h-full" />
      <InputTime
        label="Waktu Selesai"
        value={getTime(time.end_time)}
        onPress={() => {
          setMode('end_time');
          showDatePicker();
        }}
      />
    </View>
  );
}

function InputTime({
  label,
  value,
  onPress,
}: {
  label: string;
  value?: string;
  onPress: () => void;
}) {
  return (
    <View className="flex-1">
      <Text className="font-roboto-bold text-base">{label}</Text>
      <View className="mt-2">
        <TouchableOpacity
          onPress={onPress}
          className="w-full border border-primary-gray rounded-md p-3 min-h-[47px]"
        >
          <Text className="font-roboto-semi-bold text-black">{value}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
