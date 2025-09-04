import { IMatch } from "../../stores/useMatch";

export const MATH_DUMMY: IMatch = {
    id: Date.now().toString(),
    date: '6 September 2025',
    start_time: '08:00',
    end_time: '10:00',
    field: { id: 'gor-mbs', name: 'GOR MBS', link_map: 'https://maps.app.goo.gl/3sgcaB8cLmduuRKq5', address: '7977+VWH, Jongke Tengah, Sendangadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55285' },
    total_field: 2,
    status: 'Mendatang',
    participants: [
        {
            id: (Date.now() + 1).toString(),
            playerLevel: { id: 'menengah-atas', name: 'Menengah Atas' },
            gender: 'Cowo',
            attendance: 8,
        },
        {
            id: (Date.now() + 2).toString(),
            playerLevel: { id: 'all-level', name: 'All Level' },
            gender: 'Cowo',
            attendance: 4,
        },
        {
            id: (Date.now() + 3).toString(),
            playerLevel: { id: 'all-level', name: 'All Level' },
            gender: 'Cewe',
            attendance: 6,
        },
    ],
}