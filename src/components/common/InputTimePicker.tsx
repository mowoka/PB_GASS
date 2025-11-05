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
  const hasValue = value && value !== '';

  return (
    <View className="flex-1">
      <Text className="font-roboto-semi-bold text-sm text-gray-700 mb-2">
        {label}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        className={cn(
          'w-full border rounded-xl p-4 min-h-[52px] flex flex-row justify-between items-center',
          hasValue ? 'bg-white border-gray-300' : 'bg-gray-50 border-gray-200',
        )}
      >
        <Text
          className={cn(
            'font-roboto-medium text-base',
            hasValue ? 'text-gray-800' : 'text-gray-400',
          )}
        >
          {hasValue ? value : '--:--'}
        </Text>
        <Text className="text-gray-400 ml-2">🕐</Text>
      </TouchableOpacity>
    </View>
  );
}
