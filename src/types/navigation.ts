export type RootStackParamList = {
    Home: undefined;
    Settings: undefined;
    Register: undefined;
    History: undefined;
    CreateMatch: undefined;
    Matches: undefined;
    AccountSetting: undefined;
    MatchField: undefined;
    PlayerLevel: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
