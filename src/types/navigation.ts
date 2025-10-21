export interface IErrorForm {
    show: boolean;
    message: string;
}

export type RootStackParamList = {
    Home: undefined;
    Settings: undefined;
    Register: undefined;
    AddParticipant: { id: string };
    History: undefined;
    Matches: undefined;
    CreateMatch: undefined;
    MatchDetail: { id: string };
    AccountSetting: undefined;
    MatchField: undefined;
    PlayerLevel: undefined;
    Attendance: undefined;
    ConfirmAttendance: { id: string };
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
