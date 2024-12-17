import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentPatients = [
  {
    name: "Olivia Johnson",
    email: "olivia.johnson@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "William Davis",
    email: "william.davis@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "James Brown",
    email: "james.brown@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Sophia Lee",
    email: "sophia.lee@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
];

export function RecentPatients() {
  return (
    <div className="space-y-8">
      {recentPatients.map((patient) => (
        <div key={patient.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={patient.avatar} alt="Avatar" />
            <AvatarFallback>
              {patient.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{patient.name}</p>
            <p className="text-sm text-muted-foreground">{patient.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
