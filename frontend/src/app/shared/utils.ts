import {
  Observable,
  interval,
  map,
  take,
  concat,
  of,
  delay,
  ignoreElements,
} from 'rxjs';

function typeEffect(pharse: string): Observable<string> {
  const type = (args: { word: string; speed: number; backspace: boolean }) =>
    interval(args.speed).pipe(
      map((x) =>
        args.backspace
          ? args.word.substring(0, args.word.length - x - 1)
          : args.word.substring(0, x + 1)
      ),
      take(args.word.length)
    );

  return concat(
    type({ word: pharse, speed: 70, backspace: false }),
    of('').pipe(delay(1500), ignoreElements()),
    type({ word: pharse, speed: 30, backspace: true }),
    of('').pipe(delay(1500), ignoreElements())
  );
}
