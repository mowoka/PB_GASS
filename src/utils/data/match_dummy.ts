import { IMatch } from "../../stores/useMatch";

export const MATH_DUMMY: IMatch = {
    id: 'match__01',
    date: '27 September 2025',
    start_time: '08:00',
    end_time: '10:00',
    field: { id: 'gor-mbs', name: 'GOR MBS', link_map: 'https://maps.app.goo.gl/3sgcaB8cLmduuRKq5', address: '7977+VWH, Jongke Tengah, Sendangadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55285' },
    total_field: 2,
    status: 'Mendatang',
    participants: [
        {
            id: 'participant__01',
            playerLevel: { id: 'menengah-atas', name: 'Menengah Atas' },
            gender: 'Cowo',
            attendance: 8,
            players: [
                { id: 1, name: 'Giofanny' },
                { id: 2, name: 'Player 2' },
                { id: 3, name: 'Player 3' },
                { id: 4, name: 'Player 4' },
                { id: 5, name: 'Player 5' },
                { id: 6, name: 'Player 6' },
                { id: 7, name: 'Player 7' },
                { id: 8, name: 'Player 8' },
            ],
        },
        {
            id: 'participant__03',
            playerLevel: { id: 'all-level', name: 'All Level' },
            gender: 'Cewe',
            attendance: 6,
            players: [
                { id: 1, name: 'Player 9' },
                { id: 2, name: 'Player 10' },
                { id: 3, name: 'Player 11' },
                { id: 4, name: 'Player 12' },
                { id: 5, name: 'Player 13' },
                { id: 6, name: 'Player 14' },
            ],
        },
    ],
}