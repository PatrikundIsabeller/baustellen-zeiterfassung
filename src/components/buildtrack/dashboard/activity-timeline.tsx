import {
  Camera,
  Clock3,
  Play,
} from "lucide-react";

const activities = [
  {
    icon: Play,
    title: "Max Mustermann",
    description: "Arbeitsbeginn · Baustelle Linz",
    time: "07:00",
  },
  {
    icon: Camera,
    title: "Lukas Berger",
    description: "Vorher-Foto aufgenommen",
    time: "08:15",
  },
  {
    icon: Clock3,
    title: "Anna Huber",
    description: "Pause gestartet",
    time: "12:00",
  },
];

export function ActivityTimeline() {
  return (
    <div className="space-y-5">
      {activities.map((activity) => {
        const Icon = activity.icon;

        return (
          <div
            key={activity.time + activity.title}
            className="flex items-start gap-4"
          >
            <div className="rounded-xl bg-blue-100 p-2">
              <Icon className="h-4 w-4 text-blue-700" />
            </div>

            <div className="flex-1">
              <div className="font-medium">
                {activity.title}
              </div>

              <div className="text-sm text-muted-foreground">
                {activity.description}
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              {activity.time}
            </div>
          </div>
        );
      })}
    </div>
  );
}