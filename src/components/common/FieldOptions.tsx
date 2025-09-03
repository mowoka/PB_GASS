import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { IField } from '../../stores/useSettings';
import { Button } from './Button';
import { useState } from 'react';
import { cn } from '../../utils/func';

interface IFieldOptionsProps {
  options: IField[];
  onPress: (value: IField) => void;
}

const DEFAULT_FIELD: IField = {
  id: '',
  name: '',
  link_map: '',
  address: '',
};

export function FieldOptions({ options, onPress }: IFieldOptionsProps) {
  const [field, setField] = useState<IField>(DEFAULT_FIELD);

  return (
    <View className="w-full h-full flex flex-col justify-center items-center">
      <ScrollView className="flex-1 w-full">
        {options.map((item, index) => {
          return (
            <FieldItem
              key={index}
              name={item.name}
              onPress={() => setField(item)}
              isActive={field.id === item.id}
            />
          );
        })}
      </ScrollView>
      <Button
        isBtnDisable={false}
        btnText="Simpan"
        onPress={() => {
          onPress(field);
          setField(DEFAULT_FIELD);
        }}
      />
    </View>
  );
}

function FieldItem({
  name,
  onPress,
  isActive,
}: {
  name: string;
  onPress: () => void;
  isActive: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        'mb-5 w-full p-3 rounded-lg border ',
        isActive ? 'border-black' : 'border-gray-300',
      )}
    >
      <Text
        className={cn(
          isActive
            ? 'text-black font-roboto-bold'
            : 'text-gray-600 font-roboto-regular',
        )}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
