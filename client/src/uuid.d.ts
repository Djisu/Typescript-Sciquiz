declare module 'uuid' {
  /**
   * Generate a timestamp-based UUID
   * @returns {string} UUIDv1 string
   */
  export function v1(): string;

  /**
   * Generate a namespace-based UUID
   * @param {string} name - The name to hash
   * @param {string | ArrayLike<number>} namespace - The namespace
   * @returns {string} UUIDv3 string
   */
  export function v3(name: string, namespace: string | ArrayLike<number>): string;

  /**
   * Generate a random UUID
   * @param {Object} [options] - Options for the UUID generation
   * @param {number[]} [options.random] - An array of 16 numbers (0-255) to use for the UUID
   * @param {() => number[]} [options.rng] - A function that returns an array of 16 numbers (0-255)
   * @returns {string} UUIDv4 string
   */
  export function v4(options?: { random?: number[]; rng?: () => number[] }): string;

  /**
   * Generate a namespace-based UUID
   * @param {string} name - The name to hash
   * @param {string | ArrayLike<number>} namespace - The namespace
   * @returns {string} UUIDv5 string
   */
  export function v5(name: string, namespace: string | ArrayLike<number>): string;

  /**
   * The nil UUID string (all zeroes)
   * @type {string}
   */
  export const NIL: string;

  /**
   * Convert a UUID string to a byte buffer
   * @param {string} uuid - The UUID string
   * @returns {Buffer} A buffer containing the byte representation of the UUID
   */
  export function parse(uuid: string): Buffer;

  /**
   * Convert a byte buffer to a UUID string
   * @param {Buffer} buffer - The byte buffer
   * @returns {string} The UUID string
   */
  export function unparse(buffer: Buffer): string;
}




// declare module 'uuid' {
//     export function v1(): string;
//     export function v3(name: string, namespace: string | Buffer): string;
//     export function v4(options?: { random?: number[]; rng?: () => number[] }): string;
//     export function v5(name: string, namespace: string | Buffer): string;
//     export function NIL: string;
//     export function parse(uuid: string): Buffer;
//     export function unparse(buffer: Buffer): string;
//   }