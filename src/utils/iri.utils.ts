export class IriUtils {
  public static getId(iri: string | null): number | null {
    if (!iri) {
      return null;
    }

    const matchArray: RegExpMatchArray | null = iri.match(/\d+/);

    return matchArray?.length
      ? Number(matchArray[0])
      : null;
  }
}
