export const dateUtil = {
  selectScheduling: (
    schedule: any[] = [],
    date: string | null = null,
    collaboratorId: string | null = null
  ) => {
    let hoursAvailable: any[] = [];
    let collaboratorsDay: any[] = [];

    if (schedule.length > 0) {
      date = date || Object.keys(schedule?.[0])?.[0];
      const day = schedule.filter((sch) => Object.keys(sch)[0] === date)?.[0];

      const dayObject = day?.[date];

      if (dayObject) {
        collaboratorId = collaboratorId || Object.keys(dayObject)?.[0];
        collaboratorsDay = dayObject;
        hoursAvailable =
          collaboratorsDay?.[collaboratorId as unknown as number];
      }
    }

    return { hoursAvailable, collaboratorsDay, collaboratorId, date };
  },
  daysOfWeek: ["Dom", "Seg", "Ter", "Quar", "Qui", "Sex", "Sáb"],
};
