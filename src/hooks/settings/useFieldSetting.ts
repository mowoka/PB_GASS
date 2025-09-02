import { useMemo, useState } from "react";
import { IField, useSettingStore } from "../../stores/useSettings";
import { Alert, Linking, Platform } from "react-native";

const DEFAULT_FIELD: IField = {
    id: '',
    name: '',
    link_map: '',
    address: '',
};

export function useFieldSettingHooks({ openBottomModal, onCloseBottomModal }: { openBottomModal: () => void, onCloseBottomModal: () => void }) {
    const fields = useSettingStore(state => state.fields);
    const addField = useSettingStore(state => state.setField);
    const updateField = useSettingStore(state => state.updateField);

    const [field, setField] = useState<IField>(DEFAULT_FIELD);

    const handleOnChange = (key: "name" | "link_map" | "address", value: string) => {
        setField((prev) => ({ ...prev, [key]: value }))
    }

    const EditField = (item: IField) => {
        setField(item);
        openBottomModal();
    }

    const onOpenMaps = async (item: IField) => {
        try {
            const address = item.link_map;

            if (!address) {
                Alert.alert('Error', 'No address available to open in maps');
                return;
            }

            // Encode the address for URL
            const encodedAddress = encodeURIComponent(address);

            let url: string;

            if (Platform.OS === 'ios') {
                // For iOS - try Apple Maps first, fallback to Google Maps
                url = `maps://app?q=${encodedAddress}`;

                const canOpenAppleMaps = await Linking.canOpenURL(url);

                if (!canOpenAppleMaps) {
                    // Fallback to Google Maps on iOS
                    url = `comgooglemaps://?q=${encodedAddress}`;
                    const canOpenGoogleMaps = await Linking.canOpenURL(url);

                    if (!canOpenGoogleMaps) {
                        // Fallback to web Google Maps
                        url = `https://maps.google.com/maps?q=${encodedAddress}`;
                    }
                }
            } else {
                // For Android - try Google Maps app first
                url = `geo:0,0?q=${encodedAddress}`;

                const canOpenGeoIntent = await Linking.canOpenURL(url);

                if (!canOpenGeoIntent) {
                    // Fallback to Google Maps app with specific intent
                    url = `google.navigation:q=${encodedAddress}`;
                    const canOpenGoogleMaps = await Linking.canOpenURL(url);

                    if (!canOpenGoogleMaps) {
                        // Fallback to web Google Maps
                        url = `https://maps.google.com/maps?q=${encodedAddress}`;
                    }
                }
            }

            // Open the URL
            await Linking.openURL(url);

        } catch (error) {
            console.error('Error opening maps:', error);
            Alert.alert('Error', 'Failed to open maps application');
        }
    }

    const handleSaveField = () => {
        const data = { ...field };
        if (data.id === '') {
            data.id = field.name.replace(' ', '-').toLowerCase();
            addField(data);
        } else {
            updateField(data);
        }
        onCloseBottomModal();
        setField(DEFAULT_FIELD);
    }

    const isBtnDisable = useMemo(() => {
        return field.name === '' || field.address === '' || field.link_map === '';
    }, [field]);

    return {
        fields,
        field,
        isBtnDisable,
        handleOnChange,
        handleSaveField,
        EditField,
        onOpenMaps,
    }
}