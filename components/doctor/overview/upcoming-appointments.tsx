import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const appointments = [
  {
    id: "1",
    patientName: "Olivia Johnson",
    date: "2023-06-15",
    time: "09:00 AM",
    type: "Check-up",
  },
  {
    id: "2",
    patientName: "William Davis",
    date: "2023-06-15",
    time: "10:30 AM",
    type: "Follow-up",
  },
  {
    id: "3",
    patientName: "Emma Wilson",
    date: "2023-06-15",
    time: "02:00 PM",
    type: "Consultation",
  },
  {
    id: "4",
    patientName: "James Brown",
    date: "2023-06-16",
    time: "11:00 AM",
    type: "Check-up",
  },
  {
    id: "5",
    patientName: "Sophia Lee",
    date: "2023-06-16",
    time: "03:30 PM",
    type: "Follow-up",
  },
];

export function UpcomingAppointments() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Patient Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments.map((appointment) => (
          <TableRow key={appointment.id}>
            <TableCell className="font-medium">
              {appointment.patientName}
            </TableCell>
            <TableCell>{appointment.date}</TableCell>
            <TableCell>{appointment.time}</TableCell>
            <TableCell>{appointment.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
