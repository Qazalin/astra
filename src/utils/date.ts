export function unixConverter(unix: number): Date {
  const date = new Date(unix * 1000);
  return date;
}

export function deltaFromUnix(unix: number): number {
  const date = new Date(unix * 1e3);
  const now = new Date();
  const delta = now.getTime() - date.getTime();
  return delta;
}

export function secondsToDays(seconds: number): number {
  const days = seconds / (60 * 60 * 24);
  return Math.round(days);
}

export function secondsToTimeFormatter(seconds: number): string {
  const days = seconds / (60 * 60 * 24);
  if (Math.round(days) !== 0) return dayFormatter(Math.round(days));
  else {
    const minutes = seconds / 60;
    if (minutes < 60) {
      return Math.round(minutes) + " minutes";
    } else {
      const hours = Math.round(minutes / 60);
      if (hours === 1) return hours + " hour";
      return hours + " hours";
    }
  }
}

export function dayFormatter(days: number): string {
  if (days === 1) {
    return "1 day";
  } else if (days > 1) {
    return `${days} days`;
  } else if (days > 30) {
    // 30 days or more
    return `${Math.round(days / 30)} months`;
  } else if (days > 365) {
    // 365 days or more
    return `${Math.round(days / 365)} years`;
  }
}
