/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/
//My S:
function humanReadable(seconds) {
  let Secs = seconds % 60;
   if (Secs < 10) {
    Secs = `0${Secs}`;
  }
  let Mins =Math.floor((seconds / 60) % 60);
  if (Mins < 10) {
    Mins = `0${Mins}`;
  }
  let Hours = Math.floor(seconds / 3600);
  if (Hours < 10) {
    Hours = `0${Hours}`;
  }
  return `${Hours}:${Mins}:${Secs}`;
}
//S2:
function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(t) {
    t = Math.floor(t).toString();
    return t.length == 1 ? '0' + t: t;
  }).join(':');
}
