export interface IErrorForm {
    show: boolean;
    message: string;
}

export type RootStackParamList = {
    Home: undefined;
    Settings: undefined;
    Register: undefined;
    AddParticipant: { id: string };
    Matches: undefined;
    CreateMatch: undefined;
    MatchDetail: { id: string };
    AccountSetting: undefined;
    MatchField: undefined;
    PlayerLevel: undefined;
    Attendance: undefined;
    ConfirmAttendance: { id: string };
    Payment: undefined;
    ConfirmPayment: { id: string };
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
