
import { Question } from './types';

export const SD_SUBJECTS: string[] = [
  "Matematika", "Bahasa Indonesia", "IPA", "IPS", "PPKn", 
  "Pendidikan Agama Islam", "Akidah Akhlak", "Fikih", 
  "Sejarah Kebudayaan Islam", "Bahasa Arab", "Ke-NU-an", 
  "Pendidikan Muhammadiyah", "Bahasa Daerah", "Seni Budaya", "PJOK", 
  "Pengetahuan Umum", "Cerdas Cermat"
];

export const SMP_SUBJECTS: string[] = [
  "Matematika", "Bahasa Indonesia", "Bahasa Inggris", "IPA", "IPS", "PPKn", 
  "Pendidikan Agama Islam", "Akidah Akhlak", "Fikih", 
  "SKI", "Bahasa Arab", "Ke-NU-an", "Kemuhammadiyahan", "Informatika", 
  "Seni Budaya", "PJOK", "Sejarah Nasional", "Pengetahuan Umum"
];

export const SMA_SUBJECTS: string[] = [
  "Matematika", "Bahasa Indonesia", "Bahasa Inggris", "Fisika", "Kimia", 
  "Biologi", "Ekonomi", "Geografi", "Sejarah", "Sosiologi", "PPKn", 
  "Pendidikan Agama Islam", "Akidah Akhlak", "Fikih", 
  "SKI", "Bahasa Arab", "Ke-NU-an", "Kemuhammadiyahan", "Informatika", 
  "Pengetahuan Umum", "Olimpiade Sekolah"
];

export const SAMPLE_QUESTIONS: Record<string, Question[]> = {
  "Matematika": [
    { id: "m1", question: "Hasil dari (25 x 4) + (150 : 3) - 15 adalah...", options: ["135", "145", "155", "165"], correctAnswer: 0 },
    { id: "m2", question: "Akar pangkat tiga dari 2197 adalah...", options: ["11", "13", "17", "19"], correctAnswer: 1 },
    { id: "m3", question: "Himpunan penyelesaian dari x^2 - 5x + 6 = 0 adalah...", options: ["{1, 6}", "{2, 3}", "{-2, -3}", "{1, 5}"], correctAnswer: 1 },
    { id: "m4", question: "Nilai dari cos 60 derajat adalah...", options: ["0", "1/2", "1/2√2", "1/2√3"], correctAnswer: 1 },
    { id: "m5", question: "Jika 3x + 2y = 12 dan x - y = 4, maka nilai x + y adalah...", options: ["2", "4", "6", "8"], correctAnswer: 1 }
  ],
  "Fisika": [
    { id: "f1", question: "Sebuah benda jatuh bebas dari ketinggian 20m. Kecepatan benda saat menyentuh tanah adalah... (g=10m/s2)", options: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"], correctAnswer: 1 },
    { id: "f2", question: "Partikel bermuatan positif dalam inti atom disebut...", options: ["Elektron", "Neutron", "Proton", "Positron"], correctAnswer: 2 }
  ],
  "Pendidikan Agama Islam": [
    { id: "p1", question: "Siapakah Khalifah yang dijuluki Dzun Nurain?", options: ["Abu Bakar", "Umar bin Khattab", "Utsman bin Affan", "Ali bin Abi Thalib"], correctAnswer: 2 },
    { id: "p2", question: "Surah dalam Al-Quran yang tidak diawali dengan Basmalah adalah...", options: ["At-Taubah", "Al-Kahfi", "Yasin", "Al-Mulk"], correctAnswer: 0 }
  ],
  "Ke-NU-an": [
    { id: "nu1", question: "Gelar Hadratussyaikh diberikan kepada pendiri NU yaitu...", options: ["KH Wahid Hasyim", "KH Bisri Syansuri", "KH Hasyim Asy'ari", "KH Abdul Wahab Chasbullah"], correctAnswer: 2 }
  ],
  "default": [
    { id: "d1", question: "Berapa jumlah bulu pada sayap burung Garuda Pancasila?", options: ["8", "17", "19", "45"], correctAnswer: 1 },
    { id: "d2", question: "Siapa pencipta lagu Indonesia Raya?", options: ["WR Supratman", "Ismail Marzuki", "C. Simanjuntak", "Kusbini"], correctAnswer: 0 }
  ]
};
