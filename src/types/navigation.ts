export type RootStackParamList = {
    Home: undefined;
    Settings: undefined;
    Register: undefined;
    History: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
