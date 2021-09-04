import { Certificate, CertificateContext } from "../Context/certificate";

export const users = [
  {
    id: 0,
    login: "testLogin@mail.ru",
    name: ["Солдатов", "Алексей", "Алексеевич"],
    token: "testToken",
  },
  {
    id: 1,
    login: "d@mail.ru",
    name: ["Ктотов", "Ктото", "Ктотович"],
    token: "testToken",
  },
];

export const certificates = [
  {
    id: 0,
    number: "08-09270-7321897",
    fullName: ["Солдатов", "Алексей", "Алексеевич"],
    direction: "Frontend",
    dateFinish: "01.09.2021",
    dateStart: "05.07.2021",
    features: [
      {
        id: 0,
        name: "Context",
      },
      {
        id: 1,
        name: "Material UI",
      },
    ],
  },
  {
    id: 1,
    number: "00-00000-0000000",
    fullName: ["Ктотов", "Ктото", "Ктотович"],
    direction: "Frontend",
    dateFinish: "01.09.2021",
    dateStart: "05.07.2021",
    features: [
      {
        id: 0,
        name: "Context",
      },
      {
        id: 1,
        name: "Material UI",
      },
    ],
  },
];

export const courses = [
  {
    id: 0,
    direction: "Design",
    form: "очная",
    valueDate: "summer",
    dateFinish: "30.08.2021",
    dateStart: "01.07.2021",
    teacher: ["Щелкунова", "Юлия", "Сергеевна"],
    study: [
      {
        id: 0,
        name: "Создание макетов и прототипов Web и Мобильных приложений для платформы ios, Android и Figma",
      },
      {
        id: 1,
        name: "Изучение UXPin, практическое применение полученных знаний",
      },
    ],
  },
  {
    id: 1,
    direction: "Design",
    form: "очная",
    valueDate: "autumn",
    dateFinish: "30.12.2021",
    dateStart: "01.10.2021",
    teacher: ["Климова", "Юлия", "Сергеевна"],
    study: [
      {
        id: 0,
        name: "Создание макетов и прототипов Web и Мобильных приложений для платформы ios, Android и Figma",
      },
      {
        id: 1,
        name: "Изучение UXPin, практическое применение полученных знаний",
      },
    ],
  },
];
