import type { Ace } from "ace-code";
export declare class MarkerGroup {
    private markers;
    private session;
    private id;
    MAX_MARKERS: number;
    constructor(session: Ace.EditSession);
    /**
     * Finds the first marker containing pos
     * @param {Position} pos
     * @returns Ace.MarkerGroupItem
     */
    getMarkerAtPosition(pos: any): any;
    /**
     * Comparator for Array.sort function, which sorts marker definitions by their positions
     *
     * @param {Ace.MarkerGroupItem} a first marker.
     * @param {Ace.MarkerGroupItem} b second marker.
     * @returns {number} negative number if a should be before b, positive number if b should be before a, 0 otherwise.
     */
    markersComparator(a: any, b: any): number;
    /**
     * Sets marker definitions to be rendered. Limits the number of markers at MAX_MARKERS.
     * @param {Ace.MarkerGroupItem[]} markers an array of marker definitions.
     */
    setMarkers(markers: any): void;
    update(html: any, markerLayer: any, session: any, config: any): void;
    dispose(): void;
}
