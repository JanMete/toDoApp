export function getSubHeading(numberOfTasks: number) {
  switch (true) {
    case numberOfTasks > 4:
      return `${numberOfTasks} zadań`;
    case numberOfTasks > 1:
      return `${numberOfTasks} zadania`;
    case numberOfTasks === 1:
      return `${numberOfTasks} zadanie`;
    case numberOfTasks === 0:
      return `Brak zadań`;
  }
}
