import { Table } from "@/components/ui/Table";
import type { IColumn } from "@/interfaces/Generic/IColumns";

export const Employees = () => {
  const columns: IColumn[] = [
    {
      id: 1,
      name: "Name",
      field: "name",
    },
    {
      id: 2,
      name: "Email",
      field: "email",
    },
    {
      id: 3,
      name: "Phone",
      field: "phone",
    },
    {
      id: 4,
      name: "Joined Date",
      field: "joinedDate",
    },
    {
      id: 5,
      name: "Status",
      field: "status",
    },
    {
      id: 6,
      name: "Actions",
      field: "action",
    },
  ];

const data = [
  { id: 1, name: "Juan Pérez", email: "juan.perez@example.com", phone: "+51 987 654 321", joinedDate: "2024-01-15", status: "Active", action: "" },
  { id: 2, name: "María López", email: "maria.lopez@example.com", phone: "+51 912 345 678", joinedDate: "2023-11-02", status: "Inactive", action: "" },
  { id: 3, name: "Carlos Ramírez", email: "carlos.ramirez@example.com", phone: "+51 955 123 456", joinedDate: "2024-03-10", status: "Pending", action: "" },
  { id: 4, name: "Ana Torres", email: "ana.torres@example.com", phone: "+51 944 888 222", joinedDate: "2022-08-21", status: "Active", action: "" },
  { id: 5, name: "Luis Mendoza", email: "luis.mendoza@example.com", phone: "+51 966 777 111", joinedDate: "2023-05-30", status: "Suspended", action: "" },

  { id: 6, name: "Pedro Castillo", email: "pedro.castillo@example.com", phone: "+51 911 222 333", joinedDate: "2023-07-11", status: "Active", action: "" },
  { id: 7, name: "Lucía Fernández", email: "lucia.fernandez@example.com", phone: "+51 922 333 444", joinedDate: "2024-02-19", status: "Pending", action: "" },
  { id: 8, name: "Jorge Silva", email: "jorge.silva@example.com", phone: "+51 933 444 555", joinedDate: "2023-10-05", status: "Active", action: "" },
  { id: 9, name: "Paola Vargas", email: "paola.vargas@example.com", phone: "+51 944 555 666", joinedDate: "2022-12-01", status: "Inactive", action: "" },
  { id: 10, name: "Ricardo Salas", email: "ricardo.salas@example.com", phone: "+51 955 666 777", joinedDate: "2023-03-22", status: "Active", action: "" },

  { id: 11, name: "Valeria Rojas", email: "valeria.rojas@example.com", phone: "+51 966 111 222", joinedDate: "2024-04-02", status: "Active", action: "" },
  { id: 12, name: "Daniel Paredes", email: "daniel.paredes@example.com", phone: "+51 977 222 333", joinedDate: "2023-01-18", status: "Suspended", action: "" },
  { id: 13, name: "Sofía Navarro", email: "sofia.navarro@example.com", phone: "+51 988 333 444", joinedDate: "2022-09-14", status: "Inactive", action: "" },
  { id: 14, name: "Diego Herrera", email: "diego.herrera@example.com", phone: "+51 999 444 555", joinedDate: "2023-06-07", status: "Active", action: "" },
  { id: 15, name: "Camila Castro", email: "camila.castro@example.com", phone: "+51 911 555 666", joinedDate: "2024-01-09", status: "Pending", action: "" },

  { id: 16, name: "Andrés Flores", email: "andres.flores@example.com", phone: "+51 922 666 777", joinedDate: "2023-08-13", status: "Active", action: "" },
  { id: 17, name: "Gabriela Ruiz", email: "gabriela.ruiz@example.com", phone: "+51 933 777 888", joinedDate: "2022-11-23", status: "Inactive", action: "" },
  { id: 18, name: "Fernando Ortiz", email: "fernando.ortiz@example.com", phone: "+51 944 888 999", joinedDate: "2023-02-17", status: "Active", action: "" },
  { id: 19, name: "Carla Medina", email: "carla.medina@example.com", phone: "+51 955 999 111", joinedDate: "2024-05-03", status: "Pending", action: "" },
  { id: 20, name: "José Vega", email: "jose.vega@example.com", phone: "+51 966 111 333", joinedDate: "2023-04-12", status: "Active", action: "" },

  { id: 21, name: "Rosa Aguilar", email: "rosa.aguilar@example.com", phone: "+51 977 222 444", joinedDate: "2023-07-29", status: "Suspended", action: "" },
  { id: 22, name: "Hugo Carranza", email: "hugo.carranza@example.com", phone: "+51 988 333 555", joinedDate: "2022-10-19", status: "Active", action: "" },
  { id: 23, name: "Natalia Peña", email: "natalia.pena@example.com", phone: "+51 999 444 666", joinedDate: "2024-02-14", status: "Active", action: "" },
  { id: 24, name: "Miguel Soto", email: "miguel.soto@example.com", phone: "+51 911 555 777", joinedDate: "2023-09-05", status: "Inactive", action: "" },
  { id: 25, name: "Patricia Núñez", email: "patricia.nunez@example.com", phone: "+51 922 666 888", joinedDate: "2024-03-18", status: "Active", action: "" },

  { id: 26, name: "Raúl Cabrera", email: "raul.cabrera@example.com", phone: "+51 933 777 999", joinedDate: "2023-06-25", status: "Pending", action: "" },
  { id: 27, name: "Claudia León", email: "claudia.leon@example.com", phone: "+51 944 888 111", joinedDate: "2022-07-12", status: "Active", action: "" },
  { id: 28, name: "Eduardo Salazar", email: "eduardo.salazar@example.com", phone: "+51 955 999 222", joinedDate: "2023-11-30", status: "Inactive", action: "" },
  { id: 29, name: "Verónica Campos", email: "veronica.campos@example.com", phone: "+51 966 111 444", joinedDate: "2024-01-28", status: "Active", action: "" },
  { id: 30, name: "Mario Valdez", email: "mario.valdez@example.com", phone: "+51 977 222 555", joinedDate: "2023-02-08", status: "Suspended", action: "" },

  { id: 31, name: "Elena Fuentes", email: "elena.fuentes@example.com", phone: "+51 988 333 666", joinedDate: "2024-04-21", status: "Active", action: "" },
  { id: 32, name: "Oscar Benítez", email: "oscar.benitez@example.com", phone: "+51 999 444 777", joinedDate: "2023-03-15", status: "Pending", action: "" },
  { id: 33, name: "Paulo Reyes", email: "paulo.reyes@example.com", phone: "+51 911 555 888", joinedDate: "2022-06-10", status: "Active", action: "" },
  { id: 34, name: "Adriana Guerra", email: "adriana.guerra@example.com", phone: "+51 922 666 999", joinedDate: "2023-12-02", status: "Inactive", action: "" },
  { id: 35, name: "Tomás Miranda", email: "tomas.miranda@example.com", phone: "+51 933 777 111", joinedDate: "2024-02-27", status: "Active", action: "" },

  { id: 36, name: "Lidia Bravo", email: "lidia.bravo@example.com", phone: "+51 944 888 333", joinedDate: "2023-01-05", status: "Suspended", action: "" },
  { id: 37, name: "Iván Rivas", email: "ivan.rivas@example.com", phone: "+51 955 999 444", joinedDate: "2023-05-17", status: "Active", action: "" },
  { id: 38, name: "Milagros Arias", email: "milagros.arias@example.com", phone: "+51 966 111 555", joinedDate: "2024-03-07", status: "Pending", action: "" },
  { id: 39, name: "Renato Ponce", email: "renato.ponce@example.com", phone: "+51 977 222 666", joinedDate: "2022-09-30", status: "Inactive", action: "" },
  { id: 40, name: "Karla Delgado", email: "karla.delgado@example.com", phone: "+51 988 333 777", joinedDate: "2023-08-09", status: "Active", action: "" },

  { id: 41, name: "Esteban Palacios", email: "esteban.palacios@example.com", phone: "+51 999 444 888", joinedDate: "2024-01-12", status: "Active", action: "" },
  { id: 42, name: "Tatiana Cárdenas", email: "tatiana.cardenas@example.com", phone: "+51 911 555 999", joinedDate: "2023-10-22", status: "Pending", action: "" },
  { id: 43, name: "Roberto Alarcón", email: "roberto.alarcon@example.com", phone: "+51 922 666 111", joinedDate: "2022-05-18", status: "Inactive", action: "" },
  { id: 44, name: "Juliana Tapia", email: "juliana.tapia@example.com", phone: "+51 933 777 222", joinedDate: "2023-06-02", status: "Active", action: "" },
  { id: 45, name: "César Peralta", email: "cesar.peralta@example.com", phone: "+51 944 888 444", joinedDate: "2024-02-11", status: "Active", action: "" },

  { id: 46, name: "Ruth Villanueva", email: "ruth.villanueva@example.com", phone: "+51 955 999 555", joinedDate: "2023-03-01", status: "Suspended", action: "" },
  { id: 47, name: "Bruno Chávez", email: "bruno.chavez@example.com", phone: "+51 966 111 666", joinedDate: "2024-04-08", status: "Active", action: "" },
  { id: 48, name: "Sandra Ochoa", email: "sandra.ochoa@example.com", phone: "+51 977 222 777", joinedDate: "2023-12-14", status: "Inactive", action: "" },
  { id: 49, name: "Alberto Zamora", email: "alberto.zamora@example.com", phone: "+51 988 333 888", joinedDate: "2022-08-04", status: "Active", action: "" },
  { id: 50, name: "Daniela Pino", email: "daniela.pino@example.com", phone: "+51 999 444 999", joinedDate: "2023-07-27", status: "Pending", action: "" },

  { id: 51, name: "Víctor Castañeda", email: "victor.castaneda@example.com", phone: "+51 911 222 111", joinedDate: "2024-01-03", status: "Active", action: "" },
  { id: 52, name: "Pamela Quispe", email: "pamela.quispe@example.com", phone: "+51 922 333 222", joinedDate: "2023-11-19", status: "Inactive", action: "" },
  { id: 53, name: "Mauricio Farfán", email: "mauricio.farfan@example.com", phone: "+51 933 444 333", joinedDate: "2022-10-08", status: "Active", action: "" },
  { id: 54, name: "Lorena Moya", email: "lorena.moya@example.com", phone: "+51 944 555 444", joinedDate: "2023-05-11", status: "Pending", action: "" },
  { id: 55, name: "Sebastián Luna", email: "sebastian.luna@example.com", phone: "+51 955 666 555", joinedDate: "2024-03-25", status: "Active", action: "" },

  { id: 56, name: "Rafael Solís", email: "rafael.solis@example.com", phone: "+51 966 777 666", joinedDate: "2023-04-03", status: "Suspended", action: "" },
  { id: 57, name: "Gloria Espinoza", email: "gloria.espinoza@example.com", phone: "+51 977 888 777", joinedDate: "2022-09-09", status: "Active", action: "" },
  { id: 58, name: "Cristian Yáñez", email: "cristian.yanez@example.com", phone: "+51 988 999 888", joinedDate: "2023-12-06", status: "Inactive", action: "" },
  { id: 59, name: "Andrea Gallardo", email: "andrea.gallardo@example.com", phone: "+51 999 111 999", joinedDate: "2024-02-01", status: "Active", action: "" },
  { id: 60, name: "Martín Olivares", email: "martin.olivares@example.com", phone: "+51 911 333 000", joinedDate: "2023-06-18", status: "Pending", action: "" }
];


  return (
    <section className="flex h-full flex-col">
      <h1 className="text-2xl font-medium">Employees</h1>
      <span className="text-sm">
        See all employees of your work and make changes
      </span>
      <Table
        columns={columns}
        data={data}
        multiSelect
        hasFilter
        onSelect={(v) => console.log(v)}
      />
    </section>
  );
};
